/**
 * Commitment and Risk Disclosure Section
 * 
 * Displays commitment requirements and risk acknowledgment with enhanced visuals
 */

import React from 'react';

export const CommitmentAndRiskSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-8 md:px-16 lg:px-24">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 tracking-tight">
            Commitment and Risk Disclosure
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed font-light">
            Understanding and acceptance of significant commitments and risks before program commencement
          </p>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Commitment Requirements Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <h3 className="text-gray-900 font-medium text-lg mb-6 uppercase tracking-wider">Commitment Requirements</h3>
            <ul className="space-y-4">
              {[
                'Full-time participation for 12 consecutive months',
                'Daily attendance 0800-1800 hours, Monday through Friday',
                'Relocation to Lucknow for program duration',
                'Termination of conflicting employment or commitments',
                'Acceptance of elimination-based evaluation system',
                'Compliance with institutional protocols and standards'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <svg className="w-full h-full text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Risk Acknowledgment Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            <h3 className="text-gray-900 font-medium text-lg mb-6 uppercase tracking-wider">Risk Acknowledgment</h3>
            <ul className="space-y-4">
              {[
                'No guarantee of program completion or employment outcomes',
                'Elimination possible at any stage based on performance',
                'No refunds after program commencement',
                'Financial responsibility for living expenses during program',
                'Career opportunity cost during 12-month commitment',
                'No appeals process for elimination decisions'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <svg className="w-full h-full text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <span className="text-gray-700 leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Note */}
        <div className="bg-gray-100 border-l-4 border-gray-900 p-6 rounded-r-lg">
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            Candidates who cannot accept these commitments and risks should not proceed 
            with the application process. The program is designed for individuals who 
            understand and embrace these constraints as necessary for effective talent production.
          </p>
        </div>
      </div>
    </section>
  );
};
