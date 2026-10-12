'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';
import { weddingDetails } from '@/data/weddingData';

interface PreloaderProps {
  onLoadingComplete?: () => void;
}

export default function Preloader({ onLoadingComplete }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Reveal full embossed gold foil at 1.4s
    const revealTimer = setTimeout(() => {
      setRevealed(true);
    }, 1400);

    // Complete loading and slide preloader away at 3.4s
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
      if (onLoadingComplete) {
        onLoadingComplete();
      }
    }, 3400);

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
          className="fixed inset-0 z-50 flex flex-col items-center justify-center text-ivory overflow-hidden bg-patola-pattern select-none"
          style={{ willChange: 'transform' }}
        >
          {/* Radial Darkening Vignette Scrim */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-black/85 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(0,0,0,0.85)_100%)] pointer-events-none" />

          {/* Golden Radiant Ambient Halo behind Monogram */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.9, 1.15, 1], opacity: [0.3, 0.65, 0.5] }}
            transition={{ duration: 3, ease: 'easeInOut' }}
            className="absolute w-[450px] h-[350px] sm:w-[650px] sm:h-[500px] rounded-full bg-gradient-to-r from-amber-400/20 via-gold-metallic/30 to-amber-500/20 blur-3xl -z-10 pointer-events-none"
          />

          <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-4xl text-center">
            {/* Auspicious Blessing Header Tag */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-gold-metallic/40 mb-5 sm:mb-7 shadow-xl"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-metallic animate-pulse" />
              <span className="font-serif italic text-xs sm:text-sm tracking-widest text-amber-200">
                ॥ शुभ विवाह ॥ • {weddingDetails.couple.blessing}
              </span>
              <Sparkles className="w-3.5 h-3.5 text-gold-metallic animate-pulse" />
            </motion.div>

            {/* GRAND FORMING OF MONOGRAM CARD (Much Bigger & in Exact Style) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[340px] sm:max-w-[480px] md:max-w-[560px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85)] border-2 border-gold-metallic/50"
            >
              {/* Card Background: Authentic Patola Fabric with Scalloped Cartouche */}
              <div className="absolute inset-0">
                <Image
                  src="/images/patola-card.png"
                  alt="Sameen and Anula Monogram Card"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 90vw, 560px"
                />
              </div>

              {/* Animated Forming Overlay (SVG stroke drawing the S-A Monogram & Scalloped Cartouche) */}
              <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                <svg
                  viewBox="0 0 440 330"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <defs>
                    <linearGradient id="goldStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFF2B2" />
                      <stop offset="40%" stopColor="#FFD700" />
                      <stop offset="70%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#B8860B" />
                    </linearGradient>
                    <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="3" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* 1. Scalloped Cartouche Inner Gold Rim Animation */}
                  <motion.path
                    d="M 68 165 C 68 115, 115 68, 165 68 C 190 68, 205 60, 220 54 C 235 60, 250 68, 275 68 C 325 68, 372 115, 372 165 C 372 190, 380 205, 386 220 C 380 235, 372 250, 372 275 C 372 325, 325 372, 275 372 C 250 372, 235 380, 220 386 C 205 380, 190 372, 165 372 C 115 372, 68 325, 68 275 Z"
                    transform="scale(0.85 0.72) translate(38, 25)"
                    stroke="url(#goldStrokeGrad)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#goldGlow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: revealed ? 0 : 0.95 }}
                    transition={{ duration: 1.3, ease: 'easeInOut' }}
                  />

                  {/* 2. Forming of the Cursive "A" Sweeping Flourish Loop */}
                  <motion.path
                    d="M 125 245 C 95 240, 80 185, 120 155 C 160 125, 230 160, 250 200 C 265 230, 240 270, 185 272 C 145 274, 115 245, 155 190 C 185 145, 235 105, 255 105 C 260 105, 265 110, 255 135 L 210 240 M 235 125 L 295 245 M 195 205 L 275 205"
                    stroke="url(#goldStrokeGrad)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#goldGlow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: revealed ? 0 : 1 }}
                    transition={{ duration: 1.6, delay: 0.25, ease: [0.65, 0, 0.35, 1] }}
                  />

                  {/* 3. Forming of the Classical Serif "S" Interlocking through the "A" */}
                  <motion.path
                    d="M 285 105 C 275 90, 255 88, 240 96 C 220 106, 220 126, 235 142 C 255 162, 285 178, 285 205 C 285 230, 265 248, 240 248 C 220 248, 205 235, 200 220 M 283 100 L 290 108"
                    stroke="url(#goldStrokeGrad)"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#goldGlow)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: revealed ? 0 : 1 }}
                    transition={{ duration: 1.5, delay: 0.5, ease: [0.65, 0, 0.35, 1] }}
                  />
                </svg>
              </div>

              {/* Shimmer Light Beam Effect when fully formed */}
              {revealed && (
                <motion.div
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: '100%', opacity: [0, 0.7, 0] }}
                  transition={{ duration: 1.4, ease: 'easeInOut' }}
                  className="absolute inset-0 z-30 bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-12 pointer-events-none"
                />
              )}
            </motion.div>

            {/* Date from the reference image: "21 November, 2026" */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.5 }}
              className="mt-6 flex flex-col items-center"
            >
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-amber-100 tracking-wide font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                21 November, 2026
              </h3>

              <p className="font-sans text-xs sm:text-sm tracking-luxury uppercase text-amber-200/90 font-medium mt-1.5 flex items-center gap-2">
                <span>{weddingDetails.couple.groom}</span>
                <span className="text-gold-metallic font-script text-lg">&</span>
                <span>{weddingDetails.couple.bride}</span>
                <span className="text-gold-metallic mx-1">•</span>
                <span>Dwapara Convention Centre, Bangalore</span>
              </p>
            </motion.div>

            {/* Elegant Zari Gold Loading Progress Line */}
            <motion.div
              className="w-48 sm:w-64 h-[2px] bg-white/20 mt-7 overflow-hidden rounded-full relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-300 via-gold-metallic to-amber-500 shadow-[0_0_10px_#FFD700]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 2.5, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
