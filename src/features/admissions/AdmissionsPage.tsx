import { H1 } from '@/src/shared/components/typography';
import { SectionDivider } from '@/src/shared/components/content';
import {
  SelectionSystemSection,
  EligibilityRequirementsSection,
  SelectionProcessSection,
  CommitmentAndRiskSection,
  ApplicationProtocolSection,
  ApplicationCTASection,
} from './components/sections';

export default function AdmissionsPage() {
  return (
    <div className="container-institutional">
      <H1>Admissions</H1>
      
      <SelectionSystemSection />
      <SectionDivider />
      
      <EligibilityRequirementsSection />
      <SectionDivider />
      
      <SelectionProcessSection />
      <SectionDivider />
      
      <CommitmentAndRiskSection />
      <SectionDivider />
      
      <ApplicationProtocolSection />
      <SectionDivider />
      
      <ApplicationCTASection />
    </div>
  );
}
