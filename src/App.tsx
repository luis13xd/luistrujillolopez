// Portfolio.tsx o App.tsx
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ExperienceSection from './components/ExperienceSection';
import TechnologiesSection from './components/TechnologiesSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id:string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation activeSection={activeSection} scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <ExperienceSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}