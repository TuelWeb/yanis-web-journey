
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    const navHeight = 80; // Approximate navbar height
    const offsetPosition = element?.offsetTop ?? 0 - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container flex justify-between items-center">
        <a href="#home" className="text-xl md:text-2xl font-heading font-bold text-gray-900">
          Yanis<span className="text-primary">.B</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => scrollToSection("about")} className="nav-link">À propos</button>
          <button onClick={() => scrollToSection("skills")} className="nav-link">Compétences</button>
          <button onClick={() => scrollToSection("projects")} className="nav-link">Projets</button>
          <button onClick={() => scrollToSection("contact")} className="nav-link">Contact</button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
          <div className="flex flex-col space-y-4 px-6">
            <button onClick={() => scrollToSection("about")} className="nav-link text-left py-2">À propos</button>
            <button onClick={() => scrollToSection("skills")} className="nav-link text-left py-2">Compétences</button>
            <button onClick={() => scrollToSection("projects")} className="nav-link text-left py-2">Projets</button>
            <button onClick={() => scrollToSection("contact")} className="nav-link text-left py-2">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
