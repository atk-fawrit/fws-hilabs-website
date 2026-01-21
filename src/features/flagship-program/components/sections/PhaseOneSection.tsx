/**
 * Phase One Section
 * 
 * Displays the three foundation terms (Months 1-9)
 */

import React from 'react';
import { ProcessCard } from '@/src/shared/components/content';
import { SectionHeader } from '@/src/shared/components/content';

const terms = [
  {
    stepNumber: '01',
    title: 'TERM ONE: Systems Fundamentals',
    duration: '3 months',
    subtitle: 'Elimination Gate: Month 3',
    sections: [
      {
        title: 'Core Constraints',
        items: [
          'Daily attendance mandatory 0800-1800 hours',
          'Weekly evaluation protocols with documented performance',
          'No external commitments permitted during program hours',
          'Minimum 80% evaluation threshold for continuation',
        ]
      }
    ],
    warningSection: {
      title: 'Elimination',
      content: 'Failure to meet evaluation threshold, attendance violations, or inability to demonstrate foundational competency results in immediate program termination.'
    }
  },
  {
    stepNumber: '02',
    title: 'TERM TWO: Applied Engineering',
    duration: '3 months',
    subtitle: 'Elimination Gate: Month 6',
    sections: [
      {
        title: 'Core Constraints',
        items: [
          'Project-based evaluation with measurable deliverables',
          'Peer collaboration requirements with individual accountability',
          'Technical documentation and presentation obligations',
          'Minimum 85% evaluation threshold for continuation',
        ]
      }
    ],
    warningSection: {
      title: 'Elimination',
      content: 'Inability to complete projects to specification, failure to collaborate effectively, or falling below evaluation threshold results in termination.'
    }
  },
  {
    stepNumber: '03',
    title: 'TERM THREE: Production Systems',
    duration: '3 months',
    subtitle: 'Elimination Gate: Month 9',
    sections: [
      {
        title: 'Core Constraints',
        items: [
          'Real-world system development under supervision',
          'Client interaction and requirement management',
          'Code review and quality assurance protocols',
          'Minimum 90% evaluation threshold for Phase II eligibility',
        ]
      }
    ],
    warningSection: {
      title: 'Elimination',
      content: 'Failure to meet production standards, inability to work with clients, or falling below evaluation threshold prevents Phase II advancement.'
    }
  },
];

export const PhaseOneSection: React.FC = () => {
  return (
    <div className="space-y-3">
      <SectionHeader 
        title="Phase I: Foundation Terms"
        subtitle="Months 1-9: Building core engineering competencies"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {terms.map((term) => (
          <ProcessCard key={term.stepNumber} {...term} />
        ))}
      </div>
    </div>
  );
};
