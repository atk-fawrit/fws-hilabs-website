'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NavigationProps, NavigationItem } from '@/src/shared/types';

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

export default function Navigation({ className = '' }: NavigationProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <div className="w-full bg-page-background">
      <div className="max-w-[1600px] mx-auto bg-oxford-blue">
        <nav 
          id="navigation"
          className={`w-full ${className}`}
          role="navigation"
          aria-label="Primary navigation"
        >
          <div className="px-4 md:px-8">
            <div className="flex items-center justify-between py-6">
              {/* Logo/Brand - responsive sizing */}
              <Link 
                href="/" 
                className="text-white font-bold text-lg md:text-xl tracking-tight hover:text-gray-200 transition-colors duration-200 focus-institutional"
                aria-label="HI Labs home"
                onClick={closeMobileMenu}
              >
                HI Labs
              </Link>
              
              {/* Desktop Navigation - hidden on mobile */}
              <div className="hidden md:flex items-center space-x-8">
                {navigationItems.map((item) => {
                  const isActive = pathname === item.href;
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`
                        font-medium text-sm tracking-wide transition-colors duration-200 focus-institutional uppercase
                        ${isActive 
                          ? 'text-white border-b-2 border-white pb-1' 
                          : 'text-gray-200 hover:text-white'
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
                className="md:hidden p-2 text-gray-200 hover:text-white transition-colors duration-200 focus-institutional"
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
                md:hidden border-t border-oxford-blue-hover transition-all duration-300 ease-in-out overflow-hidden
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
                        block py-3 px-4 font-medium text-base transition-colors duration-200 focus-institutional uppercase
                        ${isActive 
                          ? 'text-white border-l-4 border-white bg-oxford-blue-hover' 
                          : 'text-gray-200 hover:text-white hover:bg-oxford-blue-hover'
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
      </div>
    </div>
  );
}