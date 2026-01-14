/**
 * HI Labs Design System Tokens
 * Core constants that define the institutional aesthetic
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

// Export inferred types
export type ColorPalette = typeof colors;
export type TypographyScale = typeof typography.scale;
export type SpacingScale = typeof spacing;
export type BreakpointScale = typeof breakpoints;
export type TypographyLevel = 1 | 2 | 3;
