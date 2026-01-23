import { PageContainer } from '@/src/shared/components/layout';
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
    <PageContainer>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('/images/hero-engineering-lab.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}></div>
      </div>
      
      {/* Clean Header Section */}
      <div className="relative px-6 md:px-8 pt-16 pb-16">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Weekend Programs Available
          </div>
          
          <h1 className="text-5xl font-bold text-primary mb-6 leading-tight">
            Short Programs
          </h1>
          
          <p className="text-xl text-secondary leading-relaxed max-w-4xl mx-auto">
            Weekend-based technical training modules designed for working professionals 
            seeking targeted skill development without full-time commitment.
          </p>
        </div>
      </div>
      
      <div className="relative px-6 md:px-8 pb-8 space-y-8">
        <ProgramCategoriesSection />
        <ProgramBoundariesSection />
        <OperatingFormatSection />
        <EvaluationSection />
        <CandidateSuitabilitySection />
        <ScheduleCTASection />
      </div>
    </PageContainer>
  );
}
