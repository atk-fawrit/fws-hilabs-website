/**
 * Safety and Compliance Section
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

const safetyProtocols = [
  {
    number: '01',
    title: 'Physical Safety Systems',
    description: 'Systematic physical safety operates through fire safety systems, emergency evacuation protocols, first aid capabilities, and incident response procedures that ensure candidate and staff safety throughout facility operations.',
    items: [
      'Fire safety systems with systematic detection, suppression, and evacuation protocols',
      'Emergency evacuation procedures with designated routes and assembly point coordination',
      'First aid capabilities with trained personnel and systematic medical response protocols',
      'Incident response procedures with systematic documentation and follow-up protocols',
    ],
  },
  {
    number: '02',
    title: 'Security and Access Control',
    description: 'Systematic security operates through access control systems, surveillance protocols, asset protection measures, and unauthorized access prevention that maintain facility security and operational integrity without compromising institutional transparency.',
    items: [
      'Access control systems with systematic authorization and monitoring protocols',
      'Surveillance protocols with appropriate monitoring and privacy boundary maintenance',
      'Asset protection measures with systematic inventory and security protocols',
      'Unauthorized access prevention with systematic detection and response procedures',
    ],
  },
  {
    number: '03',
    title: 'Regulatory Compliance Framework',
    description: 'Systematic regulatory compliance operates through educational regulations adherence, business operation compliance, safety standard maintenance, and documentation requirements that ensure institutional legitimacy and operational authorization.',
    items: [
      'Educational regulations compliance with systematic documentation and audit protocols',
      'Business operation compliance with licensing requirements and regulatory reporting',
      'Safety standard maintenance with systematic inspection and compliance verification',
      'Documentation requirements with systematic record keeping and audit trail maintenance',
    ],
  },
  {
    number: '04',
    title: 'Health and Wellness Protocols',
    description: 'Systematic health and wellness protocols operate through health monitoring systems, wellness support provision, mental health resources, and intervention procedures that maintain candidate and staff wellbeing within institutional boundaries.',
    items: [
      'Health monitoring systems with systematic assessment and intervention protocols',
      'Wellness support provision with appropriate resources and professional referral systems',
      'Mental health resources with systematic support and professional intervention capability',
      'Intervention procedures with systematic escalation and external resource coordination',
    ],
  },
];

export const SafetyComplianceSection: React.FC = () => {
  return (
    <section className="space-y-6">
      <H2 className="text-3xl font-light text-primary mb-4">Safety and Compliance Boundaries</H2>
      
      <div className="space-y-4">
        <BodyText className="text-primary/80 leading-relaxed">
          The Lucknow Lab maintains systematic safety protocols and compliance 
          boundaries with documented procedures, emergency response systems, 
          and regulatory adherence that ensure operational safety and institutional 
          integrity throughout all facility operations.
        </BodyText>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {safetyProtocols.map((protocol) => (
            <div key={protocol.number} className="bg-primary/5 border-l-4 border-primary p-4">
              <BodyText className="font-medium text-primary mb-2 text-sm">{protocol.number}. {protocol.title}</BodyText>
              <BodyText className="text-xs text-primary/80 leading-relaxed mb-3">{protocol.description}</BodyText>
              <ul className="space-y-1">
                {protocol.items.map((item, index) => (
                  <li key={index} className="text-xs text-primary/70 pl-3 border-l-2 border-primary/30">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="bg-warning/10 border-l-4 border-warning p-4">
          <H3 className="text-warning text-sm font-medium mb-2">OPERATIONAL BOUNDARIES</H3>
          <BodyText className="text-xs text-primary/80">
            Safety and compliance protocols exclude facility photography, comfort 
            emphasis, and marketing facility representation. All safety measures 
            operate through systematic functionality and regulatory compliance 
            rather than promotional or comfort-focused messaging.
          </BodyText>
        </div>
      </div>
    </section>
  );
};
