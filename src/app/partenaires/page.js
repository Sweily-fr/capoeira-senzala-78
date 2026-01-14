import { HeroSection } from '@/components/blocks/hero-section-5';
import Footer from '../../components/Footer';
import PartnersSection from './PartnersSection';

export default function NosPartenaires() {
  return (
    <>
      <main className="flex flex-col">
        <HeroSection 
          title="Nos Partenaires"
          subtitle="Découvrez les partenaires qui nous accompagnent dans notre mission"
          heroImage="/images/hero-section-img/nos_partenaires.jpg"
        />
        
        <div className="bg-dark-blue text-white">
          <PartnersSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
