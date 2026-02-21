/**
 * Phase One Section
 * 
 * Displays the three foundation terms (Months 1-9) with premium design
 */

import React from 'react';
import Image from 'next/image';

const terms = [
  {
    stepNumber: '01',
    title: 'Systems Fundamentals',
    duration: '3 months',
    subtitle: 'Elimination Gate: Month 3',
    constraints: [
      'Daily attendance mandatory 0800-1800 hours',
      'Weekly evaluation protocols with documented performance',
      'No external commitments permitted during program hours',
      'Minimum 80% evaluation threshold for continuation',
    ],
    elimination: 'Failure to meet evaluation threshold, attendance violations, or inability to demonstrate foundational competency results in immediate program termination.'
  },
  {
    stepNumber: '02',
    title: 'Applied Engineering',
    duration: '3 months',
    subtitle: 'Elimination Gate: Month 6',
    constraints: [
      'Project-based evaluation with measurable deliverables',
      'Peer collaboration requirements with individual accountability',
      'Technical documentation and presentation obligations',
      'Minimum 85% evaluation threshold for continuation',
    ],
    elimination: 'Inability to complete projects to specification, failure to collaborate effectively, or falling below evaluation threshold results in termination.'
  },
  {
    stepNumber: '03',
    title: 'Production Systems',
    duration: '3 months',
    subtitle: 'Elimination Gate: Month 9',
    constraints: [
      'Real-world system development under supervision',
      'Client interaction and requirement management',
      'Code review and quality assurance protocols',
      'Minimum 90% evaluation threshold for Phase II eligibility',
    ],
    elimination: 'Failure to meet production standards, inability to work with clients, or falling below evaluation threshold prevents Phase II advancement.'
  },
];

export const PhaseOneSection: React.FC = () => {
  return (
    <div className="w-full space-y-12">
      {/* Hero Image with Title Overlay */}
      <div className="relative h-48 sm:h-64 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden">
        <Image
          src="/images/phase-one-foundation.jpg"
          alt="Phase I Foundation"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-12">
          <div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-2 sm:mb-4 text-white tracking-tight">
              Phase I: Foundation Terms
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-light">
              Months 1-9: Building core engineering competencies
            </p>
          </div>
        </div>
      </div>
      
      {/* Terms List */}
      <div className="space-y-10 sm:space-y-16 px-0 sm:px-4">
        {terms.map((term) => (
          <div key={term.stepNumber} className="relative pl-14 sm:pl-20">
            {/* Vertical Line */}
            <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-blue-400 to-transparent"></div>
            
            {/* Term Number Circle */}
            <div className="absolute left-0 top-0 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-mono font-bold text-sm sm:text-xl">{term.stepNumber}</span>
            </div>
            
            {/* Term Content */}
            <div className="space-y-6">
              {/* Term Header */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-2 tracking-tight">
                  {term.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-sm sm:text-base text-gray-500">
                  <span className="font-medium">{term.duration}</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="font-light">{term.subtitle}</span>
                </div>
              </div>
              
              {/* Core Constraints */}
              <div>
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
                  Core Constraints
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {term.constraints.map((constraint, idx) => (
                    <li key={idx} className="flex items-start gap-3 group">
                      <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                        <div className="w-full h-full border-2 border-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-200">
                          <div className="w-2 h-2 bg-blue-600 rounded-full group-hover:bg-white transition-colors duration-200"></div>
                        </div>
                      </div>
                      <span className="text-gray-700 leading-relaxed font-light">{constraint}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Elimination Warning */}
              <div className="bg-gradient-to-r from-red-50 to-red-50/50 border-l-4 border-red-600 rounded-r-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <svg className="w-full h-full text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-red-900 uppercase tracking-widest mb-2">
                      Elimination Criteria
                    </h4>
                    <p className="text-red-800 leading-relaxed font-light">
                      {term.elimination}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
