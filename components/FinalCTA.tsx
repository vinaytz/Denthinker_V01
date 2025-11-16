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
      className="relative py-40 px-6 overflow-hidden bg-cover bg-center film-grain warm-vignette"
      style={{
        backgroundImage:
          'linear-gradient(to bottom, rgba(251,146,60,0.15), rgba(0,0,0,0.6)), linear-gradient(to right, rgba(251,191,36,0.1), transparent, rgba(251,146,60,0.1)), url(https://images.pexels.com/photos/8422267/pexels-photo-8422267.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        filter: 'contrast(1.1) saturate(1.15)',
      }}
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div ref={contentRef} className="space-y-10">
          <h2 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight cinematic-glow tracking-tight">
            Be the reason a child smiles today.
          </h2>
          <p className="font-cormorant text-2xl md:text-3xl text-amber-100 italic font-light">
            Your kindness can change a life forever.
          </p>

          <div className="flex flex-wrap justify-center gap-5 pt-6">
            <button className="px-12 py-5 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 text-white rounded-full font-inter text-lg font-medium shadow-[0_12px_40px_rgba(251,191,36,0.5)] hover:shadow-[0_16px_50px_rgba(251,191,36,0.7)] transition-all duration-500 hover:scale-105 hover:-translate-y-1 animate-shimmer golden-highlight">
              Donate Now
            </button>
            <button className="px-12 py-5 border-3 border-white/90 text-white rounded-full font-inter text-lg font-medium hover:bg-white/20 transition-all duration-500 backdrop-blur-md hover:scale-105 hover:-translate-y-1 hover:border-white shadow-[0_8px_30px_rgba(0,0,0,0.3)]">
              Become a Volunteer
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-amber-900/20 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-300/10 rounded-full blur-3xl animate-gentle-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-300/10 rounded-full blur-3xl animate-gentle-pulse pointer-events-none" style={{ animationDelay: '4s' }} />
    </section>
  );
}
