/**
 * Program Boundaries Section
 * 
 * Modern design showing clear separation between programs
 */

import React from 'react';

export const ProgramBoundariesSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-12 px-8 md:px-12 rounded-lg">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight">
            Program Boundaries
          </h2>
        </div>

        {/* Clear Separation Card */}
        <div className="bg-white border-l-4 border-gray-900 p-6 md:p-8 rounded-r-lg shadow-sm">
          <h3 className="text-sm font-medium text-black uppercase tracking-wider mb-3">
            Clear Separation
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light text-justify">
            Short Programs are completely separate from the HI Labs Flagship Program. These are weekend and time-bound skill-focused modules that do not provide pathway to the 12-month engineering production system.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <p className="text-base text-gray-700 leading-relaxed font-light text-justify">
            Short Programs operate as standalone educational modules designed for working professionals 
            and students seeking specific skill development. They do not constitute preparation for, 
            qualification for, or guarantee admission to the Flagship Program.
          </p>
          
          <p className="text-base text-gray-700 leading-relaxed font-light text-justify">
            Short Programs serve professionals who require targeted skill development without the 
            commitment of full-time, long-term training. These modules address specific technical 
            competencies through concentrated instruction and practical application, operating on 
            weekend and evening formats to accommodate employment.
          </p>
        </div>
      </div>
    </section>
  );
};
