/**
 * InstitutionalDocument Component
 * 
 * Displays institutional document headers with accent styling
 */

import React from 'react';
import { H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

interface InstitutionalDocumentProps {
  title: string;
  description: string;
  className?: string;
}

export const InstitutionalDocument: React.FC<InstitutionalDocumentProps> = ({
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`bg-accent/10 border-l-4 border-accent p-6 space-y-4 ${className}`}>
      <H3 className="text-accent font-mono">{title}</H3>
      <BodyText className="font-mono text-sm">
        {description}
      </BodyText>
    </div>
  );
};
