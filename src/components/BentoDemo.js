import { Music, Users, Heart, Award, Clock, MapPin } from 'lucide-react';
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";

const capoeiraInstruments = [
  {
    name: "Berimbau",
    description: "Instrument à une corde utilisé pour marquer le rythme et le style du jeu.",
  },
  {
    name: "Pandeiro",
    description: "Tambourin brésilien qui maintient le rythme de base de la roda.",
  },
  {
    name: "Atabaque",
    description: "Grand tambour qui donne la pulsation rythmique de la capoeira.",
  },
  {
    name: "Agogô",
    description: "Cloche en métal à deux tons utilisée pour les rythmes traditionnels.",
  },
  {
    name: "Reco-reco",
    description: "Instrument à gratter qui ajoute une texture rythmique à la musique.",
  },
];

const capoeiraMoves = [
  "Ginga", "Meia Lua de Frente", "Armada", "Queixada", "Au", "Rolê", "Bananeira",
  "Macaco", "Aú sem Mão", "S-Dobrado", "Parafuso", "Martelo", "Ponteira", "Bênção"
];

const features = [
  {
    Icon: Award,
    name: "Art Martial Brésilien",
    description: "Découvrez les origines et la philosophie de la capoeira.",
    href: "#art-martial",
    cta: "En savoir plus",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute -right-10 -top-10 h-full w-4/5 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 opacity-50 blur-3xl" />
    ),
  },
  {
    Icon: Users,
    name: "Cours Collectifs",
    description: "Rejoignez nos séances adaptées à tous les niveaux.",
    href: "#cours",
    cta: "Voir les horaires",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute -right-10 -top-10 h-full w-4/5 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 opacity-50 blur-3xl" />
    ),
  },
  {
    Icon: Music,
    name: "Instruments Traditionnels",
    description: "Apprenez à jouer des instruments de la capoeira.",
    href: "#musique",
    cta: "Découvrir",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {capoeiraInstruments.map((instrument, idx) => (
          <div
            key={idx}
            className={cn(
              "relative mx-2 w-48 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-200 bg-white/50 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/50",
              "transform-gpu transition-all duration-300 hover:scale-105"
            )}
          >
            <div className="flex flex-col">
              <h3 className="font-medium text-gray-900 dark:text-white">
                {instrument.name}
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {instrument.description}
              </p>
            </div>
          </div>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: Heart,
    name: "Bienfaits Physiques",
    description: "Améliorez votre condition physique et votre souplesse.",
    href: "#bienfaits",
    cta: "En savoir plus",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute -right-10 -top-10 h-full w-4/5 rounded-xl bg-gradient-to-br from-green-400 to-green-600 opacity-50 blur-3xl" />
    ),
  },
  {
    Icon: Clock,
    name: "Horaires Flexibles",
    description: "Des créaux adaptés à votre emploi du temps.",
    href: "#horaires",
    cta: "Voir les horaires",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute -right-10 -top-10 h-full w-4/5 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 opacity-50 blur-3xl" />
    ),
  },
];

export function BentoDemo() {
  return (
    <div className="py-16 px-4 md:px-8 bg-dark-blue">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Découvrez la capoeira
        </h2>
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
