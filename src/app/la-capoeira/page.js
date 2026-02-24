import HeroWithPartners from '@/components/blocks/HeroWithPartners';
import Footer from '../../components/Footer';
import LaCapoeiraContent from './LaCapoeiraContent';

export default function LaCapoeiraPage() {
  return (
    <>
      <main className="flex flex-col">
        <HeroWithPartners
          title="La Capoeira"
          subtitle="Art martial, danse, musique et philosophie de vie née de la résistance et de la créativité du peuple brésilien"
          showButtons={true}
          showPartners={false}
        />

        <div className="bg-dark-blue">
          <LaCapoeiraContent />
        </div>
      </main>
      <Footer />
    </>
  );
}
