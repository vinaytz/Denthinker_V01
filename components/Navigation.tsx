'use client';

import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]'
          : 'bg-gradient-to-b from-black/20 to-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center shadow-lg">
            <span className="font-playfair text-amber-900 font-bold text-lg">DT</span>
          </div>
          <span className={`font-playfair text-2xl font-bold transition-colors duration-500 ${
            scrolled ? 'text-amber-900' : 'text-white'
          }`}>
            DenThinkers
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-inter text-sm font-medium">
          <a href="#home" className={`transition-colors duration-300 ${
            scrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white/90 hover:text-amber-300'
          }`}>
            Home
          </a>
          <a href="#about" className={`transition-colors duration-300 ${
            scrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white/90 hover:text-amber-300'
          }`}>
            About
          </a>
          <a href="#initiatives" className={`transition-colors duration-300 ${
            scrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white/90 hover:text-amber-300'
          }`}>
            Initiatives
          </a>
          <a href="#stories" className={`transition-colors duration-300 ${
            scrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white/90 hover:text-amber-300'
          }`}>
            Stories
          </a>
          <a href="#contact" className={`transition-colors duration-300 ${
            scrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white/90 hover:text-amber-300'
          }`}>
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-6 py-2.5 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 text-white rounded-full font-inter text-sm font-medium shadow-[0_4px_16px_rgba(251,191,36,0.3)] hover:shadow-[0_4px_20px_rgba(251,191,36,0.5)] transition-all duration-500 hover:scale-105 golden-highlight">
            Donate
          </button>
          <button className={`px-6 py-2.5 rounded-full font-inter text-sm font-medium transition-all duration-500 hover:scale-105 ${
            scrolled
              ? 'border border-amber-600 text-amber-700 hover:bg-amber-50'
              : 'border border-white/80 text-white hover:bg-white/15 backdrop-blur-md'
          }`}>
            Join
          </button>
        </div>
      </div>
    </nav>
  );
}
