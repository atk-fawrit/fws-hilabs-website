/**
 * Operating Principles Section
 * 
 * Enhanced display of the systematic operating principles of HI Labs
 */

import React from 'react';
import { H2, H3, BodyText } from '@/src/shared/components/typography';
import { InfoBox } from '@/src/shared/components/content';

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
      <H2 className="text-3xl font-light text-primary mb-4">Operating Principles</H2>
      
      <div className="space-y-6">
        <BodyText className="text-primary/80 leading-relaxed">
          HI Labs operates according to systematic principles that govern 
          institutional decision-making, competency development protocols, 
          and organizational accountability without prose elaboration or 
          interpretive commentary.
        </BodyText>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle) => (
            <div key={principle.number} className="bg-accent/5 border-l-4 border-accent p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-accent text-white flex items-center justify-center font-mono font-medium text-sm">
                  {principle.number}
                </div>
                <H3 className="text-lg font-medium text-primary flex-1">{principle.title}</H3>
              </div>
              <BodyText className="text-sm text-primary/80 leading-relaxed">
                {principle.description}
              </BodyText>
            </div>
          ))}
        </div>

        <InfoBox
          variant="neutral"
          title="PRINCIPLE APPLICATION"
          description="These principles operate as systematic constraints on institutional decision-making and operational protocols, ensuring consistent application across all domains without exception or modification based on individual circumstances."
        />
      </div>
    </section>
  );
};
