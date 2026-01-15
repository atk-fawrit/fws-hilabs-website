/**
 * Deployment Discussion Section
 * 
 * CTA for deployment discussion access
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { CTAButton } from '@/src/shared/components/content';

export const DeploymentDiscussionSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2>Deployment Discussion Access</H2>
      
      <div className="space-y-6">
        <BodyText>
          Organizations interested in evaluating HI Labs as a talent pipeline 
          component can access detailed deployment discussion including partnership 
          assessment, model selection, and engagement protocol initiation.
        </BodyText>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <H3 className="font-mono">DEPLOYMENT FRAMEWORK ACCESS</H3>
            <div className="pl-6 space-y-4">
              <BodyText>
                Deployment discussion provides comprehensive access to partnership 
                evaluation frameworks, deployment model specifications, and 
                engagement protocol documentation for informed decision-making.
              </BodyText>
              
              <div className="space-y-3">
                <BodyText><strong>Discussion Components:</strong></BodyText>
                <ul className="list-disc pl-6 space-y-2">
                  <li><BodyText>Organizational readiness assessment and deployment model recommendation</BodyText></li>
                  <li><BodyText>Detailed supervision protocol review and partnership requirement clarification</BodyText></li>
                  <li><BodyText>Risk allocation discussion and accountability boundary establishment</BodyText></li>
                  <li><BodyText>Performance evaluation framework explanation and feedback mechanism design</BodyText></li>
                  <li><BodyText>Engagement timeline planning and capacity allocation discussion</BodyText></li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                <BodyText className="font-mono text-sm">
                  ACCESS REQUIREMENT: Deployment discussion is restricted to 
                  organizations with documented talent acquisition requirements 
                  and technical leadership capacity for partnership evaluation.
                </BodyText>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <H3 className="font-mono">PARTNERSHIP QUALIFICATION</H3>
            <div className="pl-6 space-y-4">
              <BodyText>
                Partnership qualification ensures deployment discussion efficiency 
                by focusing on organizations with appropriate technical environments, 
                supervision capacity, and partnership commitment capability.
              </BodyText>
              
              <div className="space-y-3">
                <BodyText><strong>Qualification Criteria:</strong></BodyText>
                <ul className="list-disc pl-6 space-y-2">
                  <li><BodyText>Established technical development environment suitable for junior engineer integration</BodyText></li>
                  <li><BodyText>Technical leadership with capacity for supervision protocol collaboration</BodyText></li>
                  <li><BodyText>Organizational commitment to systematic talent development and performance tracking</BodyText></li>
                  <li><BodyText>Documented talent acquisition requirements with specific competency needs</BodyText></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-4">
          <CTAButton variant="primary" href="/employers/deployment-discussion">
            Initiate Deployment Discussion
          </CTAButton>
        </div>
        
        <BodyText className="text-sm text-secondary">
          Deployment discussion access is provided to qualified organizations 
          following initial assessment and partnership qualification verification. 
          Discussion includes comprehensive partnership evaluation and engagement protocol design.
        </BodyText>
      </div>
    </section>
  );
};
