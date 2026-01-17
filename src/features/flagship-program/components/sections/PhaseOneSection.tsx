/**
 * Phase One Section
 * 
 * Displays the three foundation terms (Months 1-9)
 */

import React from 'react';
import { H2 } from '@/src/shared/components/typography';
import { TermCard } from '../ui';

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
    <section className="space-y-8">
      <div className="text-center">
        <H2 className="text-4xl font-bold text-primary mb-3">Phase I: Foundation Terms</H2>
        <p className="text-xl text-secondary">Months 1-9: Building core engineering competencies</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {terms.map((term) => (
          <TermCard key={term.termNumber} {...term} />
        ))}
      </div>
    </section>
  );
};
