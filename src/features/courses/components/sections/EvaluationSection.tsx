/**
 * Evaluation and Recognition Section
 * 
 * Displays evaluation methodology and recognition framework
 */

import React from 'react';
import { H2 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { InteractiveCard } from '@/src/shared/components/content';

export const EvaluationSection: React.FC = () => {
  return (
    <section className="space-y-4">
      <H2 className="text-2xl font-bold text-primary mb-4">Evaluation and Recognition Approach</H2>
      
      <div className="space-y-4">
        <BodyText className="text-primary leading-relaxed">
          Short Programs employ practical evaluation focused on skill demonstration and application competency. 
          Assessment measures ability to apply learned concepts in realistic scenarios rather than theoretical knowledge retention.
        </BodyText>
        
        {/* Evaluation Components - Using InteractiveCard */}
        <InteractiveCard
          title="Evaluation Components"
          colorTheme="primary"
          items={[
            "Weekly practical assignments",
            "Mid-program projects",
            "Final capstone projects", 
            "Peer collaboration assessment"
          ]}
        />

        <BodyText className="text-primary leading-relaxed">
          <strong>Completion Requirements:</strong> 80% attendance minimum, successful completion of all 
          assignments, passing grade on capstone project, and demonstration of practical skill application. 
          Certificates indicate specific competencies achieved and include project portfolio references. 
          Recognition does not constitute professional certification or guarantee employment qualification.
        </BodyText>
      </div>
    </section>
  );
};