'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Sparkles, 
  Clock, 
  MapPin, 
  Music, 
  Utensils, 
  Calendar, 
  Sun, 
  Moon, 
  Heart, 
  Check, 
  CheckCircle2,
  Share2
} from 'lucide-react';
import { weddingDetails, IndianFunction } from '@/data/weddingData';

export default function Timeline() {
  const [activeTab, setActiveTab] = useState<string>('haldi');

  const generateSingleEventIcs = (fn: IndianFunction) => {
    let startIso = '';
    let endIso = '';

    if (fn.id === 'haldi') {
      startIso = '20261120T050000Z'; // 10:30 AM IST
      endIso = '20261120T090000Z';   // 2:30 PM IST
    } else if (fn.id === 'sangeet') {
      startIso = '20261120T133000Z'; // 7:00 PM IST
      endIso = '20261120T190000Z';   // 12:30 AM IST
    } else if (fn.id === 'nikah-muhurat') {
      startIso = '20261121T053000Z'; // 11:00 AM IST
      endIso = '20261121T110000Z';   // 4:30 PM IST
    } else {
      startIso = '20261122T143000Z'; // 8:00 PM IST
      endIso = '20261122T203000Z';   // 2:00 AM IST
    }

    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Kabir and Zoya Wedding//EN',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:${fn.id}-kabir-zoya-2026@udaipurwedding.com`,
      `SUMMARY:${fn.title} - Kabir & Zoya Wedding`,
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
    link.setAttribute('download', `${fn.id}-Kabir-Zoya-Wedding.ics`);
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
              The Grand Royal Itinerary • Shubh Karyakram
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
            From the vibrant marigold showers of the Haldi to the euphoric beats of the Sangeet, the sacred union of Nikah & Muhurat, and the majesty of the Grand Reception.
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
                  {fn.id === 'nikah-muhurat' && <Heart className="w-3.5 h-3.5" />}
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
                {/* Zari Gold Foil Accent Border Top */}
                <div className="h-2 w-full bg-gradient-to-r from-gold-antique via-gold-metallic to-gold-antique" />

                <div className="p-8 sm:p-12 lg:p-16">
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

                    <div className="flex items-center gap-2 text-xs font-sans text-amber-100 bg-black/40 backdrop-blur-sm px-4 py-1.5 rounded-full border border-gold/30">
                      <Clock className="w-3.5 h-3.5 text-gold-metallic" />
                      <span className="font-medium">{fn.timing}</span>
                    </div>
                  </div>

                  {/* Main Grid: Visual Showcase & Detailed Narrative */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                    {/* Visual Photography with Arch Frame & Overlays */}
                    <div className="lg:col-span-6 relative">
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

                      {/* Shaahi Dawat / Cuisine Note */}
                      <div className="flex items-start gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-100 text-xs font-sans">
                        <Utensils className="w-4 h-4 text-gold-metallic shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-gold-metallic font-semibold uppercase tracking-wider block mb-0.5">
                            Shaahi Dawat (Feast)
                          </strong>
                          <span>{fn.cuisine}</span>
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
    </section>
  );
}
