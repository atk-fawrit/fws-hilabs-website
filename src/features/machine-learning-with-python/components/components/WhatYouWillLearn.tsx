'use client';

import { motion } from 'framer-motion';
import { 
  Brain,
  Database,
  TrendingUp,
  Zap,
  Network,
  Cpu,
} from 'lucide-react';

const learningOutcomes = [
  { text: "Implement supervised and unsupervised machine learning algorithms from scratch and using libraries", icon: <Brain className="w-6 h-6 text-blue-500" /> },
  { text: "Perform data preprocessing, feature engineering, and exploratory analysis", icon: <Database className="w-6 h-6 text-blue-500" /> },
  { text: "Evaluate and tune ML models using cross-validation and hyperparameter optimization", icon: <TrendingUp className="w-6 h-6 text-blue-500" /> },
  { text: "Build classification, regression, and clustering pipelines", icon: <Zap className="w-6 h-6 text-blue-500" /> },
  { text: "Apply ensemble methods, neural networks, and advanced ML techniques", icon: <Network className="w-6 h-6 text-blue-500" /> },
  { text: "Deploy ML models as APIs for production use", icon: <Cpu className="w-6 h-6 text-blue-500" /> },
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
