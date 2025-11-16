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
      className="relative py-24 px-6 bg-gradient-to-b from-amber-50 to-white"
    >
      <div className="max-w-5xl mx-auto">
        <div
          ref={videoCardRef}
          className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-amber-200/50 transition-shadow duration-500 group"
        >
          <div className="relative pt-[56.25%] bg-gray-200">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="DenThinkers Foundation Documentary"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>

        <p className="font-lora text-center text-xl text-gray-600 mt-8 italic">
          This is who we are. This is why we exist.
        </p>
      </div>
    </section>
  );
}
