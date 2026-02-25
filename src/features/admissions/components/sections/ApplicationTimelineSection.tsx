/**
 * Application Timeline Section
 * 
 * Clean expandable timeline - matching home page style
 */

'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { admissionsData } from '../../data';

interface ApplicationTimelineSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export const ApplicationTimelineSection: React.FC<ApplicationTimelineSectionProps> = ({
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
                  <span className="text-white font-bold text-lg">03</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
                  Application Protocol
                </h2>
              </div>
              <p className="text-base text-gray-600 font-light ml-14">
                Timeline, response protocols, and confirmation requirements
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
              <div className="pt-8 space-y-12">
                
                {/* Timeline */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 tracking-tight">
                    Application Timeline
                  </h3>
                  
                  <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gray-300 via-gray-900 to-gray-300" />
                    
                    <div className="space-y-8">
                      {admissionsData.timeline.map((stage, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                          className="relative pl-16"
                        >
                          {/* Circle marker */}
                          <div className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-black border-4 border-white shadow-lg flex items-center justify-center">
                            <span className="text-white font-bold">{index + 1}</span>
                          </div>
                          
                          {/* Content card */}
                          <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-900 hover:shadow-lg transition-all duration-300">
                            <h4 className="text-lg font-bold text-black mb-4">
                              {stage.stage}
                            </h4>
                            <ul className="space-y-2">
                              {stage.items.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                  <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0" />
                                  <span className="text-gray-700 font-light">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Response Protocols */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white rounded-2xl p-8 border border-gray-200"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-black mb-6 tracking-tight">
                    Response Protocols
                  </h3>
                  <div className="space-y-4">
                    {admissionsData.protocols.map((protocol, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + idx * 0.05 }}
                        className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="text-gray-700 font-light leading-relaxed flex-1">{protocol}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Admission Confirmation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
                    Admission Confirmation
                  </h3>
                  <p className="text-lg text-white/90 leading-relaxed font-light mb-6">
                    Admitted candidates receive written confirmation with program details, start date, and pre-program requirements. Confirmation must be returned within 72 hours to secure program placement.
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <p className="text-sm text-white/90 font-light leading-relaxed">
                      <span className="font-bold text-white">CONFIRMATION REQUIREMENTS:</span> Signed commitment agreement, financial verification, relocation timeline, emergency contact information, medical clearance documentation.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
