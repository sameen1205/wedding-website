'use client';

import React, { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  type: 'marigold' | 'rose' | 'jasmine' | 'zari';
}

export default function FloatingPetals() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Vibrant Indian Wedding Flora & Zari palette
    const petalPalette = [
      { color: 'rgba(245, 158, 11, 0.75)', type: 'marigold' as const }, // Marigold orange
      { color: 'rgba(251, 191, 36, 0.85)', type: 'marigold' as const }, // Haldi yellow
      { color: 'rgba(190, 18, 60, 0.7)', type: 'rose' as const },       // Gulabi red rose
      { color: 'rgba(255, 253, 249, 0.75)', type: 'jasmine' as const },  // Mogra jasmine
      { color: 'rgba(255, 215, 0, 0.65)', type: 'zari' as const },      // Zari gold sparkle
    ];

    const petalCount = Math.min(28, Math.floor(window.innerWidth / 50));
    const petals: Petal[] = [];

    for (let i = 0; i < petalCount; i++) {
      const selected = petalPalette[Math.floor(Math.random() * petalPalette.length)];
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: selected.type === 'zari' ? Math.random() * 4 + 2 : Math.random() * 9 + 7,
        speedY: Math.random() * 0.8 + 0.4,
        speedX: (Math.random() - 0.5) * 0.6,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.2,
        opacity: Math.random() * 0.4 + 0.45,
        color: selected.color,
        type: selected.type,
      });
    }

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;

      if (p.type === 'zari') {
        // Sparkling 4-point gold star dust
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Curved petal silhouette
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size, 0, p.size, p.size / 2);
        ctx.bezierCurveTo(p.size, p.size, 0, p.size * 1.3, 0, p.size);
        ctx.bezierCurveTo(0, p.size * 1.3, -p.size, p.size, -p.size, p.size / 2);
        ctx.bezierCurveTo(-p.size, 0, -p.size / 2, -p.size / 2, 0, 0);
        ctx.fill();
      }

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.006) * 0.5;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        drawPetal(p);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20 w-full h-full"
      style={{ opacity: 0.9 }}
    />
  );
}
