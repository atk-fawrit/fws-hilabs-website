/**
 * Program Specification Section
 * 
 * Defines the flagship program and its explicit exclusions
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

export const ProgramSpecificationSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2 className="text-3xl font-light">Program Specification</H2>
      
      <div className="space-y-6">
        <BodyText className="text-base leading-relaxed">
          The HI Labs Flagship Program is a 12-month engineering talent production system 
          operating under enforced evaluation and supervised deployment protocols. This 
          specification defines program structure, constraints, and elimination criteria.
        </BodyText>
        
        <div className="bg-warning/5 border-l-[3px] border-warning p-8 space-y-4">
          <H3 className="text-warning font-mono text-xl">EXPLICIT EXCLUSIONS</H3>
          <div className="space-y-3 font-mono text-sm">
            <BodyText className="font-mono">• NOT available online or in hybrid format</BodyText>
            <BodyText className="font-mono">• NOT compatible with parallel employment</BodyText>
            <BodyText className="font-mono">• NOT certificate-driven or credential-focused</BodyText>
            <BodyText className="font-mono">• NO placement guarantees or outcome promises</BodyText>
            <BodyText className="font-mono">• NO refunds after program commencement</BodyText>
          </div>
        </div>
        
        <BodyText className="text-base leading-relaxed">
          Candidates must commit to full-time, in-person participation for the complete 
          12-month duration. The program operates as a selection and elimination system, 
          not a traditional educational service.
        </BodyText>
      </div>
    </section>
  );
};
