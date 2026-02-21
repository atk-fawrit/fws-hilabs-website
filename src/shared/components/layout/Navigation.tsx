'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback, useRef } from 'react';
import { NavigationProps, NavigationItem } from '@/src/shared/types';

// Primary navigation items - visible in main nav
const primaryNavItems: NavigationItem[] = [
  { label: 'Flagship Program', href: '/flagship-program', primary: true },
  { label: 'Admissions', href: '/admissions', primary: true },
  { label: 'Courses', href: '/courses', primary: true },
  { label: 'About', href: '/about', primary: true },
];

// Secondary navigation items - in "More" dropdown
const secondaryNavItems: NavigationItem[] = [
  { label: 'Outcomes', href: '/outcomes', primary: false },
  { label: 'Employers', href: '/employers', primary: false },
  { label: 'Lucknow Lab', href: '/lucknow-lab', primary: false },
];

export default function Navigation({ className = '' }: NavigationProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset mobile menu when route changes
  useEffect(() => {
    Promise.resolve().then(() => {
      setIsMobileMenuOpen(false);
      setIsMoreDropdownOpen(false);
    });
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMoreDropdownOpen(false);
      }
    };

    if (isMoreDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMoreDropdownOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const toggleMoreDropdown = useCallback(() => {
    setIsMoreDropdownOpen(prev => !prev);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
        if (isMoreDropdownOpen) setIsMoreDropdownOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen, isMoreDropdownOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Check if any secondary item is active
  const isSecondaryActive = secondaryNavItems.some(item => pathname === item.href);
  
  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-xl border-b border-black/10 shadow-lg'
        : 'bg-white/90 backdrop-blur-sm border-b border-white/20'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav 
          className={`flex items-center justify-between py-2 ${className}`}
          role="navigation"
          aria-label="Primary navigation"
        >
          {/* Logo/Brand */}
          <Link 
            href="/" 
            className="flex items-center hover:opacity-80 transition-opacity duration-300 -my-2 focus:outline-none flex-shrink-0"
            aria-label="HI Labs home"
            onClick={closeMobileMenu}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="HI Labs"
              className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto select-none"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 ml-auto">
            {primaryNavItems.map((item) => {
              const isActive = pathname === item.href;
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative px-6 py-2.5 text-[15px] font-semibold tracking-wide transition-all duration-300 rounded-lg
                    ${isActive
                      ? 'text-black bg-black/15'
                      : 'text-gray-800 hover:text-black hover:bg-black/10'
                    }
                  `}
                  aria-current={isActive ? 'page' : undefined}
                  prefetch={true}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* More Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleMoreDropdown}
                className={`
                  flex items-center gap-2 px-6 py-2.5 text-[15px] font-semibold tracking-wide transition-all duration-300 rounded-lg
                  ${isSecondaryActive || isMoreDropdownOpen
                    ? 'text-black bg-black/15'
                    : 'text-gray-800 hover:text-black hover:bg-black/10'
                  }
                `}
                aria-expanded={isMoreDropdownOpen}
                aria-haspopup="true"
              >
                <span>More</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isMoreDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isMoreDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-xl shadow-2xl overflow-hidden animate-fade-in">
                  <div className="py-2">
                    {secondaryNavItems.map((item) => {
                      const isActive = pathname === item.href;
                      
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`
                            block px-6 py-3.5 text-[15px] font-semibold tracking-wide transition-all duration-200
                            ${isActive
                              ? 'text-black bg-black/15'
                              : 'text-gray-800 hover:text-black hover:bg-black/10'
                            }
                          `}
                          aria-current={isActive ? 'page' : undefined}
                          onClick={() => setIsMoreDropdownOpen(false)}
                          prefetch={true}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-black hover:text-gray-700 transition-colors duration-300"
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
              strokeWidth={2}
            >
              {isMobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </nav>
        
        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-navigation"
            className="lg:hidden pb-6 animate-fade-in"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-gray-200 overflow-hidden shadow-2xl">
              <div className="p-4 space-y-1">
                {/* Primary Items */}
                {primaryNavItems.map((item) => {
                  const isActive = pathname === item.href;
                  
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`
                        block py-3.5 px-5 rounded-lg text-[15px] font-semibold tracking-wide transition-all duration-200
                        ${isActive
                          ? 'text-black bg-black/15'
                          : 'text-gray-800 hover:text-black hover:bg-black/10'
                        }
                      `}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={closeMobileMenu}
                      prefetch={true}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                {/* Divider */}
                <div className="py-2">
                  <div className="h-px bg-gray-200"></div>
                </div>

                {/* Secondary Items */}
                {secondaryNavItems.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`
                        block py-3.5 px-5 rounded-lg text-[15px] font-semibold tracking-wide transition-all duration-200
                        ${isActive
                          ? 'text-black bg-black/15'
                          : 'text-gray-800 hover:text-black hover:bg-black/10'
                        }
                      `}
                      aria-current={isActive ? 'page' : undefined}
                      onClick={closeMobileMenu}
                      prefetch={true}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
