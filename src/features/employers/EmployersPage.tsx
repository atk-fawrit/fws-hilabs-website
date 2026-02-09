import Navigation from '@/src/shared/components/layout/Navigation';
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
      <Navigation />
      
      <HeroSection />
      
      <main className="px-8 md:px-16 lg:px-24 py-12 space-y-12">
        <SupplySpecificationSection />
        <DeploymentModelsSection />
        <EngagementProtocolSection />
        <DeploymentDiscussionSection />
      </main>
      
      <Footer />
    </div>
  );
}
