/**
 * Integrity Standards Section
 * 
 * Displays integrity framework and compliance protocols
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { InfoBox } from '@/src/shared/components/content';
import { IntegritySection } from '../ui';

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
    <section className="space-y-8">
      <H2>Integrity Standards</H2>
      
      <div className="space-y-6">
        <BodyText>
          HI Labs maintains systematic integrity standards with documented 
          compliance protocols, ethical boundaries, and accountability mechanisms 
          that govern all institutional operations and stakeholder interactions.
        </BodyText>
        
        <div className="space-y-12">
          <div className="space-y-4">
            <H3 className="font-mono">INTEGRITY FRAMEWORK</H3>
            <div className="pl-6 space-y-8">
              {integritySections.map((section) => (
                <IntegritySection key={section.number} {...section} />
              ))}
            </div>
          </div>
        </div>
        
        <InfoBox
          variant="accent"
          title="INTEGRITY COMMITMENT"
          description="HI Labs maintains systematic integrity standards through documented protocols, regular compliance verification, and accountability mechanisms that ensure ethical operation and stakeholder trust maintenance across all institutional activities and external relationships."
        />
      </div>
    </section>
  );
};
