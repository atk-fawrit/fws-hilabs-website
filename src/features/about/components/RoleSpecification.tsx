/**
 * RoleSpecification Component
 * 
 * Displays faculty role specifications with responsibilities and qualifications
 */

import React from 'react';
import { H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

interface RoleSpecificationProps {
  title: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  note?: {
    type: 'authority' | 'scope';
    content: string;
  };
  className?: string;
}

export const RoleSpecification: React.FC<RoleSpecificationProps> = ({
  title,
  description,
  responsibilities,
  qualifications,
  note,
  className = '',
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <H3 className="font-mono">{title}</H3>
      <div className="pl-6 space-y-4">
        <BodyText>
          {description}
        </BodyText>
        
        <div className="space-y-3">
          <BodyText><strong>Responsibilities:</strong></BodyText>
          <ul className="list-disc pl-6 space-y-2">
            {responsibilities.map((item, index) => (
              <li key={index}><BodyText>{item}</BodyText></li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-3">
          <BodyText><strong>Qualifications:</strong></BodyText>
          <ul className="list-disc pl-6 space-y-2">
            {qualifications.map((item, index) => (
              <li key={index}><BodyText>{item}</BodyText></li>
            ))}
          </ul>
        </div>
        
        {note && (
          <div className={note.type === 'authority' 
            ? 'bg-accent/10 border-l-4 border-accent p-4 space-y-3'
            : 'bg-gray-50 p-4 border-l-2 border-secondary'
          }>
            <BodyText className="font-mono text-sm">
              {note.content}
            </BodyText>
          </div>
        )}
      </div>
    </div>
  );
};
