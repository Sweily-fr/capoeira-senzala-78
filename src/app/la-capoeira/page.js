"use client";
import React from 'react';
import { HeroSection } from '@/components/blocks/hero-section-5';
import { HistoryScroll } from '@/components/custom/HistoryScroll';
import Footer from '../../components/Footer';
import { Cta4 } from '@/components/ui/cta-4';

const capoeiraHistoryContent = [
  {
    title: "Les Origines de la Capoeira",
    description: "La capoeira naît au Brésil au XVIe siècle, créée par les esclaves africains comme une forme de résistance culturelle. Mélange unique de danse, d'art martial et de musique, elle permettait aux esclaves de s'entraîner au combat tout en faisant croire qu'ils dansaient.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,#d4af37,#ffd700)] flex items-center justify-center text-white">
        <img
          src="/images/histoire-capoeira/origine.png"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-lg"
          alt="Origines de la capoeira"
        />
      </div>
    ),
  },
  {
    title: "L'Époque de la Prohibition",
    description: "De 1890 à 1937, la capoeira fut interdite au Brésil et considérée comme un crime. Les capoeiristes pratiquaient en secret, développant des codes et des rituels pour échapper à la répression policière. Cette période sombre renforça paradoxalement l'identité et la cohésion de la communauté capoeira.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,#8b0000,#dc143c)] flex items-center justify-center text-white">
        <img
          src="/images/histoire-capoeira/prohibition.png"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-lg"
          alt="Prohibition de la capoeira"
        />
      </div>
    ),
  },
  {
    title: "Mestre Bimba et la Capoeira Regional",
    description: "En 1932, Mestre Bimba révolutionne la capoeira en créant la Capoeira Regional. Il systématise l'enseignement, introduit de nouveaux mouvements et obtient la reconnaissance officielle du gouvernement brésilien en 1937, légalisant ainsi la pratique.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,#228b22,#32cd32)] flex items-center justify-center text-white">
        <img
          src="/images/histoire-capoeira/Bimba.png"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-lg"
          alt="Mestre Bimba"
        />
      </div>
    ),
  },
  {
    title: "Mestre Pastinha et la Capoeira Angola",
    description: "Parallèlement, Mestre Pastinha préserve et codifie la Capoeira Angola, la forme traditionnelle plus proche des origines africaines. Il insiste sur l'aspect rituel, philosophique et musical de la capoeira, créant un style plus lent et stratégique.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,#4169e1,#1e90ff)] flex items-center justify-center text-white">
        <img
          src="/images/histoire-capoeira/pastinha.png"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-lg"
          alt="Mestre Pastinha"
        />
      </div>
    ),
  },
  {
    title: "L'Expansion Internationale",
    description: "À partir des années 1970, la capoeira se répand dans le monde entier. Les maîtres brésiliens voyagent et enseignent leur art, créant une communauté globale. Aujourd'hui, la capoeira est pratiquée sur tous les continents et reconnue par l'UNESCO comme patrimoine culturel immatériel de l'humanité.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,#ff6347,#ff4500)] flex items-center justify-center text-white">
        <img
          src="/images/histoire-capoeira/internationale.png"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-lg"
          alt="Capoeira dans le monde"
        />
      </div>
    ),
  },
  {
    title: "La Capoeira Aujourd'hui",
    description: "La capoeira moderne continue d'évoluer tout en préservant ses traditions. Elle unit toujours musique, mouvement et philosophie, offrant un art de vivre complet qui développe le corps, l'esprit et l'âme. C'est un pont entre les cultures, un langage universel de paix et de fraternité.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,#9370db,#8a2be2)] flex items-center justify-center text-white">
        <img
          src="/images/histoire-capoeira/senzala_group.JPG"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-lg"
          alt="Capoeira moderne"
        />
      </div>
    ),
  },
];

export default function LaCapoeiraPage() {
  return (
    <>
      <main className="flex flex-col">
        <HeroSection 
          title="La Capoeira"
          subtitle="Art martial, danse, musique et philosophie de vie née de la résistance et de la créativité du peuple brésilien"
          showButtons={true}
          showPartners={false}
        />
        
        <div className="bg-dark-blue">
          {/* Introduction Section */}
          <div className="py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold text-white mb-4 sm:mb-6 md:mb-8">
                La Capoeira c'est quoi ?
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-300 leading-relaxed mb-8 sm:mb-10 md:mb-12 px-2 sm:px-0">
                La capoeira est bien plus qu'un art martial. C'est une expression culturelle complète qui unit le mouvement, 
                la musique et la philosophie dans une roda (cercle) où se mélangent jeu, respect et créativité. 
                Née de la résistance des esclaves africains au Brésil, elle est devenue un symbole de liberté et d'identité culturelle.
              </p>
            </div>
          </div>

          {/* History Section with Sticky Scroll */}
          {console.log('Contenu de capoeiraHistoryContent:', capoeiraHistoryContent)}
          {capoeiraHistoryContent.map((item, index) => (
            <div key={index} className="hidden">
              {console.log(`Image ${index}:`, item.content?.props?.children?.props?.src || 'Pas d\'image')}
            </div>
          ))}
          <HistoryScroll content={capoeiraHistoryContent} />

{/* Call to Action */}
          <Cta4 />
        </div>
      </main>
      <Footer />
    </>
  );
}
