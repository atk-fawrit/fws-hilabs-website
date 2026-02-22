/**
 * Application Process Section
 * 
 * Elite intake protocol for admissions with premium design
 */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const ApplicationProcessSection: React.FC = () => {
  const assessmentSteps = [
    "Aptitude & Logic Assessment",
    "Personality & Resilience Test",
    "1-on-1 Technical Interview"
  ];

  return (
    <div className="w-full py-10 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-8 md:gap-12 items-start">
          {/* Content - 7 columns */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10">
            <div>
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6 text-gray-900 tracking-tight">
                Application Process
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                Elite Intake Protocol
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Admission to the Fellowship is highly selective. We look for high cognitive load capacity, logical reasoning, and "grit."
              </p>

              {/* Assessment Steps */}
              <div className="space-y-4">
                <h3 className="text-2xl font-light text-gray-900 tracking-tight mb-6">Assessment Process</h3>
                <ul className="space-y-4">
                  {assessmentSteps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-600 text-white text-sm font-semibold">
                          {idx + 1}
                        </div>
                      </div>
                      <span className="text-gray-700 leading-relaxed font-light text-lg pt-1">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <Link 
                  href="/admissions"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Begin Application
                </Link>
              </div>
            </div>
          </div>

          {/* Image - 2 columns */}
          <div className="lg:col-span-2">
            <div className="relative h-96 lg:h-full lg:min-h-[400px] rounded-xl overflow-hidden sticky top-24">
              <Image
                src="/images/application-process.jpg"
                alt="Application Process"
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
