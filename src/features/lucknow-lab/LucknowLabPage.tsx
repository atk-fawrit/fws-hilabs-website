import { H1 } from '@/src/shared/components/typography';
import { SectionDivider } from '@/src/shared/components/content';
import {
  LocationRationaleSection,
  CatchmentAreaSection,
  DailyOperatingModelSection,
  InfrastructureSection,
  AccessRulesSection,
  SafetyComplianceSection,
} from './components/sections';

export default function LucknowLabPage() {
  return (
    <div className="container-institutional">
      <H1>Lucknow Lab</H1>
      
      <LocationRationaleSection />
      <SectionDivider />
      
      <CatchmentAreaSection />
      <SectionDivider />
      
      <DailyOperatingModelSection />
      <SectionDivider />
      
      <InfrastructureSection />
      <SectionDivider />
      
      <AccessRulesSection />
      <SectionDivider />
      
      <SafetyComplianceSection />
    </div>
  );
}
