/**
 * Phase Three Section – Implementation Stage
 * White background, two-column layout: bullet points left, image card right.
 */

import React from 'react';
import Image from 'next/image';

const implementationPoints = [
  {
    title: 'Vibe Coding / Coding with AI',
    description: 'Working with AI-assisted tools to accelerate productivity, debug faster, and solve problems more effectively in real development workflows.',
  },
  {
    title: 'Live Projects',
    description: 'Building real-world applications modelled on industry use cases — from scoping requirements to shipping a working product.',
  },
  {
    title: 'Implementation of Concepts',
    description: 'Applying everything covered in previous terms: data structures, system design, APIs, and deployment — in a single cohesive project.',
  },
  {
    title: 'Collaborative Development',
    description: 'Working within a structured team workflow using version control, code reviews, and task management similar to professional engineering teams.',
  },
  {
    title: 'Industry-Oriented Practices',
    description: 'Writing clean, scalable, and production-level code with attention to readability, performance, and maintainability standards.',
  },
];

export const PhaseThreeSection: React.FC = () => {
  return (
    <div className="w-full bg-white py-14 sm:py-18 md:py-24 rounded-2xl border border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* LEFT – text content */}
          <div className="flex-1 min-w-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              <span className="text-xs font-semibold tracking-widest uppercase text-blue-600">Term 3 · 2 Months</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-2 leading-tight">
              Implementation
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                Stage
              </span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg font-light mb-8 leading-relaxed">
              Where theory meets production — students build, ship, and collaborate on real-world systems.
            </p>

            {/* Bullet points */}
            <ul className="space-y-5">
              {implementationPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  {/* Bullet */}
                  <div className="flex-shrink-0 mt-1.5 w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  </div>
                  {/* Text */}
                  <div>
                    <span className="font-semibold text-slate-900">{point.title}</span>
                    <span className="text-slate-700 font-normal"> — {point.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT – image card */}
          <div className="w-full lg:w-[420px] flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              {/* Image */}
              <div className="relative h-64 sm:h-80 lg:h-[420px]">
                <Image
                  src="/images/phase3card.png"
                  alt="Implementation Stage"
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay at bottom for the caption */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>

              {/* Caption inside card */}
              <div className="absolute bottom-0 inset-x-0 p-5">
                <p className="text-white font-semibold text-base leading-snug">
                  Application Phase
                </p>
                <p className="text-white/70 text-sm font-light mt-0.5">
                  2 Months · Term 3
                </p>
              </div>

              {/* Top-right badge on image */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-sm">
                <span className="text-xs font-bold text-blue-600 tracking-wide uppercase">Live Projects</span>
              </div>
            </div>

            {/* Quote below card */}
            <div className="mt-5 px-5 py-4 rounded-xl bg-gray-900 shadow-md">
              <p className="text-white/90 text-sm italic leading-relaxed font-light">
                &ldquo;The final term is where engineers are made — not taught.&rdquo;
              </p>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-5 h-px bg-white/40"></div>
                <span className="text-white/60 text-xs tracking-widest uppercase">HI Labs</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
