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
    <section className="space-y-8">
      <H2>Catchment Area and Intake Logic</H2>
      
      <div className="space-y-6">
        <BodyText>
          The Lucknow Lab operates with systematic catchment area definition 
          and intake logic that governs candidate sourcing, selection protocols, 
          and enrollment management to ensure effective competency development 
          and operational efficiency.
        </BodyText>
        
        <div className="space-y-12">
          <div className="space-y-4">
            <H3 className="font-mono">CATCHMENT AREA SPECIFICATION</H3>
            <div className="pl-6 space-y-8">
              <div className="space-y-4">
                <BodyText><strong>Primary Catchment Area</strong></BodyText>
                <div className="pl-4 space-y-3">
                  <BodyText>
                    Uttar Pradesh state with emphasis on Lucknow metropolitan area, 
                    Kanpur, Allahabad, Varanasi, and surrounding districts that 
                    provide systematic access to engineering talent pipeline and 
                    transportation connectivity to the facility.
                  </BodyText>
                  <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                    <BodyText className="font-mono text-sm">
                      PRIMARY FOCUS: 80% of intake capacity allocated to primary 
                      catchment area candidates with established transportation 
                      and accommodation logistics.
                    </BodyText>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <BodyText><strong>Secondary Catchment Area</strong></BodyText>
                <div className="pl-4 space-y-3">
                  <BodyText>
                    Adjacent states including Madhya Pradesh, Bihar, Jharkhand, 
                    and Delhi NCR region that provide additional engineering talent 
                    access with reasonable transportation connectivity and 
                    accommodation feasibility for systematic operations.
                  </BodyText>
                  <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                    <BodyText className="font-mono text-sm">
                      SECONDARY ALLOCATION: 20% of intake capacity allocated to 
                      secondary catchment area candidates with demonstrated 
                      commitment and logistics capability.
                    </BodyText>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <H3 className="font-mono">INTAKE LOGIC FRAMEWORK</H3>
            <div className="pl-6 space-y-8">
              <div className="space-y-4">
                <BodyText><strong>01. Geographic Distribution Protocol</strong></BodyText>
                <div className="pl-4 space-y-3">
                  <BodyText>
                    Intake operates through systematic geographic distribution 
                    with primary/secondary catchment allocation, transportation 
                    feasibility assessment, and accommodation logistics verification 
                    ensuring operational sustainability.
                  </BodyText>
                </div>
              </div>
              
              <div className="space-y-4">
                <BodyText><strong>02. Capacity Management System</strong></BodyText>
                <div className="pl-4 space-y-3">
                  <BodyText>
                    Systematic capacity management operates through cohort size 
                    optimization, facility utilization efficiency, and resource 
                    allocation protocols that maintain quality standards while 
                    maximizing operational effectiveness.
                  </BodyText>
                </div>
              </div>
              
              <div className="space-y-4">
                <BodyText><strong>03. Selection Priority Framework</strong></BodyText>
                <div className="pl-4 space-y-3">
                  <BodyText>
                    Selection priority operates through systematic criteria including 
                    competency assessment results, geographic distribution requirements, 
                    commitment verification, and logistics feasibility that ensure 
                    optimal cohort composition.
                  </BodyText>
                </div>
              </div>
              
              <div className="space-y-4">
                <BodyText><strong>04. Logistics and Accommodation Integration</strong></BodyText>
                <div className="pl-4 space-y-3">
                  <BodyText>
                    Intake logic integrates systematic logistics assessment including 
                    transportation accessibility, accommodation arrangements, and 
                    daily commute feasibility that support consistent attendance 
                    and program completion.
                  </BodyText>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-warning/10 border-l-4 border-warning p-6 space-y-4">
          <H3 className="text-warning font-mono">INTAKE CONSTRAINTS</H3>
          <BodyText className="font-mono text-sm">
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
