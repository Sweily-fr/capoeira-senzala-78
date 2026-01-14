'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const HistoryScroll = ({ content = [] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dotPositions, setDotPositions] = useState([]);
  const containerRef = useRef(null);
  const sectionRefs = useRef([]);
  
  // Mise à jour de l'index actif lors du défilement
  useEffect(() => {
    let ticking = false;
    let imageContainer = null;
    let containerStart = 0;
    let isInitialized = false;
    let lastKnownScrollPosition = 0;
    
    const handleScroll = () => {
      if (!containerRef.current || ticking) return;
      
      ticking = true;
      window.requestAnimationFrame(() => {
        const container = containerRef.current;
        const containerRect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        lastKnownScrollPosition = window.scrollY;
        
        // Initialisation au premier scroll
        if (!isInitialized) {
          containerStart = containerRect.top + lastKnownScrollPosition;
          isInitialized = true;
        }
        
        // Vérifier si on est dans le composant
        const isInView = containerRect.top <= windowHeight * 0.2 && containerRect.bottom >= windowHeight * 0.2;
        const isPastContainer = containerRect.bottom <= windowHeight;
        
        if (!isInView) {
          // Réinitialiser l'état si on remonte avant le composant
          if (imageContainer) {
            imageContainer.style.position = 'absolute';
            imageContainer.style.top = '0';
            imageContainer.style.visibility = 'hidden';
          }
          ticking = false;
          return;
        }
        
        // Calculer la hauteur de chaque section en fonction du contenu réel
        const sectionHeights = [];
        let currentScrollPos = lastKnownScrollPosition - containerStart;
        let newIndex = 0;
        
        // Calculer les hauteurs réelles des sections et trouver la section active
        for (let i = 0; i < content.length; i++) {
          const section = sectionRefs.current[i];
          if (section) {
            const sectionTop = section.offsetTop - (windowHeight * 0.4); // Détection 40% plus tôt
            sectionHeights[i] = section.offsetHeight;
            
            if (currentScrollPos >= sectionTop) {
              newIndex = i;
            }
          }
        }
        
        // S'assurer qu'on ne dépasse pas le nombre de sections
        newIndex = Math.min(newIndex, content.length - 1);
        
        if (newIndex !== activeIndex) {
          setActiveIndex(newIndex);
        }
        
        // Positionner l'image sticky
        if (!imageContainer) {
          imageContainer = document.querySelector('.sticky-image-container');
        }
        
        if (imageContainer) {
          if (isPastContainer) {
            // On est arrivé à la fin du conteneur, on arrête le sticky
            imageContainer.style.position = 'absolute';
            imageContainer.style.top = `${container.offsetHeight - windowHeight}px`;
            imageContainer.style.visibility = 'visible';
          } else if (isInView) {
            // On est dans le contenu, on active le sticky
            imageContainer.style.position = 'fixed';
            imageContainer.style.top = '20vh';
            imageContainer.style.visibility = 'visible';
            imageContainer.style.height = '80vh';
            
            // Mettre à jour la classe active sur les sections avec une transition fluide
            sectionRefs.current.forEach((section, idx) => {
              if (!section) return;
              
              if (idx === newIndex) {
                // Section active
                section.style.transition = 'all 0.5s ease';
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
                section.style.pointerEvents = 'auto';
                section.style.zIndex = '1';
                section.style.background = 'linear-gradient(to right, rgba(234, 179, 8, 0.1), rgba(202, 138, 4, 0.05))';
                section.style.border = '1px solid rgb(234, 179, 8)';
                section.style.outline = 'none';
                section.classList.add('active');
                section.classList.remove('inactive');
              } else {
                // Sections inactives
                section.style.transition = 'all 0.3s ease';
                section.style.opacity = '0.3';
                section.style.transform = 'translateY(20px)';
                section.style.pointerEvents = 'none';
                section.style.background = 'transparent';
                section.style.border = 'none';
                section.style.outline = 'none';
                section.classList.remove('active');
                section.classList.add('inactive');
              }
            });
            
            // Forcer le rafraîchissement de l'animation
            const currentImage = imageContainer.querySelector('motion-div');
            if (currentImage) {
              currentImage.style.animation = 'none';
              currentImage.offsetHeight; // Trigger reflow
              currentImage.style.animation = '';
            }
          }
        }
        
        ticking = false;
      });
    };
    
    const handleResize = () => {
      handleScroll();
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    
    // Appel initial
    const timer = setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [activeIndex, content.length]);
  
  // Effet pour le défilement fluide vers la section active
  useEffect(() => {
    // Ne pas déclencher le scroll au chargement initial
    if (activeIndex === 0 && !containerRef.current) return;
    
    if (sectionRefs.current[activeIndex]) {
      const element = sectionRefs.current[activeIndex];
      const container = containerRef.current;
      
      if (!container) return;
      
      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();
      
      // Vérifier si l'élément n'est pas déjà visible au centre
      const isInView = (
        elementRect.top >= containerRect.top &&
        elementRect.bottom <= containerRect.bottom
      );
      
      if (!isInView) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
    }
  }, [activeIndex]);
  
  // Initialiser la première section comme active au chargement
  useEffect(() => {
    const init = () => {
      if (sectionRefs.current[0]) {
        sectionRefs.current[0].classList.add('active');
        sectionRefs.current[0].style.opacity = '1';
        sectionRefs.current[0].style.transform = 'translateY(0)';
        sectionRefs.current[0].style.background = 'linear-gradient(to right, rgba(234, 179, 8, 0.1), rgba(202, 138, 4, 0.05))';
        sectionRefs.current[0].style.border = '1px solid rgb(234, 179, 8)';
        sectionRefs.current[0].style.outline = 'none';
        
        // Préparer l'image pour l'affichage dès le début
        const imageContainer = document.querySelector('.sticky-image-container');
        if (imageContainer) {
          imageContainer.style.visibility = 'hidden';
          imageContainer.style.position = 'fixed';
          imageContainer.style.top = '0';
        }
      }
    };
    
    // Délai pour s'assurer que le DOM est prêt
    const timer = setTimeout(init, 100);
    return () => clearTimeout(timer);
  }, []);
  
  // Initialiser les références des sections
  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, content.length);
  }, [content]);

  // Calculer les positions des points en fonction des sections
  useEffect(() => {
    const updateDotPositions = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const containerTop = container.offsetTop;
      
      const positions = sectionRefs.current.map((section) => {
        if (!section) return 0;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        // Centrer le point au milieu de la section
        return sectionTop + (sectionHeight / 2) - containerTop;
      });
      
      setDotPositions(positions);
    };
    
    // Calculer au chargement et lors du redimensionnement
    updateDotPositions();
    window.addEventListener('resize', updateDotPositions);
    
    // Recalculer après un court délai pour s'assurer que le DOM est prêt
    const timer = setTimeout(updateDotPositions, 200);
    
    return () => {
      window.removeEventListener('resize', updateDotPositions);
      clearTimeout(timer);
    };
  }, [content]);

  return (
    <div className="relative bg-dark-blue">
      
      {/* Conteneur principal avec positionnement relatif */}
      <div className="relative z-0">
        
        {/* Image mobile/tablet - Affichée au-dessus du contenu */}
        <div className="lg:hidden w-full px-4 sm:px-6 md:px-8 py-8">
          <motion.div 
            className="relative w-full max-w-2xl mx-auto h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-gradient-to-br from-gray-900 to-gray-800"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1]
              }
            }}
            key={activeIndex}
          >
            {content[activeIndex]?.content ? (
              <div className="w-full h-full flex items-center justify-center bg-black/20 relative">
                <div className="relative w-full h-full">
                  {content[activeIndex].content}
                </div>
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-900/80 to-purple-900/80 flex flex-col items-center justify-center text-white p-6 text-center">
                <div className="bg-white/10 p-4 rounded-full mb-4">
                  <span className="text-4xl">📷</span>
                </div>
                <h4 className="text-xl font-bold mb-2">
                  {content[activeIndex]?.title || 'Image non disponible'}
                </h4>
                <p className="text-blue-100 text-sm">
                  Section {activeIndex + 1} sur {content.length}
                </p>
              </div>
            )}
          </motion.div>
        </div>
        {/* Colonne de droite - Image sticky */}
        <div 
          className="sticky-image-container hidden lg:block absolute right-0 w-1/2 z-10" 
          style={{ 
            position: 'fixed',
            top: '20vh',
            height: '80vh',
            transition: 'opacity 0.5s ease-in-out',
            pointerEvents: 'none',
            visibility: 'hidden'
          }}>
          <div className="h-full flex items-center justify-center p-8">
            <motion.div 
              className="relative w-full max-w-2xl h-3/4 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-gradient-to-br from-gray-900 to-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.5,
                  ease: [0.4, 0, 0.2, 1]
                }
              }}
              key={activeIndex}
            >
              {content[activeIndex]?.content ? (
                <div className="w-full h-full flex items-center justify-center bg-black/20 relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h4 className="text-xl font-bold mb-2">{content[activeIndex]?.title}</h4>
                      <p className="text-sm opacity-90">Section {activeIndex + 1} sur {content.length}</p>
                    </div>
                  </div>
                  <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-105">
                    {content[activeIndex].content}
                  </div>
                </div>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-900/80 to-purple-900/80 flex flex-col items-center justify-center text-white p-8 text-center">
                  <div className="bg-white/10 p-6 rounded-full mb-6 transform transition-transform duration-300 hover:scale-110">
                    <span className="text-5xl">📷</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-3">
                    {content[activeIndex]?.title || 'Image non disponible'}
                  </h4>
                  <p className="text-blue-100 mb-4">
                    Section {activeIndex + 1} sur {content.length}
                  </p>
                  <p className="text-sm opacity-80 max-w-md">
                    Aucune image n'a été fournie pour cette section
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Ligne verticale avec points - Timeline */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px z-20">
          {/* Ligne verticale */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-yellow-500/30 to-transparent"></div>
          
          {/* Points pour chaque section */}
          {content.map((item, index) => (
            <div
              key={index}
              className="absolute left-1/2 -translate-x-1/2 transition-all duration-500"
              style={{
                top: dotPositions[index] ? `${dotPositions[index]}px` : '0',
              }}
            >
              <div 
                className={`w-4 h-4 rounded-full border-2 transition-all duration-500 ${
                  index === activeIndex 
                    ? 'bg-yellow-500 border-yellow-500 scale-150 shadow-lg shadow-yellow-500/50' 
                    : 'bg-dark-blue border-yellow-500/50 scale-100'
                }`}
              ></div>
            </div>
          ))}
        </div>

        {/* Colonne de gauche - Contenu défilant */}
        <div 
          ref={containerRef} 
          className="relative z-0 w-full lg:w-1/2" 
          style={{ 
            padding: '0',
            paddingBottom: '30vh'
          }}>
          <div className="container mx-auto py-4 sm:py-6 md:py-8 lg:py-10 px-4 sm:px-6 md:px-8 lg:px-8">
            <div className="max-w-3xl mx-auto">
              {content.map((item, index) => (
                <div 
                  key={index}
                  ref={el => sectionRefs.current[index] = el}
                  className={`history-item py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-5 md:px-6 rounded-lg transition-all duration-500 ${
                    index === activeIndex 
                      ? 'active bg-gradient-to-r from-yellow-500/10 to-yellow-600/5 border-l-4 border-yellow-500' 
                      : 'inactive'
                  }`}
                  data-index={index}
                  tabIndex={0}
                >
                  <div className="relative">
                    <span className="hidden lg:block absolute -left-12 top-0 text-2xl font-bold text-yellow-400 opacity-0 transition-opacity duration-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-white mb-3 sm:mb-4">{item.title}</h3>
                    <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
