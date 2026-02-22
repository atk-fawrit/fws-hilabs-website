/**
 * Phase One Section
 * 
 * Displays the training phase (Months 1-6) with premium design
 */

import React from 'react';
import Image from 'next/image';

const terms = [
  {
    stepNumber: '01',
    title: 'Foundation (No-AI)',
    subtitle: 'Mastering Data Structures, Algorithms, and System Design',
    duration: '2 months',
    description: 'Build your "Mental Muscle" with core computer science fundamentals. Master the foundational concepts that all great engineers know.',
  },
  {
    stepNumber: '02',
    title: 'Advanced (No-AI)',
    subtitle: 'Deep dive into the MERN Stack and PostgreSQL',
    duration: '2 months',
    description: 'Level up with production-ready full-stack development. Learn MongoDB, Express, React, Node.js, and PostgreSQL through real-world projects.',
  },
  {
    stepNumber: '03',
    title: 'Application (AI-Augmented)',
    subtitle: 'Vibe Coding, Agentic workflows, and the Live Industry Project',
    duration: '2 months',
    description: 'Apply AI tools naturally in development workflows. Work on a live industry project, combining classical engineering with AI-native practices.',
  },
];

const evaluationPoints = [
  {
    title: 'Bi-Monthly Sprints',
    description: 'Each term is split into two 1-month parts, ending with a comprehensive class test.'
  },
  {
    title: 'Merit-Based Leveling',
    description: 'We apply a Gaussian (Normal) Distribution to categorize performance into 5 levels. This ensures transparency in skill velocity and helps match you with the right internship.'
  },
  {
    title: 'Graded Excellence',
    description: 'Both individual coding challenges and group projects are graded to measure technical proficiency and collaborative ability.'
  },
];

export const PhaseOneSection: React.FC = () => {
  return (
    <div className="w-full space-y-12">
      {/* Hero Image with Title Overlay */}
      <div className="relative h-48 sm:h-64 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden">
        <Image
          src="/images/phase-one-foundation.jpg"
          alt="Phase I Training Phase"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-12">
          <div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-2 sm:mb-4 text-white tracking-tight">
              Phase I: The Training Phase
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-light">
              Months 1-6: High-Intensity Mastery & Performance Tracking
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl">
        <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
          This phase is divided into three rigorous terms designed to build your "Mental Muscle" before introducing AI augmentation. Your progress is documented through our Evaluation & Leveling System to ensure you are industry-ready.
        </p>
      </div>
      
      {/* Terms List */}
      <div className="space-y-10 sm:space-y-16 px-0 sm:px-4">
        {terms.map((term) => (
          <div key={term.stepNumber} className="relative pl-14 sm:pl-20">
            {/* Vertical Line */}
            <div className="absolute left-5 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-blue-400 to-transparent"></div>
            
            {/* Term Number Circle */}
            <div className="absolute left-0 top-0 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-mono font-bold text-sm sm:text-xl">{term.stepNumber}</span>
            </div>
            
            {/* Term Content */}
            <div className="space-y-4">
              {/* Term Header */}
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-1 tracking-tight">
                  {term.title}
                </h3>
                <p className="text-lg text-gray-600 font-light mb-3">
                  {term.subtitle}
                </p>
                <div className="text-sm sm:text-base text-gray-500 font-medium">
                  {term.duration}
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-700 leading-relaxed font-light">
                {term.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Evaluation System Section */}
      <div className="mt-16 pt-12 border-t border-gray-200">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 mb-8 tracking-tight">
          The Evaluation System
        </h3>
        <p className="text-lg text-gray-700 leading-relaxed font-light mb-8">
          To maintain elite standards, we utilize a data-driven assessment framework:
        </p>
        
        <div className="space-y-6">
          {evaluationPoints.map((point, idx) => (
            <div key={idx} className="bg-gradient-to-r from-blue-50 to-blue-50/50 border-l-4 border-blue-600 rounded-r-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {point.title}
              </h4>
              <p className="text-gray-700 leading-relaxed font-light">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
