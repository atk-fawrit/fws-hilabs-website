import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { designUtils } from "./design-system"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Enhanced className utility that validates design system compliance
 */
export function cnInstitutional(...inputs: ClassValue[]) {
  const className = cn(...inputs);
  
  // Validate design system compliance in development
  if (process.env.NODE_ENV === 'development') {
    const classes = className.split(' ');
    classes.forEach(cls => {
      if (!designUtils.isValidDesignClass(cls)) {
        console.warn(`Design system violation: "${cls}" uses forbidden styling`);
      }
    });
  }
  
  return className;
}

/**
 * Utility to create responsive grid classes
 */
export function createGridClasses(columns: { sm?: number; md?: number; lg?: number; xl?: number }) {
  const classes: string[] = [];
  
  if (columns.sm) classes.push(`col-span-${columns.sm}`);
  if (columns.md) classes.push(`md:col-span-${columns.md}`);
  if (columns.lg) classes.push(`lg:col-span-${columns.lg}`);
  if (columns.xl) classes.push(`xl:col-span-${columns.xl}`);
  
  return cn(...classes);
}

/**
 * Utility to validate color usage against design system
 */
export function validateColor(color: string): boolean {
  return designUtils.isApprovedColor(color) && !designUtils.isForbiddenColor(color);
}

/**
 * Utility to get institutional spacing classes
 */
export function getSpacingClass(type: 'section' | 'subsection' | 'element' | 'tight' | 'loose'): string {
  const spacingMap = {
    section: 'spacing-section',
    subsection: 'spacing-subsection', 
    element: 'spacing-element',
    tight: 'mt-2 mb-2',
    loose: 'mt-24 mb-24'
  };
  
  return spacingMap[type];
}
