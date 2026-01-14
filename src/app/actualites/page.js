import { HeroSection } from '@/components/blocks/hero-section-5';
import Footer from '../../components/Footer';
import ArticlesList from './ArticlesList';

export default function Actualites() {
  return (
    <>
      <main className="flex flex-col">
        <HeroSection 
          title="Actualités"
          subtitle="Restez informé des événements, stages, batizados et de la vie de notre communauté capoeiriste. Retrouvez ici toutes les actualités du Grupo Senzala 78."
          heroImage="/images/hero-section-img/actualites.jpg"
        />
        
        <div className="bg-dark-blue text-white">
          <ArticlesList />
        </div>
      </main>
      <Footer />
    </>
  );
}
