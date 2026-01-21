'use client';

import { useState, useEffect } from 'react';
import { heroSlides } from './data';
import { PageContainer } from '@/src/shared/components/layout';
import {
  HeroCarouselSection,
  ProgramsInfoSection,
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
    <PageContainer>
      <IntroductionSection />
      <HeroCarouselSection
        slides={heroSlides}
        currentSlide={currentSlide}
        onNext={nextSlide}
        onPrev={prevSlide}
        onSelectSlide={selectSlide}
      />
      <ProgramsInfoSection />
      <DiscoverSection />
      <WhatIsIsNotSection />
      <QuickAccessSection />
    </PageContainer>
  );
}