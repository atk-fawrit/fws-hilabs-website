/**
 * HI Labs Design System Utilities
 * 
 * Utility functions that work with design tokens
 */

import { colors, forbiddenColors, typography, designConstraints } from './design-tokens';

// Utility functions
export const designUtils = {
  /**
   * Validates if a color is in the approved palette
   */
  isApprovedColor: (color: string): boolean => {
    return Object.values(colors).includes(color as any);
  },

  /**
   * Validates if a color is forbidden
   */
  isForbiddenColor: (color: string): boolean => {
    return forbiddenColors.includes(color as any);
  },

  /**
   * Gets the appropriate font family for content type
   */
  getFontFamily: (type: 'body' | 'heading' | 'mono'): string => {
    switch (type) {
      case 'mono':
        return typography.fontFamily.mono.join(', ');
      default:
        return typography.fontFamily.sans.join(', ');
    }
  },

  /**
   * Validates if a CSS class follows design constraints
   */
  isValidDesignClass: (className: string): boolean => {
    const forbidden = Object.values(designConstraints.forbiddenStyles).flat();
    return !forbidden.some(forbiddenClass => className.includes(forbiddenClass));
  },

  /**
   * Creates a grid column span class for the 12-column system
   */
  getGridSpan: (columns: number): string => {
    if (columns < 1 || columns > 12) {
      throw new Error('Grid columns must be between 1 and 12');
    }
    return `col-span-${columns}`;
  },

  /**
   * Gets responsive container padding classes
   */
  getResponsiveContainerClasses: (): string => {
    return 'px-mobile sm:px-mobile md:px-tablet lg:px-desktop xl:px-desktop';
  },

  /**
   * Gets responsive typography classes for headings
   */
  getResponsiveHeadingClasses: (level: 'h1' | 'h2' | 'h3'): string => {
    const baseClasses = 'font-semibold text-primary leading-tight';
    switch (level) {
      case 'h1':
        return `${baseClasses} text-3xl md:text-4xl lg:text-4xl`;
      case 'h2':
        return `${baseClasses} text-2xl md:text-3xl lg:text-3xl`;
      case 'h3':
        return `${baseClasses} text-xl md:text-2xl lg:text-2xl font-medium`;
      default:
        return baseClasses;
    }
  },

  /**
   * Gets responsive body text classes
   */
  getResponsiveBodyClasses: (): string => {
    return 'text-sm md:text-base lg:text-base leading-relaxed text-primary';
  },

  /**
   * Gets responsive grid classes for two-column layouts
   */
  getResponsiveTwoColumnClasses: (): string => {
    return 'grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8';
  },

  /**
   * Gets responsive spacing classes
   */
  getResponsiveSpacingClasses: (type: 'section' | 'subsection' | 'element'): string => {
    switch (type) {
      case 'section':
        return 'py-8 md:py-12 lg:py-16';
      case 'subsection':
        return 'py-4 md:py-6 lg:py-8';
      case 'element':
        return 'py-2 md:py-3 lg:py-4';
      default:
        return 'py-4';
    }
  },
} as const;

// Re-export tokens for convenience
export { colors, typography, spacing, breakpoints, layout, responsiveLayout, responsiveTypography, stylePatterns } from './design-tokens';