import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Layout, Pointer, Zap } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface Feature108Props {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
}

const Feature108 = ({
  badge = "Notre école",
  heading = "Découvrez notre école de capoeira Senzala",
  description = "Rejoignez-nous pour apprendre la capoeira dans une ambiance conviviale et professionnelle.",
  tabs = [
    {
      value: "tab-1",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Cours Adultes",
      content: {
        badge: "Adultes",
        title: "Cours pour adultes",
        description:
          "Découvrez nos cours de Capoeira pour adultes, adaptés à tous les niveaux. Améliorez votre condition physique tout en apprenant l'art de la Capoeira.",
        buttonText: "En savoir plus",
        imageSrc: "/images/cours_adultes.jpg",
        imageAlt: "Cours de Capoeira pour adultes",
      },
    },
    {
      value: "tab-2",
      icon: <Pointer className="h-auto w-4 shrink-0" />,
      label: "Cours Enfants",
      content: {
        badge: "Enfants",
        title: "Cours pour enfants",
        description:
          "Nos cours pour enfants allient apprentissage, jeu et développement personnel. La Capoeira est un excellent moyen pour les enfants de se dépenser et de s'épanouir.",
        buttonText: "En savoir plus",
        imageSrc: "/images/hero-section-img/cours_tarifs.png",
        imageAlt: "Cours de Capoeira pour enfants",
      },
    },
    {
      value: "tab-3",
      icon: <Layout className="h-auto w-4 shrink-0" />,
      label: "Batucada",
      content: {
        badge: "Batucada",
        title: "Groupe de Batucada",
        description:
          "Découvrez notre groupe de Batucada, une expression rythmique et énergique qui accompagne la Capoeira. Apprenez à jouer des instruments traditionnels comme le berimbau, le pandeiro et l'atabaque.",
        buttonText: "En savoir plus",
        imageSrc: "/images/cours_batucada.jpg",
        imageAlt: "Groupe de Batucada de Capoeira",
      },
    },
  ],
}: Feature108Props) => {
  return (
    <section className="py-16 lg:py-24 bg-dark-blue">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">{badge}</Badge>
          <h2 className="max-w-3xl text-3xl font-medium text-white md:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="max-w-2xl text-lg text-white/80">{description}</p>
        </div>
        <Tabs defaultValue={tabs[0].value} className="mt-8">
          <TabsList className="container flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-10">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white/80 data-[state=active]:bg-yellow-500 data-[state=active]:text-white data-[state=active]:hover:bg-yellow-400"
              >
                {tab.icon} {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mx-auto mt-12 max-w-screen-xl rounded-2xl bg-white/5 backdrop-blur-sm lg:p-12">
            {tabs.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="grid place-items-center gap-20 lg:grid-cols-2 lg:gap-10"
              >
                <div className="flex flex-col gap-6 text-white">
                  <Badge className="w-fit bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
                    {tab.content.badge}
                  </Badge>
                  <h3 className="text-3xl font-medium lg:text-4xl">
                    {tab.content.title}
                  </h3>
                  <p className="text-white/80 lg:text-lg leading-relaxed font-light">
                    {tab.content.description}
                  </p>
                  <Button className="mt-4 w-fit gap-2 bg-yellow-500 text-white hover:bg-yellow-400 font-semibold" size="lg">
                    {tab.content.buttonText}
                  </Button>
                </div>
                <div className="w-full h-[400px] overflow-hidden rounded-xl border-2 border-white/20">
                  <img
                    src={tab.content.imageSrc}
                    alt={tab.content.imageAlt}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export { Feature108 };
