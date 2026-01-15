/**
 * Location Rationale Section
 * 
 * Explains why Lucknow was selected as the facility location
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

export const LocationRationaleSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2>Location Rationale</H2>
      
      <div className="space-y-6">
        <div className="bg-accent/10 border-l-4 border-accent p-6 space-y-4">
          <H3 className="text-accent font-mono">FACILITY SPECIFICATION</H3>
          <BodyText className="font-mono text-sm">
            This document establishes the operational rationale, catchment area 
            definition, and operating constraints for the HI Labs Lucknow facility 
            as a systematic engineering talent production location.
          </BodyText>
        </div>
        
        <BodyText>
          The Lucknow location operates as the primary HI Labs facility based on 
          systematic analysis of engineering talent availability, infrastructure 
          requirements, operational cost optimization, and regulatory compliance 
          factors that support systematic competency development protocols.
        </BodyText>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <H3 className="font-mono">LOCATION SELECTION CRITERIA</H3>
            <div className="pl-6 space-y-4">
              <div className="space-y-3">
                <BodyText><strong>01. Engineering Talent Availability</strong></BodyText>
                <BodyText className="pl-4">
                  Lucknow provides access to systematic engineering talent pipeline 
                  through established educational institutions, technical colleges, 
                  and engineering programs that supply candidates for competency 
                  development protocols.
                </BodyText>
              </div>
              
              <div className="space-y-3">
                <BodyText><strong>02. Infrastructure and Connectivity</strong></BodyText>
                <BodyText className="pl-4">
                  Location provides systematic infrastructure including reliable 
                  power supply, high-speed internet connectivity, transportation 
                  access, and facility development capability supporting operational 
                  requirements.
                </BodyText>
              </div>
              
              <div className="space-y-3">
                <BodyText><strong>03. Operational Cost Optimization</strong></BodyText>
                <BodyText className="pl-4">
                  Lucknow enables systematic cost optimization through facility 
                  rental rates, operational expenses, and resource availability 
                  that support sustainable institutional operations without 
                  compromising quality standards.
                </BodyText>
              </div>
              
              <div className="space-y-3">
                <BodyText><strong>04. Regulatory and Compliance Environment</strong></BodyText>
                <BodyText className="pl-4">
                  Location provides systematic regulatory compliance environment 
                  with established educational regulations, business operation 
                  frameworks, and institutional development support that facilitate 
                  systematic operations.
                </BodyText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
