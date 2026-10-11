'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, MapPin, Sparkles } from 'lucide-react';
import { weddingDetails } from '@/data/weddingData';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(weddingDetails.date.iso).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToItinerary = () => {
    const itinerarySection = document.getElementById('itinerary');
    if (itinerarySection) {
      if ((window as unknown as { lenis?: { scrollTo: (target: Element, opts: { offset: number }) => void } }).lenis) {
        (window as unknown as { lenis: { scrollTo: (target: Element, opts: { offset: number }) => void } }).lenis.scrollTo(itinerarySection, { offset: -60 });
      } else {
        itinerarySection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between items-center text-ivory py-12">
      {/* Background with Slow Zoom Ken Burns Effect & Deep Royal Midnight Vignette */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.04 }}
          transition={{ duration: 18, ease: 'easeOut' }}
          className="relative w-full h-full"
        >
          <Image
            src={weddingDetails.hero.backgroundImage}
            alt="Royal Indian Wedding Bangalore Palace Hero"
            fill
            priority
            className="object-cover object-center brightness-[0.38] contrast-[1.2]"
            sizes="100vw"
          />
        </motion.div>

        {/* Deep Royal Midnight-Crimson Scrim for Absolute Text Contrast & Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-[#18030B]/80 to-[#16060B]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(24,3,11,0.5)_0%,_rgba(8,1,4,0.92)_100%)]" />
        <div className="absolute inset-0 bg-patola-pattern opacity-15 mix-blend-overlay pointer-events-none" />
      </div>

      {/* Top Spacer for Fixed Navbar */}
      <div className="w-full pt-16 sm:pt-20" />

      {/* Main Foreground Typography & Monogram Showcase */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Royal Scalloped S-A Monogram Crest (From Attached Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative w-20 h-16 sm:w-24 sm:h-18 mb-3 rounded-xl overflow-hidden border border-gold-metallic/60 shadow-xl shadow-black/80"
        >
          <Image
            src="/images/monogram-cartouche.png"
            alt="Sameen & Anula Royal Monogram"
            fill
            className="object-cover object-center"
            sizes="96px"
          />
        </motion.div>

        {/* Auspicious Blessing Tag in Dark Glassmorphism Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-gold-metallic/50 mb-3 shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-metallic animate-pulse" />
          <span className="font-sans text-xs tracking-luxury uppercase text-amber-200 font-bold">
            {weddingDetails.couple.blessing}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-gold-metallic animate-pulse" />
        </motion.div>

        {/* Tagline / Formal Invitation Line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="font-sans text-xs sm:text-sm tracking-luxury uppercase text-amber-100 font-medium mb-3 max-w-xl leading-relaxed hero-text-shadow px-2"
        >
          {weddingDetails.hero.tagline}
        </motion.p>

        {/* Grand Overlapping Names with High-Contrast Typography */}
        <div className="relative flex flex-col items-center justify-center my-1 select-none w-full">
          {/* Groom's Name */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 45,
              damping: 18,
              delay: 0.55,
            }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wide font-normal text-[#FFFDF5] leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_4px_rgba(0,0,0,1)]"
          >
            {weddingDetails.couple.groom}
          </motion.h1>

          {/* Overlapping Gold Ampersand */}
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 55,
              damping: 15,
              delay: 0.8,
            }}
            className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gold-metallic -my-4 sm:-my-6 lg:-my-8 z-10 italic drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]"
          >
            &
          </motion.span>

          {/* Bride's Name */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 45,
              damping: 18,
              delay: 0.95,
            }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wide font-normal text-[#FFFDF5] leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] drop-shadow-[0_2px_4px_rgba(0,0,0,1)]"
          >
            {weddingDetails.couple.bride}
          </motion.h1>
        </div>

        {/* Date and Destination Metadata in High-Contrast Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15 }}
          className="mt-5 px-6 py-2.5 rounded-full bg-black/80 backdrop-blur-md border border-gold-metallic/50 shadow-2xl flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm tracking-widest uppercase font-sans text-amber-100"
        >
          <span className="flex items-center gap-2 font-semibold text-[#FFFDF5]">
            <Calendar className="w-4 h-4 text-gold-metallic" />
            {weddingDetails.date.formatted}
          </span>
          <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-gold-metallic" />
          <span className="flex items-center gap-2 font-semibold text-[#FFFDF5]">
            <MapPin className="w-4 h-4 text-gold-metallic" />
            {weddingDetails.location.venue} • {weddingDetails.location.city}, {weddingDetails.location.state}
          </span>
        </motion.div>

        {/* Festive Live Countdown Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.35 }}
          className="mt-6 px-7 py-3 rounded-2xl bg-[#140308]/90 backdrop-blur-xl border-2 border-gold-metallic/50 shadow-[0_12px_45px_rgba(0,0,0,0.9)] flex items-center gap-5 sm:gap-8 text-center"
        >
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-medium text-gold-metallic tabular-nums drop-shadow-[0_2px_8px_rgba(255,215,0,0.3)]">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-amber-200 font-sans font-bold">Days</span>
          </div>
          <span className="text-gold-metallic/70 text-base font-light">✦</span>
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-medium text-gold-metallic tabular-nums drop-shadow-[0_2px_8px_rgba(255,215,0,0.3)]">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-amber-200 font-sans font-bold">Hours</span>
          </div>
          <span className="text-gold-metallic/70 text-base font-light">✦</span>
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-medium text-gold-metallic tabular-nums drop-shadow-[0_2px_8px_rgba(255,215,0,0.3)]">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-amber-200 font-sans font-bold">Mins</span>
          </div>
          <span className="text-gold-metallic/70 text-base font-light">✦</span>
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-medium text-gold-metallic tabular-nums drop-shadow-[0_2px_8px_rgba(255,215,0,0.3)]">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-amber-200 font-sans font-bold">Secs</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA to Itinerary */}
      <motion.button
        onClick={scrollToItinerary}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="relative z-10 mt-8 mb-2 flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
        aria-label="Scroll to discover the grand wedding itinerary"
      >
        <span className="text-[11px] sm:text-xs tracking-luxury uppercase font-sans text-amber-200 group-hover:text-gold-metallic transition-colors font-bold hero-text-shadow">
          Discover The 3-Day Celebrations
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-gold-metallic/70 flex items-start justify-center p-1 group-hover:border-gold-metallic transition-colors bg-black/40"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 bg-gold-metallic rounded-full"
          />
        </motion.div>
      </motion.button>
    </section>
  );
}
