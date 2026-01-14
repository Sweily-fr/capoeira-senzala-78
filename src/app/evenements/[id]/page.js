import { HeroSection } from '@/components/blocks/hero-section-5';
import Footer from '../../../components/Footer';
import EventDetail from './EventDetail';

export default function EventPage({ params }) {
  return (
    <>
      <main className="flex flex-col">
        <HeroSection 
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
