"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PartnersSection as PartnersGrid } from '@/components/ui/partners-section';
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';

const partners = [
  {
    id: 1,
    name: "Mairie de Versailles",
    logo: "/images/partners/mairie-versailles.png",
    description: "Soutien institutionnel et mise à disposition d'espaces de pratique",
    category: "Institutionnel",
    website: "https://www.versailles.fr"
  },
  {
    id: 2,
    name: "Centre Culturel Brésilien",
    logo: "/images/partners/ccb.png",
    description: "Partenariat culturel pour la promotion de la culture brésilienne",
    category: "Culturel",
    website: "https://www.ccb-paris.com"
  },
  {
    id: 3,
    name: "Fédération Française de Capoeira",
    logo: "/images/partners/ffc.png",
    description: "Affiliation officielle et organisation d'événements",
    category: "Sportif",
    website: "https://www.capoeira-france.com"
  },
  {
    id: 4,
    name: "Escola de Música",
    logo: "/images/partners/escola-musica.png",
    description: "Formation musicale et ateliers d'instruments traditionnels",
    category: "Musical",
    website: "#"
  },
  {
    id: 5,
    name: "Association Brésilienne de Paris",
    logo: "/images/partners/abp.png",
    description: "Échanges culturels et événements communautaires",
    category: "Culturel",
    website: "#"
  },
  {
    id: 6,
    name: "Gymnase Municipal",
    logo: "/images/partners/gymnase.png",
    description: "Mise à disposition d'espaces d'entraînement",
    category: "Sportif",
    website: "#"
  }
];

// Convert partners data to the format expected by PartnersSection - using same logos as hero section
const partnersLogos = [
  {
    src: "https://html.tailus.io/blocks/customers/nvidia.svg",
    alt: "Nvidia Logo",
    height: 20
  },
  {
    src: "https://html.tailus.io/blocks/customers/column.svg",
    alt: "Column Logo",
    height: 16
  },
  {
    src: "https://html.tailus.io/blocks/customers/github.svg",
    alt: "GitHub Logo",
    height: 16
  },
  {
    src: "https://html.tailus.io/blocks/customers/nike.svg",
    alt: "Nike Logo",
    height: 20
  },
  {
    src: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg",
    alt: "Lemon Squeezy Logo",
    height: 20
  },
  {
    src: "https://html.tailus.io/blocks/customers/laravel.svg",
    alt: "Laravel Logo",
    height: 16
  },
  {
    src: "https://html.tailus.io/blocks/customers/lilly.svg",
    alt: "Lilly Logo",
    height: 28
  },
  {
    src: "https://html.tailus.io/blocks/customers/openai.svg",
    alt: "OpenAI Logo",
    height: 24
  }
];

export default function PartnersSection() {

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-5xl font-semibold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nos Partenaires
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nous collaborons avec des organisations partageant notre passion pour la capoeira. Ensemble, nous créons un écosystème dynamique pour notre communauté.
          </motion.p>
        </div>

        {/* Partners Section using PartnersGrid component */}
        <PartnersGrid 
          partners={partnersLogos}
          className="bg-transparent"
        />

        {/* Partnership CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-3xl p-12 border border-primary-500/20">
            <h3 className="text-3xl font-semibold text-white mb-4">
              Devenir Partenaire
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Rejoignez notre réseau de partenaires. Découvrez les opportunités de collaboration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary-500 text-darker-blue hover:bg-primary-600">
                <Phone className="w-4 h-4 mr-2" />
                Nous contacter
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <Mail className="w-4 h-4 mr-2" />
                Nos prestations
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Statistics Section */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">15+</div>
            <div className="text-gray-300">Années de partenariats</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">50+</div>
            <div className="text-gray-300">Événements organisés</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">1000+</div>
            <div className="text-gray-300">Participants touchés</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-500 mb-2">25+</div>
            <div className="text-gray-300">Partenaires actifs</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
