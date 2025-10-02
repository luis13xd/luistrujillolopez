import { Code } from "lucide-react";

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 backdrop-blur-sm">
            <span className="text-cyan-400 flex items-center gap-2 text-xl md:text-2xl font-semibold">
              <Code size={28} /> Desarrollador Full Stack
            </span>
          </div>

          <h1 className="font-bold">
            <span className="block text-4xl md:text-6xl">
              Luis Trujillo López
            </span>
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-2xl md:text-4xl py-1">
              Ingeniero de Software
            </span>
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed">
            Creo experiencias web excepcionales con código limpio y diseños
            modernos. Especializado en React, Angular, Node.js y tecnologías web de
            última generación.
          </p>
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => scrollToSection("proyectos")}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all duration-300"
            >
              Ver Proyectos
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transform hover:-translate-y-1 transition-all duration-300"
            >
              Contactar
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-2xl shadow-purple-500/30">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
