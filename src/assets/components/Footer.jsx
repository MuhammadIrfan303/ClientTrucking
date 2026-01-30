import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTruck, FaCertificate, FaShieldAlt } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="text-gray-300 bg-no-repeat bg-center bg-contain"
            style={{
                // Gradient overlay + logo background
                backgroundImage:
                    "linear-gradient(to bottom, rgba(15,23,42,0.95), rgba(2,6,23,0.95)), url('/logo.jpeg')",
            }}
        >
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

                    {/* Company Info Column */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <img src="/logo.jpeg" alt="CLE Freight LLC logo" className="h-40 w-auto object-contain" />
                        </div>

                        <p className="text-gray-400 leading-relaxed">
                            Professional trucking and freight brokerage solutions with nationwide coverage, reliability, and competitive pricing.
                        </p>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-3 pt-4">
                            <div className="flex items-center bg-slate-800 px-3 py-2 rounded-lg">
                                <FaCertificate className="h-4 w-4 text-blue-400 mr-2" />
                                <span className="text-xs font-medium">MC# 1775717</span>
                            </div>
                            <div className="flex items-center bg-slate-800 px-3 py-2 rounded-lg">
                                <FaShieldAlt className="h-4 w-4 text-green-400 mr-2" />
                                <span className="text-xs font-medium">DOT# 4491865</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6 pb-2 ml-2 border-b border-slate-700">
                            Quick Navigation
                        </h3>
                        <ul className="space-y-4">
                            {[
                                { path: "/", label: "Home" },
                                { path: "/about", label: "About Us" },
                                { path: "/services", label: "Services" },
                                { path: "/contact", label: "Contact" },
                                { path: "/contact", label: "Get Quote" },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.path}
                                        className="group flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
                                    >
                                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info Column */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6 pb-2 border-b border-slate-700">
                            Contact Information
                        </h3>
                        <ul className="space-y-5">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="h-5 w-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-gray-300">Our Location</p>
                                    <p className="text-gray-400 text-sm mt-1">
                                        3109 Chickering Woods Drive<br />
                                        Louisville, KY 40241
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-center">
                                <FaPhone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-gray-300">Call Us</p>
                                    <a
                                        href="tel:+18624173188"
                                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm mt-1 block"
                                    >
                                        (862) 417-3188
                                    </a>
                                </div>
                            </li>

                            <li className="flex items-center">
                                <FaEnvelope className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                                <div>
                                    <p className="font-medium text-gray-300">Email Us</p>
                                    <a
                                        href="mailto:clefreight@outlook.com"
                                        className="text-gray-400 hover:text-blue-400 transition-colors text-sm mt-1 block"
                                    >
                                        clefreight@outlook.com
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-6 pb-2 border-b border-slate-700">
                            Our Services
                        </h3>
                        <ul className="space-y-3">
                            {[
                                "Dry Van Freight",
                                "Reefer Freight",
                                "Freight Brokerage",
                                "Logistics Solutions",
                                "Nationwide Coverage",
                            ].map((service) => (
                                <li key={service} className="flex items-center">
                                    <div className="h-1.5 w-1.5 bg-blue-500 rounded-full mr-3"></div>
                                    <span className="text-gray-400 hover:text-white transition-colors cursor-default">
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Hours (Optional - Add if available) */}
                        <div className="mt-8 pt-6 border-t border-slate-700">
                            <h4 className="text-gray-300 font-medium text-sm mb-2">Business Hours</h4>
                            <p className="text-gray-400 text-sm">
                                Mon-Fri: 8:00 AM - 6:00 PM EST<br />
                                Sat: 9:00 AM - 1:00 PM EST<br />
                                Emergency: 24/7 Available
                            </p>
                        </div>
                    </div>
                </div>


            </div>

            {/* Bottom Bar */}
            <div className="bg-slate-950 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-500 text-sm mb-4 md:mb-0">
                            © {currentYear} CLE FREIGHT LLC. All rights reserved.
                        </div>


                    </div>

                    {/* Accreditation Notice */}
                    <div className="mt-4 pt-4 border-t border-slate-800 text-center">
                        <p className="text-gray-600 text-xs">
                            CLE FREIGHT LLC is a registered freight broker (MC# 1775717) and motor carrier (DOT# 4491865)
                            operating nationwide. All shipments are fully insured.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}