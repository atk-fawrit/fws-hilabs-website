/**
 * Comparison Table Section
 * 
 * Shows differences between Flagship Program and Premium Short Courses
 */

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { admissionsData } from '../../data';

export const ComparisonTableSection: React.FC = () => {
  return (
    <section className="relative w-full bg-gray-50 py-12">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-black tracking-tight text-center">
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
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.4 }}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-bold text-gray-900">
                        {row.label}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 font-light">
                        {row.flagship}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 font-light">
                        {row.shortCourse}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
