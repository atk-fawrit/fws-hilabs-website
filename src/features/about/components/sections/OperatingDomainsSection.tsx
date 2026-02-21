/**
 * Operating Domains Section
 * Displays the six systematic operating domains of HI Labs with expandable details
 */

'use client';

import React, { useState } from 'react';

const domains = [
  {
    id: 1,
    number: '01',
    title: 'Competency Development Domain',
    description: 'Systematic engineering competency development through structured curriculum, assessment protocols, and elimination mechanisms with documented performance tracking and intervention systems.',
    accountability: 'Competency development effectiveness measured through systematic assessment outcomes and deployment readiness verification.',
  },
  {
    id: 2,
    number: '02',
    title: 'Evaluation and Assessment Domain',
    description: 'Systematic evaluation protocols with documented criteria, elimination thresholds, and performance measurement systems ensuring consistent assessment and elimination decisions.',
    accountability: 'Assessment accuracy and elimination decision validity measured through deployment performance correlation analysis.',
  },
  {
    id: 3,
    number: '03',
    title: 'Supervised Deployment Domain',
    description: 'Engineer deployment supervision with performance tracking, intervention protocols, and partnership management systems maintaining accountability throughout deployment arrangements.',
    accountability: 'Deployment supervision effectiveness measured through engineer performance maintenance and partnership satisfaction.',
  },
  {
    id: 4,
    number: '04',
    title: 'Institutional Operations Domain',
    description: 'Systematic institutional management including facility operations, administrative protocols, and operational efficiency systems supporting competency development and deployment activities.',
    accountability: 'Operational effectiveness measured through systematic efficiency metrics and institutional performance indicators.',
  },
  {
    id: 5,
    number: '05',
    title: 'Partnership and Engagement Domain',
    description: 'Systematic partnership development and management with employer organizations, deployment arrangement protocols, and engagement framework maintenance ensuring effective collaboration.',
    accountability: 'Partnership effectiveness measured through deployment success rates and organizational satisfaction metrics.',
  },
  {
    id: 6,
    number: '06',
    title: 'Quality Assurance and Integrity Domain',
    description: 'Systematic quality monitoring, integrity verification, and institutional compliance systems ensuring operational standards and ethical protocol maintenance across all domains.',
    accountability: 'Quality assurance effectiveness measured through systematic audit outcomes and integrity standard compliance verification.',
  },
];

export const OperatingDomainsSection: React.FC = () => {
  const [expandedDomain, setExpandedDomain] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setExpandedDomain(expandedDomain === id ? null : id);
  };

  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
      <div className="space-y-8 sm:space-y-10 md:space-y-12">
        {/* Header */}
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
            Operating Domains
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            HI Labs operates across six systematic domains with defined accountability structures 
            and performance measurement protocols that govern institutional effectiveness and 
            operational integrity.
          </p>
        </div>
        
        {/* Domains List */}
        <div className="space-y-3">
          {domains.map((domain) => (
            <div key={domain.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {/* Domain Header - Clickable */}
              <button
                onClick={() => handleToggle(domain.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4 flex-1 text-left">
                  <span className="text-2xl font-light text-gray-900">{domain.number}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-black mb-1">{domain.title}</h3>
                    <p className="text-sm text-gray-600 font-light">{domain.description}</p>
                  </div>
                </div>
                <svg 
                  className={`w-6 h-6 text-gray-900 transition-transform flex-shrink-0 ml-4 ${expandedDomain === domain.id ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Expanded Content */}
              {expandedDomain === domain.id && (
                <div className="border-t border-gray-200 bg-gray-50 p-6">
                  <h4 className="font-medium text-xs uppercase mb-2 text-black tracking-wider">
                    Accountability Framework
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed font-light">
                    {domain.accountability}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
