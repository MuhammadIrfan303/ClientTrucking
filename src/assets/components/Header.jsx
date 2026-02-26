import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setOpen(false);
    }, [location]);

    // Brand color: #133866 (deep navy blue)
    const linkClasses = ({ isActive }) =>
        `relative px-3 py-2 text-sm font-medium transition-all duration-300 
        ${isActive
            ? "text-[#133866]"
            : "text-gray-700 hover:text-[#133866]"
        } group`;

    return (
        <header
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
                    : "bg-white shadow-md py-4"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo with hover effect */}
                    <Link
                        to="/"
                        className="flex items-center gap-3 group"
                    >
                        <div className="relative overflow-hidden rounded-lg">
                            <img
                                src="/logowhitee.jpg"
                                alt="CLE Freight LLC"
                                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                       
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-1">
                        {[
                            { to: "/", label: "Home" },
                            { to: "/about", label: "About Us" },
                            { to: "/services", label: "Services" },
                            { to: "/contact", label: "Contact" }
                        ].map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={linkClasses}
                            >
                                {({ isActive }) => (
                                    <>
                                        {item.label}
                                        <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#133866] transition-all duration-300 
                                            ${isActive ? "w-1/2" : "group-hover:w-1/2"}`}
                                        />
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </nav>

                    {/* CTA Button for Desktop */}
                    <div className="hidden md:block">
                        <Link
                            to="/quote"
                            className="px-5 py-2.5 bg-[#133866] hover:bg-[#0f2b4d] text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
                        >
                            Get Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        aria-label="Toggle Menu"
                        className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <FiX size={24} className="text-gray-700" />
                        ) : (
                            <FiMenu size={24} className="text-gray-700" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-xl transition-all duration-300 overflow-hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-4 py-3 space-y-1">
                    {[
                        { to: "/", label: "Home" },
                        { to: "/about", label: "About Us" },
                        { to: "/services", label: "Services" },
                        { to: "/contact", label: "Contact" }
                    ].map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            className={({ isActive }) =>
                                `block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${isActive
                                    ? "bg-[#133866]/10 text-[#133866] border-l-4 border-[#133866]"
                                    : "text-gray-700 hover:bg-gray-50 hover:pl-6"
                                }`
                            }
                            onClick={() => setOpen(false)}
                        >
                            {item.label}
                        </NavLink>
                    ))}

                    {/* Mobile CTA */}
                    <Link
                        to="/quote"
                        className="block mt-3 px-4 py-3 bg-[#133866] hover:bg-[#0f2b4d] text-white text-center text-base font-semibold rounded-lg transition-all duration-200"
                        onClick={() => setOpen(false)}
                    >
                        Get a Free Quote
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;