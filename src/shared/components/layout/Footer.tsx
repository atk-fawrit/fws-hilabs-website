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
  description: 'Human Intelligence Laboratories Private Limited. Engineering talent production through enforced evaluation and supervised deployment.'
};

export default function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={`bg-white border-t border-black/8 py-16 pb-8 ${className}`}>
      <div className="w-full mx-auto px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 text-center justify-items-center">
          {/* Company Info */}
          <div className="text-center max-w-sm">
            <h3 className="font-mono text-2xl font-bold mb-5 text-gray-900">
              {companyInfo.title}
            </h3>
            <p className="text-base leading-relaxed text-black/60">
              {companyInfo.description}
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="text-center max-w-sm">
              <h4 className="text-lg font-semibold mb-7 text-gray-900">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-4 items-center">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="text-base text-black/60 transition-colors duration-300 hover:text-black/90"
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
        <div className="text-center pt-10 border-t border-black/8">
          <p className="text-sm text-black/50">
            © {currentYear} Human Intelligence Laboratories Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}