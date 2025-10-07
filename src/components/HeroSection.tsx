import { Code, Terminal, Braces, GitBranch } from "lucide-react";
import { useState, useEffect } from "react";
import luis from "../assets/luis1.png"

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
  image?: string;
}

// Componente de código binario flotante
const FloatingCode = () => {
  const codeSnippets = [
    '{ }', '< >', '( )', '[ ]', '/>', '{}', '=>', 
    'const', 'let', 'fn', 'if', 'for', '&&', '||',
    '===', '!==', '++', '--', '...', '${}'
  ];
  
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    code: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute text-cyan-400/30 font-mono text-xs md:text-sm animate-float-code"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        >
          {particle.code}
        </div>
      ))}
    </div>
  );
};

// Componente de líneas de código en el fondo
const CodeLines = () => {
  const lines = [
    'function createWebsite() {',
    '  const magic = true;',
    '  return <Amazing />',
    '}',
    'export default Hero;',
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
      <pre className="text-cyan-400 font-mono text-xs md:text-sm absolute top-10 left-10 animate-fade-in-out">
        {lines.map((line, i) => (
          <div key={i} style={{ animationDelay: `${i * 0.5}s` }}>{line}</div>
        ))}
      </pre>
    </div>
  );
};

// Hook para efecto de typing
const useTypingEffect = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return displayText;
};

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  const typedText = useTypingEffect("Ingeniero de Software", 100);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center px-6 pt-15 sm:pt-20 overflow-hidden bg-gray-900"
    >
      {/* Código flotante */}
      <FloatingCode />
      
      {/* Líneas de código en fondo */}
      <CodeLines />

      {/* Grid de terminal */}
      <div className="absolute inset-0 bg-grid-terminal opacity-5"></div>

      <div className="relative max-w-6xl w-full grid md:grid-cols-2 gap-6 sm:gap-12 items-center">
        {/* Contenido de texto */}
        <div className="space-y-6">
          {/* Badge animado con iconos de código */}
          <div 
            className={`inline-block transition-all duration-700 transform ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="group relative px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300">
              <span className="relative text-cyan-400 flex items-center gap-2 text-xl md:text-2xl font-semibold">
                <Code size={28} className="animate-pulse-code" /> 
                Desarrollador Full Stack
              </span>
            </div>
          </div>

          {/* Título con animación escalonada */}
          <div className="space-y-2">
            <h1 
              className={`font-bold transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="block text-3xl md:text-5xl group cursor-default">
                {'<Luis Trujillo López />'.split('').map((char, i) => (
                  <span
                    key={i}
                    className="inline-block hover:text-cyan-400 transition-colors duration-200"
                    style={{ 
                      animationDelay: `${i * 0.05}s`,
                      color: char === '<' || char === '/' || char === '>' ? '#22d3ee' : 'white'
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
            </h1>
            
            <h2 
              className={`font-bold transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-2xl md:text-4xl py-1 font-mono">
                {typedText}
                <span className="animate-cursor-blink">_</span>
              </span>
            </h2>
          </div>

          {/* Descripción */}
          <p 
            className={`text-xl text-gray-300 leading-relaxed transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            Creo experiencias web excepcionales con código limpio y diseños
            modernos. Especializado en React, Angular, Node.js y tecnologías web
            de última generación.
          </p>

          {/* Botones con efectos de código */}
          <div 
            className={`flex gap-4 pt-2 transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            <button
              onClick={() => scrollToSection("proyectos")}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold overflow-hidden hover:shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all duration-300"
            >
              <span className="relative flex items-center gap-2 font-mono">
                Ver Proyectos
              </span>
            </button>
            
            <button
              onClick={() => scrollToSection("contacto")}
              className="group relative px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="relative font-mono flex items-center gap-2">
                Contactar
              </span>
              {/* Efecto de línea de código escribiendo */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-full transition-all duration-500"></div>
            </button>
          </div>
        </div>

        {/* Imagen con efectos de terminal/código */}
        <div 
          className={`relative transition-all duration-1000 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          {/* Brackets giratorios de código */}
          <div className="absolute inset-0 animate-spin-bracket-slow pointer-events-none">
            <div className="absolute -top-4 -left-4 text-6xl text-cyan-400/30 font-mono">{'<'}</div>
            <div className="absolute -bottom-4 -right-4 text-6xl text-purple-400/30 font-mono rotate-180">{'>'}</div>
          </div>
          
          {/* Resplandor pulsante */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          
          {/* Círculos de carga tipo terminal */}
          <div className="absolute -inset-2 opacity-30">
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute left-0 top-1/2 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            <div className="absolute right-0 top-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
          </div>
          
          {/* Contenedor de imagen con borde de código */}
          <div className="relative w-60 h-60 sm:w-80 sm:h-80 mx-auto rounded-full overflow-hidden border-4 border-cyan-400/30 shadow-2xl shadow-purple-500/30 group hover:border-cyan-400/60 transition-all duration-300">
            {/* Efecto de escaneo de línea */}
            <div className="absolute inset-0 pointer-events-none z-10">
              <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-scan-line"></div>
            </div>
            
            <img
  src={luis}
  alt="Profile"
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
/>

            
            {/* Overlay de matriz de código */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-mono text-xs overflow-hidden">
              <div className="animate-matrix-rain text-cyan-400/20">
                01001000 01100101 01101100 01101100 01101111
              </div>
            </div>
          </div>

          {/* Símbolos de código flotantes alrededor de la imagen */}
          <div className="absolute top-10 -left-8 text-cyan-400/40 text-2xl font-mono animate-float-symbol">{'{ }'}</div>
          <div className="absolute bottom-10 -right-8 text-purple-400/40 text-2xl font-mono animate-float-symbol" style={{ animationDelay: '1s' }}>{'< >'}</div>
          <div className="absolute top-1/2 -left-6 text-pink-400/40 text-xl font-mono animate-float-symbol" style={{ animationDelay: '2s' }}>{'( )'}</div>
        </div>
      </div>

      <style>{`
        @keyframes float-code {
          0% {
            transform: translateY(100vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-20vh) translateX(50px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes cursor-blink {
          0%, 50% {
            opacity: 1;
          }
          51%, 100% {
            opacity: 0;
          }
        }

        @keyframes pulse-code {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes spin-bracket-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes scan-line {
          0% {
            top: 0;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        @keyframes float-symbol {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }

        @keyframes matrix-rain {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        @keyframes fade-in-out {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.05;
          }
        }

        .animate-float-code {
          animation: float-code linear infinite;
        }

        .animate-cursor-blink {
          animation: cursor-blink 1s step-end infinite;
        }

        .animate-pulse-code {
          animation: pulse-code 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-spin-bracket-slow {
          animation: spin-bracket-slow 30s linear infinite;
        }

        .animate-scan-line {
          animation: scan-line 3s ease-in-out infinite;
        }

        .animate-float-symbol {
          animation: float-symbol 3s ease-in-out infinite;
        }

        .animate-matrix-rain {
          animation: matrix-rain 5s linear infinite;
        }

        .animate-fade-in-out {
          animation: fade-in-out 3s ease-in-out infinite;
        }

        .bg-grid-terminal {
          background-image: 
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </section>
  );
}