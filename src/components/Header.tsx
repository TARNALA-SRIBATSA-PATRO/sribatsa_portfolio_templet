
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleDownloadCV = () => {
    // Create a download link for the CV
    const link = document.createElement('a');
    link.href = 'Tarnala_Sribatsa_Patro_Resume.pdf';
    link.download = 'Sribatsa_Patro_Resume.pdf';
    link.click();
  };

  const handleNameClick = () => {
    window.location.reload();
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={handleNameClick}
            className="text-2xl font-bold text-orange-500 hover:text-orange-400 transition-colors duration-200 cursor-pointer"
          >
            Sribatsa Patro
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-300 hover:text-orange-500 transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={handleDownloadCV}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Download CV
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-orange-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-orange-500 transition-colors duration-200 font-medium text-left"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={handleDownloadCV}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 text-left"
              >
                Download CV
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
