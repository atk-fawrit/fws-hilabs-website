/**
 * Operating Format Section
 * 
 * Displays operating format and program rules
 */

import React from 'react';
import { H2 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { InteractiveCard } from '@/src/shared/components/content';

export const OperatingFormatSection: React.FC = () => {
  return (
    <section className="space-y-4">
      <H2 className="text-2xl font-bold text-primary mb-4">Operating Format and Rules</H2>
      
      <div className="space-y-4">
        <BodyText className="text-primary leading-relaxed">
          Short Programs operate on weekend schedules to accommodate working professionals. 
          Sessions are conducted in-person at the Lucknow facility with structured timelines 
          and specific deliverable requirements.
        </BodyText>
        
        {/* Schedule Structure - Using InteractiveCard */}
        <InteractiveCard
          title="Schedule Structure"
          colorTheme="accent"
          items={[
            "Saturday & Sunday",
            "0900-1700 hours", 
            "4-8 weekends",
            "Max 20 participants"
          ]}
        />

        <BodyText className="text-primary leading-relaxed">
          <strong>Program Rules:</strong> No make-up sessions are provided for missed attendance. 
          Completion requires attendance at a minimum of 80% of sessions. No refunds are available 
          after program commencement. Professional conduct standards apply to all interactions 
          throughout the program.
        </BodyText>
      </div>
    </section>
  );
};