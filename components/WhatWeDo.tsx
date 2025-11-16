'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const initiatives = [
  {
    title: 'Educational Support',
    image: 'https://images.pexels.com/photos/8422154/pexels-photo-8422154.jpeg',
  },
  {
    title: 'Healthcare Assistance',
    image: 'https://images.pexels.com/photos/8422149/pexels-photo-8422149.jpeg',
  },
  {
    title: 'Skill Development',
    image: 'https://images.pexels.com/photos/8422146/pexels-photo-8422146.jpeg',
  },
  {
    title: 'Nutrition Support',
    image: 'https://images.pexels.com/photos/8422098/pexels-photo-8422098.jpeg',
  },
  {
    title: 'Awareness Programs',
    image: 'https://images.pexels.com/photos/8422147/pexels-photo-8422147.jpeg',
  },
  {
    title: 'Community Welfare',
    image: 'https://images.pexels.com/photos/8422089/pexels-photo-8422089.jpeg',
  },
];

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const animation = gsap.to(marquee, {
      x: '-50%',
      duration: 40,
      ease: 'none',
      repeat: -1,
    });

    if (isPaused) {
      animation.pause();
    } else {
      animation.play();
    }

    return () => {
      animation.kill();
    };
  }, [isPaused]);

  return (
    <section
      ref={sectionRef}
      id="initiatives"
      className="relative py-32 bg-gradient-to-b from-amber-50/20 via-white to-amber-50/40 overflow-hidden"
    >
      <div className="text-center mb-20 px-6">
        <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
          What We Do
        </h2>
        <p className="font-inter text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Every initiative is a step toward hope, dignity, and a brighter tomorrow.
        </p>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex">
          <div ref={marqueeRef} className="flex gap-8">
            {[...initiatives, ...initiatives].map((initiative, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-[400px] h-[500px] rounded-3xl overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.2)] group cursor-pointer border-4 border-white"
              >
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  style={{ filter: 'contrast(1.08) saturate(1.15) brightness(0.98)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-amber-900/10" />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-0 film-grain opacity-20" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                  <h3 className="font-playfair text-3xl font-bold text-white opacity-95 group-hover:opacity-100 transition-opacity cinematic-glow">
                    {initiative.title}
                  </h3>
                  <div className="w-16 h-1 bg-amber-400 mt-3 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-20">
        <button className="px-10 py-4 bg-gradient-to-br from-amber-500 via-amber-600 to-orange-600 text-white rounded-full font-inter text-base font-medium shadow-[0_8px_30px_rgba(251,191,36,0.4)] hover:shadow-[0_12px_40px_rgba(251,191,36,0.6)] transition-all duration-500 hover:scale-105 hover:-translate-y-1 golden-highlight">
          View All Initiatives
        </button>
      </div>
    </section>
  );
}
