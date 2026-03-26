import HeroWithPartners from '@/components/blocks/HeroWithPartners';
import Footer from '../../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import VillesList from './VillesList';

export const metadata = {
  title: 'Cours & Tarifs',
  description: 'Découvrez nos cours de capoeira et batucada dans plus de 20 villes des Yvelines (78). Cours pour bébés, enfants, ados et adultes avec des tarifs accessibles.',
  alternates: { canonical: 'https://capoeirasenzala78.fr/cours-tarifs' },
};

export default function CoursEtTarifs() {
  return (
    <>
      <main className="flex flex-col">
        <HeroWithPartners
          title="Cours & Tarifs"
          subtitle="Découvrez nos cours de capoeira et batucada dans plus de 20 villes des Yvelines. Des cours adaptés pour tous les âges, du baby capoeira aux adultes, avec des tarifs accessibles. Rejoignez-nous pour une expérience unique alliant sport, culture et convivialité."
          heroImage="/images/hero-section-img/cours_tarifs.png"
        />
        
        <div className="bg-dark-blue text-white py-16">
          
          {/* Liste des villes et cours */}
          <div id="cours">
            <VillesList />
          </div>
          
        </div>
      </main>
      <Footer />
    </>
  );
}
