'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { weddingDetails } from '@/data/weddingData';
import { Heart, Sparkles } from 'lucide-react';

export default function Story() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [80, -60]);
  const parallaxY3 = useTransform(scrollYProgress, [0, 1], [100, -80]);

  return (
    <section
      id="story"
      ref={containerRef}
      className="relative py-28 sm:py-36 bg-ivory text-charcoal overflow-hidden bg-raw-silk"
    >
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-marigold-light/60 blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-crimson-light/40 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="w-10 h-[1.5px] bg-gradient-to-r from-transparent to-gold" />
            <span className="text-xs uppercase tracking-luxury font-sans text-crimson font-bold">
              Humari Dastaan • Our Journey
            </span>
            <span className="w-10 h-[1.5px] bg-gradient-to-l from-transparent to-gold" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-charcoal tracking-tight"
          >
            Two Worlds, One Sacred Harmony
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-4 text-charcoal-soft/80 font-sans text-sm sm:text-base leading-relaxed"
          >
            A love story born in heritage alleyways, nurtured across horizons, and blessed beneath the starlit skies of Bangalore.
          </motion.p>
        </div>

        {/* Editorial Split-Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sticky Narrative Block */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-10 rounded-3xl bg-ivory border-2 border-gold/40 shadow-xl relative overflow-hidden"
            >
              {/* Gold Brocade Accent Corner */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-gold/20 via-marigold/10 to-transparent pointer-events-none" />

              <span className="font-script text-3xl sm:text-4xl text-crimson block mb-2">
                Auspicious Beginnings
              </span>

              <h3 className="font-serif text-2xl sm:text-3xl font-light text-charcoal leading-snug">
                &ldquo;When hearts connect across traditions, every ritual becomes a celebration of eternity.&rdquo;
              </h3>

              <div className="w-16 h-[2px] bg-gradient-to-r from-gold via-marigold to-crimson my-6" />

              <p className="font-sans text-sm sm:text-base text-charcoal-soft/85 leading-relaxed">
                What started over warm coffee in Bangalore grew into an unbreakable bond that brought two vibrant families together in laughter, respect, and boundless love.
              </p>

              <p className="font-sans text-sm sm:text-base text-charcoal-soft/85 leading-relaxed mt-4">
                Now, surrounded by the joy of family and friends at Dwapara Convention Centre, Bangalore, we invite you to be part of our most sacred vows, vibrant folk dances, and celebratory moments.
              </p>

              {/* Couple Crest Seal */}
              <div className="mt-8 pt-6 border-t border-gold/30 flex items-center justify-between">
                <div>
                  <p className="font-serif text-2xl tracking-wider text-charcoal">
                    {weddingDetails.couple.groom} & {weddingDetails.couple.bride}
                  </p>
                  <p className="text-[11px] font-sans tracking-luxury uppercase text-crimson font-medium mt-0.5">
                    Bangalore • November 2026
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full border border-gold bg-gold/10 flex items-center justify-center text-crimson">
                  <Heart className="w-5 h-5 fill-crimson/20" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Parallax Story Cards */}
          <div className="lg:col-span-7 space-y-16 sm:space-y-24">
            {weddingDetails.ourStory.map((chapter, index) => {
              const parallaxStyles = [parallaxY1, parallaxY2, parallaxY3];
              const currentParallax = parallaxStyles[index % parallaxStyles.length];

              return (
                <motion.div
                  key={chapter.title}
                  style={{ y: currentParallax }}
                  initial={{ opacity: 0, y: 50, filter: 'blur(8px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{
                    type: 'spring',
                    stiffness: 60,
                    damping: 20,
                    delay: 0.15,
                  }}
                  className={`group relative flex flex-col ${
                    index % 2 === 1 ? 'sm:ml-10' : 'sm:mr-10'
                  }`}
                >
                  {/* Photo Container with Gold Border */}
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-2xl border-2 border-gold/50 bg-charcoal shadow-xl transition-all duration-700 group-hover:border-gold-metallic group-hover:shadow-2xl">
                    <Image
                      src={chapter.image}
                      alt={chapter.alt}
                      fill
                      className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105 brightness-95"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Badge */}
                    <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-crimson-deep/90 backdrop-blur-md border border-gold/40 text-gold-metallic text-xs font-sans tracking-luxury uppercase font-bold">
                      {chapter.year}
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-5 left-5 right-5 text-ivory">
                      <p className="font-sans text-xs tracking-luxury uppercase text-amber-300 font-semibold mb-1">
                        {chapter.subtitle}
                      </p>
                      <h4 className="font-serif text-2xl sm:text-3xl font-light">
                        {chapter.title}
                      </h4>
                    </div>
                  </div>

                  {/* Description & Quote */}
                  <div className="mt-5 px-3">
                    <p className="font-sans text-sm sm:text-base text-charcoal-soft/85 leading-relaxed">
                      {chapter.description}
                    </p>

                    {chapter.quote && (
                      <p className="font-serif italic text-base sm:text-lg text-crimson font-medium mt-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-gold shrink-0" />
                        &ldquo;{chapter.quote}&rdquo;
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
