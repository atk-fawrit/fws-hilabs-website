/**
 * Operating Format Section
 * 
 * Modern design for operating format and rules
 */

import React from 'react';

export const OperatingFormatSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-8 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Operating Format and Rules
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            Short Programs operate on weekend schedules to accommodate working professionals. 
            Sessions are conducted in-person at the Lucknow facility with structured timelines 
            and specific deliverable requirements.
          </p>
        </div>
        
        {/* Schedule Structure Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-10">
          <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-8">
            Schedule Structure
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Days', value: 'Saturday & Sunday' },
              { label: 'Hours', value: '0900-1700 hours' },
              { label: 'Duration', value: '4-8 weekends' },
              { label: 'Capacity', value: 'Max 20 participants' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-sm text-gray-500 mb-3 font-medium uppercase tracking-wider">{item.label}</div>
                <div className="text-lg text-gray-900 font-light">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Rules */}
        <div className="bg-gray-900 text-white p-8 md:p-10 rounded-lg">
          <h3 className="text-sm font-medium uppercase tracking-wider mb-6">
            Program Rules
          </h3>
          <p className="text-lg text-white/90 leading-relaxed font-light">
            No make-up sessions are provided for missed attendance. 
            Completion requires attendance at a minimum of 80% of sessions. No refunds are available 
            after program commencement. Professional conduct standards apply to all interactions 
            throughout the program.
          </p>
        </div>
      </div>
    </section>
  );
};
