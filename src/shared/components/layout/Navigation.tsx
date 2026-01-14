'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NavigationProps } from '@/src/shared/types/components';
import { NavigationItem } from '@/src/shared/types/content';
import { colors, typography, designUtils } from '@/src/shared/lib/design-system';

// Primary navigation structure - exactly eight sections as per requirements
const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '/', primary: true },
  { label: 'Flagship Program', href: '/flagship-program', primary: true },
  { label: 'Admissions', href: '/admissions', primary: true },
  { label: 'Courses', href: '/courses', primary: true },
  { label: 'Outcomes', href: '/outcomes', primary: true },
  { label: 'Employers', href: '/employers', primary: true },
  { label: 'About', href: '/about', primary: true },
  { label: 'Lucknow Lab', href: '/lucknow-lab', primary: true },
];

export default function Navigation({ currentPath, className = '' }: NavigationProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <nav 
      id="navigation"
      className={`w-full bg-background border-b border-secondary ${className}`}
      role="navigation"
      aria-label="Primary navigation"
    >
      <div className="container-institutional">
        <div className="flex items-center justify-between py-element">
          {/* Logo/Brand - responsive sizing */}
          <Link 
            href="/" 
            className="text-primary font-semibold text-lg md:text-xl tracking-tight hover:text-accent transition-colors duration-200 focus-institutional"
            aria-label="HI Labs home"
            onClick={closeMobileMenu}
          >
            HI Labs
          </Link>
          
          {/* Desktop Navigation - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    font-medium text-sm lg:text-base tracking-wide transition-colors duration-200 focus-institutional
                    ${isActive 
                      ? 'text-accent border-b-2 border-accent pb-1' 
                      : 'text-primary hover:text-accent'
                    }
                  `}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          
          {/* Mobile Menu Button - visible only on mobile */}
          <button
            className="md:hidden p-2 text-primary hover:text-accent transition-colors duration-200 focus-institutional"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            type="button"
            onClick={toggleMobileMenu}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation Menu - responsive behavior */}
        <div 
          id="mobile-navigation"
          className={`
            md:hidden border-t border-secondary transition-all duration-300 ease-in-out overflow-hidden
            ${isMobileMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0'
            }
          `}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="py-4 space-y-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    block py-3 px-4 font-medium text-base transition-colors duration-200 focus-institutional
                    ${isActive 
                      ? 'text-accent border-l-4 border-accent bg-accent bg-opacity-5' 
                      : 'text-primary hover:text-accent hover:bg-accent hover:bg-opacity-5'
                    }
                  `}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={closeMobileMenu}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}