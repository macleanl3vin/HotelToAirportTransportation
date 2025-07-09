import React, {useState} from "react";
import {Menu, X} from "lucide-react";
import {useTranslation} from "../hooks/useTranslation";

const Header: React.FC = () => {
  const {t} = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#1F2937] border-b border-[#1F2937] w-full sticky top-0 z-50">
      <div className="w-full flex justify-between items-center px-4 md:px-24 py-3 md:py-1">
        {/* Center Logo/Brand */}
        <div className="flex flex-col items-center">
          <img src="/logoTCL.png" alt="Hotel To Airport Transportation Logo" className="h-20 md:h-32 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-12">
          <a href="#services" className="text-gray-300 hover:text-gray-100 text-2xl font-light transition-colors duration-200">
            options
          </a>
          <a href="#about" className="text-gray-300 hover:text-gray-100 text-2xl font-light transition-colors duration-200">
            about
          </a>
          <a href="#hotels" className="text-gray-300 hover:text-gray-100 text-2xl font-light transition-colors duration-200">
            hotels
          </a>
          <a href="#reviews" className="text-gray-300 hover:text-gray-100 text-2xl font-light transition-colors duration-200">
            reviews
          </a>
        </nav>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white hover:text-gray-300 transition-colors duration-200 p-3 rounded-lg"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1F2937] border-t border-gray-600">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <a
              href="#services"
              className="text-gray-300 hover:text-gray-100 text-lg font-light transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              options
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-gray-100 text-lg font-light transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              about
            </a>
            <a
              href="#hotels"
              className="text-gray-300 hover:text-gray-100 text-lg font-light transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              hotels
            </a>
            <a
              href="#reviews"
              className="text-gray-300 hover:text-gray-100 text-lg font-light transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              reviews
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
