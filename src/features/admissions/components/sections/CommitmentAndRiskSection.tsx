/**
 * Commitment and Risk Disclosure Section
 * 
 * Displays commitment requirements and risk acknowledgment
 */

import React from 'react';
import { H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { SectionHeader } from '@/src/shared/components/content';

export const CommitmentAndRiskSection: React.FC = () => {
  return (
    <section className="space-y-6">
      <SectionHeader 
        title="Commitment and Risk Disclosure"
      />
      
      <div className="space-y-4">
        <BodyText className="text-lg leading-relaxed text-primary">
          Admission to HI Labs requires understanding and acceptance of significant 
          commitments and risks. Candidates must acknowledge these conditions before 
          program commencement.
        </BodyText>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Commitment Requirements Card */}
          <div className="bg-accent/5 border-2 border-accent p-6">
            <H3 className="text-accent font-bold text-2xl mb-4">COMMITMENT REQUIREMENTS</H3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <BodyText className="text-base">Full-time participation for 12 consecutive months</BodyText>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <BodyText className="text-base">Daily attendance 0800-1800 hours, Monday through Friday</BodyText>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <BodyText className="text-base">Relocation to Lucknow for program duration</BodyText>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <BodyText className="text-base">Termination of conflicting employment or commitments</BodyText>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <BodyText className="text-base">Acceptance of elimination-based evaluation system</BodyText>
              </li>
              <li className="flex items-start">
                <span className="text-accent mr-3 mt-1">•</span>
                <BodyText className="text-base">Compliance with institutional protocols and standards</BodyText>
              </li>
            </ul>
          </div>
          
          {/* Risk Acknowledgment Card */}
          <div className="bg-warning/5 border-2 border-warning p-6">
            <H3 className="text-warning font-bold text-2xl mb-4">RISK ACKNOWLEDGMENT</H3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-warning mr-3 mt-1 font-bold">×</span>
                <BodyText className="text-base">No guarantee of program completion or employment outcomes</BodyText>
              </li>
              <li className="flex items-start">
                <span className="text-warning mr-3 mt-1 font-bold">×</span>
                <BodyText className="text-base">Elimination possible at any stage based on performance</BodyText>
              </li>
              <li className="flex items-start">
                <span className="text-warning mr-3 mt-1 font-bold">×</span>
                <BodyText className="text-base">No refunds after program commencement</BodyText>
              </li>
              <li className="flex items-start">
                <span className="text-warning mr-3 mt-1 font-bold">×</span>
                <BodyText className="text-base">Financial responsibility for living expenses during program</BodyText>
              </li>
              <li className="flex items-start">
                <span className="text-warning mr-3 mt-1 font-bold">×</span>
                <BodyText className="text-base">Career opportunity cost during 12-month commitment</BodyText>
              </li>
              <li className="flex items-start">
                <span className="text-warning mr-3 mt-1 font-bold">×</span>
                <BodyText className="text-base">No appeals process for elimination decisions</BodyText>
              </li>
            </ul>
          </div>
        </div>
        
        <BodyText className="text-lg leading-relaxed text-primary">
          Candidates who cannot accept these commitments and risks should not proceed 
          with the application process. The program is designed for individuals who 
          understand and embrace these constraints as necessary for effective talent production.
        </BodyText>
      </div>
    </section>
  );
};
