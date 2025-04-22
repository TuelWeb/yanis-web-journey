
import { useState } from "react";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    
    // Simulation de l'envoi du formulaire
    setTimeout(() => {
      // Dans une implémentation réelle, vous auriez une API pour envoyer le formulaire
      console.log("Form submitted:", formData);
      setFormStatus("success");
      
      // Reset form after success
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      
      // Reset form status after a few seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="section">
      <div className="section-container">
        <h2 className="section-title">Contact</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Envoyez-moi un message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="votre.email@exemple.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Votre message..."
                />
              </div>
              
              <button
                type="submit"
                disabled={formStatus === "sending"}
                className="btn-primary w-full justify-center"
              >
                {formStatus === "sending" ? "Envoi en cours..." : "Envoyer"}
              </button>
              
              {formStatus === "success" && (
                <p className="text-green-600 text-center">
                  Votre message a été envoyé avec succès !
                </p>
              )}
              
              {formStatus === "error" && (
                <p className="text-red-600 text-center">
                  Une erreur est survenue. Veuillez réessayer.
                </p>
              )}
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Mes coordonnées</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:yanisb03@icloud.com" 
                  className="flex items-center text-gray-700 hover:text-primary transition-colors group"
                >
                  <span className="bg-primary bg-opacity-10 p-3 rounded-full mr-4 group-hover:bg-opacity-20 transition-all">
                    <Mail className="text-primary" size={20} />
                  </span>
                  <span>yanisb03@icloud.com</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center text-gray-700 hover:text-primary transition-colors group"
                >
                  <span className="bg-primary bg-opacity-10 p-3 rounded-full mr-4 group-hover:bg-opacity-20 transition-all">
                    <Linkedin className="text-primary" size={20} />
                  </span>
                  <span>LinkedIn</span>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center text-gray-700 hover:text-primary transition-colors group"
                >
                  <span className="bg-primary bg-opacity-10 p-3 rounded-full mr-4 group-hover:bg-opacity-20 transition-all">
                    <Github className="text-primary" size={20} />
                  </span>
                  <span>GitHub</span>
                </a>
                
                <div className="flex items-center text-gray-700 group">
                  <span className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <Phone className="text-primary" size={20} />
                  </span>
                  <span>Sur demande</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h4 className="text-lg font-semibold mb-4">Ma motivation</h4>
              <p className="text-gray-700">
                Je suis disponible pour toute opportunité d'alternance, de stage ou de collaboration dans le domaine du développement web ou de l'administration système. N'hésitez pas à me contacter !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
