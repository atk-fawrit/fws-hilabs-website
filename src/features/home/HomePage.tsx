'use client';

import { useEffect } from 'react';
import Navigation from '@/src/shared/components/layout/Navigation';
import {
  HeroSection,
  ProgramsSection,
  ExploreSection,
  IdentitySection,
  CTASection,
} from './components';
import Footer from '@/src/shared/components/layout/Footer';
import { homeData } from './data';

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.reveal-on-scroll, [class*="visible"]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen font-sans text-white">
      <Navigation />
      
      <HeroSection stages={homeData.pipeline.stages} />
      
      <ProgramsSection 
        programs={homeData.programs.main}
        backgroundImage={homeData.programs.backgroundImage}
      />
      
      <ExploreSection cards={homeData.explore.cards} />
      
      <IdentitySection 
        positiveItems={homeData.identity.positive}
        negativeItems={homeData.identity.negative}
      />
      
      <CTASection 
        title={homeData.cta.title}
        description={homeData.cta.description}
        buttonText={homeData.cta.buttonText}
        buttonHref={homeData.cta.buttonHref}
      />
      
      <Footer />
    </div>
  );
}