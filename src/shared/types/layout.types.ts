/**
 * Layout Component Types
 * 
 * Type definitions for layout components like Navigation, Footer, etc.
 */

export interface NavigationProps {
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

export interface HeroSectionProps {
  title: string;
  description?: string;
  backgroundType?: 'image' | 'video';
  backgroundSrc?: string;
  overlayColor?: string;
  height?: string;
  textColor?: string;
  className?: string;
}
