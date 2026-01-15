/**
 * Governance Mechanisms Section
 * 
 * Displays governance framework and decision-making protocols
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { GovernanceItem } from '../ui';

const governanceItems = [
  {
    number: '01',
    title: 'Decision-Making Protocols',
    description: 'Institutional decisions operate through systematic protocols with documented criteria, authority boundaries, and accountability mechanisms ensuring consistent and transparent decision-making processes.',
    standard: 'PROTOCOL STANDARD: All institutional decisions follow documented protocols with clear authority allocation and accountability tracking.',
  },
  {
    number: '02',
    title: 'Performance Accountability Systems',
    description: 'Systematic performance measurement and accountability systems operate across all institutional domains with documented metrics, assessment intervals, and intervention protocols for performance management.',
    standard: 'ACCOUNTABILITY STANDARD: Performance accountability operates through systematic measurement with documented intervention protocols.',
  },
  {
    number: '03',
    title: 'Quality Assurance Protocols',
    description: 'Systematic quality assurance operates through regular assessment, compliance verification, and continuous improvement protocols ensuring institutional standard maintenance and operational effectiveness.',
    standard: 'QUALITY STANDARD: Quality assurance operates through systematic assessment with documented compliance verification and improvement protocols.',
  },
  {
    number: '04',
    title: 'Transparency and Documentation Requirements',
    description: 'Institutional operations maintain systematic documentation and transparency requirements with accessible information protocols and stakeholder communication mechanisms ensuring operational visibility.',
    standard: 'TRANSPARENCY STANDARD: Operational transparency operates through systematic documentation with accessible information protocols.',
  },
];

export const GovernanceMechanismsSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2>Governance Mechanisms</H2>
      
      <div className="space-y-6">
        <BodyText>
          HI Labs operates through systematic governance mechanisms with 
          documented decision-making protocols, accountability structures, 
          and integrity standards that ensure institutional effectiveness 
          and operational transparency.
        </BodyText>
        
        <div className="space-y-12">
          <div className="space-y-4">
            <H3 className="font-mono">GOVERNANCE FRAMEWORK</H3>
            <div className="pl-6 space-y-8">
              {governanceItems.map((item) => (
                <GovernanceItem key={item.number} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
