/**
 * Candidate Suitability Section
 * 
 * Modern design for good fit and poor fit candidates
 */

import React from 'react';

export const CandidateSuitabilitySection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Candidate Suitability
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            Short Programs are designed for specific candidate profiles who can benefit from focused skill 
            development within the program constraints and time commitments.
          </p>
        </div>
        
        {/* Good/Poor Fit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Good Fit */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900">Good Fit Candidates</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Working professionals seeking specific skills',
                'Students wanting practical experience',
                'Career explorers testing technical fields',
                'Entrepreneurs needing technical competencies'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 p-4 hover:bg-white rounded-lg transition-colors">
                  <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-base md:text-lg text-gray-700 font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Poor Fit */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900">Poor Fit Candidates</h3>
            </div>
            <ul className="space-y-4">
              {[
                'Expecting comprehensive career transformation',
                'Seeking placement assistance or job guarantees',
                'Unable to commit to weekend schedule',
                'Preferring theoretical over practical learning'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 p-4 hover:bg-white rounded-lg transition-colors">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
                  <span className="text-base md:text-lg text-gray-700 font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="text-lg text-gray-700 leading-relaxed font-light">
          Understanding ideal participant profiles and unsuitable expectations is essential for program success. 
          Candidates with incompatible expectations should consider comprehensive training programs, online courses, 
          or traditional educational institutions that better match their requirements.
        </p>
      </div>
    </section>
  );
};
