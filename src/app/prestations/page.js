import HeroWithPartners from '@/components/blocks/HeroWithPartners';
import Footer from '../../components/Footer';
import PrestationsSection from './PrestationsSection';

export default function PrestationsProfessionnelles() {
  return (
    <>
      <main className="flex flex-col">
        <HeroWithPartners
          title="Nos prestations Scolaires et Pro"
          subtitle="Services de capoeira pour écoles, entreprises et événements"
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
