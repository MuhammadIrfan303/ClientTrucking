import { useState } from 'react';
import { FaTruck, FaMapMarkerAlt, FaCalendarAlt, FaPhone, FaEnvelope, FaWeightHanging, FaBox, FaCheckCircle } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify'
import { db } from '../../firebase'
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import EmailSender from '../components/EmailSender';


const Quote = () => {
    const initialForm = {
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        pickupCity: '',
        pickupState: '',
        deliveryCity: '',
        deliveryState: '',
        trailerType: 'dry-van',
        weight: '',
        commodity: '',
        pickupDate: '',
        specialInstructions: ''
    };

    const [form, setForm] = useState(initialForm);
    const [recentEmail, setRecentEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    // REPLACE: mailto submission with Firestore write
    // UPDATED: use Firebase Callable Cloud Function instead of direct Firestore write
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            // 1. Save to Firestore
            await addDoc(collection(db, "quotes"), {
                ...form,
                createdAt: Timestamp.now(),
            });

            toast.success("Quote request submitted successfully!");

            // 2. Send email to ADMIN
            await EmailSender({
                to: import.meta.env.VITE_RECIPIENT_EMAIL,
                subject: "New Freight Quote Request – CLE FREIGHT LLC",
                type: "quote",
                recipientName: {
                    pickup: `${form.pickupCity}, ${form.pickupState}`,
                    delivery: `${form.deliveryCity}, ${form.deliveryState}`,
                    trailer: form.trailerType,
                    weight: form.weight,
                    commodity: form.commodity,
                    pickupDate: form.pickupDate,
                    email: form.email,
                    phone: form.phone,
                },
                htmlContent: `<p>Please review and respond within 1–2 business hours.</p>`
            });

            setSubmitted(true);
            setForm(initialForm);

        } catch (error) {
            console.error("Error:", error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };


    const states = [
        'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
        'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
        'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
        'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
        'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
    ];

    const trailerTypes = [
        { value: 'dry-van', label: 'Dry Van', icon: '📦' },
        { value: 'reefer', label: 'Reefer / Temperature Controlled', icon: '❄️' },
        { value: 'flatbed', label: 'Flatbed', icon: '🚛' },
        { value: 'step-deck', label: 'Step Deck', icon: '📐' },
        { value: 'ltl', label: 'LTL (Less Than Truckload)', icon: '📦' },
        { value: 'specialized', label: 'Specialized / Oversized', icon: '⚠️' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <ToastContainer />
            {/* Hero Section - Using Contact Page Color Scheme */}
            <section
                className="relative w-full min-h-[400px] rounded-sm overflow-hidden bg-cover bg-center mt-6"
                style={{ backgroundImage: "url('/images/truckcontact.jpg')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#133866]/80 via-[#133866]/60 to-transparent" />
                <div className="relative z-10 max-w-3xl text-left text-white px-6 md:px-12 py-16 md:py-24">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-10 h-1 bg-[#4372ac]"></div>
                        <span className="text-[#4372ac] font-medium tracking-wider">GET A QUOTE</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                        Instant Freight <span className="text-[#4372ac]">Quote</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed">
                        Get competitive rates in minutes. Our logistics experts are ready to handle your shipment with reliable, efficient, and cost-effective transportation solutions.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-8">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4">
                            <div className="text-2xl font-bold text-white">24/7</div>
                            <div className="text-sm text-gray-200">Dispatch Support</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4">
                            <div className="text-2xl font-bold text-white">98%</div>
                            <div className="text-sm text-gray-200">On-Time Delivery</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4">
                            <div className="text-2xl font-bold text-white">1-2 Hours</div>
                            <div className="text-sm text-gray-200">Quote Response</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Form Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 -mt-10 relative z-20">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                    {submitted ? (
                        <div className="p-12 text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quote Request Sent!</h2>
                            {/* UPDATED: Success message to reflect Firebase submission */}
                            <p className="text-gray-600 mb-6">
                                Thank you for your request. We have received your details and will email your quote to
                                {' '}
                                <strong className="text-[#133866]">{recentEmail || 'the address you provided'}</strong> within 1-2 business hours.
                            </p>
                            <p className="text-gray-600 mb-8">
                                For immediate assistance, email us at
                                {' '}
                                <a href="mailto:clefreight@outlook.com" className="text-[#4372ac] hover:text-[#133866] font-semibold">clefreight@outlook.com</a>
                                {' '}or call us directly.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="bg-[#133866] hover:bg-[#0d2b4d] text-white font-semibold py-3 px-8 rounded-lg transition duration-300 cursor-pointer"
                            >
                                Submit Another Quote Request
                            </button>
                        </div>
                    ) : (
                        <div className="md:flex">
                            {/* Form Column */}
                            <div className="md:w-2/3 p-8 md:p-12">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Request Your Quote</h2>
                                <p className="text-gray-600 mb-8">Fill out the form below and get a competitive quote within hours.</p>

                                <form onSubmit={handleSubmit} className="space-y-8">
                                    {/* Contact Information */}
                                    <div className="bg-gradient-to-r from-[#133866]/5 to-[#4372ac]/5 rounded-xl p-6 border border-[#4372ac]/10">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                                            <FaEnvelope className="mr-3 text-[#4372ac]" />
                                            Contact Information
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    First Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={form.firstName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4372ac] focus:border-transparent transition"
                                                    placeholder="John"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Last Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={form.lastName}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4372ac] focus:border-transparent transition"
                                                    placeholder="Doe"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Company
                                                </label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={form.company}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4372ac] focus:border-transparent transition"
                                                    placeholder="Your Company Name"
                                                />
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-4 col-span-2">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Email *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={form.email}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4372ac] focus:border-transparent transition"
                                                        placeholder="john@company.com"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Phone *
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={form.phone}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4372ac] focus:border-transparent transition"
                                                        placeholder="(555) 123-4567"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Shipment Details */}
                                    <div className="bg-gradient-to-r from-[#133866]/5 to-[#4372ac]/5 rounded-xl p-6 border border-[#4372ac]/10">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                                            <FaMapMarkerAlt className="mr-3 text-[#4372ac]" />
                                            Shipment Details
                                        </h3>
                                        <div className="space-y-6">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Pickup City *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="pickupCity"
                                                        value={form.pickupCity}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4372ac] focus:border-transparent transition"
                                                        placeholder="Cleveland"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Pickup State *
                                                    </label>
                                                    <select
                                                        name="pickupState"
                                                        value={form.pickupState}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4372ac] focus:border-transparent transition"
                                                    >
                                                        <option value="">Select State</option>
                                                        {states.map((state) => (
                                                            <option key={state} value={state}>{state}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Delivery City *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="deliveryCity"
                                                        value={form.deliveryCity}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4372ac] focus:border-transparent transition"
                                                        placeholder="Chicago"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                                        Delivery State *
                                                    </label>
                                                    <select
                                                        name="deliveryState"
                                                        value={form.deliveryState}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4372ac] focus:border-transparent transition"
                                                    >
                                                        <option value="">Select State</option>
                                                        {states.map((state) => (
                                                            <option key={state} value={state}>{state}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                                        <FaTruck className="mr-2 text-[#4372ac]" />
                                                        Trailer Type *
                                                    </label>
                                                    <select
                                                        name="trailerType"
                                                        value={form.trailerType}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4372ac] focus:border-transparent transition"
                                                    >
                                                        {trailerTypes.map((type) => (
                                                            <option key={type.value} value={type.value}>
                                                                {type.icon} {type.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                                        <FaWeightHanging className="mr-2 text-[#4372ac]" />
                                                        Weight (lbs) *
                                                    </label>
                                                    <input
                                                        type="number"
                                                        name="weight"
                                                        value={form.weight}
                                                        onChange={handleChange}
                                                        required
                                                        min="0"
                                                        step="100"
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4372ac] focus:border-transparent transition"
                                                        placeholder="e.g., 42000"
                                                    />
                                                </div>
                                            </div>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                                        <FaBox className="mr-2 text-[#4372ac]" />
                                                        Commodity *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="commodity"
                                                        value={form.commodity}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4372ac] focus:border-transparent transition"
                                                        placeholder="e.g., Auto Parts, Furniture, Food Products"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                                        <FaCalendarAlt className="mr-2 text-[#4372ac]" />
                                                        Pickup Date *
                                                    </label>
                                                    <input
                                                        type="date"
                                                        name="pickupDate"
                                                        value={form.pickupDate}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4372ac] focus:border-transparent transition"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Special Instructions
                                                </label>
                                                <textarea
                                                    name="specialInstructions"
                                                    value={form.specialInstructions}
                                                    onChange={handleChange}
                                                    rows={3}
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4372ac] focus:border-transparent transition"
                                                    placeholder="Loading requirements, time windows, special handling, etc."
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-gradient-to-r from-[#133866] to-[#4372ac] hover:from-[#0d2b4d] hover:to-[#133866] text-white font-bold py-4 px-6 rounded-lg text-lg transition duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                                    >
                                        {loading ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Processing...
                                            </span>
                                        ) : (
                                            'Get Instant Quote'
                                        )}
                                    </button>
                                </form>
                            </div>

                            {/* Info Column */}
                            <div className="md:w-1/3 bg-gradient-to-b from-[#133866] to-[#0d2b4d] text-white p-8 md:p-12">
                                <h3 className="text-2xl font-bold mb-8">Why Choose CLE Freight</h3>

                                <div className="space-y-8">
                                    <div className="flex items-start">
                                        <div className="bg-[#4372ac]/30 p-3 rounded-lg mr-4">
                                            <FaCheckCircle className="w-6 h-6 text-[#a3c4f3]" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-2">Fast Response</h4>
                                            <p className="text-gray-300">Get competitive quotes within 1-2 business hours.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-[#4372ac]/30 p-3 rounded-lg mr-4">
                                            <FaCheckCircle className="w-6 h-6 text-[#a3c4f3]" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-2">Reliable Service</h4>
                                            <p className="text-gray-300">98% on-time delivery rate with real-time tracking.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-[#4372ac]/30 p-3 rounded-lg mr-4">
                                            <FaCheckCircle className="w-6 h-6 text-[#a3c4f3]" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-2">Transparent Pricing</h4>
                                            <p className="text-gray-300">No hidden fees. All costs are clearly outlined upfront.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start">
                                        <div className="bg-[#4372ac]/30 p-3 rounded-lg mr-4">
                                            <FaCheckCircle className="w-6 h-6 text-[#a3c4f3]" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-lg mb-2">Nationwide Coverage</h4>
                                            <p className="text-gray-300">Service all 48 contiguous states with reliable carriers.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-[#4372ac]/30">
                                    <h4 className="font-semibold text-lg mb-4">Need Immediate Help?</h4>
                                    <div className="space-y-4">
                                        <a href="tel:+18624173188" className="flex items-center text-[#a3c4f3] hover:text-white">
                                            <FaPhone className="mr-3" />
                                            <span className="font-semibold">+1 (862) 417-3188</span>
                                        </a>
                                        <a href="mailto:clefreight@outlook.com" className="flex items-center text-[#a3c4f3] hover:text-white">
                                            <FaEnvelope className="mr-3" />
                                            <span className="font-semibold">clefreight@outlook.com</span>
                                        </a>
                                    </div>
                                    <p className="text-gray-400 text-sm mt-4">
                                        Our dispatch team is available 24/7 for urgent shipments.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-10 h-1 bg-[#4372ac]"></div>
                        <span className="text-[#4372ac] font-medium tracking-wider">QUESTIONS</span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                        Frequently Asked Questions
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-[#133866] text-white rounded-full flex items-center justify-center mr-3">?</span>
                            How quickly will I receive my quote?
                        </h3>
                        <p className="text-gray-600">
                            Most quotes are provided within 1-2 business hours. For urgent requests, we can often provide pricing within 30 minutes.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-[#133866] text-white rounded-full flex items-center justify-center mr-3">?</span>
                            What information do I need for a quote?
                        </h3>
                        <p className="text-gray-600">
                            We need pickup/delivery locations, trailer type, weight, commodity, and desired pickup date. The more details you provide, the more accurate our quote.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-[#133866] text-white rounded-full flex items-center justify-center mr-3">?</span>
                            Do you handle specialized freight?
                        </h3>
                        <p className="text-gray-600">
                            Yes! We handle specialized, oversized, and temperature-controlled shipments. Please provide details in the special instructions field.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                            <span className="w-8 h-8 bg-[#133866] text-white rounded-full flex items-center justify-center mr-3">?</span>
                            Is there a cost to get a quote?
                        </h3>
                        <p className="text-gray-600">
                            No, all quotes are completely free with no obligation. We're here to help you find the best shipping solution for your needs.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Quote;