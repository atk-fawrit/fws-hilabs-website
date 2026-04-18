'use client';

import { motion } from 'framer-motion';
import { 
  Zap,
  Brain,
  Code2,
  Database,
  Shield,
  Cloud,
} from 'lucide-react';

const learningOutcomes = [
  { text: "Build AI-powered applications using LLMs and modern AI APIs", icon: <Zap className="w-6 h-6 text-black" /> },
  { text: "Apply advanced prompt engineering techniques for reliable AI outputs", icon: <Brain className="w-6 h-6 text-black" /> },
  { text: "Integrate tools like OpenAI, LangChain, and vector databases into products", icon: <Code2 className="w-6 h-6 text-black" /> },
  { text: "Design and develop AI workflows with memory, retrieval, and agents", icon: <Database className="w-6 h-6 text-black" /> },
  { text: "Implement responsible AI practices in production applications", icon: <Shield className="w-6 h-6 text-black" /> },
  { text: "Deploy and manage AI product pipelines in cloud environments", icon: <Cloud className="w-6 h-6 text-black" /> },
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
