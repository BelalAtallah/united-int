import { useState } from 'react';
import { Menu, X, Car } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 right-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="bg-gold-500 p-2 rounded-lg">
              <Car className="w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gold-600">المتحدون انترناشيونال</span>
              <span className="text-xs text-gray-600">United International F.Z.E</span>
            </div>
          </div>

          <div className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-gold-600 font-medium transition-colors text-lg"
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-gold-600 font-medium transition-colors text-lg"
            >
              من نحن
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-gold-600 font-medium transition-colors text-lg"
            >
              المعرض
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-gold-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-right text-gray-700 hover:text-gold-600 font-medium text-lg py-2"
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-right text-gray-700 hover:text-gold-600 font-medium text-lg py-2"
            >
              من نحن
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-right text-gray-700 hover:text-gold-600 font-medium text-lg py-2"
            >
              المعرض
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
