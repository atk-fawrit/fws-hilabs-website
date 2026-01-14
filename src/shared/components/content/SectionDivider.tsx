/**
 * SectionDivider Component
 * 
 * Horizontal rule divider component that follows institutional design principles.
 * Provides clean section separation without card-style containers.
 */

import React from 'react';
import { colors, spacing } from '@/src/shared/lib/design-system';

interface SectionDividerProps {
  className?: string;
  spacing?: 'tight' | 'normal' | 'loose';
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  className = '',
  spacing: spacingVariant = 'normal',
}) => {
  const getSpacing = () => {
    switch (spacingVariant) {
      case 'tight':
        return spacing.element;
      case 'loose':
        return spacing.loose;
      default:
        return spacing.subsection;
    }
  };

  return (
    <hr 
      className={`w-full border-0 ${className}`}
      style={{
        height: '1px',
        backgroundColor: colors.secondary,
        margin: `${getSpacing()} 0`,
      }}
    />
  );
};

export default SectionDivider;