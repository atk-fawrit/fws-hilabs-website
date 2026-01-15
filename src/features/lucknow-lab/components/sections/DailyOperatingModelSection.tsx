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
    <section className="space-y-8">
      <H2>Daily Operating Model</H2>
      
      <div className="space-y-6">
        <BodyText>
          The Lucknow Lab operates through systematic daily protocols with 
          structured cohort management, competency development schedules, 
          and performance tracking systems that ensure consistent institutional 
          standards and operational efficiency.
        </BodyText>
        
        <div className="space-y-12">
          <div className="space-y-4">
            <H3 className="font-mono">DAILY OPERATIONAL FRAMEWORK</H3>
            <div className="pl-6 space-y-8">
              {operationalFramework.map((item) => (
                <div key={item.number} className="space-y-4">
                  <BodyText><strong>{item.number}. {item.title}</strong></BodyText>
                  <div className="pl-4 space-y-3">
                    <BodyText>{item.description}</BodyText>
                    <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                      <BodyText className="font-mono text-sm">{item.standard}</BodyText>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
