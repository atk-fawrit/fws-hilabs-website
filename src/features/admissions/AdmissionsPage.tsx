'use client';

import { HeroSection, PageContainer } from '@/src/shared/components/layout';
import { BackButton } from '@/src/shared/components/content';
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
          <BackButton 
            onClick={() => setActiveSection(null)}
            text="Back to Admissions Overview"
            className="mb-4"
          />
          
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