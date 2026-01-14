import { HeroSection } from '@/components/blocks/hero-section-5';
import Footer from '../../components/Footer';
import PrestationsSection from './PrestationsSection';

export default function PrestationsProfessionnelles() {
  return (
    <>
      <main className="flex flex-col">
        <HeroSection 
          title="Prestations Professionnelles"
          subtitle="Services de capoeira pour entreprises, écoles et événements"
          heroImage="/images/hero-section-img/prestations-pro.jpg"
        />
        
        <div className="bg-dark-blue text-white">
          <PrestationsSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
