import HeroWithPartners from '@/components/blocks/HeroWithPartners';
import Footer from '../../components/Footer';
import LaCapoeiraContent from './LaCapoeiraContent';

export const metadata = {
  title: 'La Capoeira',
  description: 'Découvrez la capoeira : art martial, danse, musique et philosophie de vie née de la résistance et de la créativité du peuple brésilien.',
  alternates: { canonical: 'https://capoeirasenzala78.fr/la-capoeira' },
};

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
