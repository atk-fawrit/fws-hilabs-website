"use client";

import Link from 'next/link';
import { FooterProps } from '@/src/shared/types';

// Footer sections data
const footerSections = [
  {
    title: 'Programs',
    links: [
      { label: 'Flagship Program', href: '/flagship-program' },
      { label: 'Short Programs', href: '/courses' },
    ]
  },
  {
    title: 'Information',
    links: [
      { label: 'Admissions', href: '/admissions' },
      { label: 'About', href: '/about' },
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
    <footer className={`bg-white border-t border-black/8 flex flex-col ${className}`}>
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-12 md:py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 md:gap-16 text-center justify-items-center items-start">
          {/* Company Info */}
          <div className="text-center max-w-xs">
            <h3 className="font-mono text-xl sm:text-2xl font-bold mb-4 sm:mb-5 text-gray-900">
              {companyInfo.title}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-black/60 mb-4">
              {companyInfo.description}
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-black/60">
              Address: 2nd Floor of B-4/1, Vijyant Khand, Gomti Nagar Yojna, Lucknow.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-black/60 mt-2">
              Contact no: +91 7388899595
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

          {/* Contact Section */}
          <div className="text-center max-w-sm flex flex-col items-center">
            <h4 className="text-base sm:text-lg font-semibold mb-5 sm:mb-6 md:mb-7 text-gray-900">
              Contact
            </h4>
            
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-sm sm:text-base text-black/60 mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-red-500 flex-shrink-0">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Lucknow
              </div>

              <div className="bg-[#001c36] text-white text-left text-[13px] sm:text-sm rounded-md p-4 w-[280px] sm:w-[300px] shadow-lg flex flex-col gap-4">
                
                {/* Map Box */}
                <div className="relative rounded overflow-hidden bg-gray-200 w-full h-[160px]">
                  <iframe 
                    src="https://maps.google.com/maps?q=Vijyant+Khand,+Gomti+Nagar+Yojna,+Lucknow&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy"
                  ></iframe>
                  
                  <Link 
                    href="https://www.google.com/maps/place/The+HI+Labs/@26.8662219,81.0215737,17z/data=!3m1!4b1!4m6!3m5!1s0x399be38d1dfb7739:0xa8d7f6a87eee91ec!8m2!3d26.8662219!4d81.0215737!16s%2Fg%2F11nb4nf8lg?entry=ttu&g_ep=EgoyMDI2MDMyMy4xIKXMDSoASAFQAw%3D%3D" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute top-2 left-2 bg-white text-blue-600 px-2.5 py-1 flex items-center gap-1.5 text-[12px] font-semibold rounded shadow-md hover:bg-gray-50 transition-colors"
                  >
                    Open in Maps 
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </Link>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-2.5 leading-snug" style={{ color: '#ffffff' }}>
                  <p style={{ color: '#ffffff' }}><strong className="font-semibold">Address:</strong> 2nd Floor of B-4/1, Vijyant Khand, Gomti Nagar Yojna, Lucknow</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Full Width Dark Bar */}
      <div className="w-full bg-[#001c36] text-white py-6 flex flex-col items-center justify-center gap-4">
        <div className="flex gap-4 sm:gap-6 items-center">
          <Link href="https://www.youtube.com/@thehilabs" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </Link>
          <Link href="https://www.facebook.com/softwaretrainingandplacementinstitute" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </Link>
          <Link href="https://x.com/thehilabs" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-white">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </Link>
          <Link href="https://www.instagram.com/thehi_labs/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0-2.881.001 1.44 1.44 0 0 0 2.881-.001z"/></svg>
          </Link>
          <Link href="https://wa.me/917388899595" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-white">
            <svg viewBox="0 0 448 512" fill="currentColor" width="20" height="20">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
          </Link>
        </div>
        <p className="text-xs sm:text-sm text-white/80 px-4 text-center">
          © {currentYear} Human Intelligence Labs Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}