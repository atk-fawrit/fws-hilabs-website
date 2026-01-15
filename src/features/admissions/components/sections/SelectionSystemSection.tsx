/**
 * Selection System Section
 * 
 * Displays the admissions philosophy and selection criteria
 */

import React from 'react';
import { H2 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { InfoBox } from '@/src/shared/components/content';

export const SelectionSystemSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2>Selection System</H2>
      
      <div className="space-y-6">
        <BodyText>
          HI Labs admissions operates as a selection system, not a sales funnel. The process 
          identifies candidates capable of completing the 12-month engineering production 
          system under enforced evaluation and supervised deployment protocols.
        </BodyText>
        
        <InfoBox
          variant="neutral"
          title="SELECTION CRITERIA"
          description="This is a filtering mechanism designed to identify serious candidates who understand the commitment and constraints of the program. We select for aptitude, commitment, and alignment with institutional expectations."
        />
        
        <BodyText>
          The admissions process evaluates technical aptitude, commitment capacity, and 
          understanding of program constraints. Candidates must demonstrate readiness 
          for full-time, in-person participation and acceptance of elimination-based evaluation.
        </BodyText>
      </div>
    </section>
  );
};
