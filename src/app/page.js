import fs from 'fs';
import path from 'path';
import HeroWithPartners from '@/components/blocks/HeroWithPartners';
import HomeSections from '../components/HomeSections';
import Footer from '../components/Footer';

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
