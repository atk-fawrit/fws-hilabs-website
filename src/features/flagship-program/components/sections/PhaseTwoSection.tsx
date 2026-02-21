/**
 * Phase Two Section
 * 
 * Displays supervised deployment phase (Months 10-12) with premium design
 */

import React from 'react';
import Image from 'next/image';

export const PhaseTwoSection: React.FC = () => {
  const supervisionItems = [
    'Daily supervision by designated technical lead at deployment site',
    'Weekly evaluation reports submitted to HI Labs oversight',
    'Bi-weekly review sessions with HI Labs instructional staff',
    'Monthly performance assessment with elimination review'
  ];

  const constraintItems = [
    'Minimum 40 hours per week at deployment site',
    'Adherence to partner organization protocols and standards',
    'Completion of assigned projects within specified timelines',
    'Professional conduct and communication standards'
  ];

  return (
    <div className="w-full relative py-12 sm:py-16 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Explore-bg.jpg"
          alt="Phase II Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          <div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-light mb-3 sm:mb-4 text-white tracking-tight">
              Phase II: Supervised Deployment
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed">
              Real-world engineering deployment (Months 10-12) with systematic supervision, performance tracking, and professional development protocols
            </p>
          </div>

          {/* Supervision Model */}
          <div className="space-y-4">
            <h3 className="text-2xl font-light text-white tracking-tight">Supervision Model</h3>
            <ul className="space-y-3">
              {supervisionItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 bg-blue-400 rounded-full"></div>
                  <span className="text-white/90 leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deployment Constraints */}
          <div className="space-y-4">
            <h3 className="text-2xl font-light text-white tracking-tight">Deployment Constraints</h3>
            <ul className="space-y-3">
              {constraintItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 bg-blue-400 rounded-full"></div>
                  <span className="text-white/90 leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
