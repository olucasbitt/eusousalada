import { motion, AnimatePresence } from 'motion/react';
import {
  Play,
  Eye,
  Instagram,
  Youtube,
  Music,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { VIDEOS, SOCIAL_LINKS } from '../constants';
import React, { useState, useEffect } from 'react';

export const VideoSection = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const activeVideo =
    activeVideoIndex !== null ? VIDEOS[activeVideoIndex] : null;

  useEffect(() => {
    if (activeVideoIndex !== null) {
      setIsLoading(true);
      setHasError(false);
    }
  }, [activeVideoIndex]);

  const nextVideo = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeVideoIndex === null) return;
    setActiveVideoIndex((activeVideoIndex + 1) % VIDEOS.length);
  };

  const prevVideo = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeVideoIndex === null) return;
    setActiveVideoIndex(
      (activeVideoIndex - 1 + VIDEOS.length) % VIDEOS.length
    );
  };

  return (
    <section id="videos" className="py-24 px-6 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-10">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              OS MELHORES <span className="text-brand-primary">CAUSOS</span>
            </h2>
            <p className="text-white/40 max-w-md">
              Mais de 5 milhões de visualizações. Confira os melhores momentos.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href={SOCIAL_LINKS.instagram} target="_blank">
              <Instagram />
            </a>
            <a href={SOCIAL_LINKS.youtube} target="_blank">
              <Youtube />
            </a>
            <a href={SOCIAL_LINKS.tiktok} target="_blank">
              <Music />
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-4xl mx-auto gap-8">
          {VIDEOS.map((video, index) => (
            <div
              key={video.id}
              onClick={() => setActiveVideoIndex(index)}
              className="cursor-pointer group"
            >
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden">

                {/* Thumbnail */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay escuro */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

                {/* 🔥 PLAY BUTTON MELHORADO */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">

                    {/* Glow */}
                    <div className="absolute w-24 h-24 rounded-full bg-white/10 blur-2xl opacity-70 group-hover:opacity-100 transition" />

                    {/* Botão */}
                    <div className="w-20 h-20 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                      <Play size={36} fill="currentColor" />
                    </div>

                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <div className="flex items-center gap-2 text-xs opacity-70 mb-1">
                    <Eye size={12} /> {video.views}
                  </div>
                  <h3 className="font-bold leading-tight">
                    {video.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setActiveVideoIndex(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-[400px]"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
            >
              {/* Close */}
              <button
                onClick={() => setActiveVideoIndex(null)}
                className="absolute top-2 right-2 z-10 text-white/70 hover:text-white"
              >
                <X />
              </button>

              {/* Player */}
              <div className="relative aspect-[9/16] bg-black rounded-xl overflow-hidden">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="animate-spin w-10 h-10 border-4 border-white/20 border-t-white rounded-full" />
                  </div>
                )}

                {hasError && (
                  <div className="absolute inset-0 flex items-center justify-center text-red-500 text-sm z-10">
                    Erro ao carregar vídeo
                  </div>
                )}

                <video
                  src={`${activeVideo.videoPath}?v=${activeVideo.id}`}
                  poster={activeVideo.thumbnail}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  onCanPlay={() => setIsLoading(false)}
                  onError={() => {
                    setIsLoading(false);
                    setHasError(true);
                  }}
                />
              </div>

              {/* Navegação */}
              <div className="flex justify-between mt-3 text-white">
                <button
                  onClick={prevVideo}
                  className="opacity-60 hover:opacity-100 transition"
                >
                  <ChevronLeft />
                </button>
                <button
                  onClick={nextVideo}
                  className="opacity-60 hover:opacity-100 transition"
                >
                  <ChevronRight />
                </button>
              </div>

              {/* Instagram */}
              <div className="text-center mt-3">
                <a
                  href={activeVideo.url}
                  target="_blank"
                  className="text-xs opacity-60 hover:opacity-100 transition"
                >
                  Ver no Instagram
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};