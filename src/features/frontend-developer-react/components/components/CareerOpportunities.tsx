'use client';

import React from 'react';
import { Briefcase } from 'lucide-react';

const careers = [
  "Frontend Developer",
  "React Developer",
  "UI Engineer",
  "Full-Stack Developer",
  "JavaScript Developer",
  "Web Application Developer",
];

export default function CareerOpportunities() {
  return (
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Briefcase className="w-6 h-6 text-purple-600" />
        Career Opportunities
      </h3>
      <div className="flex flex-wrap gap-2">
        {careers.map((career, idx) => (
          <span 
            key={idx} 
            className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200 hover:bg-slate-200 transition-colors"
          >
            {career}
          </span>
        ))}
      </div>
    </div>
  );
}
