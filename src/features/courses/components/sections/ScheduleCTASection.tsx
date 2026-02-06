/**
 * Schedule CTA Section
 * 
 * Modern design for program schedule and registration
 */

import React from 'react';

export const ScheduleCTASection: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-8 md:px-16 lg:px-24 rounded-lg">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Program Schedule and Registration
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            Short Program schedules are published quarterly with specific start dates, duration, and capacity information. 
            Registration operates on a first-come, first-served basis with prerequisite verification.
          </p>
        </div>
        
        {/* Registration Process */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 md:p-10">
          <h3 className="text-sm font-medium text-gray-900 uppercase tracking-wider mb-8">
            Registration Process
          </h3>
          <div className="space-y-6">
            {[
              { step: '01', text: 'Review current schedule and programs' },
              { step: '02', text: 'Verify prerequisite requirements' },
              { step: '03', text: 'Submit registration with documentation' },
              { step: '04', text: 'Complete payment within 48 hours' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-6 p-5 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-medium text-lg">
                  {item.step}
                </div>
                <p className="text-base md:text-lg text-gray-700 font-light mt-2.5 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Note */}
        <div className="bg-gray-900 text-white p-8 md:p-10 rounded-lg">
          <h3 className="text-sm font-medium uppercase tracking-wider mb-6">
            Important
          </h3>
          <p className="text-lg text-white/90 leading-relaxed font-light mb-8">
            Programs have maximum enrollment to ensure effective instruction. 
            Registration closes when capacity is reached, regardless of scheduled start date. Program schedules 
            and availability are updated monthly.
          </p>
          
          <a 
            href="/schedule"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-base"
          >
            View Current Schedule
          </a>
        </div>
      </div>
    </section>
  );
};
