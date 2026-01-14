import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "./section-wrapper";

interface Cta4Props {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  items?: string[];
}

const defaultItems = [
  "Cours adaptés à tous les niveaux",
  "Équipe de professeurs expérimentés",
  "Ambiance conviviale et bienveillante",
  "Événements et rodas régulières",
  "Cours d'essai gratuit",
];

export const Cta4 = ({
  title = "Prêt à commencer votre aventure capoeira ?",
  description = "Rejoignez notre école et découvrez l'art de la capoeira dans une ambiance conviviale et bienveillante. Que vous soyez débutant ou expérimenté, nos cours s'adaptent à tous les niveaux.",
  buttonText = "Réserver un cours d'essai",
  buttonUrl = "/contact",
  items = defaultItems,
}: Cta4Props) => {
  return (
    <SectionWrapper paddingY="lg">
      <div className="w-full">
        <div className="rounded-lg bg-slate-800/50 backdrop-blur-sm p-6 py-10 border border-slate-700/50 shadow-xl md:p-8 lg:p-12">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
            <div className="md:w-1/2 text-white">
              <h2 className="mb-6 text-3xl font-medium text-white md:text-4xl lg:text-5xl">{title}</h2>
              <p className="mb-6 text-lg text-white/80">{description}</p>
              <Button className="bg-[#EAB308] hover:bg-[#F59E0B] text-dark-blue font-medium transition-colors" asChild>
                <a href={buttonUrl}>
                  {buttonText} <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
            <div className="md:w-1/3">
              <ul className="flex flex-col space-y-2 text-base font-light text-white">
                {items.map((item, idx) => (
                  <li className="flex items-center text-white" key={idx}>
                    <Check className="mr-4 size-4 flex-shrink-0 text-white" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
