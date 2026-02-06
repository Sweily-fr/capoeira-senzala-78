import { Badge } from "@/components/ui/badge";
import { SectionWrapper } from "./section-wrapper";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Faq5Props {
  badge?: string;
  heading?: string;
  description?: string;
  faqs?: FaqItem[];
}

const defaultFaqs: FaqItem[] = [
  {
    question: "Qu'est-ce que la capoeira ?",
    answer: "La capoeira est un art martial afro-brésilien qui allie des mouvements de combat, de la danse, de la musique et des chants. Elle est née au Brésil à l'époque de l'esclavage et est aujourd'hui reconnue comme un élément du patrimoine culturel immatériel de l'humanité par l'UNESCO.",
  },
  {
    question: "Faut-il être sportif pour commencer la capoeira ?",
    answer: "Non, la capoeira s'adapte à tous les niveaux. Les cours sont progressifs et chacun évolue à son rythme. C'est justement une excellente façon de développer sa condition physique de manière ludique et musicale.",
  },
  {
    question: "Quel équipement faut-il pour pratiquer ?",
    answer: "Pour débuter, une tenue de sport confortable suffit (pantalon souple et t-shirt). Ensuite, l'idéal est d'avoir un abadá (pantalon de capoeira) et des chaussures de sport légères. Les instruments sont fournis par l'association.",
  },
  {
    question: "À quel âge peut-on commencer la capoeira ?",
    answer: "La capoeira peut se pratiquer dès 4-5 ans avec des cours adaptés aux enfants. Il n'y a pas de limite d'âge pour commencer, les adultes de tous âges sont les bienvenus dans nos cours.",
  },
  {
    question: "Quelle est la différence entre la capoeira Regional et Angola ?",
    answer: "La capoeira Regional, créée par Mestre Bimba, est plus dynamique et acrobatique, tandis que la capoeira Angola, préservée par Mestre Pastinha, est plus proche du sol et plus stratégique. Notre école enseigne principalement le style Regional avec des influences Angola.",
  },
  {
    question: "Comment se déroule un cours type ?",
    answer: "Un cours commence généralement par un échauffement, suivi d'exercices techniques (coups de pied, déplacements, acrobaties), de l'apprentissage des chants et des rythmes, et se termine par une roda (ronde de capoeira) où les élèves pratiquent les mouvements appris.",
  },
];

export const Faq5 = ({
  badge = "FAQ",
  heading = "Questions Fréquentes",
  description = "Toutes les réponses à vos questions sur la capoeira et notre école Senzala 78.",
  faqs = defaultFaqs,
}: Faq5Props) => {
  return (
    <SectionWrapper className="bg-background">
        <div className="text-center text-white">
          <Badge className="text-xs font-medium bg-primary-500/20 text-primary-500 hover:bg-primary-500/30 border border-primary-500/30">{badge}</Badge>
          <h2 className="mt-4 text-3xl font-medium text-white md:text-4xl lg:text-5xl">{heading}</h2>
          <p className="mt-6 text-lg text-white/80">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-14 max-w-3xl">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8 flex gap-4 text-white">
              <div className="flex-1">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium text-white">{faq.question}</h3>
                </div>
                <p className="text-sm text-white/80">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
    </SectionWrapper>
  );
};

