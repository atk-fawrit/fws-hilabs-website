/**
 * ProcessCard Component
 * 
 * Modern reusable card for step-by-step processes, terms, or phases
 * Enhanced version of TermCard with better visual design and flexibility
 */

import React from 'react';
import { H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { ProcessCardProps } from '@/src/shared/types/content.types';

export const ProcessCard: React.FC<ProcessCardProps> = ({
  stepNumber,
  title,
  duration,
  subtitle,
  sections,
  warningSection,
  className = '',
}) => {
  return (
    <div className={`
      bg-gradient-to-br from-white to-gray-50/50
      border-2 border-secondary/20 hover:border-accent/30
      shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-accent/10
      transition-all duration-300 ease-out
      hover:-translate-y-2 hover:scale-[1.02]
      backdrop-blur-sm
      ${className}
    `}>
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-br from-accent to-accent/80 text-white text-lg font-bold px-4 py-2 shadow-lg">
              {stepNumber}
            </div>
            {duration && (
              <div className="bg-secondary/10 text-secondary text-sm font-medium px-3 py-1">
                {duration}
              </div>
            )}
          </div>
          
          <H3 className="text-xl font-bold text-primary mb-3 tracking-tight leading-tight">
            {title}
          </H3>
          
          {subtitle && (
            <BodyText className="text-sm text-secondary leading-relaxed">
              {subtitle}
            </BodyText>
          )}
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div key={index}>
              <BodyText className="font-bold text-primary mb-3 text-sm uppercase tracking-wide">
                {section.title}
              </BodyText>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent mt-2 flex-shrink-0"></div>
                    <BodyText className="text-sm leading-relaxed text-primary flex-1">
                      {item}
                    </BodyText>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Warning Section */}
        {warningSection && (
          <div className="mt-6 bg-gradient-to-r from-warning/5 to-warning/10 border-l-4 border-warning p-4">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-warning text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01" />
                </svg>
              </div>
              <div>
                <BodyText className="font-bold text-warning text-sm mb-2 uppercase tracking-wide">
                  {warningSection.title}
                </BodyText>
                <BodyText className="text-xs leading-relaxed text-primary">
                  {warningSection.content}
                </BodyText>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};