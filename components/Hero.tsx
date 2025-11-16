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
        scale: 1.05,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'none',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative h-screen overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source
          src="https://videos.pond5.com/african-poor-children-footage-000362353_main_xxl.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <div className="absolute inset-0 flex items-end">
        <div ref={textRef} className="max-w-4xl px-8 pb-24 md:px-16 md:pb-32">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            DenThinkers Foundation
          </h1>
          <p className="font-poppins text-xl md:text-3xl text-amber-50 mb-10 leading-relaxed">
            Every Child Deserves the Chance to Dream.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-full font-poppins text-base font-medium shadow-2xl hover:shadow-amber-400/50 transition-all hover:scale-105">
              Make a Difference
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-poppins text-base font-medium hover:bg-white/10 transition-all backdrop-blur-sm">
              See Our Work
            </button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
      </div>
    </section>
  );
}
