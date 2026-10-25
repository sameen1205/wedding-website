'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Clock, 
  MapPin, 
  Music, 
  Calendar, 
  Sun, 
  Moon, 
  Heart
} from 'lucide-react';
import { weddingDetails, IndianFunction, getTierConfig } from '@/data/weddingData';
import { 
  LeftChhatriAndUrli, 
  RightBananaLeavesAndDholak, 
  TopMarigoldMandala, 
  HangingFloralToran, 
  CornerOrnaments 
} from '@/components/HaldiCeremonyWidget';

function TimelineContent() {
  const searchParams = useSearchParams();
  const tierParam = searchParams.get('tier');
  const tierConfig = getTierConfig(tierParam);
  const allowedIds = tierConfig.allowedEventIds;

  const visibleFunctions = weddingDetails.functions.filter((fn) =>
    allowedIds.includes(fn.id)
  );

  const [activeTab, setActiveTab] = useState<string>(
    visibleFunctions[0]?.id || 'reception'
  );

  useEffect(() => {
    if (
      visibleFunctions.length > 0 &&
      !visibleFunctions.some((fn) => fn.id === activeTab)
    ) {
      setActiveTab(visibleFunctions[0].id);
    }
  }, [tierParam, visibleFunctions, activeTab]);

  const generateSingleEventIcs = (fn: IndianFunction) => {
    let startIso = '';
    let endIso = '';

    if (fn.id === 'haldi') {
      startIso = '20261120T040000Z'; // 9:30 AM IST
      endIso = '20261120T070000Z';   // 12:30 PM IST
    } else if (fn.id === 'sangeet') {
      startIso = '20261120T123000Z'; // 6:00 PM IST
      endIso = '20261120T180000Z';   // 11:30 PM IST
    } else if (fn.id === 'nikah') {
      startIso = '20261121T053000Z'; // 11:00 AM IST
      endIso = '20261121T083000Z';   // 2:00 PM IST
    } else if (fn.id === 'muhurat') {
      startIso = '20261121T123000Z'; // 6:00 PM IST
      endIso = '20261121T153000Z';   // 9:00 PM IST
    } else if (fn.id === 'reception') {
      startIso = '20261122T130000Z'; // 6:30 PM IST
      endIso = '20261122T180000Z';   // 11:30 PM IST
    } else {
      startIso = '20261120T050000Z';
      endIso = '20261120T090000Z';
    }

    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Sameen and Anula Wedding//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${fn.id}-sameen-anula-2026@bangalorewedding.com`,
      `SUMMARY:${fn.title} - Sameen & Anula Wedding`,
      `DESCRIPTION:${fn.description.replace(/\n/g, ' ')} Dress Code: ${fn.dressCode}`,
      `LOCATION:${fn.location}`,
      `DTSTART:${startIso}`,
      `DTEND:${endIso}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${fn.id}-Sameen-Anula-Wedding.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToFunction = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(`function-${id}`);
    if (element) {
      if ((window as unknown as { lenis?: { scrollTo: (target: Element, opts: { offset: number }) => void } }).lenis) {
        (window as unknown as { lenis: { scrollTo: (target: Element, opts: { offset: number }) => void } }).lenis.scrollTo(element, { offset: -80 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="itinerary"
      className="relative py-28 sm:py-36 bg-gradient-to-b from-[#240612] via-[#36091E] to-[#1F030E] text-ivory overflow-hidden"
    >
      {/* Background Subtle Gold Vignette Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-12 h-[1.5px] bg-gradient-to-r from-transparent via-gold-metallic to-gold" />
            <span className="text-xs uppercase tracking-widest font-sans text-[#E2C799] font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              The Grand Itinerary
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            </span>
            <span className="w-12 h-[1.5px] bg-gradient-to-l from-transparent via-gold-metallic to-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#F5E6C8] tracking-tight"
          >
            {tierParam?.toLowerCase().trim() === 'reception'
              ? 'An Evening of Sacred Celebration'
              : tierParam?.toLowerCase().trim() === 'wedding'
              ? 'Sacred Wedding & Reception Celebrations'
              : 'Three Days of Sacred Celebrations'}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-4 text-[#F3F4F6] font-sans text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
          >
            {tierParam?.toLowerCase().trim() === 'reception'
              ? 'Join us for an enchanting evening of felicitations, music, and joyous celebration at The Wedding Reception.'
              : tierParam?.toLowerCase().trim() === 'wedding'
              ? 'Join us for the sacred vows of Mehfil-e-Nikah, the auspicious rituals of the Muhurat, and an evening of celebration at the Wedding Reception.'
              : 'From the radiant marigold showers of The Haldi to the euphoric beats of Sangeet Night, the sacred vows of Mehfil-e-Nikah, and the auspicious rituals of the Muhurat.'}
          </motion.p>

          {/* Quick Jump Function Navigation Bar */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <AnimatePresence mode="popLayout">
              {visibleFunctions.map((fn) => {
                const isActive = activeTab === fn.id;
                return (
                  <motion.button
                    key={fn.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.35 }}
                    onClick={() => scrollToFunction(fn.id)}
                    className={`px-5 py-2.5 rounded-full text-xs font-sans tracking-luxury uppercase transition-all duration-300 flex items-center gap-2 border ${
                      isActive
                        ? 'bg-gradient-to-r from-gold-metallic via-amber-400 to-gold-antique text-charcoal font-bold shadow-lg shadow-gold/20 border-gold-metallic scale-105'
                        : 'bg-black/40 text-ivory/80 border-gold/30 hover:border-gold-metallic hover:text-ivory'
                    }`}
                  >
                    {fn.id === 'haldi' && <Sun className="w-3.5 h-3.5" />}
                    {fn.id === 'sangeet' && <Music className="w-3.5 h-3.5" />}
                    {fn.id === 'nikah' && <Heart className="w-3.5 h-3.5" />}
                    {fn.id === 'muhurat' && <Sparkles className="w-3.5 h-3.5" />}
                    {fn.id === 'reception' && <Moon className="w-3.5 h-3.5" />}
                    <span>{fn.title}</span>
                  </motion.button>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* EXPANSIVE MULTI-FUNCTION SHOWCASE SECTIONS */}
        <div className="space-y-24 sm:space-y-32">
          <AnimatePresence mode="popLayout">
            {visibleFunctions.map((fn, index) => {
              return (
                <motion.article
                  key={fn.id}
                  layout
                  id={`function-${fn.id}`}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative max-w-4xl mx-auto rounded-3xl overflow-hidden border-2 border-gold/40 shadow-2xl ${fn.patternClass} text-ivory`}
                >
                {/* Textile Scrim for 100% Crisp Text Contrast & Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90 pointer-events-none" />

                {/* Zari Gold Foil Accent Border Top */}
                <div className="relative z-10 h-2 w-full bg-gradient-to-r from-gold-antique via-gold-metallic to-gold-antique" />

                <div className="relative z-10 p-6 sm:p-10 md:p-14">
                  {/* Top Day & Date Header Banner */}
                  <div className="max-w-2xl mx-auto flex flex-wrap items-center justify-between gap-4 border-b border-gold/30 pb-6 mb-10">
                    <div className="flex items-center gap-3">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-sans tracking-luxury uppercase font-bold border ${fn.badgeBg}`}>
                        {fn.dayNumber}
                      </span>
                      <span className="text-amber-200 font-sans text-xs sm:text-sm tracking-wider uppercase font-semibold">
                        {fn.dayDate}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-sans text-amber-100 bg-black/50 backdrop-blur-sm px-4 py-1.5 rounded-full border border-gold/30">
                      <Clock className="w-3.5 h-3.5 text-gold-metallic" />
                      <span className="font-medium">{fn.timing}</span>
                    </div>
                  </div>

                  {/* Unified Centered Expanded Card & Footer Layout */}
                  <div className="max-w-2xl mx-auto w-full flex flex-col items-center">
                    {/* Bespoke Event Invitation Card */}
                    <div className="w-full relative">
                      {fn.id === 'haldi' ? (
                        /* Event 1: The Radiant Haldi — Yellow Leheriya Outer Border, Rani Pink Inner Frame, Warm Ivory Canvas */
                        <div
                          className="relative w-full rounded-2xl sm:rounded-3xl p-3 sm:p-5 md:p-6 shadow-2xl overflow-hidden"
                          style={{
                            background:
                              'repeating-linear-gradient(45deg, #FACC15, #FACC15 14px, #FFFFFF 14px, #FFFFFF 26px)',
                          }}
                        >
                          {/* Inner Border: Solid Rani Pink / Hot Pink Frame */}
                          <div className="relative rounded-xl sm:rounded-2xl border-[8px] sm:border-[10px] md:border-[12px] border-[#FF4B91] shadow-xl overflow-hidden bg-[#FAF7F2]">
                            {/* Inner Golden Piping */}
                            <div className="absolute inset-1.5 sm:inset-2 rounded-lg border border-[#D4AF37]/50 pointer-events-none z-30" />
                            <div className="absolute inset-2 sm:inset-2.5 rounded-md border border-[#FF4B91]/30 pointer-events-none z-30" />

                            {/* Ornate Corner Ornaments */}
                            <CornerOrnaments />

                            {/* Hanging Floral Toran Across Top */}
                            <div className="absolute top-0 left-0 right-0 h-10 sm:h-12 overflow-hidden pointer-events-none flex justify-center z-20">
                              <HangingFloralToran />
                            </div>

                            {/* Inner Canvas Content */}
                            <div className="relative z-10 px-5 sm:px-10 md:px-12 pt-10 sm:pt-14 pb-48 sm:pb-56 md:pb-64 flex flex-col items-center text-center">
                              {/* Gentle Matte Paper Grain Texture */}
                              <div
                                className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"
                                style={{
                                  backgroundImage:
                                    'radial-gradient(#F59E0B 0.5px, transparent 0.5px), radial-gradient(#FF4B91 0.5px, #FAF7F2 0.5px)',
                                  backgroundSize: '24px 24px',
                                  backgroundPosition: '0 0, 12px 12px',
                                }}
                              />

                              {/* Top Center: Delicate Traditional Marigold Mandala */}
                              <div className="mt-2 mb-4 sm:mb-5 relative flex items-center justify-center">
                                <TopMarigoldMandala />
                              </div>

                              {/* Ceremony Title */}
                              <h3 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1C1917] tracking-tight leading-tight">
                                The Haldi
                              </h3>

                              {/* Couple Name */}
                              <p className="font-script text-3xl sm:text-4xl md:text-5xl text-[#FF4B91] mt-2 sm:mt-3 mb-5 sm:mb-6">
                                Sameen &amp; Anula
                              </p>

                              {/* Ornamental Gold Divider */}
                              <div className="flex items-center justify-center gap-3 mb-5 sm:mb-6">
                                <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
                                <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                                <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
                              </div>

                              {/* Date, Time & Venue Details */}
                              <div className="w-full max-w-md space-y-2.5 sm:space-y-3">
                                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-serif uppercase tracking-[0.16em] text-[#292524] bg-white/90 backdrop-blur-xs px-4 py-2 rounded-full border border-amber-300 shadow-xs">
                                  <Calendar className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                                  <span className="font-semibold">Friday, 20th November 2026</span>
                                </div>

                                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-serif uppercase tracking-[0.16em] text-[#292524] bg-white/90 backdrop-blur-xs px-4 py-2 rounded-full border border-amber-300 shadow-xs">
                                  <Clock className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                                  <span className="font-semibold">9:30 AM – 12:30 PM</span>
                                </div>

                                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-serif uppercase tracking-[0.16em] text-[#292524] bg-white/90 backdrop-blur-xs px-4 py-2 rounded-full border border-amber-300 shadow-xs">
                                  <MapPin className="w-3.5 h-3.5 text-[#FF4B91] shrink-0" />
                                  <span className="font-bold">Dwapara Convention Centre</span>
                                </div>
                              </div>
                            </div>

                            {/* Bottom Decorative Fringe Elements: Absolute-Positioned */}
                            {/* Left: Ceremonial Umbrella (Chhatri), Haldi Bowl & Banana Leaves */}
                            <div className="absolute bottom-0 left-0 w-[44%] sm:w-[40%] pointer-events-none z-20">
                              <LeftChhatriAndUrli />
                            </div>

                            {/* Right: Lush Banana Leaves & Dholak */}
                            <div className="absolute bottom-0 right-0 w-[44%] sm:w-[40%] pointer-events-none z-20">
                              <RightBananaLeavesAndDholak />
                            </div>
                          </div>
                        </div>
                      ) : fn.id === 'sangeet' ? (
                        /* Event 2: Sangeet Night — Intricate Oriental/Ethnic Floral Border & Nocturnal Garden Theme */
                        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                          {/* Outer Border Frame: Intricate Ethnic/Oriental Floral Textile Pattern */}
                          <div
                            className="relative w-full border-[18px] sm:border-[24px] md:border-[28px] bg-[#0F1218]"
                            style={{
                              borderStyle: 'solid',
                              borderImageSource: "url('/images/sangeet-border-frame.png')",
                              borderImageSlice: '48 56 49 55',
                              borderImageRepeat: 'round',
                            }}
                          >
                            {/* Inner Border: Solid Deep Charcoal Frame */}
                            <div className="relative border-[6px] sm:border-[8px] border-[#1A1C23] shadow-2xl overflow-hidden bg-gradient-to-b from-[#0B0F19] via-[#101726] to-[#161F30]">
                              {/* Subtle Inner Frame Trim */}
                              <div className="absolute inset-1 border border-white/10 pointer-events-none z-30" />

                              {/* Ambient Starlight & Nocturnal Glow Effect */}
                              <div
                                className="absolute inset-0 pointer-events-none opacity-65"
                                style={{
                                  backgroundImage:
                                    'radial-gradient(circle at 50% 28%, rgba(251, 191, 36, 0.12) 0%, transparent 55%), radial-gradient(circle at 20% 22%, rgba(255, 253, 249, 0.5) 1px, transparent 1.5px), radial-gradient(circle at 82% 18%, rgba(251, 191, 36, 0.45) 1px, transparent 1.5px), radial-gradient(circle at 68% 36%, rgba(255, 253, 249, 0.35) 1px, transparent 1.5px), radial-gradient(circle at 28% 42%, rgba(251, 191, 36, 0.35) 1px, transparent 1.5px)',
                                }}
                              />

                              {/* Top Accent: Overhanging Night Foliage & Warm Golden Fairy Light Strands */}
                              <div className="relative w-full z-10 pointer-events-none select-none">
                                <img
                                  src="/images/sangeet-top-lights.png"
                                  alt=""
                                  aria-hidden="true"
                                  className="w-full h-auto block"
                                />
                                {/* Animated Golden Fairy Light Bulbs Shimmer Overlay */}
                                <svg
                                  viewBox="0 0 600 130"
                                  className="absolute inset-0 w-full h-full pointer-events-none"
                                  preserveAspectRatio="none"
                                >
                                  <defs>
                                    <radialGradient id="fairyBulbGlow" cx="50%" cy="50%" r="50%">
                                      <stop offset="0%" stopColor="#FFFBEB" stopOpacity="1" />
                                      <stop offset="40%" stopColor="#FBBF24" stopOpacity="0.85" />
                                      <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                                    </radialGradient>
                                  </defs>
                                  {/* Subtle Draped Golden Cords */}
                                  <path
                                    d="M 10,8 Q 160,65 340,12"
                                    fill="none"
                                    stroke="#FDE68A"
                                    strokeWidth="0.75"
                                    strokeOpacity="0.45"
                                  />
                                  <path
                                    d="M 210,6 Q 380,78 590,18"
                                    fill="none"
                                    stroke="#FDE68A"
                                    strokeWidth="0.75"
                                    strokeOpacity="0.45"
                                  />
                                  <path
                                    d="M 0,48 Q 250,115 595,52"
                                    fill="none"
                                    stroke="#FDE68A"
                                    strokeWidth="0.75"
                                    strokeOpacity="0.4"
                                  />
                                  {/* Warm Glowing Fairy Bulbs */}
                                  {[
                                    { cx: 65, cy: 26 },
                                    { cx: 130, cy: 38 },
                                    { cx: 195, cy: 36 },
                                    { cx: 265, cy: 27 },
                                    { cx: 335, cy: 40 },
                                    { cx: 405, cy: 45 },
                                    { cx: 475, cy: 39 },
                                    { cx: 540, cy: 28 },
                                    { cx: 95, cy: 68 },
                                    { cx: 175, cy: 81 },
                                    { cx: 260, cy: 86 },
                                    { cx: 345, cy: 84 },
                                    { cx: 430, cy: 76 },
                                    { cx: 510, cy: 64 },
                                  ].map((b, idx) => (
                                    <g key={idx} className="animate-pulse">
                                      <circle cx={b.cx} cy={b.cy} r="7" fill="url(#fairyBulbGlow)" />
                                      <circle cx={b.cx} cy={b.cy} r="2" fill="#FFFDF9" />
                                    </g>
                                  ))}
                                </svg>
                              </div>

                              {/* Card Typography & Event Details */}
                              <div className="relative z-20 px-5 sm:px-8 md:px-10 pt-1 pb-2 flex flex-col items-center text-center">
                                {/* Title: "Sangeet Night" in Elegant Flowing Script */}
                                <h3 className="font-script text-5xl sm:text-6xl md:text-7xl text-[#FFFDF9] tracking-wide leading-none drop-shadow-[0_2px_14px_rgba(255,248,220,0.35)] mb-4 sm:mb-5">
                                  Sangeet Night
                                </h3>

                                {/* Date, Time & Venue Details */}
                                <div className="space-y-1.5 sm:space-y-2 text-[#F8FAFC]">
                                  <p className="font-serif text-sm sm:text-base md:text-lg uppercase tracking-[0.2em] font-medium text-[#FFFDF9]">
                                    Friday, 20th November 2026
                                  </p>
                                  <p className="font-serif text-xs sm:text-sm md:text-base uppercase tracking-[0.22em] text-amber-100/95 font-medium">
                                    6:00 PM Onwards
                                  </p>
                                  <div className="pt-1 flex items-center justify-center gap-2">
                                    <span className="w-6 h-[1px] bg-gradient-to-r from-transparent to-amber-300/60" />
                                    <p className="font-serif text-xs sm:text-sm md:text-base uppercase tracking-[0.18em] text-[#FFFDF9] font-semibold">
                                      Dwapara Convention Centre
                                    </p>
                                    <span className="w-6 h-[1px] bg-gradient-to-l from-transparent to-amber-300/60" />
                                  </div>
                                </div>
                              </div>

                              {/* Mid/Bottom Accent: Romantic Night Garden Foliage, Soft Lantern Glows & Couple Illustration */}
                              <div className="relative w-full z-10 -mt-1 pointer-events-none select-none">
                                <img
                                  src="/images/sangeet-garden-art.png"
                                  alt="Romantic Night Garden Sangeet Illustration"
                                  className="w-full h-auto block"
                                />
                                {/* Soft Ambient Lantern Glow Accents */}
                                <div className="absolute bottom-[18%] left-[12%] w-16 h-16 rounded-full bg-amber-400/20 blur-xl animate-pulse" />
                                <div className="absolute bottom-[16%] right-[12%] w-16 h-16 rounded-full bg-amber-400/20 blur-xl animate-pulse" />
                                <div className="absolute bottom-[8%] left-[22%] w-20 h-20 rounded-full bg-amber-300/15 blur-xl animate-pulse" />
                                <div className="absolute bottom-[8%] right-[22%] w-20 h-20 rounded-full bg-amber-300/15 blur-xl animate-pulse" />
                              </div>

                              {/* Bottom Sign-off: "With love ❤️ Sameen & Anula" with Subtle Sparkle Icons */}
                              <div className="relative z-20 px-4 pt-1 pb-5 sm:pb-6 flex items-center justify-center gap-2 text-center">
                                <Sparkles className="w-3.5 h-3.5 text-amber-300/90 shrink-0" />
                                <p className="font-serif text-sm sm:text-base md:text-lg text-[#FFFDF9] tracking-wide font-normal">
                                  With love <span className="text-rose-500 mx-0.5">❤️</span> Sameen &amp; Anula
                                </p>
                                <Sparkles className="w-3.5 h-3.5 text-amber-300/90 shrink-0" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : fn.id === 'nikah' ? (
                        /* Event 3: Mehfil-e-Nikah — Crimson Brocade Frame, Mughal Arch, Tropical Palms, Lotuses & Stone Jali Balustrade */
                        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gold/40">
                          <img
                            src="/images/nikah-card-bg.png"
                            alt="Mehfil-e-Nikah Mughal Arch Invitation Frame"
                            className="w-full h-auto block select-none pointer-events-none"
                          />

                          {/* Centered Typography Overlay Inside Mughal Arch Cutout */}
                          <div className="absolute inset-x-[20%] top-[21%] bottom-[17%] flex flex-col items-center justify-center text-center px-2 sm:px-6">
                            {/* Subtle Ornamental Top Flourish */}
                            <div className="flex items-center justify-center gap-2 mb-2 sm:mb-4">
                              <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#B4823E]" />
                              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B4823E]" />
                              <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-l from-transparent to-[#B4823E]" />
                            </div>

                            {/* Event Title */}
                            <h3 className="font-serif text-lg sm:text-3xl md:text-4xl uppercase tracking-[0.14em] text-[#6B1D2F] font-semibold leading-tight mb-3 sm:mb-6">
                              Mehfil-e-Nikah
                            </h3>

                            {/* Couple Names with Minimalist Golden Hand-in-Hand Blessing Sketch Between Names */}
                            <div className="flex flex-col items-center my-1 sm:my-2">
                              <span className="font-script text-4xl sm:text-6xl md:text-7xl text-[#8A5A2B] leading-none">
                                Sameen
                              </span>
                              <div className="my-1.5 sm:my-3 flex items-center justify-center gap-2">
                                <span className="sr-only">&amp;</span>
                                <img
                                  src="/images/nikah-hands.png"
                                  alt="Hand-in-hand blessing sketch"
                                  className="w-16 sm:w-28 md:w-32 h-auto object-contain select-none pointer-events-none"
                                />
                              </div>
                              <span className="font-script text-4xl sm:text-6xl md:text-7xl text-[#8A5A2B] leading-none">
                                Anula
                              </span>
                            </div>

                            {/* Ornamental Gold Divider */}
                            <div className="w-20 sm:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#B4823E]/70 to-transparent my-3 sm:my-6" />

                            {/* Date, Time & Venue Details */}
                            <div className="space-y-1 sm:space-y-2">
                              <p className="font-serif text-[11px] sm:text-base md:text-lg uppercase tracking-[0.16em] text-[#5A2328] font-semibold">
                                Saturday, 21st November 2026
                              </p>
                              <p className="font-serif text-[10px] sm:text-sm md:text-base uppercase tracking-[0.2em] text-[#7D4538] font-medium">
                                11:00 AM Onwards
                              </p>
                              <p className="pt-1 font-serif text-[11px] sm:text-base md:text-lg uppercase tracking-[0.14em] text-[#6B1D2F] font-bold">
                                Dwapara Convention Centre
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : fn.id === 'muhurat' ? (
                        /* Event 4: The Auspicious Muhurat — Green/Gold Kundan Border, Maroon Filigree Frame, Hanging Deepams, Temple Pillar & Brass Urli */
                        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gold/40">
                          <img
                            src="/images/muhurat-card-bg.png"
                            alt="The Auspicious Muhurat South Indian Kundan & Temple Pillar Frame"
                            className="w-full h-auto block select-none pointer-events-none"
                          />

                          {/* Centered Typography Overlay on Aged Ivory/Parchment Canvas */}
                          <div className="absolute left-[23%] right-[22%] top-[19%] bottom-[13%] flex flex-col items-center justify-center text-center px-2 sm:px-4">
                            {/* Twin Peacocks Emblem */}
                            <img
                              src="/images/muhurat-peacocks.png"
                              alt=""
                              aria-hidden="true"
                              className="w-12 sm:w-20 md:w-24 h-auto object-contain mb-2 sm:mb-4 select-none pointer-events-none"
                            />

                            {/* Event Title */}
                            <h3 className="font-serif text-base sm:text-2xl md:text-3xl uppercase tracking-[0.12em] text-[#5C1A1B] font-semibold leading-snug mb-2 sm:mb-4">
                              The Auspicious Muhurat
                            </h3>

                            {/* Couple Names */}
                            <p className="font-script text-3xl sm:text-5xl md:text-6xl text-[#7A1C1C] leading-tight my-1.5 sm:my-3">
                              Sameen &amp; Anula
                            </p>

                            {/* Ornamental Maroon & Gold Divider */}
                            <div className="flex items-center justify-center gap-2 my-2.5 sm:my-5">
                              <span className="w-8 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#7A1C1C]/70" />
                              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#8C6223]" />
                              <span className="w-8 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#7A1C1C]/70" />
                            </div>

                            {/* Date, Time & Venue Details */}
                            <div className="space-y-1 sm:space-y-2">
                              <p className="font-serif text-[11px] sm:text-base md:text-lg uppercase tracking-[0.14em] text-[#3E1F14] font-semibold">
                                Saturday, 21st November 2026
                              </p>
                              <p className="font-serif text-[10px] sm:text-sm md:text-base uppercase tracking-[0.18em] text-[#5C1A1B] font-semibold">
                                6:00 PM – 9:00 PM
                              </p>
                              <p className="pt-1 font-serif text-[11px] sm:text-base md:text-lg uppercase tracking-[0.13em] text-[#4A1215] font-bold">
                                Dwapara Convention Centre
                              </p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        /* Event 5: Wedding Reception — Royal Purple Temple Ikat Border, Deep Royal Burnt Orange / Rich Terracotta Grid (#9E3205 / #B43E08 / #882903) & Scalloped Multi-Foil Arch with Bougainvillea */
                        <div
                          className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#B43E08]/60 bg-[#9E3205]"
                          style={{
                            backgroundImage:
                              'linear-gradient(to right, rgba(180, 62, 8, 0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(180, 62, 8, 0.35) 1px, transparent 1px), radial-gradient(circle at center, #B43E08 0%, #9E3205 60%, #882903 100%)',
                            backgroundSize: '24px 24px, 24px 24px, 100% 100%',
                          }}
                        >
                          <img
                            src="/images/reception-card-bg.png"
                            alt="Wedding Reception Temple Ikat & Bougainvillea Scalloped Arch Frame"
                            className="w-full h-auto block select-none pointer-events-none"
                          />

                          {/* Centered Typography Overlay Inside Scalloped Multi-Foil Arch */}
                          <div className="absolute inset-x-[23%] top-[22%] bottom-[18%] flex flex-col items-center justify-center text-center px-2 sm:px-6">
                            {/* Ornamental Top Flourish */}
                            <div className="flex items-center justify-center gap-2 mb-2 sm:mb-4">
                              <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#9E3205]" />
                              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#9E3205]" />
                              <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-l from-transparent to-[#9E3205]" />
                            </div>

                            {/* Event Title */}
                            <h3 className="font-serif text-lg sm:text-3xl md:text-4xl uppercase tracking-[0.14em] text-[#4A1D5E] font-semibold leading-tight mb-2 sm:mb-4">
                              The Wedding Reception
                            </h3>

                            {/* Couple Names */}
                            <p className="font-script text-3xl sm:text-5xl md:text-6xl text-[#882903] leading-tight my-2 sm:my-4">
                              Sameen &amp; Anula
                            </p>

                            {/* Ornamental Gold & Terracotta Divider */}
                            <div className="w-20 sm:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#9E3205]/75 to-transparent my-2.5 sm:my-5" />

                            {/* Date, Time & Venue Details */}
                            <div className="space-y-1 sm:space-y-2">
                              <p className="font-serif text-[11px] sm:text-base md:text-lg uppercase tracking-[0.15em] text-[#3B184A] font-semibold">
                                Sunday, 22nd November 2026
                              </p>
                              <p className="font-serif text-[10px] sm:text-sm md:text-base uppercase tracking-[0.18em] text-[#882903] font-semibold">
                                6:30 PM Onwards
                              </p>
                              <p className="pt-1 font-serif text-[11px] sm:text-base md:text-lg uppercase tracking-[0.14em] text-[#4A1D5E] font-bold">
                                Ebisu Convention Centre
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Unified Centered Bottom Bar: Attire & Palette Guide + Add to Calendar Button */}
                    <div className="w-full mt-8 space-y-5 flex flex-col items-center">
                      {/* Dress Code & Color Palette Guide */}
                      <div className="w-full p-5 sm:p-6 rounded-2xl bg-black/45 border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                        <div className="space-y-1">
                          <span className="text-xs uppercase tracking-luxury font-sans text-amber-200 font-semibold block">
                            Attire &amp; Palette Guide
                          </span>
                          <span className="text-xs sm:text-sm text-amber-300/90 font-sans italic block">
                            {fn.dressCode}
                          </span>
                        </div>

                        {/* Visual Color Swatches */}
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] font-sans text-amber-200/70 uppercase">Palette:</span>
                          <div className="flex items-center gap-2.5">
                            {fn.colorSwatches.map((swatch) => (
                              <div
                                key={swatch.name}
                                className="group/swatch relative flex items-center"
                              >
                                <span
                                  className="w-6 h-6 rounded-full border border-white/40 shadow-md inline-block cursor-pointer transition-transform hover:scale-125"
                                  style={{ backgroundColor: swatch.hex }}
                                  title={swatch.name}
                                />
                                <span className="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-black/90 text-[10px] text-ivory rounded whitespace-nowrap opacity-0 group-hover/swatch:opacity-100 transition-opacity pointer-events-none">
                                  {swatch.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Add to Calendar Action */}
                      <button
                        onClick={() => generateSingleEventIcs(fn)}
                        className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-metallic via-amber-400 to-gold-antique text-charcoal font-sans text-xs tracking-widest uppercase font-bold hover:shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Add {fn.title} to Calendar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default function Timeline() {
  return (
    <Suspense fallback={<div>Loading celebrations...</div>}>
      <TimelineContent />
    </Suspense>
  );
}
