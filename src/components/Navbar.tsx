'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, Sparkles } from 'lucide-react';
import { weddingDetails } from '@/data/weddingData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  };

  const navLinks = [
    { label: 'Our Story', href: '#story', isFeatured: false },
    { label: 'The Grand Itinerary', href: '#itinerary', isFeatured: true },
    { label: 'Festive Gallery', href: '#gallery', isFeatured: false },
    { label: 'RSVP', href: '#rsvp', isFeatured: false },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      if ((window as unknown as { lenis?: { scrollTo: (target: Element, opts: { offset: number }) => void } }).lenis) {
        (window as unknown as { lenis: { scrollTo: (target: Element, opts: { offset: number }) => void } }).lenis.scrollTo(element, { offset: -60 });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={weddingDetails.hero.ambientAudioUrl}
        loop
        preload="none"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
          isScrolled
            ? 'py-3.5 bg-crimson-deep/90 backdrop-blur-md border-b border-gold/30 shadow-lg text-ivory'
            : 'py-6 bg-gradient-to-b from-black/60 via-black/20 to-transparent text-ivory'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-2.5 text-left focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full border border-gold/50 flex items-center justify-center bg-gold/10">
              <span className="font-serif text-xs font-bold text-gold-metallic">
                {weddingDetails.couple.monogram}
              </span>
            </div>
            <span className="font-serif text-xl sm:text-2xl tracking-widest font-light text-ivory">
              {weddingDetails.couple.groom}
              <span className="text-gold-metallic font-script text-2xl sm:text-3xl mx-1.5">&</span>
              {weddingDetails.couple.bride}
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-9">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className={`relative text-xs tracking-luxury uppercase font-sans transition-all duration-300 py-1.5 flex items-center gap-1.5 ${
                  link.isFeatured
                    ? 'text-gold-metallic font-semibold px-3 py-1 rounded-full bg-gold/15 border border-gold/40 shadow-sm hover:bg-gold/25'
                    : 'text-ivory/90 hover:text-gold-metallic'
                }`}
              >
                {link.isFeatured && <Sparkles className="w-3 h-3 text-gold-metallic animate-pulse" />}
                <span>{link.label}</span>
                {!link.isFeatured && (
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-metallic transition-all duration-300 group-hover:w-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3.5">
            {/* Shehnai / Music Audio Toggle */}
            <button
              onClick={toggleAudio}
              aria-label={isPlaying ? 'Mute royal celebration music' : 'Play royal celebration music'}
              title={isPlaying ? 'Mute celebration music' : 'Play festive instrumental melody'}
              className={`flex items-center gap-2 p-2 rounded-full border transition-all duration-300 ${
                isPlaying
                  ? 'bg-gold-metallic text-charcoal border-gold-metallic font-medium'
                  : 'border-white/30 text-ivory hover:border-gold hover:text-gold-metallic'
              }`}
            >
              {isPlaying ? (
                <div className="flex items-center gap-1.5 px-2">
                  <Volume2 className="w-3.5 h-3.5 text-charcoal animate-pulse" />
                  <span className="hidden lg:inline text-[10px] tracking-widest uppercase font-sans font-bold">
                    Music On
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 px-2">
                  <VolumeX className="w-3.5 h-3.5 opacity-80" />
                  <span className="hidden lg:inline text-[10px] tracking-widest uppercase font-sans opacity-90">
                    Sitar Melody
                  </span>
                </div>
              )}
            </button>

            {/* Quick RSVP CTA Button */}
            <button
              onClick={() => handleLinkClick('#rsvp')}
              className="hidden sm:inline-flex items-center px-5 py-2 rounded-full text-xs tracking-widest uppercase font-sans font-bold transition-all duration-500 bg-gradient-to-r from-gold-metallic via-amber-400 to-gold-antique text-charcoal shadow-md hover:shadow-gold/30 hover:scale-105"
            >
              RSVP
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="md:hidden p-2 rounded-full focus:outline-none text-ivory hover:text-gold transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Sleek Royal Indian Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-gradient-to-b from-crimson-deep via-[#2A0410] to-royalvelvet-deep flex flex-col justify-between px-8 py-10 md:hidden bg-banarasi-pattern text-ivory"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-gold/30 pb-4">
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl tracking-widest text-gold-metallic">
                  {weddingDetails.couple.monogram}
                </span>
                <span className="text-xs text-amber-200/80 font-sans tracking-luxury uppercase">
                  ✦ Udaipur 2026
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-ivory hover:text-gold-metallic transition-colors"
                aria-label="Close menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-6 my-auto">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
                >
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="font-serif text-3xl sm:text-4xl text-ivory hover:text-gold-metallic transition-colors duration-300 tracking-wide text-left flex items-center justify-between w-full group"
                  >
                    <span className={link.isFeatured ? 'text-gold-metallic font-medium' : ''}>
                      {link.label}
                    </span>
                    <span className="font-sans text-xs tracking-widest text-gold-metallic opacity-60 group-hover:opacity-100">
                      0{index + 1}
                    </span>
                  </button>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Info */}
            <div className="border-t border-gold/30 pt-6 flex flex-col gap-2 text-amber-100/80 font-sans text-xs tracking-widest uppercase">
              <p className="text-gold-metallic font-medium">{weddingDetails.date.formatted}</p>
              <p>{weddingDetails.location.venue} • {weddingDetails.location.city}, {weddingDetails.location.state}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
