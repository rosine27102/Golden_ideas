import { FileText, Smartphone, BarChart3, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';

interface CompetencesSectionProps {
  language: 'fr' | 'en';
}

export function CompetencesSection({ language }: CompetencesSectionProps) {
  const content = {
    fr: {
      title: "NOS COMPÉTENCES",
      subtitle: "Expertise et savoir-faire au service de votre transformation",
      competences: [
        {
          icon: FileText,
          title: "Dématérialisation",
          description: "Transformation des documents physiques en formats numériques sécurisés et accessibles."
        },
        {
          icon: Smartphone,
          title: "Digitalisation",
          description: "Intégration des technologies numériques dans tous les aspects de votre entreprise."
        },
        {
          icon: BarChart3,
          title: "Analyse de Données",
          description: "Valorisation et exploitation intelligente de vos données pour optimiser vos performances."
        },
        {
          icon: Users,
          title: "Formation",
          description: "Accompagnement et montée en compétences de vos équipes sur les nouveaux outils."
        }
      ]
    },
    en: {
      title: "OUR SKILLS",
      subtitle: "Expertise and know-how at the service of your transformation",
      competences: [
        {
          icon: FileText,
          title: "Dematerialization",
          description: "Transformation of physical documents into secure and accessible digital formats."
        },
        {
          icon: Smartphone,
          title: "Digitalization",
          description: "Integration of digital technologies in all aspects of your business."
        },
        {
          icon: BarChart3,
          title: "Data Analysis",
          description: "Intelligent valorization and exploitation of your data to optimize your performance."
        },
        {
          icon: Users,
          title: "Training",
          description: "Support and skills development of your teams on new tools."
        }
      ]
    }
  };

  return (
    <section id="competences" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">
            {content[language].title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content[language].competences.map((competence, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-b from-white to-gray-50 hover:from-yellow-50 hover:to-yellow-100"
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <competence.icon className="w-8 h-8 text-white" />
                  </div>
                  {/* Decorative ring */}
                  <div className="absolute inset-0 w-20 h-20 mx-auto border-2 border-yellow-200 rounded-full animate-ping opacity-0 group-hover:opacity-75"></div>
                </div>
                
                <h3 className="text-xl mb-4 text-gray-900 group-hover:text-yellow-700 transition-colors duration-300">
                  {competence.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {competence.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Background decoration */}
        <div className="relative mt-20">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="w-96 h-96 border-4 border-yellow-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}