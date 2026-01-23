/**
 * Admissions Page Data
 * 
 * Static data for admissions page components
 */

export const selectionStages = [
  {
    number: '01',
    title: 'APPLICATION SUBMISSION',
    duration: 'Rolling basis',
    components: [
      'Completed application form with eligibility verification',
      'Technical background summary (education, experience, projects)',
      'Commitment statement acknowledging program constraints',
      'Timeline confirmation for 12-month availability',
    ],
    evaluationSignals: 'EVALUATION SIGNALS: Completeness of application, clarity of technical background, understanding of program constraints, realistic timeline assessment.',
  },
  {
    number: '02',
    title: 'SCREENING ASSESSMENT',
    duration: '3 hours',
    format: 'Online proctored',
    components: [
      'Logical reasoning and problem-solving evaluation',
      'Basic programming concepts and syntax comprehension',
      'Technical communication through written responses',
      'System thinking and analytical approach demonstration',
    ],
    evaluationSignals: 'EVALUATION SIGNALS: Problem-solving approach, technical reasoning clarity, communication precision, learning aptitude indicators.',
  },
  {
    number: '03',
    title: 'TECHNICAL INTERVIEW',
    duration: '90 minutes',
    format: 'In-person or video',
    structure: [
      'Technical background discussion and verification',
      'Live problem-solving with thinking process evaluation',
      'Program expectations and constraint acknowledgment',
      'Commitment verification and timeline confirmation',
    ],
    evaluationSignals: 'EVALUATION SIGNALS: Technical reasoning quality, learning approach, communication effectiveness, commitment authenticity, program alignment.',
  },
  {
    number: '04',
    title: 'ADMISSION DECISION',
    timeline: '7 business days post-interview',
    notification: 'Written',
    factors: [
      'Cumulative evaluation across all selection stages',
      'Technical aptitude and learning capacity assessment',
      'Commitment verification and constraint acceptance',
      'Cohort composition and program capacity considerations',
    ],
    evaluationSignals: 'DECISION OUTCOMES: Admission with program placement, waitlist for future cohorts, or rejection with specific feedback on deficiencies.',
  },
];