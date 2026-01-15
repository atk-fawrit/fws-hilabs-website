/**
 * Phase One Section
 * 
 * Displays the three foundation terms (Months 1-9)
 */

import React from 'react';
import { H2 } from '@/src/shared/components/typography';
import { TermSection } from '../ui';

const terms = [
  {
    termNumber: '01',
    title: 'TERM ONE: Systems Fundamentals',
    duration: '3 months',
    eliminationGate: 'Month 3',
    constraints: [
      'Daily attendance mandatory 0800-1800 hours',
      'Weekly evaluation protocols with documented performance',
      'No external commitments permitted during program hours',
      'Minimum 80% evaluation threshold for continuation',
    ],
    eliminationCriteria: 'Failure to meet evaluation threshold, attendance violations, or inability to demonstrate foundational competency results in immediate program termination.',
  },
  {
    termNumber: '02',
    title: 'TERM TWO: Applied Engineering',
    duration: '3 months',
    eliminationGate: 'Month 6',
    constraints: [
      'Project-based evaluation with measurable deliverables',
      'Peer collaboration requirements with individual accountability',
      'Technical documentation and presentation obligations',
      'Minimum 85% evaluation threshold for continuation',
    ],
    eliminationCriteria: 'Inability to complete projects to specification, failure to collaborate effectively, or falling below evaluation threshold results in termination.',
  },
  {
    termNumber: '03',
    title: 'TERM THREE: Production Systems',
    duration: '3 months',
    eliminationGate: 'Month 9',
    constraints: [
      'Real-world system development under supervision',
      'Client interaction and requirement management',
      'Code review and quality assurance protocols',
      'Minimum 90% evaluation threshold for Phase II eligibility',
    ],
    eliminationCriteria: 'Failure to meet production standards, inability to work with clients, or falling below evaluation threshold prevents Phase II advancement.',
  },
];

export const PhaseOneSection: React.FC = () => {
  return (
    <section className="space-y-10">
      <H2 className="text-3xl font-light">Phase I: Foundation Terms (Months 1-9)</H2>
      
      <div className="space-y-16">
        {terms.map((term) => (
          <TermSection key={term.termNumber} {...term} />
        ))}
      </div>
    </section>
  );
};
