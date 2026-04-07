'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const curriculum = [
  { title: "Module 1: DevOps Foundations", desc: "DevOps culture, SDLC, Agile integration, and toolchain overview" },
  { title: "Module 2: Version Control & Collaboration", desc: "Git workflows, branching strategies, pull requests, and code reviews" },
  { title: "Module 3: Continuous Integration", desc: "CI concepts, GitHub Actions, automated testing pipelines" },
  { title: "Module 4: Docker & Containers", desc: "Dockerfiles, images, containers, volumes, and Docker Compose" },
  { title: "Module 5: Kubernetes", desc: "Pods, deployments, services, ConfigMaps, and cluster management" },
  { title: "Module 6: Cloud with AWS", desc: "EC2, S3, RDS, IAM, and managed services overview" },
  { title: "Module 7: Continuous Delivery & Deployment", desc: "CD pipelines, blue-green deployments, rollback strategies" },
  { title: "Module 8: Monitoring & Observability", desc: "Logs, metrics, Prometheus, Grafana, and alerting" },
  { title: "Module 9: Infrastructure as Code", desc: "Terraform fundamentals, declarative infrastructure, and automation" },
  { title: "Module 10: Capstone Project", desc: "Build and deploy a fully automated CI/CD pipeline on the cloud" },
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
