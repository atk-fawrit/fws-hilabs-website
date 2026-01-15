/**
 * Access Rules Section
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

const accessControls = [
  {
    number: '01',
    title: 'Candidate Access Protocols',
    description: 'Systematic candidate access operates through enrollment verification, identification protocols, and attendance tracking systems that ensure authorized facility access and systematic presence monitoring throughout competency development periods.',
    items: [
      'Enrollment verification with systematic identification and access authorization',
      'Daily attendance tracking with systematic presence monitoring and absence protocols',
      'Access schedule compliance with defined operational hours and facility availability',
      'Security protocol compliance including identification requirements and access restrictions',
    ],
  },
  {
    number: '02',
    title: 'Visitor Management System',
    description: 'Systematic visitor management operates through advance authorization, escort protocols, and limited access areas that maintain operational security while enabling necessary stakeholder interaction and institutional transparency requirements.',
    items: [
      'Advance authorization requirement with systematic visitor verification and approval',
      'Escort protocols with designated staff supervision and access area limitations',
      'Limited access areas with restricted zones and operational security maintenance',
      'Visit duration management with systematic time allocation and departure protocols',
    ],
  },
  {
    number: '03',
    title: 'Parent and Guardian Access',
    description: 'Parent and guardian access operates through systematic protocols with scheduled interaction periods, designated meeting areas, and information sharing boundaries that maintain institutional operations while enabling necessary family communication.',
    items: [
      'Scheduled interaction periods with systematic appointment and meeting coordination',
      'Designated meeting areas with appropriate privacy and institutional protocol maintenance',
      'Information sharing protocols with performance data access and confidentiality boundaries',
      'Emergency contact procedures with systematic communication and intervention protocols',
    ],
  },
  {
    number: '04',
    title: 'Employer and Partnership Access',
    description: 'Employer and partnership access operates through systematic coordination with advance scheduling, designated interaction areas, and institutional protocol compliance that support deployment preparation and partnership development activities.',
    items: [
      'Advance scheduling requirement with systematic coordination and facility preparation',
      'Designated interaction areas with appropriate professional environment and protocol compliance',
      'Institutional protocol compliance with systematic supervision and boundary maintenance',
      'Partnership development support with systematic coordination and documentation protocols',
    ],
  },
];

export const AccessRulesSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2>Access Rules and Visit Policies</H2>
      
      <div className="space-y-6">
        <BodyText>
          The Lucknow Lab operates through systematic access control and visit 
          policies with defined entry protocols, visitor management systems, 
          and security boundaries that ensure operational integrity and 
          institutional protocol compliance.
        </BodyText>
        
        <div className="space-y-12">
          <div className="space-y-4">
            <H3 className="font-mono">ACCESS CONTROL FRAMEWORK</H3>
            <div className="pl-6 space-y-8">
              {accessControls.map((control) => (
                <div key={control.number} className="space-y-4">
                  <BodyText><strong>{control.number}. {control.title}</strong></BodyText>
                  <div className="pl-4 space-y-3">
                    <BodyText>{control.description}</BodyText>
                    <ul className="list-disc pl-6 space-y-2">
                      {control.items.map((item, index) => (
                        <li key={index}><BodyText>{item}</BodyText></li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
