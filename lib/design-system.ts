/**
 * HI Labs Design System Constants and Utilities
 * 
 * This module contains the core design system constants that enforce
 * the institutional aesthetic and prevent the use of forbidden design elements.
 */

// Color palette - institutional and serious
export const colors = {
  background: '#F4F4F2',
  primary: '#1C1C1C',
  secondary: '#5F6A7A',
  accent: '#2F4A6D',
  warning: '#8A2E2E',
} as const;

// Forbidden colors that must never be used
export const forbiddenColors = [
  '#00FF00', // bright green
  '#00FFFF', // neon blue
  '#FF00FF', // purple gradients base
  '#FFA500', // orange CTAs
] as const;

// Typography system
export const typography = {
  fontFamily: {
    sans: ['IBM Plex Sans', 'Inter', 'system-ui', 'sans-serif'],
    mono: ['IBM Plex Mono', 'Menlo', 'Monaco', 'monospace'],
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semibold: '600',
  },
  scale: {
    h1: {
      fontSize: '2.25rem', // 36px
      lineHeight: '2.5rem',
      fontWeight: '600',
      letterSpacing: '-0.025em',
    },
    h2: {
      fontSize: '1.875rem', // 30px
      lineHeight: '2.25rem',
      fontWeight: '600',
      letterSpacing: '-0.025em',
    },
    h3: {
      fontSize: '1.5rem', // 24px
      lineHeight: '2rem',
      fontWeight: '500',
      letterSpacing: '-0.025em',
    },
    body: {
      fontSize: '1rem', // 16px
      lineHeight: '1.5rem',
      fontWeight: '400',
    },
    metadata: {
      fontSize: '0.875rem', // 14px
      lineHeight: '1.25rem',
      fontWeight: '400',
      fontFamily: 'mono',
    },
  },
} as const;

// Spacing system
export const spacing = {
  section: '4rem',
  subsection: '2rem',
  element: '1rem',
  tight: '0.5rem',
  loose: '6rem',
} as const;

// Layout system
export const layout = {
  maxWidth: '1200px',
  gridColumns: 12,
  margins: {
    desktop: '2rem',
    tablet: '1.5rem',
    mobile: '1rem',
  },
} as const;

// Breakpoints
export const breakpoints = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Responsive layout system
export const responsiveLayout = {
  maxWidth: '1200px',
  gridColumns: 12,
  margins: {
    mobile: '1rem',
    tablet: '1.5rem',
    desktop: '2rem',
  },
  padding: {
    mobile: '1rem',
    tablet: '1.5rem',
    desktop: '2rem',
  },
  containerPadding: {
    xs: '1rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '2rem',
    '2xl': '2rem',
  },
} as const;

// Responsive typography scaling
export const responsiveTypography = {
  h1: {
    mobile: { fontSize: '1.875rem', lineHeight: '2.25rem' }, // 30px
    tablet: { fontSize: '2.25rem', lineHeight: '2.5rem' },   // 36px
    desktop: { fontSize: '2.25rem', lineHeight: '2.5rem' },  // 36px
  },
  h2: {
    mobile: { fontSize: '1.5rem', lineHeight: '2rem' },      // 24px
    tablet: { fontSize: '1.875rem', lineHeight: '2.25rem' }, // 30px
    desktop: { fontSize: '1.875rem', lineHeight: '2.25rem' }, // 30px
  },
  h3: {
    mobile: { fontSize: '1.25rem', lineHeight: '1.75rem' },  // 20px
    tablet: { fontSize: '1.5rem', lineHeight: '2rem' },      // 24px
    desktop: { fontSize: '1.5rem', lineHeight: '2rem' },     // 24px
  },
  body: {
    mobile: { fontSize: '0.875rem', lineHeight: '1.25rem' }, // 14px
    tablet: { fontSize: '1rem', lineHeight: '1.5rem' },      // 16px
    desktop: { fontSize: '1rem', lineHeight: '1.5rem' },     // 16px
  },
} as const;

// Design constraints - elements that are forbidden
export const designConstraints = {
  forbiddenStyles: {
    borderRadius: ['rounded', 'rounded-lg', 'rounded-xl'],
    boxShadow: ['shadow', 'shadow-lg', 'shadow-xl'],
    gradients: ['bg-gradient-to-r', 'bg-gradient-to-l', 'bg-gradient-to-t', 'bg-gradient-to-b'],
    animations: ['animate-bounce', 'animate-pulse', 'animate-ping'],
  },
  allowedAnimations: ['animate-fade-in', 'animate-slide-down'], // minimal motion only
} as const;

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

// CSS-in-JS style objects for common patterns
export const stylePatterns = {
  sectionDivider: {
    width: '100%',
    height: '1px',
    backgroundColor: colors.secondary,
    margin: `${spacing.subsection} 0`,
  },
  institutionalButton: {
    backgroundColor: colors.accent,
    color: colors.background,
    padding: '0.75rem 1.5rem',
    border: 'none',
    fontFamily: typography.fontFamily.sans.join(', '),
    fontWeight: typography.fontWeight.medium,
    fontSize: typography.scale.body.fontSize,
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
  textButton: {
    backgroundColor: 'transparent',
    color: colors.accent,
    padding: '0.75rem 1.5rem',
    border: `1px solid ${colors.accent}`,
    fontFamily: typography.fontFamily.sans.join(', '),
    fontWeight: typography.fontWeight.medium,
    fontSize: typography.scale.body.fontSize,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
} as const;

export type ColorPalette = typeof colors;
export type TypographyScale = typeof typography.scale;
export type SpacingScale = typeof spacing;
export type BreakpointScale = typeof breakpoints;