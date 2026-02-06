/**
 * Evaluation System Section
 * 
 * Displays evaluation protocols, elimination triggers, and process with premium design
 */

import React from 'react';
import Image from 'next/image';

export const EvaluationSystemSection: React.FC = () => {
  const evaluationProtocols = [
    "Weekly technical assessments with documented scoring",
    "Monthly comprehensive reviews with elimination consideration", 
    "Peer evaluation components with individual accountability",
    "Project deliverable assessment against industry standards"
  ];

  const eliminationTriggers = [
    "Performance below minimum threshold for two consecutive evaluations",
    "Attendance violations or failure to meet time commitments",
    "Inability to collaborate effectively in team environments",
    "Failure to complete required projects within specified timelines",
    "Violation of professional conduct standards"
  ];

  const eliminationProcess = [
    "Elimination decisions are made by instructional committee review",
    "Participants receive written notification with specific performance deficiencies",
    "No appeals process is available",
    "Eliminated participants forfeit all program benefits and are not eligible for re-admission"
  ];

  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Content - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-sans text-4xl md:text-5xl font-light mb-4 text-gray-900 tracking-tight">
                Evaluation and Elimination System
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                Systematic evaluation protocols with documented criteria, elimination thresholds, and performance measurement frameworks ensuring consistent assessment
              </p>
            </div>

            {/* Evaluation Protocols */}
            <div className="space-y-4">
              <h3 className="text-2xl font-light text-gray-900 tracking-tight">Evaluation Protocols</h3>
              <ul className="space-y-3">
                {evaluationProtocols.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700 leading-relaxed font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Elimination Triggers */}
            <div className="space-y-4">
              <h3 className="text-2xl font-light text-gray-900 tracking-tight">Elimination Triggers</h3>
              <ul className="space-y-3">
                {eliminationTriggers.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700 leading-relaxed font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Elimination Process */}
            <div className="space-y-4">
              <h3 className="text-2xl font-light text-gray-900 tracking-tight">Elimination Process</h3>
              <ul className="space-y-3">
                {eliminationProcess.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 mt-2.5 bg-red-600 rounded-full"></div>
                    <span className="text-gray-700 leading-relaxed font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image - 1 column */}
          <div className="lg:col-span-1">
            <div className="relative h-[500px] lg:h-full lg:min-h-[700px] rounded-xl overflow-hidden sticky top-24">
              <Image
                src="/images/evaluation-system.jpg"
                alt="Evaluation and Elimination System"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
