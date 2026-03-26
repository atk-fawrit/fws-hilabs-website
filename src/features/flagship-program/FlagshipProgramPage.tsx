'use client';

import { useState, useRef } from 'react';
import Footer from '@/src/shared/components/layout/Footer';
import {
  HeroVideoSection,
  ProgramOverviewSection,
  ProgramCardsSection,
  ProgramSpecificationSection,
  PhaseOneSection,
  PhaseTwoSection,
  PhaseThreeSection,
  InternshipSection,
  EvaluationSystemSection,
  ApplicationProcessSection,
} from './components/sections';

export default function FlagshipProgramPage() {
  const [showAllDetails, setShowAllDetails] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleViewAllClick = () => {
    setShowAllDetails(prev => !prev);

    if (!showAllDetails) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      <HeroVideoSection />

      <main className="w-full">
        <ProgramOverviewSection onLearnMoreClick={() => { }} />

        <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 space-y-8 sm:space-y-10 md:space-y-12">
          <ProgramCardsSection
            onViewAllClick={handleViewAllClick}
            isExpanded={showAllDetails}
          />

          {/* Show all expanded sections inline */}
          {showAllDetails && (
            <div ref={detailsRef} className="space-y-12">
              <PhaseOneSection />
              <PhaseTwoSection />
              <PhaseThreeSection />
              <InternshipSection />
              <EvaluationSystemSection />
              <ApplicationProcessSection />
            </div>
          )}

          <ProgramSpecificationSection />
        </div>
      </main>

      <Footer />
    </div>
  );
}
