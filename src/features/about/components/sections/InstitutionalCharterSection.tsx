/**
 * Institutional Charter Section
 * 
 * Introduction to the institutional charter and HI Labs identity
 */

import React from 'react';
import { H2 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { InfoBox } from '@/src/shared/components/content';

export const InstitutionalCharterSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2>Institutional Charter</H2>
      
      <div className="space-y-6">
        <InfoBox
          variant="accent"
          title="INSTITUTIONAL DOCUMENT"
          description="This document establishes the institutional identity, operating principles, and governance framework of Human Intelligence Laboratories Private Limited as a systematic engineering talent production facility."
        />
        
        <BodyText>
          HI Labs operates as an institutional engineering talent production 
          system rather than a traditional educational institution or training 
          provider. The organization functions through systematic competency 
          development, enforced evaluation protocols, and supervised deployment 
          mechanisms designed to produce deployable junior engineers.
        </BodyText>
        
        <BodyText>
          This institutional charter replaces conventional mission statements 
          and organizational narratives with systematic documentation of operating 
          principles, accountability structures, and governance mechanisms that 
          define institutional identity and operational boundaries.
        </BodyText>
      </div>
    </section>
  );
};
