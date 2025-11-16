'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FoundationVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        videoCardRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 px-6 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20"
    >
      <div className="max-w-5xl mx-auto">
        <div
          ref={videoCardRef}
          className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_80px_rgba(251,191,36,0.25)] transition-all duration-700 group border-4 border-white"
        >
          <div className="relative pt-[56.25%] bg-gradient-to-br from-amber-100 to-orange-100">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="DenThinkers Foundation Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-amber-300/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <div className="absolute inset-0 film-grain opacity-30 pointer-events-none" />
        </div>

        <p className="font-cormorant text-center text-2xl text-gray-700 mt-10 italic font-medium">
          This is who we are. This is why we exist.
        </p>
      </div>
    </section>
  );
}
