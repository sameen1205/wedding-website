'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, ArrowUp, Sparkles, Flower2 } from 'lucide-react';
import { weddingDetails } from '@/data/weddingData';

export default function Footer() {
  const scrollToTop = () => {
    if ((window as unknown as { lenis?: { scrollTo: (target: number, opts: { duration: number }) => void } }).lenis) {
      (window as unknown as { lenis: { scrollTo: (target: number, opts: { duration: number }) => void } }).lenis.scrollTo(0, { duration: 1.5 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#170513] text-ivory py-20 px-6 sm:px-8 border-t-2 border-gold/40 overflow-hidden bg-patola-pattern bg-blend-soft-light">
      {/* Decorative Velvet Gradient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-96 bg-gradient-to-b from-crimson/20 via-marigold/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Zari Gold Ribbon Trim Border at Top */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-gold-metallic to-transparent opacity-80" />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Scalloped Monogram Cartouche */}
        <div className="relative mb-6">
          <div className="relative w-28 h-20 sm:w-32 sm:h-24 rounded-2xl overflow-hidden border-2 border-gold-metallic/60 shadow-2xl bg-black/60">
            <Image
              src="/images/monogram-cartouche.png"
              alt="Sameen & Anula Monogram"
              fill
              className="object-cover object-center"
              sizes="128px"
            />
          </div>
          <div className="absolute -inset-2 rounded-2xl border border-dashed border-gold/40 pointer-events-none" />
        </div>

        {/* Auspicious Blessing Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 mb-4">
          <Flower2 className="w-3.5 h-3.5 text-gold-metallic" />
          <span className="font-serif italic text-xs tracking-widest text-gold-light">
            ॥ शुभ विवाह ॥ • {weddingDetails.couple.blessing}
          </span>
          <Flower2 className="w-3.5 h-3.5 text-gold-metallic" />
        </div>

        {/* Couple Names in Regal Typography */}
        <h3 className="font-serif text-3xl sm:text-5xl font-normal tracking-wide text-ivory">
          {weddingDetails.couple.groomFull}
          <span className="text-gold-metallic font-script text-3xl sm:text-5xl mx-3">&</span>
          {weddingDetails.couple.brideFull}
        </h3>

        {/* Date & Palace Location */}
        <p className="font-sans text-xs tracking-luxury uppercase text-sand-light/90 mt-3">
          {weddingDetails.date.formatted} • {weddingDetails.location.venue} • {weddingDetails.location.city}, {weddingDetails.location.state}
        </p>

        {/* Blessings Note (Ashirwaad) */}
        <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#240316]/90 border border-gold/30 max-w-xl text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-marigold/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex items-center justify-center gap-2 text-gold-light text-xs font-sans tracking-luxury uppercase mb-3">
            <Sparkles className="w-4 h-4 text-gold-metallic" />
            <span className="font-semibold">Blessings & Ashirwaad</span>
          </div>
          <p className="font-serif text-sm sm:text-base text-sand-light/90 italic leading-relaxed">
            &ldquo;Your presence, smiles, and heartfelt prayers at our wedding celebrations in Bangalore are the most precious gifts we could ever ask for. In the spirit of our festivities, blessings are affectionately requested; no boxed gifts please.&rdquo;
          </p>
        </div>

        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="mt-12 flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-gold/10 border border-gold/40 text-xs font-sans tracking-luxury uppercase text-gold-light hover:bg-gold hover:text-charcoal hover:border-gold transition-all duration-300 group shadow-md"
          aria-label="Scroll back to top"
        >
          <span>Return to Top</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-1 text-gold-metallic group-hover:text-charcoal" />
        </button>

        {/* Bottom Bar / Copyright */}
        <div className="mt-14 pt-8 border-t border-gold/20 w-full flex flex-col sm:flex-row items-center justify-between text-xs font-sans tracking-wider text-sand/60 gap-4">
          <p>
            Sameen & Anula • Celebrating Love, Heritage & Unity
          </p>
          <p className="flex items-center gap-1.5">
            <span>Bangalore, Karnataka</span>
            <span className="text-gold-metallic">•</span>
            <Heart className="w-3.5 h-3.5 text-crimson fill-crimson inline" />
          </p>
        </div>
      </div>
    </footer>
  );
}
