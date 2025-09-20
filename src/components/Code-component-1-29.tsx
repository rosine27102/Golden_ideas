import { useState, useEffect } from 'react';
import { ChevronDown, Lightbulb, Users, Target, Award, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  language: 'fr' | 'en';
}

export function HeroSection({ language }: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = {
    fr: {
      slides: [
        {
          title: "NOS VALEURS",
          subtitle: "Les piliers de notre excellence",
          values: [
            { icon: Lightbulb, text: "Innovation" },
            { icon: Target, text: "Responsabilité" },
            { icon: Users, text: "Esprit d'équipe" },
            { icon: Award, text: "Engagement" },
            { icon: Zap, text: "Excellence" }
          ]
        },
        {
          title: "VOUS AVEZ UNE IDÉE",
          subtitle: "À digitaliser ou dématérialiser ?",
          description: "Contactez-nous pour transformer vos processus !",
          cta: "Contactez-nous"
        },
        {
          title: "GOLDEN IDEAS",
          subtitle: "LA TRANSFORMATION POSITIVE",
          description: "ÉVIDENTE POUR VOTRE ENTREPRISE",
          highlight: "Votre partenaire stratégique pour l'avenir numérique"
        }
      ]
    },
    en: {
      slides: [
        {
          title: "OUR VALUES",
          subtitle: "The pillars of our excellence",
          values: [
            { icon: Lightbulb, text: "Innovation" },
            { icon: Target, text: "Responsibility" },
            { icon: Users, text: "Team Spirit" },
            { icon: Award, text: "Commitment" },
            { icon: Zap, text: "Excellence" }
          ]
        },
        {
          title: "DO YOU HAVE AN IDEA",
          subtitle: "To digitize or dematerialize?",
          description: "Contact us to transform your processes!",
          cta: "Contact Us"
        },
        {
          title: "GOLDEN IDEAS",
          subtitle: "POSITIVE TRANSFORMATION",
          description: "EVIDENT FOR YOUR BUSINESS",
          highlight: "Your strategic partner for the digital future"
        }
      ]
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % content[language].slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [language]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    const element = document.querySelector('#a-propos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentSlideData = content[language].slides[currentSlide];

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1726065235158-d9c3f817f331?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NTc1OTM5NTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Digital transformation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl mb-4 animate-fade-in">
              {currentSlideData.title}
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl mb-6 text-yellow-300">
              {currentSlideData.subtitle}
            </h2>
          </div>

          {/* Values Slide */}
          {currentSlideData.values && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              {currentSlideData.values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:scale-105 transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <value.icon className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
                  <p className="font-medium">{value.text}</p>
                </div>
              ))}
            </div>
          )}

          {/* CTA Slide */}
          {currentSlideData.cta && (
            <div className="mb-12">
              <p className="text-lg sm:text-xl mb-8 text-gray-200">
                {currentSlideData.description}
              </p>
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300"
              >
                {currentSlideData.cta}
              </Button>
            </div>
          )}

          {/* Transform Slide */}
          {currentSlideData.highlight && (
            <div className="mb-12">
              <p className="text-lg sm:text-xl mb-4 text-gray-200">
                {currentSlideData.description}
              </p>
              <p className="text-yellow-300 text-lg">
                {currentSlideData.highlight}
              </p>
            </div>
          )}

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mb-8">
            {content[language].slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-yellow-400' : 'bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToNext}
            className="animate-bounce mx-auto block hover:text-yellow-300 transition-colors duration-300"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}