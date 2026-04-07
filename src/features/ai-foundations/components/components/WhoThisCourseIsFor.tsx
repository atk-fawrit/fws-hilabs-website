'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const whoIsThisFor = [
  "Business leaders and managers exploring AI adoption",
  "Non-technical professionals working alongside AI teams",
  "Students considering a career in AI or data science",
  "Entrepreneurs evaluating AI for their products or services",
];

export default function WhoThisCourseIsFor() {
  return (
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <CheckCircle2 className="w-6 h-6 text-blue-600" />
        Who This Course Is For
      </h3>
      <ul className="space-y-4">
        {whoIsThisFor.map((item, idx) => (
          <li key={idx} className="flex gap-3 text-slate-600 items-start">
            <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
