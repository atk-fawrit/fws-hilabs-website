/**
 * Institutional Charter Section
 * Enhanced introduction to the institutional charter and HI Labs identity
 */

import React from 'react';

export const InstitutionalCharterSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-8 md:px-16 lg:px-24">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            Institutional Charter
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed font-light">
            This document establishes the institutional identity, operating principles, and governance 
            framework of Human Intelligence Laboratories Private Limited as a systematic engineering 
            talent production facility.
          </p>
        </div>
        
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Institutional Identity Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-black font-medium text-lg mb-4 uppercase tracking-wider">
              Institutional Identity
            </h3>
            <p className="text-gray-700 leading-relaxed font-light">
              HI Labs operates as an institutional engineering talent production system rather than 
              a traditional educational institution or training provider. The organization functions 
              through systematic competency development, enforced evaluation protocols, and supervised 
              deployment mechanisms designed to produce deployable junior engineers.
            </p>
          </div>
          
          {/* Charter Framework Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-black font-medium text-lg mb-4 uppercase tracking-wider">
              Charter Framework
            </h3>
            <p className="text-gray-700 leading-relaxed font-light">
              This institutional charter replaces conventional mission statements and organizational 
              narratives with systematic documentation of operating principles, accountability structures, 
              and governance mechanisms that define institutional identity and operational boundaries.
            </p>
          </div>

          {/* Systematic Approach Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <h3 className="text-black font-medium text-lg mb-4 uppercase tracking-wider">
              Systematic Approach
            </h3>
            <p className="text-gray-700 leading-relaxed font-light">
              All institutional operations follow documented protocols with measurable outcomes, 
              systematic assessment criteria, and transparent accountability mechanisms ensuring 
              consistent performance and continuous improvement across all operational domains.
            </p>
          </div>
        </div>

        {/* Charter Specifications */}
        <div className="bg-white border-l-4 border-gray-900 p-8 rounded-r-lg">
          <h3 className="text-lg font-medium text-black mb-6 uppercase tracking-wider">
            Charter Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium text-black mb-3">Operational Focus</h4>
              <ul className="space-y-2">
                {[
                  'Systematic talent production',
                  'Competency development protocols',
                  'Performance-based elimination',
                  'Supervised deployment systems'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-black mb-3">Institutional Structure</h4>
              <ul className="space-y-2">
                {[
                  'Documented accountability frameworks',
                  'Systematic governance mechanisms',
                  'Evidence-based operations',
                  'Transparent boundary definitions'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-black mb-3">Quality Standards</h4>
              <ul className="space-y-2">
                {[
                  'Systematic assessment protocols',
                  'Consistent evaluation criteria',
                  'Performance tracking systems',
                  'Continuous improvement processes'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
