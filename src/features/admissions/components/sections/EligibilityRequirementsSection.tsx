/**
 * Eligibility Requirements Section
 * 
 * Displays eligibility criteria and non-eligibility conditions
 */

import React, { useState } from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

export const EligibilityRequirementsSection: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="space-y-6">
      <div className="text-center">
        <H2 className="text-3xl font-semibold text-primary mb-2">Eligibility Requirements</H2>
        <div className="w-16 h-1 bg-accent mx-auto mb-4"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Eligibility Criteria Card */}
        <div className="bg-white border border-accent hover:shadow-md transition-shadow">
          <div 
            className="p-6 cursor-pointer"
            onClick={() => setShowDetails(!showDetails)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-accent text-white flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <H3 className="text-lg font-semibold text-accent">ELIGIBILITY CRITERIA</H3>
              </div>
              <svg 
                className={`w-5 h-5 text-accent transition-transform ${showDetails ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          {showDetails && (
            <div className="px-6 pb-6">
              <ul className="space-y-3">
                {[
                  'Age 18-28 at program commencement',
                  'Bachelor\'s degree in any discipline or equivalent',
                  'Basic programming exposure (any language)',
                  'English proficiency for technical communication',
                  'Ability to commit full-time for 12 months',
                  'Physical presence in Lucknow',
                  'Financial capacity for living expenses'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-accent/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <BodyText className="text-sm text-primary leading-relaxed">{item}</BodyText>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Non-Eligibility Conditions Card */}
        <div className="bg-white border border-warning hover:shadow-md transition-shadow">
          <div 
            className="p-6 cursor-pointer"
            onClick={() => setShowDetails(!showDetails)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-warning text-white flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <H3 className="text-lg font-semibold text-warning">NON-ELIGIBILITY CONDITIONS</H3>
              </div>
              <svg 
                className={`w-5 h-5 text-warning transition-transform ${showDetails ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          
          {showDetails && (
            <div className="px-6 pb-6">
              <ul className="space-y-3">
                {[
                  'Current employment that cannot be terminated',
                  'Family commitments requiring regular absence',
                  'Expectation of placement guarantees',
                  'Inability to relocate to Lucknow',
                  'Seeking certification-focused training',
                  'Preference for online/hybrid formats',
                  'Unwilling to accept elimination evaluation'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="w-5 h-5 bg-warning/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg className="w-3 h-3 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <BodyText className="text-sm text-primary leading-relaxed">{item}</BodyText>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-warning/30">
                <BodyText className="text-xs text-secondary">
                  Candidates with these conditions will not be considered for admission.
                </BodyText>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
