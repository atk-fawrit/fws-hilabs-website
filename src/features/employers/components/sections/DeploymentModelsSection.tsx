/**
 * Deployment Models Section
 * 
 * Displays the three deployment models
 */

import React from 'react';
import { H2 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { DeploymentModel } from '../ui';

const deploymentModels = [
  {
    number: '01',
    title: 'INTERNAL TEAMS MODEL',
    description: 'Engineers are deployed directly within partner organization teams under joint supervision between HI Labs instructors and organizational technical leadership with shared performance accountability.',
    characteristics: [
      'Direct integration into existing organizational development teams',
      'Joint supervision between HI Labs instructors and organizational leads',
      'Shared performance accountability and competency development responsibility',
      'Organizational access to HI Labs supervision protocols and assessment methods',
      'Gradual supervision transition from HI Labs to organizational management',
    ],
    protocol: 'SUPERVISION PROTOCOL: HI Labs maintains primary supervision for initial 90 days with gradual transition to organizational supervision based on performance milestones and integration success.',
    requirements: [
      'Designated technical lead with capacity for joint supervision participation',
      'Existing development team structure with integration capacity',
      'Commitment to HI Labs supervision protocols during transition period',
      'Performance feedback participation and assessment collaboration',
    ],
  },
  {
    number: '02',
    title: 'PARTNER COMPANIES MODEL',
    description: 'Engineers are deployed to established partner companies with structured supervision agreements and performance tracking protocols maintained by HI Labs throughout the deployment period.',
    characteristics: [
      'Deployment to pre-qualified partner organizations with established protocols',
      'HI Labs maintains primary supervision responsibility throughout deployment',
      'Structured performance tracking and regular assessment intervals',
      'Partner company integration support and conflict resolution protocols',
      'Defined deployment duration with extension or transition options',
    ],
    protocol: 'PARTNERSHIP REQUIREMENT: Partner companies undergo qualification process including supervision capacity assessment, technical environment evaluation, and protocol compliance verification.',
    requirements: [
      'Demonstrated technical environment suitable for junior engineer development',
      'Commitment to HI Labs supervision protocols and performance tracking',
      'Established development processes compatible with supervised deployment',
      'Technical leadership capacity for collaboration with HI Labs supervision',
    ],
  },
  {
    number: '03',
    title: 'CLIENT PROJECTS MODEL',
    description: 'Engineers work on specific client projects under direct HI Labs supervision with client organizations providing project requirements and acceptance criteria while HI Labs maintains full supervision responsibility.',
    characteristics: [
      'Project-based engagement with defined scope and deliverable requirements',
      'HI Labs maintains complete supervision and performance accountability',
      'Client provides project specifications and acceptance criteria',
      'Structured project delivery with milestone-based progress tracking',
      'Limited client interaction with engineers during project execution',
    ],
    protocol: 'PROJECT SCOPE: Client projects are limited to well-defined technical deliverables suitable for junior engineer capabilities under structured supervision protocols.',
    requirements: [
      'Clear project specifications with defined technical requirements',
      'Realistic scope appropriate for junior engineer capabilities',
      'Structured acceptance criteria and milestone definitions',
      'Limited direct supervision expectations with HI Labs protocol acceptance',
    ],
  },
];

export const DeploymentModelsSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2>Deployment Models</H2>
      
      <div className="space-y-6">
        <BodyText>
          HI Labs operates three distinct deployment models that define the 
          relationship structure, supervision protocols, and risk allocation 
          between HI Labs, participating engineers, and partner organizations.
        </BodyText>
        
        <div className="space-y-12">
          {deploymentModels.map((model) => (
            <DeploymentModel key={model.number} {...model} />
          ))}
        </div>
      </div>
    </section>
  );
};
