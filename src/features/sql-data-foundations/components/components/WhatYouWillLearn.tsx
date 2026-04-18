'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database,
  Code2,
  Zap,
  BarChart3,
  Lock,
  RefreshCw,
} from 'lucide-react';

const learningOutcomes = [
  { text: "Design normalized relational databases using best practices", icon: <Database className="w-6 h-6 text-black" /> },
  { text: "Write and optimize SQL queries for data retrieval and manipulation", icon: <Code2 className="w-6 h-6 text-black" /> },
  { text: "Use aggregate functions, joins, and subqueries to derive insights", icon: <Zap className="w-6 h-6 text-black" /> },
  { text: "Manage data using DDL and DML statements", icon: <BarChart3 className="w-6 h-6 text-black" /> },
  { text: "Understand transaction management and data integrity", icon: <Lock className="w-6 h-6 text-black" /> },
  { text: "Apply SQL in business analytics and reporting contexts", icon: <RefreshCw className="w-6 h-6 text-black" /> },
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
