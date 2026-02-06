/**
 * Program Boundaries Section
 * 
 * Modern design showing clear separation between programs
 */

import React from 'react';

export const ProgramBoundariesSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-8 md:px-16 lg:px-24 rounded-lg">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Program Boundaries
          </h2>
        </div>

        {/* Clear Separation Card */}
        <div className="bg-white border-l-4 border-gray-900 p-8 md:p-10 rounded-r-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-4">
            Clear Separation
          </h3>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            Short Programs are completely separate from the HI Labs Flagship Program. These are weekend and time-bound skill-focused modules that do not provide pathway to the 12-month engineering production system.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            Short Programs operate as standalone educational modules designed for working professionals 
            and students seeking specific skill development. They do not constitute preparation for, 
            qualification for, or guarantee admission to the Flagship Program.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed font-light">
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
