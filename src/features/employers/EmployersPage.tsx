import { H1 } from '@/src/shared/components/typography';
import { SectionDivider } from '@/src/shared/components/content';
import {
  TalentProcurementSection,
  SupplySpecificationSection,
  DeploymentModelsSection,
  EngagementProtocolSection,
  DeploymentDiscussionSection,
} from './components/sections';

export default function EmployersPage() {
  return (
    <div className="container-institutional">
      <H1>Employers</H1>
      
      <TalentProcurementSection />
      <SectionDivider />
      
      <SupplySpecificationSection />
      <SectionDivider />
      
      <DeploymentModelsSection />
      <SectionDivider />
      
      <EngagementProtocolSection />
      <SectionDivider />
      
      <DeploymentDiscussionSection />
    </div>
  );
}
