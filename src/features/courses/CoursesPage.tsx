import { H1 } from '@/src/shared/components/typography';
import { SectionDivider } from '@/src/shared/components/content';
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
    <div className="container-institutional">
      <H1>Short Programs</H1>
      
      <ProgramBoundariesSection />
      <SectionDivider />
      
      <OperatingFormatSection />
      <SectionDivider />
      
      <ProgramCategoriesSection />
      <SectionDivider />
      
      <EvaluationSection />
      <SectionDivider />
      
      <CandidateSuitabilitySection />
      <SectionDivider />
      
      <ScheduleCTASection />
    </div>
  );
}
