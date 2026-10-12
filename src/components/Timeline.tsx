'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Sparkles, 
  Clock, 
  MapPin, 
  Music, 
  Calendar, 
  Sun, 
  Moon, 
  Heart, 
  Check, 
  CheckCircle2,
  Share2,
  ZoomIn,
  Eye,
  X,
  Download
} from 'lucide-react';
import { weddingDetails, IndianFunction } from '@/data/weddingData';
import { 
  LeftChhatriAndUrli, 
  RightBananaLeavesAndDholak, 
  TopMarigoldMandala, 
  HangingFloralToran, 
  CornerOrnaments 
} from '@/components/HaldiCeremonyWidget';

export default function Timeline() {
  const [activeTab, setActiveTab] = useState<string>('haldi');
  const [selectedInvite, setSelectedInvite] = useState<{
    src: string;
    title: string;
    subtitle: string;
    downloadName: string;
  } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedInvite(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const generateSingleEventIcs = (fn: IndianFunction) => {
    let startIso = '';
    let endIso = '';

    if (fn.id === 'haldi') {
      startIso = '20261120T050000Z'; // 10:30 AM IST
      endIso = '20261120T090000Z';   // 2:30 PM IST
    } else if (fn.id === 'sangeet') {
      startIso = '20261120T123000Z'; // 6:00 PM IST
      endIso = '20261120T180000Z';   // 11:30 PM IST
    } else if (fn.id === 'nikah') {
      startIso = '20261121T043000Z'; // 10:00 AM IST
      endIso = '20261121T083000Z';   // 2:00 PM IST
    } else if (fn.id === 'muhurat') {
      startIso = '20261121T123000Z'; // 6:00 PM IST
      endIso = '20261121T153000Z';   // 9:00 PM IST
    } else if (fn.id === 'reception') {
      startIso = '20261122T133000Z'; // 7:00 PM IST
      endIso = '20261122T183000Z';   // 12:00 AM IST
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
      `LOCATION:${fn.location}, ${weddingDetails.location.city}`,
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
      className="relative py-28 sm:py-36 bg-[#16060B] text-ivory overflow-hidden"
    >
      {/* Background Subtle Jaal Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-crimson-deep/40 via-transparent to-transparent pointer-events-none" />

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
            <span className="text-xs uppercase tracking-luxury font-sans text-amber-300 font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-gold-metallic" />
              The Grand Itinerary
              <Sparkles className="w-3.5 h-3.5 text-gold-metallic" />
            </span>
            <span className="w-12 h-[1.5px] bg-gradient-to-l from-transparent via-gold-metallic to-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-ivory tracking-tight"
          >
            Three Days of Sacred Celebrations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-4 text-amber-100/80 font-sans text-sm sm:text-base leading-relaxed max-w-2xl mx-auto"
          >
            From the radiant marigold showers of the Haldi to the euphoric beats of the Grand Sangeet, the sacred vows of the Nikah, and the auspicious rituals of the Muhurat.
          </motion.p>

          {/* Quick Jump Function Navigation Bar */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {weddingDetails.functions.map((fn) => {
              const isActive = activeTab === fn.id;
              return (
                <button
                  key={fn.id}
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
                </button>
              );
            })}
          </div>
        </div>

        {/* EXPANSIVE MULTI-FUNCTION SHOWCASE SECTIONS */}
        <div className="space-y-24 sm:space-y-36">
          {weddingDetails.functions.map((fn, index) => {
            return (
              <motion.article
                key={fn.id}
                id={`function-${fn.id}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-3xl overflow-hidden border-2 border-gold/40 shadow-2xl ${fn.patternClass} text-ivory`}
              >
                {/* Textile Scrim for 100% Crisp Text Contrast & Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90 pointer-events-none" />

                {/* Zari Gold Foil Accent Border Top */}
                <div className="relative z-10 h-2 w-full bg-gradient-to-r from-gold-antique via-gold-metallic to-gold-antique" />

                <div className="relative z-10 p-8 sm:p-12 lg:p-16">
                  {/* Top Day & Date Header Banner */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gold/30 pb-6 mb-10">
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

                  {/* Main Grid: Visual Showcase & Detailed Narrative */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    {/* Visual Photography with Arch Frame & Overlays */}
                    <div className="lg:col-span-6 relative">
                      {fn.id === 'haldi' ? (
                        /* Traditional Framed Haldi Ceremony Card (Direct Framing, No Nested Cards, No Tabs, No RSVP Button) */
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
                            <div className="relative z-10 px-5 sm:px-8 md:px-10 pt-7 sm:pt-9 pb-44 sm:pb-52 md:pb-60 flex flex-col items-center text-center">
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
                              <div className="mt-2 mb-2 sm:mb-3 relative flex items-center justify-center">
                                <TopMarigoldMandala />
                              </div>

                              {/* Auspicious Invocation Tag */}
                              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF1F2] border border-[#FF4B91]/40 mb-3 shadow-xs">
                                <Sparkles className="w-3 h-3 text-[#FF4B91]" />
                                <span className="font-serif italic text-xs tracking-widest text-[#BE185D] font-medium">
                                  ॥ शुभ हल्दी ॥ • Auspicious Turmeric Blessing
                                </span>
                                <Sparkles className="w-3 h-3 text-[#FF4B91]" />
                              </div>

                              {/* Ceremony Title */}
                              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1C1917] tracking-tight leading-tight">
                                {fn.title}
                              </h3>

                              {/* Couple Name */}
                              <p className="font-script text-2xl sm:text-3xl text-[#FF4B91] mt-1 mb-2">
                                Sameen & Anula
                              </p>

                              {/* Invitation Description */}
                              <p className="font-sans text-xs sm:text-sm text-[#44403C] max-w-sm leading-relaxed mb-4">
                                Join us as we bathe Sameen & Anula in sacred turmeric, fragrant marigold petals, and joyous laughter under the golden sun.
                              </p>

                              {/* Date, Time & Venue Details (Clean & Readable) */}
                              <div className="w-full max-w-sm space-y-2 mb-3">
                                <div className="flex items-center justify-center gap-2 text-xs font-sans text-[#292524] bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-amber-300 shadow-xs">
                                  <Clock className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                                  <span className="font-medium">{fn.dayDate} • {fn.timing}</span>
                                </div>

                                <div className="flex items-center justify-center gap-2 text-xs font-sans text-[#292524] bg-white/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-amber-300 shadow-xs">
                                  <MapPin className="w-3.5 h-3.5 text-[#FF4B91] shrink-0" />
                                  <span className="font-medium">{fn.location}, Bangalore</span>
                                </div>
                              </div>

                              {/* Dress Code Subtext */}
                              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] border border-amber-300/80 text-[11px] font-sans text-[#78350F] font-semibold tracking-wide">
                                <span>Dress Code: {fn.dressCode}</span>
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
                      ) : fn.id === 'nikah' ? (
                        /* The Sacred Nikah Visual Showcase */
                        <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden border-2 border-gold/60 shadow-2xl group">
                          <Image
                            src={fn.image}
                            alt={fn.alt}
                            fill
                            className="object-cover object-center brightness-90 contrast-[1.08] transition-transform duration-1000 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                          {/* Location Tag */}
                          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-gold/50 text-gold-metallic text-xs font-sans tracking-wider">
                              <MapPin className="w-3.5 h-3.5" />
                              {fn.location}
                            </span>
                          </div>

                          {/* Poetic Quote Overlay on Image */}
                          <div className="absolute bottom-4 left-4 right-4 text-ivory">
                            <p className="font-script text-2xl sm:text-3xl text-amber-200 italic mb-1">
                              &ldquo;{fn.quote}&rdquo;
                            </p>
                          </div>
                        </div>
                      ) : fn.id === 'muhurat' ? (
                        /* The Auspicious Muhurat with Authentic Patola Artwork */
                        <div className="relative">
                          <div 
                            onClick={() =>
                              setSelectedInvite({
                                src: '/images/patola-card-full.png',
                                title: 'Vivah Patola Card',
                                subtitle: 'Sameen & Anula • 21 November, 2026',
                                downloadName: 'Sameen-Anula-Patola-Card.png',
                              })
                            }
                            className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden border-2 border-gold/60 shadow-2xl group cursor-pointer"
                          >
                            <Image
                              src={fn.image}
                              alt={fn.alt}
                              fill
                              className="object-cover object-center brightness-90 contrast-[1.08] transition-transform duration-1000 group-hover:scale-105"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                            {/* Location Tag */}
                            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-gold/50 text-gold-metallic text-xs font-sans tracking-wider">
                                <MapPin className="w-3.5 h-3.5" />
                                {fn.location}
                              </span>
                            </div>

                            {/* Poetic Quote Overlay on Image */}
                            <div className="absolute bottom-4 left-4 right-4 text-ivory">
                              <p className="font-script text-2xl sm:text-3xl text-amber-200 italic mb-1">
                                &ldquo;{fn.quote}&rdquo;
                              </p>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/50 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4">
                              <div className="w-12 h-12 rounded-full bg-gold-metallic text-charcoal flex items-center justify-center mb-2">
                                <ZoomIn className="w-6 h-6" />
                              </div>
                              <span className="text-xs font-sans uppercase tracking-widest text-amber-200 font-bold">
                                Click to View Full Patola Card
                              </span>
                            </div>
                          </div>

                          {/* Patola Monogram Card Quick Bar */}
                          <div className="mt-4 flex items-center justify-between p-3.5 rounded-xl bg-black/60 border border-gold/40">
                            <div className="flex items-center gap-3">
                              <div className="relative w-12 h-9 rounded-lg overflow-hidden border border-gold/50">
                                <Image
                                  src="/images/monogram-cartouche.png"
                                  alt="S-A Monogram Cartouche"
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <span className="text-xs font-serif text-amber-100 block font-medium">
                                  Vivah Patola Monogram
                                </span>
                                <span className="text-[11px] text-amber-300/80 font-sans">
                                  21 November, 2026
                                </span>
                              </div>
                            </div>
                            <button
                              onClick={() =>
                                setSelectedInvite({
                                  src: '/images/patola-card-full.png',
                                  title: 'Vivah Patola Card',
                                  subtitle: 'Sameen & Anula • 21 November, 2026',
                                  downloadName: 'Sameen-Anula-Patola-Card.png',
                                })
                              }
                              className="px-3.5 py-1.5 rounded-full bg-gold-metallic/20 hover:bg-gold-metallic/35 border border-gold-metallic/50 text-xs font-sans text-gold-metallic flex items-center gap-1.5 transition-all"
                            >
                              <Eye className="w-3 h-3" />
                              <span>View Monogram</span>
                            </button>
                          </div>
                        </div>
                      ) : (
                        /* The Grand Sangeet Visual Showcase */
                        <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full rounded-2xl overflow-hidden border-2 border-gold/60 shadow-2xl group">
                          <Image
                            src={fn.image}
                            alt={fn.alt}
                            fill
                            className="object-cover object-center brightness-90 contrast-[1.08] transition-transform duration-1000 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                          {/* Location Tag */}
                          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-gold/50 text-gold-metallic text-xs font-sans tracking-wider">
                              <MapPin className="w-3.5 h-3.5" />
                              {fn.location}
                            </span>
                          </div>

                          {/* Poetic Quote Overlay on Image */}
                          <div className="absolute bottom-4 left-4 right-4 text-ivory">
                            <p className="font-script text-2xl sm:text-3xl text-amber-200 italic mb-1">
                              &ldquo;{fn.quote}&rdquo;
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Detailed Content & Celebratory Breakdown */}
                    <div className="lg:col-span-6 space-y-6">
                      <div>
                        <span className="text-xs uppercase tracking-luxury font-sans text-amber-300 font-bold block mb-1">
                          {fn.theme}
                        </span>
                        <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-ivory leading-tight">
                          {fn.title}
                        </h3>
                        <p className="text-amber-100/90 font-sans text-sm sm:text-base mt-2 font-medium">
                          {fn.subtitle}
                        </p>
                      </div>

                      <p className="font-sans text-sm sm:text-base text-amber-50/85 leading-relaxed">
                        {fn.description}
                      </p>

                      {/* Ritual Highlights */}
                      <div className="p-5 rounded-2xl bg-black/40 border border-gold/30">
                        <h4 className="text-xs uppercase tracking-luxury font-sans text-gold-metallic font-bold mb-3 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Ceremony Highlights & Rasm</span>
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {fn.highlights.map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs font-sans text-amber-100">
                              <CheckCircle2 className="w-3.5 h-3.5 text-gold-metallic shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Dress Code & Color Palette Guide */}
                      <div className="p-5 rounded-2xl bg-black/40 border border-gold/30 space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <span className="text-xs uppercase tracking-luxury font-sans text-amber-200 font-semibold">
                            Attire & Palette Guide
                          </span>
                          <span className="text-xs text-amber-300/80 font-sans italic">
                            {fn.dressCode}
                          </span>
                        </div>

                        {/* Visual Color Swatches */}
                        <div className="flex items-center gap-3 pt-1">
                          <span className="text-[11px] font-sans text-amber-200/70 uppercase">Colors:</span>
                          <div className="flex items-center gap-2">
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
                      <div className="pt-2 flex flex-wrap gap-4">
                        <button
                          onClick={() => generateSingleEventIcs(fn)}
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-metallic via-amber-400 to-gold-antique text-charcoal font-sans text-xs tracking-widest uppercase font-bold hover:shadow-lg hover:shadow-gold/30 hover:scale-105 transition-all"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Add {fn.title} to Calendar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Interactive Full-Screen Invitation Lightbox Modal */}
      <AnimatePresence>
        {selectedInvite && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedInvite(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-2xl w-full bg-[#18030B] border-2 border-gold-metallic/60 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Header */}
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-gold/30 bg-black/60">
                <div>
                  <h3 className="font-serif text-lg sm:text-2xl text-amber-200 font-medium">
                    {selectedInvite.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-amber-100/70">
                    {selectedInvite.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedInvite(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-ivory flex items-center justify-center transition-colors border border-gold/30"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Showcase */}
              <div className="relative aspect-[3/4] max-h-[70vh] w-full bg-[#FFFBEB] flex items-center justify-center p-2">
                <div className="relative w-full h-full">
                  <Image
                    src={selectedInvite.src}
                    alt={selectedInvite.title}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Modal Footer with Actions */}
              <div className="p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 border-t border-gold/30 bg-black/80">
                <span className="text-xs font-sans text-amber-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Sameen & Anula • Bangalore Wedding
                </span>

                <a
                  href={selectedInvite.src}
                  download={selectedInvite.downloadName}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-gold-metallic via-amber-400 to-gold-antique text-charcoal font-sans text-xs tracking-wider uppercase font-bold hover:shadow-lg hover:shadow-gold/30 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Card</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
