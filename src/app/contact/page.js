import HeroWithPartners from '@/components/blocks/HeroWithPartners';
import Footer from '@/components/Footer';
import ContactContent from './ContactContent';
import { Cta4 } from '@/components/ui/cta-4';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-dark-blue text-white">
      <main className="flex-1">
        <HeroWithPartners
          title="Nous Contacter"
          subtitle="Notre équipe est à votre écoute pour répondre à toutes vos questions"
          heroImage="/images/hero-section-img/contact.jpg"
        />
        <ContactContent />
        <div className="container mx-auto px-4">
          <Cta4 />
        </div>
        <Footer />
      </main>
    </div>
  );
}
