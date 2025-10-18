import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-indigo-100 via-pink-100 to-yellow-100 flex items-center py-16">
      {/* Vibrant blurred circles for background depth */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-pink-400 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-400 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-yellow-400 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-[300px] h-[300px] bg-cyan-300 opacity-25 rounded-full blur-3xl"></div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 space-y-20">
        {/* HERO SECTION */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight transform transition-transform duration-500 animate-floating-text hover:-translate-y-3 hover:scale-105">
              Beautiful apps & websites,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 animate-gradient-x">
                crafted fast.
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-md animate-floating-text">
              We create responsive, high-performance apps and websites with
              cutting-edge technologies and eye-catching design.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-500 text-white shadow-md hover:shadow-lg transition-transform hover:-translate-y-2 hover:scale-105"
              >
                See Services
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-lg border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white transition-transform hover:-translate-y-2 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Illustration Mockup */}
          <div className="rounded-2xl p-6 bg-white/70 backdrop-blur-sm shadow-xl border border-slate-200 flex flex-col items-center justify-center group overflow-hidden relative">
            <div className="w-full h-56 bg-gradient-to-r from-indigo-500 via-pink-400 to-yellow-400 rounded-lg flex flex-col justify-center items-center text-white shadow-inner transform transition-transform group-hover:scale-105 group-hover:-translate-y-2 animate-floating">
              <div className="bg-white/20 px-6 py-3 rounded-lg text-center font-semibold text-lg">
                Modern UI Dashboard Preview
              </div>
              <p className="text-white/80 text-sm mt-2">
                Beautiful interface showcasing our design quality
              </p>
            </div>

            {/* Continuous marquee-like cards */}
            <div className="mt-6 w-full overflow-hidden relative h-24">
              <div className="flex gap-4 absolute animate-marquee">
                <div className="h-20 w-40 bg-gradient-to-tr from-indigo-200 to-indigo-400 rounded-lg"></div>
                <div className="h-20 w-40 bg-gradient-to-tr from-pink-200 to-pink-400 rounded-lg"></div>
                <div className="h-20 w-40 bg-gradient-to-tr from-yellow-200 to-yellow-400 rounded-lg"></div>
                <div className="h-20 w-40 bg-gradient-to-tr from-indigo-200 to-indigo-400 rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Why Choose Us
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl shadow-lg bg-white/70 backdrop-blur-md border-t-4 border-indigo-500 transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl animate-float-card animate-fade-pop">
              <div className="text-indigo-500 mb-4 text-center">
                <svg
                  className="w-10 h-10 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-indigo-700 text-center">
                Rapid Delivery
              </h3>
              <p className="text-slate-600 text-sm text-center">
                Projects built and delivered faster with optimized performance
                and elegant results.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="p-6 rounded-2xl shadow-lg bg-white/70 backdrop-blur-md border-t-4 border-pink-500 transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl animate-float-card animate-fade-pop"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-pink-500 mb-4 text-center">
                <svg
                  className="w-10 h-10 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20l9-16H3l9 16z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-pink-700 text-center">
                Quality Design
              </h3>
              <p className="text-slate-600 text-sm text-center">
                Stunning UI/UX with a perfect balance of functionality and
                aesthetics.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="p-6 rounded-2xl shadow-lg bg-white/70 backdrop-blur-md border-t-4 border-yellow-500 transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl animate-float-card animate-fade-pop"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-yellow-500 mb-4 text-center">
                <svg
                  className="w-10 h-10 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z M12 2v2m0 16v2m10-10h-2M4 12H2m16.364 6.364l-1.414-1.414M6.05 6.05L4.636 4.636m12.728 0l-1.414 1.414M6.05 17.95l-1.414 1.414"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-700 text-center">
                Reliable Support
              </h3>
              <p className="text-slate-600 text-sm text-center">
                Dedicated support ensures smooth performance and future growth.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
