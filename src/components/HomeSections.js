'use client';

import Image from 'next/image';
import DiscoverCapoeira from './DiscoverCapoeira';
import { Gallery4 } from './blocks/gallery4';
import { LandingAccordionItem } from './ui/interactive-image-accordion';
import { Feature108 } from './blocks/shadcnblocks-com-feature108';
import { Cta4 } from './ui/cta-4';
import { Faq5 } from './ui/faq-5';
import { Feature } from './ui/feature-with-image-carousel';
import { AutoPlayVideoGallery } from './ui/auto-play-video-gallery';

const SectionCard = ({ title, description, icon, color, buttonText, buttonVariant = 'primary' }) => (
  <div className="bg-dark-blue/5 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col backdrop-blur-sm">
    <div className="flex items-center mb-6">
      <div className={`w-14 h-14 ${color} rounded-full flex items-center justify-center mr-4`}>
        <Image 
          src={icon} 
          alt={title}
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-white/80 mb-6 flex-grow">{description}</p>
    {buttonText && (
      <button className={`px-6 py-2 text-sm font-medium rounded-full ${
        buttonVariant === 'primary' 
          ? 'bg-white text-dark-blue hover:bg-gray-100' 
          : 'border-2 border-white text-white hover:bg-white/10'
      } w-fit transition-colors duration-300`}>
        {buttonText}
      </button>
    )}
  </div>
);

const HomeSections = () => {
  const sections = [
    {
      title: "Cours pour Tous Niveaux",
      description: "Débutants ou confirmés, nos cours s'adaptent à votre niveau. Nos professeurs certifiés vous accompagnent dans votre progression.",
      icon: "/icons/levels.svg",
      color: "bg-blue-100",
      buttonText: "Voir les horaires"
    },
    {
      title: "Enfants & Adultes",
      description: "Des cours spécifiques pour chaque tranche d'âge. Dès 4 ans, venez découvrir la capoeira en famille ou entre amis.",
      icon: "/icons/group.svg",
      color: "bg-yellow-100",
      buttonText: "En savoir plus",
      buttonVariant: 'secondary'
    },
    {
      title: "Cours d'Essai Gratuit",
      description: "Venez essayer sans engagement. Réservez votre cours d'essai dès maintenant et découvrez l'univers de la capoeira.",
      icon: "/icons/free-trial.svg",
      color: "bg-green-100",
      buttonText: "Réserver"
    }
  ];

  const videos = [
    {
      id: 1,
      thumbnailUrl: "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?q=80&w=2069&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=UirNQJh9cF4",
      title: "Cours Baby",
      description: "Découvrez nos cours pour les plus petits"
    },
    {
      id: 2,
      thumbnailUrl: "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?q=80&w=2069&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=UirNQJh9cF4",
      title: "Cours Enfants",
      description: "Des cours adaptés aux enfants"
    },
    {
      id: 3,
      thumbnailUrl: "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?q=80&w=2069&auto=format&fit=crop",
      videoUrl: "https://www.youtube.com/watch?v=UirNQJh9cF4",
      title: "Cours Ados/Adultes",
      description: "Cours pour adolescents et adultes"
    }
  ]; 

  return (
    <div className="bg-dark-blue">
      <Gallery4 />
      {/* Discover Capoeira Section */}
      <Feature108 />
        <Feature />
      <LandingAccordionItem />
      {/* Video Gallery Section with Auto-Play */}
      <AutoPlayVideoGallery videos={videos} autoPlayDuration={15000} />
      <Faq5 />
      <Cta4 />
    </div>
  );
};

export default HomeSections;
