'use client';

import { HeroSection, PageContainer } from '@/src/shared/components/layout';
import { useState } from 'react';
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

  // Map section IDs to components - for cards
  const sectionComponents = {
    'process': <SelectionProcessSection />,
    'commitment': <CommitmentAndRiskSection />,
    'protocol': <ApplicationProtocolSection />,
  };

  if (activeSection) {
    const component = sectionComponents[activeSection as keyof typeof sectionComponents];
    
    return (
      <PageContainer>
        <div className="px-6 md:px-8 pt-4 pb-2">
          {/* Back Button */}
          <button
            onClick={() => setActiveSection(null)}
            className="flex items-center gap-2 text-accent hover:text-primary transition-colors mb-4"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Admissions Overview
          </button>
          
          {/* Content without wrapper */}
          {component}
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection
        title="Admissions"
        description="A rigorous selection system designed to identify candidates capable of completing our 12-month engineering talent production program"
        backgroundType="image"
        backgroundSrc="/images/admissions-process.jpg"
        overlayColor="bg-black/40"
        height="h-[300px]"
      />

      <main className="px-6 md:px-8 py-4 space-y-6">
        <MainContentSection />
        <ExploreMoreSection onCardClick={setActiveSection} />
        <ApplicationCTASection />
      </main>
    </PageContainer>
  );
}