/**
 * PrincipleItem Component
 * 
 * Displays a numbered principle with title and description
 */

import React from 'react';
import { BodyText } from '@/src/shared/components/typography';

interface PrincipleItemProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

export const PrincipleItem: React.FC<PrincipleItemProps> = ({
  number,
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`space-y-3 ${className}`}>
      <BodyText><strong>{number}. {title}</strong></BodyText>
      <BodyText className="pl-4">
        {description}
      </BodyText>
    </div>
  );
};
