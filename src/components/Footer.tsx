const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-orange-500 mb-2">
              Tarnala Sribatsa Patro
            </div>
            <p className="text-gray-400 text-sm">
              Backend Developer | Problem Solver | Tech Enthusiast
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              All rights reserved © {currentYear} Tarnala Sribatsa Patro
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with passion and modern web technologies
            </p>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs">
            "Code is like humor. When you have to explain it, it's bad." - Cory House
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
