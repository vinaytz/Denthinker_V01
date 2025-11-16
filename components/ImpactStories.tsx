'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stories = [
  {
    name: 'Priya',
    age: 12,
    quote:
      'Education gave me wings to dream beyond my village. Now I want to become a doctor and help my community.',
    image: 'https://images.pexels.com/photos/8422098/pexels-photo-8422098.jpeg',
  },
  {
    name: 'Arjun',
    age: 14,
    quote:
      'I never thought I could go to school. Today, I am the first in my family to read and write.',
    image: 'https://images.pexels.com/photos/8422146/pexels-photo-8422146.jpeg',
  },
  {
    name: 'Meera',
    age: 10,
    quote:
      'The support I received changed everything. I can now focus on my studies without worrying about meals.',
    image: 'https://images.pexels.com/photos/8422154/pexels-photo-8422154.jpeg',
  },
];

export default function ImpactStories() {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      slideRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' }
    );
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  return (
    <section
      ref={sectionRef}
      id="stories"
      className="relative py-32 px-6 bg-gradient-to-b from-amber-50/40 via-orange-50/20 to-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4">
            Impact Stories
          </h2>
          <p className="font-cormorant text-2xl text-gray-600 italic">
            Their voices. Their dreams. Their transformation.
          </p>
        </div>

        <div className="relative">
          <div ref={slideRef} className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.2)] border-8 border-white warm-vignette">
              <img
                src={stories[currentIndex].image}
                alt={stories[currentIndex].name}
                className="w-full h-full object-cover animate-breathe"
                style={{ filter: 'contrast(1.08) saturate(1.12) brightness(1.02)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-amber-900/5" />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-orange-500/10" />
              <div className="absolute inset-0 film-grain opacity-25" />
            </div>

            <div className="space-y-8 paper-texture p-10 rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
              <div>
                <p className="font-crimson text-3xl lg:text-4xl text-gray-800 italic leading-[1.6] mb-6">
                  "{stories[currentIndex].quote}"
                </p>
                <div className="border-t-2 border-amber-300 pt-6">
                  <p className="font-inter text-xl text-gray-700 font-medium">
                    {stories[currentIndex].name}
                  </p>
                  <p className="font-inter text-base text-gray-500 mt-1">
                    {stories[currentIndex].age} years old
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center hover:bg-amber-50 hover:scale-110 transition-all duration-500 border-2 border-amber-100 golden-highlight"
            aria-label="Previous story"
          >
            <span className="font-playfair text-3xl text-amber-700">&lt;</span>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center hover:bg-amber-50 hover:scale-110 transition-all duration-500 border-2 border-amber-100 golden-highlight"
            aria-label="Next story"
          >
            <span className="font-playfair text-3xl text-amber-700">&gt;</span>
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-500 ${
                index === currentIndex ? 'bg-gradient-to-r from-amber-500 to-orange-500 w-12 shadow-[0_2px_10px_rgba(251,191,36,0.5)]' : 'bg-gray-300 w-2 hover:bg-gray-400'
              }`}
              aria-label={`Go to story ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
