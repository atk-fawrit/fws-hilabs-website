'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const curriculum = [
  { title: "Module 1: QA Fundamentals", desc: "Testing types, SDLC integration, defect lifecycle, and QA mindset" },
  { title: "Module 2: Manual Testing", desc: "Test planning, test case design, exploratory testing, and reporting" },
  { title: "Module 3: Agile Testing", desc: "Testing in Scrum, sprint reviews, acceptance criteria, and BDD" },
  { title: "Module 4: Test Automation Basics", desc: "Automation concepts, tool selection, and framework principles" },
  { title: "Module 5: Selenium & WebDriver", desc: "Browser automation, locators, page object model, and assertions" },
  { title: "Module 6: Cypress / Playwright", desc: "Modern web testing, component testing, and visual regression" },
  { title: "Module 7: API Testing", desc: "Postman, REST Assured, schema validation, and contract testing" },
  { title: "Module 8: CI/CD Integration", desc: "Embedding tests in pipelines, test reporting, and quality gates" },
  { title: "Module 9: Performance & Security Testing", desc: "Load testing with JMeter, OWASP basics, and vulnerability scanning" },
  { title: "Module 10: Capstone Project", desc: "Build a full test automation suite for a real-world web application" },
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
            className={`bg-white rounded-2xl border transition-all overflow-hidden ${openModule === idx ? 'border-slate-300 shadow-md ring-1 ring-slate-100' : 'border-slate-200 shadow-sm hover:border-slate-300'}`}
          >
            <button 
              onClick={() => setOpenModule(openModule === idx ? null : idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <span className={`font-semibold text-lg ${openModule === idx ? 'text-slate-900' : 'text-slate-900'}`}>
                {module.title}
              </span>
              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openModule === idx ? 'rotate-180' : ''}`} />
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
