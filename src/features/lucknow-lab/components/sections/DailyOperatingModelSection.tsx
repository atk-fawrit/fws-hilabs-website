/**
 * Daily Operating Model Section
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

const operationalFramework = [
  {
    number: '01',
    title: 'Structured Daily Schedule',
    description: 'Daily operations operate through systematic schedule with defined competency development blocks, assessment periods, and performance tracking intervals that maintain consistent institutional protocols and learning progression.',
    standard: 'SCHEDULE STANDARD: 8-hour daily sessions with systematic competency development, assessment, and performance tracking protocols maintained consistently.',
  },
  {
    number: '02',
    title: 'Cohort Structure and Management',
    description: 'Cohort operations maintain systematic structure with optimal size management, instructor allocation, resource distribution, and performance tracking that ensure effective competency development and individual accountability.',
    standard: 'COHORT SPECIFICATION: Maximum 24 candidates per cohort with dedicated instructor assignment and systematic performance tracking protocols.',
  },
  {
    number: '03',
    title: 'Competency Development Protocols',
    description: 'Systematic competency development operates through structured learning modules, practical application sessions, assessment checkpoints, and elimination protocols that ensure consistent skill acquisition and performance standards.',
    standard: 'DEVELOPMENT STANDARD: Systematic competency progression with documented assessment criteria and elimination thresholds applied consistently.',
  },
  {
    number: '04',
    title: 'Performance Monitoring and Intervention',
    description: 'Daily performance monitoring operates through systematic tracking, intervention protocols, and elimination decision frameworks that maintain institutional standards and individual accountability throughout the competency development process.',
    standard: 'MONITORING STANDARD: Daily performance tracking with systematic intervention protocols and elimination decision authority maintained consistently.',
  },
];

export const DailyOperatingModelSection: React.FC = () => {
  return (
    <section className="space-y-6">
      <H2 className="text-3xl font-light text-primary mb-4">Daily Operating Model</H2>
      
      <div className="space-y-4">
        <BodyText className="text-primary/80 leading-relaxed">
          The Lucknow Lab operates through systematic daily protocols with 
          structured cohort management, competency development schedules, 
          and performance tracking systems that ensure consistent institutional 
          standards and operational efficiency.
        </BodyText>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {operationalFramework.map((item) => (
            <div key={item.number} className="bg-primary/5 border-l-4 border-primary p-4">
              <BodyText className="font-medium text-primary mb-2 text-sm">{item.number}. {item.title}</BodyText>
              <BodyText className="text-xs text-primary/80 leading-relaxed mb-3">{item.description}</BodyText>
              <div className="bg-accent/10 p-2 border-l-2 border-accent">
                <BodyText className="text-xs text-primary/70">{item.standard}</BodyText>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
