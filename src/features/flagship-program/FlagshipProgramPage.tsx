'use client';

import { useState } from 'react';
import { PageContainer } from '@/src/shared/components/layout';
import {
  HeroVideoSection,
  ProgramOverviewSection,
  ProgramCardsSection,
  ProgramSpecificationSection,
  PhaseOneSection,
  PhaseTwoSection,
  EvaluationSystemSection,
  ApplicationProcessSection,
} from './components/sections';

export default function FlagshipProgramPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Map section IDs to components - for cards
  const sectionComponents = {
    'phase-one': <PhaseOneSection />,
    'phase-two': <PhaseTwoSection />,
    evaluation: <EvaluationSystemSection />,
    application: <ApplicationProcessSection />,
  };

  if (activeSection) {
    const component = sectionComponents[activeSection as keyof typeof sectionComponents];
    
    return (
      <PageContainer>
        <div className="w-full px-6 md:px-8 pt-4 pb-2">
          {/* Back Button */}
          <button
            onClick={() => setActiveSection(null)}
            className="flex items-center gap-2 text-accent hover:text-primary transition-colors mb-4"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Program Overview
          </button>
          
          {/* Content with minimal wrapper */}
          {component}
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <HeroVideoSection />
      
      <main className="w-full px-6 md:px-8 py-4 space-y-4">
        <ProgramOverviewSection />
        <ProgramCardsSection onCardClick={setActiveSection} />
        <ProgramSpecificationSection />
      </main>
    </PageContainer>
  );
}