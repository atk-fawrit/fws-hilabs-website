/**
 * SectionDivider Component
 * 
 * Horizontal rule divider component that follows institutional design principles.
 * Provides clean section separation without card-style containers.
 */

import React from 'react';
import { SectionDividerProps } from '@/src/shared/types';

export const SectionDivider: React.FC<SectionDividerProps> = ({
  className = '',
  spacing: spacingVariant = 'normal',
}) => {
  const getSpacingClass = () => {
    switch (spacingVariant) {
      case 'tight':
        return 'my-element';
      case 'loose':
        return 'my-loose';
      default:
        return 'my-subsection';
    }
  };

  return (
    <hr 
      className={`w-full border-0 h-px bg-secondary ${getSpacingClass()} ${className}`}
    />
  );
};

export default SectionDivider;