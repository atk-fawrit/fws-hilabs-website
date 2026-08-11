'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { PageLayout, SimpleHero } from '@/src/shared/components/layout';
import {
  MainContentSection,
} from './components/sections';
import { admissionsData } from './data';
import { ApplicationModal } from '@/src/shared/components/content/ApplicationModal';

export default function AdmissionsPage() {
  const ctaRef     = useRef<HTMLDivElement>(null);
  const isCtaInView = useInView(ctaRef, { once: false, amount: 0.3 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToApplication = () => {
    ctaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <PageLayout>
        {/* Hero Section */}
        <SimpleHero
          image={admissionsData.hero.image}
          imageAlt={admissionsData.hero.title}
          title={admissionsData.hero.title}
          description={admissionsData.hero.description}
          eyebrow="HI Labs · Admissions"
          overlayOpacity="dark"
          height="h-[360px]"
        />

        {/* Main Content */}
        <main className="w-full bg-white">
          <MainContentSection />
        </main>

        {/* Floating Apply Button - Shows when CTA section is not in view */}
        <AnimatePresence>
          {!isCtaInView && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
              onClick={() => setIsModalOpen(true)}
              className="lg:hidden fixed bottom-4 left-4 right-4 z-40 flex items-center justify-center gap-2 py-3.5 rounded-[20px] text-[15px] font-bold transition-all duration-300 bg-[#1c2030] text-white border border-transparent"
              style={{
                boxShadow: "0 8px 30px rgba(28, 32, 48, 0.35), 0 4px 10px rgba(0, 0, 0, 0.2)"
              }}
            >
              Apply Now{" "}
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 12h14m-7-7l7 7-7 7" />
              </svg>
            </motion.button>
          )}
        </AnimatePresence>

      </PageLayout>
      
      <ApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        programType="flagship" 
      />
    </>
  );
}