/**
 * Eligibility Requirements Section
 * 
 * Displays eligibility criteria and non-eligibility conditions
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

export const EligibilityRequirementsSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2>Eligibility Requirements</H2>
      
      <div className="space-y-8">
        <div className="space-y-4">
          <H3 className="font-mono">ELIGIBILITY CRITERIA</H3>
          <div className="pl-6 space-y-4">
            <ul className="list-disc pl-6 space-y-3">
              <li><BodyText>Age 18-28 at program commencement</BodyText></li>
              <li><BodyText>Bachelor's degree in any discipline or equivalent demonstrated competency</BodyText></li>
              <li><BodyText>Basic programming exposure (any language, any level)</BodyText></li>
              <li><BodyText>English proficiency sufficient for technical communication</BodyText></li>
              <li><BodyText>Ability to commit full-time for 12 consecutive months</BodyText></li>
              <li><BodyText>Physical presence in Lucknow for program duration</BodyText></li>
              <li><BodyText>Financial capacity to support living expenses during program</BodyText></li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-4">
          <H3 className="font-mono">NON-ELIGIBILITY CONDITIONS</H3>
          <div className="pl-6 space-y-4">
            <div className="bg-warning/10 border-l-4 border-warning p-4 space-y-3">
              <ul className="list-disc pl-6 space-y-2 font-mono text-sm">
                <li><BodyText className="font-mono">Current employment obligations that cannot be terminated</BodyText></li>
                <li><BodyText className="font-mono">Family or personal commitments requiring regular absence</BodyText></li>
                <li><BodyText className="font-mono">Expectation of placement guarantees or outcome promises</BodyText></li>
                <li><BodyText className="font-mono">Inability to relocate to Lucknow for program duration</BodyText></li>
                <li><BodyText className="font-mono">Seeking certification or credential-focused training</BodyText></li>
                <li><BodyText className="font-mono">Preference for online, hybrid, or part-time formats</BodyText></li>
                <li><BodyText className="font-mono">Unwillingness to accept elimination-based evaluation</BodyText></li>
              </ul>
            </div>
          </div>
        </div>
        
        <BodyText>
          Candidates with non-eligibility conditions will not be considered for admission. 
          The program requires complete commitment and alignment with institutional protocols.
        </BodyText>
      </div>
    </section>
  );
};
