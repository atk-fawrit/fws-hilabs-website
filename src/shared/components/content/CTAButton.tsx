'use client';

/**
 * CTAButton Component
 * 
 * Call-to-action button component with primary and text variants.
 * Implements institutional styling with proper contrast, accessibility, and responsive sizing.
 */

import React from 'react';
import Link from 'next/link';
import { colors, typography, designUtils } from '@/src/shared/lib/design-system';

interface CTAButtonProps {
  variant: 'primary' | 'text';
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  variant,
  href,
  children,
  className = '',
  external = false,
}) => {
  const getButtonClasses = (): string => {
    const baseClasses = 'button-responsive font-medium transition-all duration-200 focus-institutional inline-block text-center no-underline';
    
    switch (variant) {
      case 'primary':
        return `${baseClasses} bg-accent text-background border border-accent hover:bg-primary hover:border-primary`;
      case 'text':
        return `${baseClasses} bg-transparent text-accent border border-accent hover:bg-accent hover:text-background`;
      default:
        return baseClasses;
    }
  };

  const buttonContent = (
    <span className={`${getButtonClasses()} ${className}`}>
      {children}
    </span>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline"
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <Link href={href} className="no-underline">
      {buttonContent}
    </Link>
  );
};

export default CTAButton;