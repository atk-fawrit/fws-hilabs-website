'use client';

import { useState, useRef, useEffect } from 'react';
import Navigation from '@/src/shared/components/layout/Navigation';
import Footer from '@/src/shared/components/layout/Footer';
import {
  HeroSection,
  MainContentSection,
  ExploreMoreSection,
  SelectionProcessSection,
  CommitmentAndRiskSection,
  ApplicationProtocolSection,
  ApplicationCTASection,
} from './components/sections';

export default function AdmissionsPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Map section IDs to components
  const sectionComponents = {
    'process': <SelectionProcessSection />,
    'commitment': <CommitmentAndRiskSection />,
    'protocol': <ApplicationProtocolSection />,
  };

  // Show only one section at a time and scroll to it
  const handleCardClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  // Scroll to content when section changes
  useEffect(() => {
    if (activeSection && contentRef.current) {
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100);
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      <Navigation />
      
      <HeroSection />

      <main className="w-full">
        <MainContentSection />
        
        <div className="px-6 md:px-8 py-12 space-y-12">
          <ExploreMoreSection onCardClick={handleCardClick} />
          
          {/* Show only one section at a time */}
          {activeSection && (
            <div ref={contentRef}>
              {sectionComponents[activeSection as keyof typeof sectionComponents]}
            </div>
          )}
          
          <ApplicationCTASection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
