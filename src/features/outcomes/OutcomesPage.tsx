'use client';

import { useState } from 'react';
import { PageContainer, DocumentHeader } from '@/src/shared/components/layout';
import {
  EvidenceDocumentationSection,
  EvidenceCategoriesSection,
  ExplicitNonClaimsSection,
  PublicationScheduleSection,
  EmployerAccessSection,
} from './components';

export { metadata } from './metadata';

export default function OutcomesPage() {
  return (
    <PageContainer>
      <DocumentHeader
        title="Outcomes & Evidence"
        description="HI Labs outcomes are documented evidence of program effectiveness, not marketing metrics or promotional claims. Evidence is collected systematically and published transparently to enable informed evaluation by stakeholders."
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <EvidenceDocumentationSection />
        <EvidenceCategoriesSection />
        <ExplicitNonClaimsSection />
        <PublicationScheduleSection />
        <EmployerAccessSection />
      </main>
    </PageContainer>
  );
}