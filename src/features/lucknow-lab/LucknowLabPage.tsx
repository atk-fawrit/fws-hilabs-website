import { PageContainer, DocumentHeader } from '@/src/shared/components/layout';
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
    <PageContainer>
      <DocumentHeader
        title="Lucknow Lab Facility"
        description="Operational specifications, infrastructure details, and facility protocols for the HI Labs Lucknow location as a systematic engineering talent production facility with defined access controls and safety compliance frameworks."
        subtitle="Facility Specification"
      />

      <main className="w-full px-6 md:px-8 py-8">
        <div className="w-full space-y-8">
          <LocationRationaleSection />
          <CatchmentAreaSection />
          <DailyOperatingModelSection />
          <InfrastructureSection />
          <AccessRulesSection />
          <SafetyComplianceSection />
        </div>
      </main>
    </PageContainer>
  );
}
