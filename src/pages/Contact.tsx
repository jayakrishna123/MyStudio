import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Github,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100 px-6 py-10">
      {/* Background circles for a colorful feel */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-400 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-pink-400 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-yellow-400 opacity-30 rounded-full blur-3xl"></div>

      {/* Contact Card */}
      <div className="relative z-10 w-full max-w-3xl mx-auto bg-white/70 backdrop-blur-md shadow-2xl border border-slate-200 rounded-3xl p-10 text-center space-y-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Get in{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
            Touch
          </span>
        </h1>
        <p className="text-slate-600 max-w-md mx-auto">
          Have a project idea or need help with design and development? Reach
          out — I’d love to collaborate!
        </p>

        {/* Contact Info Grid */}
        <div className="grid sm:grid-cols-2 gap-8 mt-8 text-slate-800">
          <div className="flex flex-col items-center gap-3">
            <Phone className="w-8 h-8 text-indigo-600" />
            <p className="font-medium">+91-8074262779</p>
          </div>

          <div
            className="flex flex-col items-center gap-3 cursor-pointer"
            onClick={() =>
              (window.location.href = "mailto:jayakrish123@outlook.com")
            }
          >
            <Mail className="w-8 h-8 text-pink-600" />
            <p className="font-medium text-slate-700 hover:text-pink-600 transition-colors">
              E-Mail
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <MapPin className="w-8 h-8 text-yellow-600" />
            <p className="font-medium">Bangalore, India</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Linkedin className="w-8 h-8 text-blue-700" />
            <a
              href="https://www.linkedin.com/in/jayakrishna-ch/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline hover:text-blue-700"
            >
              linkedin.com/in/jayakrishna-ch/
            </a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://www.facebook.com/jayakrishna99/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-blue-600 transition"
          >
            <Facebook className="w-7 h-7" />
          </a>
          <a
            href="https://www.instagram.com/jayakrishna_ksm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-pink-500 transition"
          >
            <Instagram className="w-7 h-7" />
          </a>
          <a
            href="https://github.com/jayakrishna123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 transition"
          >
            <Github className="w-7 h-7" />
          </a>
        </div>

        {/* Bottom Note */}
        <p className="text-sm text-slate-500 mt-10">
          © {new Date().getFullYear()} jayakrishna — Crafted with ❤️ using React
          + Tailwind
        </p>
      </div>
    </div>
  );
}
