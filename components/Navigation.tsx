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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
            <span className="font-playfair text-amber-900 font-bold text-lg">DT</span>
          </div>
          <span className="font-playfair text-2xl font-bold text-amber-900">
            DenThinkers
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-poppins text-sm">
          <a href="#home" className="text-gray-700 hover:text-amber-600 transition-colors">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-amber-600 transition-colors">
            About
          </a>
          <a href="#initiatives" className="text-gray-700 hover:text-amber-600 transition-colors">
            Initiatives
          </a>
          <a href="#stories" className="text-gray-700 hover:text-amber-600 transition-colors">
            Stories
          </a>
          <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-5 py-2 bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-full font-poppins text-sm font-medium shadow-lg hover:shadow-amber-300/50 transition-all hover:scale-105">
            Donate
          </button>
          <button className="px-5 py-2 border border-amber-600 text-amber-700 rounded-full font-poppins text-sm font-medium hover:bg-amber-50 transition-all">
            Join
          </button>
        </div>
      </div>
    </nav>
  );
}
