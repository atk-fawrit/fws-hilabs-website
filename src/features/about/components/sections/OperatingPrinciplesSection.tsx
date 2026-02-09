/**
 * Operating Principles Section
 * Enhanced display of the systematic operating principles of HI Labs
 */

import React from 'react';

const principles = [
  {
    number: '01',
    title: 'Systematic Competency Development',
    description: 'All engineering competency development operates through systematic protocols with documented assessment criteria and elimination mechanisms rather than subjective evaluation or flexible standards.',
  },
  {
    number: '02',
    title: 'Enforced Evaluation Standards',
    description: 'Evaluation operates through consistent application of documented standards with elimination consequences for performance below established thresholds without exception or accommodation.',
  },
  {
    number: '03',
    title: 'Supervised Deployment Accountability',
    description: 'All engineer deployment operates under systematic supervision with documented performance tracking and intervention protocols maintained throughout deployment arrangements.',
  },
  {
    number: '04',
    title: 'Institutional Discipline Priority',
    description: 'Institutional operations prioritize systematic discipline and protocol compliance over individual accommodation or comfort optimization in all operational decisions.',
  },
  {
    number: '05',
    title: 'Evidence-Based Documentation',
    description: 'All institutional claims and performance assertions operate through documented evidence and systematic assessment rather than testimonial, anecdotal, or promotional representation.',
  },
  {
    number: '06',
    title: 'Transparent Operational Boundaries',
    description: 'Institutional capabilities and limitations are documented explicitly with clear boundary definition to prevent expectation misalignment or capability overstatement.',
  },
];

export const OperatingPrinciplesSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-8 md:px-16 lg:px-24">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            Operating Principles
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed font-light">
            HI Labs operates according to six systematic principles that govern institutional 
            decision-making, competency development protocols, and organizational accountability 
            without prose elaboration or interpretive commentary.
          </p>
        </div>
        
        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((principle) => (
            <div key={principle.number} className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="bg-gray-900 text-white p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-light text-white">{principle.number}</span>
                  <h3 className="text-lg font-medium text-white flex-1 leading-tight">
                    {principle.title}
                  </h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-gray-700 leading-relaxed font-light">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="bg-gray-100 border-l-4 border-gray-900 p-6 rounded-r-lg">
          <h4 className="font-medium text-xs uppercase mb-2 text-black tracking-wider">
            Principle Application
          </h4>
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            These principles operate as systematic constraints on institutional decision-making 
            and operational protocols, ensuring consistent application across all domains without 
            exception or modification based on individual circumstances.
          </p>
        </div>
      </div>
    </section>
  );
};
