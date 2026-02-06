"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroSection } from "@/components/blocks/hero-section-5";
import { FlipReveal } from "@/components/ui/flip-reveal";
import { ProductCard } from "@/components/ui/product-card";
import { ProductDialog } from "@/components/ui/product-dialog";
import { CategoryFilter } from "@/components/ui/category-filter";
import { products, Product } from "@/data/products";

export default function AchatsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get unique categories from products
  const categories = Array.from(new Set(products.map(p => p.category)));
  
  // Filter products by selected category
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  // Animation variants for the product grid
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        when: "beforeChildren"
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as const
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 1, 1] as const
      }
    }
  } as const;

  return (
    <div className="min-h-screen bg-dark-blue flex flex-col">
      <HeroSection
        title="Boutique Adhérents"
        subtitle="Découvrez notre collection d'articles officiels et équipements de capoeira"
        heroImage="/images/hero-section-img/boutique.JPG"
      />
      
      <div className="flex-grow w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-5 md:px-6 py-6 sm:py-8 md:py-12 lg:py-16 text-white">
          <div className="text-center mb-6 sm:mb-10 md:mb-12">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-2 sm:mb-3">
              Nos Produits
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-gray-200 max-w-2xl mx-auto px-4">
              Découvrez notre sélection d'articles de qualité pour votre pratique de la capoeira
            </p>
            <div className="mt-4 sm:mt-6 px-2 sm:px-0">
              <CategoryFilter 
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={selectedCategory || 'all'}
              initial="hidden"
              animate="show"
              exit="exit"
              variants={containerVariants}
              className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 mt-6 sm:mt-8 px-2 sm:px-0"
            >
              {filteredProducts.map((product) => (
                <motion.div 
                  key={product.id} 
                  variants={itemVariants}
                  className="w-full"
                >
                  <FlipReveal 
                    keys={[product.id]}
                    className="h-full"
                  >
                    <ProductCard 
                      product={product} 
                      onClick={() => handleProductClick(product)} 
                    />
                  </FlipReveal>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <ProductDialog 
        product={selectedProduct} 
        open={isDialogOpen} 
        onOpenChange={setIsDialogOpen}
      />
    </div>
  );
}
