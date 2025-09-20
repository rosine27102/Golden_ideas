import { Mail, MapPin, Phone, Globe, Linkedin, Twitter, Facebook } from 'lucide-react';

interface FooterProps {
  language: 'fr' | 'en';
}

export function Footer({ language }: FooterProps) {
  const content = {
    fr: {
      company: "Golden Ideas HYE",
      description: "Votre partenaire stratégique pour la transformation numérique et la digitalisation de vos processus d'entreprise.",
      quickLinks: "Liens rapides",
      services: "Services",
      contact: "Contact",
      followUs: "Suivez-nous",
      rights: "Tous droits réservés.",
      links: [
        { label: "Accueil", href: "#accueil" },
        { label: "À Propos", href: "#a-propos" },
        { label: "Compétences", href: "#competences" },
        { label: "Services", href: "#services" },
        { label: "Contact", href: "#contact" }
      ],
      servicesList: [
        "Dématérialisation",
        "Digitalisation", 
        "Audit Fonction Achat",
        "Formation PCM",
        "Leadership"
      ]
    },
    en: {
      company: "Golden Ideas HYE",
      description: "Your strategic partner for digital transformation and digitization of your business processes.",
      quickLinks: "Quick Links",
      services: "Services",
      contact: "Contact",
      followUs: "Follow Us",
      rights: "All rights reserved.",
      links: [
        { label: "Home", href: "#accueil" },
        { label: "About", href: "#a-propos" },
        { label: "Skills", href: "#competences" },
        { label: "Services", href: "#services" },
        { label: "Contact", href: "#contact" }
      ],
      servicesList: [
        "Dematerialization",
        "Digitalization",
        "Purchasing Function Audit", 
        "PCM Training",
        "Leadership"
      ]
    }
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center">
 <img 
    src='./logo/logo1.jpeg'
    alt="Golden Ideas logo" 
    className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg" 
  />              </div>
              <div>
                <h3 className="text-lg font-bold">{content[language].company}</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {content[language].description}
            </p>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3">{content[language].followUs}</h4>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-600 transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-600 transition-colors duration-300"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-yellow-600 transition-colors duration-300"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{content[language].quickLinks}</h4>
            <ul className="space-y-2">
              {content[language].links.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">{content[language].services}</h4>
            <ul className="space-y-2">
              {content[language].servicesList.map((service, index) => (
                <li key={index} className="text-gray-300 hover:text-yellow-400 transition-colors duration-200">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">{content[language].contact}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">contact@goldenideas.bf</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+226 78 44 66 66</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">Rue Charles Kaboré, Ouaga 2000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">www.goldenideas.bf</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Golden Ideas HYE. {content[language].rights}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200">
                {language === 'fr' ? 'Politique de confidentialité' : 'Privacy Policy'}
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200">
                {language === 'fr' ? 'Conditions d\'utilisation' : 'Terms of Service'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}