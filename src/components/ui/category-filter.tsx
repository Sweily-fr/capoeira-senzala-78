import { cn } from "@/lib/utils";
import { useEffect, useRef } from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  className?: string;
}

export function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onSelectCategory,
  className 
}: CategoryFilterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);
  
  // Mettre à jour la position de défilement pour garder l'onglet actif visible
  useEffect(() => {
    if (activeTabRef.current && containerRef.current) {
      const container = containerRef.current;
      const activeTab = activeTabRef.current;
      
      const containerRect = container.getBoundingClientRect();
      const tabRect = activeTab.getBoundingClientRect();
      
      // Vérifier si l'onglet n'est pas totalement visible
      if (tabRect.left < containerRect.left) {
        // Faire défiler pour aligner l'onglet à gauche
        container.scrollLeft += tabRect.left - containerRect.left - 16; // 16px de marge
      } else if (tabRect.right > containerRect.right) {
        // Faire défiler pour aligner l'onglet à droite
        container.scrollLeft += tabRect.right - containerRect.right + 16; // 16px de marge
      }
    }
  }, [selectedCategory]);

  const handleTabClick = (category: string | null) => {
    // Sauvegarder la position de défilement actuelle
    const scrollY = window.scrollY;
    
    // Mettre à jour la catégorie sélectionnée
    onSelectCategory(category);
    
    // Restaurer la position de défilement après le rendu
    requestAnimationFrame(() => {
      window.scrollTo(0, scrollY);
    });
  };

  return (
    <div className={cn("w-full border-b border-gray-800", className)}>
      <div 
        ref={containerRef}
        className="relative flex space-x-10 overflow-x-auto scrollbar-hide"
      >
        <div className="flex space-x-10">
          <button
            ref={!selectedCategory ? activeTabRef : null}
            onClick={() => handleTabClick(null)}
            className={cn(
              "relative whitespace-nowrap pb-4 pt-2 text-sm font-normal transition-colors duration-150 tracking-normal",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-500/50",
              !selectedCategory 
                ? "text-yellow-400 border-b-2 border-yellow-400" 
                : "text-gray-400 hover:text-gray-300"
            )}
          >
            Tous
          </button>
          
          {categories.map((category) => (
            <button
              key={category}
              ref={selectedCategory === category ? activeTabRef : null}
              onClick={() => handleTabClick(category)}
              className={cn(
                "relative whitespace-nowrap pb-4 pt-2 text-sm font-normal transition-colors duration-150 tracking-normal",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-500/50",
                selectedCategory === category
                  ? "text-yellow-400 border-b-2 border-yellow-400"
                  : "text-gray-400 hover:text-gray-300"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
