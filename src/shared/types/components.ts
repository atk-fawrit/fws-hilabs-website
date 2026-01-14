/**
 * Component prop types for shared components
 */

import { ReactNode } from 'react';

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
