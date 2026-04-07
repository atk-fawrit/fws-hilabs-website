'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const whoIsThisFor = [
  "Developers who want to own the full deployment lifecycle",
  "Backend engineers seeking to expand into infrastructure",
  "Teams transitioning to cloud-native development practices",
  "System administrators moving into modern DevOps roles",
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
