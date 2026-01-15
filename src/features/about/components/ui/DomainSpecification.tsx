/**
 * DomainSpecification Component
 * 
 * Displays a domain with description and accountability statement
 */

import React from 'react';
import { BodyText } from '@/src/shared/components/typography';
import { DomainSpecificationProps } from '../../types';

export const DomainSpecification: React.FC<DomainSpecificationProps> = ({
  number,
  title,
  description,
  accountability,
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
            ACCOUNTABILITY: {accountability}
          </BodyText>
        </div>
      </div>
    </div>
  );
};
