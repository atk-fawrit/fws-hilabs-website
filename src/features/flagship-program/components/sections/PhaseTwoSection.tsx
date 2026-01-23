/**
 * Phase Two Section
 * 
 * Displays supervised deployment phase (Months 10-12)
 */

import React from 'react';
import { BodyText } from '@/src/shared/components/typography';
import { InteractiveCard, SectionHeader } from '@/src/shared/components/content';

export const PhaseTwoSection: React.FC = () => {
  const supervisionItems = [
    'Daily supervision by designated technical lead at deployment site',
    'Weekly evaluation reports submitted to HI Labs oversight',
    'Bi-weekly review sessions with HI Labs instructional staff',
    'Monthly performance assessment with elimination review'
  ];

  const constraintItems = [
    'Minimum 40 hours per week at deployment site',
    'Adherence to partner organization protocols and standards',
    'Completion of assigned projects within specified timelines',
    'Professional conduct and communication standards'
  ];

  const supervisionIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );

  const constraintIcon = (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  return (
    <div className="space-y-3">
      <SectionHeader 
        title="Phase II: Supervised Deployment"
        subtitle="Months 10-12: Real-world engineering deployment"
      />
      
      <div className="bg-accent/5 p-3 border-l-[4px] border-accent">
        <BodyText className="text-base leading-relaxed text-primary">
          Phase II operates as supervised deployment within partner organizations or client projects. 
          Participants work as junior engineers under direct supervision while maintaining 
          accountability to HI Labs evaluation protocols.
        </BodyText>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {/* Supervision Model Card */}
        <InteractiveCard
          title="SUPERVISION MODEL"
          icon={supervisionIcon}
          items={supervisionItems}
          colorTheme="accent"
        />
        
        {/* Deployment Constraints Card */}
        <InteractiveCard
          title="DEPLOYMENT CONSTRAINTS"
          icon={constraintIcon}
          items={constraintItems}
          colorTheme="accent"
        />
      </div>
    </div>
  );
};
