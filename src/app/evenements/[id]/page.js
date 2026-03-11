import HeroWithPartners from '@/components/blocks/HeroWithPartners';
import Footer from '../../../components/Footer';
import EventDetail from './EventDetail';
import { events } from '@/data/events';

export async function generateMetadata({ params }) {
  const event = events.find((e) => String(e.id) === params.id);
  if (!event) {
    return { title: 'Événement introuvable' };
  }
  return {
    title: event.title,
    description: event.description,
    alternates: { canonical: `https://capoeirasenzala78.fr/evenements/${event.id}` },
    openGraph: {
      title: event.title,
      description: event.description,
      images: event.image ? [{ url: event.image }] : [],
    },
  };
}

export default function EventPage({ params }) {
  return (
    <>
      <main className="flex flex-col">
        <HeroWithPartners 
          title="Événement"
          subtitle="Détails de l'événement"
        />
        
        <div className="bg-dark-blue text-white">
          <EventDetail eventId={params.id} />
        </div>
      </main>
      <Footer />
    </>
  );
}
