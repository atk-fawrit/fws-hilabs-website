/**
 * Introduction Section
 * 
 * Displays institutional introduction with HI Labs mission and approach
 */

import React from 'react';
import { H1 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

export const IntroductionSection: React.FC = () => {
  return (
    <section className="bg-background py-8 px-6 md:px-8">
      <div className="max-w-4xl">
        <H1 className="text-3xl md:text-4xl font-semibold text-primary mb-4 leading-tight">
          Engineering talent production and deployment
        </H1>
        <BodyText className="text-base md:text-lg text-secondary leading-relaxed">
          Do you consistently demonstrate technical aptitude? Are you seeking rigorous engineering training? HI Labs might be for you.
        </BodyText>
      </div>
    </section>
  );
};