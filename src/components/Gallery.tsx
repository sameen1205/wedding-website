'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';
import { weddingDetails } from '@/data/weddingData';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'haldi' | 'sangeet' | 'nikah' | 'reception' | 'details'>('all');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeFilter === 'all'
    ? weddingDetails.gallery
    : weddingDetails.gallery.filter((item) => item.category === activeFilter);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
  }, [lightboxIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  return (
    <section id="gallery" className="relative py-28 sm:py-36 bg-ivory text-charcoal overflow-hidden bg-raw-silk border-t border-gold/30">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-10 h-[1.5px] bg-gradient-to-r from-transparent to-gold" />
            <span className="text-xs uppercase tracking-luxury font-sans text-crimson font-bold">
              Tasveerein • Celebratory Moments
            </span>
            <span className="w-10 h-[1.5px] bg-gradient-to-l from-transparent to-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal tracking-tight"
          >
            Festive Photo Gallery
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-4 text-charcoal-soft/80 font-sans text-sm sm:text-base leading-relaxed"
          >
            Glimpses of vibrant marigold colors, intricate henna art, majestic baraat rhythms, and eternal vows.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {([
            { id: 'all', label: 'All Celebrations' },
            { id: 'haldi', label: 'Haldi & Marigold' },
            { id: 'sangeet', label: 'Sangeet & Dhol' },
            { id: 'nikah', label: 'Nikah & Muhurat' },
            { id: 'reception', label: 'Reception Gala' },
            { id: 'details', label: 'Royal Details' },
          ] as const).map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-sans tracking-luxury uppercase transition-all duration-300 border ${
                activeFilter === filter.id
                  ? 'bg-crimson text-ivory border-crimson font-bold shadow-md scale-105'
                  : 'bg-ivory/80 text-charcoal border-gold/40 hover:border-gold hover:text-crimson'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Container */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => {
              const isDimmed = hoveredId !== null && hoveredId !== item.id;
              const isHovered = hoveredId === item.id;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: isDimmed ? 0.45 : 1,
                    scale: 1,
                  }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.45 }}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => handleOpenLightbox(index)}
                  className={`group relative overflow-hidden rounded-2xl cursor-pointer border-2 transition-all duration-500 bg-charcoal ${
                    isHovered
                      ? 'border-gold-metallic shadow-2xl z-10'
                      : 'border-gold/40 shadow-md'
                  } ${
                    item.aspect === 'tall'
                      ? 'aspect-[3/4] sm:row-span-2'
                      : item.aspect === 'wide'
                      ? 'aspect-[16/10]'
                      : 'aspect-square'
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 brightness-95"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-ivory">
                    <span className="text-[10px] uppercase font-sans tracking-luxury text-gold-metallic font-semibold mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-2xl font-light">
                      {item.title}
                    </h4>
                    <p className="font-sans text-xs text-amber-100/90 mt-1 line-clamp-1">
                      {item.caption}
                    </p>

                    <div className="mt-4 flex items-center gap-1.5 text-[11px] font-sans tracking-widest uppercase text-gold-metallic font-bold">
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Full Photograph</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseLightbox}
              className="absolute top-6 right-6 p-2 rounded-full text-ivory hover:text-gold-metallic hover:bg-white/10 transition-colors z-20 focus:outline-none"
              aria-label="Close full-screen image view"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation: Previous */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 p-3 rounded-full text-ivory hover:text-gold-metallic hover:bg-white/10 transition-colors z-20 focus:outline-none"
              aria-label="Previous photograph"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Navigation: Next */}
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 p-3 rounded-full text-ivory hover:text-gold-metallic hover:bg-white/10 transition-colors z-20 focus:outline-none"
              aria-label="Next photograph"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Main Lightbox Content */}
            <div className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center">
              <motion.div
                key={filteredItems[lightboxIndex]?.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-[65vh] sm:h-[75vh]"
              >
                <Image
                  src={filteredItems[lightboxIndex]?.src || ''}
                  alt={filteredItems[lightboxIndex]?.alt || 'Enlarged Wedding Photo'}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  priority
                />
              </motion.div>

              {/* Lightbox Caption */}
              <div className="mt-4 text-center text-ivory max-w-lg px-4">
                <span className="text-[10px] uppercase font-sans tracking-luxury text-gold-metallic font-semibold block mb-1">
                  {filteredItems[lightboxIndex]?.category} • {lightboxIndex + 1} of {filteredItems.length}
                </span>
                <h4 className="font-serif text-2xl font-light">
                  {filteredItems[lightboxIndex]?.title}
                </h4>
                <p className="text-amber-100/90 text-xs sm:text-sm font-sans mt-1">
                  {filteredItems[lightboxIndex]?.caption}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
