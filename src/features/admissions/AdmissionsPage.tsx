'use client';

import { useState, useRef, useEffect } from 'react';
import { PageLayout, SimpleHero } from '@/src/shared/components/layout';
import {
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
    <PageLayout>
      <SimpleHero
        image="/images/commitment-risk-discussion.jpg"
        imageAlt="Admissions Process"
        title="Admissions"
        description="A rigorous selection system designed to identify candidates capable of completing our 12-month engineering talent production program"
        overlayOpacity="dark"
      />

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
    </PageLayout>
  );
}
