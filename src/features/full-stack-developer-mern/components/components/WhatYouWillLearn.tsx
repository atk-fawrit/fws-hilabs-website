'use client';

import { motion } from 'framer-motion';
import { 
  Layers,
  Database,
  GitBranch,
  Lock,
  Zap,
  Cloud,
} from 'lucide-react';

const learningOutcomes = [
  { text: "Build full-stack web applications using the MERN technology stack", icon: <Layers className="w-6 h-6 text-blue-500" /> },
  { text: "Develop React frontends connected to Node.js/Express backends", icon: <GitBranch className="w-6 h-6 text-blue-500" /> },
  { text: "Design and manage MongoDB databases for scalable applications", icon: <Database className="w-6 h-6 text-blue-500" /> },
  { text: "Implement authentication, authorization, and session management", icon: <Lock className="w-6 h-6 text-blue-500" /> },
  { text: "Deploy complete applications using cloud services and CI/CD pipelines", icon: <Cloud className="w-6 h-6 text-blue-500" /> },
  { text: "Work with modern development workflows including Git and Agile practices", icon: <Zap className="w-6 h-6 text-blue-500" /> },
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
