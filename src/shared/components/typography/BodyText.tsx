/**
 * BodyText Component
 * 
 * Modern body text component with high contrast colors and proper responsive scaling.
 * Updated for contemporary design with crisp typography and better readability.
 */

import React from 'react';

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
        classes = 'text-xs md:text-sm font-medium text-gray-600 leading-tight';
        break;
      case 'secondary':
        classes = 'text-sm md:text-base text-gray-500 leading-relaxed';
        break;
      default:
        classes = 'text-sm md:text-base text-gray-600 leading-relaxed';
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