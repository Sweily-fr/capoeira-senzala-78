import { HeroSection } from '@/components/blocks/hero-section-5';
import Footer from '../../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import VillesList from './VillesList';

export default function CoursEtTarifs() {
  return (
    <>
      <main className="flex flex-col">
        <HeroSection
          title="Cours & Tarifs"
          subtitle="Découvrez nos cours de capoeira et batucada dans plus de 20 villes des Yvelines. Des cours adaptés pour tous les âges, du baby capoeira aux adultes, avec des tarifs accessibles. Rejoignez-nous pour une expérience unique alliant sport, culture et convivialité."
          heroImage="/images/hero-section-img/cours_tarifs.png"
        />
        
        <div className="bg-dark-blue text-white py-16">
          
          {/* Liste des villes et cours */}
          <VillesList />
          
        </div>
      </main>
      <Footer />
    </>
  );
}
