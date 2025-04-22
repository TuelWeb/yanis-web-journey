
import ProjectCard from "@/components/ProjectCard";

type Project = {
  title: string;
  description: string;
  image: string; 
  technologies: string[];
  link?: string;
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Site du lycée",
      description: "Projet validé par la direction (non encore en ligne)",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120' fill='none'%3E%3Crect width='120' height='120' fill='%231976D2' fill-opacity='0.2'/%3E%3Cpath d='M60 30L80 65L100 100H60H20L40 65L60 30Z' fill='%231976D2' fill-opacity='0.5'/%3E%3C/svg%3E",
      technologies: ["HTML", "CSS", "PHP"]
    },
    {
      title: "Nuit du Code",
      description: "2ème place concours régional - Mini-jeu",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120' fill='none'%3E%3Crect width='120' height='120' fill='%23306998' fill-opacity='0.2'/%3E%3Ccircle cx='60' cy='60' r='30' fill='%23306998' fill-opacity='0.5'/%3E%3C/svg%3E",
      technologies: ["Python", "Pygame"]
    },
    {
      title: "Projet personnel",
      description: "Exploration de mes compétences en développement",
      image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120' fill='none'%3E%3Crect width='120' height='120' fill='%23388E3C' fill-opacity='0.2'/%3E%3Cpath d='M40 40H80V80H40V40Z' fill='%23388E3C' fill-opacity='0.5'/%3E%3C/svg%3E",
      technologies: ["HTML", "CSS", "JavaScript"]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="section-container">
        <h2 className="section-title">Projets</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <ProjectCard 
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
