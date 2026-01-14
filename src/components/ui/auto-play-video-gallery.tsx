"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Play, Pause } from "lucide-react";

interface VideoData {
  id: number;
  thumbnailUrl: string;
  videoUrl: string;
  title: string;
  description?: string;
}

interface AutoPlayVideoGalleryProps {
  videos: VideoData[];
  autoPlayDuration?: number; // Duration in milliseconds
  className?: string;
}

// Function to extract YouTube video ID
const getYouTubeId = (url: string): string | null => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export function AutoPlayVideoGallery({
  videos,
  autoPlayDuration = 5000,
  className,
}: AutoPlayVideoGalleryProps) {
  const [activeVideoIndex, setActiveVideoIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [hasStarted, setHasStarted] = React.useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);
  const iframeRefs = React.useRef<{ [key: number]: HTMLIFrameElement | null }>({});

  // Intersection Observer to detect when section is visible
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            setIsPlaying(true);
            setActiveVideoIndex(0);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  // Auto-play sequence logic
  React.useEffect(() => {
    if (!isPlaying || !hasStarted) return;

    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Play current video
    const currentIframe = iframeRefs.current[activeVideoIndex];
    if (currentIframe) {
      const videoId = getYouTubeId(videos[activeVideoIndex].videoUrl);
      if (videoId) {
        currentIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1`;
      }
    }

    // Set timer to move to next video
    timerRef.current = setTimeout(() => {
      // Pause current video
      if (currentIframe) {
        const videoId = getYouTubeId(videos[activeVideoIndex].videoUrl);
        if (videoId) {
          currentIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&controls=0&showinfo=0&modestbranding=1`;
        }
      }

      // Move to next video
      const nextIndex = (activeVideoIndex + 1) % videos.length;
      setActiveVideoIndex(nextIndex);
    }, autoPlayDuration);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [activeVideoIndex, isPlaying, hasStarted, videos, autoPlayDuration]);

  const handleVideoClick = (index: number) => {
    // Arrêter TOUTES les vidéos avant d'en lancer une nouvelle
    videos.forEach((video, idx) => {
      const iframe = iframeRefs.current[idx];
      if (iframe) {
        const videoId = getYouTubeId(video.videoUrl);
        if (videoId) {
          iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&controls=0&showinfo=0&modestbranding=1`;
        }
      }
    });
    
    // Nettoyer le timer pour empêcher le passage automatique
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    
    // Changer la vidéo active (bordure active)
    setActiveVideoIndex(index);
    
    // Lancer uniquement la nouvelle vidéo sélectionnée
    setTimeout(() => {
      const newIframe = iframeRefs.current[index];
      if (newIframe) {
        const videoId = getYouTubeId(videos[index].videoUrl);
        if (videoId) {
          newIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1`;
        }
      }
    }, 100);
    
    // Activer l'état de lecture pour afficher l'indicateur
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section ref={sectionRef} className={cn("py-16 lg:py-24 text-white", className)}>
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl mb-3 md:mb-4">
              Galerie vidéo
            </h2>
            <p className="text-base md:text-lg text-white/80 max-w-3xl mx-auto px-4">
              Découvrez nos différents cours à travers ces vidéos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {videos.map((video, index) => {
              const videoId = getYouTubeId(video.videoUrl);
              const isActive = index === activeVideoIndex;

              return (
                <div
                  key={video.id}
                  className={cn(
                    "relative cursor-pointer overflow-hidden rounded-lg sm:rounded-xl shadow-lg transition-all duration-300",
                    isActive 
                      ? "ring-1 ring-yellow-500 scale-[1.02] sm:scale-105" 
                      : "hover:scale-[1.01] sm:hover:scale-102"
                  )}
                  onClick={() => handleVideoClick(index)}
                >
                  <div className="relative aspect-video">
                    {videoId ? (
                      <iframe
                        ref={(el) => {
                          iframeRefs.current[index] = el;
                        }}
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&controls=0&showinfo=0&modestbranding=1`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <img
                        src={video.thumbnailUrl}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                    {/* Play/Pause indicator */}
                    {!isActive && !isPlaying && (
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                          <Play className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 fill-white text-white" />
                        </div>
                      </div>
                    )}

                    {/* Active indicator */}
                    {isActive && isPlaying && (
                      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 pointer-events-none">
                        <div className="flex items-center gap-1.5 sm:gap-2 bg-red-600 text-white px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
                          <span className="hidden xs:inline">EN LECTURE</span>
                          <span className="xs:hidden">●</span>
                        </div>
                      </div>
                    )}

                    {/* Title and Description */}
                    <div className="absolute bottom-0 left-0 p-3 sm:p-4 md:p-5 pointer-events-none w-full">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-white truncate">{video.title}</h3>
                      {video.description && (
                        <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-white/80 line-clamp-2">{video.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Control buttons */}
          <div className="flex justify-center mt-6 sm:mt-8 gap-4">
            <button
              onClick={togglePlayPause}
              className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-yellow-500 hover:bg-yellow-600 text-white text-sm sm:text-base font-medium rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Reprendre</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
