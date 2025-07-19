'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section id = "about" className="relative bg-black text-white py-24 px-6 sm:px-10 md:px-16 overflow-hidden">
      {/* Glowing background accent */}
      <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] bg-[#FFD700]/10 blur-3xl rounded-full z-0" />

      {/* Title Animations */}
      <div className="relative z-10 mb-16 space-y-3 text-center font-extrabold text-4xl sm:text-5xl">
        <motion.h2
          initial={{ opacity: 0, y: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="text-[#FFD700] drop-shadow-md">We’re Bold.</span>
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5, type: 'spring', bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="text-[#FFD700] drop-shadow-md">We’re Crafty.</span>
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0, type: 'spring', bounce: 0.4 }}
          viewport={{ once: true }}
        >
          <span className="bg-gradient-to-r from-[#FFD700] via-[#fff7c2] to-[#FFD700] text-transparent bg-clip-text drop-shadow-md">
            We’re Prime Crafters.
          </span>
        </motion.h2>
      </div>

      {/* 3D Card Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-[#FFD700]/20 rounded-3xl p-8 sm:p-12 shadow-[0_25px_60px_rgba(255,215,0,0.08)] backdrop-blur-md z-10"
      >
        <div className="space-y-6 text-lg leading-relaxed text-[#F3F3F3] text-center">
          <p className="text-xl sm:text-2xl font-semibold text-[#FFD700]">
          "Your breakthrough moment is one click away."

          </p>
          <p>
            At <span className="font-bold text-white">Prime Crafters</span>,we don't just build digital products, we create experiences that stop scrolls, spark conversations, and turn visitors into raving fans. Ready to dominate your space? We're the team that makes it happen.
          </p>
          <p>
          <span className="font-bold text-white">What makes us different?</span> We combine razor-sharp strategy with jaw-dropping design and code that actually works. No cookie-cutter solutions. No "maybe next quarter" timelines. Just results that make your competition nervous.
          </p>
          <p>
          <span className="font-bold text-white">The bottom line:</span> Your success is our obsession. From startups ready to disrupt to established brands craving reinvention, we craft digital experiences that don't just meet expectations, they shatter them.
          </p>
        </div>

        <div className="mt-10 text-center">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="bg-[#1E90FF] text-black hover:bg-[#e6c200] px-8 py-3 rounded-full text-lg font-semibold shadow-lg transition-all duration-300"
          >
            Let’s Create Magic ✨
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
