/**
 * Common Types
 * 
 * Shared base types used across multiple features
 */

import React from 'react';

export interface BaseSection {
  id: string | number;
  number?: string;
  title: string;
  description: string;
}

export interface ExpandableSection extends BaseSection {
  items?: string[];
  components?: string[];
  characteristics?: string[];
  requirements?: string[];
  value?: string;
  protocol?: string;
  outcome?: string;
}

export interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export interface DocumentHeaderProps {
  title: string;
  description: string | React.ReactNode;
  subtitle?: string;
  className?: string;
}

export interface ExpandableSectionProps {
  id: string | number;
  number?: string;
  title: string;
  description: string;
  expandedId: string | number | null;
  onToggle: (id: string | number) => void;
  children: React.ReactNode;
  className?: string;
}