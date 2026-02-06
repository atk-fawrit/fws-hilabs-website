/**
 * Program Specification Section
 * 
 * Modern two-column design with card-based exclusions and contemporary typography
 * Includes Quick Reference section in the left column - Dark theme
 */

import React from 'react';
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
    <section className="w-full bg-black px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Program Structure + Quick Reference */}
          <div className="space-y-8">
            {/* Program Structure */}
            <div>
              <div className="inline-block mb-3">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Overview</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">Program Structure</h2>
              <div className="space-y-4">
                <p className="text-lg text-white/80 font-light leading-relaxed">
                  This specification defines program structure, constraints, and elimination criteria. Candidates must commit to 
                  full-time, in-person participation for the complete 12-month duration.
                </p>
                <p className="text-lg text-white/80 font-light leading-relaxed">
                  The program operates as a selection and elimination system, not a traditional educational service.
                </p>
              </div>
            </div>

            {/* Quick Reference - Program Specifications */}
            <div className="bg-white/5 border-l-4 border-blue-500 p-6 rounded-r-lg backdrop-blur-sm">
              <h3 className="text-xl font-light text-white mb-4 tracking-tight">Program Specifications</h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-white/90">Duration:</span>
                  <span className="text-white/70 font-light">{programOverview.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-white/90">Format:</span>
                  <span className="text-white/70 font-light">{programOverview.format}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-white/90">Structure:</span>
                  <span className="text-white/70 font-light">{programOverview.phases}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-white/90">Assessment:</span>
                  <span className="text-white/70 font-light">{programOverview.evaluation}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Selection System */}
          <div>
            <div className="inline-block mb-3">
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-widest">Framework</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">Selection & Elimination</h2>
            
            {/* Explicit Exclusions Card */}
            <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden backdrop-blur-sm">
              <div className="bg-white/5 px-6 py-4 border-b border-white/10">
                <h3 className="text-xl font-light text-white tracking-tight">Explicit Exclusions</h3>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {exclusionItems.map((exclusion, idx) => (
                    <div key={idx} className="flex items-start gap-3 group hover:bg-white/5 -mx-2 px-2 py-3 rounded-lg transition-colors duration-200">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="flex-1 text-white/80 font-light leading-relaxed">{exclusion}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-sm text-white/60 font-light">Strict constraints apply</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
