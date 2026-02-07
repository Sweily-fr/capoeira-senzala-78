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
  description = "Rejoignez notre école de capoeira. Nos cours s'adaptent à tous les niveaux dans une ambiance conviviale et bienveillante.",
  buttonText = "Réserver un cours d'essai",
  buttonUrl = "/cours-tarifs",
  items = defaultItems,
}: Cta4Props) => {
  return (
    <SectionWrapper paddingY="lg">
      <div className="w-full">
        <div className="bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-3xl p-8 md:p-12 border border-primary-500/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-white mb-4">{title}</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">{description}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8">
            {items.map((item, idx) => (
              <div className="flex items-center text-gray-300" key={idx}>
                <Check className="mr-2 size-4 flex-shrink-0 text-primary-500" />
                {item}
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button className="bg-primary-500 hover:bg-primary-600 text-darker-blue font-medium transition-colors" size="lg" asChild>
              <a href={buttonUrl}>
                {buttonText} <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
