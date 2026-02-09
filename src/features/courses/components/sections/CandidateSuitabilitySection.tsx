/**
 * Candidate Suitability Section
 * 
 * Modern design for good fit and poor fit candidates
 */

import React from 'react';

export const CandidateSuitabilitySection: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 px-8 md:px-12">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight">
            Candidate Suitability
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light text-justify">
            Short Programs are designed for specific candidate profiles who can benefit from focused skill 
            development within the program constraints and time commitments.
          </p>
        </div>
        
        {/* Good/Poor Fit Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Good Fit */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-black">Good Fit Candidates</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Working professionals seeking specific skills',
                'Students wanting practical experience',
                'Career explorers testing technical fields',
                'Entrepreneurs needing technical competencies'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 hover:bg-white rounded-lg transition-colors">
                  <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base text-gray-700 font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Poor Fit */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-black">Poor Fit Candidates</h3>
            </div>
            <ul className="space-y-3">
              {[
                'Expecting comprehensive career transformation',
                'Seeking placement assistance or job guarantees',
                'Unable to commit to weekend schedule',
                'Preferring theoretical over practical learning'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 hover:bg-white rounded-lg transition-colors">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-base text-gray-700 font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="text-base text-gray-700 leading-relaxed font-light text-justify">
          Understanding ideal participant profiles and unsuitable expectations is essential for program success. 
          Candidates with incompatible expectations should consider comprehensive training programs, online courses, 
          or traditional educational institutions that better match their requirements.
        </p>
      </div>
    </section>
  );
};
