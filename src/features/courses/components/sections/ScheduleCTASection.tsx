/**
 * Schedule CTA Section
 * 
 * Modern design for program schedule and registration
 */

import React from 'react';

export const ScheduleCTASection: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-12 px-8 md:px-12 rounded-lg">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 tracking-tight">
            Program Schedule and Registration
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light text-justify">
            Short Program schedules are published quarterly with specific start dates, duration, and capacity information. 
            Registration operates on a first-come, first-served basis with prerequisite verification.
          </p>
        </div>
        
        {/* Registration Process */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8">
          <h3 className="text-sm font-medium text-black uppercase tracking-wider mb-6">
            Registration Process
          </h3>
          <div className="space-y-4">
            {[
              { step: '01', text: 'Review current schedule and programs' },
              { step: '02', text: 'Verify prerequisite requirements' },
              { step: '03', text: 'Submit registration with documentation' },
              { step: '04', text: 'Complete payment within 48 hours' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-10 h-10 bg-gray-900 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-medium">
                  {item.step}
                </div>
                <p className="text-base text-gray-700 font-light mt-2 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Note */}
        <div className="bg-gray-900 text-white p-6 md:p-8 rounded-lg">
          <h3 className="text-sm font-medium uppercase tracking-wider mb-4">
            Important
          </h3>
          <p className="text-base text-white/90 leading-relaxed font-light mb-6 text-justify">
            Programs have maximum enrollment to ensure effective instruction. 
            Registration closes when capacity is reached, regardless of scheduled start date. Program schedules 
            and availability are updated monthly.
          </p>
          
                <a 
            href="/schedule"
            className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-base"
          >
            View Current Schedule
          </a>
        </div>
      </div>
    </section>
  );
};
