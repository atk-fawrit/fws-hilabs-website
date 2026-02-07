/**
 * Operating Format Section
 * 
 * Modern design for operating format and rules
 */

import React from 'react';

export const OperatingFormatSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 px-8 md:px-12">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight">
            Operating Format and Rules
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light text-justify">
            Short Programs operate on weekend schedules to accommodate working professionals. 
            Sessions are conducted in-person at the Lucknow facility with structured timelines 
            and specific deliverable requirements.
          </p>
        </div>
        
        {/* Schedule Structure Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8">
          <h3 className="text-sm font-medium text-black uppercase tracking-wider mb-6">
            Schedule Structure
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Days', value: 'Saturday & Sunday' },
              { label: 'Hours', value: '0900-1700 hours' },
              { label: 'Duration', value: '4-8 weekends' },
              { label: 'Capacity', value: 'Max 20 participants' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-xs text-gray-500 mb-2 font-medium uppercase tracking-wider">{item.label}</div>
                <div className="text-base text-gray-900 font-light">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Program Rules */}
        <div className="bg-gray-900 text-white p-6 md:p-8 rounded-lg">
          <h3 className="text-sm font-medium uppercase tracking-wider mb-4">
            Program Rules
          </h3>
          <p className="text-base text-white/90 leading-relaxed font-light text-justify">
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
