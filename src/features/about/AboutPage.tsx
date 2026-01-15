import { H1 } from '@/src/shared/components/typography';
import { SectionDivider } from '@/src/shared/components/content';
import {
  InstitutionalCharterSection,
  OperatingPrinciplesSection,
  OperatingDomainsSection,
  FacultyModelSection,
  GovernanceMechanismsSection,
  IntegrityStandardsSection,
  InstitutionalStructureSection,
} from './components/sections';

export default function AboutPage() {
  return (
    <div className="container-institutional">
      <H1>About</H1>
      
      <InstitutionalCharterSection />
      <SectionDivider />
      
      <OperatingPrinciplesSection />
      <SectionDivider />
      
      <OperatingDomainsSection />
      <SectionDivider />
      
      <FacultyModelSection />
      <SectionDivider />
      
      <GovernanceMechanismsSection />
      <SectionDivider />
      
      <IntegrityStandardsSection />
      <SectionDivider />
      
      <InstitutionalStructureSection />
    </div>
  );
}
