/**
 * InteractiveCard Component
 * 
 * Modern clean card component with minimal styling
 * Follows document-focused design principles
 */

import React from 'react';
import { H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { InteractiveCardProps } from '@/src/shared/types/content.types';

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  title,
  colorTheme = 'accent',
  isCollapsible = false,
  isExpanded = false,
  onToggle,
  children,
  className = '',
  description,
  footer,
  items,
}) => {
  const themeColors = {
    accent: {
      border: 'border-accent',
      textColor: 'text-primary',
      footerColor: 'text-accent',
    },
    warning: {
      border: 'border-warning',
      textColor: 'text-primary',
      footerColor: 'text-warning',
    },
    primary: {
      border: 'border-primary',
      textColor: 'text-primary',
      footerColor: 'text-primary',
    },
  };

  const theme = themeColors[colorTheme];

  return (
    <div className={`
      bg-accent/5 border-l-4 ${theme.border} p-8
      ${className}
    `}>
      <div 
        className={`${isCollapsible ? 'cursor-pointer' : ''}`}
        onClick={isCollapsible ? onToggle : undefined}
      >
        <div className="flex items-center justify-between">
          <H3 className={`text-sm uppercase tracking-wide ${theme.footerColor} mb-6 font-medium`}>
            {title}
          </H3>
          {isCollapsible && (
            <span className="text-primary/40 text-2xl font-light">
              {isExpanded ? '−' : '+'}
            </span>
          )}
        </div>

        {/* Description */}
        {description && !isCollapsible && (
          <BodyText className="text-primary/80 leading-relaxed mb-4">
            {description}
          </BodyText>
        )}

        {/* Items list */}
        {items && !isCollapsible && (
          <div className="space-y-3">
            {items.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-primary/40 text-xl font-light mt-0.5">
                  {colorTheme === 'warning' ? '×' : '•'}
                </span>
                <BodyText className="text-primary/80">
                  {item}
                </BodyText>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Collapsible content */}
      {(!isCollapsible || isExpanded) && children && (
        <div className="border-t border-primary/10 pt-4 mt-4">
          {children}
        </div>
      )}

      {/* Footer */}
      {footer && (
        <BodyText className={`mt-6 text-sm ${theme.footerColor} italic`}>
          {footer}
        </BodyText>
      )}
    </div>
  );
};