/**
 * Talent Procurement Section
 * 
 * Introduction to HI Labs as a talent production facility
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

export const TalentProcurementSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2>Talent Procurement Specification</H2>
      
      <div className="space-y-6">
        <div className="bg-accent/10 border-l-4 border-accent p-6 space-y-4">
          <H3 className="text-accent font-mono">PROCUREMENT DOCUMENT</H3>
          <BodyText className="font-mono text-sm">
            This document specifies HI Labs' talent supply capabilities, deployment 
            models, and partnership protocols for organizations evaluating engineering 
            talent procurement through systematic production rather than traditional 
            recruitment channels.
          </BodyText>
        </div>
        
        <BodyText>
          HI Labs operates as a talent production facility, not a recruitment agency 
          or placement service. Organizations engage with HI Labs to access systematically 
          developed engineering talent through structured deployment models with defined 
          supervision and risk allocation frameworks.
        </BodyText>
        
        <BodyText>
          This procurement specification replaces traditional hiring pitches with 
          systematic documentation of supply capabilities, deployment constraints, 
          and partnership requirements. Organizations use this specification to 
          evaluate HI Labs as a talent pipeline component within broader workforce 
          development strategies.
        </BodyText>
      </div>
    </section>
  );
};
