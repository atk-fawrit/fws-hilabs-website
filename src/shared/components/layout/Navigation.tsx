'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useCallback, useRef } from 'react';
import { NavigationProps, NavigationItem } from '@/src/shared/types';
import CourseDropdown from './CourseDropdown';

// Primary navigation items - visible in main nav
const primaryNavItems: NavigationItem[] = [
  { label: 'Flagship Program', href: '/flagship-program', primary: true },
  { label: 'Admissions', href: '/admissions', primary: true },
  { label: 'Courses', href: '/courses', primary: true },
  { label: 'About', href: '/about', primary: true },
  { label: 'Contact', href: '/contact', primary: true },
  // { label: 'AI Course', href: '/artificial-intelligence-course-lucknow', primary: true },
];

// Mobile courses list
const mobileCourses = [
  { label: 'Python Developer Bootcamp', href: '/courses/python-developer-bootcamp' },
  { label: 'Frontend Developer (React)', href: '/courses/frontend-developer-react' },
  { label: 'Backend Developer (Node.js)', href: '/courses/backend-developer-node-js' },
  { label: 'Full-Stack Developer (MERN)', href: '/courses/full-stack-developer-mern' },
  { label: 'Mobile App Developer (React Native)', href: '/courses/mobile-app-developer-react-native' },
  { label: 'SQL & Data Foundations', href: '/courses/sql-data-foundations' },
  { label: 'Data Analytics & Business Intelligence', href: '/courses/data-analytics-business-intelligence' },
  { label: 'AI Foundations', href: '/courses/ai-foundations' },
  { label: 'Machine Learning with Python', href: '/courses/machine-learning-with-python' },
  { label: 'AI Product Developer with Python', href: '/courses/ai-product-developer-with-python' },
  { label: 'DevOps & Deployment for Developers', href: '/courses/devops-deployment-for-developers' },
  { label: 'QA & Test Automation', href: '/courses/qa-test-automation' },
];

// Secondary navigation items - in "More" dropdown (temporarily disabled)
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
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Temporarily disable "More" dropdown
  const showMoreDropdown = false;

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
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
      ? 'bg-white/95 backdrop-blur-xl border-b border-black/10 shadow-lg'
      : 'bg-white/90 backdrop-blur-sm border-b border-white/20'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className={`relative flex items-center justify-between py-0 h-14 ${className}`}
          role="navigation"
          aria-label="Primary navigation"
        >
          {/* Logo/Brand - Top Left Corner */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity duration-300 focus:outline-none flex-shrink-0 absolute left-0 lg:relative"
            aria-label="HI Labs home"
            onClick={closeMobileMenu}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.png"
              alt="HI Labs"
              className="h-9 w-auto select-none scale-[2.9] origin-left translate-y-1"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 ml-auto">
            {primaryNavItems.map((item) => {
              const isActive = pathname === item.href;

              // ✅ Courses dropdown
              if (item.label === 'Courses') {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                    onMouseLeave={() => setIsCoursesDropdownOpen(false)}
                  >
                    <Link
                      href="/courses"
                      className={`
                        relative px-6 py-2.5 text-[15px] font-semibold tracking-wide transition-all duration-300 rounded-lg
                        ${isActive ? 'text-black bg-black/15' : 'text-gray-800 hover:text-black hover:bg-black/10'}
                      `}
                    >
                      Courses
                    </Link>

                    <CourseDropdown 
                      isOpen={isCoursesDropdownOpen}
                      onClose={() => setIsCoursesDropdownOpen(false)}
                    />
                  </div>
                );
              }

              // ✅ Normal nav items
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
                >
                  {item.label}
                </Link>
              );
            })}
            {/* More Dropdown - Temporarily Hidden */}
            {showMoreDropdown && (
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
                    className={`w-4 h-4 transition-transform duration-300 ${isMoreDropdownOpen ? 'rotate-180' : ''
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
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-black hover:text-gray-700 transition-colors duration-300 ml-auto"
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

                  if (item.label === 'Courses') {
                    return (
                      <div key={item.href} className="flex flex-col">
                        <div className="flex items-center justify-between">
                           <Link
                             href="/courses"
                             className={`
                               block flex-1 py-3.5 px-5 rounded-lg text-[15px] font-semibold tracking-wide transition-all duration-200
                               ${isActive ? 'text-black bg-black/15' : 'text-gray-800 hover:text-black hover:bg-black/10'}
                             `}
                             onClick={closeMobileMenu}
                           >
                             {item.label}
                           </Link>
                           <button 
                             onClick={(e) => { e.preventDefault(); setIsCoursesDropdownOpen(!isCoursesDropdownOpen); }}
                             className="p-3 text-gray-500 hover:text-black"
                           >
                             <svg className={`w-5 h-5 transition-transform duration-300 ${isCoursesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                             </svg>
                           </button>
                        </div>
                        {isCoursesDropdownOpen && (
                          <div className="pl-6 pr-2 py-2 space-y-1 bg-gray-50/50 rounded-lg mt-1 border shadow-inner border-gray-100">
                             {mobileCourses.map(course => (
                               <Link
                                 key={course.href}
                                 href={course.href}
                                 className="block py-2.5 px-4 rounded-md text-[14px] text-gray-600 hover:text-black hover:bg-gray-100 transition-colors"
                                 onClick={closeMobileMenu}
                               >
                                 {course.label}
                               </Link>
                             ))}
                          </div>
                        )}
                      </div>
                    );
                  }

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

                {/* Secondary Items - Temporarily Hidden */}
                {showMoreDropdown && secondaryNavItems.length > 0 && (
                  <>
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
                  </>
                )}
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
