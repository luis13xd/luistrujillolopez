import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
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
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-purple-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          &lt;DevPortfolio/&gt;
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
  );
};
