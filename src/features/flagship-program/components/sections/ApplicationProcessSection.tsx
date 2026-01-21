/**
 * Application Process Section
 * 
 * CTA for beginning the admissions process
 */

import React from 'react';
import { CTAButton, InteractiveCard, SectionHeader } from '@/src/shared/components/content';

export const ApplicationProcessSection: React.FC = () => {
  return (
    <div className="space-y-3">
      <SectionHeader 
        title="Application Process"
        subtitle="Ready to begin your engineering transformation?"
      />
      
      <div className="max-w-4xl mx-auto">
        <InteractiveCard
          title="Begin Your Application"
          colorTheme="accent"
          icon={
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          description="Candidates who understand and accept these constraints may proceed to the admissions selection process. The application requires demonstration of technical aptitude and commitment to the full 12-month program."
          footer="Ready to begin?"
        >
          <div className="text-center pt-2">
            <CTAButton variant="primary" href="/admissions">
              Begin Admissions Process
            </CTAButton>
          </div>
        </InteractiveCard>
      </div>
    </div>
  );
};
