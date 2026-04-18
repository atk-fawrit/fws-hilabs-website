'use client';

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const whoIsThisFor = [
  "Aspiring backend or full-stack developers",
  "Frontend developers looking to broaden their skill set",
  "Computer science graduates entering the job market",
  "Professionals pivoting into software engineering",
];

export default function WhoThisCourseIsFor() {
  return (
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <CheckCircle2 className="w-6 h-6 text-black" />
        Who This Course Is For
      </h3>
      <ul className="space-y-4">
        {whoIsThisFor.map((item, idx) => (
          <li key={idx} className="flex gap-3 text-slate-600 items-start">
            <div className="mt-1 w-2 h-2 rounded-full bg-black shrink-0"></div>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
