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
      <div className="text-center">
        <H2 className="text-4xl font-bold text-primary mb-3">Program Specification</H2>
        <BodyText className="text-xl text-secondary max-w-4xl mx-auto">
          The HI Labs Flagship Program is a 12-month engineering talent production system 
          operating under enforced evaluation and supervised deployment protocols.
        </BodyText>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Program Overview Card */}
        <div className="bg-white border-2 border-accent p-6">
          <H3 className="text-2xl font-bold text-primary mb-4">Program Structure</H3>
          <BodyText className="text-base leading-relaxed text-primary mb-4">
            This specification defines program structure, constraints, and elimination criteria. 
            Candidates must commit to full-time, in-person participation for the complete 
            12-month duration. The program operates as a selection and elimination system, 
            not a traditional educational service.
          </BodyText>
          <div className="pt-3 border-t border-accent/20">
            <BodyText className="text-accent font-semibold">Selection & Elimination System</BodyText>
          </div>
        </div>
        
        {/* Exclusions Card */}
        <div className="bg-warning/5 border-2 border-warning p-6">
          <H3 className="text-warning font-bold text-2xl mb-4">EXPLICIT EXCLUSIONS</H3>
          <div className="space-y-2">
            <BodyText className="text-primary flex items-center">
              <span className="text-warning mr-3 text-lg font-bold">×</span>
              NOT available online or in hybrid format
            </BodyText>
            <BodyText className="text-primary flex items-center">
              <span className="text-warning mr-3 text-lg font-bold">×</span>
              NOT compatible with parallel employment
            </BodyText>
            <BodyText className="text-primary flex items-center">
              <span className="text-warning mr-3 text-lg font-bold">×</span>
              NOT certificate-driven or credential-focused
            </BodyText>
            <BodyText className="text-primary flex items-center">
              <span className="text-warning mr-3 text-lg font-bold">×</span>
              NO placement guarantees or outcome promises
            </BodyText>
            <BodyText className="text-primary flex items-center">
              <span className="text-warning mr-3 text-lg font-bold">×</span>
              NO refunds after program commencement
            </BodyText>
          </div>
          <div className="pt-3 border-t border-warning/30 mt-4">
            <BodyText className="text-warning font-semibold">Strict Constraints Apply</BodyText>
          </div>
        </div>
      </div>
    </section>
  );
};
