import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaTruck, FaUserTie, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        pickup: '',
        delivery: '',
        loadType: '',
        weight: '',
        notes: ''
    });

    const [activeTab, setActiveTab] = useState('shippers');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Quote Request:', form);
        alert("Thanks! Your quote request has been received. We'll contact you within 24 hours.");
        setForm({
            name: '',
            company: '',
            email: '',
            phone: '',
            pickup: '',
            delivery: '',
            loadType: '',
            weight: '',
            notes: ''
        });
    };

    return (
        <div className="min-h-screen">

            {/* Hero Section - About Page Style */}
            <section
                className="relative w-full min-h-[400px] rounded-sm overflow-hidden bg-cover bg-center mt-6"
                style={{ backgroundImage: "url('/images/truckcontact.jpg')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#133866]/80 via-[#133866]/60 to-transparent" />
                <div className="relative z-10 max-w-3xl text-left text-white px-6 md:px-12 py-16 md:py-24">
                    <div className="inline-flex items-center gap-2 mb-4">
                        <div className="w-10 h-1 bg-[#4372ac]"></div>
                        <span className="text-[#4372ac] font-medium tracking-wider">GET IN TOUCH</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                        Contact <span className="text-[#4372ac]">CLE Freight</span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed">
                        Reach out to our logistics experts for reliable, efficient, and cost-effective transportation solutions. Fill out the form below or use our contact information to connect directly.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-6">
                        <a href="#quote" className="bg-[#4372ac] hover:bg-[#3a6399] text-white px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
                            Request a Quote
                        </a>
                        <a href="tel:5551234567" className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-xl font-semibold text-lg transition duration-300">
                            Call Now: (555) 123-4567
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
