/**
 * Internship Section – Internship & Career Path
 * Landscape image card on top, text content below inside the same card.
 */

import React from 'react';
import Image from 'next/image';

const internshipPoints = [
  { title: 'Guaranteed Internship', description: 'Placement in partnered startups upon program completion.' },
  { title: 'Real Work Experience', description: 'Work on live products and real codebases from day one.' },
  { title: 'Industry Exposure', description: 'Collaborate in a professional engineering environment.' },
  { title: 'Skill-Based Evaluation', description: 'Performance tracked on actual contributions, not exams.' },
];

const careerPoints = [
  { title: 'Full-Time Job Opportunity', description: 'Top performers receive permanent roles at partner companies.' },
  { title: 'Extended Company Network', description: 'Opportunities beyond partnered startups across the industry.' },
  { title: 'Career Growth Path', description: 'Transition from learner to working developer with a clear track.' },
  { title: 'Mentored Progression', description: 'Guided support throughout your journey into the workforce.' },
];

export const InternshipSection: React.FC = () => {
  return (
    <div className="w-full bg-white py-14 sm:py-18 md:py-24 rounded-2xl border border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-600">Post Program · Career Phase</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-2 leading-tight">
          Internship &amp;
          <span className="inline ml-3 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-500">
            Career Path
          </span>
        </h2>
        <p className="text-slate-500 text-base sm:text-lg font-light mb-10 leading-relaxed">
          From learning to full-time opportunity — a structured path into the industry.
        </p>

        {/* Main card */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-slate-200 ring-1 ring-black/5">

          {/* Landscape image — fills full width */}
          <div className="relative w-full aspect-[16/7]">
            <Image
              src="/images/internship1.png"
              alt="Internship & Career Path"
              fill
              className="object-cover object-center"
            />
            {/* Bottom fade into content area */}
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            {/* Top-right badge */}
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm">
              <span className="text-xs font-bold text-emerald-600 tracking-wide uppercase">HI Labs · Placement</span>
            </div>
          </div>

          {/* Text content below image */}
          <div className="bg-white px-6 sm:px-8 md:px-10 py-8 grid grid-cols-1 sm:grid-cols-2 gap-8">

            {/* Group 1 – Internship Phase */}
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Internship Phase</p>
              <ul className="space-y-3.5">
                {internshipPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1.5 w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 text-sm">{point.title}</span>
                      <span className="text-slate-500 font-light text-sm"> — {point.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Group 2 – Career Opportunity */}
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Career Opportunity</p>
              <ul className="space-y-3.5">
                {careerPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1.5 w-4 h-4 rounded-full bg-teal-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-900 text-sm">{point.title}</span>
                      <span className="text-slate-500 font-light text-sm"> — {point.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Quote footer strip */}
          <div className="px-6 sm:px-8 md:px-10 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center gap-3">
            <div className="w-5 h-px bg-white/40"></div>
            <p className="text-white/90 text-sm italic font-light">
              &ldquo;Beyond training — Hi-Labs shapes professionals.&rdquo;
            </p>
            <span className="ml-auto text-white/60 text-xs tracking-widest uppercase hidden sm:block">HI Labs</span>
          </div>

        </div>
      </div>
    </div>
  );
};
