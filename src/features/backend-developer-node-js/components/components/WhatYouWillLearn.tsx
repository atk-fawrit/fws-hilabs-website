'use client';

import { motion } from 'framer-motion';
import { 
  Globe,
  Database,
  Lock,
  Zap,
  Cpu,
  Cloud,
} from 'lucide-react';

const learningOutcomes = [
  { text: "Build RESTful APIs using Node.js and the Express framework", icon: <Globe className="w-6 h-6 text-black" /> },
  { text: "Design and interact with relational and NoSQL databases", icon: <Database className="w-6 h-6 text-black" /> },
  { text: "Implement secure authentication and authorization using JWT and OAuth", icon: <Lock className="w-6 h-6 text-black" /> },
  { text: "Apply middleware patterns, error handling, and input validation", icon: <Zap className="w-6 h-6 text-black" /> },
  { text: "Optimize backend performance with caching and asynchronous processing", icon: <Cpu className="w-6 h-6 text-black" /> },
  { text: "Deploy Node.js applications to cloud platforms", icon: <Cloud className="w-6 h-6 text-black" /> },
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
