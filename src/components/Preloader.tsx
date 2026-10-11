'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingDetails } from '@/data/weddingData';

interface PreloaderProps {
  onLoadingComplete?: () => void;
}

export default function Preloader({ onLoadingComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 2800);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{
            y: '-100%',
            transition: {
              duration: 1.1,
              ease: [0.77, 0, 0.175, 1],
            },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-crimson-deep via-[#300512] to-royalvelvet-deep text-ivory overflow-hidden bg-banarasi-pattern"
          style={{ willChange: 'transform' }}
        >
          {/* Subtle Ambient Golden Halo */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gold/15 blur-3xl -z-10 pointer-events-none" />

          <div className="relative flex flex-col items-center justify-center px-6 text-center">
            {/* SVG Ornate Royal Indian Crest & Monogram */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-6 flex items-center justify-center">
              <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Rotating Outer Sacred Mandala / Sunburst */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="92"
                  stroke="#FFD700"
                  strokeWidth="1.2"
                  strokeDasharray="6 8"
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 180, opacity: 0.8 }}
                  transition={{ duration: 3.5, ease: 'easeInOut' }}
                />

                {/* Inner Archway Lotus Ring */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r="80"
                  stroke="#D4AF37"
                  strokeWidth="0.8"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.9 }}
                  transition={{ duration: 2, ease: [0.65, 0, 0.35, 1] }}
                />

                {/* Royal Mughal Crest Top Dome */}
                <motion.path
                  d="M80 32 C85 24 100 16 100 16 C100 16 115 24 120 32"
                  stroke="#FFD700"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                />

                {/* Monogram Path "S" (Sameen) */}
                <motion.path
                  d="M90 66 C72 54 58 68 58 82 C58 98 92 102 92 120 C92 136 76 144 58 134"
                  stroke="#FFFDF9"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.8, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
                />

                {/* Romantic Ampersand "&" with Gold Zari Flourish */}
                <motion.path
                  d="M106 105 C112 112 120 112 123 106 C127 99 119 89 105 81 C97 76 93 69 93 62 C93 53 101 46 109 46 C117 46 123 52 123 60 C123 71 107 91 83 121 C77 128 79 136 86 140 C93 143 104 141 114 131 L127 143"
                  stroke="#FFD700"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.95 }}
                  transition={{ duration: 2, delay: 0.7, ease: [0.65, 0, 0.35, 1] }}
                />

                {/* Monogram Path "A" (Anula) */}
                <motion.path
                  d="M122 140 L138 58 L154 140 M127 114 H149"
                  stroke="#FFFDF9"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.8, delay: 0.9, ease: [0.65, 0, 0.35, 1] }}
                />
              </svg>
            </div>

            {/* Auspicious Blessing Tag */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="text-xs sm:text-sm tracking-luxury uppercase font-sans text-gold-zari font-medium mb-1"
            >
              ✦ {weddingDetails.couple.blessing} ✦
            </motion.p>

            {/* Names Reveal */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4, ease: [0.25, 1, 0.5, 1] }}
              className="font-serif text-3xl sm:text-4xl tracking-widest text-ivory font-light uppercase"
            >
              {weddingDetails.couple.groom} & {weddingDetails.couple.bride}
            </motion.h2>

            {/* Subtitle & Date */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ duration: 0.9, delay: 1.8 }}
              className="mt-3 flex items-center gap-3 text-xs tracking-widest text-amber-200/90 uppercase font-sans"
            >
              <span>{weddingDetails.location.city}, {weddingDetails.location.state}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gold-metallic inline-block" />
              <span>{weddingDetails.date.short}</span>
            </motion.div>

            {/* Zari Gold Loading Bar */}
            <motion.div
              className="w-36 h-[2px] bg-white/20 mt-8 overflow-hidden rounded-full relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-400 via-gold-metallic to-rose-400"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.2, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
