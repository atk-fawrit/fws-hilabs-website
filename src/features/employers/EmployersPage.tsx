import Footer from '@/src/shared/components/layout/Footer';
import {
  HeroSection,
  SupplySpecificationSection,
  DeploymentModelsSection,
  EngagementProtocolSection,
  DeploymentDiscussionSection,
} from './components/sections';

export default function EmployersPage() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      <HeroSection />
      
      <main className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-8 sm:py-10 md:py-12 space-y-8 sm:space-y-10 md:space-y-12">
        <SupplySpecificationSection />
        <DeploymentModelsSection />
        <EngagementProtocolSection />
        <DeploymentDiscussionSection />
      </main>
      
      <Footer />
    </div>
  );
}
