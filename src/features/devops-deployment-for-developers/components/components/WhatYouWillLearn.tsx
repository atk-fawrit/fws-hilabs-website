'use client';

import { motion } from 'framer-motion';
import { 
  GitBranch,
  Box,
  GitMerge,
  Cloud,
  Activity,
  Zap,
} from 'lucide-react';

const learningOutcomes = [
  { text: "Implement CI/CD pipelines using GitHub Actions and similar tools", icon: <GitBranch className="w-6 h-6 text-black" /> },
  { text: "Containerize applications using Docker and manage multi-container setups", icon: <Box className="w-6 h-6 text-black" /> },
  { text: "Deploy and orchestrate containers with Kubernetes", icon: <GitMerge className="w-6 h-6 text-black" /> },
  { text: "Manage cloud infrastructure on AWS and configure key services", icon: <Cloud className="w-6 h-6 text-black" /> },
  { text: "Monitor application performance using logging and alerting tools", icon: <Activity className="w-6 h-6 text-black" /> },
  { text: "Apply infrastructure-as-code practices using Terraform or similar tools", icon: <Zap className="w-6 h-6 text-black" /> },
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
