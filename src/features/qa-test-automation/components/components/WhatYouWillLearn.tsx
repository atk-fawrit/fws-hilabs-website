'use client';

import { motion } from 'framer-motion';
import { 
  CheckCircle2,
  Code2,
  Zap,
  Database,
  Gauge,
  Shield,
} from 'lucide-react';

const learningOutcomes = [
  { text: "Design comprehensive test plans and test cases for software systems", icon: <CheckCircle2 className="w-6 h-6 text-black" /> },
  { text: "Execute functional, regression, and exploratory testing effectively", icon: <Zap className="w-6 h-6 text-black" /> },
  { text: "Build automated test suites using Selenium, Cypress, or Playwright", icon: <Code2 className="w-6 h-6 text-black" /> },
  { text: "Implement API testing using tools like Postman and REST Assured", icon: <Database className="w-6 h-6 text-black" /> },
  { text: "Integrate automated tests into CI/CD pipelines", icon: <Gauge className="w-6 h-6 text-black" /> },
  { text: "Apply performance and security testing fundamentals", icon: <Shield className="w-6 h-6 text-black" /> },
];

export default function WhatYouWillLearn() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">What You Will Learn</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {learningOutcomes.map((outcome, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors duration-300 text-black group-hover:text-black">
              {outcome.icon}
            </div>
            <p className="text-slate-700 font-medium leading-snug">{outcome.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
