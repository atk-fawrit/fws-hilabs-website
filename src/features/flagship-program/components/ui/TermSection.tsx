/**
 * TermSection Component
 * 
 * Displays a program term with duration, constraints, and elimination criteria
 */

import React from 'react';
import { H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { TermSectionProps } from '../../types';

export const TermSection: React.FC<TermSectionProps> = ({
  termNumber,
  title,
  duration,
  eliminationGate,
  constraints,
  eliminationCriteria,
}) => {
  return (
    <div className="space-y-6">
      <H3 className="font-mono text-2xl">{termNumber}. {title}</H3>
      <div className="pl-8 space-y-6">
        <BodyText className="text-base">
          <strong>Duration:</strong> {duration} | <strong>Elimination Gate:</strong> {eliminationGate}
        </BodyText>
        
        <div className="space-y-4">
          <BodyText className="font-medium text-lg">Core Constraints:</BodyText>
          <ul className="list-disc pl-6 space-y-3">
            {constraints.map((constraint, index) => (
              <li key={index}><BodyText className="text-base leading-relaxed">{constraint}</BodyText></li>
            ))}
          </ul>
        </div>
        
        <div className="bg-secondary/5 p-6 border-l-[3px] border-secondary">
          <BodyText className="font-mono text-sm leading-relaxed">
            ELIMINATION CRITERIA: {eliminationCriteria}
          </BodyText>
        </div>
      </div>
    </div>
  );
};
