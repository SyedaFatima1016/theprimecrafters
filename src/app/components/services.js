'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Websites That Work as Hard as You Do',
    svg: (
      <svg width="36" height="36" fill="#FFD700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 4a1 1 0 0 0-1 1v13.993A1 1 0 0 0 3 20h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H3Zm0 2h18v2H3V6Zm0 4h18v8H3v-8Zm5 2a1 1 0 0 1 .993.883L9 13v2a1 1 0 0 1-1.993.117L7 15v-2a1 1 0 0 1 1-1Z" />
      </svg>
    ),
    description:
      'Forget cookie-cutter templates. We craft custom websites that load in milliseconds, look flawless on every device, and turn browsers into buyers. Because your website should be your best salesperson.',
  },
  {
    title: 'UI/UX Design That Makes Users Fall in Love',
    svg: (
      <svg width="36" height="36" fill="#FFD700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3h18v18H3V3Zm2 2v14h14V5H5Zm6 2h2v10h-2V7Z" />
      </svg>
    ),
    description:
      'We create interfaces so intuitive, your users would not want to leave. Every click, swipe, and scroll designed to delight, turning casual visitors into obsessed customers. ',
  },
  {
    title: 'Mobile App Development Done Right',
    svg: (
      <svg width="36" height="36" fill="#FFD700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm0 2v16h10V4H7Zm5 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
      </svg>
    ),
    description:
      'Native precision or cross-platform efficiency? We master both. Every app optimized for performance, built for scale, and designed to dominate your market.',
  },
  {
    title: 'Marketing That Pays for Itself',
    svg: (
      <svg width="36" height="36" fill="#FFD700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 4h2v16H3V4Zm4 4h13l-4 4 4 4H7V8Zm2 2v4h6l-2-2 2-2H9Z" />
      </svg>
    ),
    description:
      'Tired of agencies that promise the moon and deliver crickets? We build campaigns that actually move the needle — more traffic, more leads, more sales. Period.',
  },
  {
    title: 'Welcome to Business at the Speed of AI',
    svg: (
      <svg width="36" height="36" fill="#FFD700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2a2 2 0 0 1 1.985 1.75L14 4v1.528a5.998 5.998 0 0 1 4.47 4.47H20a2 2 0 1 1 0 4h-1.53a5.998 5.998 0 0 1-4.47 4.47V20a2 2 0 1 1-4 0v-1.528a5.998 5.998 0 0 1-4.47-4.47H4a2 2 0 1 1 0-4h1.53a5.998 5.998 0 0 1 4.47-4.47V4a2 2 0 0 1 2-2Zm0 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
      </svg>
    ),
    description:
      'We do not just build automation, we architect intelligent systems that learn, adapt, and evolve with your business. Work smarter, not harder.',
  },
  {
    title: 'Create Your Money-Making Machine Through Ebooks',
    svg: (
      <svg width="36" height="36" fill="#FFD700" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 3h12a2 2 0 0 1 2 2v14a1 1 0 0 1-1.447.894L12 18.118l-4.553 1.776A1 1 0 0 1 6 18V5a2 2 0 0 1 2-2Zm0 2v13.382l4.553-1.776a1 1 0 0 1 .894 0L16 18.382V5H4Zm14 0h2v14h-2V5Z" />
      </svg>
    ),
    description:
      'Stop Giving Away Your Expertise for Free! Your knowledge is valuable, let us package it properly. From concept to bestseller, we create ebooks that turn your insights into income and browsers into buyers.',
  },
  
];

function ServiceCard({ service, index }) {
  const cardRef = useRef(null);
  const spotlightRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotlightRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(30,144,255,0.25), transparent 40%)`;
  };

  return (
    <motion.div
      key={index}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className ="relative group bg-[#0F0F0F] border border-[#FFD700]/20 p-8 sm:p-10 rounded-3xl overflow-hidden 
      shadow-[0_10px_30px_rgba(255,215,0,0.05)] hover:shadow-[0_20px_50px_rgba(255,215,0,0.12)] 
      hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 60, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
    >
      <div
        ref={spotlightRef}
        className="absolute inset-0 pointer-events-none z-0 transition-all duration-200"
      />

      <div className="relative z-10 space-y-4 text-white">
        <div>{service.svg}</div>
        <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
        <p className="text-[#F3F3F3] text-base leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id = "services" className="relative bg-black text-white py-32 px-6 sm:px-10 md:px-20 overflow-hidden min-h-screen">
      <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] bg-[#FFD700]/10 blur-3xl rounded-full z-0" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20 max-w-3xl mx-auto z-10 relative"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Our <span className="text-[#FFD700]">Services</span>
        </h2>
       
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto z-10 relative">
        {services.map((service, index) => (
          <ServiceCard service={service} index={index} key={index} />
        ))}
      </div>

    
    </section>
  );
}
