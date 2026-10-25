'use client';

import React, { Suspense } from 'react';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Story from '@/components/Story';
import Timeline from '@/components/Timeline';
import RSVP from '@/components/RSVP';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#240612] text-[#F3F4F6]">
      {/* SVG Path Monogram Preloader with Curtain Reveal */}
      <Suspense fallback={null}>
        <Preloader />
      </Suspense>

      {/* Floating Glassmorphism Navbar with Mobile Drawer */}
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>

      {/* Cinematic Ken Burns Hero Section */}
      <Suspense fallback={<div>Loading celebrations...</div>}>
        <Hero />
      </Suspense>

      {/* Editorial Sticky Split Story with Parallax */}
      <Story />

      {/* Scroll-Drawn Gold Line Timeline Itinerary */}
      <Suspense fallback={<div>Loading celebrations...</div>}>
        <Timeline />
      </Suspense>

      {/* Interactive Floating Card RSVP with Confetti & Spring Physics */}
      <Suspense fallback={<div>Loading celebrations...</div>}>
        <RSVP />
      </Suspense>

      {/* Monogram Footer & Wishing Well */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </main>
  );
}
