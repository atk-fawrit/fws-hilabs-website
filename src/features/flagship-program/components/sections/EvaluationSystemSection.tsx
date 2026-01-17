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
    <section className="space-y-8">
      <div className="text-center">
        <H2 className="text-4xl font-bold text-primary mb-3">Evaluation and Elimination System</H2>
        <p className="text-xl text-secondary">Continuous evaluation with documented elimination criteria</p>
      </div>
      
      <div className="bg-secondary/5 p-6 border-l-[4px] border-secondary">
        <BodyText className="text-lg leading-relaxed text-primary">
          The program operates continuous evaluation with documented elimination criteria. 
          All participants are subject to performance-based elimination at any stage.
        </BodyText>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Evaluation Protocols Card */}
        <div className="bg-white border border-secondary/20 p-5 shadow-sm">
          <H3 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
            EVALUATION PROTOCOLS
          </H3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-accent mr-2 mt-1 text-sm">•</span>
              <BodyText className="text-sm leading-relaxed text-primary">Weekly technical assessments with documented scoring</BodyText>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2 mt-1 text-sm">•</span>
              <BodyText className="text-sm leading-relaxed text-primary">Monthly comprehensive reviews with elimination consideration</BodyText>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2 mt-1 text-sm">•</span>
              <BodyText className="text-sm leading-relaxed text-primary">Peer evaluation components with individual accountability</BodyText>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2 mt-1 text-sm">•</span>
              <BodyText className="text-sm leading-relaxed text-primary">Project deliverable assessment against industry standards</BodyText>
            </li>
          </ul>
        </div>
        
        {/* Elimination Triggers Card */}
        <div className="bg-warning/5 border border-warning/30 p-5">
          <H3 className="text-xl font-bold text-warning mb-4 flex items-center">
            <span className="bg-warning text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">!</span>
            ELIMINATION TRIGGERS
          </H3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-warning mr-2 mt-1 text-sm">×</span>
              <BodyText className="text-sm leading-relaxed text-primary">Performance below minimum threshold for two consecutive evaluations</BodyText>
            </li>
            <li className="flex items-start">
              <span className="text-warning mr-2 mt-1 text-sm">×</span>
              <BodyText className="text-sm leading-relaxed text-primary">Attendance violations or failure to meet time commitments</BodyText>
            </li>
            <li className="flex items-start">
              <span className="text-warning mr-2 mt-1 text-sm">×</span>
              <BodyText className="text-sm leading-relaxed text-primary">Inability to collaborate effectively in team environments</BodyText>
            </li>
            <li className="flex items-start">
              <span className="text-warning mr-2 mt-1 text-sm">×</span>
              <BodyText className="text-sm leading-relaxed text-primary">Failure to complete required projects within specified timelines</BodyText>
            </li>
            <li className="flex items-start">
              <span className="text-warning mr-2 mt-1 text-sm">×</span>
              <BodyText className="text-sm leading-relaxed text-primary">Violation of professional conduct standards</BodyText>
            </li>
          </ul>
        </div>
        
        {/* Elimination Process Card */}
        <div className="bg-white border border-secondary/20 p-5 shadow-sm">
          <H3 className="text-xl font-bold text-primary mb-4 flex items-center">
            <span className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
            ELIMINATION PROCESS
          </H3>
          <BodyText className="text-sm leading-relaxed text-primary">
            Elimination decisions are made by instructional committee review. Participants 
            receive written notification with specific performance deficiencies. No appeals 
            process is available. Eliminated participants forfeit all program benefits and 
            are not eligible for re-admission.
          </BodyText>
        </div>
      </div>
    </section>
  );
};
