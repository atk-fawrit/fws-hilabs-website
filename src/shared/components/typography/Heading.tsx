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

// H3 - Subsection headings with modern semibold styling
export const H3: React.FC<HeadingProps> = ({ children, className = '', id }) => (
  <h3 
    id={id}
    className={`text-base md:text-lg font-semibold text-gray-800 ${className}`}
  >
    {children}
  </h3>
);

export default H3;