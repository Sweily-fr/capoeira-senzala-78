import HeroWithPartners from "@/components/blocks/HeroWithPartners";
import AchatsContent from "./AchatsContent";

export const metadata = {
  title: 'Boutique Adhérents',
  description: 'Découvrez notre collection d\'articles officiels et équipements de capoeira : abadas, cordas, instruments. Réservée aux adhérents du Grupo Senzala 78.',
  alternates: { canonical: 'https://capoeirasenzala78.fr/achats' },
};

export default function AchatsPage() {
  return (
    <div className="min-h-screen bg-dark-blue flex flex-col">
      <HeroWithPartners
        title="Boutique Adhérents"
        subtitle="Découvrez notre collection d'articles officiels et équipements de capoeira, réservée exclusivement aux adhérents de l'association"
        heroImage="/images/hero-section-img/boutique.JPG"
      />
      <AchatsContent />
    </div>
  );
}
