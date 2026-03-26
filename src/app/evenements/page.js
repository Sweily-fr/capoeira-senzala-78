import HeroWithPartners from '@/components/blocks/HeroWithPartners';
import Footer from '../../components/Footer';
import EventsList from './EventsList';
import EventsHeroBackground from '@/components/custom/EventsHeroBackground';

export const metadata = {
  title: 'Événements à venir',
  description: 'Stages, batizados, rodas ouvertes et rencontres de capoeira dans les Yvelines. Ne manquez aucun événement du Grupo Senzala 78.',
  alternates: { canonical: 'https://capoeirasenzala78.fr/evenements' },
};

export default function EvenementsAVenir() {
  return (
    <>
      <main className="flex flex-col">
        <HeroWithPartners
          title="Événements à venir"
          subtitle="Stages, batizados, rodas ouvertes et rencontres : ne manquez aucun événement de notre communauté. Rejoignez-nous pour vivre la capoeira ensemble."
          customBackground={<EventsHeroBackground />}
        />
        
        <div id="liste" className="bg-dark-blue text-white">
          <EventsList />
        </div>
      </main>
      <Footer />
    </>
  );
}
