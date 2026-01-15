/**
 * Supply Specification Section
 * 
 * Defines what HI Labs supplies and doesn't supply
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

export const SupplySpecificationSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2>Supply Specification</H2>
      
      <div className="space-y-6">
        <BodyText>
          HI Labs supplies systematically developed junior engineers with documented 
          competencies and supervised deployment protocols. Supply specifications 
          define exactly what is provided and what remains outside the supply scope.
        </BodyText>
        
        <div className="space-y-12">
          {/* Supply Components */}
          <div className="space-y-4">
            <H3 className="font-mono">SUPPLY COMPONENTS</H3>
            <div className="pl-6 space-y-4">
              <BodyText>
                HI Labs supplies junior engineers with systematically developed 
                competencies, documented performance evidence, and structured 
                deployment support within defined supervision frameworks.
              </BodyText>
              
              <div className="space-y-3">
                <BodyText><strong>Supplied Components:</strong></BodyText>
                <ul className="list-disc pl-6 space-y-2">
                  <li><BodyText>Junior engineers with 12-month systematic competency development</BodyText></li>
                  <li><BodyText>Documented technical competency profiles with assessment evidence</BodyText></li>
                  <li><BodyText>Project portfolio demonstrating practical application capabilities</BodyText></li>
                  <li><BodyText>Supervised deployment protocols with performance tracking</BodyText></li>
                  <li><BodyText>Ongoing supervision support during initial deployment phases</BodyText></li>
                  <li><BodyText>Performance feedback mechanisms and adjustment protocols</BodyText></li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                <BodyText className="font-mono text-sm">
                  SUPPLY STANDARD: All supplied engineers complete systematic evaluation 
                  and elimination processes ensuring consistent competency baselines 
                  and deployment readiness verification.
                </BodyText>
              </div>
            </div>
          </div>

          {/* Supply Exclusions */}
          <div className="space-y-4">
            <H3 className="font-mono">SUPPLY EXCLUSIONS</H3>
            <div className="pl-6 space-y-4">
              <div className="bg-warning/10 border-l-4 border-warning p-4 space-y-3">
                <BodyText className="font-mono text-sm">
                  HI Labs explicitly does not supply senior engineers, specialized 
                  domain experts, management personnel, or guaranteed performance 
                  outcomes beyond documented competency baselines.
                </BodyText>
              </div>
              
              <div className="space-y-3">
                <BodyText><strong>Excluded Components:</strong></BodyText>
                <ul className="list-disc pl-6 space-y-2">
                  <li><BodyText>Senior engineering personnel or technical leadership roles</BodyText></li>
                  <li><BodyText>Specialized domain expertise beyond general engineering competencies</BodyText></li>
                  <li><BodyText>Management, product, or business development personnel</BodyText></li>
                  <li><BodyText>Guaranteed performance outcomes or productivity commitments</BodyText></li>
                  <li><BodyText>Long-term retention guarantees or employment stability assurances</BodyText></li>
                  <li><BodyText>Cultural fit assessment or organizational integration services</BodyText></li>
                  <li><BodyText>Salary negotiation, benefits administration, or HR services</BodyText></li>
                </ul>
              </div>
              
              <BodyText>
                Organizations requiring senior expertise, specialized domains, or 
                guaranteed outcomes must source these capabilities through alternative 
                channels. HI Labs focuses exclusively on systematic junior engineer 
                production with documented competency development.
              </BodyText>
            </div>
          </div>

          {/* Supply Constraints */}
          <div className="space-y-4">
            <H3 className="font-mono">SUPPLY CONSTRAINTS</H3>
            <div className="pl-6 space-y-4">
              <BodyText>
                Supply availability operates within systematic production constraints 
                including cohort timing, elimination rates, and deployment capacity 
                limitations that affect organizational planning requirements.
              </BodyText>
              
              <div className="space-y-3">
                <BodyText><strong>Operational Constraints:</strong></BodyText>
                <ul className="list-disc pl-6 space-y-2">
                  <li><BodyText>Cohort-based production with fixed intake and completion schedules</BodyText></li>
                  <li><BodyText>Elimination processes reducing supply volume from initial intake</BodyText></li>
                  <li><BodyText>Geographic concentration in Lucknow with limited remote deployment</BodyText></li>
                  <li><BodyText>Supervision capacity limitations affecting simultaneous deployment volume</BodyText></li>
                  <li><BodyText>Competency development timelines requiring 12-month minimum production cycles</BodyText></li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                <BodyText className="font-mono text-sm">
                  PLANNING REQUIREMENT: Organizations must align talent requirements 
                  with HI Labs production schedules and capacity constraints for 
                  effective pipeline integration.
                </BodyText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
