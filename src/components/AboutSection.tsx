import { Building, Stethoscope, Zap, Leaf, Utensils, Users, Pickaxe, GraduationCap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutSectionProps {
  language: 'fr' | 'en';
}

export function AboutSection({ language }: AboutSectionProps) {
  const content = {
    fr: {
      title: "À PROPOS",
      description: `GOLDEN IDEAS HYE est un acteur de la transformation des performances des entreprises qui ambitionnent de se positionner comme le partenaire stratégique de ses clients en les accompagnant dans la dématérialisation, la digitalisation, la formation, la maîtrise et la valorisation de leurs données.`,
      intervention: "Nous intervenons dans :",
      sectors: [
        { icon: Building, name: "L'industrie financière" },
        { icon: Stethoscope, name: "La médecine" },
        { icon: Zap, name: "L'énergie" },
        { icon: Leaf, name: "L'environnement" },
        { icon: Utensils, name: "L'agro-alimentaire" },
        { icon: Users, name: "Les organisations" },
        { icon: Pickaxe, name: "Les mines" },
        { icon: GraduationCap, name: "La formation" }
      ]
    },
    en: {
      title: "ABOUT US",
      description: `GOLDEN IDEAS HYE is a key player in business performance transformation that aims to position itself as the strategic partner of its clients by supporting them in dematerialization, digitalization, training, mastery and valorization of their data.`,
      intervention: "We operate in:",
      sectors: [
        { icon: Building, name: "Financial industry" },
        { icon: Stethoscope, name: "Medicine" },
        { icon: Zap, name: "Energy" },
        { icon: Leaf, name: "Environment" },
        { icon: Utensils, name: "Agri-food" },
        { icon: Users, name: "Organizations" },
        { icon: Pickaxe, name: "Mining" },
        { icon: GraduationCap, name: "Training" }
      ]
    }
  };

  return (
    <section id="a-propos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 text-gray-900">
            {content[language].title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              {content[language].description}
            </p>
            
            <h3 className="text-2xl mb-6 text-gray-900">
              {content[language].intervention}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content[language].sectors.map((sector, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <sector.icon className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                  <span className="text-gray-700">{sector.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1716703742287-2b06c3c6d81a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3NTc2MDU4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Team collaboration"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-600 rounded-full opacity-10 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}