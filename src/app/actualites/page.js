import HeroWithPartners from '@/components/blocks/HeroWithPartners';
import Footer from '../../components/Footer';
import ArticlesList from './ArticlesList';

export const metadata = {
  title: 'Actualités',
  description: 'Restez informé des événements, stages, batizados et de la vie de notre communauté capoeiriste. Toutes les actualités du Grupo Senzala 78.',
  alternates: { canonical: 'https://capoeirasenzala78.fr/actualites' },
};

export default function Actualites() {
  return (
    <>
      <main className="flex flex-col">
        <HeroWithPartners 
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
