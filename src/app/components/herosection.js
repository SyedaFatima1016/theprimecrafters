'use client';

import React from 'react';
import ParticlesBackground from './particles';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-[#000000] text-white min-h-screen flex items-center justify-center overflow-hidden px-6 sm:px-8 md:px-12 py-24 sm:py-36"
    >
      <ParticlesBackground />

      <div className="relative z-10 text-center max-w-3xl space-y-6 sm:space-y-8 mt-12 sm:mt-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
        Your Digital Success Story <br />
          <span className="text-[#FFD700]"> Starts Here</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-[#F3F3F3] leading-relaxed">
        We're Prime Crafters, the creative powerhouse behind game-changing digital products. From stunning design to seamless development, we turn your boldest ideas into profit-driving realities.
        </p>

        <div className="pt-4">
          <button className="bg-[#1E90FF] hover:bg-[#e6c200] text-[#000000] px-8 py-3 rounded-2xl text-lg font-semibold shadow-lg transition-transform duration-300 hover:scale-105">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
