import HeroWithPartners from '@/components/blocks/HeroWithPartners';
import Footer from '../../components/Footer';
import PartnersSection from './PartnersSection';
import { getPartenaires } from '@/lib/getPartenaires';

export default function NosPartenaires() {
  const logos = getPartenaires();

  return (
    <>
      <main className="flex flex-col">
        <HeroWithPartners
          title="Nos Partenaires"
          subtitle="Découvrez les partenaires qui nous accompagnent dans notre mission"
          heroImage="/images/hero-section-img/nos_partenaires.jpg"
          partnerLogos={logos}
        />

        <div className="bg-dark-blue text-white">
          <PartnersSection logos={logos} />
        </div>
      </main>
      <Footer />
    </>
  );
}
