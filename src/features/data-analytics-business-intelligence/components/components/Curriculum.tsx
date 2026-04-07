'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const curriculum = [
  { title: "Module 1: Data Foundations", desc: "Data types, sources, pipelines, and data quality principles" },
  { title: "Module 2: Advanced SQL for Analytics", desc: "Window functions, CTEs, performance tuning, and reporting queries" },
  { title: "Module 3: Excel for Analysts", desc: "Pivot tables, VLOOKUP, data validation, and financial modelling basics" },
  { title: "Module 4: Python for Analytics", desc: "Pandas, Matplotlib, Seaborn, and exploratory data analysis" },
  { title: "Module 5: Statistics for Business", desc: "Descriptive stats, hypothesis testing, correlation, and regression" },
  { title: "Module 6: Power BI", desc: "Data modelling, DAX, interactive reports, and publishing" },
  { title: "Module 7: Tableau", desc: "Charts, maps, calculated fields, and storytelling with dashboards" },
  { title: "Module 8: Business Communication", desc: "Reporting frameworks, presenting to stakeholders, and executive summaries" },
  { title: "Module 9: Capstone Project", desc: "End-to-end analytics project with live dashboard presentation" },
];

export default function Curriculum() {
  const [openModule, setOpenModule] = useState<number | null>(0);

  return (
    <section id="curriculum">
      <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">Curriculum</h2>
      <div className="space-y-4">
        {curriculum.map((module, idx) => (
          <div 
            key={idx} 
            className={`bg-white rounded-2xl border transition-all overflow-hidden ${openModule === idx ? 'border-blue-200 shadow-md ring-1 ring-blue-100' : 'border-slate-200 shadow-sm hover:border-slate-300'}`}
          >
            <button 
              onClick={() => setOpenModule(openModule === idx ? null : idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <span className={`font-semibold text-lg ${openModule === idx ? 'text-blue-700' : 'text-slate-900'}`}>
                {module.title}
              </span>
              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openModule === idx ? 'rotate-180 text-blue-500' : ''}`} />
            </button>
            <AnimatePresence>
              {openModule === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-lg leading-relaxed border-t border-slate-50 mt-1">
                    {module.desc}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
