import { H1 } from '@/src/shared/components/typography';
import { SectionDivider } from '@/src/shared/components/content';
import {
  ProgramSpecificationSection,
  PhaseOneSection,
  PhaseTwoSection,
  EvaluationSystemSection,
  ApplicationProcessSection,
} from './components/sections';

export default function FlagshipProgramPage() {
  return (
    <div className="w-full bg-[#E8E8E6]">
      <div className="bg-white container-content py-16">
        <div className="max-w-5xl">
          <H1 className="text-4xl mb-8">Flagship Program</H1>
          
          <ProgramSpecificationSection />
          <SectionDivider spacing="loose" />
          
          <PhaseOneSection />
          <SectionDivider spacing="loose" />
          
          <PhaseTwoSection />
          <SectionDivider spacing="loose" />
          
          <EvaluationSystemSection />
          <SectionDivider spacing="loose" />
          
          <ApplicationProcessSection />
        </div>
      </div>
    </div>
  );
}
