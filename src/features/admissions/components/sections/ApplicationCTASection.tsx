/**
 * Application CTA Section
 * 
 * Simple application button to open the form modal
 */

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ApplicationModal } from '@/src/shared/components/content/ApplicationModal';

interface ApplicationCTASectionProps {
  programType?: 'flagship' | 'short-courses';
}

export const ApplicationCTASection: React.FC<ApplicationCTASectionProps> = ({ 
  programType = 'flagship' 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll to section if hash matches
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#application') {
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  const content = {
    flagship: {
      description: 'Submit your application for the Flagship Program.',
    },
    'short-courses': {
      description: 'Submit your application for the Premium Short Courses.',
    },
  };

  const currentContent = content[programType];

  return (
    <section ref={sectionRef} id="application" className="relative w-full py-16 bg-gradient-to-br from-gray-50 to-white scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-4">
              Ready to Apply?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
              {currentContent.description}
            </p>
          </div>

          {/* Application Button */}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-black text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-black/50 transition-all duration-300 hover:bg-gray-900"
          >
            <span>Submit</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
        </motion.div>
      </div>

      {/* Application Modal */}
      <ApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        programType={programType}
      />
    </section>
  );
};
