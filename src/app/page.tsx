'use client';

import React from 'react';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Timeline from '@/components/Timeline';
import Gallery from '@/components/Gallery';
import RSVP from '@/components/RSVP';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-ivory">
      {/* SVG Path Monogram Preloader with Curtain Reveal */}
      <Preloader />

      {/* Floating Glassmorphism Navbar with Audio & Mobile Drawer */}
      <Navbar />

      {/* Cinematic Ken Burns Hero Section */}
      <Hero />

      {/* Editorial Sticky Split Story with Parallax */}
      <Story />

      {/* Scroll-Drawn Gold Line Timeline Itinerary */}
      <Timeline />

      {/* Expansive Itinerary Showcase is the core centerpiece; Venue section removed */}

      {/* Masonry Editorial Gallery with Lightbox */}
      <Gallery />

      {/* Interactive Floating Card RSVP with Confetti & Spring Physics */}
      <RSVP />

      {/* Monogram Footer & Wishing Well */}
      <Footer />
    </main>
  );
}

