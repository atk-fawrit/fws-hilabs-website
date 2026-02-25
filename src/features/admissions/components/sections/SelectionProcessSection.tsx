/**
 * Selection Process Section
 * 
 * Clean expandable 4-stage selection process
 */

'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { admissionsData } from '../../data';

interface SelectionProcessSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export const SelectionProcessSection: React.FC<SelectionProcessSectionProps> = ({
  isExpanded,
  onToggle,
}) => {
  return (
    <section className="relative w-full py-12 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header - Always Visible */}
        <motion.button
          onClick={onToggle}
          className="w-full text-left group"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                  <span className="text-white font-bold text-lg">01</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
                  Selection Process
                </h2>
              </div>
              <p className="text-base text-gray-600 font-light ml-14">
                Four-stage transparent evaluation from application to admission
              </p>
            </div>
            
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 ml-6"
            >
              <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>
        </motion.button>

        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {admissionsData.selectionStages.map((stage, idx) => (
                  <motion.div
                    key={stage.number}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-gray-900 hover:shadow-xl transition-all duration-300 group"
                  >
                    {/* Header */}
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl font-bold text-white">{stage.number}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">{stage.title}</h3>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
                            <div className="flex items-center gap-1.5">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span>{stage.duration}</span>
                            </div>
                            {stage.format && (
                              <>
                                <span className="text-white/30">|</span>
                                <span>{stage.format}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h4 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-3">
                          Assessment Components
                        </h4>
                        <ul className="space-y-2">
                          {stage.components.map((comp, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-700 font-light">
                              <div className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 flex-shrink-0" />
                              <span>{comp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-200">
                        <h5 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-2">
                          Evaluation Signals
                        </h5>
                        <p className="text-sm text-gray-600 font-light leading-relaxed">
                          {stage.evaluationSignals}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
