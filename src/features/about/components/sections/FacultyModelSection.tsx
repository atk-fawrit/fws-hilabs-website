/**
 * Faculty Model Section
 * 
 * Displays faculty role specifications and collaboration protocols
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { RoleSpecification } from '../ui';

const instructorRole = {
  title: 'INSTRUCTOR ROLE SPECIFICATION',
  description: 'Instructors operate systematic competency development protocols with assessment authority, elimination decision responsibility, and performance tracking accountability within defined domain areas.',
  responsibilities: [
    'Systematic competency development protocol implementation and maintenance',
    'Assessment criteria application and elimination decision execution',
    'Performance tracking documentation and intervention protocol activation',
    'Competency development effectiveness measurement and optimization',
    'Institutional standard compliance and quality assurance participation',
  ],
  qualifications: [
    'Demonstrated systematic competency development experience with documented outcomes',
    'Assessment protocol expertise and elimination decision authority capability',
    'Technical domain expertise appropriate for assigned competency areas',
    'Institutional discipline commitment and protocol compliance capability',
  ],
  note: {
    type: 'authority' as const,
    content: 'INSTRUCTOR AUTHORITY: Instructors maintain authority for competency assessment, elimination decisions, and performance intervention within assigned domain responsibilities.',
  },
};

const trainerRole = {
  title: 'TRAINER ROLE SPECIFICATION',
  description: 'Trainers operate systematic skill development protocols with performance support responsibility, competency reinforcement accountability, and specialized technical domain expertise.',
  responsibilities: [
    'Systematic skill development protocol implementation and technical support',
    'Competency reinforcement activities and performance optimization support',
    'Specialized technical domain expertise provision and application guidance',
    'Performance support documentation and competency development assistance',
    'Instructor collaboration and systematic protocol support participation',
  ],
  qualifications: [
    'Specialized technical domain expertise with practical application experience',
    'Systematic skill development capability and performance support experience',
    'Competency reinforcement protocol expertise and optimization capability',
    'Collaborative protocol participation and institutional standard compliance',
  ],
  note: {
    type: 'scope' as const,
    content: 'TRAINER SCOPE: Trainers operate under instructor authority with specialized technical support responsibility rather than independent assessment or elimination decision authority.',
  },
};

export const FacultyModelSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2>Faculty Model</H2>
      
      <div className="space-y-6">
        <BodyText>
          HI Labs operates through systematic faculty roles with distinct 
          responsibilities, accountability structures, and performance requirements 
          that distinguish instructional and training functions within the 
          institutional framework.
        </BodyText>
        
        <div className="space-y-12">
          <RoleSpecification {...instructorRole} />
          <RoleSpecification {...trainerRole} />

          <div className="space-y-4">
            <H3 className="font-mono">ROLE DISTINCTION AND COLLABORATION</H3>
            <div className="pl-6 space-y-4">
              <BodyText>
                Instructor and trainer roles operate through systematic collaboration 
                with clear authority boundaries, responsibility allocation, and 
                performance accountability that prevents role confusion or authority conflicts.
              </BodyText>
              
              <div className="space-y-8">
                <div className="space-y-4">
                  <BodyText><strong>Authority Boundaries:</strong></BodyText>
                  <div className="pl-4 space-y-3">
                    <BodyText>
                      <strong>Instructor Authority:</strong> Assessment decisions, elimination 
                      authority, competency development protocol modification, performance 
                      intervention activation.
                    </BodyText>
                    <BodyText>
                      <strong>Trainer Authority:</strong> Technical support provision, skill 
                      development optimization, specialized domain guidance, performance 
                      support documentation.
                    </BodyText>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <BodyText><strong>Collaboration Protocols:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Systematic communication protocols for performance data sharing and assessment coordination</BodyText></li>
                    <li><BodyText>Competency development collaboration with instructor oversight and trainer technical support</BodyText></li>
                    <li><BodyText>Performance intervention coordination with instructor decision authority and trainer implementation support</BodyText></li>
                    <li><BodyText>Quality assurance participation with shared responsibility for institutional standard maintenance</BodyText></li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-warning/10 border-l-4 border-warning p-4 space-y-3">
                <BodyText className="font-mono text-sm">
                  ROLE CLARITY: Clear role distinction prevents authority conflicts 
                  and ensures systematic collaboration effectiveness within institutional 
                  accountability frameworks.
                </BodyText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
