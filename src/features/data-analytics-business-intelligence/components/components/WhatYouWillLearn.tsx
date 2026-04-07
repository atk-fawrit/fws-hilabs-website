'use client';

import { motion } from 'framer-motion';
import { 
  BarChart3,
  Database,
  TrendingUp,
  PieChart,
  Users,
  Zap,
} from 'lucide-react';

const learningOutcomes = [
  { text: "Analyze complex datasets using SQL, Python, and Excel", icon: <Database className="w-6 h-6 text-blue-500" /> },
  { text: "Design and build professional dashboards using Power BI and Tableau", icon: <BarChart3 className="w-6 h-6 text-blue-500" /> },
  { text: "Apply statistical techniques to derive meaningful insights from data", icon: <TrendingUp className="w-6 h-6 text-blue-500" /> },
  { text: "Identify trends, patterns, and anomalies in business data", icon: <PieChart className="w-6 h-6 text-blue-500" /> },
  { text: "Present data findings clearly to technical and non-technical stakeholders", icon: <Users className="w-6 h-6 text-blue-500" /> },
  { text: "Support data-driven decision-making across business functions", icon: <Zap className="w-6 h-6 text-blue-500" /> },
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
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300">
              {outcome.icon}
            </div>
            <p className="text-slate-700 font-medium leading-snug">{outcome.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
