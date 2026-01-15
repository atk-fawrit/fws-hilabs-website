/**
 * Selection Process Section
 * 
 * Displays the four-stage selection process
 */

import React from 'react';
import { H2 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { SelectionStage } from '../ui';

const selectionStages = [
  {
    number: '01',
    title: 'APPLICATION SUBMISSION',
    duration: 'Rolling basis',
    format: undefined,
    timeline: undefined,
    notification: undefined,
    components: [
      'Completed application form with eligibility verification',
      'Technical background summary (education, experience, projects)',
      'Commitment statement acknowledging program constraints',
      'Timeline confirmation for 12-month availability',
    ],
    structure: undefined,
    factors: undefined,
    evaluationSignals: 'EVALUATION SIGNALS: Completeness of application, clarity of technical background, understanding of program constraints, realistic timeline assessment.',
  },
  {
    number: '02',
    title: 'SCREENING ASSESSMENT',
    duration: '3 hours',
    format: 'Online proctored',
    timeline: undefined,
    notification: undefined,
    components: [
      'Logical reasoning and problem-solving evaluation',
      'Basic programming concepts and syntax comprehension',
      'Technical communication through written responses',
      'System thinking and analytical approach demonstration',
    ],
    structure: undefined,
    factors: undefined,
    evaluationSignals: 'EVALUATION SIGNALS: Problem-solving approach, technical reasoning clarity, communication precision, learning aptitude indicators.',
  },
  {
    number: '03',
    title: 'TECHNICAL INTERVIEW',
    duration: '90 minutes',
    format: 'In-person or video',
    timeline: undefined,
    notification: undefined,
    components: undefined,
    structure: [
      'Technical background discussion and verification',
      'Live problem-solving with thinking process evaluation',
      'Program expectations and constraint acknowledgment',
      'Commitment verification and timeline confirmation',
    ],
    factors: undefined,
    evaluationSignals: 'EVALUATION SIGNALS: Technical reasoning quality, learning approach, communication effectiveness, commitment authenticity, program alignment.',
  },
  {
    number: '04',
    title: 'ADMISSION DECISION',
    duration: undefined,
    format: undefined,
    timeline: '7 business days post-interview',
    notification: 'Written',
    components: undefined,
    structure: undefined,
    factors: [
      'Cumulative evaluation across all selection stages',
      'Technical aptitude and learning capacity assessment',
      'Commitment verification and constraint acceptance',
      'Cohort composition and program capacity considerations',
    ],
    evaluationSignals: 'DECISION OUTCOMES: Admission with program placement, waitlist for future cohorts, or rejection with specific feedback on deficiencies.',
  },
];

export const SelectionProcessSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2>Selection Process</H2>
      
      <div className="space-y-8">
        <BodyText>
          The selection process consists of four transparent stages designed to evaluate 
          technical aptitude, commitment capacity, and program alignment. Each stage 
          eliminates candidates who do not meet the requirements for advancement.
        </BodyText>
        
        <div className="space-y-12">
          {selectionStages.map((stage) => (
            <SelectionStage key={stage.number} {...stage} />
          ))}
        </div>
      </div>
    </section>
  );
};
