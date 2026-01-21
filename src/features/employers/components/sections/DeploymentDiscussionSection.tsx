/**
 * Deployment Discussion Section
 * 
 * CTA for deployment discussion access with clean paragraph layout
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { CTAButton } from '@/src/shared/components/content';

export const DeploymentDiscussionSection: React.FC = () => {
  return (
    <section className="border-t border-primary/20 pt-12">
      <div className="max-w-6xl">
        <H2 className="text-3xl font-light text-primary mb-6">Deployment Discussion Access</H2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content - takes 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <BodyText className="text-primary/80 leading-relaxed">
              Organizations interested in evaluating HI Labs as a talent pipeline component can access detailed deployment 
              discussion including partnership assessment, model selection, and engagement protocol initiation.
            </BodyText>

            <div>
              <H3 className="text-xl font-light text-primary mb-3">Deployment Framework Access</H3>
              <BodyText className="text-primary/80 leading-relaxed mb-4">
                Deployment discussion provides comprehensive access to partnership evaluation frameworks, deployment model 
                specifications, and engagement protocol documentation for informed decision-making. Discussion components 
                include organizational readiness assessment and deployment model recommendation, detailed supervision protocol 
                review and partnership requirement clarification, risk allocation discussion and accountability boundary 
                establishment, performance evaluation framework explanation and feedback mechanism design, and engagement 
                timeline planning and capacity allocation discussion.
              </BodyText>
              <BodyText className="text-sm text-primary/60 italic">
                Access restricted to organizations with documented talent acquisition requirements and technical leadership 
                capacity for partnership evaluation.
              </BodyText>
            </div>
          </div>

          {/* Sidebar content - takes 1 column */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <H3 className="text-xl font-light text-primary mb-3">Partnership Qualification</H3>
              <BodyText className="text-primary/80 leading-relaxed mb-4">
                Partnership qualification ensures deployment discussion efficiency by focusing on organizations with appropriate 
                technical environments, supervision capacity, and partnership commitment capability.
              </BodyText>
              <BodyText className="text-sm text-primary/70 leading-relaxed">
                Qualification criteria include established technical development environment suitable for junior engineer integration, 
                technical leadership with capacity for supervision protocol collaboration, organizational commitment to systematic 
                talent development and performance tracking, and documented talent acquisition requirements with specific 
                competency needs.
              </BodyText>
            </div>

            <div className="pt-4">
              <CTAButton 
                variant="primary" 
                href="/employers/deployment-discussion"
              >
                Initiate Deployment Discussion
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-primary/20">
          <BodyText className="text-sm text-primary/70 leading-relaxed">
            Deployment discussion access is provided to qualified organizations following initial assessment and partnership 
            qualification verification. Discussion includes comprehensive partnership evaluation and engagement protocol design.
          </BodyText>
        </div>
      </div>
    </section>
  );
};
