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

export interface InfoBoxProps {
  title: string;
  description: string;
  variant?: 'accent' | 'warning' | 'neutral';
  className?: string;
}

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export interface InteractiveCardProps {
  title: string;
  icon?: React.ReactNode;
  colorTheme?: 'accent' | 'warning' | 'primary';
  isCollapsible?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
  children?: React.ReactNode;
  className?: string;
  description?: string;
  footer?: string;
  items?: string[];
}

export interface ImageCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
  onClick?: () => void;
  imageHeight?: string;
  className?: string;
  imageAlt?: string;
}

export interface ProcessCardProps {
  stepNumber: string;
  title: string;
  duration?: string;
  subtitle?: string;
  sections: {
    title: string;
    items: string[];
  }[];
  warningSection?: {
    title: string;
    content: string;
  };
  className?: string;
}
