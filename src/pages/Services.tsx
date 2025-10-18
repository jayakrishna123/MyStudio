import { Code, Smartphone, Globe, Brush, Cpu, Database } from "lucide-react";

export default function Services() {
  // Mocked data (no API calls)
  const services = [
    {
      id: 1,
      title: "Custom Website Development",
      summary:
        "We craft responsive, SEO-friendly websites using React, Vite, and modern UI frameworks for top-notch performance and design.",
      color: "#6366F1", // Indigo
      icon: <Globe className="w-10 h-10 text-indigo-600" />,
      features: [
        "Responsive & SEO-optimized",
        "Next-gen tech stack (React + Vite)",
        "Fast loading & scalable",
        "Custom domain & deployment",
      ],
      price: "Starting at $499",
    },
    {
      id: 2,
      title: "Mobile App Development",
      summary:
        "From Android to iOS, we build modern, scalable mobile apps with seamless UX and real-time functionality using React Native.",
      color: "#EC4899", // Pink
      icon: <Smartphone className="w-10 h-10 text-pink-600" />,
      features: [
        "Cross-platform development",
        "Firebase integration",
        "Push notifications & APIs",
        "App Store & Play Store support",
      ],
      price: "Starting at $799",
    },
    {
      id: 3,
      title: "UI/UX Design",
      summary:
        "Beautiful, user-centered design experiences that blend creativity and usability — powered by Figma, Tailwind & ShadCN UI.",
      color: "#F59E0B", // Yellow
      icon: <Brush className="w-10 h-10 text-yellow-600" />,
      features: [
        "Modern & clean design",
        "Interactive prototypes",
        "Design system creation",
        "Accessibility-focused layouts",
      ],
      price: "Starting at $299",
    },
    {
      id: 4,
      title: "Backend & API Development",
      summary:
        "We build secure, fast, and reliable APIs with Node.js, Express, and Firebase for seamless front-end integration.",
      color: "#10B981", // Green
      icon: <Database className="w-10 h-10 text-green-600" />,
      features: [
        "RESTful & GraphQL APIs",
        "Authentication & role management",
        "Cloud storage & databases",
        "Optimized for scalability",
      ],
      price: "Starting at $599",
    },
    {
      id: 5,
      title: "AI & Automation Solutions",
      summary:
        "Integrate cutting-edge AI and automation workflows into your business using OpenAI, LLMs, and custom Python models.",
      color: "#8B5CF6", // Purple
      icon: <Cpu className="w-10 h-10 text-purple-600" />,
      features: [
        "Chatbots & assistants",
        "Text & image generation",
        "Custom AI model integration",
        "Workflow automation",
      ],
      price: "Starting at $999",
    },
    {
      id: 6,
      title: "Code Review & Optimization",
      summary:
        "Get expert code reviews, performance analysis, and best-practice optimization for your existing web or app projects.",
      color: "#0EA5E9", // Blue
      icon: <Code className="w-10 h-10 text-sky-600" />,
      features: [
        "Performance improvements",
        "Bug fixes & refactoring",
        "Security audits",
        "Documentation support",
      ],
      price: "Starting at $199",
    },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-indigo-50 via-pink-50 to-yellow-50 py-20">
      {/* Colorful background circles */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-pink-400 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-indigo-400 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-yellow-400 opacity-30 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center mb-16 text-slate-900">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
            Services
          </span>
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((s) => (
            <div
              key={s.id}
              className="p-8 rounded-3xl shadow-xl bg-white/70 backdrop-blur-md border border-slate-350 hover:-translate-y-8 hover:shadow-3xl transition-all duration-400"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-white to-slate-50 shadow-inner border">
                  {s.icon}
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{ color: s.color }}
                >
                  {s.title}
                </h3>
              </div>

              <p className="text-slate-600 mb-4">{s.summary}</p>

              <ul className="text-sm text-slate-700 space-y-2">
                {s.features.map((f, i) => (
                  <li key={i} className="flex items-start">
                    <span
                      className="w-2 h-2 mt-2 rounded-full mr-3"
                      style={{ backgroundColor: s.color }}
                    ></span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 font-bold text-lg text-slate-900">
                {s.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
