

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative bg-black text-white py-20 px-6 sm:px-10 md:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Left Side: Enhanced Modern Info with 3D flair */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-[#0A0A0A] via-[#111111] to-[#1A1A1A] p-10 rounded-3xl shadow-[0_25px_60px_rgba(255,215,0,0.08)] border border-[#FFD700]/10 backdrop-blur-xl"
        >
          <h3 className="text-4xl font-extrabold mb-5 leading-snug tracking-tight">
            We don’t just design.<br />
            <span className="text-[#FFD700]">We Craft Digital Magic.</span>
          </h3>
          <p className="text-[#CCCCCC] text-base mb-6 max-w-md">
            Prime Crafters blends strategy, creativity, and code to bring next-gen solutions to life. Ready to build the future with you.
          </p>

          <div className="grid grid-cols-2 gap-4 text-[#BBBBBB] text-sm">
            <span className="hover:text-[#FFD700] transition duration-300">🔧 Full-Stack Builds</span>
            <span className="hover:text-[#FFD700] transition duration-300">🧠 AI-Powered Apps</span>
            <span className="hover:text-[#FFD700] transition duration-300">📱 Mobile-First Design</span>
            <span className="hover:text-[#FFD700] transition duration-300">💡 Brand Strategy</span>
          </div>

          {/* Email with animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 text-sm text-[#FFD700] font-medium"
          >
            📧 Reach us at: <a href="mailto:info@theprimecrafters.com" className="underline hover:text-white transition">info@theprimecrafters.com</a>
          </motion.div>

          {/* Social Icons - Vertical with Labels */}
          <div className="flex flex-col space-y-4 mt-8 text-[#BBBBBB]">
            <a href="#" className="flex items-center space-x-3 hover:text-[#FFD700]">
              <FaFacebookF className="text-xl" />
              <span>Facebook</span>
            </a>
            <a href="#" className="flex items-center space-x-3 hover:text-[#FFD700]">
              <FaLinkedinIn className="text-xl" />
              <span>LinkedIn</span>
            </a>
            <a href="#" className="flex items-center space-x-3 hover:text-[#FFD700]">
              <FaInstagram className="text-xl" />
              <span>Instagram</span>
            </a>
          </div>

          <p className="text-sm text-[#777] pt-10">
            © {new Date().getFullYear()} Prime Crafters — Crafted to Inspire.
          </p>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#0A0A0A] p-10 rounded-3xl backdrop-blur-md shadow-[0_15px_35px_rgba(30,144,255,0.15)]"
        >
          <h4 className="text-2xl font-semibold mb-6">Let’s Connect</h4>
          <form className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full bg-[#1A1A1A] border border-[#555] px-5 py-3 rounded-lg focus:outline-none focus:border-[#FFD700] text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full bg-[#1A1A1A] border border-[#555] px-5 py-3 rounded-lg focus:outline-none focus:border-[#FFD700] text-white"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full bg-[#1A1A1A] border border-[#555] px-5 py-3 rounded-lg focus:outline-none focus:border-[#FFD700] text-white"
            />
            <button
              type="submit"
              className="w-full bg-[#1E90FF] text-white py-3 rounded-full font-semibold hover:bg-[#1680e0] transition-transform duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </motion.footer>
  );
}
