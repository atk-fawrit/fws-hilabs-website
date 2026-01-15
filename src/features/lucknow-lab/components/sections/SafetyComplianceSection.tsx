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
    <section className="space-y-8">
      <H2>Safety and Compliance Boundaries</H2>
      
      <div className="space-y-6">
        <BodyText>
          The Lucknow Lab maintains systematic safety protocols and compliance 
          boundaries with documented procedures, emergency response systems, 
          and regulatory adherence that ensure operational safety and institutional 
          integrity throughout all facility operations.
        </BodyText>
        
        <div className="space-y-12">
          <div className="space-y-4">
            <H3 className="font-mono">SAFETY PROTOCOL FRAMEWORK</H3>
            <div className="pl-6 space-y-8">
              {safetyProtocols.map((protocol) => (
                <div key={protocol.number} className="space-y-4">
                  <BodyText><strong>{protocol.number}. {protocol.title}</strong></BodyText>
                  <div className="pl-4 space-y-3">
                    <BodyText>{protocol.description}</BodyText>
                    <ul className="list-disc pl-6 space-y-2">
                      {protocol.items.map((item, index) => (
                        <li key={index}><BodyText>{item}</BodyText></li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-warning/10 border-l-4 border-warning p-6 space-y-4">
          <H3 className="text-warning font-mono">OPERATIONAL BOUNDARIES</H3>
          <BodyText className="font-mono text-sm">
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
