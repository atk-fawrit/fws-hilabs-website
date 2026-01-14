/**
 * BodyText Component
 * 
 * Body text component that implements proper typography hierarchy
 * and maintains institutional design consistency with responsive scaling.
 */

import React from 'react';
import { colors, typography, designUtils } from '@/src/shared/lib/design-system';

interface BodyTextProps {
  children: React.ReactNode;
  variant?: 'body' | 'metadata' | 'secondary';
  className?: string;
  as?: 'p' | 'span' | 'div';
}

export const BodyText: React.FC<BodyTextProps> = ({ 
  children, 
  variant = 'body',
  className = '',
  as: Component = 'p'
}) => {
  const getClasses = (): string => {
    let classes = '';
    
    switch (variant) {
      case 'metadata':
        classes = 'font-mono text-secondary text-xs md:text-sm leading-tight';
        break;
      case 'secondary':
        classes = 'body-responsive text-secondary';
        break;
      default:
        classes = 'body-responsive text-primary';
    }
    
    return classes;
  };

  return (
    <Component 
      className={`${getClasses()} ${className}`}
    >
      {children}
    </Component>
  );
};

export default BodyText;