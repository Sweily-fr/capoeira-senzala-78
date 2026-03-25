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
import UniVerdeBanner from './custom/UniVerdeBanner';

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
      <h3 className="text-xl font-semibold text-white">{title}</h3>
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

const HomeSections = ({ prestationImages = [] }) => {
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
      color: "bg-primary-500/20",
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
      videoUrl: "https://www.youtube.com/watch?v=FM8i00JvbGc",
      title: "Capoeira Senzala 78",
    },
    {
      id: 2,
      videoUrl: "https://www.youtube.com/watch?v=3me94ifV53M",
      title: "Capoeira Senzala 78",
    },
    {
      id: 3,
      videoUrl: "https://www.youtube.com/watch?v=G3X9gtTBCuE",
      title: "Capoeira Senzala 78",
    },
    {
      id: 4,
      videoUrl: "https://www.youtube.com/watch?v=aS79PPqh2cU",
      title: "Capoeira Senzala 78",
    },
    {
      id: 5,
      videoUrl: "https://www.youtube.com/watch?v=k6GJ5x9X5GE",
      title: "Capoeira Senzala 78",
    },
    {
      id: 6,
      videoUrl: "https://www.youtube.com/watch?v=T65oaiazA4A",
      title: "Capoeira Senzala 78",
    },
    {
      id: 7,
      videoUrl: "https://www.youtube.com/watch?v=u9KF1fxrn-c",
      title: "Capoeira Senzala 78",
    },
    {
      id: 8,
      videoUrl: "https://www.youtube.com/watch?v=dAgqjfTLfv4",
      title: "Capoeira Senzala 78",
    },
    {
      id: 9,
      videoUrl: "https://www.youtube.com/watch?v=6CwhFeGhJeg",
      title: "Capoeira Senzala 78",
    },
    {
      id: 10,
      videoUrl: "https://www.youtube.com/watch?v=DFkEk6x2Nls",
      title: "Capoeira Senzala 78",
    },
    {
      id: 11,
      videoUrl: "https://www.youtube.com/watch?v=UirNQJh9cF4",
      title: "Capoeira Senzala 78",
    },
  ]; 

  return (
    <div className="bg-dark-blue">
      <Gallery4 />
      {/* Discover Capoeira Section */}
      <Feature108 />
        <Feature images={prestationImages} />
      <LandingAccordionItem />
      {/* Video Gallery Section with Auto-Play */}
      <AutoPlayVideoGallery videos={videos} autoPlayDuration={15000} />
      <UniVerdeBanner />
      <Faq5 />
      <Cta4 />
    </div>
  );
};

export default HomeSections;
