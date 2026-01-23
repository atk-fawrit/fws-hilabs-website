/**
 * Deployment Models Section
 * 
 * Defines the three deployment models with expandable details using shared ExpandableSection
 */

'use client';

import React, { useState } from 'react';
import { H2, BodyText } from '@/src/shared/components/typography';
import { ExpandableSection } from '@/src/shared/components/content';

const deploymentModels = [
  {
    id: 1,
    number: "01",
    title: "Internal Teams Model",
    description: "Engineers are deployed directly within partner organization teams under joint supervision between HI Labs instructors and organizational technical leadership with shared performance accountability.",
    characteristics: [
      "Direct integration into existing organizational development teams",
      "Joint supervision between HI Labs instructors and organizational leads",
      "Shared performance accountability and competency development responsibility",
      "Organizational access to HI Labs supervision protocols and assessment methods",
      "Gradual supervision transition from HI Labs to organizational management"
    ],
    protocol: "HI Labs maintains primary supervision for initial 90 days with gradual transition to organizational supervision based on performance milestones and integration success.",
    requirements: [
      "Designated technical lead with capacity for joint supervision participation",
      "Existing development team structure with integration capacity",
      "Commitment to HI Labs supervision protocols during transition period",
      "Performance feedback participation and assessment collaboration"
    ]
  },
  {
    id: 2,
    number: "02",
    title: "Partner Companies Model",
    description: "Engineers are deployed to established partner companies with structured supervision agreements and performance tracking protocols maintained by HI Labs throughout the deployment period.",
    characteristics: [
      "Deployment to pre-qualified partner organizations with established protocols",
      "HI Labs maintains primary supervision responsibility throughout deployment",
      "Structured performance tracking and regular assessment intervals",
      "Partner company integration support and conflict resolution protocols",
      "Defined deployment duration with extension or transition options"
    ],
    protocol: "Partner companies undergo qualification process including supervision capacity assessment, technical environment evaluation, and protocol compliance verification.",
    requirements: [
      "Demonstrated technical environment suitable for junior engineer development",
      "Commitment to HI Labs supervision protocols and performance tracking",
      "Established development processes compatible with supervised deployment",
      "Technical leadership capacity for collaboration with HI Labs supervision"
    ]
  },
  {
    id: 3,
    number: "03",
    title: "Client Projects Model",
    description: "Engineers work on specific client projects under direct HI Labs supervision with client organizations providing project requirements and acceptance criteria while HI Labs maintains full supervision responsibility.",
    characteristics: [
      "Project-based engagement with defined scope and deliverable requirements",
      "HI Labs maintains complete supervision and performance accountability",
      "Client provides project specifications and acceptance criteria",
      "Structured project delivery with milestone-based progress tracking",
      "Limited client interaction with engineers during project execution"
    ],
    protocol: "Client projects are limited to well-defined technical deliverables suitable for junior engineer capabilities under structured supervision protocols.",
    requirements: [
      "Clear project specifications with defined technical requirements",
      "Realistic scope appropriate for junior engineer capabilities",
      "Structured acceptance criteria and milestone definitions",
      "Limited direct supervision expectations with HI Labs protocol acceptance"
    ]
  }
];

export const DeploymentModelsSection: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const handleToggle = (id: string | number) => {
    const numericId = typeof id === 'string' ? parseInt(id, 10) : id;
    setExpandedSection(expandedSection === numericId ? null : numericId);
  };

  return (
    <section className="mb-16">
      <div className="max-w-4xl mb-12">
        <H2 className="text-3xl font-light text-primary mb-4">Deployment Models</H2>
        <BodyText className="text-primary/70 leading-relaxed">
          HI Labs operates three distinct deployment models that define the relationship structure, supervision protocols, 
          and risk allocation between HI Labs, participating engineers, and partner organizations.
        </BodyText>
      </div>

      <div className="space-y-1">
        {deploymentModels.map((model) => (
          <ExpandableSection
            key={model.id}
            id={model.id}
            number={model.number}
            title={model.title}
            description={model.description}
            expandedId={expandedSection}
            onToggle={handleToggle}
          >
            {/* Model Characteristics */}
            <div className="mb-6">
              <div className="text-sm uppercase tracking-wide text-primary/60 mb-3 font-medium">
                Model Characteristics
              </div>
              <ul className="space-y-2">
                {model.characteristics.map((char, idx) => (
                  <li key={idx} className="text-sm text-primary/80 leading-relaxed pl-4 border-l-2 border-accent">
                    <BodyText className="text-sm">{char}</BodyText>
                  </li>
                ))}
              </ul>
            </div>

            {/* Protocol */}
            <div className="bg-background border-l-4 border-primary p-4 mb-6">
              <BodyText className="text-xs uppercase tracking-wide text-primary/60 mb-2 font-medium">
                {model.id === 1 ? 'Supervision Protocol' : model.id === 2 ? 'Partnership Requirement' : 'Project Scope'}
              </BodyText>
              <BodyText className="text-sm text-primary/80 leading-relaxed">
                {model.protocol}
              </BodyText>
            </div>

            {/* Requirements */}
            <div>
              <div className="text-sm uppercase tracking-wide text-primary/60 mb-3 font-medium">
                {model.id === 1 ? 'Organizational Requirements' : model.id === 2 ? 'Partner Qualifications' : 'Client Requirements'}
              </div>
              <ul className="space-y-2">
                {model.requirements.map((req, idx) => (
                  <li key={idx} className="text-sm text-primary/80 leading-relaxed pl-4 border-l-2 border-accent">
                    <BodyText className="text-sm">{req}</BodyText>
                  </li>
                ))}
              </ul>
            </div>
          </ExpandableSection>
        ))}
      </div>
    </section>
  );
};
