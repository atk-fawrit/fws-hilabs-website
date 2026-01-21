/**
 * Infrastructure Section
 * 
 * Enhanced with better visual organization and InfoBox components
 */

import React from 'react';
import { H2, H3, BodyText } from '@/src/shared/components/typography';
import { InfoBox } from '@/src/shared/components/content';

const infrastructureAreas = [
  {
    number: '01',
    title: 'Workspace and Learning Areas',
    description: 'Systematic workspace allocation including dedicated learning areas, practical application zones, assessment spaces, and collaboration areas that support competency development protocols and performance tracking requirements.',
    items: [
      'Dedicated learning spaces with systematic seating and workspace allocation',
      'Practical application areas with technical equipment and resource access',
      'Assessment spaces with individual workstation and monitoring capability',
      'Collaboration zones with systematic group work and project development support',
    ],
  },
  {
    number: '02',
    title: 'Technical Infrastructure',
    description: 'Systematic technical infrastructure including computing resources, network connectivity, development tools, and technical equipment that support engineering competency development and practical application requirements.',
    items: [
      'Computing workstations with systematic software and development environment provision',
      'High-speed internet connectivity with reliable bandwidth and network security',
      'Development tools and software licenses for systematic competency development',
      'Technical equipment including servers, networking hardware, and testing devices',
    ],
  },
  {
    number: '03',
    title: 'Operational Support Systems',
    description: 'Systematic operational support including power supply, climate control, security systems, and maintenance protocols that ensure consistent facility operation and competency development environment maintenance.',
    items: [
      'Reliable power supply with backup systems and uninterrupted operation capability',
      'Climate control systems maintaining optimal learning environment conditions',
      'Security systems with access control and facility monitoring protocols',
      'Maintenance protocols ensuring systematic facility upkeep and equipment functionality',
    ],
  },
  {
    number: '04',
    title: 'Administrative and Management Areas',
    description: 'Systematic administrative infrastructure including instructor workspaces, administrative offices, meeting areas, and document management systems that support institutional operations and performance tracking requirements.',
    items: [
      'Instructor workspaces with systematic resource access and performance tracking tools',
      'Administrative offices with document management and operational coordination capability',
      'Meeting areas for systematic assessment, intervention, and coordination activities',
      'Document management systems with systematic record keeping and compliance protocols',
    ],
  },
];

export const InfrastructureSection: React.FC = () => {
  return (
    <section className="space-y-6">
      <H2 className="text-3xl font-light text-primary mb-4">Infrastructure Specification</H2>
      
      <div className="space-y-4">
        <BodyText className="text-primary/80 leading-relaxed">
          The Lucknow Lab infrastructure operates through systematic facility 
          design with functional workspace allocation, technical resource provision, 
          and operational support systems that enable effective competency 
          development without marketing facility emphasis.
        </BodyText>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {infrastructureAreas.map((area) => (
            <div key={area.number} className="bg-accent/5 border-l-4 border-accent p-4">
              <div className="flex items-start gap-2 mb-3">
                <span className="text-xs text-accent font-mono font-medium">{area.number}</span>
                <H3 className="text-sm font-medium text-primary">{area.title}</H3>
              </div>
              <BodyText className="text-xs text-primary/80 leading-relaxed mb-3">
                {area.description}
              </BodyText>
              <ul className="space-y-1">
                {area.items.map((item, index) => (
                  <li key={index} className="text-xs text-primary/70 pl-3 border-l-2 border-accent/30">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <InfoBox
          variant="accent"
          title="INFRASTRUCTURE STANDARD"
          description="Infrastructure operates through systematic functionality and operational efficiency rather than marketing facility emphasis or comfort optimization. All facility elements support competency development and institutional protocol requirements."
        />
      </div>
    </section>
  );
};
