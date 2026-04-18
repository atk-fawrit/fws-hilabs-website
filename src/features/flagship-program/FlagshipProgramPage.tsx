'use client';

import Footer from '@/src/shared/components/layout/Footer';
import {
  HeroVideoSection,
  ProgramOverviewSection,
  WhoIsThisForSection,
  ProgramCardsSection,
  WhatMakesDifferentSection,
  OutcomesSection,
  FAQSection,
  ImportantNotesSection,
} from './components/sections';

export default function FlagshipProgramPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f2f2f0', color: '#0d0d0d' }}>
      <div style={{ position: 'relative' }}>
        <HeroVideoSection />
        <ProgramOverviewSection />
      </div>

      <main style={{ width: '100%', paddingTop: '280px' }}>
        <ProgramCardsSection />
        <WhoIsThisForSection />
        <WhatMakesDifferentSection />
        <OutcomesSection />
        <FAQSection />
        <ImportantNotesSection />
      </main>

      <Footer />
    </div>
  );
}
