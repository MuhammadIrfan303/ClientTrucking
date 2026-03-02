import React, { useState } from "react";
import {
    FaTruck,
    FaFilePdf,
    FaUpload,
    FaCheckCircle,
    FaShieldAlt,
    FaUsers,
    FaPhone,
    FaEnvelope,
    FaArrowRight,
    FaClipboardCheck,
    FaFileContract,
    FaHandshake,
    FaChartLine,
    FaBolt,
    FaMapMarkerAlt,
    FaCalendarCheck
} from "react-icons/fa";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../firebase"; // adjust path

import { uploadBytesResumable } from "firebase/storage";
import { toast, ToastContainer } from "react-toastify";
import EmailSender from "../components/EmailSender";
function CarrierSetup() {
    const CONTACT_EMAIL = "clefreight@outlook.com";
    const CONTACT_PHONE = "18624173188";

    const [uploading, setUploading] = useState(false);
    const [uploadText, setUploadText] = useState("");


    const [form, setForm] = useState({
        companyName: "",
        mcNumber: "",
        dotNumber: "",
        contactName: "",
        email: "",
        phone: "",
        equipment: {
            dryVan: false,
            reefer: false,
            flatbed: false,
            stepDeck: false,
            other: false,
        },
        lanes: "",
        agree: false,
    });

    const [files, setFiles] = useState({
        w9: null,
        insurance: null,
        carrierAgreement: null
    });

    const [status, setStatus] = useState({ type: "", message: "" });
    const [submitting, setSubmitting] = useState(false);
    const [activeStep, setActiveStep] = useState(1);



    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name in form.equipment) {
            setForm((prev) => ({
                ...prev,
                equipment: { ...prev.equipment, [name]: checked },
            }));
        } else if (type === "checkbox") {
            setForm((prev) => ({ ...prev, [name]: checked }));
        } else {
            setForm((prev) => ({ ...prev, [name]: value }));
        }
    };


    const handleFileChange = (e) => {
        const { name, files: selectedFiles } = e.target;
        const file = selectedFiles[0];

        if (file) {
            const MAX_SIZE = 4 * 1024; // 4KB in bytes

            if (file.size > MAX_SIZE) {
                toast.error("File size must not exceed 4KB.");
                setStatus({ type: "error", message: "File size must not exceed 4KB." });
                return;
            }

            if (!["application/pdf", "image/jpeg", "image/png"].includes(file.type)) {
                toast.error("Please upload PDF, JPG, or PNG files only.");
                setStatus({ type: "error", message: "Only PDF, JPG, or PNG files are allowed." });
                return;
            }
        }
        setFiles((prev) => ({ ...prev, [name]: file || null }));
    };

    const validate = () => {
        if (!form.companyName || !form.contactName || !form.email) {
            return "Company name, Contact name, and Email are required.";
        }
        if (!files.w9) {
            return "Please upload your W-9.";
        }
        if (!files.insurance) {
            return "Please upload your Insurance certificate.";
        }
        if (!files.carrierAgreement) {
            return "Please upload your Carrier Agreement certificate.";
        }

        if (!form.agree) {
            return "Please confirm and accept the onboarding terms.";
        }
        return "";
    };



    const uploadFile = (file, folder, label) => {
        return new Promise((resolve, reject) => {
            const fileRef = ref(
                storage,
                `carriers/${folder}/${Date.now()}_${file.name}`
            );

            const uploadTask = uploadBytesResumable(fileRef, file);

            setUploading(true);
            setUploadText(`Uploading ${label}...`);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setUploadText(`Uploading ${label}... ${progress}%`);
                },
                (error) => {
                    setUploading(false);
                    reject(error);
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    resolve(downloadURL);
                }
            );
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: "", message: "" });

        const err = validate();
        if (err) {
            setStatus({ type: "error", message: err });
            return;
        }

        setSubmitting(true);

        try {
            setSubmitting(true);

            const w9Url = await uploadFile(files.w9, "w9", "W-9 Document");
            const insuranceUrl = await uploadFile(
                files.insurance,
                "insurance",
                "Insurance Certificate"


            );
            const carrierAgreementUrl = await uploadFile(
                files.carrierAgreement,
                "carrierAgreement",
                "Carrier Agreement Certificate"
            );



            setUploading(false);


            // 2️⃣ Save form data in Firestore
            await addDoc(collection(db, "carriers"), {
                companyName: form.companyName,
                mcNumber: form.mcNumber,
                dotNumber: form.dotNumber,
                contactName: form.contactName,
                email: form.email,
                phone: form.phone,
                equipment: form.equipment,
                lanes: form.lanes,
                documents: {
                    w9: w9Url,
                    insurance: insuranceUrl,
                    carrierAgreement: carrierAgreementUrl,
                },
                status: "pending",
                createdAt: serverTimestamp(),
            });




            toast.success("Application submitted successfully! Our carrier relations team will contact you within 24 hours.")

            await EmailSender({
                to: import.meta.env.VITE_RECIPIENT_EMAIL,
                type: "carrier",
                subject: "New Freight Carrier Request – CLE FREIGHT LLC",
                recipientName: {
                    companyName: form.companyName,
                    contactName: form.contactName,
                    mcNumber: form.mcNumber,
                    dotNumber: form.dotNumber,
                    email: form.email,
                    phone: form.phone,
                    equipment: form.equipment,
                    lanes: form.lanes,
                    documents: {
                        w9: w9Url,
                        insurance: insuranceUrl,
                        carrierAgreement: carrierAgreementUrl,
                    },

                },
                htmlContent: `<p>Please review and respond within 1–2 business hours.</p>`
            });



            // Reset form
            setForm({
                companyName: "",
                mcNumber: "",
                dotNumber: "",
                contactName: "",
                email: "",
                phone: "",
                equipment: {
                    dryVan: false,
                    reefer: false,
                    flatbed: false,
                    stepDeck: false,
                    other: false,
                },
                lanes: "",
                agree: false,
            });

            setFiles({ w9: null, insurance: null, carrierAgreement: null });
            setActiveStep(1);

        } catch (error) {
            console.error(error);
            toast.error("Submission failed. Please try again.")
                ;
        } finally {
            setSubmitting(false);
        }
    };


    return (
        <div className="min-h-screen bg-gray-50">
            <ToastContainer />
            {/* Hero Section - Matching Requested Style */}
            <section
                className="relative w-full min-h-[400px] rounded-sm overflow-hidden bg-cover bg-center mt-6"
                style={{ backgroundImage: "url('/images/truck1.jpg')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#133866]/80 via-[#133866]/60 to-transparent" />
                <div className="relative z-10 max-w-3xl text-left text-white px-6 md:px-12 py-16 md:py-24">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-10 h-1 bg-[#4372ac]"></div>
                        <span className="text-[#4372ac] font-medium tracking-wider">BECOME A PARTNER</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                        Carrier <span className="text-[#4372ac]">Onboarding</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed">
                        Join CLE Freight's trusted network of carrier partners. Access consistent freight, competitive rates,
                        and dedicated support in a partnership built on reliability and mutual success.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-8">
                        <a
                            href="#form"
                            className="bg-[#4372ac] hover:bg-[#3a6399] text-white px-8 py-3 rounded-xl font-semibold text-lg transition duration-300"
                        >
                            Start Application
                        </a>
                        <a
                            href="#benefits"
                            className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-xl font-semibold text-lg transition duration-300"
                        >
                            View Benefits
                        </a>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-12 px-6 md:px-12 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: <FaTruck />, value: "500+", label: "Active Partners", color: "text-blue-600" },
                            { icon: <FaCheckCircle />, value: "99%", label: "On-Time Pay", color: "text-green-600" },
                            { icon: <FaUsers />, value: "24/7", label: "Dispatch", color: "text-cyan-600" },
                            { icon: <FaShieldAlt />, value: "< 48h", label: "Quick Setup", color: "text-purple-600" }
                        ].map((stat, idx) => (
                            <div key={idx} className="text-center p-4 hover:bg-gray-50 rounded-xl transition">
                                <div className={`text-3xl mb-2 ${stat.color}`}>{stat.icon}</div>
                                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* Left Column - Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-200">
                                {/* Form Header */}
                                <div className="border-b border-gray-200 p-8">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="p-3 bg-blue-50 rounded-xl">
                                            <FaClipboardCheck className="text-2xl text-blue-600" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold text-gray-900">Carrier Onboarding Form</h2>
                                            <p className="text-gray-600">Complete this form to join our network</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Progress Steps */}


                                {/* Form Body */}
                                <div className="p-8">


                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        {/* Company Information */}
                                        <div className="space-y-6">
                                            <h3 className="text-xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">Company Information</h3>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                        Company Name <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="companyName"
                                                        value={form.companyName}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        placeholder="Enter company name"
                                                        onFocus={() => setActiveStep(1)}
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                        MC Number
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="mcNumber"
                                                        value={form.mcNumber}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        placeholder="Enter MC number"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                        DOT Number
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="dotNumber"
                                                        value={form.dotNumber}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        placeholder="Enter DOT number"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                        Contact Name <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        name="contactName"
                                                        value={form.contactName}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        placeholder="Enter contact name"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                        Email Address <span className="text-red-500">*</span>
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={form.email}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        placeholder="Enter email address"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={form.phone}
                                                        onChange={handleChange}
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                        placeholder="(555) 123-4567"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Equipment & Lanes */}
                                        <div className="space-y-6">
                                            <h3 className="text-xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">Equipment & Lanes</h3>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                                    Equipment Types
                                                </label>
                                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                    {Object.entries(form.equipment).map(([key, value]) => (
                                                        <label
                                                            key={key}
                                                            className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition ${value ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                                                        >
                                                            <input
                                                                type="checkbox"
                                                                name={key}
                                                                checked={value}
                                                                onChange={handleChange}
                                                                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                                                onFocus={() => setActiveStep(2)}
                                                            />
                                                            <span className="font-medium text-gray-700">
                                                                {key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
                                                            </span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                    Preferred Lanes / Notes
                                                </label>
                                                <textarea
                                                    name="lanes"
                                                    rows={4}
                                                    value={form.lanes}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    placeholder="Describe your preferred lanes, regions, or any additional notes..."
                                                />
                                            </div>
                                        </div>

                                        {/* Documents Upload */}
                                        <div className="space-y-6">
                                            <h3 className="text-xl font-bold text-gray-900 border-l-4 border-blue-600 pl-4">Required Documents</h3>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                                        W-9 Form <span className="text-red-500">*</span>
                                                    </label>
                                                    <div className={`border-2 border-dashed rounded-xl p-6 text-center transition ${files.w9 ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-blue-400'}`}>
                                                        <FaFileContract className="text-3xl text-gray-400 mx-auto mb-3" />
                                                        <p className="text-sm text-gray-600 mb-2">
                                                            {files.w9 ? files.w9.name : "Upload W-9 Form"}
                                                        </p>
                                                        <p className="text-xs text-gray-500 mb-4">PDF, JPG, or PNG (Max 4KB)</p>
                                                        <label className="cursor-pointer">
                                                            <span className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-700 transition">
                                                                Choose File
                                                            </span>
                                                            <input
                                                                type="file"
                                                                name="w9"
                                                                accept=".pdf,.jpg,.jpeg,.png"
                                                                className="hidden"
                                                                onChange={handleFileChange}
                                                                onFocus={() => setActiveStep(3)}
                                                                required
                                                            />
                                                        </label>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                                        Insurance Certificate <span className="text-red-500">*</span>
                                                    </label>
                                                    <div className={`border-2 border-dashed rounded-xl p-6 text-center transition ${files.insurance ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-blue-400'}`}>
                                                        <FaShieldAlt className="text-3xl text-gray-400 mx-auto mb-3" />
                                                        <p className="text-sm text-gray-600 mb-2">
                                                            {files.insurance ? files.insurance.name : "Upload Insurance Certificate"}
                                                        </p>
                                                        <p className="text-xs text-gray-500 mb-4">PDF, JPG, or PNG (Max 4KB)</p>
                                                        <label className="cursor-pointer">
                                                            <span className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-700 transition">
                                                                Choose File
                                                            </span>
                                                            <input
                                                                type="file"
                                                                name="insurance"
                                                                accept=".pdf,.jpg,.jpeg,.png"
                                                                className="hidden"
                                                                onChange={handleFileChange}
                                                                required
                                                            />
                                                        </label>
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                                                        Signed Carrier Agreement<span className="text-red-500">*</span>
                                                    </label>
                                                    <div className={`border-2 border-dashed rounded-xl p-6 text-center transition ${files.carrierAgreement ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-blue-400'}`}>
                                                        <FaShieldAlt className="text-3xl text-gray-400 mx-auto mb-3" />
                                                        <p className="text-sm text-gray-600 mb-2">
                                                            {files.carrierAgreement ? files.carrierAgreement.name : "Upload Signed Carrier Agreement"}
                                                        </p>
                                                        <p className="text-xs text-gray-500 mb-4">PDF, JPG, or PNG (Max 4KB)</p>
                                                        <label className="cursor-pointer">
                                                            <span className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-700 transition">
                                                                Choose File
                                                            </span>
                                                            <input
                                                                type="file"
                                                                name="carrierAgreement"
                                                                accept=".pdf,.jpg,.jpeg,.png"
                                                                className="hidden"
                                                                onChange={handleFileChange}
                                                                required
                                                            />
                                                        </label>
                                                    </div>
                                                </div> {/* Changed from <div/> to </div> */}
                                            </div>
                                        </div>

                                        {/* Agreement */}
                                        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                                            <div className="flex items-start gap-3">
                                                <input
                                                    type="checkbox"
                                                    name="agree"
                                                    checked={form.agree}
                                                    onChange={handleChange}
                                                    className="w-5 h-5 mt-1 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                                                />
                                                <div>
                                                    <label className="font-semibold text-gray-800 mb-1 block">
                                                        Terms & Agreement
                                                    </label>
                                                    <p className="text-sm text-gray-600">
                                                        I confirm that all information provided is accurate and complete. I agree to the
                                                        onboarding terms and understand that CLE Freight will verify all submitted documents
                                                        before approval.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {uploading && (
                                            <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                                <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                                                <span className="text-blue-700 font-medium">{uploadText}</span>
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={submitting || uploading}
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg transition disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                                        >
                                            {submitting || uploading ? "Uploading..." : "Submit Application"}
                                        </button>

                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="space-y-6">
                            {/* Benefits Card */}
                            <div id="benefits" className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <FaChartLine className="text-blue-600" />
                                    Partner Benefits
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { icon: <FaHandshake className="text-green-600" />, title: "Reliable Partnerships", desc: "Long-term relationships with consistent freight" },
                                        { icon: <FaBolt className="text-yellow-600" />, title: "Quick Payments", desc: "Weekly settlements, no delays" },
                                        { icon: <FaMapMarkerAlt className="text-red-600" />, title: "Nationwide Coverage", desc: "Access to freight across all 48 states" },
                                        { icon: <FaCalendarCheck className="text-purple-600" />, title: "24/7 Support", desc: "Round-the-clock dispatch and assistance" },
                                        { icon: <FaShieldAlt className="text-blue-600" />, title: "Risk Protection", desc: "Comprehensive claims management" },
                                        { icon: <FaUsers className="text-cyan-600" />, title: "Dedicated Team", desc: "Personal account manager assigned to you" }
                                    ].map((benefit, idx) => (
                                        <div key={idx} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition">
                                            <div className="text-xl">{benefit.icon}</div>
                                            <div>
                                                <div className="font-semibold text-gray-800">{benefit.title}</div>
                                                <div className="text-sm text-gray-600">{benefit.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Contact Card */}
                            <div className="bg-gradient-to-br from-[#133866] to-[#4372ac] rounded-2xl text-white p-6 shadow-lg">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <FaPhone className="text-blue-300" />
                                    Contact Support
                                </h3>
                                <p className="text-blue-100 mb-6">
                                    Questions about the onboarding process? Our carrier relations team is here to help.
                                </p>

                                <div className="space-y-4">
                                    <a
                                        href={`mailto:${CONTACT_EMAIL}`}
                                        className="flex items-center gap-3 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition"
                                    >
                                        <FaEnvelope className="text-blue-300" />
                                        <div>
                                            <div className="font-medium">{CONTACT_EMAIL}</div>
                                            <div className="text-sm text-blue-200">Email Support</div>
                                        </div>
                                    </a>

                                    <a
                                        href="tel:5551234567"
                                        className="flex items-center gap-3 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition"
                                    >
                                        <FaPhone className="text-blue-300" />
                                        <div>
                                            <div className="font-medium">+18624173188</div>
                                            <div className="text-sm text-blue-200">Carrier Support Line</div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Download Card */}
                            {/* <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <FaFilePdf className="text-2xl text-red-600" />
                                    <h3 className="text-lg font-bold text-gray-900">Resources</h3>
                                </div>
                                <p className="text-gray-600 mb-6">
                                    Download our complete carrier packet for detailed information on requirements and benefits.
                                </p>
                                <a
                                    href="/docs/carrier-packet.pdf"
                                    download
                                    className="block text-center bg-blue-50 border border-blue-200 text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-blue-100 transition"
                                >
                                    Download Carrier Packet PDF
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-[#133866] to-[#4372ac]">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Grow Your Business?
                    </h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Join hundreds of successful carriers who trust CLE Freight for consistent loads and reliable partnerships.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="#form"
                            className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-xl font-bold text-lg transition duration-300"
                        >
                            Start Application Now
                        </a>
                        <a
                            href="tel:5551234567"
                            className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-xl font-bold text-lg transition duration-300"
                        >
                            Call Carrier Relations
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CarrierSetup;