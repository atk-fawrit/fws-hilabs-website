/**
 * Supply Specification Section
 * Premium design with enhanced visual hierarchy
 */

import React from 'react';

export const SupplySpecificationSection: React.FC = () => {
  const supplyComponents = [
    'Junior engineers with 12-month systematic competency development',
    'Documented technical competency profiles with assessment evidence',
    'Project portfolio demonstrating practical application capabilities',
    'Supervised deployment protocols with performance tracking',
    'Ongoing supervision support during initial deployment phases',
    'Performance feedback mechanisms and adjustment protocols'
  ];

  const supplyExclusions = [
    'Senior engineering personnel or technical leadership roles',
    'Specialized domain expertise beyond general engineering competencies',
    'Management, product, or business development personnel',
    'Guaranteed performance outcomes or productivity commitments',
    'Long-term retention guarantees or employment stability assurances',
    'Cultural fit assessment or organizational integration services',
    'Salary negotiation, benefits administration, or HR services'
  ];

  return (
    <section className="py-24 px-8 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">
            Supply Specification
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            HI Labs supplies systematically developed junior engineers with documented competencies and supervised 
            deployment protocols. Supply specifications define exactly what is provided and what remains outside the supply scope.
          </p>
        </div>

        {/* Supply Components */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-black">Supply Components</h3>
          </div>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
            HI Labs supplies junior engineers with systematically developed competencies, documented performance evidence, 
            and structured deployment support within defined supervision frameworks.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {supplyComponents.map((component, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-black transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-black rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-800 font-medium leading-relaxed">{component}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supply Standard */}
        <div className="mb-20 bg-black text-white rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-4 text-white">Supply Standard</h3>
          <p className="text-lg text-gray-200 leading-relaxed max-w-4xl">
            All supplied engineers complete systematic evaluation and elimination processes ensuring consistent competency 
            baselines and deployment readiness verification.
          </p>
        </div>

        {/* Supply Exclusions */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-white border-2 border-black rounded-2xl flex items-center justify-center">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-black">Supply Exclusions</h3>
          </div>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl">
            HI Labs explicitly does not supply senior engineers, specialized domain experts, management personnel, 
            or guaranteed performance outcomes beyond documented competency baselines.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {supplyExclusions.map((exclusion, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 border-2 border-gray-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{exclusion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
