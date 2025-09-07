import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import profileImg from '../assets/shashi.png';


const Navbar = () => {
    const location = useLocation();
    const [shrink, setShrink] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { name: "Home", path: "/" },
        { name: "About Me", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    // Scroll listener for shrinking
    useEffect(() => {
        const handleScroll = () => {
            setShrink(window.scrollY > 90);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 
        flex items-center justify-between bg-black/60 backdrop-blur-md 
        transition-all duration-300 rounded-2xl shadow-md z-50
        ${shrink ? "w-3/4 py-2 px-4" : "w-[95%] py-4 px-6"}`}
        >
            {/* Left - Profile */}
            <div className="flex items-center gap-3">
                <img
                    src={profileImg || 'https://placehold.co/150x150/2563eb/ffffff?text=SRK'}
                    alt="Shashi Ranjan Kumar"
                    className={`rounded-full border border-gray-600 transition-all duration-300 
            ${shrink ? "w-8 h-8" : "w-10 h-10"}`}
                />
                <span className={`font-medium transition-all ${shrink ? "text-sm" : "text-base"}`}>
                    Shashi Ranjan Kumar
                </span>
            </div>

            {/* Center - Menu (desktop) */}
            <div className="hidden md:flex items-center gap-6">
                {menuItems.map((item, i) => (
                    <Link
                        key={i}
                        to={item.path}
                        className={`px-4 py-2 rounded-full transition-all duration-300 ${location.pathname === item.path
                            ? "bg-gray-800 text-white"
                            : "text-gray-300 hover:text-white"
                            }`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            {/* Right - Resume button (desktop) */}
            <div className="hidden md:block">
                <a
                    href="/shashiaranjankumar_senior_frontend_engineer.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white text-black font-medium rounded-lg shadow hover:scale-105 transition"
                >
                    Resume
                </a>
            </div>

            {/* Hamburger menu (mobile) */}
            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                </button>
            </div>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className="absolute top-16 right-4 w-48 bg-black/90 rounded-xl shadow-lg flex flex-col items-center py-4 space-y-4 md:hidden">
                    {menuItems.map((item, i) => (
                        <Link
                            key={i}
                            to={item.path}
                            onClick={() => setMenuOpen(false)}
                            className={`px-4 py-2 rounded-lg w-full text-center transition-all ${location.pathname === item.path
                                ? "bg-gray-800 text-white"
                                : "text-gray-300 hover:text-white"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <a
                        href="/shashiaranjankumar_senior_frontend_engineer.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-white text-black font-medium rounded-lg shadow w-full text-center"
                    >
                        Resume
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
