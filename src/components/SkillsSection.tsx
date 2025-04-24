import { Code, Database, Globe, Server } from "lucide-react";
import { SkillIcon } from "@/components/ui/skill-icon";
import ServiceCard from "@/components/ServiceCard";
import { Progress } from "@/components/ui/progress";

type Skill = {
  name: string;
  Icon: typeof Code;
  color: string;
  level: number;
};

const SkillsSection = () => {
  const languages: Skill[] = [
    { name: "HTML", Icon: Code, color: "text-tech-html", level: 100 },
    { name: "PHP", Icon: Code, color: "text-tech-php", level: 80 },
    { name: "Python", Icon: Code, color: "text-tech-python", level: 85 },
  ];

  const libraries: Skill[] = [
    { name: "Pygame", Icon: Code, color: "text-tech-python", level: 75 },
  ];

  const cms: Skill[] = [
    { name: "WordPress", Icon: Globe, color: "text-tech-wordpress", level: 90 },
  ];

  const systems: Skill[] = [
    { name: "Ubuntu", Icon: Server, color: "text-tech-ubuntu", level: 85 },
    { name: "Debian", Icon: Server, color: "text-tech-debian", level: 80 },
    { name: "CentOS", Icon: Server, color: "text-tech-centos", level: 75 },
  ];

  const servers: Skill[] = [
    { name: "Apache", Icon: Server, color: "text-tech-apache", level: 85 },
    { name: "Nginx", Icon: Server, color: "text-tech-nginx", level: 80 },
  ];

  const security: Skill[] = [
    { name: "SSL/HTTPS", Icon: Database, color: "text-tech-ssl", level: 90 },
  ];

  const services = [
    {
      title: "Développement de sites statiques",
      description: "Création de sites web responsive avec HTML, CSS et PHP."
    },
    {
      title: "Gestion de serveurs",
      description: "Configuration et maintenance de serveurs web sous Linux."
    },
    {
      title: "Intégration web",
      description: "Intégration de maquettes et développement front-end."
    },
    {
      title: "Déploiement sécurisé",
      description: "Mise en place de certificats SSL et sécurisation de sites."
    }
  ];

  const skillCard = (title: string, skills: Skill[]) => (
    <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <SkillIcon 
                icon={skill.Icon}
                name={skill.name}
                color={skill.color}
              />
              <span className="text-sm font-medium">{skill.level}%</span>
            </div>
            <Progress value={skill.level} className="h-2" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="section bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Compétences</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCard("Langages", languages)}
          {skillCard("Librairies", libraries)}
          {skillCard("CMS", cms)}
          {skillCard("Systèmes", systems)}
          {skillCard("Serveurs", servers)}
          {skillCard("Sécurité", security)}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Ce que je peux faire</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                className={`animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
