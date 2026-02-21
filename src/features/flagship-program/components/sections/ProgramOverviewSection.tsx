/**
 * Program Overview Section
 * 
 * White card with text and image - overlaps the video section above
 */

import React from 'react';
import Image from 'next/image';

interface ProgramOverviewSectionProps {
  onLearnMoreClick: () => void;
}

export const ProgramOverviewSection: React.FC<ProgramOverviewSectionProps> = ({ onLearnMoreClick }) => {
  return (
    <div className="relative -mt-32 sm:-mt-40 md:-mt-48 px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
      <div className="max-w-6xl mx-auto">
        {/* White Content Card */}
        <div className="bg-white rounded-lg shadow-2xl p-5 sm:p-6 md:p-8 lg:p-12">
          {/* Two Column Grid - col-5 col-3 layout */}
          <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 items-start">
            {/* Left Column - Text Content (col-5) */}
            <div className="lg:col-span-5">
              <h2 className="font-mono text-2xl md:text-3xl font-bold mb-4 text-gray-900 leading-tight">
                FLAGSHIP PROGRAM OVERVIEW
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Systematic 12-month engineering talent production program with structured competency development, elimination protocols, and supervised deployment phases designed to produce deployable junior engineers through documented assessment and accountability frameworks.
              </p>
              <button 
                onClick={onLearnMoreClick}
                className="inline-flex items-center gap-2 text-red-600 font-semibold text-sm hover:text-red-700 transition-colors"
              >
                <span>LEARN MORE</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Right Column - Image only (col-3) */}
            <div className="lg:col-span-3">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/students-learning.jpg"
                  alt="Engineering Lab Students"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
