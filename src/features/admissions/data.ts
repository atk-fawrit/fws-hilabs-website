/**
 * Admissions Page Data
 * 
 * Consolidated data for all admissions page components
 */

export const admissionsData = {
  hero: {
    image: '/images/commitment-risk-discussion.jpg',
    title: 'Admissions',
    description: '',
  },

  categories: [
    {
      id: 'flagship',
      number: '01',
      title: 'Flagship Program',
      description: '6 months training + 6 months internship full-time engineering talent production program with rigorous selection criteria',
      badge: 'Selection-Based Entry',
      icon: 'shield',
    },
    {
      id: 'short-courses',
      number: '02',
      title: 'Premium Short Courses',
      description: 'Weekend-based professional development courses with direct admission on enrollment',
      badge: 'Direct Admission',
      icon: 'lightning',
    },
  ],

  eligibility: {
    criteria: [
      'Age 18-32 at program commencement',
      "Bachelor's degree in any discipline or equivalent",
      'Basic programming exposure (any language)',
      'English proficiency for technical communication',
      'Ability to commit full-time for 6 months training + 6 months internship',
      'Physical presence in Lucknow',
      'Financial capacity for living expenses',
      'Special cases contact directly',
    ],
    nonEligible: [
      'Current employment that cannot be terminated',
      'Family commitments requiring regular absence',
      'Expectation of placement guarantees',
      'Inability to relocate to Lucknow',
      'Seeking certification-focused training',
      'Preference for online/hybrid formats',
      'Unwilling to accept elimination evaluation',
    ],
  },

  selectionStages: [
    {
      number: '01',
      title: 'Application Submission',
      duration: 'Rolling basis',
      format: 'Online',
      components: [
        'Completed application form with eligibility verification',
        'Technical background summary (education, experience, projects)',
        'Commitment statement acknowledging program constraints',
        'Timeline confirmation for 6 months training + 6 months internship availability',
      ],
      evaluationSignals: 'Completeness of application, clarity of technical background, understanding of program constraints, realistic timeline assessment',
    },
    {
      number: '02',
      title: 'Screening Assessment',
      duration: '3 hours',
      format: 'Online proctored',
      components: [
        'Logical reasoning and problem-solving evaluation',
        'Basic programming concepts and syntax comprehension',
        'Technical communication through written responses',
        'System thinking and analytical approach demonstration',
      ],
      evaluationSignals: 'Problem-solving approach, technical reasoning clarity, communication precision, learning aptitude indicators',
    },
    {
      number: '03',
      title: 'Technical Interview',
      duration: '90 minutes',
      format: 'In-person or video',
      components: [
        'Technical background discussion and verification',
        'Live problem-solving with thinking process evaluation',
        'Program expectations and constraint acknowledgment',
        'Commitment verification and timeline confirmation',
      ],
      evaluationSignals: 'Technical reasoning quality, learning approach, communication effectiveness, commitment authenticity, program alignment',
    },
    {
      number: '04',
      title: 'Admission Decision',
      duration: '7 business days',
      format: 'Written notification',
      components: [
        'Cumulative evaluation across all selection stages',
        'Technical aptitude and learning capacity assessment',
        'Commitment verification and constraint acceptance',
        'Cohort composition and program capacity considerations',
      ],
      evaluationSignals: 'Admission with program placement, waitlist for future cohorts, or rejection with specific feedback on deficiencies',
    },
  ],

  commitments: [
    'Full-time participation for 6 months training + 6 months internship',
    'Daily attendance 0800-1800 hours, Monday through Friday',
    'Relocation to Lucknow for program duration',
    'Termination of conflicting employment or commitments',
    'Acceptance of elimination-based evaluation system',
    'Compliance with institutional protocols and standards',
  ],

  risks: [
    'Program completion or employment outcomes depends on individual performance',
    'Elimination possible at any stage based on performance',
    'No refunds after program commencement except special circumstances',
    'Financial responsibility for living expenses during program',
    'Career opportunity cost during 6 months training + 6 months internship commitment',
    'No appeals process for elimination decisions',
  ],

  timeline: [
    {
      stage: 'Application Submission',
      items: ['Submit complete application', 'Response within 5 business days', 'Screening invitation or rejection'],
    },
    {
      stage: 'Screening Assessment',
      items: ['Schedule within 10 business days', 'Complete 3-hour assessment', 'Results within 3 business days'],
    },
    {
      stage: 'Technical Interview',
      items: ['Schedule within 7 business days', '90-minute interview session', 'Feedback within 2 business days'],
    },
    {
      stage: 'Admission Decision',
      items: ['Final decision within 7 business days', 'Written notification with details', 'Program placement or waitlist status'],
    },
  ],

  protocols: [
    'All communications conducted via email with documented timestamps',
    'Candidates must respond to scheduling requests within 48 hours',
    'Missed deadlines or non-responses result in automatic rejection',
    'No extensions or special accommodations for timeline requirements',
    'Questions directed to admissions@hilabs.in with 24-hour response commitment',
  ],

  shortCourses: {
    overview: {
      title: 'Direct Admission',
      description: 'Premium Short Courses operate on a direct enrollment model with no selection process required.',
      details: 'Unlike the Flagship Program, Premium Short Courses are open to all professionals who meet the basic prerequisites for their chosen course. There is no competitive selection, screening assessment, or interview process.',
      process: 'Choose your course, verify you meet the prerequisites, complete the enrollment form, and confirm your seat. Admission is granted on a first-come, first-served basis subject to available capacity.',
    },
    steps: [
      {
        step: '01',
        title: 'Browse Courses',
        description: 'Review available Premium Short Courses and select the one that matches your professional development goals',
      },
      {
        step: '02',
        title: 'Verify Prerequisites',
        description: 'Confirm you meet the basic prerequisites listed for your chosen course. These are minimal and skills-based',
      },
      {
        step: '03',
        title: 'Complete Enrollment',
        description: 'Fill out the enrollment form with your details and course preference. No essays, assessments, or interviews required',
      },
      {
        step: '04',
        title: 'Confirm Seat',
        description: 'Receive your confirmation and course details. Seats are allocated on a first-come, first-served basis',
      },
    ],
    comparison: [
      { label: 'Selection Process', flagship: 'Multi-stage evaluation', shortCourse: 'None required' },
      { label: 'Duration', flagship: '6 months training + 6 months internship', shortCourse: '4-8 weekends' },
      { label: 'Commitment', flagship: 'Full-time, in-person', shortCourse: 'Weekend sessions' },
      { label: 'Admission Type', flagship: 'Competitive selection', shortCourse: 'Direct enrollment' },
    ],
  },

  checklist: [
    { key: 'eligibility', label: 'Verified eligibility against all criteria' },
    { key: 'availability', label: 'Confirmed 6 months training + 6 months internship availability and relocation capacity' },
    { key: 'evaluation', label: 'Acknowledged elimination-based evaluation system' },
    { key: 'costs', label: 'Accepted financial and career opportunity costs' },
    { key: 'policies', label: 'Understood no placement guarantees or refund policies' },
  ],
};