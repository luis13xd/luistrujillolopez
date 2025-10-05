import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import { technologiesData, skillsData } from "../data/tegnologias";
import { useRotatingTechnologies } from "../hooks/useRotatingTechnologies";
import { useState, useEffect } from "react";

export default function TechnologiesSection() {
  const { radius, getItemStyle } = useRotatingTechnologies(technologiesData);
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isSmall = width < 640;
  const isMedium = width >= 640 && width < 1024;
  const carouselHeight = isSmall ? 190 : isMedium ? 300 : radius * 1;

  return (
    <section
      id="tecnologias"
      className="min-h-screen flex flex-col items-center mb-0 px-4 sm:px-6 py-18 sm:py-18 lg:py-20"
    >
      {/* Título */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-0">
        <Wrench className="text-cyan-400 w-8 h-8 sm:w-10 sm:h-10" />
        <h2 className="text-5xl font-bold text-center">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Tecnologías
          </span>
        </h2>
      </div>

      {/* Carrusel o grid según tamaño */}
      <div
        className={`relative w-full flex items-center justify-center overflow-hidden max-w-6xl ${
          isSmall ? "flex-col" : ""
        }`}
        style={{ height: !isSmall ? carouselHeight : "auto" }}
      >
        {isSmall ? (
          <div className="grid grid-cols-3 xs:grid-cols-4  gap-4 w-full justify-items-center">
            {technologiesData.map((tech) => (
              <div
                key={tech.nombre}
                className="flex flex-col items-center justify-center text-center"
              >
                <div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105`}
                >
                  {tech.img ? (
                    <img
                      src={tech.img}
                      alt={tech.nombre}
                      className="w-10 h-10 object-contain"
                    />
                  ) : (
                    <span className="text-white font-bold text-lg">
                      {tech.nombre.charAt(0)}
                    </span>
                  )}
                </div>
                <span className="mt-2 text-sm font-medium text-white">
                  {tech.nombre}
                </span>
              </div>
            ))}
          </div>
        ) : (
          technologiesData.map((tech, i) => {
            const { x, y, scale, opacity, zIndex } = getItemStyle(i);
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
                <div
                  className={`rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-105
                    w-28 h-28
                  `}
                >
                  {tech.img ? (
                    <img
                      src={tech.img}
                      alt={tech.nombre}
                      className="object-contain w-16 h-16"
                    />
                  ) : (
                    <span className="text-white font-bold text-xl">
                      {tech.nombre.charAt(0)}
                    </span>
                  )}
                </div>
                <span className="mt-2 text-base font-medium text-white">
                  {tech.nombre}
                </span>
              </motion.div>
            );
          })
        )}
      </div>

      {/* Skills */}
      <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/30 p-4 sm:p-6 rounded-2xl border border-purple-500/20 backdrop-blur-sm w-full max-w-6xl mt-6 sm:mt-8">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-cyan-400 text-center sm:text-left">
          Otras Habilidades
        </h3>
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
          {skillsData.map((skill, i) => (
            <span
              key={i}
              className="px-3 sm:px-4 py-2 bg-purple-500/20 rounded-full border border-purple-400/30 hover:bg-purple-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 text-sm sm:text-base"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
