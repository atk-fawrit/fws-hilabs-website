/**
 * Engagement Protocol Section
 * 
 * Displays the four-phase engagement protocol
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

const phases = [
  {
    number: '01',
    title: 'INITIAL ASSESSMENT PHASE',
    duration: '2-3 weeks',
    objective: 'Organizational readiness evaluation',
    components: [
      'Technical environment evaluation for junior engineer deployment suitability',
      'Supervision capacity assessment and protocol compatibility review',
      'Organizational development process analysis and integration requirements',
      'Deployment model selection based on organizational structure and requirements',
      'Risk allocation discussion and supervision boundary establishment',
    ],
    outcome: 'ASSESSMENT OUTCOME: Organizations receive detailed evaluation report with deployment model recommendations and partnership feasibility assessment.',
  },
  {
    number: '02',
    title: 'PARTNERSHIP AGREEMENT PHASE',
    duration: '1-2 weeks',
    objective: 'Formal partnership establishment',
    components: [
      'Deployment model specification with supervision protocols and responsibilities',
      'Performance evaluation framework agreement and feedback mechanism establishment',
      'Risk allocation documentation and accountability boundary definition',
      'Engagement timeline establishment with deployment scheduling and capacity planning',
      'Performance intervention protocols and modification authority clarification',
    ],
    outcome: 'AGREEMENT STANDARD: All partnership agreements include detailed supervision protocols, performance standards, and intervention authorities to prevent operational conflicts.',
  },
  {
    number: '03',
    title: 'DEPLOYMENT INITIATION PHASE',
    duration: '2-4 weeks',
    objective: 'Engineer deployment and integration',
    components: [
      'Engineer selection and competency profile matching with organizational requirements',
      'Deployment environment preparation and technical infrastructure setup',
      'Initial supervision protocol implementation and performance baseline establishment',
      'Partner organization integration support and collaboration framework activation',
      'Performance tracking system initialization and feedback mechanism testing',
    ],
    outcome: 'INITIATION SUCCESS: Deployment initiation is considered successful when supervision protocols are operational and performance tracking systems are functioning effectively.',
  },
  {
    number: '04',
    title: 'ONGOING PARTNERSHIP MANAGEMENT',
    duration: 'Continuous',
    objective: 'Partnership optimization and expansion',
    components: [
      'Regular partnership review sessions with effectiveness assessment and optimization',
      'Deployment capacity planning and scaling discussion for additional engineer placement',
      'Protocol refinement based on performance data and feedback analysis',
      'Partnership expansion evaluation including additional deployment models or capacity',
      'Long-term strategic planning for talent pipeline integration and organizational development',
    ],
    outcome: 'PARTNERSHIP EVOLUTION: Successful partnerships evolve toward increased deployment capacity and enhanced integration effectiveness through systematic optimization and expansion.',
  },
];

export const EngagementProtocolSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2>Engagement Protocol</H2>
      
      <div className="space-y-6">
        <BodyText>
          Structured engagement protocols define the systematic process for 
          organizations to evaluate, initiate, and maintain partnership 
          arrangements with HI Labs for talent deployment.
        </BodyText>
        
        <div className="space-y-12">
          {phases.map((phase) => (
            <div key={phase.number} className="space-y-4">
              <H3 className="font-mono">{phase.number}. {phase.title}</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  <strong>Duration:</strong> {phase.duration} | <strong>Objective:</strong> {phase.objective}
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>{phase.number === '01' ? 'Assessment Components:' : phase.number === '02' ? 'Agreement Components:' : phase.number === '03' ? 'Initiation Components:' : 'Management Components:'}</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    {phase.components.map((item, index) => (
                      <li key={index}><BodyText>{item}</BodyText></li>
                    ))}
                  </ul>
                </div>
                
                <div className={phase.number === '02' || phase.number === '04' ? 'bg-accent/10 border-l-4 border-accent p-4 space-y-3' : 'bg-gray-50 p-4 border-l-2 border-secondary'}>
                  <BodyText className="font-mono text-sm">
                    {phase.outcome}
                  </BodyText>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
