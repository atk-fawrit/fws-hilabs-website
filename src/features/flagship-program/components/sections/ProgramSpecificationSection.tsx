/**
 * Program Specification Section
 * 
 * Modern two-column design with card-based exclusions and contemporary typography
 * Includes Quick Reference section in the left column
 */

import React from 'react';
import { H2, H3, BodyText } from '@/src/shared/components/typography';
import { programOverview } from '../../data';

export const ProgramSpecificationSection: React.FC = () => {
  const exclusionItems = [
    'NOT available online or in hybrid format',
    'NOT compatible with parallel employment',
    'NOT certificate-driven or credential-focused',
    'NO placement guarantees or outcome promises',
    'NO refunds after program commencement'
  ];

  return (
    <section className="w-full px-6 py-10">
      {/* Two Column Layout */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Program Structure + Quick Reference */}
        <div className="space-y-6">
          {/* Program Structure */}
          <div>
            <div className="inline-block mb-2">
              <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Overview</span>
            </div>
            <H2 className="mb-4">Program Structure</H2>
            <div className="space-y-3">
              <BodyText>
                This specification defines program structure, constraints, and elimination criteria. Candidates must commit to 
                full-time, in-person participation for the complete 12-month duration.
              </BodyText>
              <BodyText>
                The program operates as a selection and elimination system, not a traditional educational service.
              </BodyText>
            </div>
          </div>

          {/* Quick Reference - Program Specifications */}
          <div className="bg-accent/5 border-l-4 border-accent p-4 rounded-r-lg">
            <H3 className="text-primary mb-3">Program Specifications</H3>
            <div className="grid grid-cols-1 gap-3 text-sm">
              <div className="flex justify-between items-center">
                <BodyText className="font-medium text-primary">Duration:</BodyText>
                <BodyText className="text-primary/70">{programOverview.duration}</BodyText>
              </div>
              <div className="flex justify-between items-center">
                <BodyText className="font-medium text-primary">Format:</BodyText>
                <BodyText className="text-primary/70">{programOverview.format}</BodyText>
              </div>
              <div className="flex justify-between items-center">
                <BodyText className="font-medium text-primary">Structure:</BodyText>
                <BodyText className="text-primary/70">{programOverview.phases}</BodyText>
              </div>
              <div className="flex justify-between items-center">
                <BodyText className="font-medium text-primary">Assessment:</BodyText>
                <BodyText className="text-primary/70">{programOverview.evaluation}</BodyText>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Selection System */}
        <div>
          <div className="inline-block mb-2">
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Framework</span>
          </div>
          <H2 className="mb-4">Selection & Elimination</H2>
          
          {/* Explicit Exclusions Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-5 py-3 border-b border-gray-200">
              <H3>Explicit Exclusions</H3>
            </div>
            <div className="p-5">
              <div className="space-y-2">
                {exclusionItems.map((exclusion, idx) => (
                  <div key={idx} className="flex items-start gap-3 group hover:bg-gray-50 -mx-2 px-2 py-2 rounded-lg transition-colors duration-200">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <BodyText className="flex-1 text-gray-700">{exclusion}</BodyText>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <BodyText variant="metadata" className="text-gray-600">Strict constraints apply</BodyText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};