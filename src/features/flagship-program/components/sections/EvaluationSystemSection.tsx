/**
 * Evaluation System Section
 * 
 * Displays evaluation protocols, elimination triggers, and process
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

export const EvaluationSystemSection: React.FC = () => {
  return (
    <section className="space-y-10">
      <H2 className="text-3xl font-light">Evaluation and Elimination System</H2>
      
      <div className="space-y-8">
        <BodyText className="text-base leading-relaxed">
          The program operates continuous evaluation with documented elimination criteria. 
          All participants are subject to performance-based elimination at any stage.
        </BodyText>
        
        <div className="space-y-12">
          <div className="space-y-6">
            <H3 className="font-mono text-2xl">EVALUATION PROTOCOLS</H3>
            <div className="pl-8 space-y-4">
              <ul className="list-disc pl-6 space-y-3">
                <li><BodyText className="text-base leading-relaxed">Weekly technical assessments with documented scoring</BodyText></li>
                <li><BodyText className="text-base leading-relaxed">Monthly comprehensive reviews with elimination consideration</BodyText></li>
                <li><BodyText className="text-base leading-relaxed">Peer evaluation components with individual accountability</BodyText></li>
                <li><BodyText className="text-base leading-relaxed">Project deliverable assessment against industry standards</BodyText></li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <H3 className="font-mono text-2xl">ELIMINATION TRIGGERS</H3>
            <div className="pl-8 space-y-4">
              <div className="bg-warning/5 border-l-[3px] border-warning p-6 space-y-3">
                <ul className="list-disc pl-6 space-y-3 font-mono text-sm">
                  <li><BodyText className="font-mono">Performance below minimum threshold for two consecutive evaluations</BodyText></li>
                  <li><BodyText className="font-mono">Attendance violations or failure to meet time commitments</BodyText></li>
                  <li><BodyText className="font-mono">Inability to collaborate effectively in team environments</BodyText></li>
                  <li><BodyText className="font-mono">Failure to complete required projects within specified timelines</BodyText></li>
                  <li><BodyText className="font-mono">Violation of professional conduct standards</BodyText></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <H3 className="font-mono text-2xl">ELIMINATION PROCESS</H3>
            <div className="pl-8 space-y-4">
              <BodyText className="text-base leading-relaxed">
                Elimination decisions are made by instructional committee review. Participants 
                receive written notification with specific performance deficiencies. No appeals 
                process is available. Eliminated participants forfeit all program benefits and 
                are not eligible for re-admission.
              </BodyText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
