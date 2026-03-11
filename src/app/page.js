import fs from 'fs';
import path from 'path';
import HeroWithPartners from '@/components/blocks/HeroWithPartners';
import HomeSections from '../components/HomeSections';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Capoeira Senzala 78 | École de Capoeira dans les Yvelines',
  description: 'École de capoeira dans les Yvelines (78). Cours pour enfants et adultes dans plus de 20 villes : Versailles, Saint-Germain-en-Laye, Poissy. Stages, batucada et prestations professionnelles.',
  alternates: { canonical: 'https://capoeirasenzala78.fr' },
};

export default function Home() {
  const professionnelleDir = path.join(process.cwd(), 'public/images/professionnelle');
  const prestationImages = fs.readdirSync(professionnelleDir)
    .filter((file) => /\.(jpg|jpeg|png|webp|avif)$/i.test(file))
    .map((file) => `/images/professionnelle/${file}`);

  return (
    <>
      <main className="flex flex-col">
        <HeroWithPartners />
        <div className="bg-dark-blue">
          <HomeSections prestationImages={prestationImages} />
        </div>
      </main>
      <Footer />
    </>
  );
}
