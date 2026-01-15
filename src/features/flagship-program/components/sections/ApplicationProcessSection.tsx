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
    <section className="space-y-8">
      <H2 className="text-3xl font-light">Application Process</H2>
      
      <div className="space-y-6">
        <BodyText className="text-base leading-relaxed">
          Candidates who understand and accept these constraints may proceed to the 
          admissions selection process. The application requires demonstration of 
          technical aptitude and commitment to the full 12-month program.
        </BodyText>
        
        <div className="pt-4">
          <CTAButton variant="primary" href="/admissions">
            Begin Admissions Process
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
