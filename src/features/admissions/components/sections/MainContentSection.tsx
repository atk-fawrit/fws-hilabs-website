/**
 * Main Content Section
 * 
 * Clean, premium design with elegant layout and typography
 */

import React, { useState } from 'react';
import Image from 'next/image';
import '../../styles/MainContentSection.styles.css';

export const MainContentSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'eligible' | 'not-eligible'>('eligible');

  const eligibilityCriteria = [
    'Age 18-28 at program commencement',
    "Bachelor's degree in any discipline or equivalent",
    'Basic programming exposure (any language)',
    'English proficiency for technical communication',
    'Ability to commit full-time for 12 months',
    'Physical presence in Lucknow',
    'Financial capacity for living expenses'
  ];

  const nonEligibility = [
    'Current employment that cannot be terminated',
    'Family commitments requiring regular absence',
    'Expectation of placement guarantees',
    'Inability to relocate to Lucknow',
    'Seeking certification-focused training',
    'Preference for online/hybrid formats',
    'Unwilling to accept elimination evaluation'
  ];

  return (
    <section className="relative w-full py-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/A-bgimage.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-8 md:px-16 lg:px-24 space-y-16">
        
        {/* Selection System */}
        <div className="space-y-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-2">
              <div className="h-px w-12 bg-white/30 mb-4"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
              Selection System
            </h2>
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
              HI Labs admissions operates as a selection system, not a sales funnel.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-4">
            <div className="premium-card">
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                The process identifies candidates capable of completing the 12-month engineering production system under enforced evaluation and supervised deployment protocols.
              </p>
            </div>
            
            <div className="premium-card-highlight">
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-white/60 uppercase tracking-widest">
                  Selection Criteria
                </h3>
                <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                  This is a filtering mechanism designed to identify serious candidates who understand the commitment and constraints of the program. We select for aptitude, commitment, and alignment with institutional expectations.
                </p>
              </div>
            </div>
            
            <div className="premium-card-subtle">
              <p className="text-base md:text-lg text-white/70 leading-relaxed font-light">
                The admissions process evaluates technical aptitude, commitment capacity, and understanding of program constraints. Candidates must demonstrate readiness for full-time, in-person participation and acceptance of elimination-based evaluation.
              </p>
            </div>
          </div>
        </div>

        {/* Eligibility Requirements */}
        <div className="space-y-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-2">
              <div className="h-px w-12 bg-white/30 mb-4"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
              Eligibility Requirements
            </h2>
          </div>

          {/* Minimal Toggle */}
          <div className="flex justify-center">
            <div className="inline-flex bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1">
              <button
                onClick={() => setActiveTab('eligible')}
                className={`px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeTab === 'eligible'
                    ? 'bg-white text-black'
                    : 'text-white/60 hover:text-white/90'
                }`}
              >
                Eligible
              </button>
              <button
                onClick={() => setActiveTab('not-eligible')}
                className={`px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeTab === 'not-eligible'
                    ? 'bg-white text-black'
                    : 'text-white/60 hover:text-white/90'
                }`}
              >
                Non-Eligible
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-5xl mx-auto relative min-h-[500px]">
            
            {/* Eligible Criteria */}
            <div
              className={`transition-all duration-500 ${
                activeTab === 'eligible'
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="space-y-3">
                {eligibilityCriteria.map((item, idx) => (
                  <div
                    key={idx}
                    className="criteria-item"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="flex items-start gap-6 p-5">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                      </div>
                      <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light flex-1">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Non-Eligible */}
            <div
              className={`transition-all duration-500 ${
                activeTab === 'not-eligible'
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8 absolute inset-0 pointer-events-none'
              }`}
            >
              <div className="space-y-3">
                {nonEligibility.map((item, idx) => (
                  <div
                    key={idx}
                    className="criteria-item-negative"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="flex items-start gap-6 p-5">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                      </div>
                      <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light flex-1">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="mt-6 p-6 border-l border-white/20">
                  <p className="text-base text-white/60 font-light italic">
                    Candidates with these conditions will not be considered for admission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};