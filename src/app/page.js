import { HeroSection } from '@/components/blocks/hero-section-5';
import HomeSections from '../components/HomeSections';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <HeroSection />
        <div className="bg-dark-blue">
          <HomeSections />
        </div>
      </main>
      <Footer />
    </>
  );
}
