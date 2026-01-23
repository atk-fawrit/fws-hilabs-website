/**
 * Supply Specification Section
 * 
 * Defines what HI Labs supplies and doesn't supply using InfoBox components
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { InfoBox } from '@/src/shared/components/content';

export const SupplySpecificationSection: React.FC = () => {
  const supplyComponents = [
    "Junior engineers with 12-month systematic competency development",
    "Documented technical competency profiles with assessment evidence",
    "Project portfolio demonstrating practical application capabilities",
    "Supervised deployment protocols with performance tracking",
    "Ongoing supervision support during initial deployment phases",
    "Performance feedback mechanisms and adjustment protocols"
  ];

  const supplyExclusions = [
    "Senior engineering personnel or technical leadership roles",
    "Specialized domain expertise beyond general engineering competencies",
    "Management, product, or business development personnel",
    "Guaranteed performance outcomes or productivity commitments",
    "Long-term retention guarantees or employment stability assurances",
    "Cultural fit assessment or organizational integration services",
    "Salary negotiation, benefits administration, or HR services"
  ];

  return (
    <section className="mb-16">
      <div className="max-w-4xl mb-12">
        <H2 className="text-3xl font-light text-primary mb-4">Supply Specification</H2>
        <BodyText className="text-primary/70 leading-relaxed">
          HI Labs supplies systematically developed junior engineers with documented competencies and supervised 
          deployment protocols. Supply specifications define exactly what is provided and what remains outside the supply scope.
        </BodyText>
      </div>

      {/* Supply Components */}
      <div className="mb-12">
        <InfoBox
          title="Supply Components"
          description="HI Labs supplies junior engineers with systematically developed competencies, documented performance evidence, and structured deployment support within defined supervision frameworks."
          variant="accent"
          className="mb-8"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {supplyComponents.map((item, idx) => (
            <div key={idx} className="bg-accent/5 border-l-4 border-accent p-4">
              <BodyText className="text-sm text-primary/80">{item}</BodyText>
            </div>
          ))}
        </div>

        <InfoBox
          title="Supply Standard"
          description="All supplied engineers complete systematic evaluation and elimination processes ensuring consistent competency baselines and deployment readiness verification."
          variant="neutral"
        />
      </div>

      {/* Supply Exclusions */}
      <div className="mb-12">
        <InfoBox
          title="Supply Exclusions"
          description="HI Labs explicitly does not supply senior engineers, specialized domain experts, management personnel, or guaranteed performance outcomes beyond documented competency baselines."
          variant="warning"
          className="mb-8"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {supplyExclusions.map((item, idx) => (
            <div key={idx} className="bg-warning/5 border-l-4 border-warning p-4 flex items-start gap-3">
              <span className="text-warning text-lg font-light mt-0.5">×</span>
              <BodyText className="text-sm text-primary/80">{item}</BodyText>
            </div>
          ))}
        </div>
      </div>

      {/* Supply Constraints */}
      <div className="bg-warning/5 border-l-4 border-warning p-8">
        <H3 className="text-sm uppercase tracking-wide text-warning mb-4 font-medium">
          Supply Constraints
        </H3>
        <BodyText className="text-primary/80 leading-relaxed mb-6 text-sm">
          Supply availability operates within systematic production constraints including cohort timing, elimination rates, 
          and deployment capacity limitations that affect organizational planning requirements.
        </BodyText>
        
        <div className="mb-6">
          <BodyText className="text-xs uppercase tracking-wide text-primary/60 mb-3 font-medium">
            Operational Constraints
          </BodyText>
          <ul className="space-y-2">
            <li className="text-primary/80 pl-4 border-l-2 border-warning text-sm">
              <BodyText className="text-sm">Cohort-based production with fixed intake and completion schedules</BodyText>
            </li>
            <li className="text-primary/80 pl-4 border-l-2 border-warning text-sm">
              <BodyText className="text-sm">Elimination processes reducing supply volume from initial intake</BodyText>
            </li>
            <li className="text-primary/80 pl-4 border-l-2 border-warning text-sm">
              <BodyText className="text-sm">Geographic concentration in Lucknow with limited remote deployment</BodyText>
            </li>
            <li className="text-primary/80 pl-4 border-l-2 border-warning text-sm">
              <BodyText className="text-sm">Supervision capacity limitations affecting simultaneous deployment volume</BodyText>
            </li>
            <li className="text-primary/80 pl-4 border-l-2 border-warning text-sm">
              <BodyText className="text-sm">Competency development timelines requiring 12-month minimum production cycles</BodyText>
            </li>
          </ul>
        </div>

        <div className="bg-background border-l-4 border-warning p-4">
          <BodyText className="text-xs uppercase tracking-wide text-primary/60 mb-1 font-medium">
            Planning Requirement
          </BodyText>
          <BodyText className="text-sm text-primary/80">
            Organizations must align talent requirements with HI Labs production schedules and capacity constraints 
            for effective pipeline integration.
          </BodyText>
        </div>
      </div>
    </section>
  );
};
