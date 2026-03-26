"use client";
import React from 'react';
import { VideoPlayer } from '@/components/ui/video-thumbnail-player';

export default function LeGroupeContent() {
  return (
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
                thumbnailUrl="https://img.youtube.com/vi/kk9zFDcTwkY/maxresdefault.jpg"
                videoUrl="https://www.youtube.com/embed/kk9zFDcTwkY?autoplay=1"
                title="Grupo Senzala"
                description="L'histoire du Grupo Senzala"
                className="rounded-xl w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
