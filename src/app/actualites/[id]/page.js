import Footer from '../../../components/Footer';
import ArticleDetail from './ArticleDetail';
import ArticleHero from './ArticleHero';
import { articles } from '@/data/articles';

export async function generateMetadata({ params }) {
  const article = articles.find((a) => String(a.id) === params.id);
  if (!article) {
    return { title: 'Article introuvable' };
  }
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `https://capoeirasenzala78.fr/actualites/${article.id}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      images: article.image ? [{ url: article.image }] : [],
    },
  };
}

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
