/**
 * Program Boundaries Section
 * 
 * Displays the clear separation between short programs and flagship program
 */

import React from 'react';
import { H2 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { InteractiveCard } from '@/src/shared/components/content';

export const ProgramBoundariesSection: React.FC = () => {
  return (
    <section className="space-y-4">
      <div className="text-center mb-6">
        <H2 className="text-2xl font-bold text-primary mb-3">Program Boundaries</H2>
      </div>

      {/* Clear Separation - Using InteractiveCard */}
      <InteractiveCard
        title="Clear Separation"
        colorTheme="warning"
        description="Short Programs are completely separate from the HI Labs Flagship Program. These are weekend and time-bound skill-focused modules that do not provide pathway to the 12-month engineering production system."
      />

      {/* Simple paragraph content */}
      <div className="space-y-3">
        <BodyText className="text-primary leading-relaxed">
          Short Programs operate as standalone educational modules designed for working professionals 
          and students seeking specific skill development. They do not constitute preparation for, 
          qualification for, or guarantee admission to the Flagship Program.
        </BodyText>
        
        <BodyText className="text-primary leading-relaxed">
          Short Programs serve professionals who require targeted skill development without the 
          commitment of full-time, long-term training. These modules address specific technical 
          competencies through concentrated instruction and practical application, operating on 
          weekend and evening formats to accommodate employment.
        </BodyText>
      </div>
    </section>
  );
};
