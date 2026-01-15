/**
 * Commitment and Risk Disclosure Section
 * 
 * Displays commitment requirements and risk acknowledgment
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

export const CommitmentAndRiskSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2>Commitment and Risk Disclosure</H2>
      
      <div className="space-y-6">
        <BodyText>
          Admission to HI Labs requires understanding and acceptance of significant 
          commitments and risks. Candidates must acknowledge these conditions before 
          program commencement.
        </BodyText>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <H3 className="font-mono">COMMITMENT REQUIREMENTS</H3>
            <div className="pl-6 space-y-4">
              <div className="bg-accent/10 border-l-4 border-accent p-4 space-y-3">
                <ul className="list-disc pl-6 space-y-2 font-mono text-sm">
                  <li><BodyText className="font-mono">Full-time participation for 12 consecutive months</BodyText></li>
                  <li><BodyText className="font-mono">Daily attendance 0800-1800 hours, Monday through Friday</BodyText></li>
                  <li><BodyText className="font-mono">Relocation to Lucknow for program duration</BodyText></li>
                  <li><BodyText className="font-mono">Termination of conflicting employment or commitments</BodyText></li>
                  <li><BodyText className="font-mono">Acceptance of elimination-based evaluation system</BodyText></li>
                  <li><BodyText className="font-mono">Compliance with institutional protocols and standards</BodyText></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <H3 className="font-mono">RISK ACKNOWLEDGMENT</H3>
            <div className="pl-6 space-y-4">
              <div className="bg-warning/10 border-l-4 border-warning p-4 space-y-3">
                <ul className="list-disc pl-6 space-y-2 font-mono text-sm">
                  <li><BodyText className="font-mono">No guarantee of program completion or employment outcomes</BodyText></li>
                  <li><BodyText className="font-mono">Elimination possible at any stage based on performance</BodyText></li>
                  <li><BodyText className="font-mono">No refunds after program commencement</BodyText></li>
                  <li><BodyText className="font-mono">Financial responsibility for living expenses during program</BodyText></li>
                  <li><BodyText className="font-mono">Career opportunity cost during 12-month commitment</BodyText></li>
                  <li><BodyText className="font-mono">No appeals process for elimination decisions</BodyText></li>
                </ul>
              </div>
            </div>
          </div>
          
          <BodyText>
            Candidates who cannot accept these commitments and risks should not proceed 
            with the application process. The program is designed for individuals who 
            understand and embrace these constraints as necessary for effective talent production.
          </BodyText>
        </div>
      </div>
    </section>
  );
};
