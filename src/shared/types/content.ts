/**
 * Content structure and domain types
 */

import { ReactNode } from 'react';
import { ProcessDiagramProps, TwoColumnSectionProps } from './components';

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
