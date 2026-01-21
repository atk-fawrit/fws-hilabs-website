'use client';

import { useState } from 'react';
import { H2, BodyText } from '@/src/shared/components/typography';
import { PageContainer, DocumentHeader } from '@/src/shared/components/layout';
import { ImageCard, InfoBox } from '@/src/shared/components/content';
import { institutionalSections, quickReferenceData } from './data';
import {
  InstitutionalCharterSection,
  OperatingPrinciplesSection,
  OperatingDomainsSection,
  FacultyModelSection,
  GovernanceMechanismsSection,
  IntegrityStandardsSection,
  InstitutionalStructureSection,
} from './components/sections';

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Map section IDs to components
  const sectionComponents = {
    charter: <InstitutionalCharterSection />,
    principles: <OperatingPrinciplesSection />,
    domains: <OperatingDomainsSection />,
    faculty: <FacultyModelSection />,
    governance: <GovernanceMechanismsSection />,
    integrity: <IntegrityStandardsSection />,
    structure: <InstitutionalStructureSection />,
  };

  if (activeSection) {
    const component = sectionComponents[activeSection as keyof typeof sectionComponents];
    
    return (
      <PageContainer>
        <div className="px-6 md:px-8 py-8">
          {/* Back Button */}
          <button
            onClick={() => setActiveSection(null)}
            className="flex items-center gap-2 text-accent hover:text-primary transition-colors mb-6"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to About Overview
          </button>
          
          {/* Full width content without max-width constraints */}
          <div className="w-full">
            {component}
          </div>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <DocumentHeader
        title="About HI Labs"
        description="Institutional charter, operating principles, and governance framework defining HI Labs as a systematic engineering talent production facility with documented accountability structures and operational boundaries."
        subtitle="Institutional Document"
      />

      <main className="w-full px-6 md:px-8 py-16">
        {/* Overview Section - Full Width */}
        <div className="w-full mb-16">
          <InfoBox
            variant="accent"
            title="INSTITUTIONAL OVERVIEW"
            description="HI Labs operates as an institutional engineering talent production system with systematic competency development, enforced evaluation protocols, and supervised deployment mechanisms. This documentation provides comprehensive institutional specifications across seven key areas."
          />
        </div>

        {/* Institutional Framework Section - Full Width */}
        <section className="w-full mb-16">
          <div className="text-center mb-12">
            <H2 className="text-3xl font-light text-primary mb-4">Institutional Framework</H2>
            <BodyText className="text-lg text-secondary max-w-4xl mx-auto">
              Explore detailed documentation of HI Labs' institutional structure, operating principles, 
              and governance mechanisms through systematic domain specifications
            </BodyText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-none">
            {institutionalSections.map((section) => (
              <ImageCard
                key={section.id}
                title={section.title}
                description={section.description}
                image={section.image}
                onClick={() => setActiveSection(section.id)}
                imageHeight="h-48"
                className="hover:border-accent/60 hover:shadow-lg"
              />
            ))}
          </div>
        </section>

        {/* Quick Reference - Full Width */}
        <section className="w-full bg-accent/5 border-l-4 border-accent p-8">
          <H2 className="text-xl font-light text-primary mb-4">Quick Reference</H2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <BodyText className="font-medium text-primary mb-2">Core Framework:</BodyText>
              <ul className="space-y-1 text-primary/70">
                {quickReferenceData.coreFramework.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <BodyText className="font-medium text-primary mb-2">Documentation Areas:</BodyText>
              <ul className="space-y-1 text-primary/70">
                {quickReferenceData.documentationAreas.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <BodyText className="font-medium text-primary mb-2">Systematic Approach:</BodyText>
              <ul className="space-y-1 text-primary/70">
                <li>• Evidence-based operations</li>
                <li>• Documented protocols</li>
                <li>• Measurable outcomes</li>
                <li>• Transparent boundaries</li>
              </ul>
            </div>
            <div>
              <BodyText className="font-medium text-primary mb-2">Quality Standards:</BodyText>
              <ul className="space-y-1 text-primary/70">
                <li>• Systematic assessment</li>
                <li>• Performance tracking</li>
                <li>• Continuous improvement</li>
                <li>• Compliance verification</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </PageContainer>
  );
}
