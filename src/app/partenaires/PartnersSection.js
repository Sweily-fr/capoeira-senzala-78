"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { PartnersSection as PartnersGrid } from '@/components/ui/partners-section';
import { Button } from '@/components/ui/button';
import { Phone, Mail, ExternalLink, Star, Heart } from 'lucide-react';

export default function PartnersSection({ logos = [] }) {
  const partnersLogos = logos.map((logo) => ({
    src: logo.src,
    alt: logo.alt,
    height: 32,
    imgClassName: logo.invert ? "invert" : "",
  }));

  return (
    <div className="py-10 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* Uni Verde Featured Section */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <Star className="w-5 h-5 text-green-400 fill-green-400" />
            <span className="text-green-400 font-semibold text-sm uppercase tracking-wider flex items-center gap-2">
              <Heart className="w-4 h-4 fill-green-400 inline" />
              Jumelé à l'association humanitaire
            </span>
            <Star className="w-5 h-5 text-green-400 fill-green-400" />
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-green-800/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-green-500/15">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Logo + Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                  <Image
                    src="/images/univerde/logo_univerde.png"
                    alt="Uni Verde & Co"
                    width={56}
                    height={56}
                    className="rounded-xl"
                  />
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Uni Verde & Co
                  </h3>
                </div>
                <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-lg mx-auto md:mx-0">
                  Le Grupo Senzala 78 est jumelé à Uni Verde & Co, association humanitaire
                  engagée dans des actions solidaires et sociales. Adhérez ou participez à leurs initiatives !
                </p>
                <a
                  href="https://www.helloasso.com/associations/uni-verde-and-co/adhesions/adhesion-uni-verde-and-co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  Adhérez ou participez
                </a>
              </div>

              {/* QR Code */}
              <div className="flex-shrink-0">
                <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg">
                  <Image
                    src="/images/univerde/QR CODE ADHESION UNIVERDE AND CO.png"
                    alt="QR Code adhésion Uni Verde & Co"
                    width={180}
                    height={180}
                    className="w-36 h-36 sm:w-44 sm:h-44"
                  />
                  <p className="text-center text-gray-600 text-xs mt-2 font-medium">
                    Scannez pour adhérer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nos Partenaires
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
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
          <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-primary-500/20">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4">
              Devenir Partenaire
            </h3>
            <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
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
          className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-500 mb-2">15+</div>
            <div className="text-gray-300 text-sm sm:text-base">Années de partenariats</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-500 mb-2">50+</div>
            <div className="text-gray-300 text-sm sm:text-base">Événements organisés</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-500 mb-2">1000+</div>
            <div className="text-gray-300 text-sm sm:text-base">Participants touchés</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-500 mb-2">25+</div>
            <div className="text-gray-300 text-sm sm:text-base">Partenaires actifs</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
