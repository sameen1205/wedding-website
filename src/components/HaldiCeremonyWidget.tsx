'use client';

import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Clock, Sparkles, Check, Heart, ExternalLink } from 'lucide-react';

export interface HaldiCeremonyWidgetProps {
  title?: string;
  subtitle?: string;
  invitationText?: string;
  date?: string;
  time?: string;
  location?: string;
  address?: string;
  dressCode?: string;
  mapUrl?: string;
  onRsvpClick?: () => void;
  onMapClick?: () => void;
  className?: string;
  coupleNames?: string;
}

export default function HaldiCeremonyWidget({
  title = "The Haldi Ceremony",
  subtitle = "॥ शुभ हल्दी ॥ • Auspicious Turmeric Blessing",
  invitationText = "Join us as we bathe the bride & groom in sacred turmeric, fragrant marigold petals, and joyous laughter under the golden sun.",
  date = "Friday, 20th November 2026",
  time = "9:30 AM – 12:30 PM",
  location = "Dwapara Convention Centre",
  address = "Bangalore",
  dressCode = "Yellow & Vibrant Festive",
  mapUrl,
  onRsvpClick,
  onMapClick,
  className = "",
  coupleNames = "Sameen & Anula",
}: HaldiCeremonyWidgetProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rsvpConfirmed, setRsvpConfirmed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // 3D Card Hover Motion Physics
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [4, -4]), { stiffness: 180, damping: 22 });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-4, 4]), { stiffness: 180, damping: 22 });
  const shineOpacity = useSpring(useTransform(mouseY, [0, 1], [0.15, 0.05]), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const handleRsvp = () => {
    if (onRsvpClick) {
      onRsvpClick();
    } else {
      setShowConfetti(true);
      setRsvpConfirmed(true);
      setTimeout(() => setShowConfetti(false), 3500);

      // Smooth scroll to main RSVP if present
      const rsvpEl = document.getElementById('rsvp');
      if (rsvpEl) {
        rsvpEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleOpenMap = () => {
    if (onMapClick) {
      onMapClick();
    } else if (mapUrl) {
      window.open(mapUrl, '_blank', 'noopener,noreferrer');
    } else {
      const query = encodeURIComponent(`${location}, ${address}`);
      window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={`w-full max-w-4xl mx-auto px-4 py-8 sm:py-12 ${className}`}>
      {/* 3D Perspective Wrapper */}
      <div style={{ perspective: 1200 }}>
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
          initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(245,158,11,0.3),_0_20px_45px_-10px_rgba(0,0,0,0.6)] transition-shadow duration-500 hover:shadow-[0_35px_70px_-15px_rgba(245,158,11,0.45),_0_25px_50px_-10px_rgba(0,0,0,0.7)]"
        >
          {/* ========================================================= */}
          {/* 1. OUTER BORDER: VIBRANT LEHERIYA TIE-DYE PATTERN        */}
          {/* ========================================================= */}
          <div className="relative p-4 sm:p-7 md:p-9 bg-[#F59E0B] overflow-hidden">
            {/* Embedded Wavy Leheriya SVG Pattern */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
            >
              <defs>
                <pattern
                  id="haldi-leheriya-waves"
                  width="72"
                  height="72"
                  patternUnits="userSpaceOnUse"
                  patternTransform="rotate(-45)"
                >
                  {/* Rich Saffron Yellow Background */}
                  <rect width="72" height="72" fill="#F59E0B" />
                  
                  {/* First Organic Wavy White Leheriya Stripe */}
                  <path
                    d="M 0 14 Q 18 8, 36 14 T 72 14 L 72 26 Q 54 20, 36 26 T 0 26 Z"
                    fill="#FFFDF7"
                    opacity="0.95"
                  />
                  {/* Fine Golden Outline for depth */}
                  <path
                    d="M 0 26 Q 18 20, 36 26 T 72 26"
                    stroke="#D97706"
                    strokeWidth="1.2"
                    fill="none"
                    opacity="0.35"
                  />

                  {/* Second Organic Wavy White Leheriya Stripe */}
                  <path
                    d="M 0 50 Q 18 44, 36 50 T 72 50 L 72 62 Q 54 56, 36 62 T 0 62 Z"
                    fill="#FFFDF7"
                    opacity="0.95"
                  />
                  <path
                    d="M 0 62 Q 18 56, 36 62 T 72 62"
                    stroke="#D97706"
                    strokeWidth="1.2"
                    fill="none"
                    opacity="0.35"
                  />

                  {/* Fine tie-dye dotted resist dots */}
                  <circle cx="18" cy="8" r="1.5" fill="#FEF08A" opacity="0.6" />
                  <circle cx="54" cy="44" r="1.5" fill="#FEF08A" opacity="0.6" />
                </pattern>

                {/* Subtle Paper Grain Filter for Matte Fabric Feel */}
                <filter id="paper-noise" x="0%" y="0%" width="100%" height="100%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
                  <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.05 0" />
                  <feComposite in2="SourceGraphic" in="gl" operator="in" />
                </filter>
              </defs>

              <rect width="100%" height="100%" fill="url(#haldi-leheriya-waves)" />
            </svg>

            {/* Subtle Radiant Ambient Glow on Leheriya Border */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/25 via-transparent to-amber-700/25 pointer-events-none" />

            {/* ========================================================= */}
            {/* 2. INNER FRAME: SOLID RANI PINK (HOT PINK) RECTANGLE     */}
            {/* ========================================================= */}
            <div className="relative rounded-2xl bg-[#FFFDF8] border-[6px] sm:border-[8px] md:border-[10px] border-[#FF4B91] shadow-2xl overflow-hidden">
              {/* Delicate Golden Piping inside the Rani Frame */}
              <div className="absolute inset-1.5 sm:inset-2.5 rounded-xl border border-[#D4AF37]/60 pointer-events-none z-30" />
              <div className="absolute inset-2 sm:inset-3 rounded-lg border border-[#FF4B91]/30 pointer-events-none z-30" />

              {/* Ornate Scalloped Corner Brackets */}
              <CornerOrnaments />

              {/* ========================================================= */}
              {/* 3. CENTRAL CANVAS: TEXTURED LIGHT IVORY & MARIGOLD MOTIF */}
              {/* ========================================================= */}
              <div className="relative z-10 px-6 sm:px-10 md:px-14 pt-8 pb-32 sm:pb-36 md:pb-44 flex flex-col items-center text-center bg-[#FFFDF8]">
                {/* Gentle Matte Paper Grain Texture Overlay */}
                <div
                  className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#F59E0B 0.5px, transparent 0.5px), radial-gradient(#FF4B91 0.5px, #FFFDF8 0.5px)`,
                    backgroundSize: '24px 24px',
                    backgroundPosition: '0 0, 12px 12px',
                  }}
                />

                {/* Hanging Floral Toran (Marigolds & Mango Leaves Across Top) */}
                <div className="absolute top-0 left-0 right-0 h-10 sm:h-12 overflow-hidden pointer-events-none flex justify-center z-20">
                  <HangingFloralToran />
                </div>

                {/* Top Center: Delicate Traditional Floral / Mandala Motif */}
                <motion.div
                  initial={{ scale: 0, rotate: -45, opacity: 0 }}
                  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.15, type: 'spring' }}
                  className="mt-4 sm:mt-5 mb-3 relative flex items-center justify-center"
                >
                  <TopMarigoldMandala />
                </motion.div>

                {/* Auspicious Invocation Tag */}
                <motion.div
                  initial={{ opacity: 0, y: 12, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.25 }}
                  className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#FFF1F2] border border-[#FF4B91]/40 mb-3 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#FF4B91]" />
                  <span className="font-serif italic text-xs sm:text-sm tracking-widest text-[#BE185D] font-medium">
                    {subtitle}
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-[#FF4B91]" />
                </motion.div>

                {/* Main Theme Heading: "The Haldi Ceremony" */}
                <motion.div
                  initial={{ opacity: 0, y: 22, filter: 'blur(8px)' }}
                  whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1C1917] tracking-tight leading-none drop-shadow-sm">
                    {title}
                  </h2>
                  <p className="font-script text-2xl sm:text-3xl text-[#FF4B91] mt-1 -mb-1">
                    for {coupleNames}
                  </p>
                </motion.div>

                {/* Ornamental Gold Floral Divider */}
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.45 }}
                  className="flex items-center justify-center gap-3 my-4 w-full max-w-xs"
                >
                  <span className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent to-[#F59E0B]" />
                  <span className="text-[#F59E0B] text-xs">✦ ❖ ✦</span>
                  <span className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent to-[#F59E0B]" />
                </motion.div>

                {/* Invitation Poetic Description */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="max-w-md mx-auto text-xs sm:text-sm font-sans text-[#44403C] leading-relaxed mb-6 font-medium"
                >
                  {invitationText}
                </motion.p>

                {/* Detail Typography (Date, Time, Location with Dot Separators) */}
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="w-full max-w-lg mx-auto bg-[#FEF9EE] border border-[#F59E0B]/40 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3"
                >
                  {/* Date & Time Row */}
                  <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm font-sans text-[#292524] tracking-wide font-semibold">
                    <div className="flex items-center gap-1.5 text-[#1C1917]">
                      <Calendar className="w-4 h-4 text-[#D97706]" />
                      <span>{date}</span>
                    </div>

                    <span className="text-[#FF4B91] font-bold">•</span>

                    <div className="flex items-center gap-1.5 text-[#1C1917]">
                      <Clock className="w-4 h-4 text-[#D97706]" />
                      <span>{time}</span>
                    </div>
                  </div>

                  {/* Location Row */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 text-xs sm:text-sm font-sans text-[#44403C]">
                    <div className="flex items-center gap-1.5 font-medium text-[#1C1917]">
                      <MapPin className="w-4 h-4 text-[#FF4B91] shrink-0" />
                      <span>{location}</span>
                    </div>
                    {address && (
                      <span className="text-[11px] text-[#78716C] font-normal">
                        ({address})
                      </span>
                    )}
                  </div>

                  {/* Dress Code Subtext Pill */}
                  <div className="pt-2 border-t border-[#F59E0B]/20 flex items-center justify-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] animate-pulse" />
                    <span className="text-xs uppercase tracking-wider font-sans font-bold text-[#B45309]">
                      Dress Code:
                    </span>
                    <span className="text-xs font-sans text-[#78350F] font-semibold italic">
                      {dressCode}
                    </span>
                  </div>
                </motion.div>

                {/* Magnetic CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 relative z-30"
                >
                  {/* Primary RSVP CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={handleRsvp}
                    className="relative group px-7 py-3 rounded-full overflow-hidden shadow-lg shadow-[#FF4B91]/30 transition-all font-sans text-xs sm:text-sm tracking-wider uppercase font-bold text-white"
                  >
                    {/* Rani Pink to Gold Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF4B91] via-[#E11D48] to-[#F59E0B] transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                    <span className="relative z-10 flex items-center gap-2">
                      {rsvpConfirmed ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>RSVP Confirmed</span>
                        </>
                      ) : (
                        <>
                          <Heart className="w-4 h-4 fill-white" />
                          <span>RSVP for this Event</span>
                        </>
                      )}
                    </span>
                  </motion.button>

                  {/* Secondary View Map CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleOpenMap}
                    className="px-6 py-3 rounded-full border-2 border-[#D97706] text-[#78350F] hover:bg-[#FEF3C7] transition-all font-sans text-xs sm:text-sm tracking-wider uppercase font-bold flex items-center gap-2 bg-[#FFFDF8]"
                  >
                    <MapPin className="w-4 h-4 text-[#D97706]" />
                    <span>View Location Map</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#B45309]" />
                  </motion.button>
                </motion.div>

                {/* Digital Confetti Burst Reaction */}
                <AnimatePresence>
                  {showConfetti && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none flex justify-center z-40"
                    >
                      <div className="px-6 py-3 rounded-2xl bg-black/85 text-amber-200 border border-gold-metallic text-xs sm:text-sm font-sans font-bold shadow-2xl flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#FFD700] animate-spin" />
                        <span>Auspicious blessings received! See you at the Haldi!</span>
                        <Sparkles className="w-4 h-4 text-[#FFD700] animate-spin" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* ========================================================= */}
              {/* 4. ILLUSTRATIVE BOTTOM FRINGE (FESTIVE ELEMENTS)          */}
              {/* ========================================================= */}
              <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-20 overflow-hidden h-36 sm:h-44 md:h-52">
                {/* 4.1 LEFT: CEREMONIAL CHHATRI UMBRELLA & HALDI URLI BOWL */}
                <motion.div
                  initial={{ opacity: 0, x: -35, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 left-0 w-36 sm:w-48 md:w-56 lg:w-64 h-full flex items-end justify-start pointer-events-none"
                >
                  <LeftChhatriAndUrli />
                </motion.div>

                {/* 4.2 RIGHT: BANANA LEAVES, CEREMONIAL CUSHIONS & DHOLAK DRUM */}
                <motion.div
                  initial={{ opacity: 0, x: 35, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 right-0 w-40 sm:w-52 md:w-60 lg:w-72 h-full flex items-end justify-end pointer-events-none"
                >
                  <RightBananaLeavesAndDholak />
                </motion.div>
              </div>

              {/* Interactive Specular Light Sheen Overlay */}
              <motion.div
                className="absolute inset-0 pointer-events-none z-30 bg-gradient-to-tr from-transparent via-white to-transparent"
                style={{ opacity: shineOpacity }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// =========================================================================
// VECTOR ILLUSTRATION SUB-COMPONENTS (HANDCRAFTED SVG WITH ANIMATIONS)
// =========================================================================

/**
 * Top Center: Delicate traditional Indian floral / marigold mandala icon
 */
export function TopMarigoldMandala() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="mandala-gold" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="60%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </radialGradient>
        <radialGradient id="mandala-pink" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF85B3" />
          <stop offset="100%" stopColor="#BE185D" />
        </radialGradient>
      </defs>

      {/* Outer Lotus Ring of 8 Petals */}
      <g stroke="#D97706" strokeWidth="1" fill="url(#mandala-gold)" fillOpacity="0.85">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <path
            key={deg}
            d="M 32 10 C 35 18, 38 22, 32 30 C 26 22, 29 18, 32 10 Z"
            transform={`rotate(${deg} 32 32)`}
          />
        ))}
      </g>

      {/* Inner Rani Pink Petal Star */}
      <g fill="url(#mandala-pink)">
        {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((deg) => (
          <circle key={deg} cx="32" cy="18" r="3.2" transform={`rotate(${deg} 32 32)`} />
        ))}
      </g>

      {/* Golden Center Core with Bindu */}
      <circle cx="32" cy="32" r="7" fill="#FEF08A" stroke="#B45309" strokeWidth="1.5" />
      <circle cx="32" cy="32" r="3" fill="#BE185D" />
    </svg>
  );
}

/**
 * Hanging Marigold & Mango Leaves Garland (Toran) across top
 */
export function HangingFloralToran() {
  return (
    <svg width="420" height="48" viewBox="0 0 420 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Curved Hanging Golden Thread */}
      <path
        d="M 10 6 Q 110 32, 210 6 Q 310 32, 410 6"
        stroke="#D97706"
        strokeWidth="1.5"
        strokeDasharray="4 2"
        fill="none"
      />

      {/* Alternating Marigold Flower Blossoms & Mango Leaves */}
      {[35, 75, 115, 155, 195, 225, 265, 305, 345, 385].map((x, idx) => {
        const isCenter = idx % 2 === 0;
        return (
          <g key={x} transform={`translate(${x}, ${12 + (idx % 3) * 2})`}>
            {/* Green Mango Leaf */}
            <path
              d="M 0 0 C 4 6, 6 16, 0 22 C -6 16, -4 6, 0 0 Z"
              fill={isCenter ? '#15803D' : '#166534'}
              opacity="0.9"
            />
            {/* Marigold Blossom */}
            <circle cx="0" cy="18" r="5.5" fill={isCenter ? '#F59E0B' : '#FFAA00'} />
            <circle cx="0" cy="18" r="3.5" fill="#FEF08A" />
            <circle cx="0" cy="18" r="1.5" fill="#DC2626" />
          </g>
        );
      })}
    </svg>
  );
}

/**
 * Ornate Scalloped Corner Ornaments for the Rani-Pink Frame
 */
export function CornerOrnaments() {
  return (
    <>
      {/* Top Left */}
      <div className="absolute top-2 left-2 w-8 h-8 pointer-events-none z-30">
        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-[#D4AF37]">
          <path d="M 4 4 L 28 4 C 18 4, 4 18, 4 28 Z" fill="#D4AF37" opacity="0.4" />
          <path d="M 2 2 L 18 2 M 2 2 L 2 18" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="8" cy="8" r="2.5" fill="#FF4B91" />
        </svg>
      </div>

      {/* Top Right */}
      <div className="absolute top-2 right-2 w-8 h-8 pointer-events-none z-30">
        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-[#D4AF37] rotate-90">
          <path d="M 4 4 L 28 4 C 18 4, 4 18, 4 28 Z" fill="#D4AF37" opacity="0.4" />
          <path d="M 2 2 L 18 2 M 2 2 L 2 18" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="8" cy="8" r="2.5" fill="#FF4B91" />
        </svg>
      </div>

      {/* Bottom Left */}
      <div className="absolute bottom-2 left-2 w-8 h-8 pointer-events-none z-30">
        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-[#D4AF37] -rotate-90">
          <path d="M 4 4 L 28 4 C 18 4, 4 18, 4 28 Z" fill="#D4AF37" opacity="0.4" />
          <path d="M 2 2 L 18 2 M 2 2 L 2 18" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="8" cy="8" r="2.5" fill="#FF4B91" />
        </svg>
      </div>

      {/* Bottom Right */}
      <div className="absolute bottom-2 right-2 w-8 h-8 pointer-events-none z-30">
        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full text-[#D4AF37] rotate-180">
          <path d="M 4 4 L 28 4 C 18 4, 4 18, 4 28 Z" fill="#D4AF37" opacity="0.4" />
          <path d="M 2 2 L 18 2 M 2 2 L 2 18" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="8" cy="8" r="2.5" fill="#FF4B91" />
        </svg>
      </div>
    </>
  );
}

/**
 * 4.1 LEFT ILLUSTRATION: Ceremonial Umbrella (Chhatri) with Swaying Tassels,
 * Golden Haldi Urli Bowl with Pestle, Raw Turmeric, and Banana Leaves.
 */
export function LeftChhatriAndUrli() {
  return (
    <svg
      viewBox="0 0 260 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-contain filter drop-shadow-[0_8px_14px_rgba(0,0,0,0.22)]"
    >
      <defs>
        {/* Brass Gold Gradient */}
        <linearGradient id="brass-urli" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2B2" />
          <stop offset="35%" stopColor="#F59E0B" />
          <stop offset="70%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>

        {/* Haldi Turmeric Paste Gradient */}
        <radialGradient id="haldi-paste-glow" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#FEF08A" />
          <stop offset="45%" stopColor="#FBBF24" />
          <stop offset="85%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#92400E" />
        </radialGradient>

        {/* Chhatri Umbrella Pink Fabric Gradient */}
        <linearGradient id="chhatri-pink" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF70A6" />
          <stop offset="70%" stopColor="#E11D48" />
          <stop offset="100%" stopColor="#9F1239" />
        </linearGradient>

        {/* Banana Leaf Green Gradient */}
        <linearGradient id="leaf-green" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ADE80" />
          <stop offset="50%" stopColor="#16A34A" />
          <stop offset="100%" stopColor="#14532D" />
        </linearGradient>
      </defs>

      {/* --- BROAD GREEN BANANA LEAF UNDERLAY --- */}
      <path
        d="M 5 205 C 15 160, 50 145, 110 165 C 130 172, 140 190, 150 205 Z"
        fill="url(#leaf-green)"
        opacity="0.95"
      />
      <path
        d="M 10 200 C 45 170, 85 165, 130 185"
        stroke="#86EFAC"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.8"
      />

      {/* --- CEREMONIAL CHHATRI (UMBRELLA) ON THE LEFT --- */}
      <g transform="translate(18, 12)">
        {/* Slender Golden Umbrella Pole */}
        <line x1="68" y1="50" x2="68" y2="175" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" />
        <line x1="69" y1="50" x2="69" y2="175" stroke="#FEF08A" strokeWidth="1" opacity="0.8" />

        {/* Golden Kalash Spire / Finial at Top */}
        <path d="M 68 2 L 72 12 L 64 12 Z" fill="#FFD700" stroke="#B45309" strokeWidth="0.8" />
        <circle cx="68" cy="14" r="4.5" fill="#FFD700" stroke="#B45309" strokeWidth="0.8" />
        <circle cx="68" cy="14" r="2" fill="#E11D48" />

        {/* Umbrella Domed Canopy (Rani Pink & Cream Scallops) */}
        <path
          d="M 12 50 C 22 24, 48 16, 68 16 C 88 16, 114 24, 124 50 C 108 52, 94 46, 80 50 C 68 47, 56 47, 44 50 C 30 46, 18 52, 12 50 Z"
          fill="url(#chhatri-pink)"
          stroke="#D4AF37"
          strokeWidth="1.5"
        />

        {/* Interior Gold Piping Ribs on Canopy */}
        <path d="M 68 16 C 62 28, 48 38, 44 50" stroke="#FEF08A" strokeWidth="1.2" opacity="0.85" />
        <path d="M 68 16 C 74 28, 88 38, 92 50" stroke="#FEF08A" strokeWidth="1.2" opacity="0.85" />

        {/* Decorative Scalloped Fringe Rim */}
        <path
          d="M 12 50 Q 20 56, 28 50 Q 36 56, 44 50 Q 52 56, 60 50 Q 68 56, 76 50 Q 84 56, 92 50 Q 100 56, 108 50 Q 116 56, 124 50"
          stroke="#FFD700"
          strokeWidth="2"
          fill="none"
        />

        {/* INFINITE SWAYING GOLDEN TASSELS & PEARLS */}
        {[
          { x: 20, delay: 0 },
          { x: 36, delay: 0.25 },
          { x: 52, delay: 0.5 },
          { x: 68, delay: 0.1 },
          { x: 84, delay: 0.35 },
          { x: 100, delay: 0.6 },
          { x: 116, delay: 0.2 },
        ].map((tassel, i) => (
          <motion.g
            key={i}
            transform={`translate(${tassel.x}, 52)`}
            animate={{ rotate: [-6, 6, -6] }}
            transition={{
              duration: 2.2 + (i % 3) * 0.3,
              delay: tassel.delay,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatType: 'mirror',
            }}
            style={{ transformOrigin: 'top center' }}
          >
            {/* Tassel String */}
            <line x1="0" y1="0" x2="0" y2="14" stroke="#D4AF37" strokeWidth="1.2" />
            {/* White Pearl Drop */}
            <circle cx="0" cy="5" r="1.5" fill="#FFFDF8" />
            {/* Golden Cone Tassel Bell */}
            <path d="M -3 14 L 3 14 L 0 20 Z" fill="#FFD700" stroke="#B45309" strokeWidth="0.6" />
            <circle cx="0" cy="21" r="1.2" fill="#E11D48" />
          </motion.g>
        ))}
      </g>

      {/* --- TRADITIONAL BRASS URLI BOWL WITH TURMERIC PASTE --- */}
      <g transform="translate(65, 125)">
        {/* Brass Urli Bowl Shadow */}
        <ellipse cx="65" cy="65" rx="58" ry="12" fill="#000000" opacity="0.25" />

        {/* Marigold Garland surrounding Bowl Base */}
        <g opacity="0.95">
          {[-45, -30, -15, 0, 15, 30, 45].map((off, idx) => (
            <circle
              key={idx}
              cx={65 + off}
              cy="62"
              r="7"
              fill={idx % 2 === 0 ? '#F59E0B' : '#FFAA00'}
              stroke="#D97706"
              strokeWidth="0.8"
            />
          ))}
        </g>

        {/* Outer Brass Urli Bowl Body */}
        <path
          d="M 12 40 C 12 70, 118 70, 118 40 C 118 36, 12 36, 12 40 Z"
          fill="url(#brass-urli)"
          stroke="#78350F"
          strokeWidth="1.5"
        />

        {/* Urli Brass Handles (Traditional Ring Handles) */}
        <path d="M 12 42 C 4 40, 4 52, 12 50" stroke="#FFD700" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 118 42 C 126 40, 126 52, 118 50" stroke="#FFD700" strokeWidth="3" fill="none" strokeLinecap="round" />

        {/* Urli Rim Lip */}
        <ellipse cx="65" cy="38" rx="54" ry="11" fill="#D4AF37" stroke="#78350F" strokeWidth="1.2" />

        {/* Auspicious Heap of Glowing Turmeric (Haldi) Paste */}
        <ellipse cx="65" cy="36" rx="46" ry="9" fill="url(#haldi-paste-glow)" />
        <path
          d="M 32 35 C 42 22, 54 18, 65 18 C 76 18, 88 22, 98 35 Z"
          fill="url(#haldi-paste-glow)"
        />
        {/* Luminous Turmeric Highlight Sparkle */}
        <circle cx="60" cy="24" r="3" fill="#FEF08A" opacity="0.8" />
        <circle cx="68" cy="27" r="1.5" fill="#FFFFFF" opacity="0.9" />

        {/* Floating Rose & Jasmine Petals in Haldi Bowl */}
        <ellipse cx="50" cy="34" rx="4" ry="2" fill="#BE123C" transform="rotate(-15 50 34)" />
        <ellipse cx="78" cy="32" rx="4" ry="2" fill="#E11D48" transform="rotate(20 78 32)" />
        <circle cx="64" cy="36" r="2" fill="#FFFDF8" />

        {/* Traditional Wooden / Brass Pestle resting on Rim */}
        <g transform="translate(48, 8) rotate(-35)">
          <rect x="0" y="0" width="10" height="42" rx="5" fill="#78350F" stroke="#D4AF37" strokeWidth="1" />
          <ellipse cx="5" cy="4" rx="4" ry="2" fill="#D97706" />
        </g>

        {/* Raw Turmeric Rhizome Knobs (Gathiya Haldi) beside bowl */}
        <g transform="translate(10, 52)">
          <path d="M 0 6 C 4 2, 12 0, 16 4 C 18 8, 12 12, 6 10 Z" fill="#D97706" stroke="#78350F" strokeWidth="0.8" />
          <path d="M 12 8 C 16 6, 22 8, 20 12 C 16 14, 12 12, 12 8 Z" fill="#F59E0B" stroke="#78350F" strokeWidth="0.8" />
        </g>
      </g>
    </svg>
  );
}

/**
 * 4.2 RIGHT ILLUSTRATION: Lush Upright Green Banana Leaves (Wind-Rustle Animation),
 * Rani-Pink Ceremonial Bolster Cushion, and Traditional Indian Dholak Drum with Marigolds.
 */
export function RightBananaLeavesAndDholak() {
  return (
    <svg
      viewBox="0 0 280 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full object-contain filter drop-shadow-[0_8px_14px_rgba(0,0,0,0.22)]"
    >
      <defs>
        {/* Dholak Wood Barrel Gradient */}
        <linearGradient id="dhol-wood" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9A3412" />
          <stop offset="35%" stopColor="#C2410C" />
          <stop offset="70%" stopColor="#7C2D12" />
          <stop offset="100%" stopColor="#431407" />
        </linearGradient>

        {/* Dholak Skin Drumhead Gradient */}
        <radialGradient id="dhol-skin" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1C1917" />
          <stop offset="45%" stopColor="#292524" />
          <stop offset="85%" stopColor="#D6D3D1" />
          <stop offset="100%" stopColor="#A8A29E" />
        </radialGradient>

        {/* Bolster Silk Cushion Gradient */}
        <linearGradient id="bolster-silk" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF6B9E" />
          <stop offset="40%" stopColor="#E11D48" />
          <stop offset="80%" stopColor="#9F1239" />
          <stop offset="100%" stopColor="#4C0519" />
        </linearGradient>

        {/* Banana Leaf Vibrant Green Gradient */}
        <linearGradient id="banana-leaf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#86EFAC" />
          <stop offset="45%" stopColor="#22C55E" />
          <stop offset="85%" stopColor="#15803D" />
          <stop offset="100%" stopColor="#14532D" />
        </linearGradient>
      </defs>

      {/* --- LUSH UPRIGHT GREEN BANANA LEAVES (WITH GENTLE WIND-RUSTLE MOTION) --- */}
      <motion.g
        animate={{ rotate: [-2.5, 3, -2.5], skewX: [-1.2, 1.2, -1.2] }}
        transition={{
          duration: 5.2,
          repeat: Infinity,
          ease: 'easeInOut',
          repeatType: 'mirror',
        }}
        style={{ transformOrigin: 'bottom center' }}
        transform="translate(145, 10)"
      >
        {/* Tall Main Arching Banana Leaf */}
        <path
          d="M 50 170 C 50 100, 30 40, 10 10 C 35 15, 65 30, 80 65 C 95 100, 75 140, 50 170 Z"
          fill="url(#banana-leaf-grad)"
          stroke="#166534"
          strokeWidth="1.2"
        />
        {/* Central Vein Rib */}
        <path d="M 50 170 C 46 120, 32 60, 10 10" stroke="#DCFCE7" strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
        {/* Leaf blade lateral veins */}
        <path d="M 38 75 Q 55 68, 72 74" stroke="#BBF7D0" strokeWidth="1" opacity="0.6" />
        <path d="M 43 105 Q 60 98, 76 106" stroke="#BBF7D0" strokeWidth="1" opacity="0.6" />

        {/* Secondary Supporting Banana Leaf (Right Arch) */}
        <path
          d="M 55 170 C 65 115, 80 65, 110 35 C 105 60, 112 95, 95 130 C 80 155, 68 165, 55 170 Z"
          fill="url(#banana-leaf-grad)"
          opacity="0.9"
        />
        <path d="M 55 170 C 72 125, 88 80, 110 35" stroke="#DCFCE7" strokeWidth="2" opacity="0.8" />
      </motion.g>

      {/* --- CEREMONIAL SILK BOLSTER CUSHION (GAO-TAKIYA) --- */}
      <g transform="translate(10, 105)">
        {/* Bolster Base Drop Shadow */}
        <ellipse cx="65" cy="80" rx="52" ry="10" fill="#000000" opacity="0.25" />

        {/* Cylindrical Bolster Body in Rani-Pink Silk */}
        <rect
          x="18"
          y="35"
          width="90"
          height="40"
          rx="12"
          fill="url(#bolster-silk)"
          stroke="#9F1239"
          strokeWidth="1.2"
        />

        {/* Gold Brocade Zari Bands on Bolster */}
        <rect x="36" y="35" width="10" height="40" fill="#F59E0B" stroke="#D4AF37" strokeWidth="0.8" />
        <line x1="41" y1="35" x2="41" y2="75" stroke="#FEF08A" strokeWidth="1.5" strokeDasharray="3 2" />

        <rect x="80" y="35" width="10" height="40" fill="#F59E0B" stroke="#D4AF37" strokeWidth="0.8" />
        <line x1="85" y1="35" x2="85" y2="75" stroke="#FEF08A" strokeWidth="1.5" strokeDasharray="3 2" />

        {/* Bolster Gathered End Cap (Left) with Gold Rosette */}
        <ellipse cx="20" cy="55" rx="9" ry="19" fill="#BE185D" stroke="#D4AF37" strokeWidth="1.5" />
        <circle cx="16" cy="55" r="4.5" fill="#FFD700" stroke="#78350F" strokeWidth="0.8" />
        {/* Hanging End Tassels */}
        <path d="M 12 55 C 6 58, 4 64, 2 70" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="2" cy="71" r="2" fill="#E11D48" />
      </g>

      {/* --- TRADITIONAL INDIAN DHOLAK DRUM WITH MARIGOLDS --- */}
      <g transform="translate(85, 95)">
        {/* Drum Drop Shadow */}
        <ellipse cx="80" cy="90" rx="60" ry="12" fill="#000000" opacity="0.3" />

        {/* Wooden Barrel Body of Dholak */}
        <path
          d="M 28 32 C 60 18, 105 18, 136 32 L 138 72 C 105 88, 60 88, 28 72 Z"
          fill="url(#dhol-wood)"
          stroke="#431407"
          strokeWidth="1.5"
        />

        {/* Brass Ring Tuning Bands around Barrel */}
        <path d="M 44 26 C 54 52, 54 56, 44 80" stroke="#D4AF37" strokeWidth="2.5" fill="none" opacity="0.8" />
        <path d="M 120 26 C 110 52, 110 56, 120 80" stroke="#D4AF37" strokeWidth="2.5" fill="none" opacity="0.8" />

        {/* Woven Cross-Lacing Chords (Ropes) */}
        <path
          d="M 28 32 L 68 84 L 105 22 L 136 72 M 28 72 L 68 20 L 105 84 L 136 32"
          stroke="#FFFDF8"
          strokeWidth="1.2"
          opacity="0.75"
        />

        {/* Left Drumhead (Leather Skin with Brass Rim) */}
        <ellipse cx="28" cy="52" rx="10" ry="20" fill="url(#dhol-skin)" stroke="#D4AF37" strokeWidth="2" />
        <circle cx="28" cy="52" r="5" fill="#1C1917" />

        {/* Right Drumhead */}
        <ellipse cx="136" cy="52" rx="9" ry="19" fill="url(#dhol-skin)" stroke="#D4AF37" strokeWidth="2" />

        {/* Garland of Fresh Marigolds draped across Dholak */}
        <g>
          {[
            { cx: 48, cy: 38 },
            { cx: 64, cy: 46 },
            { cx: 80, cy: 52 },
            { cx: 98, cy: 46 },
            { cx: 114, cy: 38 },
          ].map((flower, idx) => (
            <g key={idx}>
              <circle cx={flower.cx} cy={flower.cy} r="6.5" fill={idx % 2 === 0 ? '#F59E0B' : '#FFAA00'} stroke="#D97706" strokeWidth="0.8" />
              <circle cx={flower.cx} cy={flower.cy} r="3" fill="#FEF08A" />
            </g>
          ))}
        </g>

        {/* Crossed Traditional Wooden Drumsticks (Dagga & Thappi) */}
        <g transform="translate(70, 20)">
          {/* Curved Curved Bass Stick (Dagga) */}
          <path d="M -15 65 L 45 -5 C 48 -8, 52 -6, 50 -2 L -10 70 Z" fill="#78350F" stroke="#FEF08A" strokeWidth="0.6" />
          <ellipse cx="48" cy="-4" rx="4" ry="3" fill="#D97706" />

          {/* Straight Treble Stick (Thappi) */}
          <path d="M 45 68 L -15 -2 C -18 -4, -16 -8, -12 -6 L 50 62 Z" fill="#92400E" stroke="#FEF08A" strokeWidth="0.6" />
        </g>
      </g>
    </svg>
  );
}

