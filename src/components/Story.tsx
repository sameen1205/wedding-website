'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const storyMilestones = [
  {
    year: "2012",
    tag: "High School Sweethearts",
    title: "Where It All Began",
    description:
      "He was in 10th grade; she was in 9th. Between school bus rides, hallway smiles, and classroom bells, a simple teenage crush quietly blossomed into a bond that would weather every test of time.",
    image: "/images/story-1.jpg",
    alt: "Sameen and Anula in school uniform in 2012",
  },
  {
    year: "2023",
    tag: "Milestones in the UK",
    title: "Growing Up & Graduating Together",
    description:
      "From school corridors to universities abroad in the United Kingdom. Celebrating each other’s convocations and walking side-by-side through life's biggest milestones proved that home isn't a place—it's each other.",
    // Note: check for /images/story-2.jpg or /images/story-2.png in the public folder
    image: "/images/story-2.jpg",
    alt: "Sameen and Anula attending UK convocations together in 2023",
  },
  {
    year: "2026",
    tag: "Fourteen Years to Forever",
    title: "The Easiest 'Yes'",
    description:
      "Fourteen years of friendship, endless laughter, and unconditional love culminated beneath a canopy of roses, candlelight, and starlight. Taking each other's hands for a lifetime was the easiest choice in the world.",
    image: "/images/story-3.jpg",
    alt: "Sameen proposing to Anula in 2026",
  },
];

function MilestoneImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const handleFallback = () => {
    setImgSrc((current) => {
      if (current.endsWith('.jpg')) {
        return current.replace(/\.jpg$/i, '.png');
      }
      return current;
    });
  };

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      handleFallback();
    }
  }, [imgSrc]);

  return (
    <img
      ref={imgRef}
      src={imgSrc}
      alt={alt}
      onError={handleFallback}
      loading="lazy"
      className="w-full h-full object-cover object-center transition-all duration-500 ease-out group-hover:scale-105 group-hover:contrast-105 group-hover:brightness-105"
    />
  );
}

export default function Story() {
  return (
    <section
      id="story"
      className="relative py-28 sm:py-36 bg-gradient-to-b from-[#240612] via-[#36091E] to-[#1F030E] text-[#F3F4F6] overflow-hidden"
    >
      {/* Subtle Ambient Warm Gold Vignette Glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
        }}
      />

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto px-6 mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <span className="w-10 h-[1.5px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span className="text-xs uppercase tracking-widest font-sans text-[#E2C799] font-semibold">
            Humari Dastaan • Our Story
          </span>
          <span className="w-10 h-[1.5px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F5E6C8] tracking-tight"
        >
          Fourteen Years in the Making
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 text-[#E5E7EB] font-sans text-sm sm:text-base leading-relaxed"
        >
          From high school hallways to university graduations abroad and a starlit proposal, every chapter has led us to forever.
        </motion.p>
      </div>

      {/* 3-Card Responsive Milestone Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {storyMilestones.map((milestone, index) => (
          <motion.div
            key={milestone.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: 'easeOut',
            }}
            className="group bg-white/[0.03] backdrop-blur-md rounded-2xl p-5 border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 shadow-2xl flex flex-col"
          >
            {/* Portrait Photo Container */}
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#D4AF37]/30 rounded-2xl mb-5 bg-[#1F030E]">
              <MilestoneImage src={milestone.image} alt={milestone.alt} />
              {/* Subtle Warm Gold Hover Contrast Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F030E]/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
            </div>

            {/* Card Content */}
            <div className="flex flex-col flex-1">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-xs font-semibold text-[#F5E6C8] bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-3 py-1 rounded-full uppercase tracking-wider">
                  {milestone.year}
                </span>
                <span className="text-xs font-sans uppercase tracking-wider text-[#E2C799]/85 font-medium">
                  {milestone.tag}
                </span>
              </div>

              <h3 className="text-[#F5E6C8] text-xl font-serif mt-3 mb-2">
                {milestone.title}
              </h3>

              <p className="text-[#E5E7EB] text-sm leading-relaxed">
                {milestone.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
