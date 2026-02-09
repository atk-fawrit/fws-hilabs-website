/**
 * Governance Mechanisms Section
 * Enhanced display of governance framework and decision-making protocols
 */

import React from 'react';

const governanceItems = [
  {
    number: '01',
    title: 'Decision-Making Protocols',
    description: 'Institutional decisions operate through systematic protocols with documented criteria, authority boundaries, and accountability mechanisms ensuring consistent and transparent decision-making processes.',
    standard: 'All institutional decisions follow documented protocols with clear authority allocation and accountability tracking.',
  },
  {
    number: '02',
    title: 'Performance Accountability Systems',
    description: 'Systematic performance measurement and accountability systems operate across all institutional domains with documented metrics, assessment intervals, and intervention protocols for performance management.',
    standard: 'Performance accountability operates through systematic measurement with documented intervention protocols.',
  },
  {
    number: '03',
    title: 'Quality Assurance Protocols',
    description: 'Systematic quality assurance operates through regular assessment, compliance verification, and continuous improvement protocols ensuring institutional standard maintenance and operational effectiveness.',
    standard: 'Quality assurance operates through systematic assessment with documented compliance verification and improvement protocols.',
  },
  {
    number: '04',
    title: 'Transparency and Documentation Requirements',
    description: 'Institutional operations maintain systematic documentation and transparency requirements with accessible information protocols and stakeholder communication mechanisms ensuring operational visibility.',
    standard: 'Operational transparency operates through systematic documentation with accessible information protocols.',
  },
];

export const GovernanceMechanismsSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-8 md:px-16 lg:px-24">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            Governance Mechanisms
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed font-light">
            HI Labs operates through systematic governance mechanisms with documented decision-making 
            protocols, accountability structures, and integrity standards that ensure institutional 
            effectiveness and operational transparency.
          </p>
        </div>
        
        {/* Governance Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {governanceItems.map((item) => (
            <div key={item.number} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="bg-gray-900 text-white p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-light text-white">{item.number}</span>
                  <h3 className="text-lg font-medium text-white flex-1 leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                <p className="text-sm text-gray-700 leading-relaxed font-light">
                  {item.description}
                </p>
                
                <div className="bg-gray-50 border-l-4 border-gray-900 p-4">
                  <h4 className="font-medium text-xs uppercase mb-2 text-black tracking-wider">
                    Protocol Standard
                  </h4>
                  <p className="text-sm text-gray-700 font-light">
                    {item.standard}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="bg-gray-100 border-l-4 border-gray-900 p-6 rounded-r-lg">
          <h4 className="font-medium text-xs uppercase mb-2 text-black tracking-wider">
            Governance Framework
          </h4>
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            Governance mechanisms operate through systematic implementation with documented protocols, 
            measurable outcomes, and continuous improvement processes ensuring institutional effectiveness 
            and stakeholder accountability.
          </p>
        </div>
      </div>
    </section>
  );
};
