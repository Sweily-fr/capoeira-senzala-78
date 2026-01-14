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
          subtitle="Découvrez nos cours et tarifs"
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
