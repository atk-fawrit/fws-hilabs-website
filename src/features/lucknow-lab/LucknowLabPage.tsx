import Navigation from '@/src/shared/components/layout/Navigation';
import Footer from '@/src/shared/components/layout/Footer';
import {
  HeroSection,
  LocationRationaleSection,
  CatchmentAreaSection,
  DailyOperatingModelSection,
  InfrastructureSection,
  AccessRulesSection,
  SafetyComplianceSection,
} from './components/sections';

export default function LucknowLabPage() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      <Navigation />
      
      <HeroSection />
      
      <main>
        <LocationRationaleSection />
        <CatchmentAreaSection />
        <DailyOperatingModelSection />
        <InfrastructureSection />
        <AccessRulesSection />
        <SafetyComplianceSection />
      </main>
      
      <Footer />
    </div>
  );
}
