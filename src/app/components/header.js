'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoPopup, setLogoPopup] = useState(false);

  useEffect(() => {
    let timer;
    if (logoPopup) {
      timer = setTimeout(() => setLogoPopup(false), 5000);
    }
    return () => clearTimeout(timer);
  }, [logoPopup]);

  return (
    <>
      {/* Header Bar */}
      <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] border border-[#FFD700]/20 backdrop-blur-md shadow-[0_10px_30px_rgba(255,215,0,0.08)] px-8 sm:px-12 py-6 rounded-full flex items-center justify-between w-[95%] max-w-5xl">
        {/* Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => setLogoPopup(true)}
        >
          <Image
            src="/images/Prime_crafters_logo-removebg-preview.png"
            alt="Prime Crafters Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm sm:text-base text-white">
          <a href="#hero" className="hover:text-[#FFD700] transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-[#FFD700] transition-colors duration-300">About Us</a>
          <a href="#services" className="hover:text-[#FFD700] transition-colors duration-300">Services</a>
          <a href="#contact" className="hover:text-[#FFD700] transition-colors duration-300">Contact Us</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 bg-[#0f0f0f] w-full max-w-xs rounded-xl shadow-lg border border-[#FFD700]/20 text-white flex flex-col items-center py-4 space-y-4 z-50">
            <a onClick={() => setMenuOpen(false)} href="#hero" className="hover:text-[#FFD700]">Home</a>
            <a onClick={() => setMenuOpen(false)} href="#about" className="hover:text-[#FFD700]">About Us</a>
            <a onClick={() => setMenuOpen(false)} href="#services" className="hover:text-[#FFD700]">Services</a>
            <a onClick={() => setMenuOpen(false)} href="#contact" className="hover:text-[#FFD700]">Contact Us</a>
          </div>
        )}
      </header>

      {/* Animated Popup Logo with Glow and Sparkles */}
      <AnimatePresence>
        {logoPopup && (
          <>
            {/* Blurred Background */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLogoPopup(false)}
            />

            {/* Enlarged Logo Container */}
            <motion.div
              className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {/* Sparkle Animation */}
              <div className="absolute w-72 h-72 bg-[#FFD700]/20 blur-3xl rounded-full animate-pulse" />

              {/* Enlarged Logo */}
              <Image
                src="/images/Prime_crafters_logo-removebg-preview.png"
                alt="Prime Crafters Full Logo"
                width={240}
                height={240}
                className="drop-shadow-[0_8px_24px_rgba(255,215,0,0.4)]"
              />

              {/* Optional Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-4 text-white font-semibold text-lg"
              >
                Fetching Great Ideas, For you...
              </motion.p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}