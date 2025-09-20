import { Mail, MapPin, Phone, Clock, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

interface ContactSectionProps {
  language: 'fr' | 'en';
}

export function ContactSection({ language }: ContactSectionProps) {
  const content = {
    fr: {
      title: "CONTACT",
      subtitle: "Parlons de votre projet de transformation numérique",
      contactInfo: "Informations de contact",
      supportTitle: "AIDE ET SUPPORT",
      supportDescription: "Du lundi au Samedi 6 jours / 7 de 7H30 à 18H00.",
      supportQuestion: "Comment pouvons-nous vous aider ?",
      supportText: "Nous proposons une variété de services dans l'univers du digital. N'hésitez pas à nous contacter si vous ne trouvez pas ce que vous cherchez.",
      formTitle: "Envoyez-nous un message",
      name: "Nom complet",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      send: "Envoyer le message"
    },
    en: {
      title: "CONTACT",
      subtitle: "Let's talk about your digital transformation project",
      contactInfo: "Contact Information",
      supportTitle: "HELP AND SUPPORT",
      supportDescription: "Monday to Saturday 6 days / 7 from 7:30 AM to 6:00 PM.",
      supportQuestion: "How can we help you?",
      supportText: "We offer a variety of services in the digital universe. Do not hesitate to contact us if you cannot find what you are looking for.",
      formTitle: "Send us a message",
      name: "Full name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      send: "Send message"
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-gray-900">
            {content[language].title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="h-full border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white">
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="w-5 h-5" />
                  <span>{content[language].contactInfo}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <p className="text-gray-600">contact@goldenideas.bf</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Adresse</h4>
                      <p className="text-gray-600">Rue Charles Kaboré, Ouaga 2000</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Téléphone</h4>
                      <p className="text-gray-600">+226 78 44 66 66</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-yellow-600" />
                      <span>{content[language].supportTitle}</span>
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      {content[language].supportDescription}
                    </p>
                    <p className="font-medium text-gray-900 mb-2">
                      {content[language].supportQuestion}
                    </p>
                    <p className="text-sm text-gray-600">
                      {content[language].supportText}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white">
                <CardTitle>{content[language].formTitle}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">{content[language].name}</Label>
                      <Input
                        id="name"
                        type="text"
                        className="mt-2"
                        placeholder={content[language].name}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">{content[language].email}</Label>
                      <Input
                        id="email"
                        type="email"
                        className="mt-2"
                        placeholder={content[language].email}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject">{content[language].subject}</Label>
                    <Input
                      id="subject"
                      type="text"
                      className="mt-2"
                      placeholder={content[language].subject}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">{content[language].message}</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      className="mt-2 resize-none"
                      placeholder={content[language].message}
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white py-3"
                  >
                    {content[language].send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}