import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Feature() {
  return (
    <div className="w-full py-16 lg:py-24 bg-dark-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:flex-row-reverse">
          <div className="bg-gray-800/50 rounded-xl overflow-hidden shadow-xl">
            <Carousel>
              <CarouselContent>
                {[
                  '/images/professionnelle/presta_pro_01.jpg',
                  '/images/professionnelle/presta_pro_02.jpeg',
                ].map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-video">
                      <img 
                        src={src} 
                        alt={`Capoeira ${index + 1}`}
                        className={`w-full h-full object-cover`}
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = '/images/logo-capoeirasenzala1.png'; // Fallback vers le logo
                        }}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 text-white" />
              <CarouselNext className="right-2 text-white" />
            </Carousel>
          </div>
          <div className="flex flex-col gap-6">
            <div>
                <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Prestations Pro</Badge>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white">
                Prestations professionnelles
              </h2>
              <p className="text-lg text-gray-300 max-w-xl">
                Découvrez nos services professionnels de capoeira pour vos événements, 
                séminaires et animations. Des prestations sur mesure pour entreprises, 
                écoles et collectivités.
              </p>
              <button className="mt-4 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200">
                En savoir plus
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
