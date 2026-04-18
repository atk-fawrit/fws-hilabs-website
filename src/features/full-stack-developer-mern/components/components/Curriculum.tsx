'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const curriculum = [
  { title: "Module 1: Web Fundamentals", desc: "HTML, CSS, JavaScript essentials, and Git/version control" },
  { title: "Module 2: React Frontend", desc: "Components, hooks, state management, routing, and API integration" },
  { title: "Module 3: Node.js & Express", desc: "Server setup, REST APIs, middleware, and routing" },
  { title: "Module 4: MongoDB & Mongoose", desc: "Document model, CRUD operations, relationships, and aggregation" },
  { title: "Module 5: Authentication & Security", desc: "JWT, bcrypt, protected routes, and role-based access control" },
  { title: "Module 6: Full-Stack Integration", desc: "Connecting frontend to backend, CORS, and environment management" },
  { title: "Module 7: DevOps & Deployment", desc: "Docker, CI/CD pipelines, and deployment to AWS/Heroku/Vercel" },
  { title: "Module 8: Agile & Team Workflows", desc: "Scrum, GitHub collaboration, code reviews, and task management" },
  { title: "Module 9: Capstone Project", desc: "Build, test, and deploy a full-stack MERN web application" },
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
