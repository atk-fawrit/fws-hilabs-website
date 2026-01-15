import Link from 'next/link';
import { NavigationItem, FooterProps } from '@/src/shared/types';

// Primary footer navigation links
const primaryLinks: NavigationItem[] = [
  { label: 'Flagship Program', href: '/flagship-program', primary: true },
  { label: 'Admissions', href: '/admissions', primary: true },
  { label: 'Courses', href: '/courses', primary: true },
  { label: 'Outcomes', href: '/outcomes', primary: true },
  { label: 'Employers', href: '/employers', primary: true },
  { label: 'About', href: '/about', primary: true },
];

// Policy and legal links
const policyLinks: NavigationItem[] = [
  { label: 'Privacy Policy', href: '/privacy', primary: false },
  { label: 'Terms of Service', href: '/terms', primary: false },
  { label: 'Code of Conduct', href: '/conduct', primary: false },
  { label: 'Contact', href: '/contact', primary: false },
];

export default function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer 
      className={`w-full bg-background border-t border-secondary mt-section ${className}`}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container-institutional">
        {/* Main Footer Content */}
        <div className="py-4 md:py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {/* Brand and Description */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-primary font-semibold text-base md:text-lg">HI Labs</h3>
              <p className="text-secondary text-sm leading-relaxed max-w-sm">
                Human Intelligence Laboratories Private Limited. 
                Engineering talent production through enforced evaluation and supervised deployment.
              </p>
              <address className="text-mono text-xs text-secondary not-italic">
                Lucknow, Uttar Pradesh, India
              </address>
            </div>
            
            {/* Primary Navigation Links */}
            <div className="space-y-3 md:space-y-4">
              <h4 className="text-primary font-medium text-sm md:text-base">Programs</h4>
              <nav className="space-y-2" aria-label="Footer programs navigation">
                {primaryLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-secondary text-sm hover:text-accent focus-institutional transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            
            {/* Policy Links */}
            <div className="space-y-3 md:space-y-4">
              <h4 className="text-primary font-medium text-sm md:text-base">Information</h4>
              <nav className="space-y-2" aria-label="Footer policy navigation">
                {policyLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-secondary text-sm hover:text-accent focus-institutional transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-secondary py-3 md:py-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
            {/* Copyright */}
            <div className="text-mono text-xs text-secondary">
              © {currentYear} Human Intelligence Laboratories Private Limited. All rights reserved.
            </div>
            
            {/* Legal Notice */}
            <div className="text-mono text-xs text-secondary max-w-md text-left md:text-right">
              Registered in India. CIN: [Company Identification Number]
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}