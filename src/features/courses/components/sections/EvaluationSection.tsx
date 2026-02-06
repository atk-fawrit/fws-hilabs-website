/**
 * Evaluation Section
 * 
 * Modern design for evaluation and recognition
 */

import React from 'react';

export const EvaluationSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-8 md:px-16 lg:px-24 rounded-lg">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Evaluation and Recognition Approach
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            Short Programs employ practical evaluation focused on skill demonstration and application competency. 
            Assessment measures ability to apply learned concepts in realistic scenarios rather than theoretical knowledge retention.
          </p>
        </div>
        
        {/* Evaluation Components */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-10">
          <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-8">
            Evaluation Components
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Weekly practical assignments',
              'Mid-program projects',
              'Final capstone projects',
              'Peer collaboration assessment'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="w-2 h-2 bg-gray-900 rounded-full flex-shrink-0"></div>
                <span className="text-base md:text-lg text-gray-700 font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Completion Requirements */}
        <div className="bg-white border-l-4 border-gray-900 p-8 md:p-10 rounded-r-lg shadow-sm">
          <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-6">
            Completion Requirements
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            80% attendance minimum, successful completion of all 
            assignments, passing grade on capstone project, and demonstration of practical skill application. 
            Certificates indicate specific competencies achieved and include project portfolio references. 
            Recognition does not constitute professional certification or guarantee employment qualification.
          </p>
        </div>
      </div>
    </section>
  );
};
