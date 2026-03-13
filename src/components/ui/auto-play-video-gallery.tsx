"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";

interface VideoData {
  id: number;
  thumbnailUrl?: string;
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
  const [ytTitles, setYtTitles] = React.useState<Record<number, string>>({});
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  // Fetch YouTube titles via oEmbed
  React.useEffect(() => {
    videos.forEach((video) => {
      fetch(`https://noembed.com/embed?url=${encodeURIComponent(video.videoUrl)}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.title) {
            setYtTitles((prev) => ({ ...prev, [video.id]: data.title }));
          }
        })
        .catch(() => {});
    });
  }, [videos]);

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
      { threshold: 0.3 }
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

  // Auto-play sequence: advance to next video after duration
  React.useEffect(() => {
    if (!isPlaying || !hasStarted) return;

    timerRef.current = setTimeout(() => {
      setActiveVideoIndex((prev) => (prev + 1) % videos.length);
    }, autoPlayDuration);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [activeVideoIndex, isPlaying, hasStarted, videos.length, autoPlayDuration]);

  const handleVideoClick = (index: number) => {
    // Changer la vidéo active — seule l'iframe active est rendue,
    // donc l'ancienne vidéo s'arrête automatiquement
    setActiveVideoIndex(index);
    setIsPlaying(true);
  };

  return (
    <section ref={sectionRef} className={cn("py-16 sm:py-20 lg:py-24 text-white", className)}>
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl font-medium text-white sm:text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4">
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
                <div key={video.id}>
                  <div
                    className={cn(
                      "relative cursor-pointer overflow-hidden rounded-lg sm:rounded-xl shadow-lg transition-all duration-300",
                      isActive
                        ? "ring-2 ring-primary-500 scale-[1.02] sm:scale-105"
                        : "hover:scale-[1.01] sm:hover:scale-102"
                    )}
                    onClick={() => handleVideoClick(index)}
                  >
                    <div className="relative aspect-video">
                      {isActive && videoId ? (
                        <iframe
                          key={`iframe-${video.id}-${index}`}
                          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&enablejsapi=1`}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <img
                          src={videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : video.thumbnailUrl}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                      )}

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                      {/* Play indicator on inactive videos */}
                      {!isActive && (
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

                    </div>
                  </div>
                  {ytTitles[video.id] && (
                    <p className="mt-4 text-sm sm:text-base text-white/80 text-center truncate px-1">
                      {ytTitles[video.id]}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
