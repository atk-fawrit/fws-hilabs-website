/**
 * Commitment and Risk Section
 * 
 * Clean expandable section - matching home page style
 */

'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { admissionsData } from '../../data';

interface CommitmentRiskSectionProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export const CommitmentRiskSection: React.FC<CommitmentRiskSectionProps> = ({
  isExpanded,
  onToggle,
}) => {
  return (
    <section className="relative w-full py-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header - Always Visible */}
        <motion.button
          onClick={onToggle}
          className="w-full text-left group"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between p-8 bg-gray-50 rounded-2xl border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 shadow-sm hover:shadow-xl">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                  <span className="text-white font-bold text-lg">02</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
                  Commitment & Risk
                </h2>
              </div>
              <p className="text-base text-gray-600 font-light ml-14">
                Understanding the full commitment and risks involved
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
              <div className="pt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Commitments */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-wider">
                      Commitment Requirements
                    </h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {admissionsData.commitments.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0" />
                        <span className="text-white/90 leading-relaxed font-light">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                
                {/* Risks */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-black uppercase tracking-wider">
                      Risk Acknowledgment
                    </h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {admissionsData.risks.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-black mt-2 flex-shrink-0" />
                        <span className="text-gray-700 leading-relaxed font-light">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              
              {/* Bottom Note */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-6 p-8 bg-gray-50 rounded-2xl border border-gray-200"
              >
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  Candidates who cannot accept these commitments and risks should not proceed with the application process. The program is designed for individuals who understand and embrace these constraints as necessary for effective talent production.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
