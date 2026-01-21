/**
 * Catchment Area Section
 * 
 * Defines catchment area and intake logic
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

export const CatchmentAreaSection: React.FC = () => {
  return (
    <section className="space-y-6">
      <H2 className="text-3xl font-light text-primary mb-4">Catchment Area and Intake Logic</H2>
      
      <div className="space-y-4">
        <BodyText className="text-primary/80 leading-relaxed">
          The Lucknow Lab operates with systematic catchment area definition 
          and intake logic that governs candidate sourcing, selection protocols, 
          and enrollment management to ensure effective competency development 
          and operational efficiency.
        </BodyText>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Catchment Area Specification */}
          <div className="space-y-4">
            <H3 className="text-lg font-medium text-primary">Catchment Area Specification</H3>
            <div className="space-y-3">
              <div className="bg-accent/5 border-l-4 border-accent p-4">
                <BodyText className="font-medium text-primary mb-2 text-sm">Primary Catchment Area</BodyText>
                <BodyText className="text-xs text-primary/80 leading-relaxed mb-2">
                  Uttar Pradesh state with emphasis on Lucknow metropolitan area, 
                  Kanpur, Allahabad, Varanasi, and surrounding districts that 
                  provide systematic access to engineering talent pipeline and 
                  transportation connectivity to the facility.
                </BodyText>
                <div className="bg-primary/5 p-2 border-l-2 border-primary">
                  <BodyText className="text-xs text-primary/70">
                    PRIMARY FOCUS: 80% of intake capacity allocated to primary 
                    catchment area candidates with established transportation 
                    and accommodation logistics.
                  </BodyText>
                </div>
              </div>
              
              <div className="bg-accent/5 border-l-4 border-accent p-4">
                <BodyText className="font-medium text-primary mb-2 text-sm">Secondary Catchment Area</BodyText>
                <BodyText className="text-xs text-primary/80 leading-relaxed mb-2">
                  Adjacent states including Madhya Pradesh, Bihar, Jharkhand, 
                  and Delhi NCR region that provide additional engineering talent 
                  access with reasonable transportation connectivity and 
                  accommodation feasibility for systematic operations.
                </BodyText>
                <div className="bg-primary/5 p-2 border-l-2 border-primary">
                  <BodyText className="text-xs text-primary/70">
                    SECONDARY ALLOCATION: 20% of intake capacity allocated to 
                    secondary catchment area candidates with demonstrated 
                    commitment and logistics capability.
                  </BodyText>
                </div>
              </div>
            </div>
          </div>

          {/* Intake Logic Framework */}
          <div className="space-y-4">
            <H3 className="text-lg font-medium text-primary">Intake Logic Framework</H3>
            <div className="space-y-3">
              <div className="bg-primary/5 border-l-4 border-primary p-4">
                <BodyText className="font-medium text-primary mb-2 text-sm">01. Geographic Distribution Protocol</BodyText>
                <BodyText className="text-xs text-primary/80 leading-relaxed">
                  Intake operates through systematic geographic distribution 
                  with primary/secondary catchment allocation, transportation 
                  feasibility assessment, and accommodation logistics verification 
                  ensuring operational sustainability.
                </BodyText>
              </div>
              
              <div className="bg-primary/5 border-l-4 border-primary p-4">
                <BodyText className="font-medium text-primary mb-2 text-sm">02. Capacity Management System</BodyText>
                <BodyText className="text-xs text-primary/80 leading-relaxed">
                  Systematic capacity management operates through cohort size 
                  optimization, facility utilization efficiency, and resource 
                  allocation protocols that maintain quality standards while 
                  maximizing operational effectiveness.
                </BodyText>
              </div>
              
              <div className="bg-primary/5 border-l-4 border-primary p-4">
                <BodyText className="font-medium text-primary mb-2 text-sm">03. Selection Priority Framework</BodyText>
                <BodyText className="text-xs text-primary/80 leading-relaxed">
                  Selection priority operates through systematic criteria including 
                  competency assessment results, geographic distribution requirements, 
                  commitment verification, and logistics feasibility that ensure 
                  optimal cohort composition.
                </BodyText>
              </div>
              
              <div className="bg-primary/5 border-l-4 border-primary p-4">
                <BodyText className="font-medium text-primary mb-2 text-sm">04. Logistics and Accommodation Integration</BodyText>
                <BodyText className="text-xs text-primary/80 leading-relaxed">
                  Intake logic integrates systematic logistics assessment including 
                  transportation accessibility, accommodation arrangements, and 
                  daily commute feasibility that support consistent attendance 
                  and program completion.
                </BodyText>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-warning/10 border-l-4 border-warning p-4">
          <H3 className="text-warning text-sm font-medium mb-2">INTAKE CONSTRAINTS</H3>
          <BodyText className="text-xs text-primary/80">
            Intake operates within systematic constraints including facility 
            capacity limits, instructor-to-candidate ratios, resource availability, 
            and operational efficiency requirements that prevent overextension 
            and maintain quality standards.
          </BodyText>
        </div>
      </div>
    </section>
  );
};
