/**
 * About HI Labs Page
 * Clean, premium design with only actual content
 */

'use client';

import { useState, useRef, useEffect } from 'react';
import { Footer } from '@/src/shared/components/layout';
import { institutionalSections, teamMembers } from './data';
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
      <HeroSection />

      <main className="w-full">
        <div className="px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 space-y-8 sm:space-y-10 md:space-y-12">
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
    <section className="relative overflow-hidden min-h-[85vh]">
      {/* Full-bleed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/institutional-overview-bg.jpg)',
        }}
      ></div>

      {/* Full overlay to ensure readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/60"></div>

      <div className="relative z-10 max-w-7xl mx-auto pt-20 sm:pt-24 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(85vh-8rem)]">
          {/* Left Column */}
          <div className="flex items-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-12 sm:py-16 lg:py-24">
            <div className="max-w-xl space-y-6 sm:space-y-8 lg:space-y-10">
              <div className="space-y-5 sm:space-y-6 lg:space-y-8">
                <div className="text-xs uppercase tracking-widest text-blue-600 font-semibold">
                  Institutional Document
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95] text-black">
                  About HI Labs
                </h1>
                <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                  Institutional charter, operating principles, and governance framework defining HI Labs
                  as a systematic engineering talent production facility with documented accountability
                  structures and operational boundaries.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-12 sm:py-16 lg:py-24 flex items-center">
            <div className="relative max-w-xl space-y-5 sm:space-y-6 lg:space-y-8 z-10">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6 tracking-tight">
                  Institutional Overview
                </h2>
              </div>

              <div className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
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

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
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
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tight">
            Institutional Framework
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-light max-w-3xl">
            Explore detailed documentation of HI Labs&apos; institutional structure, operating principles,
            and governance mechanisms through systematic domain specifications
          </p>
        </div>

        {/* Framework Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {institutionalSections.map((item) => (
            <button
              key={item.id}
              onClick={() => onCardClick(item.id)}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left"
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
  const referenceData: Array<{ title: string; items: string[] }> = [];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tight">
            Our Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-2xl">
            Meet the visionary leaders driving HI Labs&apos; mission to produce deployment-ready engineers through systematic excellence and institutional integrity.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-56 sm:h-64 md:h-80 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-5 md:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2">
                  {member.name}
                </h3>
                <p className="text-base font-semibold text-blue-600 mb-4">
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
