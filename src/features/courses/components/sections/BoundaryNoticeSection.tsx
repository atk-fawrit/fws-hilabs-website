/**
 * Boundary Notice Section
 * 
 * Prominent notice clarifying what Short Programs do NOT provide
 */

import React from 'react';

export const BoundaryNoticeSection: React.FC = () => {
  return (
    <section className="w-full bg-amber-50 border-t-4 border-amber-500 py-8 px-8 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-start gap-6">
          {/* Warning Icon */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-amber-900 tracking-tight">
              Important Program Boundaries
            </h2>
            
            <div className="space-y-3">
              <p className="text-base md:text-lg text-amber-900 font-semibold">
                Short Programs are standalone skill development modules. They explicitly do NOT provide:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  'Internship opportunities',
                  'Deployment placements',
                  'Pathway to Flagship Program'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg border-2 border-amber-200">
                    <div className="flex-shrink-0 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-sm font-bold text-amber-900">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-amber-800 leading-relaxed pt-2">
                Short Programs are designed for working professionals seeking targeted skill development without 
                full-time commitment. They operate independently from the Flagship Program admission and deployment systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
