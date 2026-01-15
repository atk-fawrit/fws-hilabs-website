/**
 * Operating Domains Section
 * 
 * Displays the six systematic operating domains of HI Labs
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { DomainSpecification } from '../ui';

const domains = [
  {
    number: '01',
    title: 'Competency Development Domain',
    description: 'Systematic engineering competency development through structured curriculum, assessment protocols, and elimination mechanisms with documented performance tracking and intervention systems.',
    accountability: 'Competency development effectiveness measured through systematic assessment outcomes and deployment readiness verification.',
  },
  {
    number: '02',
    title: 'Evaluation and Assessment Domain',
    description: 'Systematic evaluation protocols with documented criteria, elimination thresholds, and performance measurement systems ensuring consistent assessment and elimination decisions.',
    accountability: 'Assessment accuracy and elimination decision validity measured through deployment performance correlation analysis.',
  },
  {
    number: '03',
    title: 'Supervised Deployment Domain',
    description: 'Engineer deployment supervision with performance tracking, intervention protocols, and partnership management systems maintaining accountability throughout deployment arrangements.',
    accountability: 'Deployment supervision effectiveness measured through engineer performance maintenance and partnership satisfaction.',
  },
  {
    number: '04',
    title: 'Institutional Operations Domain',
    description: 'Systematic institutional management including facility operations, administrative protocols, and operational efficiency systems supporting competency development and deployment activities.',
    accountability: 'Operational effectiveness measured through systematic efficiency metrics and institutional performance indicators.',
  },
  {
    number: '05',
    title: 'Partnership and Engagement Domain',
    description: 'Systematic partnership development and management with employer organizations, deployment arrangement protocols, and engagement framework maintenance ensuring effective collaboration.',
    accountability: 'Partnership effectiveness measured through deployment success rates and organizational satisfaction metrics.',
  },
  {
    number: '06',
    title: 'Quality Assurance and Integrity Domain',
    description: 'Systematic quality monitoring, integrity verification, and institutional compliance systems ensuring operational standards and ethical protocol maintenance across all domains.',
    accountability: 'Quality assurance effectiveness measured through systematic audit outcomes and integrity standard compliance verification.',
  },
];

export const OperatingDomainsSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2>Operating Domains</H2>
      
      <div className="space-y-6">
        <BodyText>
          HI Labs operates across six systematic domains with defined accountability 
          structures and performance measurement protocols that govern institutional 
          effectiveness and operational integrity.
        </BodyText>
        
        <div className="space-y-12">
          <div className="space-y-4">
            <H3 className="font-mono">DOMAIN SPECIFICATIONS</H3>
            <div className="pl-6 space-y-8">
              {domains.map((domain) => (
                <DomainSpecification key={domain.number} {...domain} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
