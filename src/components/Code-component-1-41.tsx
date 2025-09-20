import { FileX, Smartphone, Search, GraduationCap, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface ServicesSectionProps {
  language: 'fr' | 'en';
}

export function ServicesSection({ language }: ServicesSectionProps) {
  const content = {
    fr: {
      title: "NOS SERVICES",
      subtitle: "Des solutions complètes pour votre transformation numérique",
      services: [
        {
          icon: FileX,
          title: "DÉMATÉRIALISATION",
          description: "La dématérialisation est le processus de transformation des supports d'information physiques (principalement le papier) en supports numériques.",
          features: [
            "Documents administratifs et commerciaux",
            "Processus métiers",
            "Échanges d'informations",
            "Archivage numérique"
          ],
          details: "Il s'agit de remplacer les documents papier par des fichiers électroniques qui peuvent être stockés, gérés et consultés sur des ordinateurs, des serveurs ou dans le cloud."
        },
        {
          icon: Smartphone,
          title: "DIGITALISATION",
          description: "La digitalisation est le processus d'intégration des technologies numériques dans tous les aspects d'une entreprise ou d'une organisation.",
          features: [
            "Transformation des processus",
            "Optimisation des workflows",
            "Création de nouvelles sources de revenus",
            "Amélioration de l'expérience client"
          ],
          details: "Cela implique l'utilisation de données et de technologies numériques pour transformer la façon dont les activités sont menées."
        },
        {
          icon: Search,
          title: "AUDIT DE LA FONCTION ACHAT",
          description: "L'audit d'achat apporte une réelle solution dans la relation entre une société et ses fournisseurs et ses sous-traitants.",
          features: [
            "Vérification de la sélection fournisseurs",
            "Révision des processus d'achat",
            "Réduction des coûts",
            "Optimisation des performances"
          ],
          details: "Grâce à la technologie et à l'amélioration des processus, nous travaillons pour que votre service achats crée de la valeur."
        },
        {
          icon: GraduationCap,
          title: "FORMATION",
          description: "Formations spécialisées pour améliorer les performances de vos équipes.",
          features: [
            "Méthode PCM",
            "Leadership",
            "Communication",
            "Collaboration"
          ],
          details: "Des solutions personnalisées axées sur l'amélioration de vos relations à travers des ateliers créatifs et des séances de coaching.",
          subServices: [
            {
              title: "MÉTHODE PCM",
              description: "C'est une méthode universelle pour mieux communiquer, collaborer et réduire les conflits.",
              highlight: "Process Communication Model® (PCM) est le premier outil de décodage des interactions humaines."
            },
            {
              title: "LEADERSHIP",
              description: "Développement des compétences de leadership pour managers et dirigeants."
            }
          ]
        }
      ],
      downloadBrochure: "Télécharger la brochure",
      pcmBrochure: "Télécharger la brochure PCM"
    },
    en: {
      title: "OUR SERVICES",
      subtitle: "Complete solutions for your digital transformation",
      services: [
        {
          icon: FileX,
          title: "DEMATERIALIZATION",
          description: "Dematerialization is the process of transforming physical information media (mainly paper) into digital media.",
          features: [
            "Administrative and commercial documents",
            "Business processes",
            "Information exchanges",
            "Digital archiving"
          ],
          details: "It involves replacing paper documents with electronic files that can be stored, managed and accessed on computers, servers or in the cloud."
        },
        {
          icon: Smartphone,
          title: "DIGITALIZATION",
          description: "Digitalization is the process of integrating digital technologies into all aspects of a business or organization.",
          features: [
            "Process transformation",
            "Workflow optimization",
            "Creation of new revenue sources",
            "Customer experience improvement"
          ],
          details: "This involves using data and digital technologies to transform the way activities are conducted."
        },
        {
          icon: Search,
          title: "PURCHASING FUNCTION AUDIT",
          description: "Purchasing audit provides a real solution in the relationship between a company and its suppliers and subcontractors.",
          features: [
            "Supplier selection verification",
            "Purchasing process review",
            "Cost reduction",
            "Performance optimization"
          ],
          details: "Through technology and process improvement, we work to ensure your purchasing department creates value."
        },
        {
          icon: GraduationCap,
          title: "TRAINING",
          description: "Specialized training to improve your team's performance.",
          features: [
            "PCM Method",
            "Leadership",
            "Communication",
            "Collaboration"
          ],
          details: "Personalized solutions focused on improving your relationships through creative workshops and coaching sessions.",
          subServices: [
            {
              title: "PCM METHOD",
              description: "It's a universal method to better communicate, collaborate and reduce conflicts.",
              highlight: "Process Communication Model® (PCM) is the first tool for decoding human interactions."
            },
            {
              title: "LEADERSHIP",
              description: "Leadership skills development for managers and executives."
            }
          ]
        }
      ],
      downloadBrochure: "Download brochure",
      pcmBrochure: "Download PCM brochure"
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">
            {content[language].title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {content[language].services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden"
            >
              <CardHeader className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">
                    {language === 'fr' ? 'Domaines d\'intervention :' : 'Areas of intervention:'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-6 italic">
                  {service.details}
                </p>

                {/* Sub-services for Formation */}
                {service.subServices && (
                  <div className="space-y-4 mb-6">
                    {service.subServices.map((subService, idx) => (
                      <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                        <h5 className="font-semibold text-gray-900 mb-2">{subService.title}</h5>
                        <p className="text-sm text-gray-700 mb-2">{subService.description}</p>
                        {subService.highlight && (
                          <p className="text-sm text-yellow-700 font-medium italic">{subService.highlight}</p>
                        )}
                      </div>
                    ))}
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex items-center space-x-2">
                        <Download size={16} />
                        <span>{content[language].pcmBrochure} FR</span>
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center space-x-2">
                        <Download size={16} />
                        <span>{content[language].pcmBrochure} EN</span>
                      </Button>
                    </div>
                  </div>
                )}

                <Button 
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white"
                >
                  {language === 'fr' ? 'En savoir plus' : 'Learn more'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}