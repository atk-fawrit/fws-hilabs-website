/**
 * Layout Component Types
 * 
 * Type definitions for layout components like Navigation, Footer, etc.
 */

export interface NavigationProps {
  currentPath: string;
  className?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  primary: boolean;
  external?: boolean;
}

export interface FooterProps {
  className?: string;
}
