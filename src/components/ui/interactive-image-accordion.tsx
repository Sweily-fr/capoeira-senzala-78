"use client";

import { AnimatedFeatureCard } from "./feature-card-1";

const features = [
  {
    index: "01",
    tag: "Tenues",
    title: "Tenues de capoeira traditionnelles",
    imageSrc: "images/boutique/tenue_02.png",
    color: "orange" as const,
  },
  {
    index: "02",
    tag: "Instruments",
    title: "Instruments de musique",
    imageSrc: "images/boutique/instruments_01.png",
    color: "purple" as const,
  },
  {
    index: "03",
    tag: "Accessoires",
    title: "Accessoires essentiels",
    imageSrc: "images/boutique/caixixi_01.png",
    color: "blue" as const,
  },
];

export function LandingAccordionItem() {
  return (
    <div className="bg-dark-blue py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-8">
          <h2 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">
            Commandez votre tenue et vos instruments
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Découvrez notre sélection de produits de qualité pour votre pratique de la capoeira.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <AnimatedFeatureCard
                key={index}
                index={feature.index}
                tag={feature.tag}
                title={feature.title}
                imageSrc={feature.imageSrc}
                color={feature.color}
                className="mx-auto w-full"
              />
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="/achats"
            className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-6 py-3 text-sm font-medium text-white shadow-sm hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </div>
  );
}
