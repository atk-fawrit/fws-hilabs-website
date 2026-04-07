'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const curriculum = [
  { title: "Module 1: Python for Data Science", desc: "NumPy, Pandas, Matplotlib, and data manipulation" },
  { title: "Module 2: Exploratory Data Analysis", desc: "Statistical summaries, visualizations, and feature correlation" },
  { title: "Module 3: Supervised Learning", desc: "Linear/logistic regression, decision trees, SVM, and KNN" },
  { title: "Module 4: Model Evaluation", desc: "Train-test split, cross-validation, metrics, and bias-variance tradeoff" },
  { title: "Module 5: Ensemble Methods", desc: "Random forests, gradient boosting, XGBoost, and stacking" },
  { title: "Module 6: Unsupervised Learning", desc: "K-Means, hierarchical clustering, PCA, and anomaly detection" },
  { title: "Module 7: Neural Networks Intro", desc: "Perceptrons, feedforward networks, and backpropagation basics" },
  { title: "Module 8: ML Pipelines & Deployment", desc: "Scikit-learn pipelines, Flask APIs, and model serialization" },
  { title: "Module 9: Capstone Project", desc: "End-to-end ML project from problem definition to deployment" },
];

export default function Curriculum() {
  const [openModule, setOpenModule] = useState<number | null>(0);

  return (
    <section id="curriculum">
      <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">Curriculum</h2>
      <div className="space-y-4">
        {curriculum.map((module, idx) => (
          <div 
            key={idx} 
            className={`bg-white rounded-2xl border transition-all overflow-hidden ${openModule === idx ? 'border-blue-200 shadow-md ring-1 ring-blue-100' : 'border-slate-200 shadow-sm hover:border-slate-300'}`}
          >
            <button 
              onClick={() => setOpenModule(openModule === idx ? null : idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <span className={`font-semibold text-lg ${openModule === idx ? 'text-blue-700' : 'text-slate-900'}`}>
                {module.title}
              </span>
              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openModule === idx ? 'rotate-180 text-blue-500' : ''}`} />
            </button>
            <AnimatePresence>
              {openModule === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-lg leading-relaxed border-t border-slate-50 mt-1">
                    {module.desc}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
