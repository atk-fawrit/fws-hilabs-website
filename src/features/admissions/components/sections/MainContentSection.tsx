/**
 * Main Content Section
 * 
 * Clean admission categories matching home page style
 */

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { admissionsData } from '../../data';

type AdmissionCategory = 'flagship' | 'short-courses';

export const MainContentSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<AdmissionCategory>('flagship');
  const [activeTab, setActiveTab] = useState<'eligible' | 'not-eligible'>('eligible');

  return (
    <section className="relative w-full bg-white py-12">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Category Cards - Better Visibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {admissionsData.categories.map((category, idx) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setActiveCategory(category.id as AdmissionCategory)}
              className={`text-left p-8 rounded-2xl transition-all duration-500 relative overflow-hidden group ${
                activeCategory === category.id
                  ? 'bg-black text-white shadow-2xl ring-4 ring-black ring-offset-4'
                  : 'bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 shadow-md hover:shadow-xl'
              }`}
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs font-bold uppercase tracking-[0.2em] ${
                    activeCategory === category.id ? 'text-white/70' : 'text-gray-500'
                  }`}>
                    Category {category.number}
                  </span>
                  <motion.div 
                    animate={{ 
                      scale: activeCategory === category.id ? 1.2 : 1,
                    }}
                    className={`w-4 h-4 rounded-full ${
                      activeCategory === category.id ? 'bg-white' : 'bg-gray-400'
                    }`}
                  />
                </div>
                
                <h3 className={`text-2xl md:text-3xl font-bold mb-3 tracking-tight ${
                  activeCategory === category.id ? 'text-white' : 'text-black'
                }`}>
                  {category.title}
                </h3>
                
                <p className={`text-sm md:text-base leading-relaxed font-light mb-4 ${
                  activeCategory === category.id ? 'text-white/90' : 'text-gray-600'
                }`}>
                  {category.description}
                </p>
                
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    activeCategory === category.id ? 'bg-white' : 'bg-gray-600'
                  }`} />
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    activeCategory === category.id ? 'text-white' : 'text-gray-700'
                  }`}>
                    {category.badge}
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Category Content */}
        <AnimatePresence mode="wait">
          {activeCategory === 'flagship' ? (
            <motion.div
              key="flagship"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {/* Selection System */}
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
                  Selection System
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                    <h4 className="text-lg font-bold text-black mb-4">
                      HI Labs admissions operates as a selection system, not a sales funnel.
                    </h4>
                    <p className="text-base text-gray-700 leading-relaxed font-light">
                      The process identifies candidates capable of completing the 12-month engineering production system under enforced evaluation and supervised deployment protocols.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
                    <h4 className="text-sm font-bold text-white/60 uppercase tracking-[0.2em] mb-3">
                      Selection Criteria
                    </h4>
                    <p className="text-base text-white/90 leading-relaxed font-light mb-4">
                      This is a filtering mechanism designed to identify serious candidates who understand the commitment and constraints of the program. We select for aptitude, commitment, and alignment with institutional expectations.
                    </p>
                    <p className="text-base text-white/80 leading-relaxed font-light">
                      The admissions process evaluates technical aptitude, commitment capacity, and understanding of program constraints. Candidates must demonstrate readiness for full-time, in-person participation and acceptance of elimination-based evaluation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Eligibility */}
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-black tracking-tight text-center">
                  Eligibility Requirements
                </h3>

                {/* Toggle */}
                <div className="flex justify-center">
                  <div className="inline-flex bg-gray-100 rounded-full p-1.5">
                    <button
                      onClick={() => setActiveTab('eligible')}
                      className={`px-10 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                        activeTab === 'eligible' 
                          ? 'bg-black text-white shadow-lg' 
                          : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      Eligible
                    </button>
                    <button
                      onClick={() => setActiveTab('not-eligible')}
                      className={`px-10 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                        activeTab === 'not-eligible' 
                          ? 'bg-black text-white shadow-lg' 
                          : 'text-gray-600 hover:text-black'
                      }`}
                    >
                      Non-Eligible
                    </button>
                  </div>
                </div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                  >
                    {(activeTab === 'eligible' ? admissionsData.eligibility.criteria : admissionsData.eligibility.nonEligible).map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-gray-900 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-black flex items-center justify-center mt-0.5">
                            <span className="text-white text-xs font-bold">
                              {activeTab === 'eligible' ? '✓' : '✗'}
                            </span>
                          </div>
                          <p className="text-sm text-gray-800 leading-relaxed">
                            {item}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="short-courses"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              {/* Direct Admission */}
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
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
                <h3 className="text-3xl md:text-4xl font-bold text-black tracking-tight text-center">
                  Enrollment Process
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {admissionsData.shortCourses.steps.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="relative bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-gray-900 hover:shadow-lg transition-all duration-300"
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
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Key Differences - Comparison Table */}
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-black tracking-tight text-center">
                  Flagship vs Premium Short Courses
                </h3>

                <div className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden shadow-lg">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-900">
                          <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                            Aspect
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                            Flagship Program
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase tracking-wider">
                            Premium Short Courses
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {admissionsData.shortCourses.comparison.map((row, idx) => (
                          <tr key={idx} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 text-sm font-bold text-gray-900">
                              {row.label}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700 font-light">
                              {row.flagship}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-700 font-light">
                              {row.shortCourse}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
