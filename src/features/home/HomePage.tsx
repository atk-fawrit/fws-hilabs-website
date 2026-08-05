'use client';

import { useState, useEffect } from 'react';
import {
  HeroSection,
  ProgramsSection,
  ExploreSection,
  IdentitySection,
  CTASection,
} from './components';
import Footer from '@/src/shared/components/layout/Footer';
import { EventPopupModal } from '@/src/shared/components/content';
import { homeData } from './data';

export default function HomePage() {
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  useEffect(() => {
    // Automatically open the event popup modal on home page load
    const popupTimer = setTimeout(() => {
      setIsEventModalOpen(true);
    }, 500);

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

    return () => {
      clearTimeout(popupTimer);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen font-sans text-white">
      <HeroSection stages={homeData.pipeline.stages} />
      
      <ProgramsSection 
        programs={homeData.programs.main}
        backgroundImage={homeData.programs.backgroundImage}
      />
      
      <ExploreSection />
      
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

      {/* Event Popup Modal */}
      <EventPopupModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
      />
    </div>
  );
}
