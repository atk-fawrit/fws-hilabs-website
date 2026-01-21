/**
 * Schedule CTA Section
 * 
 * Displays program schedule information and registration CTA
 */

import React from 'react';
import { H2 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { CTAButton, InteractiveCard } from '@/src/shared/components/content';

export const ScheduleCTASection: React.FC = () => {
  return (
    <section className="space-y-4">
      <H2 className="text-2xl font-bold text-primary mb-4">Program Schedule and Registration</H2>
      
      <div className="space-y-4">
        <BodyText className="text-primary leading-relaxed">
          Short Program schedules are published quarterly with specific start dates, duration, and capacity information. 
          Registration operates on a first-come, first-served basis with prerequisite verification.
        </BodyText>
        
        {/* Registration Process - Using InteractiveCard */}
        <InteractiveCard
          title="Registration Process"
          colorTheme="primary"
          items={[
            "Review current schedule and programs",
            "Verify prerequisite requirements",
            "Submit registration with documentation",
            "Complete payment within 48 hours"
          ]}
        />

        <BodyText className="text-primary leading-relaxed">
          <strong>Important:</strong> Programs have maximum enrollment to ensure effective instruction. 
          Registration closes when capacity is reached, regardless of scheduled start date. Program schedules 
          and availability are updated monthly.
        </BodyText>
        
        <div className="pt-2">
          <CTAButton variant="primary" href="/schedule" external>
            View Current Schedule
          </CTAButton>
        </div>
      </div>
    </section>
  );
};