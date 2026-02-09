import Navigation from '@/src/shared/components/layout/Navigation';
import Footer from '@/src/shared/components/layout/Footer';
import {
  HeroSection,
  ProgramBoundariesSection,
  OperatingFormatSection,
  ProgramCategoriesSection,
  EvaluationSection,
  CandidateSuitabilitySection,
  ScheduleCTASection,
} from './components/sections';

export default function CoursesPage() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      <Navigation />
      
      <HeroSection />
      
      {/* <BoundaryNoticeSection /> */}
      
      <main className="px-8 md:px-16 lg:px-24 py-8 space-y-12">
        <ProgramCategoriesSection />
        <ProgramBoundariesSection />
        <OperatingFormatSection />
        <EvaluationSection />
        <CandidateSuitabilitySection />
        <ScheduleCTASection />
      </main>
      
      <Footer />
    </div>
  );
}
