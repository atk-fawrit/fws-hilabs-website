/**
 * Content Component Types
 * 
 * Type definitions for reusable content components
 */

import React from 'react';

export interface CTAButtonProps {
  variant: 'primary' | 'text';
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export interface DetailSectionProps {
  number: string;
  title: string;
  description: string;
  listTitle?: string;
  items?: string[];
  footerLabel?: string;
  footerContent: string;
  className?: string;
}

export interface InfoBoxProps {
  title: string;
  description: string;
  variant?: 'accent' | 'warning' | 'neutral';
  className?: string;
}

export interface NumberedItemProps {
  number: string;
  title: string;
  description: string;
  items?: string[];
  className?: string;
}

export interface ProcessDiagramProps {
  stages: string[];
  connector?: string;
  className?: string;
}

export interface SectionDividerProps {
  className?: string;
  spacing?: 'tight' | 'normal' | 'loose';
}

export interface TwoColumnSectionProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  divider?: boolean;
  className?: string;
}
