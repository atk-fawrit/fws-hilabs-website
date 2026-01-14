/**
 * Pure utility functions for grid layout calculations
 * No external dependencies
 */

/**
 * Create responsive grid column classes
 */
export function createGridClasses(columns: { 
  sm?: number; 
  md?: number; 
  lg?: number; 
  xl?: number 
}): string {
  const classes: string[] = [];
  
  if (columns.sm) classes.push(`col-span-${columns.sm}`);
  if (columns.md) classes.push(`md:col-span-${columns.md}`);
  if (columns.lg) classes.push(`lg:col-span-${columns.lg}`);
  if (columns.xl) classes.push(`xl:col-span-${columns.xl}`);
  
  return classes.join(' ');
}

/**
 * Calculate grid column span based on content width
 */
export function calculateColumnSpan(contentWidth: number, totalColumns: number = 12): number {
  const percentage = (contentWidth / 100) * totalColumns;
  return Math.round(percentage);
}
