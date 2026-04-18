'use client';

import { motion } from 'framer-motion';
import { 
  Brain,
  Lightbulb,
  TrendingUp,
  Shield,
  MessageSquare,
  Zap,
} from 'lucide-react';

const learningOutcomes = [
  { text: "Explain core AI concepts including machine learning, deep learning, and NLP", icon: <Brain className="w-6 h-6 text-black" /> },
  { text: "Distinguish between different categories of AI tools and their use cases", icon: <Lightbulb className="w-6 h-6 text-black" /> },
  { text: "Evaluate the potential of AI solutions for specific business challenges", icon: <TrendingUp className="w-6 h-6 text-black" /> },
  { text: "Understand the ethical implications and limitations of AI systems", icon: <Shield className="w-6 h-6 text-black" /> },
  { text: "Communicate effectively with technical teams on AI projects", icon: <MessageSquare className="w-6 h-6 text-black" /> },
  { text: "Apply basic AI tools and prompting strategies in professional workflows", icon: <Zap className="w-6 h-6 text-black" /> },
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
