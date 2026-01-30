import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {

    const [open, setOpen] = useState(false);

    // Simplify to a light theme and underline the active tab
    const linkClasses = ({ isActive }) =>
        `px-2 py-2 text-sm font-semibold transition-colors border-b-2 ${isActive
            ? "text-slate-900 borderc"
            : "text-slate-700 border-transparent hover:text-slate-900 hover:borderc"
        }`;

    return (
        // Light header background similar to the screenshot
        <header className="fixed top-0 inset-x-0 z-50 bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex h-16 items-center justify-between">
                    {/* replace the image line to ensure visibility and correct path */}
                    <Link to="/" className="flex items-center gap-2">
                        <img src="/logowhitee.jpg" alt="CLE Freight LLC logo" className="h-16 w-auto object-contain" />
                    </Link>

                    {/* Only Home, About, Services, Contact */}
                    <nav className="hidden md:flex items-center gap-6">
                        <NavLink to="/" className={linkClasses}>Home</NavLink>
                        <NavLink to="/about" className={linkClasses}>About</NavLink>
                        <NavLink to="/services" className={linkClasses}>Services</NavLink>
                        <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
                    </nav>

                    <button
                        aria-label="Toggle Menu"
                        className="md:hidden text-slate-900"
                        onClick={() => setOpen((o) => !o)}
                    >
                        {open ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {open && (
                // Mobile dropdown adapted to light theme
                <div className="md:hidden bg-white border-t border-slate-200">
                    <div className="px-4 py-3 space-y-2">
                        <NavLink to="/" className={linkClasses} onClick={() => setOpen(false)}>Home</NavLink>
                        <NavLink to="/about" className={linkClasses} onClick={() => setOpen(false)}>About</NavLink>
                        <NavLink to="/services" className={linkClasses} onClick={() => setOpen(false)}>Services</NavLink>
                        <NavLink to="/contact" className={linkClasses} onClick={() => setOpen(false)}>Contact</NavLink>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header