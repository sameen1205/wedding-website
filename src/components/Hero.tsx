'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { weddingDetails, getTierConfig } from '@/data/weddingData';

function HeroContent() {
  const searchParams = useSearchParams();
  const tierConfig = getTierConfig(searchParams.get('tier'));

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    document.title = `Sameen & Anula | ${tierConfig.dateDisplay} — ${tierConfig.locationDisplay}`;
  }, [tierConfig.dateDisplay, tierConfig.locationDisplay]);

  useEffect(() => {
    const targetDate = new Date(tierConfig.isoTarget).getTime();

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
  }, [tierConfig.isoTarget]);

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
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between items-center bg-[#240612] text-[#F3F4F6] py-12">
      {/* Background with Slow Zoom Ken Burns Effect & Royal Burgundy / Deep Velvet Magenta Vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.04 }}
          transition={{ duration: 18, ease: 'easeOut' }}
          className="relative w-full h-full"
        >
          <Image
            src={weddingDetails.hero.backgroundImage}
            alt="Indian Wedding Celebration Hero"
            fill
            priority
            className="object-cover object-center brightness-[0.22] contrast-[1.15] saturate-[0.75]"
            sizes="100vw"
          />
        </motion.div>

        {/* Royal Burgundy / Deep Velvet Magenta Gradient Overlay (#36091E to #240612 to #1F030E) */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(54, 9, 30, 0.88) 0%, rgba(36, 6, 18, 0.94) 55%, rgba(31, 3, 14, 0.98) 100%)',
          }}
        />

        {/* Ambient Warm Gold Dust Vignette Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Subtle Animated Golden Monogram Watermark in Hero Center */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 0.055, scale: [0.98, 1.03, 0.98] }}
        transition={{
          opacity: { duration: 1.5, delay: 0.3 },
          scale: { duration: 12, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none"
      >
        <img
          src="/images/monogram.png"
          alt=""
          aria-hidden="true"
          className="w-[340px] sm:w-[480px] md:w-[580px] h-auto object-contain"
        />
      </motion.div>

      {/* Top Spacer for Fixed Navbar */}
      <div className="w-full pt-16 sm:pt-20" />

      {/* Main Foreground Typography & Golden "SA" Monogram Showcase */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Large Illuminated Golden "SA" Monogram Above Couple's Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative mb-4 sm:mb-5 flex items-center justify-center"
        >
          {/* Ambient Golden Halo Behind Monogram */}
          <div
            className="absolute -inset-6 rounded-full blur-2xl pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(212,175,55,0.28) 0%, transparent 70%)',
            }}
          />
          <img
            src="/images/monogram.png"
            alt="Sameen & Anula Golden Monogram"
            className="relative h-24 sm:h-32 md:h-36 w-auto object-contain select-none drop-shadow-[0_0_26px_rgba(212,175,55,0.45)]"
          />
        </motion.div>

        {/* Auspicious Blessing Tag in Deep Obsidian Glass Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-md border border-[#D4AF37]/35 mb-3 shadow-[0_4px_24px_rgba(0,0,0,0.8)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
          <span className="font-sans text-xs tracking-widest uppercase text-[#E2C799] font-semibold">
            {weddingDetails.couple.blessing}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
        </motion.div>

        {/* Tagline / Formal Invitation Line */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="font-sans text-xs sm:text-sm tracking-widest uppercase text-[#F3F4F6] font-normal mb-4 max-w-2xl leading-relaxed px-2"
        >
          {tierConfig.heroTagline}
        </motion.p>

        {/* Grand Overlapping Names with High-Contrast Champagne Gold Serif Typography */}
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
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wide font-normal text-[#F5E6C8] leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
          >
            {weddingDetails.couple.groom}
          </motion.h1>

          {/* Overlapping Metallic Gold Ampersand */}
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 55,
              damping: 15,
              delay: 0.8,
            }}
            className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-[#D4AF37] -my-4 sm:-my-6 lg:-my-8 z-10 italic drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]"
          >
            &amp;
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
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wide font-normal text-[#F5E6C8] leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)]"
          >
            {weddingDetails.couple.bride}
          </motion.h1>
        </div>

        {/* Date and Destination Metadata in High-Contrast Royal Burgundy Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15 }}
          className="mt-6 px-6 py-3 rounded-2xl sm:rounded-full bg-[#2D0818]/90 backdrop-blur-md border border-[#D4AF37]/35 shadow-2xl flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm tracking-widest uppercase font-sans text-[#E2C799]"
        >
          <span className="flex items-center gap-2 font-semibold text-[#F3F4F6]">
            <Calendar className="w-4 h-4 text-[#D4AF37] shrink-0" />
            {tierConfig.dateDisplay}
          </span>
          {tierConfig.tier === 'reception' && (
            <>
              <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              <span className="flex items-center gap-2 font-semibold text-[#F3F4F6]">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                6:30 PM Onwards
              </span>
            </>
          )}
          <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          <span className="flex items-center gap-2 font-semibold text-[#F3F4F6]">
            <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
            {tierConfig.locationDisplay}
          </span>
        </motion.div>

        {/* Live Countdown Badge in Deep Obsidian Glass */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.35 }}
          className="mt-6 px-7 py-3.5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-[#D4AF37]/35 shadow-2xl flex items-center gap-5 sm:gap-8 text-center"
        >
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-medium text-[#F5E6C8] tabular-nums drop-shadow-[0_2px_8px_rgba(212,175,55,0.25)]">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#E2C799] font-sans font-semibold">Days</span>
          </div>
          <span className="text-[#D4AF37]/70 text-base font-light">✦</span>
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-medium text-[#F5E6C8] tabular-nums drop-shadow-[0_2px_8px_rgba(212,175,55,0.25)]">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#E2C799] font-sans font-semibold">Hours</span>
          </div>
          <span className="text-[#D4AF37]/70 text-base font-light">✦</span>
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-medium text-[#F5E6C8] tabular-nums drop-shadow-[0_2px_8px_rgba(212,175,55,0.25)]">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#E2C799] font-sans font-semibold">Mins</span>
          </div>
          <span className="text-[#D4AF37]/70 text-base font-light">✦</span>
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-medium text-[#F5E6C8] tabular-nums drop-shadow-[0_2px_8px_rgba(212,175,55,0.25)]">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#E2C799] font-sans font-semibold">Secs</span>
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
        <span className="text-[11px] sm:text-xs tracking-widest uppercase font-sans text-[#E2C799] group-hover:text-[#F5E6C8] transition-colors font-semibold">
          {tierConfig.heroCtaLabel}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-[#D4AF37]/60 flex items-start justify-center p-1 group-hover:border-[#D4AF37] transition-colors bg-[#2D0818]/80"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 bg-[#D4AF37] rounded-full"
          />
        </motion.div>
      </motion.button>
    </section>
  );
}

export default function Hero() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#240612]" />}>
      <HeroContent />
    </Suspense>
  );
}
