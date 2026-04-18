'use client';

import { motion } from 'framer-motion';
import { 
  Code2,
  Zap,
  Layers,
  Globe,
  Lock,
  Gauge,
} from 'lucide-react';

const learningOutcomes = [
  { text: "Build responsive, accessible web interfaces using HTML5 and CSS3", icon: <Code2 className="w-6 h-6 text-black" /> },
  { text: "Write modern JavaScript (ES6+) for interactive web functionality", icon: <Zap className="w-6 h-6 text-black" /> },
  { text: "Develop scalable React applications using functional components and hooks", icon: <Layers className="w-6 h-6 text-black" /> },
  { text: "Manage global application state using Redux or Context API", icon: <Globe className="w-6 h-6 text-black" /> },
  { text: "Integrate RESTful APIs and handle asynchronous data in React", icon: <Lock className="w-6 h-6 text-black" /> },
  { text: "Deploy and optimize frontend applications for production", icon: <Gauge className="w-6 h-6 text-black" /> },
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
