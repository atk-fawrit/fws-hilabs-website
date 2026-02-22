/**
 * Program Specification Section
 * 
 * Redesigned with modern card-based layout and visual hierarchy
 */

import React from 'react';
import { programOverview } from '../../data';

export const ProgramSpecificationSection: React.FC = () => {
  const specifications = [
    {
      icon: '📅',
      label: 'Duration',
      value: programOverview.duration,
    },
    {
      icon: '📍',
      label: 'Format',
      value: programOverview.format,
    },
    {
      icon: '⚙️',
      label: 'Structure',
      value: programOverview.phases,
    },
    {
      icon: '📊',
      label: 'Assessment',
      value: programOverview.evaluation,
    },
  ];

  const exclusionItems = [
    'NOT available online or in hybrid format',
    'NOT compatible with parallel employment',
    'NOT certificate-driven or credential-focused',
    'NO placement guarantees or outcome promises',
    'NO refunds after program commencement'
  ];

  const keyPrinciples = [
    {
      title: 'Full Commitment',
      description: 'Complete 12-month in-person participation required'
    },
    {
      title: 'Selection System',
      description: 'Program operates as a selection and elimination framework'
    },
    {
      title: 'Rigorous Standards',
      description: 'Maintains elite standards through continuous evaluation'
    }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 to-slate-100 px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Program Overview</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mt-3 mb-4 tracking-tight">
            Program Structure
          </h2>
          <p className="text-base sm:text-lg text-gray-600 font-light max-w-3xl leading-relaxed">
            This specification defines the program structure, commitment level, and core principles. Candidates must understand and accept these requirements for full 12-month participation.
          </p>
        </div>

        {/* Specifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {specifications.map((spec, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {spec.icon}
              </div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">
                {spec.label}
              </p>
              <p className="text-lg sm:text-xl font-light text-gray-900 leading-tight">
                {spec.value}
              </p>
            </div>
          ))}
        </div>

        {/* Key Principles */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-8 tracking-tight">
            Core Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyPrinciples.map((principle, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-8 border border-gray-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                    {idx + 1}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {principle.title}
                </h4>
                <p className="text-gray-600 font-light leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Explicit Exclusions */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-light text-gray-900 mb-8 tracking-tight">
            Important Constraints
          </h3>
          <div className="bg-gradient-to-br from-red-50 to-red-50/50 rounded-xl border-2 border-red-200 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-red-900 uppercase tracking-widest">Important Notice</span>
            </div>
            <div className="space-y-4">
              {exclusionItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-300 flex items-center justify-center mt-1 flex-none">
                    <svg className="w-3 h-3 text-red-700" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-light leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
