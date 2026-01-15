/**
 * Program Boundaries Section
 * 
 * Displays the clear separation between short programs and flagship program
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { InfoBox } from '@/src/shared/components/content';

export const ProgramBoundariesSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2>Program Boundaries</H2>
      
      <div className="space-y-6">
        <InfoBox
          variant="warning"
          title="CLEAR SEPARATION"
          description="Short Programs are completely separate from the HI Labs Flagship Program. These are weekend and time-bound skill-focused modules that do not provide pathway to the 12-month engineering production system."
        />
        
        <BodyText>
          Short Programs operate as standalone educational modules designed for working 
          professionals and students seeking specific skill development. They do not 
          constitute preparation for, qualification for, or guarantee admission to the 
          Flagship Program.
        </BodyText>
        
        <div className="space-y-4">
          <H3 className="font-mono">PROGRAM PURPOSE</H3>
          <div className="pl-6 space-y-4">
            <BodyText>
              Short Programs serve professionals who require targeted skill development 
              without the commitment of full-time, long-term training. These modules 
              address specific technical competencies through concentrated instruction 
              and practical application.
            </BodyText>
            
            <ul className="list-disc pl-6 space-y-2">
              <li><BodyText>Skill-specific training for working professionals</BodyText></li>
              <li><BodyText>Weekend and evening format to accommodate employment</BodyText></li>
              <li><BodyText>Practical application focus with measurable outcomes</BodyText></li>
              <li><BodyText>Industry-relevant competencies without comprehensive career transition</BodyText></li>
            </ul>
          </div>
        </div>
        
        <BodyText>
          Participants should not expect career transformation, placement assistance, 
          or comprehensive engineering education. Short Programs provide focused skill 
          development within clearly defined boundaries.
        </BodyText>
      </div>
    </section>
  );
};
