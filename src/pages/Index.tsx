
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio Yanis Boussaid – Développeur Junior</title>
        <meta name="description" content="Portfolio de Yanis Boussaid, étudiant développeur passionné par le web et les systèmes, à la recherche d'une alternance en informatique." />
        <meta name="keywords" content="alternance développeur, étudiant BTS, HTML PHP Python, système Linux, jeune développeur" />
      </Helmet>

      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
