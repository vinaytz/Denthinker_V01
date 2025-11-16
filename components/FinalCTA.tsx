'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      gsap.to(sectionRef.current, {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 px-6 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url(https://images.pexels.com/photos/8422267/pexels-photo-8422267.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div ref={contentRef} className="space-y-8">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-white leading-tight">
            Be the reason a child smiles today.
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-4 bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-full font-poppins text-lg font-medium shadow-2xl hover:shadow-amber-400/50 transition-all hover:scale-105 animate-shimmer">
              Donate Now
            </button>
            <button className="px-10 py-4 border-2 border-white text-white rounded-full font-poppins text-lg font-medium hover:bg-white/10 transition-all backdrop-blur-sm">
              Become a Volunteer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
