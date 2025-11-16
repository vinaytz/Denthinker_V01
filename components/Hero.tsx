'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current?.children || [],
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.5,
        }
      );

      gsap.to(videoRef.current, {
        scale: 1.08,
        duration: 25,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative h-screen overflow-hidden film-grain warm-vignette">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
        style={{
          filter: 'contrast(1.1) saturate(1.15) brightness(0.95)',
        }}
      >
        <source
          src="https://videos.pond5.com/african-poor-children-footage-000362353_main_xxl.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-amber-900/5" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-orange-600/10" />

      <div className="absolute inset-0 flex items-end">
        <div ref={textRef} className="max-w-4xl px-8 pb-24 md:px-16 md:pb-32 relative z-10">
          <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] cinematic-glow tracking-tight">
            DenThinkers Foundation
          </h1>
          <p className="font-cormorant text-2xl md:text-4xl text-amber-50/95 mb-10 leading-relaxed font-light italic">
            Every Child Deserves the Chance to Dream.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-10 py-5 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 text-white rounded-full font-inter text-base font-medium shadow-[0_8px_30px_rgba(251,191,36,0.4)] hover:shadow-[0_8px_40px_rgba(251,191,36,0.6)] transition-all duration-500 hover:scale-105 hover:-translate-y-1 golden-highlight">
              Make a Difference
            </button>
            <button className="px-10 py-5 border-2 border-white/80 text-white rounded-full font-inter text-base font-medium hover:bg-white/15 transition-all duration-500 backdrop-blur-md hover:border-white hover:scale-105 hover:-translate-y-1">
              See Our Work
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-amber-300/5 rounded-full blur-3xl animate-gentle-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-orange-300/5 rounded-full blur-3xl animate-gentle-pulse" style={{ animationDelay: '3s' }} />
      </div>
    </section>
  );
}
