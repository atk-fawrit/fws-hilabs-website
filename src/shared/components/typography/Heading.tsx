/**
 * Heading Components
 * 
 * Modern heading components with bold fonts, high contrast, and proper responsive scaling.
 * Updated for contemporary design with crisp typography and better visual hierarchy.
 */

import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

// H1 - Primary page headings with modern bold styling
export const H1: React.FC<HeadingProps> = ({ children, className = '', id }) => (
  <h1 
    id={id}
    className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight ${className}`}
  >
    {children}
  </h1>
);

// H2 - Section headings with modern bold styling
export const H2: React.FC<HeadingProps> = ({ children, className = '', id }) => (
  <h2 
    id={id}
    className={`text-2xl md:text-3xl font-bold text-gray-900 tracking-tight ${className}`}
  >
    {children}
  </h2>
);

// H3 - Subsection headings with modern semibold styling
export const H3: React.FC<HeadingProps> = ({ children, className = '', id }) => (
  <h3 
    id={id}
    className={`text-base md:text-lg font-semibold text-gray-800 ${className}`}
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