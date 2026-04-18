'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal,
  Database,
  Code2,
  Cpu,
  Layers,
  Globe,
} from 'lucide-react';

const learningOutcomes = [
  { text: "Write clean, efficient Python code using core language constructs", icon: <Terminal className="w-6 h-6 text-black" /> },
  { text: "Apply object-oriented programming (OOP) principles to design scalable solutions", icon: <Layers className="w-6 h-6 text-black" /> },
  { text: "Build and consume RESTful APIs using Python frameworks", icon: <Globe className="w-6 h-6 text-black" /> },
  { text: "Automate tasks and scripts for productivity and workflow optimization", icon: <Cpu className="w-6 h-6 text-black" /> },
  { text: "Work with file systems, databases, and third-party libraries", icon: <Database className="w-6 h-6 text-black" /> },
  { text: "Deploy Python applications in real-world environments", icon: <Code2 className="w-6 h-6 text-black" /> },
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
