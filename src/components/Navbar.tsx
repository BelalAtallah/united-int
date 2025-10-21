import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3 animate-fade-in">
            <div className="transition-transform hover:scale-105 duration-300">
              <Logo className="w-12 h-12" />
            </div>
            <div className="flex flex-col">
              <span className="text-md  font-bold text-gray-800 hover:text-gold-600 transition-colors lg:text-2xl">المتحدون انترناشيونال</span>
              <span className="text-xs text-gray-600">United International F.Z.E</span>
            </div>
          </div>

          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-gold-600 font-medium transition-all duration-300 text-lg relative group"
            >
              الرئيسية
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-gold-600 font-medium transition-all duration-300 text-lg relative group"
            >
              من نحن
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-gold-600 font-medium transition-all duration-300 text-lg relative group"
            >
              المعرض
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-gold-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-right text-gray-700 hover:text-gold-600 hover:bg-gold-50 font-medium text-lg py-2 px-3 rounded-lg transition-all duration-300"
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-right text-gray-700 hover:text-gold-600 hover:bg-gold-50 font-medium text-lg py-2 px-3 rounded-lg transition-all duration-300"
            >
              من نحن
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-right text-gray-700 hover:text-gold-600 hover:bg-gold-50 font-medium text-lg py-2 px-3 rounded-lg transition-all duration-300"
            >
              المعرض
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
