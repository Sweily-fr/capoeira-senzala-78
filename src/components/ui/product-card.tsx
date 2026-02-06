import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./button";
import Image from "next/image";
import { Product } from "@/data/products";
import { Eye } from "lucide-react";

export function ProductCard({ product, onClick }: { product: Product; onClick: () => void }) {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Image container */}
      <div 
        className="group/image relative overflow-hidden rounded-xl aspect-square cursor-pointer"
        onClick={onClick}
      >
        <Image 
          src={product.image} 
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover/image:scale-105"
          sizes="(max-width: 480px) 100vw, (max-width: 767px) 50vw, (max-width: 1023px) 33vw, (max-width: 1279px) 25vw, 20vw"
          priority
        />
        {/* Overlay avec icône eye au survol */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Eye className="w-10 h-10 text-white/70" />
        </div>
      </div>
      
      {/* Informations sous l'image */}
      <div className="mt-3 px-1 flex flex-col gap-2">
        <h3 className="font-normal text-sm xs:text-base sm:text-lg text-white text-left line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-400 text-xs xs:text-sm line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-1">
          <span className="font-semibold text-base xs:text-lg text-white">
            {product.price.toFixed(2)}€
          </span>
          <Button 
            onClick={onClick}
            size="sm"
            className="bg-primary-500 hover:bg-primary-600 text-white text-xs xs:text-sm font-medium border-0 transition-colors px-3 h-8"
          >
            Voir le produit
          </Button>
        </div>
      </div>
    </div>
  );
}
