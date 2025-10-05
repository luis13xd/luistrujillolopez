import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Code2,
} from "lucide-react";

export default function ContactSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactMethods = [
    {
      icon: <Mail size={32} />,
      label: "Email",
      value: "tu.email@gmail.com",
      link: "mailto:tu.email@gmail.com",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: <Github size={32} />,
      label: "GitHub",
      value: "@tuusuario",
      link: "https://github.com/tuusuario",
      color: "from-gray-400 to-gray-600",
    },
    {
      icon: <Linkedin size={32} />,
      label: "LinkedIn",
      value: "/in/tuusuario",
      link: "https://linkedin.com/in/tuusuario",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <Phone size={32} />,
      label: "Teléfono",
      value: "+57 300 123 4567",
      link: "tel:+573001234567",
      color: "from-green-400 to-emerald-500",
    },
  ];

  return (
    <section
      id="contacto"
      className="min-h-[90vh] lg:min-h-[80vh] flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        {/* Header with animation */}
        <div className="text-center mb-2">
          <div className="inline-flex items-center gap-3 mb-6">
            <Code2 className="text-cyan-400" size={48} />
            <h2 className="text-6xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Contáctame
              </span>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Cards & Map */}
          <div className="space-y-6">
            {/* Contact Method Cards */}
            <div className="grid grid-cols-2 gap-4">
              {contactMethods.map((method, i) => (
                <a
                  key={i}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-6 rounded-2xl border border-purple-500/20 backdrop-blur-sm hover:border-cyan-400/50 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                  ></div>
                  <div className="relative">
                    <div className="mb-3 text-cyan-400 group-hover:text-white transition-colors transform group-hover:rotate-12 duration-300">
                      {method.icon}
                    </div>
                    <p className="text-sm text-gray-400 mb-1">{method.label}</p>
                    <p className="text-sm font-semibold text-white truncate">
                      {method.value}
                    </p>
                  </div>
                  {hoveredCard === i && (
                    <div className="absolute -top-1 -right-1">
                      <span className="flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                      </span>
                    </div>
                  )}
                </a>
              ))}
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/573001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 group"
            >
              <MessageCircle size={28} className="group-hover:animate-bounce" />
              <span>Chatea en WhatsApp</span>
            </a>

            {/* Map */}
           <div className="relative h-60 lg:h-48 bg-slate-800/50 rounded-2xl border border-purple-500/20 overflow-hidden backdrop-blur-sm group">
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin
                  size={48}
                  className="text-cyan-400 group-hover:scale-125 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-6">
                <p className="text-sm text-gray-400 mb-1">Ubicación</p>
                <p className="text-lg font-semibold">Bogotá, Colombia</p>
              </div>
              {/* Animated ping effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="flex h-20 w-20">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-40"></span>
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-800/50 via-purple-900/30 to-slate-800/50 p-8 md:p-10 rounded-2xl border border-purple-500/20 backdrop-blur-sm relative overflow-hidden group lg:max-h-[600px] overflow-y-auto">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

            <div className="relative">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Send className="text-cyan-400" />
                Envíame un mensaje
              </h3>

              <div className="space-y-6">
                <div className="group/input">
                  <label className="block text-sm font-semibold mb-2 text-cyan-400 group-hover/input:text-purple-400 transition-colors">
                    Nombre
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div className="group/input">
                  <label className="block text-sm font-semibold mb-2 text-cyan-400 group-hover/input:text-purple-400 transition-colors">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="group/input">
                  <label className="block text-sm font-semibold mb-2 text-cyan-400 group-hover/input:text-purple-400 transition-colors">
                    Mensaje
                  </label>
                  <textarea
                    rows={2}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                  ></textarea>
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden">
                  <span className="relative z-10 flex items-center gap-2">
                    Enviar Mensaje
                    <Send
                      size={20}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative text */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            Respondo en menos de 24 horas ⚡
          </p>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
