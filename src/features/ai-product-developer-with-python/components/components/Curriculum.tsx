'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const curriculum = [
  { title: "Module 1: Python for AI Development", desc: "Python refresher, APIs, environment setup, and async patterns" },
  { title: "Module 2: LLMs & Generative AI", desc: "How LLMs work, GPT models, tokens, and inference fundamentals" },
  { title: "Module 3: Prompt Engineering", desc: "Zero-shot, few-shot, chain-of-thought, and structured prompting" },
  { title: "Module 4: AI APIs & Integrations", desc: "OpenAI API, Claude API, function calling, and tool use" },
  { title: "Module 5: LangChain & Orchestration", desc: "Chains, agents, memory, tools, and LangGraph workflows" },
  { title: "Module 6: Vector Databases & RAG", desc: "Embeddings, semantic search, Pinecone, and retrieval-augmented generation" },
  { title: "Module 7: Building AI Products", desc: "Product architecture, UX considerations, and iterative AI design" },
  { title: "Module 8: Responsible AI & Safety", desc: "Hallucinations, guardrails, content moderation, and compliance" },
  { title: "Module 9: Deployment & Scaling", desc: "FastAPI, containerization, monitoring, and cloud deployment" },
  { title: "Module 10: Capstone Project", desc: "Build and launch a complete AI-powered product" },
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
            className={`bg-white rounded-2xl border transition-all overflow-hidden ${openModule === idx ? 'border-slate-300 shadow-md ring-1 ring-slate-100' : 'border-slate-200 shadow-sm hover:border-slate-300'}`}
          >
            <button 
              onClick={() => setOpenModule(openModule === idx ? null : idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
            >
              <span className={`font-semibold text-lg ${openModule === idx ? 'text-slate-900' : 'text-slate-900'}`}>
                {module.title}
              </span>
              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openModule === idx ? 'rotate-180' : ''}`} />
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
