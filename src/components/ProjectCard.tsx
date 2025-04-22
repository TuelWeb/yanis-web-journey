
import { Code, Folder, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

const ProjectCard = ({ title, description, image, technologies, link }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-primary bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Folder className="text-white" size={40} />
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4 mt-auto">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="py-1 px-3 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center text-primary">
            <Code size={18} className="mr-1" />
            <span className="text-sm font-medium">Stack technique</span>
          </div>
          
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-primary transition-colors"
            >
              <Github size={18} className="mr-1" />
              <span className="text-sm font-medium">Voir le code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
