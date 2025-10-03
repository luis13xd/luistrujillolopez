import { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { Wrench } from "lucide-react";
import { technologiesData, skillsData } from "../data/tegnologias";

export interface Technology {
  nombre: string;
  color: string;
  img?: string | null;
}

export default function TechnologiesSection() {
  const speed = 0.02; // velocidad angular
  const items = technologiesData;

  // posiciones angulares iniciales
  const angles = useRef(items.map((_, i) => (i / items.length) * 2 * Math.PI));

  useAnimationFrame(() => {
    angles.current = angles.current.map(
      (angle) => (angle + speed) % (2 * Math.PI)
    );
  });

  // Calcula un radio proporcional al ancho de la ventana
  const radius = Math.min(window.innerWidth * 0.26, 500);

  return (
    <section
      id="tecnologias"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
    >
      {/* Título */}
      <div className="flex items-center justify-center gap-3 mb-2">
        <Wrench className="text-cyan-400" size={40} />
        <h2 className="text-5xl font-bold">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Tecnologías
          </span>
        </h2>
      </div>

      {/* Carrusel */}
      <div
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{ height: radius * 1 }}
      >
        {items.map((tech, i) => {
          const angle = angles.current[i];
          const x = radius * Math.cos(angle) * 1.2;
          const y = radius * Math.sin(angle) * 0.25;

          const scale = 0.5 + (0.5 * (Math.sin(angle) + 1)) / 2;
          const opacity = 0.3 + (0.7 * (Math.sin(angle) + 1)) / 2;
          const zIndex = Math.round(scale * 10);

          return (
            <motion.div
              key={tech.nombre}
              className="absolute top-1/2 left-1/2 flex flex-col items-center justify-center"
              style={{
                x: `${x}%`,
                y,
                scale,
                opacity,
                zIndex,
                translateX: "-50%",
                translateY: "-50%",
              }}
            >
              {/* Card con icono */}
              <div
                className={`w-28 h-28 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg`}
              >
                {tech.img ? (
                  <img
                    src={tech.img}
                    alt={tech.nombre}
                    className="w-16 h-16 object-contain"
                  />
                ) : (
                  <span className="text-white font-bold text-xl">
                    {tech.nombre.charAt(0)}
                  </span>
                )}
              </div>
              {/* Nombre debajo */}
              <span className="mt-2 text-sm font-medium text-white">
                {tech.nombre}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Skills */}
      <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/30 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm w-full max-w-6xl">
        <h3 className="text-2xl font-bold mb-4 text-cyan-400">
          Otras Habilidades
        </h3>
        <div className="flex flex-wrap gap-3">
          {skillsData.map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-purple-500/20 rounded-full border border-purple-400/30 hover:bg-purple-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
