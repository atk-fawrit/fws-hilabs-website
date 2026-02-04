'use client';

import { useState } from 'react';
import { PageContainer } from '@/src/shared/components/layout';
import { BackButton } from '@/src/shared/components/content';
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
          <BackButton
            onClick={() => setActiveSection(null)}
            text="Back to Program Overview"
            className="mb-4"
          />

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