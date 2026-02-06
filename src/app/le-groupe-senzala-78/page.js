"use client";
import React from 'react';
import { HeroSection } from '@/components/blocks/hero-section-5';
import Footer from '@/components/Footer';
import { VideoPlayer } from '@/components/ui/video-thumbnail-player';

export default function LeGroupeSenzala78() {
  return (
    <div className="min-h-screen bg-dark-blue text-white">
      <HeroSection
        title="Le groupe Senzala 78"
        subtitle="Découvrez notre école de capoeira et notre équipe de passionnés"
        heroImage="/images/hero-section-img/histoire_du_groupe.png"
      />

      {/* Section Notre École */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-b from-dark-blue to-darker-blue">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 sm:mb-8">
                Le groupe Senzala du Brésil à l'international
              </h2>
              <div className="prose prose-sm sm:prose-base lg:prose-lg text-white/80 mx-auto text-justify px-2 sm:px-0">
                <p className="mb-4 sm:mb-6">
                  Fondé dans les années 1960 à Rio de Janeiro, le Groupe Senzala est rapidement devenu l'une des références mondiales de la capoeira.
                  Notre branche, Senzala 78, perpétue cette tradition d'excellence en France depuis sa création.
                </p>
                <p className="mb-6">
                  De ses racines brésiliennes à son expansion internationale, le Groupe Senzala a su préserver l'authenticité de la capoeira tout en l'adaptant aux réalités contemporaines.
                  Notre école s'inscrit dans cette lignée, en proposant un enseignement de qualité qui respecte les traditions tout en encourageant l'innovation.
                </p>
                <p>
                  Aujourd'hui présent sur les cinq continents, le Groupe Senzala continue de former des générations de capoeiristes à travers le monde,
                  véritables ambassadeurs de cette culture afro-brésilienne riche et passionnante.
                </p>
              </div>
              <div className="w-full max-w-4xl mx-auto mt-12">
                <VideoPlayer
                  thumbnailUrl="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?q=80&w=2069&auto=format&fit=crop"
                  videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Building the Future"
                  description="A look into modern architecture and design."
                  className="rounded-xl w-full h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
