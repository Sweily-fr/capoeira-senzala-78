import Link from 'next/link';

export const metadata = {
  title: 'Page introuvable',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-dark-blue flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-6xl font-bold text-primary-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Page introuvable</h2>
      <p className="text-white/70 mb-8 text-center max-w-md">
        La page que vous recherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="bg-primary-500 text-darker-blue font-semibold px-6 py-3 rounded-full hover:bg-primary-400 transition-colors"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
