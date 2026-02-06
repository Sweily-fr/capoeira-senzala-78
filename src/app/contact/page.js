"use client";
import React from 'react';
import { HeroSection } from '@/components/blocks/hero-section-5';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Cta4 } from '@/components/ui/cta-4';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const heroData = {
    title: "Nous contacter",
    description: "N'hésitez pas à nous contacter. Notre équipe est à votre écoute pour vous accompagner.",
    image: "/images/logo-capoeira-senzala-78.jpg",
  };

  return (
    <div className="min-h-screen flex flex-col bg-dark-blue text-white">
      <main className="flex-1">
        <HeroSection
          title={heroData.title}
          description={heroData.description}
          image={heroData.image}
        />

        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0">
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-start">
              {/* Informations de contact avec image */}
              <div className="space-y-8">
                <Card className="border-0 bg-transparent shadow-none p-0">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl font-semibold text-primary-500">Nos coordonnées</CardTitle>
                  <p className="text-gray-300">
                    N'hésitez pas à nous contacter par téléphone, email ou en venant directement nous voir au dojo.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6 p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-transparent border border-primary-500/30 rounded-full text-primary-500">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Adresse</h3>
                      <p className="text-gray-300">
                        123 Rue de la Capoeira,
                        78000 Versailles, France
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-transparent border border-primary-500/30 rounded-full text-primary-500">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <p className="text-gray-300">
                        contact@senzala78.fr
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-transparent border border-primary-500/30 rounded-full text-primary-500">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Téléphone</h3>
                      <p className="text-gray-300">
                        +33 6 12 34 56 78
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 bg-transparent border border-primary-500/30 rounded-full text-primary-500">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Horaires d'ouverture</h3>
                      <p className="text-gray-300">
                        Lundi - Vendredi: 9h00 - 21h00<br />
                        Samedi: 10h00 - 18h00<br />
                        Dimanche: Fermé
                      </p>
                    </div>
                  </div>
                </CardContent>
                </Card>
              </div>

              {/* Image à côté des informations de contact */}
              <div className="relative rounded-xl overflow-hidden w-fit ml-auto">
                <Image
                  src="/images/professionnelle/bananapro.jpg"
                  alt="Cours de capoeira Senzala 78"
                  width={400}
                  height={600}
                  className="h-[500px] w-auto object-contain"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">Rejoignez-nous dès aujourd'hui</h3>
                  <p className="text-gray-200 mb-4">
                    Découvrez l'univers passionnant de la capoeira avec nos cours adaptés à tous les niveaux.
                  </p>
                  <Button
                    asChild
                    className="bg-primary-500 hover:bg-primary-600 text-dark-blue font-medium"
                  >
                    <Link href="/cours-tarifs">
                      Voir les cours
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Section CTA */}
        <div className="container mx-auto px-4">
          <Cta4 />
        </div>
        
        <Footer />
      </main>
    </div>
  );
}