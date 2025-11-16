'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);
  const photosRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        photosRef.current?.children || [],
        { opacity: 0, scale: 0.8, rotation: -10 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'back.out(1.2)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 px-6 bg-gradient-to-b from-white via-amber-50/30 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div ref={photosRef} className="relative">
            <div className="relative w-full h-[500px]">
              <div className="absolute top-0 left-0 w-64 h-64 rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.15)] transform rotate-3 hover:rotate-0 transition-all duration-700 hover:shadow-[0_20px_60px_rgba(251,191,36,0.2)] hover:scale-105 border-4 border-white">
                <img
                  src="https://images.pexels.com/photos/8422089/pexels-photo-8422089.jpeg"
                  alt="Children learning"
                  className="w-full h-full object-cover"
                  style={{ filter: 'contrast(1.05) saturate(1.1) brightness(1.02)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-transparent mix-blend-overlay" />
              </div>
              <div className="absolute top-20 right-0 w-56 h-56 rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.15)] transform -rotate-6 hover:rotate-0 transition-all duration-700 hover:shadow-[0_20px_60px_rgba(251,191,36,0.2)] hover:scale-105 border-4 border-white">
                <img
                  src="https://images.pexels.com/photos/8422147/pexels-photo-8422147.jpeg"
                  alt="Community work"
                  className="w-full h-full object-cover"
                  style={{ filter: 'contrast(1.05) saturate(1.1) brightness(1.02)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-transparent mix-blend-overlay" />
              </div>
              <div className="absolute bottom-0 left-16 w-60 h-60 rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.15)] transform rotate-6 hover:rotate-0 transition-all duration-700 hover:shadow-[0_20px_60px_rgba(251,191,36,0.2)] hover:scale-105 border-4 border-white">
                <img
                  src="https://images.pexels.com/photos/8422267/pexels-photo-8422267.jpeg"
                  alt="Happy children"
                  className="w-full h-full object-cover"
                  style={{ filter: 'contrast(1.05) saturate(1.1) brightness(1.02)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-300/10 to-transparent mix-blend-overlay" />
              </div>
            </div>
          </div>

          <div ref={textRef} className="space-y-8 paper-texture p-10 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <h2 className="font-playfair text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
              Who We Are
            </h2>
            <p className="font-inter text-lg text-gray-700 leading-[1.8]">
              We are a Non Government Organization (NGO) located in Punjab, India with
              operations across PAN India. We are a Social Welfare, Religious and
              Charitable Society working for the upliftment in educational and literacy,
              health and family welfare especially for women and girls.
            </p>
            <div className="pt-4 border-l-4 border-amber-400 pl-6">
              <p className="font-crimson text-3xl italic text-amber-800 leading-relaxed">
                "Every child is a dream waiting to unfold."
              </p>
              <p className="font-inter text-sm text-gray-500 mt-3 tracking-wide">
                - DenThinkers Foundation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
