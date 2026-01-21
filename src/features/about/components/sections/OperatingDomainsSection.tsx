/**
 * Operating Domains Section
 * 
 * Displays the six systematic operating domains of HI Labs with expandable details
 */

'use client';

import React, { useState } from 'react';
import { H2, H3, BodyText } from '@/src/shared/components/typography';
import { ExpandableSection } from '@/src/shared/components/content';

const domains = [
  {
    id: 1,
    number: '01',
    title: 'Competency Development Domain',
    description: 'Systematic engineering competency development through structured curriculum, assessment protocols, and elimination mechanisms with documented performance tracking and intervention systems.',
    accountability: 'Competency development effectiveness measured through systematic assessment outcomes and deployment readiness verification.',
  },
  {
    id: 2,
    number: '02',
    title: 'Evaluation and Assessment Domain',
    description: 'Systematic evaluation protocols with documented criteria, elimination thresholds, and performance measurement systems ensuring consistent assessment and elimination decisions.',
    accountability: 'Assessment accuracy and elimination decision validity measured through deployment performance correlation analysis.',
  },
  {
    id: 3,
    number: '03',
    title: 'Supervised Deployment Domain',
    description: 'Engineer deployment supervision with performance tracking, intervention protocols, and partnership management systems maintaining accountability throughout deployment arrangements.',
    accountability: 'Deployment supervision effectiveness measured through engineer performance maintenance and partnership satisfaction.',
  },
  {
    id: 4,
    number: '04',
    title: 'Institutional Operations Domain',
    description: 'Systematic institutional management including facility operations, administrative protocols, and operational efficiency systems supporting competency development and deployment activities.',
    accountability: 'Operational effectiveness measured through systematic efficiency metrics and institutional performance indicators.',
  },
  {
    id: 5,
    number: '05',
    title: 'Partnership and Engagement Domain',
    description: 'Systematic partnership development and management with employer organizations, deployment arrangement protocols, and engagement framework maintenance ensuring effective collaboration.',
    accountability: 'Partnership effectiveness measured through deployment success rates and organizational satisfaction metrics.',
  },
  {
    id: 6,
    number: '06',
    title: 'Quality Assurance and Integrity Domain',
    description: 'Systematic quality monitoring, integrity verification, and institutional compliance systems ensuring operational standards and ethical protocol maintenance across all domains.',
    accountability: 'Quality assurance effectiveness measured through systematic audit outcomes and integrity standard compliance verification.',
  },
];

export const OperatingDomainsSection: React.FC = () => {
  const [expandedDomain, setExpandedDomain] = useState<number | null>(null);

  const handleToggle = (id: string | number) => {
    const numericId = typeof id === 'string' ? parseInt(id, 10) : id;
    setExpandedDomain(expandedDomain === numericId ? null : numericId);
  };

  return (
    <section className="space-y-8">
      <H2 className="text-3xl font-light text-primary mb-4">Operating Domains</H2>
      
      <div className="space-y-6">
        <BodyText className="text-primary/80 leading-relaxed">
          HI Labs operates across six systematic domains with defined accountability 
          structures and performance measurement protocols that govern institutional 
          effectiveness and operational integrity.
        </BodyText>
        
        <div className="space-y-1">
          {domains.map((domain) => (
            <ExpandableSection
              key={domain.id}
              id={domain.id}
              number={domain.number}
              title={domain.title}
              description={domain.description}
              expandedId={expandedDomain}
              onToggle={handleToggle}
            >
              <div className="bg-background border-l-4 border-primary p-6">
                <BodyText className="text-xs uppercase tracking-wide text-primary/60 mb-2 font-medium">
                  Accountability Framework
                </BodyText>
                <BodyText className="text-sm text-primary/80 leading-relaxed">
                  {domain.accountability}
                </BodyText>
              </div>
            </ExpandableSection>
          ))}
        </div>
      </div>
    </section>
  );
};
