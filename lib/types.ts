/**
 * TypeScript interfaces for HI Labs website content and design tokens
 */

import { ReactNode } from 'react';

// Design System Types
export interface DesignTokens {
  colors: ColorPalette;
  typography: TypographyScale;
  spacing: SpacingScale;
  breakpoints: BreakpointScale;
}

export interface ColorPalette {
  background: string;
  primary: string;
  secondary: string;
  accent: string;
  warning: string;
}

export interface TypographyStyle {
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
  letterSpacing?: string;
  fontFamily?: string;
}

export interface TypographyScale {
  h1: TypographyStyle;
  h2: TypographyStyle;
  h3: TypographyStyle;
  body: TypographyStyle;
  metadata: TypographyStyle;
}

export interface SpacingScale {
  section: string;
  subsection: string;
  element: string;
  tight: string;
  loose: string;
}

export interface BreakpointScale {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

// Content Structure Types
export interface PageContent {
  title: string;
  description?: string;
  sections: ContentSection[];
  cta?: CallToAction;
}

export interface ContentSection {
  id: string;
  title: string;
  content: string | ReactNode;
  layout: 'single' | 'two-column' | 'list' | 'diagram';
  divider: boolean;
  metadata?: {
    requirements?: string[];
    order?: number;
  };
}

export interface CallToAction {
  text: string;
  href: string;
  variant: 'primary' | 'text';
  context?: string;
  target?: '_self' | '_blank';
}

// Navigation Types
export interface NavigationItem {
  label: string;
  href: string;
  primary: boolean;
  external?: boolean;
}

export interface NavigationStructure {
  primary: NavigationItem[];
  footer: {
    primary: NavigationItem[];
    policy: NavigationItem[];
  };
}

// Component Props Types
export interface PageLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
  showNavigation?: boolean;
  className?: string;
}

export interface NavigationProps {
  currentPath: string;
  className?: string;
}

export interface TwoColumnSectionProps {
  leftContent: ReactNode;
  rightContent: ReactNode;
  divider?: boolean;
  className?: string;
}

export interface ProcessDiagramProps {
  stages: string[];
  connector?: string;
  className?: string;
  variant?: 'horizontal' | 'vertical';
}

export interface CTAButtonProps {
  variant: 'primary' | 'text';
  href: string;
  children: ReactNode;
  className?: string;
  target?: '_self' | '_blank';
  onClick?: () => void;
}

export interface SectionDividerProps {
  className?: string;
  thickness?: 'thin' | 'medium' | 'thick';
}

// Typography Component Props
export interface HeadingProps {
  level: 1 | 2 | 3;
  children: ReactNode;
  className?: string;
  id?: string;
}

export interface BodyTextProps {
  children: ReactNode;
  variant?: 'body' | 'metadata';
  className?: string;
}

// Content Management Types
export interface ContentUpdate {
  pageId: string;
  sectionId: string;
  content: string | ReactNode;
  timestamp: Date;
  author?: string;
}

export interface ContentValidation {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

// Page-specific content types
export interface HomePageContent extends PageContent {
  hero: {
    headline: string;
    subheading: string;
    ctas: CallToAction[];
    diagram: ProcessDiagramProps;
  };
  whatIsSection: TwoColumnSectionProps;
}

export interface FlagshipProgramContent extends PageContent {
  exclusions: string[];
  phaseOne: {
    terms: ContentSection[];
    evaluationGates: string[];
  };
  phaseTwo: ContentSection;
}

export interface AdmissionsContent extends PageContent {
  eligibility: {
    criteria: string[];
    nonEligible: string[];
  };
  selectionStages: ContentSection[];
  applicationProtocol: ContentSection;
}

// Utility Types
export type PageId = 
  | 'home'
  | 'flagship-program'
  | 'admissions'
  | 'courses'
  | 'outcomes'
  | 'employers'
  | 'about'
  | 'lucknow-lab';

export type LayoutType = ContentSection['layout'];
export type CTAVariant = CallToAction['variant'];
export type TypographyLevel = HeadingProps['level'];

// Design System Validation Types
export interface DesignValidation {
  colorCompliance: boolean;
  typographyCompliance: boolean;
  layoutCompliance: boolean;
  constraintCompliance: boolean;
  errors: string[];
}

export interface ResponsiveBreakpoint {
  name: keyof BreakpointScale;
  minWidth: string;
  maxWidth?: string;
}

// Performance and Accessibility Types
export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
}

export interface AccessibilityCompliance {
  contrastRatio: number;
  keyboardNavigation: boolean;
  semanticHTML: boolean;
  screenReaderCompatible: boolean;
  errors: string[];
}