/**
 * Evaluation System Section
 * 
 * Displays evaluation protocols, elimination triggers, and process
 */

import React from 'react';
import { BodyText } from '@/src/shared/components/typography';
import { InteractiveCard, SectionHeader } from '@/src/shared/components/content';

export const EvaluationSystemSection: React.FC = () => {
  return (
    <div className="space-y-3">
      <SectionHeader 
        title="Evaluation and Elimination System"
        subtitle="Continuous evaluation with documented elimination criteria"
      />
      
      <div className="bg-secondary/5 p-3 border-l-[4px] border-secondary">
        <BodyText className="text-base leading-relaxed text-primary">
          The program operates continuous evaluation with documented elimination criteria. 
          All participants are subject to performance-based elimination at any stage.
        </BodyText>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Evaluation Protocols Card */}
        <InteractiveCard
          title="EVALUATION PROTOCOLS"
          colorTheme="primary"
          icon={
            <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
          }
          items={[
            "Weekly technical assessments with documented scoring",
            "Monthly comprehensive reviews with elimination consideration", 
            "Peer evaluation components with individual accountability",
            "Project deliverable assessment against industry standards"
          ]}
        />
        
        {/* Elimination Triggers Card */}
        <InteractiveCard
          title="ELIMINATION TRIGGERS"
          colorTheme="warning"
          items={[
            "Performance below minimum threshold for two consecutive evaluations",
            "Attendance violations or failure to meet time commitments",
            "Inability to collaborate effectively in team environments",
            "Failure to complete required projects within specified timelines",
            "Violation of professional conduct standards"
          ]}
        />
        
        {/* Elimination Process Card */}
        <InteractiveCard
          title="ELIMINATION PROCESS"
          colorTheme="primary"
          icon={
            <span className="bg-secondary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
          }
          description="Elimination decisions are made by instructional committee review. Participants receive written notification with specific performance deficiencies. No appeals process is available. Eliminated participants forfeit all program benefits and are not eligible for re-admission."
        />
      </div>
    </div>
  );
};
