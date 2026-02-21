/**
 * Institutional Structure Section
 * Displays organizational framework and institutional boundaries
 */

import React from 'react';

const structureItems = [
  {
    number: '01',
    title: 'Systematic Coordination Structure',
    description: 'Institutional coordination operates through systematic protocols with defined communication channels, decision-making hierarchies, and accountability mechanisms ensuring effective organizational management.',
    standard: 'Organizational coordination operates through systematic protocols with documented communication and decision-making frameworks.',
  },
  {
    number: '02',
    title: 'Performance Management Integration',
    description: 'Performance management operates across all organizational levels with integrated assessment systems, accountability mechanisms, and continuous improvement protocols ensuring institutional effectiveness.',
    standard: 'Performance management operates through integrated systems with systematic assessment and improvement protocols.',
  },
  {
    number: '03',
    title: 'Operational Efficiency Systems',
    description: 'Operational efficiency operates through systematic optimization protocols with resource allocation frameworks, process improvement mechanisms, and performance measurement systems ensuring institutional productivity.',
    standard: 'Operational efficiency operates through systematic optimization with documented resource allocation and process improvement protocols.',
  },
];

export const InstitutionalStructureSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
      <div className="space-y-8 sm:space-y-10 md:space-y-12">
        {/* Header */}
        <div className="space-y-3 sm:space-y-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight">
            Institutional Structure
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            HI Labs operates through systematic institutional structure with defined organizational 
            hierarchy, operational coordination mechanisms, and performance accountability systems 
            that ensure effective institutional management and operational efficiency.
          </p>
        </div>
        
        {/* Structure Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {structureItems.map((item) => (
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
                    Standard
                  </h4>
                  <p className="text-sm text-gray-700 font-light">
                    {item.standard}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional Boundaries */}
        <div className="bg-gray-100 border-l-4 border-gray-900 p-4 sm:p-6 md:p-8 rounded-r-lg">
          <h3 className="text-lg font-medium text-black mb-4 uppercase tracking-wider">
            Institutional Boundaries
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed font-light">
            This institutional charter excludes portraits, founder imagery, mission/vision statements, 
            and promotional narratives. HI Labs operates through systematic documentation and 
            evidence-based representation rather than personality-driven or inspirational messaging.
          </p>
        </div>
      </div>
    </section>
  );
};
