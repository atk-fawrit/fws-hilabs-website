/**
 * Deployment Discussion Section
 * Premium CTA section with qualification criteria
 */

import React from 'react';

export const DeploymentDiscussionSection: React.FC = () => {
  return (
    <section className="py-24 px-8 md:px-16 bg-black text-white">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Initiate Deployment Discussion
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Deployment discussion access is provided to qualified organizations following initial assessment and partnership 
            qualification verification. Discussion includes comprehensive partnership evaluation and engagement protocol design.
          </p>
        </div>

        {/* Qualification Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
          <h3 className="text-2xl font-bold mb-6 text-white">Partnership Qualification Criteria</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {[
              'Established technical development environment suitable for junior engineer integration',
              'Technical leadership with capacity for supervision protocol collaboration',
              'Organizational commitment to systematic talent development and performance tracking',
              'Documented talent acquisition requirements with specific competency needs'
            ].map((criterion, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">{criterion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <button className="group inline-flex items-center gap-4 bg-white text-black px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:gap-6 hover:shadow-2xl hover:shadow-white/20">
            <span>Begin Partnership Discussion</span>
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Access Note */}
        <p className="text-sm text-gray-400 max-w-2xl mx-auto">
          Access restricted to organizations with documented talent acquisition requirements and technical leadership 
          capacity for partnership evaluation.
        </p>
      </div>
    </section>
  );
};
