/**
 * FacilitySection Component
 * 
 * Displays a facility section with description and items
 */

import React from 'react';
import { BodyText } from '@/src/shared/components/typography';
import { FacilitySectionProps } from '../../types';

export const FacilitySection: React.FC<FacilitySectionProps> = ({
  number,
  title,
  description,
  items,
}) => {
  return (
    <div className="space-y-4">
      <BodyText><strong>{number}. {title}</strong></BodyText>
      <div className="pl-4 space-y-3">
        <BodyText>{description}</BodyText>
        <ul className="list-disc pl-6 space-y-2">
          {items.map((item, index) => (
            <li key={index}><BodyText>{item}</BodyText></li>
          ))}
        </ul>
      </div>
    </div>
  );
};
