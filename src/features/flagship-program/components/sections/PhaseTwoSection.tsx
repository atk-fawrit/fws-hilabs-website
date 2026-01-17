/**
 * Phase Two Section
 * 
 * Displays supervised deployment phase (Months 10-12)
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

export const PhaseTwoSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <H2 className="text-4xl font-bold text-primary mb-3">Phase II: Supervised Deployment</H2>
        <p className="text-xl text-secondary">Months 10-12: Real-world engineering deployment</p>
      </div>
      
      <div className="bg-accent/5 p-6 border-l-[4px] border-accent">
        <BodyText className="text-lg leading-relaxed text-primary mb-6">
          Phase II operates as supervised deployment within partner organizations or client projects. 
          Participants work as junior engineers under direct supervision while maintaining 
          accountability to HI Labs evaluation protocols.
        </BodyText>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Supervision Model Card */}
        <div className="bg-white border border-secondary/20 p-6 shadow-sm">
          <H3 className="text-2xl font-bold text-primary mb-4 flex items-center">
            <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">1</span>
            SUPERVISION MODEL
          </H3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">•</span>
              <BodyText className="text-base leading-relaxed text-primary">Daily supervision by designated technical lead at deployment site</BodyText>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">•</span>
              <BodyText className="text-base leading-relaxed text-primary">Weekly evaluation reports submitted to HI Labs oversight</BodyText>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">•</span>
              <BodyText className="text-base leading-relaxed text-primary">Bi-weekly review sessions with HI Labs instructional staff</BodyText>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">•</span>
              <BodyText className="text-base leading-relaxed text-primary">Monthly performance assessment with elimination review</BodyText>
            </li>
          </ul>
        </div>
        
        {/* Deployment Constraints Card */}
        <div className="bg-white border border-secondary/20 p-6 shadow-sm">
          <H3 className="text-2xl font-bold text-primary mb-4 flex items-center">
            <span className="bg-accent text-white w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3">2</span>
            DEPLOYMENT CONSTRAINTS
          </H3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">•</span>
              <BodyText className="text-base leading-relaxed text-primary">Minimum 40 hours per week at deployment site</BodyText>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">•</span>
              <BodyText className="text-base leading-relaxed text-primary">Adherence to partner organization protocols and standards</BodyText>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">•</span>
              <BodyText className="text-base leading-relaxed text-primary">Completion of assigned projects within specified timelines</BodyText>
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-3 mt-1">•</span>
              <BodyText className="text-base leading-relaxed text-primary">Professional conduct and communication standards</BodyText>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
