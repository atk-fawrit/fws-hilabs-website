/**
 * TermCard Component
 * 
 * Card-based display for program terms
 */

import React from 'react';
import { H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { TermSectionProps } from '../../types';

export const TermCard: React.FC<TermSectionProps> = ({
  termNumber,
  title,
  duration,
  eliminationGate,
  constraints,
  eliminationCriteria,
}) => {
  return (
    <div className="bg-white border border-secondary/20 p-5 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <span className="bg-accent text-white text-sm font-bold px-3 py-1 mr-3">
            {termNumber}
          </span>
          <span className="text-sm text-secondary">{duration}</span>
        </div>
        <H3 className="text-xl font-bold text-primary mb-2">{title}</H3>
        <BodyText className="text-sm text-secondary">
          <strong>Elimination Gate:</strong> {eliminationGate}
        </BodyText>
      </div>
      
      {/* Constraints */}
      <div className="mb-4">
        <BodyText className="font-semibold text-primary mb-2">Core Constraints:</BodyText>
        <ul className="space-y-1">
          {constraints.map((constraint, index) => (
            <li key={index} className="flex items-start">
              <span className="text-accent mr-2 mt-1 text-sm">•</span>
              <BodyText className="text-sm leading-relaxed text-primary">{constraint}</BodyText>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Elimination Criteria */}
      <div className="bg-warning/5 border-l-[3px] border-warning p-3">
        <BodyText className="text-xs leading-relaxed text-primary">
          <strong className="text-warning">ELIMINATION:</strong> {eliminationCriteria}
        </BodyText>
      </div>
    </div>
  );
};