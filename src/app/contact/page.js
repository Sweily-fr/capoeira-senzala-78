"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '@/components/blocks/hero-section-5';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Mail, Phone, Clock, Instagram, Facebook, Youtube, ArrowRight, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Cta4 } from '@/components/ui/cta-4';
import Footer from '@/components/Footer';

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@senzala78.fr",
    href: "mailto:contact@senzala78.fr",
    description: "Réponse sous 24-48h"
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "+33 6 12 34 56 78",
    href: "tel:+33612345678",
    description: "Du lundi au vendredi"
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: "78000 Versailles",
    href: "https://maps.google.com",
    description: "Yvelines, France"
  },
  {
    icon: Clock,
    title: "Horaires",
    value: "Lun-Ven: 9h-21h",
    description: "Sam: 10h-18h"
  }
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:bg-pink-500/20 hover:border-pink-500/50 hover:text-pink-400" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook", color: "hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube", color: "hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-400" }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-dark-blue text-white">
      <main className="flex-1">
        <HeroSection
          title="Nous Contacter"
          subtitle="Notre équipe est à votre écoute pour répondre à toutes vos questions"
          heroImage="/images/hero-section-img/contact.jpg"
        />

        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section titre */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                Comment nous joindre ?
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Plusieurs moyens sont à votre disposition pour nous contacter. N'hésitez pas, nous vous répondrons dans les plus brefs délais.
              </p>
            </motion.div>

            {/* Cards de contact */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <Card className="relative overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-white/10 hover:border-primary-500/40 transition-all duration-500 h-full group">
                      {/* Effet de brillance au hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                      {/* Ligne dorée en haut */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500/0 via-primary-500 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <CardContent className="relative p-6 flex flex-col items-center text-center h-full">
                        {/* Icône avec effet */}
                        <div className="relative mb-5">
                          <div className="absolute inset-0 bg-primary-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-500/5 border border-primary-500/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                            <IconComponent className="w-7 h-7 text-primary-500" />
                          </div>
                        </div>

                        {/* Contenu aligné */}
                        <div className="flex flex-col items-center flex-1 w-full">
                          <h3 className="font-semibold text-white text-lg mb-3">{item.title}</h3>
                          <div className="flex-1 flex flex-col justify-center w-full">
                            {item.href ? (
                              <a
                                href={item.href}
                                className="text-primary-500 hover:text-primary-400 transition-colors font-medium text-base"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-white font-medium text-base">{item.value}</p>
                            )}
                            <p className="text-gray-400 text-sm mt-2">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Section principale avec image et infos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

              {/* Colonne gauche - Image */}
              <motion.div
                className="relative h-full"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="relative rounded-2xl overflow-hidden h-full min-h-[500px]">
                  <Image
                    src="/images/professionnelle/bananapro.jpg"
                    alt="Cours de capoeira Senzala 78"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-semibold mb-3">Venez nous rencontrer</h3>
                    <p className="text-gray-200 mb-4">
                      Découvrez l'univers de la capoeira lors d'un cours d'essai gratuit.
                    </p>
                    <Button
                      asChild
                      className="bg-primary-500 hover:bg-primary-600 text-dark-blue font-medium"
                    >
                      <Link href="/cours-tarifs">
                        Voir les cours
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* Colonne droite - Réseaux sociaux et message */}
              <motion.div
                className="space-y-6 flex flex-col"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {/* Card message direct */}
                <Card className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 border-primary-500/20">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-6 h-6 text-primary-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Une question ?
                        </h3>
                        <p className="text-gray-300 mb-4">
                          Envoyez-nous un message directement par email ou via nos réseaux sociaux. Notre équipe vous répondra rapidement.
                        </p>
                        <Button
                          asChild
                          className="bg-primary-500 hover:bg-primary-600 text-dark-blue"
                        >
                          <a href="mailto:contact@senzala78.fr">
                            <Mail className="w-4 h-4 mr-2" />
                            Envoyer un email
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Réseaux sociaux */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Suivez-nous sur les réseaux
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Restez informé de nos actualités, événements et partagez vos moments capoeira avec notre communauté.
                  </p>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
                          aria-label={social.label}
                        >
                          <IconComponent className="w-6 h-6" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Infos supplémentaires */}
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-white mb-3">Informations pratiques</h4>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                        Cours d'essai gratuit pour les nouveaux
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                        Plus de 20 villes dans les Yvelines
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                        Cours pour tous les âges et niveaux
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                        Équipe de professeurs expérimentés
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
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
