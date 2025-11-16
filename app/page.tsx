'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import FoundationVideo from '@/components/FoundationVideo';
import WhoWeAre from '@/components/WhoWeAre';
import WhatWeDo from '@/components/WhatWeDo';
import ImpactStories from '@/components/ImpactStories';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <FoundationVideo />
      <WhoWeAre />
      <WhatWeDo />
      <ImpactStories />
      <FinalCTA />
      <Footer />
    </div>
  );
}
