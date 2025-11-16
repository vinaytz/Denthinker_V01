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
      className="relative py-24 px-6 bg-gradient-to-b from-amber-50 to-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl font-bold text-gray-900">
            Impact Stories
          </h2>
        </div>

        <div className="relative">
          <div ref={slideRef} className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={stories[currentIndex].image}
                alt={stories[currentIndex].name}
                className="w-full h-full object-cover animate-breathe"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="space-y-6">
              <div>
                <p className="font-lora text-3xl text-gray-800 italic leading-relaxed mb-4">
                  "{stories[currentIndex].quote}"
                </p>
                <p className="font-poppins text-xl text-gray-600">
                  - {stories[currentIndex].name}, {stories[currentIndex].age} years old
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-amber-50 transition-colors"
            aria-label="Previous story"
          >
            <span className="font-playfair text-3xl text-gray-700">&lt;</span>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-amber-50 transition-colors"
            aria-label="Next story"
          >
            <span className="font-playfair text-3xl text-gray-700">&gt;</span>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {stories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-amber-600 w-8' : 'bg-gray-300'
              }`}
              aria-label={`Go to story ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
