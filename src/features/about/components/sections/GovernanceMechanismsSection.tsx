/**
 * Governance Mechanisms Section
 * 
 * Enhanced display of governance framework and decision-making protocols
 */

import React from 'react';
import { H2, H3, BodyText } from '@/src/shared/components/typography';
import { InfoBox } from '@/src/shared/components/content';

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
    <section className="space-y-8">
      <H2 className="text-3xl font-light text-primary mb-4">Governance Mechanisms</H2>
      
      <div className="space-y-6">
        <BodyText className="text-primary/80 leading-relaxed">
          HI Labs operates through systematic governance mechanisms with 
          documented decision-making protocols, accountability structures, 
          and integrity standards that ensure institutional effectiveness 
          and operational transparency.
        </BodyText>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {governanceItems.map((item) => (
            <div key={item.number} className="border border-primary/10 p-6 hover:border-primary/20 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center">
                  <span className="text-sm font-mono font-medium text-primary">{item.number}</span>
                </div>
                <div className="flex-1">
                  <H3 className="text-xl font-light text-primary mb-3">{item.title}</H3>
                  <BodyText className="text-primary/80 leading-relaxed mb-4">
                    {item.description}
                  </BodyText>
                  <div className="bg-primary/5 border-l-4 border-primary p-4">
                    <BodyText className="text-xs uppercase tracking-wide text-primary/60 mb-1 font-medium">
                      Protocol Standard
                    </BodyText>
                    <BodyText className="text-sm text-primary/80">
                      {item.standard}
                    </BodyText>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <InfoBox
          variant="accent"
          title="GOVERNANCE FRAMEWORK"
          description="Governance mechanisms operate through systematic implementation with documented protocols, measurable outcomes, and continuous improvement processes ensuring institutional effectiveness and stakeholder accountability."
        />
      </div>
    </section>
  );
};
