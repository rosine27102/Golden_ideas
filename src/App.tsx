import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CompetencesSection } from './components/CompetencesSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  // Add smooth scroll behavior and custom animations
  useEffect(() => {
    // Add custom CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      @keyframes slide-up {
        from { opacity: 0; transform: translateY(40px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .animate-fade-in {
        animation: fade-in 1s ease-out;
      }

      .animate-slide-up {
        animation: slide-up 0.8s ease-out;
      }

      html {
        scroll-behavior: smooth;
      }

      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }

      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #facc15, #eab308);
        border-radius: 4px;
      }

      ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #eab308, #ca8a04);
      }

      /* Smooth transitions for all interactive elements */
      button, a, .card {
        transition: all 0.3s ease;
      }

      /* Parallax effect for hero section */
      .parallax-bg {
        transform: translateZ(0);
        will-change: transform;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Add scroll-based animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleLanguageChange = (lang: 'fr' | 'en') => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      
      <main>
        <HeroSection language={language} />
        <AboutSection language={language} />
        <CompetencesSection language={language} />
        <ServicesSection language={language} />
        <ContactSection language={language} />
      </main>
      
      <Footer language={language} />
    </div>
  );
}