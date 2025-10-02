// Portfolio.tsx o App.tsx
import { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import ExperienceSection from '../components/ExperienceSection';
import TechnologiesSection from '../components/TechnologiesSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Portafolio() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 👇 estado para el cursor
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["inicio", "experiencia", "tecnologias", "proyectos", "contacto"];
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

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative">

      <style>{`body { cursor: none; }`}</style>

      <Navigation
        activeSection={activeSection}
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollToSection={scrollToSection}
      />
      <HeroSection scrollToSection={scrollToSection} />
      <ExperienceSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />

      {/* Cursor custom */}
      <div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-white pointer-events-none 
                   shadow-[0_0_25px_8px_rgba(255,255,255,0.9)] mix-blend-difference 
                   transition-transform duration-100 ease-out z-50"
        style={{
          transform: `translate(${cursorPos.x - 12}px, ${cursorPos.y - 12}px)`,
        }}
      />
    </div>
  );
}
