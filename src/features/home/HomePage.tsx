'use client';

import { useState, useEffect } from 'react';
import { heroSlides } from './data';
import {
  HeroCarouselSection,
  TwoColumnSection,
  DiscoverSection,
  WhatIsIsNotSection,
  QuickAccessSection,
  IntroductionSection,
} from './components';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const selectSlide = (index: number) => setCurrentSlide(index);

  return (
    <div className="w-full min-h-screen bg-page-background">
      <div className="max-w-[1600px] mx-auto bg-background">
        <IntroductionSection />
        <HeroCarouselSection
          slides={heroSlides}
          currentSlide={currentSlide}
          onNext={nextSlide}
          onPrev={prevSlide}
          onSelectSlide={selectSlide}
        />
        <TwoColumnSection />
        <DiscoverSection />
        <WhatIsIsNotSection />
        <QuickAccessSection />
      </div>
    </div>
  );
}