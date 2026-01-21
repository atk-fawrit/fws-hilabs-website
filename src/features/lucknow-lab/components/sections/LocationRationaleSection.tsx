/**
 * Location Rationale Section
 * 
 * Explains why Lucknow was selected as the facility location
 */

import React from 'react';
import { H2, H3, BodyText } from '@/src/shared/components/typography';
import { InfoBox } from '@/src/shared/components/content';

export const LocationRationaleSection: React.FC = () => {
  return (
    <section className="space-y-6">
      <H2 className="text-3xl font-light text-primary mb-4">Location Rationale</H2>
      
      <div className="space-y-4">
        <InfoBox
          variant="accent"
          title="FACILITY SPECIFICATION"
          description="This document establishes the operational rationale, catchment area definition, and operating constraints for the HI Labs Lucknow facility as a systematic engineering talent production location."
        />
        
        <BodyText className="text-primary/80 leading-relaxed">
          The Lucknow location operates as the primary HI Labs facility based on 
          systematic analysis of engineering talent availability, infrastructure 
          requirements, operational cost optimization, and regulatory compliance 
          factors that support systematic competency development protocols.
        </BodyText>
        
        <div className="space-y-4">
          <H3 className="text-xl font-light text-primary">Location Selection Criteria</H3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-accent/5 border-l-4 border-accent p-4">
              <BodyText className="font-medium text-primary mb-2 text-sm">01. Engineering Talent Availability</BodyText>
              <BodyText className="text-xs text-primary/80 leading-relaxed">
                Lucknow provides access to systematic engineering talent pipeline 
                through established educational institutions, technical colleges, 
                and engineering programs that supply candidates for competency 
                development protocols.
              </BodyText>
            </div>
            
            <div className="bg-accent/5 border-l-4 border-accent p-4">
              <BodyText className="font-medium text-primary mb-2 text-sm">02. Infrastructure and Connectivity</BodyText>
              <BodyText className="text-xs text-primary/80 leading-relaxed">
                Location provides systematic infrastructure including reliable 
                power supply, high-speed internet connectivity, transportation 
                access, and facility development capability supporting operational 
                requirements.
              </BodyText>
            </div>
            
            <div className="bg-accent/5 border-l-4 border-accent p-4">
              <BodyText className="font-medium text-primary mb-2 text-sm">03. Operational Cost Optimization</BodyText>
              <BodyText className="text-xs text-primary/80 leading-relaxed">
                Lucknow enables systematic cost optimization through facility 
                rental rates, operational expenses, and resource availability 
                that support sustainable institutional operations without 
                compromising quality standards.
              </BodyText>
            </div>
            
            <div className="bg-accent/5 border-l-4 border-accent p-4">
              <BodyText className="font-medium text-primary mb-2 text-sm">04. Regulatory and Compliance Environment</BodyText>
              <BodyText className="text-xs text-primary/80 leading-relaxed">
                Location provides systematic regulatory compliance environment 
                with established educational regulations, business operation 
                frameworks, and institutional development support that facilitate 
                systematic operations.
              </BodyText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
