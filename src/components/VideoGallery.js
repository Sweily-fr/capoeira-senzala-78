"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Fonction pour extraire l'ID d'une vidéo YouTube
const getYouTubeId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

const VideoGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [autoPlayFirst, setAutoPlayFirst] = useState(true);
  const [hoveredVideo, setHoveredVideo] = useState(null);
  const videoRefs = useRef({});
  const previewTimerRef = useRef(null);
  
  // Suppression de l'effet inutile

  const videos = [
    {
      id: 1,
      title: 'Cours Baby',
      src: 'https://www.youtube.com/watch?v=UirNQJh9cF4',
      thumbnail: '/images/bg-hero.png'
    },
    {
      id: 2,
      title: 'Cours Enfants',
      src: 'https://www.youtube.com/watch?v=UirNQJh9cF4',
      thumbnail: '/images/bg-hero.png'
    },
    {
      id: 3,
      title: 'Cours Ados/Adultes',
      src: 'https://www.youtube.com/watch?v=UirNQJh9cF4',
      thumbnail: '/images/bg-hero.png'
    },
    // Add more videos as needed
  ];

  // Suppression de l'effet de rotation automatique inutile

  // Gestion du survol pour la lecture
  const handleMouseEnter = (video, index) => {
    setHoveredVideo(index);
    
    // Si c'est la première vidéo et qu'elle est déjà en lecture, on ne fait rien
    if (index === 0 && autoPlayFirst) return;
    
    const videoId = getYouTubeId(video.src);
    const iframe = document.getElementById(`video-${index}`);
    
    if (iframe) {
      // Mettre à jour la source pour forcer le chargement et la lecture
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&start=0&end=5`;
    }
  };

  const handleMouseLeave = (index) => {
    setHoveredVideo(null);
    
    // Si c'est la première vidéo, on la laisse en lecture
    if (index === 0) return;
    
    const iframe = document.getElementById(`video-${index}`);
    if (iframe) {
      // Réinitialiser l'iframe à l'image de prévisualisation
      const videoId = getYouTubeId(videos[index].src);
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&controls=0&showinfo=0&modestbranding=1`;
    }
  };

  // Effet pour la prévisualisation de 5 secondes sur la première vidéo
  useEffect(() => {
    if (autoPlayFirst && videoRefs.current[0]) {
      const videoId = getYouTubeId(videos[0].src);
      const iframe = document.getElementById('video-0');
      
      if (iframe) {
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&start=0&end=5`;
        
        // Arrêter la lecture après 5 secondes
        previewTimerRef.current = setTimeout(() => {
          if (hoveredVideo !== 0) { // Ne pas arrêter si la souris est toujours sur la vidéo
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&controls=0&showinfo=0&modestbranding=1`;
            setAutoPlayFirst(false);
          }
        }, 5000);
      }
    }
    
    return () => {
      if (previewTimerRef.current) {
        clearTimeout(previewTimerRef.current);
      }
    };
  }, [autoPlayFirst, hoveredVideo]);

  const handleVideoClick = (video, index) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-dark-blue">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Galerie Vidéo
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Découvrez nos différents cours à travers ces vidéos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {videos.map((video, index) => (
            <div 
              key={video.id}
              className="relative rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => handleVideoClick(video, index)}
            >
              <div className="relative aspect-video">
                <div className="w-full h-full">
                  <iframe
                    id={`video-${index}`}
                    ref={(el) => (videoRefs.current[index] = el)}
                    src={`https://www.youtube.com/embed/${getYouTubeId(video.src)}?autoplay=0&mute=1&controls=0&showinfo=0&modestbranding=1`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    onMouseEnter={() => handleMouseEnter(video, index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  ></iframe>
                  {hoveredVideo !== index && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-white font-medium text-lg">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full transition-colors duration-300">
            Voir plus de vidéos
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative w-full max-w-4xl" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute -top-10 right-0 text-white hover:text-gray-300 z-10"
              onClick={closeModal}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${getYouTubeId(selectedVideo.src)}?autoplay=1`}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="text-white text-xl font-medium mt-4">{selectedVideo.title}</h3>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoGallery;
