'use client';

import { motion } from 'framer-motion';
import { PageLayout } from '@/src/shared/components/layout';
import { ContactInfo } from './components/ContactInfo';
import { WhatsAppCTA } from './components/WhatsAppCTA';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { useWhatsApp } from './hooks/useWhatsApp';

export default function ContactPage() {
  const whatsappNumber = '8355096135';
  const phoneNumber = '+917388899595';
  
  const { openWhatsAppChat } = useWhatsApp(whatsappNumber);

  return (
    <PageLayout>
      <main className="w-full bg-gradient-to-b from-gray-50 to-white pb-24">
        <section className="relative w-full py-16 pt-32">
          <div className="max-w-[1200px] mx-auto px-6">
            
            {/* Page Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-4"
              >
                <span className="px-4 py-2 bg-black/5 rounded-full text-sm font-semibold text-gray-700 tracking-wide">
                  GET IN TOUCH
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
                We&apos;re here to answer your questions about our programs and admissions
              </p>
            </motion.div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              
              {/* Left Column - Company Info */}
              <ContactInfo phoneNumber={phoneNumber} />

              {/* Right Column - WhatsApp CTA */}
              <WhatsAppCTA 
                whatsappNumber={whatsappNumber}
                onWhatsAppClick={openWhatsAppChat}
              />

            </div>

          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsAppButton onWhatsAppClick={openWhatsAppChat} />
    </PageLayout>
  );
}
