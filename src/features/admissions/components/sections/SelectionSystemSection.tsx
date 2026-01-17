/**
 * Selection System Section
 * 
 * Displays the admissions philosophy and selection criteria
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { InfoBox } from '@/src/shared/components/content';

export const SelectionSystemSection: React.FC = () => {
  return (
    <section className="space-y-6">
      <div className="text-center">
        <H2 className="text-3xl font-semibold text-primary mb-2">Selection System</H2>
        <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
      </div>
      
      <div className="space-y-4">
        <BodyText className="text-lg leading-relaxed text-primary text-center max-w-4xl mx-auto">
          HI Labs admissions operates as a selection system, not a sales funnel. The process 
          identifies candidates capable of completing the 12-month engineering production 
          system under enforced evaluation and supervised deployment protocols.
        </BodyText>
        
        <div className="bg-white border-l-4 border-accent p-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-accent text-white flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <H3 className="text-accent font-bold text-lg mb-2">SELECTION CRITERIA</H3>
              <BodyText className="text-base leading-relaxed text-primary">
                This is a filtering mechanism designed to identify serious candidates who understand the commitment and constraints of the program. We select for aptitude, commitment, and alignment with institutional expectations.
              </BodyText>
            </div>
          </div>
        </div>
        
        <BodyText className="text-base leading-relaxed text-secondary text-center max-w-4xl mx-auto">
          The admissions process evaluates technical aptitude, commitment capacity, and 
          understanding of program constraints. Candidates must demonstrate readiness 
          for full-time, in-person participation and acceptance of elimination-based evaluation.
        </BodyText>
      </div>
    </section>
  );
};
