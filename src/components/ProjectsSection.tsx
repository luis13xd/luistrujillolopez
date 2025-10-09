import { FolderGit2, ExternalLink, Github } from "lucide-react";
import { projectsData } from "../data/proyectos";

export default function ProjectsSection() {
  const handleVerDemo = (url?: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      alert("Demo no disponible");
    }
  };

  const handleVerCodigo = (url?: string | string[]) => {
    if (!url) {
      alert("Código no disponible");
      return;
    }

    // Si es un array, abrir todas las URLs
    if (Array.isArray(url)) {
      url.forEach((u) => window.open(u, "_blank", "noopener,noreferrer"));
    } else {
      // Si es un string, abrir solo esa URL
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      id="proyectos"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl w-full">
        <div className="flex items-center justify-center gap-3 mb-16">
          <FolderGit2 className="text-purple-400" size={40} />
          <h2 className="text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Proyectos
            </span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((proyecto, i) => (
            <div
              key={i}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-4">
                <h3 className="text-2xl font-bold mb-3 text-cyan-400">
                  {proyecto.titulo}
                </h3>
                <p className="text-gray-300 mb-4">{proyecto.descripcion}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {proyecto.tecnologias.map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleVerDemo(proyecto.urlDemo)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
                  >
                    <ExternalLink size={18} />Demo
                  </button>
                  {Array.isArray(proyecto.urlCodigo) ? (
                    proyecto.urlCodigo.map((link, idx) => (
                      <button
                        key={idx}
                        onClick={() =>
                          window.open(link, "_blank", "noopener,noreferrer")
                        }
                        className="flex items-center gap-1 px-2 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400/10"
                      >
                        <Github size={18} /> Código
                      </button>
                    ))
                  ) : (
                    <button
                      onClick={() => handleVerCodigo(proyecto.urlCodigo)}
                      className="flex items-center gap-1 px-2 py-2 border border-cyan-400 rounded-lg hover:bg-cyan-400/10"
                    >
                      <Github size={18} /> Código
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
