'use client';

import { BodyText } from '@/src/shared/components/typography';
import { PageContainer, DocumentHeader } from '@/src/shared/components/layout';
import {
  SupplySpecificationSection,
  DeploymentModelsSection,
  EngagementProtocolSection,
  DeploymentDiscussionSection,
} from './components/sections';

export default function EmployersPage() {
  const headerDescription = (
    <>
      <BodyText className="text-lg text-primary/80 leading-relaxed mb-6">
        This document specifies HI Labs' talent supply capabilities, deployment models, and partnership 
        protocols for organizations evaluating engineering talent procurement through systematic production 
        rather than traditional recruitment channels.
      </BodyText>
      <BodyText className="text-base text-primary/80 leading-relaxed">
        HI Labs operates as a talent production facility, not a recruitment agency or placement service. 
        Organizations engage with HI Labs to access systematically developed engineering talent through 
        structured deployment models with defined supervision and risk allocation frameworks.
      </BodyText>
    </>
  );

  return (
    <PageContainer>
      <DocumentHeader
        title="Talent Procurement Specification"
        description={headerDescription}
        subtitle="Procurement Document"
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <SupplySpecificationSection />
        <DeploymentModelsSection />
        <EngagementProtocolSection />
        <DeploymentDiscussionSection />
      </main>
    </PageContainer>
  );
}
