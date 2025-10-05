import { useState } from "react";
import emailjs from "emailjs-com";
import {
  Mail,
  Github,
  Linkedin,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Code2,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function ContactSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | ""; message: string }>({
    type: "",
    message: "",
  });

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Por favor, completa todos los campos." });
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus({ type: "error", message: "Introduce un correo electrónico válido." });
      return;
    }

    setLoading(true);
    try {
      await emailjs.send(
        "service_1nb657g", 
        "template_aciu372",
        formData,
        "p7eJncdwR71DakFrd" 
      );

      setStatus({ type: "success", message: "¡Mensaje enviado correctamente!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", message: "Hubo un error al enviar el mensaje. Intenta nuevamente." });
    } finally {
      setLoading(false);
    }
  };

  const contactMethods = [
    {
      icon: <Mail size={32} />,
      label: "Email",
      value: "trujillolopezluisxd@gmail.com",
      link: "mailto:trujillolopezluisxd@gmail.com",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: <Github size={32} />,
      label: "GitHub",
      value: "@luis13xd",
      link: "https://github.com/luis13xd",
      color: "from-gray-400 to-gray-600",
    },
    {
      icon: <Linkedin size={32} />,
      label: "LinkedIn",
      value: "/in/luistrujillolopez",
      link: "https://www.linkedin.com/in/luistrujillolopez/",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: <Phone size={32} />,
      label: "Teléfono",
      value: "+57 3138687180",
      link: "tel:+573138687180",
      color: "from-green-400 to-emerald-500",
    },
  ];

  return (
    <section
      id="contacto"
      className="min-h-[90vh] lg:min-h-[80vh] flex items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl w-full relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-2">
          <div className="inline-flex items-center gap-3 mb-6">
            <Code2 className="text-cyan-400" size={48} />
            <h2 className="text-5xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Contáctame
              </span>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Tarjetas de contacto */}
          <div className="space-y-6">
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
                    <div className="mb-2 text-cyan-400 group-hover:text-white transition-colors transform group-hover:rotate-12 duration-300">
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

            {/* WhatsApp */}
            <a
              href="https://wa.me/573138687180"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 group"
            >
              <MessageCircle size={28} className="group-hover:animate-bounce" />
              <span>Chatea en WhatsApp</span>
            </a>

            {/* Ubicación */}
            <div className="relative h-30 lg:h-30 bg-slate-800/50 rounded-2xl border border-purple-500/20 overflow-hidden backdrop-blur-sm group">
              <div className="absolute inset-0 flex items-center ml-8 md:ml-0 justify-center">
                <MapPin size={42} className="text-cyan-400 group-hover:scale-125 transition-transform duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-8">
                <p className="text-sm text-gray-400 mb-1">Ubicación</p>
                <p className="text-md md:text-lg font-semibold">Neiva, Colombia</p>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-slate-800/50 via-purple-900/30 to-slate-800/50 p-6 md:p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm relative overflow-hidden group lg:max-h-[520px] overflow-y-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

            <div className="relative">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <Send className="text-cyan-400" />
                Envíame un mensaje
              </h3>

              <div className="space-y-7">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-cyan-400">
                    Nombre
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-cyan-400">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-cyan-400">
                    Mensaje
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none"
                    placeholder="Cuéntame sobre tu proyecto o idea..."
                  ></textarea>
                </div>

                {status.message && (
                  <div
                    className={`flex items-center gap-2 text-sm font-medium ${
                      status.type === "error" ? "text-red-400" : "text-green-400"
                    }`}
                  >
                    {status.type === "error" ? <XCircle size={18} /> : <CheckCircle2 size={18} />}
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} /> Enviando...
                    </>
                  ) : (
                    <>
                      <span className="relative z-10 flex items-center gap-2">
                        Enviar Mensaje
                        <Send size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-500 text-sm">Respondo en menos de 24 horas ⚡</p>
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
