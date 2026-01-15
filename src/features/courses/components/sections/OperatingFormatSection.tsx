/**
 * Operating Format Section
 * 
 * Displays operating format and program rules
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

export const OperatingFormatSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2>Operating Format and Rules</H2>
      
      <div className="space-y-8">
        <div className="space-y-4">
          <H3 className="font-mono">OPERATING FORMAT</H3>
          <div className="pl-6 space-y-4">
            <BodyText>
              Short Programs operate on weekend schedules to accommodate working professionals. 
              Sessions are conducted in-person at the Lucknow facility with structured 
              timelines and specific deliverable requirements.
            </BodyText>
            
            <div className="space-y-3">
              <BodyText><strong>Schedule Structure:</strong></BodyText>
              <ul className="list-disc pl-6 space-y-2">
                <li><BodyText>Saturday and Sunday sessions, 0900-1700 hours</BodyText></li>
                <li><BodyText>4-8 weekend program duration depending on module complexity</BodyText></li>
                <li><BodyText>Maximum 20 participants per cohort for effective instruction</BodyText></li>
                <li><BodyText>Mandatory attendance for all scheduled sessions</BodyText></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <H3 className="font-mono">PROGRAM RULES</H3>
          <div className="pl-6 space-y-4">
            <div className="bg-gray-50 border-l-4 border-secondary p-4 space-y-3">
              <ul className="list-disc pl-6 space-y-2 font-mono text-sm">
                <li><BodyText className="font-mono">No make-up sessions for missed attendance</BodyText></li>
                <li><BodyText className="font-mono">Completion requires attendance at 80% of sessions minimum</BodyText></li>
                <li><BodyText className="font-mono">Individual work required between sessions with deadline compliance</BodyText></li>
                <li><BodyText className="font-mono">No refunds after program commencement</BodyText></li>
                <li><BodyText className="font-mono">Professional conduct standards apply to all interactions</BodyText></li>
                <li><BodyText className="font-mono">Completion certificate issued only upon meeting all requirements</BodyText></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
