'use client';

import { useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { PageLayout } from '@/src/shared/components/layout';
import { admissionsData } from './data';
import { ApplicationCTASection } from './components/sections';

export default function ShortCoursesAdmissionsPage() {
  const ctaRef = useRef<HTMLDivElement>(null);
  const isCtaInView = useInView(ctaRef, { once: false, amount: 0.3 });

  const scrollToApplication = () => {
    ctaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <PageLayout>
      <main className="w-full bg-white pb-24">
        <section className="relative w-full bg-white py-12 pt-24">
          <div className="max-w-[1400px] mx-auto px-6">
            
            {/* Page Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
                Premium Short Courses
              </h1>
            </motion.div>

            <div className="space-y-12">

              {/* Direct Admission */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight">
                  {admissionsData.shortCourses.overview.title}
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                    <p className="text-lg text-gray-700 leading-relaxed font-light mb-4">
                      {admissionsData.shortCourses.overview.description}
                    </p>
                    <p className="text-base text-gray-600 leading-relaxed font-light">
                      {admissionsData.shortCourses.overview.details}
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                    <h4 className="text-sm font-bold text-white/60 uppercase tracking-[0.2em] mb-3">
                      How It Works
                    </h4>
                    <p className="text-base text-white/90 leading-relaxed font-light">
                      {admissionsData.shortCourses.overview.process}
                    </p>
                  </div>
                </div>
              </div>

              {/* Enrollment Steps */}
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight text-center">
                  Enrollment Process
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {admissionsData.shortCourses.steps.map((item, idx) => {
                    const isFirstCard = idx === 0;
                    const CardWrapper = isFirstCard ? motion.a : motion.div;
                    const cardProps = isFirstCard 
                      ? { href: '/courses', className: "relative bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-gray-900 hover:shadow-lg transition-all duration-300 cursor-pointer block" }
                      : { className: "relative bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-gray-900 hover:shadow-lg transition-all duration-300" };

                    return (
                      <CardWrapper
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        {...cardProps}
                      >
                        <div className="absolute -top-3 -left-3 w-10 h-10 bg-black rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-white font-bold">{item.step}</span>
                        </div>
                        
                        <div className="mt-4 space-y-3">
                          <h4 className="text-lg font-bold text-black">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed font-light">
                            {item.description}
                          </p>
                          
                          {isFirstCard && (
                            <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm pt-2">
                              <span>View Courses</span>
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </div>
                          )}
                        </div>
                      </CardWrapper>
                    );
                  })}
                </div>
              </div>

              {/* Application CTA - Moved to end */}
              <div ref={ctaRef} className="mt-16">
                <ApplicationCTASection programType="short-courses" />
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Floating Apply Button */}
      <AnimatePresence>
        {!isCtaInView && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.94 }}
            transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
            onClick={scrollToApplication}
            whileHover={{ scale: 1.04, boxShadow: '0 16px 44px rgba(0,0,0,0.32)' }}
            whileTap={{ scale: 0.97 }}
            className="fixed bottom-8 right-8 z-50 flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-black text-white border border-white/8 shadow-2xl cursor-pointer font-semibold text-sm tracking-wide"
          >
            <span>Apply Now</span>
            <motion.svg width="14" height="14" viewBox="0 0 14 14" fill="none" animate={{ y: [0, 3, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
              <path d="M7 1.5V12.5M7 12.5L2.5 8M7 12.5L11.5 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          </motion.button>
        )}
      </AnimatePresence>
    </PageLayout>
  );
}
