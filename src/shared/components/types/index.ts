/**
 * Shared TypeScript types and interfaces
 */

// ============================================
// Component Types
// ============================================

export interface NavigationProps {
  currentPath: string;
  className?: string;
}

// ============================================
// Content Types
// ============================================

export interface NavigationItem {
  label: string;
  href: string;
  primary: boolean;
  external?: boolean;
}


