import { useEffect, useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaTruck, FaUserTie, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
     

     useEffect(() => {
  window.scrollTo(0, 0);
}, []);

    return (
        <div className="min-h-screen">

            {/* Hero Section hghasj - About Page Style */}
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
                       
                        {/* Updated: phone link uses tel:+18624173188 and shows the correct number */}
                        <a href="tel:+18624173188" className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-xl font-semibold text-lg transition duration-300 flex items-center gap-2">
                            <FaPhone /> +1 (862) 417-3188
                        </a>
                        {/* New: email link opens the user's email app */}
                        <a href="mailto:clefreight@outlook.com" className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-xl font-semibold text-lg transition duration-300 flex items-center gap-2">
                            <FaEnvelope /> clefreight@outlook.com
                        </a>
                    </div>
                </div>
            </section>

            {/* New: Contact Details Section */}
            <section className="max-w-6xl mx-auto px-6 md:px-12 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-3">
                        <FaPhone className="text-[#4372ac] text-2xl mt-1" />
                        <div>
                            <h3 className="font-semibold text-gray-900">Phone</h3>
                            <a href="tel:+18624173188" className="text-[#133866] hover:underline">
                                +1 (862) 417-3188
                            </a>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-3">
                        <FaEnvelope className="text-[#4372ac] text-2xl mt-1" />
                        <div>
                            <h3 className="font-semibold text-gray-900">Email</h3>
                            <a href="mailto:clefreight@outlook.com" className="text-[#133866] hover:underline">
                                clefreight@outlook.com
                            </a>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-3">
                        <FaMapMarkerAlt className="text-[#4372ac] text-2xl mt-1" />
                        <div>
                            <h3 className="font-semibold text-gray-900">Address</h3>
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=882+Markham+Ln,+Louisville,+KY+40207"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#133866] hover:underline"
                            >
                                882 Markham Ln, Louisville, KY 40207
                            </a>
                        </div>
                    </div>

                    <div className="bg-white shadow-md rounded-xl p-6 flex items-start gap-3">
                        <FaClock className="text-[#4372ac] text-2xl mt-1" />
                        <div>
                            <h3 className="font-semibold text-gray-900">Business Hours</h3>
                            <p className="text-[#133866]">Monday – Friday</p>
                            <p className="text-gray-700">8 AM – 6 PM</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* New: Map Section */}
            <section className="max-w-6xl mx-auto px-6 md:px-12 py-8">
                <div className="bg-white shadow-md rounded-xl overflow-hidden">
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-[#133866] mb-2">Find Us</h2>
                        <p className="text-gray-700 mb-4">882 Markham Ln, Louisville, KY 40207</p>
                    </div>
                    <iframe
                        title="CLE Freight Location"
                        src="https://www.google.com/maps?q=882+Markham+Ln,+Louisville,+KY+40207&output=embed"
                        loading="lazy"
                        className="w-full h-[360px] border-0"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>

            {/* New: FAQ Section */}
            <section className="max-w-6xl mx-auto px-6 md:px-12 py-8">
                <div className="bg-white shadow-md rounded-xl p-6">
                    <h2 className="text-2xl font-bold text-[#133866] mb-4">Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        <details className="group">
                            <summary className="cursor-pointer font-semibold text-[#133866]">How quickly can you provide a quote?</summary>
                            <p className="mt-2 text-gray-700">Most quotes are provided within 24 hours of receiving complete details.</p>
                        </details>
                        <details className="group">
                            <summary className="cursor-pointer font-semibold text-[#133866]">What types of freight do you handle?</summary>
                            <p className="mt-2 text-gray-700">We handle FTL, LTL, refrigerated (reefer), dry van, and expedited shipments.</p>
                        </details>
                        <details className="group">
                            <summary className="cursor-pointer font-semibold text-[#133866]">Do you offer tracking?</summary>
                            <p className="mt-2 text-gray-700">Yes, we provide real-time tracking and status updates for all shipments.</p>
                        </details>
                    </div>
                </div>
            </section>
 
        </div>
    );
};

export default Contact;
