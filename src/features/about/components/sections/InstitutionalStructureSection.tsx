/**
 * Institutional Structure Section
 * 
 * Displays organizational framework and institutional boundaries
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { GovernanceItem } from '../ui';

const structureItems = [
  {
    number: '',
    title: 'Systematic Coordination Structure',
    description: 'Institutional coordination operates through systematic protocols with defined communication channels, decision-making hierarchies, and accountability mechanisms ensuring effective organizational management.',
    standard: 'COORDINATION STANDARD: Organizational coordination operates through systematic protocols with documented communication and decision-making frameworks.',
  },
  {
    number: '',
    title: 'Performance Management Integration',
    description: 'Performance management operates across all organizational levels with integrated assessment systems, accountability mechanisms, and continuous improvement protocols ensuring institutional effectiveness.',
    standard: 'PERFORMANCE INTEGRATION: Performance management operates through integrated systems with systematic assessment and improvement protocols.',
  },
  {
    number: '',
    title: 'Operational Efficiency Systems',
    description: 'Operational efficiency operates through systematic optimization protocols with resource allocation frameworks, process improvement mechanisms, and performance measurement systems ensuring institutional productivity.',
    standard: 'EFFICIENCY STANDARD: Operational efficiency operates through systematic optimization with documented resource allocation and process improvement protocols.',
  },
];

export const InstitutionalStructureSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2>Institutional Structure</H2>
      
      <div className="space-y-6">
        <BodyText>
          HI Labs operates through systematic institutional structure with 
          defined organizational hierarchy, operational coordination mechanisms, 
          and performance accountability systems that ensure effective institutional 
          management and operational efficiency.
        </BodyText>
        
        <div className="space-y-12">
          <div className="space-y-4">
            <H3 className="font-mono">ORGANIZATIONAL FRAMEWORK</H3>
            <div className="pl-6 space-y-8">
              {structureItems.map((item, index) => (
                <GovernanceItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-warning/10 border-l-4 border-warning p-6 space-y-4">
          <H3 className="text-warning font-mono">INSTITUTIONAL BOUNDARIES</H3>
          <BodyText className="font-mono text-sm">
            This institutional charter excludes portraits, founder imagery, 
            mission/vision statements, and promotional narratives. HI Labs 
            operates through systematic documentation and evidence-based 
            representation rather than personality-driven or inspirational messaging.
          </BodyText>
        </div>
      </div>
    </section>
  );
};
