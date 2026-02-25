'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { PageLayout, SimpleHero } from '@/src/shared/components/layout';
import {
  MainContentSection,
  SelectionProcessSection,
  CommitmentRiskSection,
  ApplicationTimelineSection,
  ApplicationCTASection,
} from './components/sections';
import { admissionsData } from './data';

export default function AdmissionsPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);
  const isCtaInView = useInView(ctaRef, { once: false, amount: 0.3 });

  const handleSectionToggle = (sectionId: string) => {
    setExpandedSection(prev => prev === sectionId ? null : sectionId);
  };

  const scrollToApplication = () => {
    ctaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <SimpleHero
        image={admissionsData.hero.image}
        imageAlt={admissionsData.hero.title}
        title={admissionsData.hero.title}
        description={admissionsData.hero.description}
        eyebrow="HI Labs · Admissions"
        overlayOpacity="dark"
        height="h-[520px]"
      />

      {/* Main Content */}
      <main className="w-full bg-white">
        <MainContentSection />

        <div ref={sectionRef} className="relative">
          <SelectionProcessSection
            isExpanded={expandedSection === 'process'}
            onToggle={() => handleSectionToggle('process')}
          />
          <CommitmentRiskSection
            isExpanded={expandedSection === 'commitment'}
            onToggle={() => handleSectionToggle('commitment')}
          />
          <ApplicationTimelineSection
            isExpanded={expandedSection === 'timeline'}
            onToggle={() => handleSectionToggle('timeline')}
          />
          <div ref={ctaRef}>
            <ApplicationCTASection />
          </div>
        </div>
      </main>

      {/* Floating Apply Button - Shows when CTA section is not in view */}
      <AnimatePresence>
        {!isCtaInView && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.94 }}
            transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
            onClick={scrollToApplication}
            whileHover={{ scale: 1.04, boxShadow: '0 16px 44px rgba(0,0,0,0.32)' }}
            whileTap={{ scale: 0.97 }}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-black text-white border border-white/8 shadow-2xl cursor-pointer font-semibold text-sm tracking-wide"
          >
            <span>Apply Now</span>
            <motion.svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            >
              <path
                d="M7 1.5V12.5M7 12.5L2.5 8M7 12.5L11.5 8"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.button>
        )}
      </AnimatePresence>

    </PageLayout>
  );
}