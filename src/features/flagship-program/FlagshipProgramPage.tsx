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
  EvaluationSystemSection,
  ApplicationProcessSection,
} from './components/sections';

export default function FlagshipProgramPage() {
  const [activeSections, setActiveSections] = useState<string[]>([]);
  const phaseOneRef = useRef<HTMLDivElement>(null);

  // Map section IDs to components
  const sectionComponents = {
    'phase-one': <PhaseOneSection />,
    'phase-two': <PhaseTwoSection />,
    evaluation: <EvaluationSystemSection />,
    application: <ApplicationProcessSection />,
  };

  // Toggle section - add if not present, remove if already present
  const handleCardClick = (sectionId: string) => {
    setActiveSections(prev => {
      if (prev.includes(sectionId)) {
        return prev.filter(id => id !== sectionId);
      } else {
        return [...prev, sectionId];
      }
    });
  };

  // Handle Learn More click - open Phase One and scroll to it
  const handleLearnMoreClick = () => {
    // Add phase-one to active sections if not already present
    setActiveSections(prev => {
      if (!prev.includes('phase-one')) {
        return [...prev, 'phase-one'];
      }
      return prev;
    });

    // Scroll to phase one section after a short delay to allow rendering
    setTimeout(() => {
      phaseOneRef.current?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 100);
  };

  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      <HeroVideoSection />

      <main className="w-full">
        <ProgramOverviewSection onLearnMoreClick={handleLearnMoreClick} />
        
        <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 space-y-8 sm:space-y-10 md:space-y-12">
          <ProgramCardsSection onCardClick={handleCardClick} />
          
          {/* Show expanded sections inline - multiple can be open */}
          {activeSections.length > 0 && (
            <div className="space-y-12">
              {activeSections.map((sectionId) => (
                <div 
                  key={sectionId}
                  ref={sectionId === 'phase-one' ? phaseOneRef : null}
                >
                  {sectionComponents[sectionId as keyof typeof sectionComponents]}
                </div>
              ))}
            </div>
          )}
          
          <ProgramSpecificationSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
