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

      <main className="w-full bg-gradient-to-b from-gray-50 to-white pb-24">
        <section className="w-full py-16">
          <div className="max-w-[1200px] mx-auto px-6 space-y-6">

            {/* Full-width HI Labs card */}
            <HiLabsCard />

            {/* Two-column: contact info left, WhatsApp right — same height */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
              <ContactInfo phoneNumber={phoneNumber} />
              <WhatsAppCTA
                whatsappNumber={whatsappNumber}
                onWhatsAppClick={openWhatsAppChat}
              />
            </div>

          </div>
        </section>
      </main>

      <FloatingWhatsAppButton onWhatsAppClick={openWhatsAppChat} />
    </PageLayout>
  );
}
