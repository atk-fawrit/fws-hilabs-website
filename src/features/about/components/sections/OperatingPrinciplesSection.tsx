/**
 * Operating Principles Section
 * 
 * Displays the systematic operating principles of HI Labs
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { PrincipleItem } from '../ui';

const principles = [
  {
    number: '01',
    title: 'Systematic Competency Development',
    description: 'All engineering competency development operates through systematic protocols with documented assessment criteria and elimination mechanisms rather than subjective evaluation or flexible standards.',
  },
  {
    number: '02',
    title: 'Enforced Evaluation Standards',
    description: 'Evaluation operates through consistent application of documented standards with elimination consequences for performance below established thresholds without exception or accommodation.',
  },
  {
    number: '03',
    title: 'Supervised Deployment Accountability',
    description: 'All engineer deployment operates under systematic supervision with documented performance tracking and intervention protocols maintained throughout deployment arrangements.',
  },
  {
    number: '04',
    title: 'Institutional Discipline Priority',
    description: 'Institutional operations prioritize systematic discipline and protocol compliance over individual accommodation or comfort optimization in all operational decisions.',
  },
  {
    number: '05',
    title: 'Evidence-Based Documentation',
    description: 'All institutional claims and performance assertions operate through documented evidence and systematic assessment rather than testimonial, anecdotal, or promotional representation.',
  },
  {
    number: '06',
    title: 'Transparent Operational Boundaries',
    description: 'Institutional capabilities and limitations are documented explicitly with clear boundary definition to prevent expectation misalignment or capability overstatement.',
  },
];

export const OperatingPrinciplesSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2>Operating Principles</H2>
      
      <div className="space-y-6">
        <BodyText>
          HI Labs operates according to systematic principles that govern 
          institutional decision-making, competency development protocols, 
          and organizational accountability without prose elaboration or 
          interpretive commentary.
        </BodyText>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <H3 className="font-mono">SYSTEMATIC PRINCIPLES</H3>
            <div className="pl-6 space-y-4">
              {principles.map((principle) => (
                <PrincipleItem key={principle.number} {...principle} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
