'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
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
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset mobile menu when route changes
  useEffect(() => {
    // Use a microtask to avoid synchronous setState
    Promise.resolve().then(() => {
      setIsMobileMenuOpen(false);
    });
  }, [pathname]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);
  
  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav 
          className={`flex items-center justify-between py-4 ${className}`}
          role="navigation"
          aria-label="Primary navigation"
        >
          {/* Logo/Brand - Left aligned */}
          <Link 
            href="/" 
            className="font-mono text-xl font-bold text-white hover:text-blue-300 transition-colors duration-300 tracking-tight"
            aria-label="HI Labs home"
            onClick={closeMobileMenu}
          >
            HI LABS
          </Link>
          
          {/* Desktop Navigation - Far right aligned */}
          <div className="hidden lg:flex items-center space-x-10 ml-auto">
            {navigationItems.slice(1).map((item) => { // Skip Home since it's in the logo
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative font-medium text-base tracking-wide transition-all duration-300 hover:text-blue-300
                    ${isActive 
                      ? 'text-blue-400' 
                      : 'text-white'
                    }
                    after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all after:duration-300
                    ${isActive ? 'after:w-full' : 'hover:after:w-full'}
                  `}
                  aria-current={isActive ? 'page' : undefined}
                  prefetch={true}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-blue-300 transition-colors duration-300"
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
        </nav>
        
        {/* Mobile Navigation Menu */}
        <div 
          id="mobile-navigation"
          className={`
            lg:hidden transition-all duration-300 ease-in-out overflow-hidden
            ${isMobileMenuOpen 
              ? 'max-h-96 opacity-100 pb-6' 
              : 'max-h-0 opacity-0'
            }
          `}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="bg-black/90 backdrop-blur-md rounded-2xl border border-white/10 p-6 space-y-3">
            {navigationItems.slice(1).map((item) => { // Skip Home
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    block py-4 px-5 rounded-xl font-medium text-lg transition-all duration-300
                    ${isActive 
                      ? 'text-blue-400 bg-white/10' 
                      : 'text-white hover:text-white hover:bg-white/5'
                    }
                  `}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={closeMobileMenu}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  prefetch={true}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}