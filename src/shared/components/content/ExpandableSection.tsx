/**
 * ExpandableSection Component
 * 
 * Enhanced reusable expandable accordion section with modern styling and smooth animations
 * Used across multiple features for expandable content areas
 */

import React from 'react';
import { H3, BodyText } from '@/src/shared/components/typography';
import { ExpandableSectionProps } from '@/src/shared/types';

export const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  id,
  number,
  title,
  description,
  expandedId,
  onToggle,
  children,
  className = ''
}) => {
  const isExpanded = expandedId === id;
  
  return (
    <div className={`group border border-primary/10 hover:border-primary/20 transition-all duration-300 ${className}`}>
      <button
        onClick={() => onToggle(id)}
        className="w-full text-left p-6 hover:bg-gradient-to-r hover:from-accent/5 hover:to-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/20"
      >
        <div className="flex items-start gap-6">
          {number && (
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 flex items-center justify-center group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-300">
                <span className="text-sm font-mono font-medium text-accent">
                  {number}
                </span>
              </div>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <H3 className="text-xl font-light text-primary mb-3 group-hover:text-accent transition-colors duration-300">
              {title}
            </H3>
            <BodyText className="text-primary/70 leading-relaxed text-sm">
              {description}
            </BodyText>
          </div>
          <div className="flex-shrink-0 ml-4">
            <div className={`w-8 h-8 flex items-center justify-center transition-all duration-300 ${
              isExpanded 
                ? 'bg-accent text-white rotate-180' 
                : 'bg-primary/5 text-primary/40 group-hover:bg-accent/10 group-hover:text-accent'
            }`}>
              <svg 
                className="w-4 h-4 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
        isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="border-t border-primary/10 bg-gradient-to-r from-accent/3 to-transparent">
          <div className="p-6 pl-18">
            <div className="w-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};