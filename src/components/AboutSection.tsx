
import { FileText } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">À propos</h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="prose max-w-none">
              <p className="text-lg mb-4">
                Je m'appelle Yanis, j'ai 17 ans, et je suis passionné d'informatique depuis plusieurs années. Je maîtrise HTML, PHP, Python et les CMS comme WordPress.
              </p>
              <p className="text-lg mb-4">
                J'ai conçu le site web de mon lycée, validé par la direction et la région, et obtenu la 2e place au concours 'Nuit du Code' (niveau régional).
              </p>
              <p className="text-lg">
                Je suis autonome, rigoureux, et j'aime apprendre. Je suis actuellement à la recherche d'une alternance pour approfondir mes compétences et financer mes études.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4 text-primary">Qualités humaines</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✅</span>
                  <div>
                    <h4 className="font-medium">Autonomie</h4>
                    <p className="text-gray-600">Capable de travailler de manière indépendante et de prendre des initiatives.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✅</span>
                  <div>
                    <h4 className="font-medium">Créativité</h4>
                    <p className="text-gray-600">Approche novatrice des problèmes et capacité à proposer des solutions originales.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✅</span>
                  <div>
                    <h4 className="font-medium">Bonne communication</h4>
                    <p className="text-gray-600">À l'aise dans la communication écrite et orale, facilitant le travail d'équipe.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex justify-center">
              <button className="btn-outline">
                <FileText size={18} />
                Télécharger CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
