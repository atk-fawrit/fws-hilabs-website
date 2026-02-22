/**
 * Placement Support Section
 * 
 * Displays placement support, career coaching, and employer matching with premium design
 */

import React from 'react';
import Image from 'next/image';

export const EvaluationSystemSection: React.FC = () => {
  const placementSupport = [
    "Guaranteed Placement: We provide a 6-month internship to every Fellow who completes the training phase.",
    "The HI Labs Guarantee: We stand by our selection and training. If we are unable to secure an internship placement for you, we provide a full refund of your training fees.",
  ];

  const careerCoaching = [
    "Intensive soft-skills training",
    "Aptitude test preparation",
    "1-on-1 LinkedIn and Resume optimization sessions"
  ];

  const employerMatching = [
    "We use your Phase I Leveling data (Level 1-5) to match you with partner companies that fit your specific expertise and speed."
  ];

  return (
    <div className="w-full py-10 sm:py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
          {/* Content - 2 columns */}
          <div className="lg:col-span-2 space-y-8 sm:space-y-12">
            <div>
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6 text-gray-900 tracking-tight">
                Placement Support
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                Our Commitment to Your Career
              </p>
              <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed mt-4">
                We don't just train you; we bridge the gap to your first engineering role. Our Placement Support is built on accountability and results.
              </p>
            </div>

            {/* Guaranteed Placement */}
            <div className="space-y-4">
              <h3 className="text-2xl font-light text-gray-900 tracking-tight">Guaranteed Placement & The HI Labs Guarantee</h3>
              <ul className="space-y-4">
                {placementSupport.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 leading-relaxed font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Coaching */}
            <div className="space-y-4">
              <h3 className="text-2xl font-light text-gray-900 tracking-tight">Career Coaching</h3>
              <p className="text-gray-600 font-light leading-relaxed mb-3">
                Includes:
              </p>
              <ul className="space-y-3">
                {careerCoaching.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 leading-relaxed font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Employer Matching */}
            <div className="space-y-4">
              <h3 className="text-2xl font-light text-gray-900 tracking-tight">Employer Matching</h3>
              <ul className="space-y-3">
                {employerMatching.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700 leading-relaxed font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image - 1 column */}
          <div className="lg:col-span-1">
            <div className="relative h-[500px] lg:h-full lg:min-h-[700px] rounded-xl overflow-hidden sticky top-24">
              <Image
                src="/images/evaluation-system.jpg"
                alt="Placement Support"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
