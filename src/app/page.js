import HeroWithPartners from '@/components/blocks/HeroWithPartners';
import HomeSections from '../components/HomeSections';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <HeroWithPartners />
        <div className="bg-dark-blue">
          <HomeSections />
        </div>
      </main>
      <Footer />
    </>
  );
}
