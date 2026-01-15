/**
 * TwoColumnSection Component
 * 
 * A flexible two-column layout component that follows the institutional design system.
 * Avoids card-style containers in favor of clean, document-like presentation.
 * Fully responsive with mobile-first approach.
 */

import React from 'react';
import { TwoColumnSectionProps } from '@/src/shared/types';

export const TwoColumnSection: React.FC<TwoColumnSectionProps> = ({
  leftContent,
  rightContent,
  divider = false,
  className = '',
}) => {
  return (
    <section className={`w-full ${className}`}>
      {/* Optional horizontal divider above the section */}
      {divider && (
        <hr 
          className="section-divider"
          aria-hidden="true"
        />
      )}
      
      {/* Responsive two-column grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto px-mobile sm:px-mobile md:px-tablet lg:px-desktop xl:px-desktop">
        {/* Left column */}
        <div className="space-y-3 md:space-y-4">
          {leftContent}
        </div>
        
        {/* Right column */}
        <div className="space-y-3 md:space-y-4">
          {rightContent}
        </div>
      </div>
      
      {/* Optional horizontal divider below the section */}
      {divider && (
        <hr 
          className="section-divider"
          aria-hidden="true"
        />
      )}
    </section>
  );
};

export default TwoColumnSection;