import { Wrench } from 'lucide-react';
import { technologiesData, skillsData } from '../data/tegnologias';

export default function TechnologiesSection() {
  return (
    <section id="tecnologias" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <div className="flex items-center justify-center gap-3 mb-16">
          <Wrench className="text-cyan-400" size={40} />
          <h2 className="text-5xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Tecnologías
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologiesData.map((tech, i) => (
            <div
              key={i}
              className="group relative overflow-hidden bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-110 hover:rotate-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              <div className="relative z-10 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl font-bold shadow-lg`}>
                  {tech.nombre.charAt(0)}
                </div>
                <h3 className="text-xl font-bold">{tech.nombre}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-800/50 to-purple-900/30 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">Otras Habilidades</h3>
          <div className="flex flex-wrap gap-3">
            {skillsData.map((skill, i) => (
              <span key={i} className="px-4 py-2 bg-purple-500/20 rounded-full border border-purple-400/30 hover:bg-purple-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-110">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}