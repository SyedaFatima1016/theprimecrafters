'use client';

import { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const setCanvasSize = () => {
      // For high-DPI screens
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset any existing transform
      ctx.scale(dpr, dpr);
    };

    setCanvasSize();

    const particles = [];
    const particleCount = 120;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 1.5 + 0.5,
        speed: Math.random() * 0.8 + 0.2,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.fillStyle = '#FFD700';

      particles.forEach((p) => {
        p.y += p.speed;
        if (p.y > window.innerHeight) {
          p.y = 0;
          p.x = Math.random() * window.innerWidth;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', setCanvasSize);
    return () => window.removeEventListener('resize', setCanvasSize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
