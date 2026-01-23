/**
 * PageContainer Component
 * 
 * Standardized page container with consistent layout and background
 * Used across all enhanced pages for uniform structure
 */

import React from 'react';
import { PageContainerProps } from '@/src/shared/types';

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className = ''
}) => {
  return (
    <div className={`w-full bg-page-background ${className}`}>
      <div className="max-w-[1600px] mx-auto bg-background">
        {children}
      </div>
    </div>
  );
};