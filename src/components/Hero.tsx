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
    <section className="relative h-screen min-h-[720px] w-full overflow-hidden flex flex-col justify-between items-center text-ivory">
      {/* Background Image with Slow Zoom Ken Burns Effect */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.03 }}
          transition={{ duration: 16, ease: 'easeOut' }}
          className="relative w-full h-full"
        >
          <Image
            src={weddingDetails.hero.backgroundImage}
            alt="Royal Indian Wedding Udaipur Palace Hero"
            fill
            priority
            className="object-cover object-center brightness-[0.72] contrast-[1.1]"
            sizes="100vw"
          />
        </motion.div>

        {/* Rich Festive Jewel-Tone Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-crimson-deep/95 via-royalvelvet-deep/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-crimson-deep/60 via-transparent to-royalvelvet-deep/60" />
      </div>

      {/* Top Spacer for Navbar */}
      <div className="w-full pt-20" />

      {/* Main Foreground Typography */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Auspicious Blessing Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 backdrop-blur-md border border-gold-metallic/40 mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-metallic animate-pulse" />
          <span className="font-sans text-xs tracking-luxury uppercase text-amber-200 font-semibold">
            {weddingDetails.couple.blessing}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-gold-metallic animate-pulse" />
        </motion.div>

        {/* Invitation Line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-xs sm:text-sm tracking-luxury uppercase text-amber-100/90 mb-2 max-w-xl leading-relaxed"
        >
          {weddingDetails.hero.tagline}
        </motion.p>

        {/* Grand Overlapping Names */}
        <div className="relative flex flex-col items-center justify-center my-1 sm:my-3 select-none">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 45,
              damping: 18,
              delay: 0.5,
            }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight font-light text-ivory drop-shadow-md leading-none"
          >
            {weddingDetails.couple.groom}
          </motion.h1>

          {/* Overlapping Gold Zari Flourish Ampersand */}
          <motion.span
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 55,
              damping: 15,
              delay: 0.8,
            }}
            className="font-script text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-gold-metallic -my-4 sm:-my-6 lg:-my-8 z-10 italic drop-shadow-[0_4px_16px_rgba(255,215,0,0.5)]"
          >
            &
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 45,
              damping: 18,
              delay: 1.0,
            }}
            className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight font-light text-ivory drop-shadow-md leading-none"
          >
            {weddingDetails.couple.bride}
          </motion.h1>
        </div>

        {/* Date and Destination Metadata */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm tracking-widest uppercase font-sans text-amber-100"
        >
          <span className="flex items-center gap-1.5 font-medium">
            <Calendar className="w-4 h-4 text-gold-metallic" />
            {weddingDetails.date.formatted}
          </span>
          <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-gold-metallic" />
          <span className="flex items-center gap-1.5 font-medium">
            <MapPin className="w-4 h-4 text-gold-metallic" />
            {weddingDetails.location.venue} • {weddingDetails.location.city}, {weddingDetails.location.state}
          </span>
        </motion.div>

        {/* Festive Live Countdown Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="mt-7 px-7 py-3 rounded-2xl bg-black/50 backdrop-blur-md border border-gold/40 shadow-2xl flex items-center gap-5 sm:gap-8 text-center"
        >
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-light text-gold-metallic tabular-nums">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-amber-200/90 font-sans font-semibold">Days</span>
          </div>
          <span className="text-gold-metallic/50 text-base font-light">✦</span>
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-light text-gold-metallic tabular-nums">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-amber-200/90 font-sans font-semibold">Hours</span>
          </div>
          <span className="text-gold-metallic/50 text-base font-light">✦</span>
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-light text-gold-metallic tabular-nums">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-amber-200/90 font-sans font-semibold">Mins</span>
          </div>
          <span className="text-gold-metallic/50 text-base font-light">✦</span>
          <div className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-light text-gold-metallic tabular-nums">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="text-[9px] uppercase tracking-widest text-amber-200/90 font-sans font-semibold">Secs</span>
          </div>
        </motion.div>
      </div>

      {/* Bottom CTA to Itinerary */}
      <motion.button
        onClick={scrollToItinerary}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="relative z-10 mb-8 flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
        aria-label="Scroll to discover the grand wedding itinerary"
      >
        <span className="text-[11px] sm:text-xs tracking-luxury uppercase font-sans text-amber-200 group-hover:text-gold-metallic transition-colors font-medium">
          Discover The 3-Day Celebrations
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-gold/60 flex items-start justify-center p-1 group-hover:border-gold-metallic transition-colors"
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
