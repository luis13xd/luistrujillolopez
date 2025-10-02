import { Mail, Github, Linkedin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contacto" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Mail className="text-cyan-400" size={40} />
          <h2 className="text-5xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Contacto
            </span>
          </h2>
        </div>
        
        <p className="text-center text-xl text-gray-300 mb-12">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>

        <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/30 p-8 md:p-12 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-semibold mb-2 text-cyan-400">Nombre</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2 text-cyan-400">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors"
                placeholder="tu@email.com"
              />
            </div>
          </div>
          
          <div className="mb-8">
            <label className="block text-sm font-semibold mb-2 text-cyan-400">Mensaje</label>
            <textarea 
              rows={5}
              className="w-full px-4 py-3 bg-slate-900/50 border border-purple-500/30 rounded-lg focus:border-cyan-400 focus:outline-none transition-colors resize-none"
              placeholder="Cuéntame sobre tu proyecto..."
            ></textarea>
          </div>
          
          <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all duration-300">
            Enviar Mensaje
          </button>
        </div>

        <div className="flex justify-center gap-6 mt-12">
          {[
            { icon: <Github size={28} />, label: 'GitHub' },
            { icon: <Linkedin size={28} />, label: 'LinkedIn' },
            { icon: <Mail size={28} />, label: 'Email' }
          ].map((social, i) => (
            <button
              key={i}
              className="p-4 bg-slate-800/50 backdrop-blur-sm rounded-full border border-purple-500/20 hover:border-cyan-400/50 hover:bg-cyan-400/10 transform hover:scale-110 hover:-translate-y-2 transition-all duration-300"
              aria-label={social.label}
            >
              {social.icon}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}