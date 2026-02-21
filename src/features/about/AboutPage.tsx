/**
 * About HI Labs Page
 * Clean, premium design with only actual content
 */

'use client';

import { useState, useRef, useEffect } from 'react';
import { Navigation, Footer } from '@/src/shared/components/layout';
import { institutionalSections, quickReferenceData, teamMembers } from './data';
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
  const contentRef = useRef<HTMLDivElement>(null);

  // Map section IDs to components
  const sectionComponents = {
    'charter': <InstitutionalCharterSection />,
    'principles': <OperatingPrinciplesSection />,
    'domains': <OperatingDomainsSection />,
    'faculty': <FacultyModelSection />,
    'governance': <GovernanceMechanismsSection />,
    'integrity': <IntegrityStandardsSection />,
    'structure': <InstitutionalStructureSection />,
  };

  // Show only one section at a time and scroll to it
  const handleCardClick = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  // Scroll to content when section changes
  useEffect(() => {
    if (activeSection && contentRef.current) {
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100);
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      <Navigation />
      
      <HeroSection />

      <main className="w-full">
        <div className="px-6 md:px-8 py-12 space-y-12">
          <InstitutionalFrameworkSection onCardClick={handleCardClick} />
          
          {/* Show only one section at a time */}
          {activeSection && (
            <div ref={contentRef}>
              {sectionComponents[activeSection as keyof typeof sectionComponents]}
            </div>
          )}
          
          <QuickReferenceSection />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

// ============================================================
// HERO SECTION
// ============================================================
function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
          {/* Left Column */}
          <div className="flex items-center px-8 md:px-16 lg:px-20 py-20 lg:py-24">
            <div className="max-w-xl space-y-10">
              <div className="space-y-8">
                <div className="text-xs uppercase tracking-widest text-gray-500 font-semibold">
                  Institutional Document
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-black">
                  About HI Labs
                </h1>
                <div className="w-20 h-0.5 bg-black"></div>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                  Institutional charter, operating principles, and governance framework defining HI Labs 
                  as a systematic engineering talent production facility with documented accountability 
                  structures and operational boundaries.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative bg-gray-50 px-8 md:px-16 lg:px-20 py-32 lg:py-24 flex items-center border-l border-gray-200">
            <div className="max-w-xl space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 tracking-tight">
                  Institutional Overview
                </h2>
              </div>
              
              <div className="text-lg text-gray-700 leading-relaxed font-light">
                <p>
                  HI Labs operates as an institutional engineering talent production system with 
                  systematic competency development, enforced evaluation protocols, and supervised 
                  deployment mechanisms. This documentation provides comprehensive institutional 
                  specifications across seven key areas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  );
}

// ============================================================
// INSTITUTIONAL FRAMEWORK SECTION
// ============================================================
interface InstitutionalFrameworkSectionProps {
  onCardClick: (sectionId: string) => void;
}

function InstitutionalFrameworkSection({ onCardClick }: InstitutionalFrameworkSectionProps) {
  return (
    <section className="py-16 px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Institutional Framework
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed font-light max-w-3xl">
            Explore detailed documentation of HI Labs&apos; institutional structure, operating principles, 
            and governance mechanisms through systematic domain specifications
          </p>
        </div>

        {/* Framework Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {institutionalSections.map((item) => (
            <button
              key={item.id}
              onClick={() => onCardClick(item.id)}
              className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-900 hover:shadow-lg transition-all duration-300 text-left"
            >
              {/* Image */}
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-medium text-black mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// QUICK REFERENCE SECTION
// ============================================================
function QuickReferenceSection() {
  const referenceData = [];

  return (
    <section className="py-16 px-8 md:px-16 bg-gray-50 rounded-lg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
Our Team          </h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-72 bg-gray-100 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-1">
                  {member.name}
                </h3>
                <p className="text-base font-semibold text-gray-700 mb-4">
                  {member.role}
                </p>
                <p className="text-base text-gray-600 leading-relaxed font-light">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Reference Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {referenceData.map((section, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-gray-200"
            >
              <h3 className="text-base font-medium text-black mb-4 uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-gray-700 leading-relaxed text-sm font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
