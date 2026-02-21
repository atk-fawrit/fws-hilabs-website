/**
 * PageLayout Component
 * 
 * Common layout wrapper for all pages
 * Includes Navigation and Footer
 */

import React from 'react';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  showFooter?: boolean;
}

export const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  className = 'min-h-screen font-sans bg-white text-gray-900',
  showFooter = true,
}) => {
  return (
    <div className={className}>
      {children}
      {showFooter && <Footer />}
    </div>
  );
};

export default PageLayout;
