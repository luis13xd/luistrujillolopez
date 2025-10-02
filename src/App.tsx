import { useState, useEffect } from "react";
import {
  Code,
  Briefcase,
  GraduationCap,
  Wrench,
  FolderGit2,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Menu,
  X,
  Award,
} from "lucide-react";
import { proyectos } from "./data/proyectos";
import { tecnologias } from "./data/tegnologias";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState<string>("inicio");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "inicio",
        "experiencia",
        "tecnologias",
        "proyectos",
        "contacto",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-purple-500/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            &lt;LuisTrujill/&gt;
          </div>

          <div className="hidden md:flex gap-8">
            {[
              "inicio",
              "experiencia",
              "tecnologias",
              "proyectos",
              "contacto",
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 hover:text-cyan-400 relative group ${
                  activeSection === section ? "text-cyan-400" : ""
                }`}
              >
                {section}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 ${
                    activeSection === section
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            ))}
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-purple-500/20">
            {[
              "inicio",
              "experiencia",
              "tecnologias",
              "proyectos",
              "contacto",
            ].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-6 py-4 capitalize hover:bg-purple-500/10 transition-colors"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

     {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 backdrop-blur-sm">
              <span className="text-cyan-400 flex items-center gap-2">
                <Code size={20} /> Desarrollador Web
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold">
              Hola, soy
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tu Nombre
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Creo experiencias web excepcionales con código limpio y diseños modernos. 
              Especializado en React, Node.js y tecnologías web de última generación.
            </p>
            <div className="flex gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('proyectos')}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all duration-300"
              >
                Ver Proyectos
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
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

      {/* Experience & Education */}
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
                {[
                  {
                    puesto: 'Senior Frontend Developer',
                    empresa: 'Tech Company Inc.',
                    periodo: '2022 - Presente',
                    descripcion: 'Desarrollo de aplicaciones web escalables con React y Next.js. Liderazgo de equipo y mentoría.'
                  },
                  {
                    puesto: 'Full Stack Developer',
                    empresa: 'Digital Agency',
                    periodo: '2020 - 2022',
                    descripcion: 'Construcción de soluciones web completas usando MERN stack. Implementación de APIs RESTful.'
                  },
                  {
                    puesto: 'Junior Web Developer',
                    empresa: 'StartUp XYZ',
                    periodo: '2018 - 2020',
                    descripcion: 'Desarrollo frontend con JavaScript vanilla y frameworks modernos. Optimización de rendimiento.'
                  }
                ].map((exp, i) => (
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
                {[
                  {
                    titulo: 'Ingeniería en Sistemas',
                    institucion: 'Universidad Nacional',
                    periodo: '2014 - 2018',
                    descripcion: 'Especialización en desarrollo web y arquitectura de software. Proyecto de grado con mención honorífica.'
                  },
                  {
                    titulo: 'Certificación React Avanzado',
                    institucion: 'Platzi / Udemy',
                    periodo: '2021',
                    descripcion: 'Curso especializado en React, Redux, Hooks y arquitectura de componentes modernos.'
                  },
                  {
                    titulo: 'Full Stack Web Development',
                    institucion: 'FreeCodeCamp',
                    periodo: '2019',
                    descripcion: 'Certificación completa en desarrollo web frontend y backend con JavaScript.'
                  }
                ].map((edu, i) => (
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

      {/* Technologies */}
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
            {tecnologias.map((tech, i) => (
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
              {['REST APIs', 'GraphQL', 'Docker', 'AWS', 'CI/CD', 'Testing', 'Agile/Scrum', 'UI/UX Design'].map((skill, i) => (
                <span key={i} className="px-4 py-2 bg-purple-500/20 rounded-full border border-purple-400/30 hover:bg-purple-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-110">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="proyectos" className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full">
          <div className="flex items-center justify-center gap-3 mb-16">
            <FolderGit2 className="text-purple-400" size={40} />
            <h2 className="text-5xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Proyectos
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {proyectos.map((proyecto, i) => (
              <div key={i} className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={proyecto.imagen} 
                    alt={proyecto.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-cyan-400">{proyecto.titulo}</h3>
                  <p className="text-gray-300 mb-4">{proyecto.descripcion}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proyecto.tecnologias.map((tech, j) => (
                      <span key={j} className="px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-400/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                      <ExternalLink size={18} /> Ver Demo
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 hover:transform hover:-translate-y-1">
                      <Github size={18} /> Código
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
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

      {/* Footer */}
      <footer className="py-8 border-t border-purple-500/20 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Tu Nombre. Diseñado y desarrollado con 
            <span className="text-cyan-400"> React</span> y 
            <span className="text-purple-400"> Tailwind CSS</span>
          </p>
        </div>
      </footer>
    </div>
  
  );
}
