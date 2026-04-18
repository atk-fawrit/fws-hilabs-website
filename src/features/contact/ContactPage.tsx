'use client';

import { PageLayout } from '@/src/shared/components/layout';
import { HeroSection } from './components/HeroSection';
import { ContactInfo } from './components/ContactInfo';
import { WhatsAppCTA } from './components/WhatsAppCTA';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { HiLabsCard } from './components/HiLabsCard';
import { useWhatsApp } from './hooks/useWhatsApp';

export default function ContactPage() {
  const whatsappNumber = '917388899595';
  const phoneNumber = '+91 7388899595';

  const { openWhatsAppChat } = useWhatsApp(whatsappNumber);

  return (
    <PageLayout>
      <HeroSection />

      <main className="w-full bg-gradient-to-b from-gray-50 to-white pb-12">
        <section className="w-full py-16">
          {/* Full-width HI Labs card with increased width */}
          <div className="max-w-7xl mx-auto px-6 mb-6">
            <HiLabsCard />
          </div>

          <div className="max-w-7xl mx-auto px-6 space-y-6">
            {/* Contact Information Cards */}
            <ContactInfo phoneNumber={phoneNumber} onWhatsAppClick={openWhatsAppChat} />
          </div>
        </section>
      </main>

      <FloatingWhatsAppButton onWhatsAppClick={openWhatsAppChat} />
    </PageLayout>
  );
}
