import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./dialog";
import { Button } from "./button";
import { X, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Product } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import { OrderDialog } from "./order-dialog";
import { useRouter } from 'next/navigation';
import { villes, getVilleParId, getProfesseurParId } from "@/data/professeurs";

interface ProductDialogProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Les données des villes et professeurs sont maintenant importées depuis @/data/professeurs

export function ProductDialog({ product, open, onOpenChange }: ProductDialogProps) {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [orderDialogOpen, setOrderDialogOpen] = useState(false);
  const [orderLink, setOrderLink] = useState('');
  const thumbnailsContainerRef = useRef<HTMLDivElement>(null);
  
  // Reset image index when product changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [product?.id]);

  // Scroll thumbnails to keep active image visible
  useEffect(() => {
    if (thumbnailsContainerRef.current) {
      const container = thumbnailsContainerRef.current;
      const activeThumb = container.children[currentImageIndex] as HTMLElement;
      if (activeThumb) {
        const containerRect = container.getBoundingClientRect();
        const thumbRect = activeThumb.getBoundingClientRect();
        
        if (thumbRect.left < containerRect.left) {
          container.scrollLeft += thumbRect.left - containerRect.left - 8;
        } else if (thumbRect.right > containerRect.right) {
          container.scrollLeft += thumbRect.right - containerRect.right + 8;
        }
      }
    }
  }, [currentImageIndex]);

  if (!product) return null;

  // Use product.images if available, otherwise fallback to product.image
  const images = product.images ? [...product.images] : [product.image];
  const currentImage = images[currentImageIndex];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleOrderClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (product.orderLink) {
      setOrderLink(product.orderLink);
      setOrderDialogOpen(true);
    }
  };

  const handleOrderSubmit = async ({ ville, professeur }: { ville: string; professeur: string }) => {
    // Ici, vous pouvez ajouter une logique supplémentaire si nécessaire
    // avant la redirection, comme enregistrer la sélection
    console.log(`Commande pour la ville: ${ville}, Professeur: ${professeur}`);
    
    // Redirection vers le lien Assoconnect
    if (orderLink) {
      // Vous pourriez vouloir ajouter des paramètres à l'URL
      const url = new URL(orderLink);
      url.searchParams.append('ville', ville);
      url.searchParams.append('professeur', professeur);
      
      window.open(url.toString(), '_blank');
    }
  };

  return (
    <>
      <OrderDialog
        open={orderDialogOpen}
        onOpenChange={setOrderDialogOpen}
        onOrderSubmit={handleOrderSubmit}
        villes={villes.map(v => ({
          id: v.id,
          nom: v.nom,
          professeurs: v.professeurs.map(p => p.nomComplet)
        }))}
      />
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-5xl h-[90vh] max-h-[800px] bg-gray-900 text-white border-0 p-0 flex flex-col">
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Gallery */}
              <div className="space-y-4">
            <div className="relative aspect-square w-full bg-gray-800 rounded-xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={currentImage}
                    alt={`${product.name} - Vue ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    aria-label="Image précédente"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    aria-label="Image suivante"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div ref={thumbnailsContainerRef} className="flex gap-2 overflow-x-auto pb-2 scroll-smooth">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => selectImage(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-yellow-500 ring-2 ring-yellow-500/30'
                        : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                    aria-label={`Afficher l'image ${index + 1}`}
                  >
                    <Image
                      src={img}
                      alt={`""`}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
              </div>

              {/* Product Info */}
              <div className="space-y-6">
            <div>
              <div className="inline-flex items-center px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium rounded-full mb-4 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></span>
                {product.category}
              </div>
              <DialogTitle className="text-2xl font-bold text-white">
                {product.name}
              </DialogTitle>
              <div className="mt-2 flex items-center">
                <span className="text-3xl font-bold text-white">
                  {product.price.toFixed(2)}€
                </span>
                {product.originalPrice && (
                  <span className="ml-2 text-sm text-gray-500 line-through">
                    {product.originalPrice.toFixed(2)}€
                  </span>
                )}
              </div>
            </div>

            <div className="space-y-4 text-white">
              <div>
                <h3 className="text-sm font-medium text-white">Description</h3>
                <p className="mt-1 text-gray-200">
                  {product.description}
                </p>
              </div>

              {product.details && (
                <div>
                  <h3 className="text-sm font-medium text-white">Détails</h3>
                  <ul className="mt-1 space-y-1 text-gray-200">
                    {Object.entries(product.details).map(([key, value]) => (
                      <li key={key} className="flex">
                        <span className="text-gray-400 w-24 flex-shrink-0">
                          {key}:
                        </span>
                        <span className="text-white">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

              </div>
            </div>
          </div>
          
          <DialogFooter className="px-6 py-4 border-t border-gray-800 bg-gray-900/95 backdrop-blur-sm">
            <Button 
              variant="outline" 
              className="border-gray-600 text-white hover:bg-gray-800"
              onClick={() => onOpenChange(false)}
            >
              Continuer mes achats
            </Button>
            <Button 
              onClick={handleOrderClick}
              className="bg-yellow-500 hover:bg-yellow-600 text-white"
              disabled={!product.orderLink}
            >
              Commander maintenant
            </Button>
          </DialogFooter>
      </DialogContent>
    </Dialog>
    </>
  );
}
