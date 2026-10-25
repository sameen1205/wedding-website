'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { weddingDetails, getTierConfig } from '@/data/weddingData';

interface PreloaderProps {
  onLoadingComplete?: () => void;
}

function PreloaderContent({ onLoadingComplete }: PreloaderProps) {
  const searchParams = useSearchParams();
  const tierConfig = getTierConfig(searchParams.get('tier'));
  const [isVisible, setIsVisible] = useState(true);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Reveal full embossed gold foil at 1.2s
    const revealTimer = setTimeout(() => {
      setRevealed(true);
    }, 1200);

    // Complete loading and slide preloader away at 3.2s
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 3200);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(exitTimer);
    };
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
              duration: 1.15,
              ease: [0.77, 0, 0.175, 1],
            },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-[#240612] via-[#36091E] to-[#1F030E] text-[#F3F4F6] overflow-hidden select-none"
          style={{ willChange: 'transform' }}
        >
          {/* Ambient Warm Gold Vignette Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
            }}
          />

          {/* Golden Radiant Ambient Halo behind Monogram */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.9, 1.12, 1], opacity: [0.25, 0.55, 0.4] }}
            transition={{ duration: 3, ease: 'easeInOut' }}
            className="absolute w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-4xl text-center">
            {/* Auspicious Blessing Header Tag */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-md border border-[#D4AF37]/35 mb-6 sm:mb-8 shadow-2xl"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
              <span className="font-sans text-xs tracking-widest uppercase text-[#E2C799] font-semibold">
                {weddingDetails.couple.blessing}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            </motion.div>

            {/* Illuminated Golden "SA" Monogram Reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-[#D4AF37]/25 shadow-2xl backdrop-blur-sm overflow-hidden"
            >
              <img
                src="/images/monogram.png"
                alt="Sameen & Anula Golden Monogram"
                className="relative z-10 h-40 sm:h-52 md:h-60 w-auto object-contain select-none drop-shadow-[0_0_32px_rgba(212,175,55,0.45)]"
              />

              {/* Shimmer Light Beam Effect */}
              {revealed && (
                <motion.div
                  initial={{ x: '-120%', opacity: 0 }}
                  animate={{ x: '120%', opacity: [0, 0.55, 0] }}
                  transition={{ duration: 1.4, ease: 'easeInOut' }}
                  className="absolute inset-0 z-20 bg-gradient-to-r from-transparent via-[#F5E6C8]/30 to-transparent skew-x-12 pointer-events-none"
                />
              )}
            </motion.div>

            {/* Couple Names & Date */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="mt-7 flex flex-col items-center"
            >
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#F5E6C8] tracking-wide font-light">
                {weddingDetails.couple.groom} <span className="font-script text-[#D4AF37] mx-1">&amp;</span> {weddingDetails.couple.bride}
              </h3>

              <p className="font-sans text-xs sm:text-sm tracking-widest uppercase text-[#E2C799] font-medium mt-2">
                {tierConfig.dateDisplay} • {tierConfig.locationDisplay}
              </p>
            </motion.div>

            {/* Elegant Metallic Gold Loading Progress Line */}
            <motion.div
              className="w-48 sm:w-64 h-[2px] bg-white/10 mt-7 overflow-hidden rounded-full relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#E2C799] via-[#D4AF37] to-[#F5E6C8] shadow-[0_0_12px_#D4AF37]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.4, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Preloader(props: PreloaderProps) {
  return (
    <Suspense fallback={null}>
      <PreloaderContent {...props} />
    </Suspense>
  );
}
