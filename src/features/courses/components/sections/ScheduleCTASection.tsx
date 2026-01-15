/**
 * Schedule CTA Section
 * 
 * Displays program schedule information and registration CTA
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { CTAButton } from '@/src/shared/components/content';

export const ScheduleCTASection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2>Program Schedule and Registration</H2>
      
      <div className="space-y-6">
        <BodyText>
          Short Program schedules are published quarterly with specific start dates, 
          duration, and capacity information. Registration operates on a first-come, 
          first-served basis with prerequisite verification.
        </BodyText>
        
        <div className="space-y-4">
          <H3 className="font-mono">REGISTRATION PROCESS</H3>
          <div className="pl-6 space-y-4">
            <ul className="list-disc pl-6 space-y-2">
              <li><BodyText>Review current schedule and program descriptions</BodyText></li>
              <li><BodyText>Verify prerequisite requirements for selected program</BodyText></li>
              <li><BodyText>Submit registration with required documentation</BodyText></li>
              <li><BodyText>Complete payment within 48 hours of registration confirmation</BodyText></li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-50 border-l-4 border-secondary p-4 space-y-3">
          <BodyText className="font-mono text-sm">
            CAPACITY LIMITS: Programs have maximum enrollment to ensure effective 
            instruction. Registration closes when capacity is reached, regardless 
            of scheduled start date.
          </BodyText>
        </div>
        
        <div className="pt-4">
          <CTAButton variant="primary" href="/schedule" external>
            View Current Schedule
          </CTAButton>
        </div>
        
        <BodyText className="text-sm text-secondary">
          Program schedules and availability are updated monthly. Registration 
          confirmation includes detailed program information, location details, 
          and preparation requirements.
        </BodyText>
      </div>
    </section>
  );
};
