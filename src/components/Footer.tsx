import { Linkedin, Twitter, Instagram, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand + Description + Social */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-500 flex items-center gap-2">
            <span className="text-white">✨</span> MyStudio
          </h2>
          <p className="text-slate-400">
            Crafting beautiful, modern, and responsive apps & websites for businesses and startups.
          </p>
          <div className="flex gap-4 mt-3">
            <a href="https://x.com/ChJayaKrishna2" className="hover:text-blue-500 transition-colors" aria-label="Twitter">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/jayakrishna-ch/" className="hover:text-blue-700 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/jayakrishna_ksm/" className="hover:text-pink-500 transition-colors" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://github.com/jayakrishna123" className="hover:text-slate-400 transition-colors" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div className="space-y-3">
          <h3 className="font-semibold mb-4 text-lg">Get in Touch</h3>
          <p className="text-slate-400 text-sm">
            Have a project in mind or want to work together? Reach out to us!
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-md text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="border-t border-slate-700 mt-12 pt-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} MyStudio. All rights reserved.
      </div>
    </footer>
  );
}
