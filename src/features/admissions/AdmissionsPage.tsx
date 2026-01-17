'use client';

import { H1, H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { useState } from 'react';
import {
  SelectionSystemSection,
  EligibilityRequirementsSection,
  SelectionProcessSection,
  CommitmentAndRiskSection,
  ApplicationProtocolSection,
  ApplicationCTASection,
} from './components/sections';

export default function AdmissionsPage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const cardSections = [
    {
      id: 'process',
      title: 'Selection Process',
      description: 'Four-stage transparent evaluation from application to admission',
      image: '/images/selection-process-meeting.jpg',
      component: <SelectionProcessSection />
    },
    {
      id: 'commitment',
      title: 'Commitment & Risk',
      description: 'Understanding the full commitment and risks involved',
      image: '/images/commitment-risk-discussion.jpg',
      component: <CommitmentAndRiskSection />
    },
    {
      id: 'protocol',
      title: 'Application Protocol',
      description: 'Timeline, response protocols, and confirmation requirements',
      image: '/images/application-protocol-documents.jpg',
      component: <ApplicationProtocolSection />
    }
  ];

  if (activeSection) {
    const section = cardSections.find(s => s.id === activeSection);
    return (
      <div className="w-full min-h-screen bg-page-background">
        <div className="max-w-[1600px] mx-auto bg-background">
          <div className="px-6 md:px-8 py-8">
            {/* Back Button */}
            <button
              onClick={() => setActiveSection(null)}
              className="flex items-center gap-2 text-accent hover:text-primary transition-colors mb-6"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Admissions Overview
            </button>
            
            {section?.component}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-page-background">
      <div className="max-w-[1600px] mx-auto bg-background">
        {/* Hero Section */}
        <div className="relative h-[300px] bg-cover bg-center" style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/images/admissions-process.jpg")'
        }}>
          <div className="relative h-full flex items-center px-6 md:px-8">
            <div className="max-w-4xl text-white">
              <H1 className="text-5xl font-light text-white mb-4">Admissions</H1>
              <BodyText className="text-xl text-white leading-relaxed">
                A rigorous selection system designed to identify candidates capable of completing 
                our 12-month engineering talent production program
              </BodyText>
            </div>
          </div>
        </div>

        <div className="px-6 md:px-8 py-6 space-y-8">
          {/* Important Content - Always Visible */}
          <SelectionSystemSection />
          <EligibilityRequirementsSection />

          {/* Explore More Section */}
          <section className="space-y-8">
            <div className="text-center">
              <H2 className="text-3xl font-light text-primary mb-4">Explore More</H2>
              <BodyText className="text-lg text-secondary max-w-3xl mx-auto">
                Click on any section below to learn more about specific aspects of our admissions process
              </BodyText>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cardSections.map((section) => (
                <div
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className="bg-white border border-secondary/20 hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden"
                >
                  <div className="h-48 bg-cover bg-center relative" style={{
                    backgroundImage: `url("${section.image}")`
                  }}>
                    <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <H3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                      {section.title}
                    </H3>
                    <BodyText className="text-secondary leading-relaxed">
                      {section.description}
                    </BodyText>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Application CTA - Always Visible */}
          <ApplicationCTASection />
        </div>
      </div>
    </div>
  );
}