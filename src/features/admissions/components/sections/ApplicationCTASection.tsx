/**
 * Application CTA Section
 * 
 * Premium application form with checklist and submission
 */

'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ApplicationModal } from '@/src/shared/components/content/ApplicationModal';
import { admissionsData } from '../../data';

export const ApplicationCTASection: React.FC = () => {
  const [checklist, setChecklist] = useState<Record<string, boolean>>({
    eligibility: false,
    availability: false,
    evaluation: false,
    costs: false,
    policies: false,
  });
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

  const toggleCheckbox = (key: string) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const allChecked = Object.values(checklist).every(v => v);

  const handleSubmit = () => {
    if (allChecked) {
      setIsModalOpen(true);
    }
  };

  return (
    <section ref={sectionRef} id="application" className="relative w-full py-12 bg-white scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-3">
            Begin Application Process
          </h2>
          <p className="text-base text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
            Confirm your understanding of program requirements before proceeding
          </p>
        </motion.div>
        
        {/* Main Card - Premium Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-xl border-2 border-gray-200 overflow-hidden">
            {/* Checklist Section */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-black to-gray-800 flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black">
                    Application Checklist
                  </h3>
                  <p className="text-sm text-gray-500 font-light">
                    Verify all requirements before submission
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                {admissionsData.checklist.map((item, idx) => (
                  <motion.label
                    key={item.key}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.05 }}
                    className={`flex items-start gap-4 p-5 rounded-2xl cursor-pointer transition-all duration-300 border-2 group ${
                      checklist[item.key]
                        ? 'bg-black border-black shadow-lg'
                        : 'bg-white border-gray-200 hover:border-gray-400 hover:shadow-md'
                    }`}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                        checklist[item.key]
                          ? 'bg-white border-white'
                          : 'bg-white border-gray-300 group-hover:border-gray-400'
                      }`}>
                        <input
                          type="checkbox"
                          checked={checklist[item.key]}
                          onChange={() => toggleCheckbox(item.key)}
                          className="w-4 h-4 cursor-pointer accent-black"
                        />
                      </div>
                    </div>
                    <span className={`text-base leading-relaxed transition-colors ${
                      checklist[item.key] ? 'text-white font-medium' : 'text-gray-700 font-light group-hover:text-black'
                    }`}>
                      {item.label}
                    </span>
                  </motion.label>
                ))}
              </div>
            </div>

            {/* Submit Section */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 p-8 md:p-12 border-t-2 border-gray-200">
              <div className="space-y-5">
                <motion.button
                  onClick={handleSubmit}
                  disabled={!allChecked}
                  whileHover={allChecked ? { scale: 1.02 } : {}}
                  whileTap={allChecked ? { scale: 0.98 } : {}}
                  className={`w-full py-6 px-8 font-bold text-lg rounded-2xl transition-all duration-300 ${
                    allChecked
                      ? 'bg-gradient-to-r from-black to-gray-800 text-white hover:shadow-2xl shadow-xl'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {allChecked ? (
                    <span className="flex items-center justify-center gap-3">
                      Submit Application for Review
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  ) : (
                    'Complete all checklist items to proceed'
                  )}
                </motion.button>
                
                <div className="flex items-start gap-3 bg-white/60 rounded-xl p-4 border border-gray-200">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-gray-600 leading-relaxed font-light">
                    Application submission indicates acceptance of all program constraints, selection protocols, and institutional policies outlined above
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Application Modal */}
      <ApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};
