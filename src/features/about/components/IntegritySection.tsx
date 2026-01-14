/**
 * IntegritySection Component
 * 
 * Displays integrity standards with title, description, and list items
 */

import React from 'react';
import { BodyText } from '@/src/shared/components/typography';

interface IntegritySectionProps {
  number: string;
  title: string;
  description: string;
  items: string[];
  className?: string;
}

export const IntegritySection: React.FC<IntegritySectionProps> = ({
  number,
  title,
  description,
  items,
  className = '',
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <BodyText><strong>{number}. {title}</strong></BodyText>
      <div className="pl-4 space-y-3">
        <BodyText>
          {description}
        </BodyText>
        <ul className="list-disc pl-6 space-y-2">
          {items.map((item, index) => (
            <li key={index}><BodyText>{item}</BodyText></li>
          ))}
        </ul>
      </div>
    </div>
  );
};
