"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { HeroSection } from '@/components/blocks/hero-section-5';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import Footer from '@/components/Footer';
import { VideoPlayer } from '@/components/ui/video-thumbnail-player';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { maitres } from '@/data/maitres';

// Composant Modal
const MaitreModal = ({ maitre, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('french');
  
  if (!isOpen) return null;

  // Séparer le texte en portugais et français de manière plus précise
  const splitText = (text) => {
    const fullText = text || '';
    
    // Trouver l'index où commence le français
    const frenchStartIndex = fullText.indexOf('Mon nom est');
    
    if (frenchStartIndex === -1) {
      // Si pas de texte français trouvé, tout est en portugais
      return {
        portuguese: fullText.trim(),
        frenchTitle: '',
        frenchBody: ''
      };
    }
    
    // Séparer le texte en deux parties
    const portugueseText = fullText.substring(0, frenchStartIndex).trim();
    const frenchText = fullText.substring(frenchStartIndex).trim();
    
    // Extraire la première ligne comme titre (jusqu'au premier saut de ligne)
    const firstLineEnd = frenchText.indexOf('\n');
    let frenchTitle = '';
    let frenchBody = frenchText;
    
    if (firstLineEnd !== -1) {
      frenchTitle = frenchText.substring(0, firstLineEnd).trim();
      frenchBody = frenchText.substring(firstLineEnd).trim();
    } else {
      frenchTitle = frenchText;
      frenchBody = '';
    }

    return {
      portuguese: portugueseText,
      frenchTitle: frenchTitle,
      frenchBody: frenchBody
    };
  };

  const { portuguese, frenchTitle, frenchBody } = splitText(maitre.fullText);
  
  // Déterminer le label de la langue originale
  const originalLanguageLabel = maitre.originalLanguage === 'english' ? 'English' : 'Português';

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-darker-blue border border-white/20 rounded-lg w-full max-w-6xl max-h-[95vh] sm:max-h-[90vh] flex flex-col">
        {/* Header fixe */}
        <div className="sticky top-0 bg-darker-blue border-b border-white/20 p-3 sm:p-4 md:p-6 flex justify-between items-center z-10">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{maitre.name}</h2>
            <p className="text-white/90 text-sm sm:text-base md:text-lg mt-1">Fabiano Lourenço Marques</p>
            <p className="text-yellow-400 font-medium text-xs sm:text-sm md:text-base mt-1">{maitre.role}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white text-xl sm:text-2xl transition-colors flex-shrink-0 ml-2 sm:ml-4"
          >
            ✕
          </button>
        </div>

        {/* Contenu scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-3 sm:p-4 md:p-6">
            {/* Image en cercle sans bordure */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={maitre.image}
                  alt={maitre.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                />
              </div>
            </div>

            {/* Tabs pour mobile/tablet, colonnes pour desktop */}
            <div className="lg:hidden">
              {portuguese ? (
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-white/5 border border-white/20 backdrop-blur-sm p-1 mb-4">
                    <TabsTrigger 
                      value="portuguese" 
                      className="text-xs sm:text-sm data-[state=active]:bg-yellow-400 data-[state=active]:text-black transition-colors duration-200"
                    >
                      {originalLanguageLabel}
                    </TabsTrigger>
                    <TabsTrigger 
                      value="french" 
                      className="text-xs sm:text-sm data-[state=active]:bg-yellow-400 data-[state=active]:text-black transition-colors duration-200"
                    >
                      Français
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="portuguese" className="mt-0">
                    <p className="text-white/80 text-xs sm:text-sm whitespace-pre-wrap text-justify leading-relaxed">
                      {portuguese}
                    </p>
                  </TabsContent>
                  
                  <TabsContent value="french" className="mt-0">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{frenchTitle}</h3>
                    <p className="text-white/80 text-xs sm:text-sm whitespace-pre-wrap text-justify leading-relaxed">
                      {frenchBody}
                    </p>
                  </TabsContent>
                </Tabs>
              ) : (
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{frenchTitle}</h3>
                  <p className="text-white/80 text-xs sm:text-sm whitespace-pre-wrap text-justify leading-relaxed">
                    {frenchBody}
                  </p>
                </div>
              )}
            </div>

            {/* Texte en deux colonnes pour desktop (ou une seule si pas de portugais) */}
            {portuguese ? (
              <div className="hidden lg:grid lg:grid-cols-2 gap-6 lg:gap-8">
                {/* Colonne Portugaise */}
                <div>
                  <h3 className="text-lg font-semibold text-yellow-400 mb-4">{originalLanguageLabel}</h3>
                  <p className="text-white/80 text-sm sm:text-base whitespace-pre-wrap text-justify leading-relaxed">
                    {portuguese}
                  </p>
                </div>

                {/* Colonne Française */}
                <div>
                  <h3 className="text-lg font-semibold text-yellow-400 mb-4">Français</h3>
                  <h4 className="text-xl font-bold text-white mb-4">{frenchTitle}</h4>
                  <p className="text-white/80 text-sm sm:text-base whitespace-pre-wrap text-justify leading-relaxed">
                    {frenchBody}
                  </p>
                </div>
              </div>
            ) : (
              <div className="hidden lg:block max-w-3xl mx-auto">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">{frenchTitle}</h3>
                <p className="text-white/80 text-sm sm:text-base whitespace-pre-wrap text-justify leading-relaxed">
                  {frenchBody}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function LeGroupeSenzala78() {
  const [selectedMaitre, setSelectedMaitre] = useState(null);
  const heroData = {
    title: "L'histoire du groupe senzala 78",
    description: "Découvrez l'histoire, les maîtres et les grades du Groupe Senzala 78, une branche dynamique de la célèbre école de capoeira brésilienne.",
    image: "/images/logo-capoeirasenzala1.png",
    ctaText: "En savoir plus",
    ctaLink: "#le-groupe"
  };

  const gradesEnfants = {
    "4-8 ans": [
      { niveau: "Blanc", couleur: "blanc", objectif: "Découverte de la capoeira" },
      { niveau: "1 pointe jaune", couleur: "blanc/pointe jaune", objectif: "Initiation aux mouvements de base" },
      { niveau: "2 pointes jaunes", couleur: "blanc/2 pointes jaunes", objectif: "Perfectionnement des mouvements" },
      { niveau: "1 pointe 30cm jaune", couleur: "blanc/pointe 30cm jaune", objectif: "Apprentissage des enchaînements" },
    ],
    "9-11 ans": [
      { niveau: "Blanc", couleur: "blanc", objectif: "Débutant" },
      { niveau: "1 pointe 30cm jaune", couleur: "blanc/pointe 30cm jaune", objectif: "Initiation technique" },
      { niveau: "2 pointes 30cm jaunes", couleur: "blanc/2 pointes 30cm jaunes", objectif: "Perfectionnement technique" },
      { niveau: "Blanc/Jaune", couleur: "blanc/jaune", objectif: "Intermédiaire" },
      { niveau: "Jaune 1 pointe blanche", couleur: "jaune/pointe blanche", objectif: "Avancé" },
      { niveau: "Jaune", couleur: "jaune", objectif: "Maîtrise des bases" },
    ],
    "12-16 ans": [
      { niveau: "Blanc", couleur: "blanc", objectif: "Débutant" },
      { niveau: "Blanc/Jaune", couleur: "blanc/jaune", objectif: "Intermédiaire" },
      { niveau: "Jaune 1 pointe blanche", couleur: "jaune/pointe blanche", objectif: "Avancé" },
      { niveau: "Jaune", couleur: "jaune", objectif: "Maîtrise des bases" },
      { niveau: "Pointe Orange", couleur: "jaune/pointe orange", objectif: "Expert débutant" },
      { niveau: "2 pointes Oranges", couleur: "jaune/2 pointes oranges", objectif: "Expert confirmé" },
      { niveau: "Blanc/Orange", couleur: "blanc/orange", objectif: "Avancé supérieur" },
      { niveau: "Orange/Jaune", couleur: "orange/jaune", objectif: "Expert" },
      { niveau: "Orange", couleur: "orange", objectif: "Maîtrise avancée" },
    ]
  };

  const gradesAdultes = [
    { niveau: "Blanc", couleur: "Blanc", objectif: "Débutant" },
    { niveau: "Blanc/Jaune", couleur: "Blanc/Jaune", objectif: "Initiation" },
    { niveau: "Jaune", couleur: "Jaune", objectif: "Base" },
    { niveau: "Blanc/Orange", couleur: "Blanc/Orange", objectif: "Intermédiaire 1" },
    { niveau: "Jaune/Orange", couleur: "Jaune/Orange", objectif: "Intermédiaire 2" },
    { niveau: "Blanc/Gris", couleur: "Blanc/Gris", objectif: "Avancé 1" },
    { niveau: "Gris", couleur: "Gris", objectif: "Avancé 2" }
  ];

  const gradesEnseignement = [
    { niveau: "Blanc/Bleu (Élève enseignant (Pour élève déjà enseignant arrivant d'un autre groupe))", couleur: "Blanc/Bleu", objectif: "Élève enseignant (Pour élève déjà enseignant arrivant d'un autre groupe)" },
    { niveau: "Bleu (Graduado)", couleur: "Bleu", objectif: "Gradué" },
    { niveau: "Verde (Instrutor)", couleur: "Vert", objectif: "Instructeur" },
    { niveau: "Roxa (Professor)", couleur: "Violet", objectif: "Professeur" },
    { niveau: "Marrom (Contra Mestre)", couleur: "Marron", objectif: "Contre-Maître" },
    { niveau: "Vermelha (Mestre)", couleur: "Rouge", objectif: "Maître" }
  ];

  // Composant pour les cordes avec deux traits superposés
  const ColorBadge = ({ colors }) => {
    // Mappage des couleurs aux classes Tailwind
    const colorMap = {
      'blanc': 'bg-white',
      'jaune': 'bg-yellow-400',
      'bleu': 'bg-blue-500',
      'bleu clair': 'bg-blue-300',
      'vert': 'bg-green-500',
      'bleu foncé': 'bg-blue-700',
      'violet': 'bg-purple-600',
      'orange': 'bg-orange-500',
      'gris': 'bg-gray-400',
      'blanc/gris': 'bg-gradient-to-r from-white to-gray-200',
      'blanc/bleu': 'bg-gradient-to-r from-white to-blue-500',
    };

    // Fonction pour normaliser le nom de la couleur
    const normalizeColor = (color) => {
      return color.toLowerCase().trim();
    };

    // Fonction pour obtenir la classe de couleur
    const getColorClass = (color) => {
      // Ne pas supprimer le texte entre parenthèses pour l'affichage
      // On utilise une copie de la couleur pour la recherche dans le colorMap
      const searchColor = color.replace(/\(.*?\)/g, '').trim();
      return colorMap[normalizeColor(searchColor)] || 'bg-gray-300';
    };

    // Fonction pour rendre une section de trait
    const renderStripeSection = (color, isBottom = false) => {
      const isPointe = color.includes('pointe');
      const is30cm = color.includes('30cm');
      const is2Pointes = color.includes('2 pointes');
      
      // Extraire la couleur de base
      let colorClass;
      if (isPointe) {
        if (is2Pointes) {
          const pointeColor = color.split('2 pointes ')[1].split(' ')[0];
          colorClass = getColorClass(pointeColor);
        } else {
          const pointeColor = color.split('pointe ')[1].split(' ')[0];
          colorClass = getColorClass(pointeColor);
        }
      } else {
        colorClass = getColorClass(color);
      }
      
      // Largeur fixe de 150px pour tous les traits
      const widthClass = 'w-[150px]';
      
      // Style pour les pointes et sections 30cm
      let style = { width: '150px' }; // Largeur par défaut

      if (is30cm) {
        style.width = '40px'; // Largeur de 40px pour les pointes 30cm
        style.marginLeft = 'auto'; // Aligner à droite
      } else if (isPointe) {
        if (is2Pointes) {
          // Pour 2 pointes, on affiche juste un trait de 3px
          style.width = '3px';
        } else {
          // Pour 1 pointe, on affiche un trait de 3px à droite
          style.width = '3px';
          style.marginLeft = 'auto'; // Aligner à droite
        }
      }
      
      return (
        <div 
          className={`h-1.5 ${widthClass} ${colorClass}`}
          style={style}
        />
      );
    };

    // Fonction pour rendre une corde avec deux traits
    const renderCorde = (colors) => {
      const colorList = colors.split('/').map(c => c.trim()).filter(Boolean);
      
      // Gestion des couleurs de base
      let topColor, bottomColor;
      
      if (colors.includes('pointe')) {
        const [baseColor, pointePart] = colors.split('/').map(c => c.trim());
        const isPointeJaune = pointePart.includes('jaune');
        const isPointeBlanche = pointePart.includes('blanche');
        const is30cm = pointePart.includes('30cm');
        const is2Pointes = pointePart.includes('2 pointes');
        
        // Couleur de base (blanc ou jaune)
        const base = baseColor.toLowerCase();
        
        if (is2Pointes) {
          // Pour 2 pointes, on affiche une pointe sur chaque trait
          const pointeColor = isPointeJaune ? 'jaune' : (isPointeBlanche ? 'blanc' : 'orange');
          topColor = `pointe ${pointeColor} droite${is30cm ? ' 30cm' : ''}`;
          bottomColor = `pointe ${pointeColor} droite${is30cm ? ' 30cm' : ''}`;
        } else {
          // Pour 1 pointe, on affiche la couleur de base en haut (blanc si pointe orange) et la pointe en bas
          const pointeColor = isPointeJaune ? 'jaune' : (isPointeBlanche ? 'blanc' : 'orange');
          const isPointeOrange = pointeColor === 'orange';
          
          topColor = isPointeOrange ? 'blanc' : base;
          bottomColor = base === 'jaune' && isPointeBlanche 
            ? `jaune pointe blanche droite${is30cm ? ' 30cm' : ''}`
            : `pointe ${pointeColor} droite${is30cm ? ' 30cm' : ''}`;
        }
      } else {
        // Pour les couleurs simples ou doubles
        if (colorList.length === 1) {
          // Pour une seule couleur, on l'applique aux deux traits
          topColor = colorList[0];
          bottomColor = colorList[0];
        } else {
          // Pour deux couleurs, on les applique respectivement
          [topColor = 'blanc', bottomColor = 'blanc'] = colorList;
        }
      }

      return (
        <div className="w-full">
          <div className="w-[150px] ml-auto flex flex-col gap-1">
            {/* Trait du haut - couleur de base ou pointe */}
            <div className="h-3 flex items-center">
              {topColor.includes('pointe') ? (
                <div className="w-full h-1.5 relative bg-white">
                  <div 
                    className={`absolute top-0 h-full ${
                      topColor.includes('jaune') ? 'bg-yellow-400' : 
                      topColor.includes('blanc') ? 'bg-white' : 'bg-orange-500'
                    }`} 
                    style={{ 
                      width: topColor.includes('30cm') ? '75px' : '20px', 
                      right: 0 
                    }}
                  />
                </div>
              ) : (
                <div className={`h-1.5 w-full ${getColorClass(topColor)}`} />
              )}
            </div>
            
            {/* Trait du bas - couleur de base ou pointe */}
            <div className="h-3 flex items-center">
              {bottomColor.includes('pointe') ? (
                <div className={`w-full h-1.5 relative ${bottomColor.startsWith('jaune') ? 'bg-yellow-400' : 'bg-white'}`}>
                  {bottomColor.startsWith('jaune pointe') ? (
                    <div 
                      className="absolute top-0 right-0 h-full bg-white"
                      style={{ width: bottomColor.includes('30cm') ? '75px' : '20px' }}
                    />
                  ) : (
                    <div 
                      className={`absolute top-0 h-full ${
                        bottomColor.includes('jaune') ? 'bg-yellow-400' : 
                        bottomColor.includes('blanc') ? 'bg-white' : 'bg-orange-500'
                      }`} 
                      style={{ 
                        width: bottomColor.includes('30cm') ? '75px' : '20px', 
                        right: 0 
                      }}
                    />
                  )}
                </div>
              ) : (
                <div className={`h-1.5 w-full ${getColorClass(bottomColor)}`} />
              )}
            </div>
          </div>
        </div>
      );
    };

    return (
      <div className="flex flex-col items-end w-full">
        {renderCorde(colors)}
        {/* <span className="mt-2 text-sm text-white/80 whitespace-nowrap">{colors}</span> */}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-dark-blue text-white">
      <HeroSection
        title="Le groupe Senzala 78"
        subtitle="Découvrez notre école de capoeira et notre équipe de passionnés"
        heroImage="/images/hero-section-img/histoire_du_groupe.png"
      />

      {/* Section Notre École */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-b from-dark-blue to-darker-blue">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 sm:mb-8">
                Le groupe Senzala du Brésil à l'international
              </h2>
              <div className="prose prose-sm sm:prose-base lg:prose-lg text-white/80 mx-auto text-justify px-2 sm:px-0">
                <p className="mb-4 sm:mb-6">
                  Fondé dans les années 1960 à Rio de Janeiro, le Groupe Senzala est rapidement devenu l'une des références mondiales de la capoeira.
                  Notre branche, Senzala 78, perpétue cette tradition d'excellence en France depuis sa création.
                </p>
                <p className="mb-6">
                  De ses racines brésiliennes à son expansion internationale, le Groupe Senzala a su préserver l'authenticité de la capoeira tout en l'adaptant aux réalités contemporaines.
                  Notre école s'inscrit dans cette lignée, en proposant un enseignement de qualité qui respecte les traditions tout en encourageant l'innovation.
                </p>
                <p>
                  Aujourd'hui présent sur les cinq continents, le Groupe Senzala continue de former des générations de capoeiristes à travers le monde,
                  véritables ambassadeurs de cette culture afro-brésilienne riche et passionnante.
                </p>
              </div>
              <div className="w-full max-w-4xl mx-auto mt-12">
                <VideoPlayer
                  thumbnailUrl="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?q=80&w=2069&auto=format&fit=crop"
                  videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Building the Future"
                  description="A look into modern architecture and design."
                  className="rounded-xl w-full h-[500px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les Maîtres Section */}
      {/* Section Notre Équipe */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-gradient-to-b from-darker-blue to-dark-blue">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl text-white font-semibold mb-3 sm:mb-4">Les maîtres</h2>
              <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto px-2 sm:px-0">
                Découvrez les maîtres qui ont façonné l'histoire et la philosophie du Groupe Senzala à travers les générations.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {maitres.map((maitre, index) => (
                <div 
                  key={index} 
                  onClick={() => maitre.fullText && setSelectedMaitre(maitre)}
                  className={`relative overflow-hidden rounded-lg h-80 sm:h-96 md:h-[450px] hover:shadow-lg transition-all duration-300 ${maitre.fullText ? 'cursor-pointer' : ''}`}
                >
                  <Image
                    src={maitre.image}
                    alt={maitre.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">{maitre.name}</h3>
                    <p className="text-yellow-400 font-medium text-sm sm:text-base mb-2 sm:mb-3">{maitre.role}</p>
                    <p className="text-white/90 text-xs sm:text-sm line-clamp-3">{maitre.description}</p>
                    {maitre.fullText && (
                      <p className="text-white/70 text-xs mt-3 pt-3 border-t border-white/20">Cliquez pour lire la biographie complète</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <MaitreModal 
        maitre={selectedMaitre} 
        isOpen={!!selectedMaitre} 
        onClose={() => setSelectedMaitre(null)} 
      />

      <Separator className="my-12" />

      {/* Les Grades Section */}
      {/* Section Grades */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 bg-darker-blue">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 sm:mb-10 md:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">LES GRADES</h2>
              <p className="text-base sm:text-lg text-white/80 max-w-4xl mx-auto px-2 sm:px-0">
                Le système de grades du Groupe Senzala reflète le parcours et l'engagement de chaque capoeiriste dans la pratique de cet art martial.
              </p>
            </div>

            <Tabs defaultValue="enfants" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 bg-white/5 border border-white/20 backdrop-blur-sm p-1">
                <TabsTrigger 
                  value="enfants" 
                  className="py-1.5 sm:py-2 text-xs sm:text-sm md:text-base px-1 sm:px-2 truncate data-[state=active]:bg-yellow-500 data-[state=active]:text-white transition-colors duration-200"
                >
                  Enfants
                </TabsTrigger>
                <TabsTrigger 
                  value="adultes" 
                  className="py-1.5 sm:py-2 text-xs sm:text-sm md:text-base px-1 sm:px-2 truncate data-[state=active]:bg-yellow-500 data-[state=active]:text-white transition-colors duration-200"
                >
                  Adultes
                </TabsTrigger>
                <TabsTrigger 
                  value="enseignement" 
                  className="py-1.5 sm:py-2 text-xs sm:text-sm md:text-base px-1 sm:px-2 truncate data-[state=active]:bg-yellow-500 data-[state=active]:text-white transition-colors duration-200"
                >
                  Enseignement
                </TabsTrigger>
              </TabsList>

              <TabsContent value="enfants" className="mt-6 space-y-8">
                {Object.entries(gradesEnfants).map(([ageGroup, grades]) => (
                  <Card key={ageGroup} className="bg-white/5 border-white/10 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">Tranche d'âge : {ageGroup}</CardTitle>
                      <CardDescription className="text-white/70">Progression des grades pour les {ageGroup}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {grades.map((grade, index) => (
                          <div key={index} className="p-3 sm:p-4 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
                            <div className="flex justify-between items-center w-full">
                              <h4 className="font-normal text-white text-xs sm:text-sm md:text-base break-words pr-4">
                                {grade.niveau}
                              </h4>
                              <div className="flex-shrink-0 ml-4">
                                <ColorBadge colors={grade.couleur} />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="adultes" className="mt-6">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Graduation Adultes</CardTitle>
                    <CardDescription className="text-white/70">Le parcours de progression pour les capoeiristes adultes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {gradesAdultes.map((grade, index) => (
                        <div key={index} className="p-3 sm:p-4 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
                          <div className="flex justify-between items-center w-full gap-4">
                            <h4 className="font-normal text-white text-xs sm:text-sm md:text-base break-words flex-1 min-w-0">
                              {grade.niveau}
                            </h4>
                            <div className="w-[150px] flex-shrink-0">
                              <ColorBadge colors={grade.couleur} />
                            </div>
                          </div>
                          {/* <p className="mt-2 text-white/80">{grade.objectif}</p> */}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="enseignement" className="mt-6">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-white">Graduation Enseignement</CardTitle>
                    <CardDescription className="text-white/70">Les niveaux d'enseignement et de responsabilité</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {gradesEnseignement.map((grade, index) => (
                        <div key={index} className="p-3 sm:p-4 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300">
                          <div className="flex justify-between items-center w-full gap-4">
                            <h4 className="font-normal text-white text-xs sm:text-sm md:text-base break-words flex-1 min-w-0">
                              {grade.niveau}
                            </h4>
                            <div className="w-[150px] flex-shrink-0">
                              <ColorBadge colors={grade.couleur} />
                            </div>
                          </div>
                          {/* <p className="mt-2 text-white/80">{grade.objectif}</p> */}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
