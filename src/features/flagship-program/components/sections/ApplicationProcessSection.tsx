/**
 * Application Process Section
 * 
 * CTA for beginning the admissions process with premium design
 */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const ApplicationProcessSection: React.FC = () => {
  return (
    <div className="w-full py-10 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-8 md:gap-12 items-start">
          {/* Content - 7 columns */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div>
              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-light mb-3 sm:mb-4 text-gray-900 tracking-tight">
                Application Process
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                Structured application and selection protocols with systematic assessment criteria and enrollment procedures for program participation
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed font-light text-lg">
                Candidates who understand and accept these constraints may proceed to the admissions 
                selection process. The application requires demonstration of technical aptitude and 
                commitment to the full 12-month program.
              </p>

              <div className="pt-4">
                <Link 
                  href="/admissions"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Begin Admissions Process
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
