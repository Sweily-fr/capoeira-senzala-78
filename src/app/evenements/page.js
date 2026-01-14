"use client";
import { HeroSection } from '@/components/blocks/hero-section-5';
import Footer from '../../components/Footer';
import EventsList from './EventsList';
import EventsHeroBackground from '@/components/custom/EventsHeroBackground';

export default function EvenementsAVenir() {
  return (
    <>
      <main className="flex flex-col">
        <HeroSection 
          title="Événements à venir"
          subtitle="Stages, batizados, rodas ouvertes et rencontres : ne manquez aucun événement de notre communauté. Rejoignez-nous pour vivre la capoeira ensemble."
          customBackground={<EventsHeroBackground />}
        />
        
        <div className="bg-dark-blue text-white">
          <EventsList />
        </div>
      </main>
      <Footer />
    </>
  );
}
