/**
 * Application Process Section
 * 
 * CTA for beginning the admissions process
 */

import React from 'react';
import { H2 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { CTAButton } from '@/src/shared/components/content';

export const ApplicationProcessSection: React.FC = () => {
  return (
    <section className="bg-accent/5 p-8 text-center border border-accent/20">
      <H2 className="text-3xl font-bold text-primary mb-4">Application Process</H2>
      
      <div className="max-w-3xl mx-auto space-y-6">
        <BodyText className="text-lg leading-relaxed text-primary">
          Candidates who understand and accept these constraints may proceed to the 
          admissions selection process. The application requires demonstration of 
          technical aptitude and commitment to the full 12-month program.
        </BodyText>
        
        <div className="bg-white p-6 border border-accent/30 inline-block">
          <BodyText className="text-sm text-secondary mb-3">Ready to begin?</BodyText>
          <CTAButton variant="primary" href="/admissions">
            Begin Admissions Process
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
