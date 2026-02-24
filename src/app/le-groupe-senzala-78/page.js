import HeroWithPartners from '@/components/blocks/HeroWithPartners';
import Footer from '@/components/Footer';
import LeGroupeContent from './LeGroupeContent';

export default function LeGroupeSenzala78() {
  return (
    <div className="min-h-screen bg-dark-blue text-white">
      <HeroWithPartners
        title="Le groupe Senzala 78"
        subtitle="Découvrez notre école de capoeira et notre équipe de passionnés"
        heroImage="/images/hero-section-img/histoire_du_groupe.png"
      />
      <LeGroupeContent />
      <Footer />
    </div>
  );
}
