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
      className="relative py-24 bg-gradient-to-b from-white to-amber-50 overflow-hidden"
    >
      <div className="text-center mb-16 px-6">
        <h2 className="font-playfair text-5xl font-bold text-gray-900">
          What We Do
        </h2>
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
                className="relative flex-shrink-0 w-[400px] h-[500px] rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
              >
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-playfair text-3xl font-bold text-white opacity-90 group-hover:opacity-100 transition-opacity">
                    {initiative.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-16">
        <button className="px-8 py-3 bg-amber-600 text-white rounded-full font-poppins text-base font-medium shadow-lg hover:bg-amber-700 hover:shadow-amber-300/50 transition-all hover:scale-105">
          View All
        </button>
      </div>
    </section>
  );
}
