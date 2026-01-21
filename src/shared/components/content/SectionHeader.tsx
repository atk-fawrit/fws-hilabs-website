/**
 * SectionHeader Component
 * 
 * Reusable section header with title and subtitle
 * Provides consistent styling across all sections
 */

import React from 'react';
import { H2 } from '@/src/shared/components/typography';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className = '',
  centered = true,
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <H2 className="text-4xl font-bold text-primary mb-3">{title}</H2>
      {subtitle && (
        <p className="text-xl text-secondary">{subtitle}</p>
      )}
    </div>
  );
};