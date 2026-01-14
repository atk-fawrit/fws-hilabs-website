/**
 * Heading Components
 * 
 * Semantic heading components that implement the institutional typography hierarchy.
 * Ensures consistent styling and proper semantic structure with responsive scaling.
 */

import React from 'react';
import { colors, typography, designUtils } from '@/src/shared/lib/design-system';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

// H1 - Primary page headings with responsive scaling
export const H1: React.FC<HeadingProps> = ({ children, className = '', id }) => (
  <h1 
    id={id}
    className={`heading-responsive-h1 ${className}`}
  >
    {children}
  </h1>
);

// H2 - Section headings with responsive scaling
export const H2: React.FC<HeadingProps> = ({ children, className = '', id }) => (
  <h2 
    id={id}
    className={`heading-responsive-h2 ${className}`}
  >
    {children}
  </h2>
);

// H3 - Subsection headings with responsive scaling
export const H3: React.FC<HeadingProps> = ({ children, className = '', id }) => (
  <h3 
    id={id}
    className={`heading-responsive-h3 ${className}`}
  >
    {children}
  </h3>
);

// Generic Heading component with level prop
interface GenericHeadingProps extends HeadingProps {
  level: 1 | 2 | 3;
}

export const Heading: React.FC<GenericHeadingProps> = ({ level, ...props }) => {
  switch (level) {
    case 1:
      return <H1 {...props} />;
    case 2:
      return <H2 {...props} />;
    case 3:
      return <H3 {...props} />;
    default:
      return <H2 {...props} />;
  }
};

export default Heading;