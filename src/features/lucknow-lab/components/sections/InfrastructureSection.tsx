/**
 * Infrastructure Section
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

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
    <section className="space-y-8">
      <H2>Infrastructure Specification</H2>
      
      <div className="space-y-6">
        <BodyText>
          The Lucknow Lab infrastructure operates through systematic facility 
          design with functional workspace allocation, technical resource provision, 
          and operational support systems that enable effective competency 
          development without marketing facility emphasis.
        </BodyText>
        
        <div className="space-y-12">
          <div className="space-y-4">
            <H3 className="font-mono">FACILITY INFRASTRUCTURE</H3>
            <div className="pl-6 space-y-8">
              {infrastructureAreas.map((area) => (
                <div key={area.number} className="space-y-4">
                  <BodyText><strong>{area.number}. {area.title}</strong></BodyText>
                  <div className="pl-4 space-y-3">
                    <BodyText>{area.description}</BodyText>
                    <ul className="list-disc pl-6 space-y-2">
                      {area.items.map((item, index) => (
                        <li key={index}><BodyText>{item}</BodyText></li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-accent/10 border-l-4 border-accent p-6 space-y-4">
          <H3 className="text-accent font-mono">INFRASTRUCTURE STANDARD</H3>
          <BodyText className="font-mono text-sm">
            Infrastructure operates through systematic functionality and operational 
            efficiency rather than marketing facility emphasis or comfort optimization. 
            All facility elements support competency development and institutional 
            protocol requirements.
          </BodyText>
        </div>
      </div>
    </section>
  );
};
