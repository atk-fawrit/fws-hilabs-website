'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { PageLayout } from '@/src/shared/components/layout';
import { admissionsData } from './data';
import {
  ApplicationCTASection,
  SelectionProcessSection,
  CommitmentRiskSection,
  ApplicationTimelineSection,
} from './components/sections';

export default function FlagshipAdmissionsPage() {
  const [activeTab, setActiveTab] = useState<'eligible' | 'not-eligible'>('eligible');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const ctaRef = useRef<HTMLDivElement>(null);
  const isCtaInView = useInView(ctaRef, { once: false, amount: 0.3 });

  const handleSectionToggle = (sectionId: string) => {
    setExpandedSection(prev => prev === sectionId ? null : sectionId);
  };

  const scrollToApplication = () => {
    ctaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <PageLayout>
      <main className="w-full bg-white pb-24">
        <section className="relative w-full bg-white py-12 pt-24">
          <div className="max-w-[1400px] mx-auto px-6">
            
            {/* Page Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
                Flagship Application Process
              </h1>
            </motion.div>

            <div className="space-y-12">

              {/* Selection System */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight">
                  Selection System
                </h3>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                    <h4 className="text-lg font-bold text-black mb-4">
                      HI Labs admissions operates as a selection system, not a sales funnel.
                    </h4>
                    <p className="text-base text-gray-700 leading-relaxed font-light">
                      The process identifies candidates capable of completing the 12-month engineering production system under enforced evaluation and supervised deployment protocols.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                    <h4 className="text-sm font-bold text-white/60 uppercase tracking-[0.2em] mb-3">
                      Selection Criteria
                    </h4>
                    <p className="text-base text-white/90 leading-relaxed font-light mb-4">
                      This is a filtering mechanism designed to identify serious candidates who understand the commitment and constraints of the program. We select for aptitude, commitment, and alignment with institutional expectations.
                    </p>
                    <p className="text-base text-white/80 leading-relaxed font-light">
                      The admissions process evaluates technical aptitude, commitment capacity, and understanding of program constraints. Candidates must demonstrate readiness for full-time, in-person participation and acceptance of elimination-based evaluation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Eligibility */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight text-center">
                  Eligibility Requirements
                </h3>

                {/* Toggle */}
                <div className="flex justify-center">
                  <div className="inline-flex bg-gray-100 rounded-full p-1.5">
                    <button
                      onClick={() => setActiveTab('eligible')}
                      className={`px-10 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${activeTab === 'eligible'
                          ? 'bg-black text-white shadow-lg'
                          : 'text-gray-600 hover:text-black'
                        }`}
                    >
                      Eligible
                    </button>
                    <button
                      onClick={() => setActiveTab('not-eligible')}
                      className={`px-10 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${activeTab === 'not-eligible'
                          ? 'bg-black text-white shadow-lg'
                          : 'text-gray-600 hover:text-black'
                        }`}
                    >
                      Non-Eligible
                    </button>
                  </div>
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {(activeTab === 'eligible' ? admissionsData.eligibility.criteria : admissionsData.eligibility.nonEligible).map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-gray-900 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black flex items-center justify-center mt-0.5">
                            <span className="text-white text-xs font-bold">
                              {activeTab === 'eligible' ? '✓' : '✗'}
                            </span>
                          </div>
                          <p className="text-sm text-gray-800 leading-relaxed">
                            {item}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>

        <div className="relative mt-8">
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
          
          {/* Application CTA - Moved after timeline */}
          <div ref={ctaRef} className="mt-8">
            <ApplicationCTASection programType="flagship" />
          </div>
        </div>
      </main>

      {/* Floating Apply Button */}
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
            <motion.svg width="14" height="14" viewBox="0 0 14 14" fill="none" animate={{ y: [0, 3, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
              <path d="M7 1.5V12.5M7 12.5L2.5 8M7 12.5L11.5 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          </motion.button>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}
