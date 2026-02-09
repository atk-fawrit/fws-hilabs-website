import { PageLayout, SimpleHero } from '@/src/shared/components/layout';
import {
  ProgramBoundariesSection,
  OperatingFormatSection,
  ProgramCategoriesSection,
  EvaluationSection,
  CandidateSuitabilitySection,
  ScheduleCTASection,
} from './components/sections';

export default function CoursesPage() {
  return (
    <PageLayout>
      <SimpleHero
        image="/images/C-bgimg.jpg"
        imageAlt="Short Programs"
        title="Short Programs"
        description="Weekend-based technical training modules designed for working professionals seeking targeted skill development without full-time commitment."
        overlayOpacity="light"
        badge={{
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          ),
          text: "Weekend Programs Available"
        }}
      />
      
      <main className="px-8 md:px-16 lg:px-24 py-8 space-y-12">
        <ProgramCategoriesSection />
        <ProgramBoundariesSection />
        <OperatingFormatSection />
        <EvaluationSection />
        <CandidateSuitabilitySection />
        <ScheduleCTASection />
      </main>
    </PageLayout>
  );
}
