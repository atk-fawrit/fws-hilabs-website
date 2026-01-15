import { H1 } from '@/src/shared/components/typography';
import { SectionDivider } from '@/src/shared/components/content';
import {
  EvidenceDocumentationSection,
  EvidenceCategoriesSection,
  ExplicitNonClaimsSection,
  PublicationScheduleSection,
  EmployerAccessSection,
} from './components';

export { metadata } from './metadata';

export default function OutcomesPage() {
  return (
    <div className="container-institutional">
      <H1>Outcomes</H1>
      
      <EvidenceDocumentationSection />
      <SectionDivider />
      
      <EvidenceCategoriesSection />
      <SectionDivider />
      
      <ExplicitNonClaimsSection />
      <SectionDivider />
      
      <PublicationScheduleSection />
      <SectionDivider />
      
      <EmployerAccessSection />
    </div>
  );
}