import { Briefcase, GraduationCap, Award } from 'lucide-react';
import { experienceData, educationData } from '../data/experience';

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experiencia & Educación
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-cyan-400" size={32} />
              <h3 className="text-3xl font-bold">Experiencia</h3>
            </div>

            <div className="space-y-6">
              {experienceData.map((exp, i) => (
                <div key={i} className="bg-gradient-to-r from-slate-800/50 to-purple-900/30 p-6 rounded-xl border border-purple-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-xl font-bold text-cyan-400">{exp.puesto}</h4>
                    <Award className="text-purple-400" size={20} />
                  </div>
                  <p className="text-purple-300 font-semibold mb-2">{exp.empresa}</p>
                  <p className="text-gray-400 text-sm mb-3">{exp.periodo}</p>
                  <p className="text-gray-300">{exp.descripcion}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-purple-400" size={32} />
              <h3 className="text-3xl font-bold">Educación</h3>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, i) => (
                <div key={i} className="bg-gradient-to-r from-purple-900/30 to-slate-800/50 p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-xl font-bold text-purple-400">{edu.titulo}</h4>
                    <GraduationCap className="text-cyan-400" size={20} />
                  </div>
                  <p className="text-cyan-300 font-semibold mb-2">{edu.institucion}</p>
                  <p className="text-gray-400 text-sm mb-3">{edu.periodo}</p>
                  <p className="text-gray-300">{edu.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}