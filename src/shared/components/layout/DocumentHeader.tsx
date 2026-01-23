/**
 * DocumentHeader Component
 * 
 * Standardized document-style header for pages with formal documentation layout
 * Used in employers and outcomes pages for consistent presentation
 */

import React from 'react';
import { H1, BodyText } from '@/src/shared/components/typography';
import { DocumentHeaderProps } from '@/src/shared/types';

export const DocumentHeader: React.FC<DocumentHeaderProps> = ({
  title,
  description,
  subtitle,
  className = ''
}) => {
  return (
    <header className={`border-b border-primary/20 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="max-w-4xl">
          {subtitle && (
            <div className="text-sm uppercase tracking-wide text-primary/60 mb-4 font-medium">
              {subtitle}
            </div>
          )}
          <H1 className="text-4xl md:text-5xl font-light text-primary mb-6">
            {title}
          </H1>
          {typeof description === 'string' ? (
            <BodyText className="text-lg text-primary/80 leading-relaxed">
              {description}
            </BodyText>
          ) : (
            description
          )}
        </div>
      </div>
    </header>
  );
};