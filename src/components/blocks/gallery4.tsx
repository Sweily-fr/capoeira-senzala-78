"use client";

import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { events as eventsData } from "@/data/events";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  startDate: string;
  endDate?: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items?: Gallery4Item[];
}

// Transformer les événements du fichier data en format Gallery4Item
const transformEventsToGalleryItems = (): Gallery4Item[] => {
  return eventsData.map(event => ({
    id: event.id.toString(),
    title: event.title,
    description: event.description,
    href: event.externalLink || `/evenements/${event.id}`,
    image: event.image,
    startDate: event.date,
    endDate: event.date,
  }));
};

const data = transformEventsToGalleryItems();

// Trier les événements par date (du plus récent au plus ancien)
// Trier les événements par date de début (du plus récent au plus ancien)
const sortEventsByDate = (events: Gallery4Item[]) => {
  return [...events].sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());
};

// Formater une plage de dates pour l'affichage
const formatDateRange = (startDate: string, endDate?: string) => {
  const start = new Date(startDate);
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };

  if (!endDate || startDate === endDate) {
    return start.toLocaleDateString('fr-FR', options);
  }

  const end = new Date(endDate);
  if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
    return `Du ${start.getDate()} au ${end.toLocaleDateString('fr-FR', options)}`;
  }

  return `Du ${start.toLocaleDateString('fr-FR', options)} au ${end.toLocaleDateString('fr-FR', options)}`;
};

// Vérifier si un événement est passé
const isEventPast = (startDate: string, endDate?: string) => {
  const now = new Date();
  now.setHours(0, 0, 0, 0); // Reset time to start of day for fair comparison

  const eventDate = endDate ? new Date(endDate) : new Date(startDate);
  eventDate.setHours(0, 0, 0, 0);

  return eventDate < now;
};

const Gallery4 = ({
  title = "Nos événements",
  description = "Découvrez nos prochains événements et inscrivez-vous en un clic !",
  items = sortEventsByDate(data),
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  // Ajouter le support du scroll horizontal avec la molette
  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const carousel = carouselApi.rootNode();

    const handleWheel = (e: WheelEvent) => {
      // Détecter si c'est un scroll horizontal (trackpad horizontal ou Shift+scroll)
      const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey;

      if (isHorizontalScroll) {
        e.preventDefault();

        const delta = e.deltaX || e.deltaY;

        if (delta > 0) {
          carouselApi.scrollNext();
        } else if (delta < 0) {
          carouselApi.scrollPrev();
        }
      }
      // Sinon, laisser le scroll vertical normal se produire
    };

    carousel.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      carousel.removeEventListener('wheel', handleWheel);
    };
  }, [carouselApi]);

  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="max-w-lg text-lg text-white/80">{description}</p>
          </div>
          <div className="hidden shrink-0 gap-2 md:flex">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5 text-white" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5 text-white" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full pl-6 lg:pl-12">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 -mr-6 lg:-mr-12">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-0 pr-5 lg:max-w-[360px]"
              >
                <a href={item.href} className="group rounded-xl">
                  <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-xl md:aspect-[5/4] lg:aspect-[16/9]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-full bg-gradient-to-t from-black/80 via-black/40 to-transparent mix-blend-multiply" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                      <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                        {item.title}
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-white">
                        <CalendarDays className="h-5 w-5" />
                        <span>{formatDateRange(item.startDate, item.endDate)}</span>
                      </div>
                      {!isEventPast(item.startDate, item.endDate) && (
                        <div className="mt-4 flex items-center text-sm">
                          S'inscrire à l'événement{" "}
                          <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-primary" : "bg-primary/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };
