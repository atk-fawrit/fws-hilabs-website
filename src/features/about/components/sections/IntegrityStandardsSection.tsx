/**
 * Integrity Standards Section
 * Displays integrity framework and compliance protocols
 */

import React from 'react';

const integritySections = [
  {
    number: '01',
    title: 'Ethical Protocol Compliance',
    description: 'All institutional operations comply with documented ethical protocols including stakeholder interaction standards, information accuracy requirements, and commitment fulfillment obligations.',
    items: [
      'Accurate information provision without misrepresentation or overstatement',
      'Commitment fulfillment according to documented agreements and protocols',
      'Stakeholder interaction transparency with clear boundary communication',
      'Conflict of interest identification and management protocols',
    ],
  },
  {
    number: '02',
    title: 'Assessment and Evaluation Integrity',
    description: 'Assessment and evaluation processes maintain systematic integrity through consistent criteria application, elimination decision transparency, and performance measurement accuracy.',
    items: [
      'Consistent assessment criteria application without bias or accommodation',
      'Elimination decision transparency with documented justification',
      'Performance measurement accuracy and evidence-based documentation',
      'Assessment protocol compliance and quality assurance verification',
    ],
  },
  {
    number: '03',
    title: 'Partnership and Deployment Integrity',
    description: 'Partnership arrangements and deployment operations maintain integrity through clear agreement fulfillment, supervision accountability, and performance representation accuracy.',
    items: [
      'Partnership agreement fulfillment according to documented protocols',
      'Supervision accountability maintenance throughout deployment arrangements',
      'Engineer competency representation accuracy without overstatement',
      'Performance feedback accuracy and intervention protocol compliance',
    ],
  },
  {
    number: '04',
    title: 'Institutional Representation Integrity',
    description: 'Institutional representation maintains integrity through accurate capability communication, limitation acknowledgment, and evidence-based claim substantiation without promotional overstatement.',
    items: [
      'Capability representation accuracy with clear limitation acknowledgment',
      'Evidence-based claim substantiation without promotional exaggeration',
      'Outcome representation accuracy based on documented evidence',
      'Stakeholder communication transparency with expectation alignment',
    ],
  },
];

export const IntegrityStandardsSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
      <div className="space-y-8 sm:space-y-10 md:space-y-12">
        {/* Header */}
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
            Integrity Standards
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            HI Labs maintains systematic integrity standards with documented compliance protocols, 
            ethical boundaries, and accountability mechanisms that govern all institutional operations 
            and stakeholder interactions.
          </p>
        </div>
        
        {/* Integrity Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {integritySections.map((section) => (
            <div key={section.number} className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="bg-gray-900 text-white p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-light text-white">{section.number}</span>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-white mb-2 leading-tight">
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-300 font-light">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h4 className="font-medium text-sm mb-3 text-black uppercase tracking-wider">
                  Compliance Requirements
                </h4>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
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
          ))}
        </div>

        {/* Bottom Note */}
        <div className="bg-gray-100 border-l-4 border-gray-900 p-6 rounded-r-lg">
          <h4 className="font-medium text-xs uppercase mb-2 text-black tracking-wider">
            Integrity Commitment
          </h4>
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            HI Labs maintains systematic integrity standards through documented protocols, regular 
            compliance verification, and accountability mechanisms that ensure ethical operation and 
            stakeholder trust maintenance across all institutional activities and external relationships.
          </p>
        </div>
      </div>
    </section>
  );
};
