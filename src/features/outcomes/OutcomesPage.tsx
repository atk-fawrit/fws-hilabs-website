import Footer from '@/src/shared/components/layout/Footer';
import {
  HeroSection,
  EvidenceCategoriesSection,
  ExplicitNonClaimsSection,
  PublicationScheduleSection,
  EmployerAccessSection,
} from './components';

export { metadata } from './metadata';

export default function OutcomesPage() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      <HeroSection />
      
      <main>
        <EvidenceCategoriesSection />
        <ExplicitNonClaimsSection />
        <PublicationScheduleSection />
        <EmployerAccessSection />
      </main>
      
      <Footer />
    </div>
  );
}
