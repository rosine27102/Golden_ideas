import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from './ui/button';

interface HeaderProps {
  language: 'fr' | 'en';
  onLanguageChange: (lang: 'fr' | 'en') => void;
}

export function Header({ language, onLanguageChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = {
    fr: [
      { href: '#accueil', label: 'Accueil' },
      { href: '#a-propos', label: 'À Propos' },
      { href: '#competences', label: 'Compétences' },
      { href: '#services', label: 'Services' },
      { href: '#contact', label: 'Contact' }
    ],
    en: [
      { href: '#accueil', label: 'Home' },
      { href: '#a-propos', label: 'About' },
      { href: '#competences', label: 'Skills' },
      { href: '#services', label: 'Services' },
      { href: '#contact', label: 'Contact' }
    ]
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">GI</span>
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">Golden Ideas</h1>
              <p className="text-xs text-gray-600 hidden sm:block">HYE</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems[language].map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-yellow-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language Switcher & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onLanguageChange(language === 'fr' ? 'en' : 'fr')}
              className="flex items-center space-x-1"
            >
              <Globe size={16} />
              <span className="uppercase">{language}</span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <nav className="px-4 py-4">
              {menuItems[language].map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 text-gray-700 hover:text-yellow-600 transition-colors duration-200 border-b border-gray-100 last:border-0"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}