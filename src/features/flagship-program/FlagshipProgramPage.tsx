import { H1 } from '@/src/shared/components/typography';
import { SectionDivider } from '@/src/shared/components/content';
import {
  HeroVideoSection,
  ProgramSpecificationSection,
  PhaseOneSection,
  PhaseTwoSection,
  EvaluationSystemSection,
  ApplicationProcessSection,
} from './components/sections';

export default function FlagshipProgramPage() {
  return (
    <div className="w-full min-h-screen bg-page-background">
      <div className="max-w-[1600px] mx-auto bg-background">
        <HeroVideoSection />
        
        <div className="px-6 md:px-8 py-8 space-y-8">
          <ProgramSpecificationSection />
          <PhaseOneSection />
          <PhaseTwoSection />
          <EvaluationSystemSection />
          <ApplicationProcessSection />
        </div>
      </div>
    </div>
  );
}
