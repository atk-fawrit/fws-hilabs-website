import Link from 'next/link';
import { FooterProps } from '@/src/shared/types';

// Footer sections data
const footerSections = [
  {
    title: 'Programs',
    links: [
      { label: 'Flagship Program', href: '/flagship-program' },
      { label: 'Short Programs', href: '/courses' },
      { label: 'Outcomes', href: '/outcomes' },
      { label: 'Employers', href: '/employers' },
    ]
  },
  {
    title: 'Information',
    links: [
      { label: 'Admissions', href: '/admissions' },
      { label: 'About', href: '/about' },
      { label: 'Lucknow Lab', href: '/lucknow-lab' },
      { label: 'Contact', href: '/contact' },
    ]
  }
];

const companyInfo = {
  title: 'HI LABS',
  description: 'Human Intelligence Labs Private Limited. Engineering talent production through enforced evaluation and supervised deployment.'
};

export default function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`bg-white border-t border-black/8 py-10 sm:py-12 md:py-16 pb-6 sm:pb-8 ${className}`}>
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 md:gap-16 mb-10 sm:mb-12 md:mb-16 text-center justify-items-center">
          {/* Company Info */}
          <div className="text-center max-w-sm">
            <h3 className="font-mono text-xl sm:text-2xl font-bold mb-4 sm:mb-5 text-gray-900">
              {companyInfo.title}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-black/60">
              {companyInfo.description}
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="text-center max-w-sm">
              <h4 className="text-base sm:text-lg font-semibold mb-5 sm:mb-6 md:mb-7 text-gray-900">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3 sm:gap-4 items-center">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-sm sm:text-base text-black/60 transition-colors duration-300 hover:text-black/90"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-8 sm:pt-10 border-t border-black/8">
          <p className="text-xs sm:text-sm text-black/50 px-4">
            © {currentYear} Human Intelligence Labs Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}