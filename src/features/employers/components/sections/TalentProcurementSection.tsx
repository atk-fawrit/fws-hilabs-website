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
    <section className="mb-20 max-w-4xl">
      <H2 className="text-3xl font-light text-primary mb-8">Talent Procurement Specification</H2>
      
      <div className="space-y-6 text-primary/80 leading-relaxed mb-12">
        <BodyText>
          HI Labs operates as a talent production facility, not a recruitment agency or placement service. 
          Organizations engage with HI Labs to access systematically developed engineering talent through 
          structured deployment models with defined supervision and risk allocation frameworks.
        </BodyText>
        
        <BodyText>
          This procurement specification replaces traditional hiring pitches with systematic documentation 
          of supply capabilities, deployment constraints, and partnership requirements. Organizations use 
          this specification to evaluate HI Labs as a talent pipeline component within broader workforce 
          development strategies.
        </BodyText>
      </div>

      {/* Procurement Document */}
      <div className="bg-accent/5 border-l-4 border-accent p-8 max-w-4xl">
        <H3 className="text-sm uppercase tracking-wide text-accent mb-6 font-medium">
          Procurement Document
        </H3>
        <BodyText className="text-primary/80 leading-relaxed">
          This document specifies HI Labs&apos; talent supply capabilities, deployment models, and partnership 
          protocols for organizations evaluating engineering talent procurement through systematic production 
          rather than traditional recruitment channels.
        </BodyText>
      </div>
    </section>
  );
};
