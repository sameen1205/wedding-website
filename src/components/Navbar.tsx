'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { weddingDetails, getTierConfig } from '@/data/weddingData';

function NavbarContent() {
  const searchParams = useSearchParams();
  const tierConfig = getTierConfig(searchParams.get('tier'));
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { label: 'Our Story', href: '#story', isFeatured: false },
    { label: 'The Grand Itinerary', href: '#itinerary', isFeatured: true },
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
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 bg-[#240612]/85 backdrop-blur-md border-b border-[#D4AF37]/20 text-[#F3F4F6] ${
          isScrolled ? 'py-3 shadow-[0_8px_32px_rgba(0,0,0,0.65)]' : 'py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo / Golden "SA" Monogram & Couple Names */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group flex items-center gap-3 sm:gap-3.5 text-left focus:outline-none"
          >
            <img
              src="/images/monogram.png"
              alt="SA Golden Monogram"
              className="h-10 sm:h-12 w-auto object-contain select-none drop-shadow-[0_0_12px_rgba(212,175,55,0.4)] transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-serif text-base sm:text-xl tracking-[0.22em] uppercase font-normal text-[#F5E6C8] group-hover:text-[#D4AF37] transition-colors">
              {weddingDetails.couple.groom} &amp; {weddingDetails.couple.bride}
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-9">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className={`relative text-xs tracking-widest uppercase font-sans transition-all duration-300 py-1.5 flex items-center gap-1.5 ${
                  link.isFeatured
                    ? 'text-[#F5E6C8] font-semibold px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 shadow-sm hover:bg-[#D4AF37]/25 hover:text-[#E5C07B]'
                    : 'text-[#F3F4F6] hover:text-[#E5C07B]'
                }`}
              >
                {link.isFeatured && <Sparkles className="w-3 h-3 text-[#D4AF37] animate-pulse" />}
                <span>{link.label}</span>
              </button>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3.5">
            {/* High-Contrast Gold RSVP Button */}
            <button
              onClick={() => handleLinkClick('#rsvp')}
              className="hidden sm:inline-flex items-center px-5 py-2 rounded-full text-xs tracking-widest uppercase font-sans bg-[#D4AF37] text-black font-semibold hover:bg-[#F3E5AB] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:scale-105"
            >
              RSVP
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="md:hidden p-2 rounded-full focus:outline-none text-[#F3F4F6] hover:text-[#E5C07B] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Royal Burgundy & Gold Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-gradient-to-b from-[#240612] via-[#36091E] to-[#1F030E] flex flex-col justify-between px-8 py-10 md:hidden text-[#F3F4F6]"
          >
            {/* Ambient Gold Radial Vignette */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
              }}
            />

            {/* Top Bar */}
            <div className="relative z-10 flex items-center justify-between border-b border-[#D4AF37]/25 pb-4">
              <div className="flex items-center gap-3">
                <img
                  src="/images/monogram.png"
                  alt="SA Golden Monogram"
                  className="h-10 w-auto object-contain select-none drop-shadow-[0_0_10px_rgba(212,175,55,0.35)]"
                />
                <span className="text-xs text-[#E2C799] font-sans tracking-widest uppercase font-semibold">
                  ✦ Bangalore 2026
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#F3F4F6] hover:text-[#E5C07B] transition-colors"
                aria-label="Close menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="relative z-10 flex flex-col space-y-6 my-auto">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.08, duration: 0.5 }}
                >
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="font-serif text-3xl sm:text-4xl text-[#F3F4F6] hover:text-[#E5C07B] transition-colors duration-300 tracking-wide text-left flex items-center justify-between w-full group"
                  >
                    <span className={link.isFeatured ? 'text-[#F5E6C8] font-medium' : ''}>
                      {link.label}
                    </span>
                    <span className="font-sans text-xs tracking-widest text-[#E2C799] opacity-70 group-hover:opacity-100">
                      0{index + 1}
                    </span>
                  </button>
                </motion.div>
              ))}
            </nav>

            {/* Bottom Info */}
            <div className="relative z-10 border-t border-[#D4AF37]/25 pt-6 flex flex-col gap-2 text-[#E2C799] font-sans text-xs tracking-widest uppercase">
              <p className="text-[#F5E6C8] font-semibold">{tierConfig.dateDisplay}</p>
              <p className="text-[#F3F4F6]">{tierConfig.locationDisplay}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function Navbar() {
  return (
    <Suspense fallback={null}>
      <NavbarContent />
    </Suspense>
  );
}
