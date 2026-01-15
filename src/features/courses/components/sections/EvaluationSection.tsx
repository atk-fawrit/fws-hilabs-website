/**
 * Evaluation and Recognition Section
 * 
 * Displays evaluation methodology and recognition framework
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

export const EvaluationSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2>Evaluation and Recognition Approach</H2>
      
      <div className="space-y-8">
        <div className="space-y-4">
          <H3 className="font-mono">EVALUATION METHODOLOGY</H3>
          <div className="pl-6 space-y-4">
            <BodyText>
              Short Programs employ practical evaluation focused on skill demonstration 
              and application competency. Assessment measures ability to apply learned 
              concepts in realistic scenarios rather than theoretical knowledge retention.
            </BodyText>
            
            <div className="space-y-3">
              <BodyText><strong>Evaluation Components:</strong></BodyText>
              <ul className="list-disc pl-6 space-y-2">
                <li><BodyText>Weekly practical assignments with specific deliverable requirements</BodyText></li>
                <li><BodyText>Mid-program project demonstrating skill integration</BodyText></li>
                <li><BodyText>Final capstone project with real-world application</BodyText></li>
                <li><BodyText>Peer collaboration assessment during group activities</BodyText></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <H3 className="font-mono">RECOGNITION FRAMEWORK</H3>
          <div className="pl-6 space-y-4">
            <BodyText>
              Completion recognition is based on demonstrated competency rather than 
              attendance or effort. Participants must meet specific performance 
              thresholds to receive program completion certification.
            </BodyText>
            
            <div className="bg-gray-50 border-l-4 border-accent p-4 space-y-3">
              <BodyText className="font-mono text-sm">
                COMPLETION REQUIREMENTS: 80% attendance minimum, successful completion 
                of all assignments, passing grade on capstone project, demonstration 
                of practical skill application.
              </BodyText>
            </div>
            
            <BodyText>
              Certificates indicate specific competencies achieved and include project 
              portfolio references. Recognition does not constitute professional 
              certification or guarantee employment qualification.
            </BodyText>
          </div>
        </div>
      </div>
    </section>
  );
};
