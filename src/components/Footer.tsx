
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-heading font-bold">
              Yanis<span className="text-primary-light">.B</span>
            </h3>
            <p className="text-gray-400 mt-1">
              Étudiant développeur passionné
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              &copy; {currentYear} Yanis Boussaid. Tous droits réservés.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Portfolio créé avec React et TailwindCSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
