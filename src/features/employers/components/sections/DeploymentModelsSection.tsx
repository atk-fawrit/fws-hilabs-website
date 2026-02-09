/**
 * Deployment Models Section
 * Premium card-based design with icons
 */

'use client';

import React from 'react';

export const DeploymentModelsSection: React.FC = () => {
  const models = [
    {
      number: '01',
      title: 'Internal Teams Model',
      description: 'Engineers are deployed directly within partner organization teams under joint supervision between HI Labs instructors and organizational technical leadership with shared performance accountability.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      number: '02',
      title: 'Partner Companies Model',
      description: 'Engineers are deployed to established partner companies with structured supervision agreements and performance tracking protocols maintained by HI Labs throughout the deployment period.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: '03',
      title: 'Client Projects Model',
      description: 'Engineers work on specific client projects under direct HI Labs supervision with client organizations providing project requirements and acceptance criteria while HI Labs maintains full supervision responsibility.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 px-8 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">
            Deployment Models
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            HI Labs operates three distinct deployment models that define the relationship structure, supervision protocols, 
            and risk allocation between HI Labs, participating engineers, and partner organizations.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-black transition-all duration-500 h-full flex flex-col">
                {/* Number Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold">{model.number}</span>
                  </div>
                  <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                    {model.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-black mb-4 leading-tight">
                  {model.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed flex-grow">
                  {model.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 pt-6 border-t-2 border-gray-100 group-hover:border-black transition-all duration-300">
                  <div className="flex items-center gap-2 text-sm font-semibold text-black">
                    <span>Learn More</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
