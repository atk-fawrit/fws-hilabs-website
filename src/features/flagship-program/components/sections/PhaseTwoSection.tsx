/**
 * Phase Two Section
 * 
 * Displays the professional internship phase (Months 7-12) with premium design
 */

import React from 'react';
import Image from 'next/image';

export const PhaseTwoSection: React.FC = () => {
  return (
    <div className="w-full relative py-12 sm:py-16 md:py-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Explore-bg.jpg"
          alt="Phase II Professional Internship"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-4xl space-y-8 sm:space-y-12">
          <div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6 text-white tracking-tight">
              Phase II: The Professional Internship
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed mb-4">
              Months 7-12: Supervised Industry Immersion
            </p>
            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
              Upon successful completion of the training, Fellows transition into a 6-month professional internship. This is where theory meets high-stakes production. You will work within established engineering teams, applying your "AI Native" skills to real-world codebases under professional supervision.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
