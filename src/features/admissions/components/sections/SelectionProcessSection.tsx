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
    <section className="space-y-6">
      <div className="text-center">
        <H2 className="text-3xl font-light text-primary mb-4 pb-4 border-b-2 border-accent">Selection Process</H2>
      </div>
      
      <div className="space-y-6">
        <BodyText className="text-lg leading-relaxed text-primary text-center max-w-4xl mx-auto">
          The selection process consists of four transparent stages designed to evaluate 
          technical aptitude, commitment capacity, and program alignment. Each stage 
          eliminates candidates who do not meet the requirements for advancement.
        </BodyText>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {selectionStages.map((stage) => (
            <div key={stage.number} className="bg-white border border-secondary/20 hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="bg-accent text-white p-6">
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-light">{stage.number}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{stage.title}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{stage.duration || stage.timeline}</span>
                      {stage.format && <span>| {stage.format}</span>}
                      {stage.notification && <span>| {stage.notification}</span>}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h4 className="font-semibold text-sm mb-3 text-primary">Assessment Components:</h4>
                <ul className="space-y-2 mb-4">
                  {(stage.components || stage.structure || stage.factors || []).map((comp, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-secondary">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span>{comp}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-accent/5 p-4">
                  <h5 className="font-semibold text-xs uppercase mb-2 text-accent">Evaluation Signals</h5>
                  <BodyText className="text-sm text-primary">{stage.evaluationSignals}</BodyText>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
