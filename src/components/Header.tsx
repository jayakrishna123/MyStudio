import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = (path: string) =>
    `px-4 py-2 rounded-md font-medium transition-all duration-300 ${
      location.pathname === path
        ? "bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-lg"
        : "text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-pink-500"
    }`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 backdrop-blur-sm bg-white/90 transition-all duration-300">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 flex items-center gap-1"
        >
          <span className="inline-block pr-2" aria-hidden>
            ✨
          </span>
          MyStudio
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <Link to="/services" className={linkClasses("/services")}>
            Services
          </Link>
          <Link to="/contact" className={linkClasses("/contact")}>
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-700 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white/90 backdrop-blur-md shadow-md border-t border-slate-200 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-60 py-2" : "max-h-0"
        }`}
      >
        <Link
          to="/services"
          className="block px-6 py-3 border-b border-slate-100 text-slate-700 hover:bg-indigo-50 transition-all duration-300"
          onClick={() => setIsOpen(false)}
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="block px-6 py-3 text-slate-700 hover:bg-pink-50 transition-all duration-300"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
