/**
 * GovernanceItem Component
 * 
 * Displays governance mechanisms with descriptions and standards
 */

import React from 'react';
import { BodyText } from '@/src/shared/components/typography';
import { GovernanceItemProps } from '../../types';

export const GovernanceItem: React.FC<GovernanceItemProps> = ({
  number,
  title,
  description,
  standard,
  className = '',
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <BodyText><strong>{number}. {title}</strong></BodyText>
      <div className="pl-4 space-y-3">
        <BodyText>
          {description}
        </BodyText>
        <div className="bg-gray-50 p-4 border-l-2 border-secondary">
          <BodyText className="font-mono text-sm">
            {standard}
          </BodyText>
        </div>
      </div>
    </div>
  );
};
