import HeroWithPartners from '@/components/blocks/HeroWithPartners';
import Footer from '../../components/Footer';
import PrestationsSection from './PrestationsSection';

export const metadata = {
  title: 'Prestations Scolaires et Professionnelles',
  description: 'Services de capoeira pour écoles, entreprises et événements dans les Yvelines. Animations, team building et ateliers culturels.',
  alternates: { canonical: 'https://capoeirasenzala78.fr/prestations' },
};

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
