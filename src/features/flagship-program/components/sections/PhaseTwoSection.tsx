/**
 * Phase Two Section
 * 
 * Displays supervised deployment phase (Months 10-12)
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

export const PhaseTwoSection: React.FC = () => {
  return (
    <section className="space-y-10">
      <H2 className="text-3xl font-light">Phase II: Supervised Deployment (Months 10-12)</H2>
      
      <div className="space-y-8">
        <BodyText className="text-base leading-relaxed">
          Phase II operates as supervised deployment within partner organizations or client projects. 
          Participants work as junior engineers under direct supervision while maintaining 
          accountability to HI Labs evaluation protocols.
        </BodyText>
        
        <div className="space-y-10">
          <div className="space-y-6">
            <H3 className="font-mono text-2xl">SUPERVISION MODEL</H3>
            <div className="pl-8 space-y-4">
              <ul className="list-disc pl-6 space-y-3">
                <li><BodyText className="text-base leading-relaxed">Daily supervision by designated technical lead at deployment site</BodyText></li>
                <li><BodyText className="text-base leading-relaxed">Weekly evaluation reports submitted to HI Labs oversight</BodyText></li>
                <li><BodyText className="text-base leading-relaxed">Bi-weekly review sessions with HI Labs instructional staff</BodyText></li>
                <li><BodyText className="text-base leading-relaxed">Monthly performance assessment with elimination review</BodyText></li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <H3 className="font-mono text-2xl">DEPLOYMENT CONSTRAINTS</H3>
            <div className="pl-8 space-y-4">
              <ul className="list-disc pl-6 space-y-3">
                <li><BodyText className="text-base leading-relaxed">Minimum 40 hours per week at deployment site</BodyText></li>
                <li><BodyText className="text-base leading-relaxed">Adherence to partner organization protocols and standards</BodyText></li>
                <li><BodyText className="text-base leading-relaxed">Completion of assigned projects within specified timelines</BodyText></li>
                <li><BodyText className="text-base leading-relaxed">Professional conduct and communication standards</BodyText></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
