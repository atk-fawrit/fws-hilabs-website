/**
 * Candidate Suitability Section
 * 
 * Displays good fit and poor fit candidate profiles
 */

import React from 'react';
import { H2 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { InteractiveCard } from '@/src/shared/components/content';

export const CandidateSuitabilitySection: React.FC = () => {
  return (
    <section className="space-y-4">
      <H2 className="text-2xl font-bold text-primary mb-4">Candidate Suitability</H2>
      
      <div className="space-y-4">
        <BodyText className="text-primary leading-relaxed">
          Short Programs are designed for specific candidate profiles who can benefit from focused skill 
          development within the program constraints and time commitments.
        </BodyText>
        
        {/* Good/Poor Fit - Using InteractiveCard components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InteractiveCard
            title="Good Fit Candidates"
            colorTheme="accent"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            items={[
              "Working professionals seeking specific skills",
              "Students wanting practical experience",
              "Career explorers testing technical fields",
              "Entrepreneurs needing technical competencies"
            ]}
          />

          <InteractiveCard
            title="Poor Fit Candidates"
            colorTheme="warning"
            items={[
              "Expecting comprehensive career transformation",
              "Seeking placement assistance or job guarantees",
              "Unable to commit to weekend schedule",
              "Preferring theoretical over practical learning"
            ]}
          />
        </div>

        <BodyText className="text-primary leading-relaxed">
          Understanding ideal participant profiles and unsuitable expectations is essential for program success. 
          Candidates with incompatible expectations should consider comprehensive training programs, online courses, 
          or traditional educational institutions that better match their requirements.
        </BodyText>
      </div>
    </section>
  );
};