import Footer from '../../../components/Footer';
import ArticleDetail from './ArticleDetail';
import ArticleHero from './ArticleHero';

export default function ArticlePage({ params }) {
  return (
    <>
      <main className="flex flex-col">
        <ArticleHero articleId={params.id} />
        
        <div className="bg-dark-blue text-white">
          <ArticleDetail articleId={params.id} />
        </div>
      </main>
      <Footer />
    </>
  );
}
