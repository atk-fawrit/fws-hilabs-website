"use client";

import Link from 'next/link';
import { useState } from 'react';
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
      { label: 'Contact', href: '/contact' },
    ]
  }
];

const companyInfo = {
  title: 'HiLabs',
  description: 'Human Intelligence Labs Private Limited',
  locations: 'Bangalore | Lucknow',
  tagline: 'Engineering talent production through enforced evaluation and supervised deployment.',
};

const locations = [
  {
    name: 'Lucknow',
    fullName: 'Lucknow Branch',
    address: '2nd Floor of B-4/1, Vijyant Khand, Gomti Nagar Yojna, Lucknow',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.7234567890123!2d80.9462!3d26.8467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUwJzQ4LjEiTiA4MMKwNTYnNDYuMyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin'
  },
  {
    name: 'Bangalore',
    fullName: 'Head Office',
    address: 'No.8/2, Novel Office Centre, Halasuru Road, M G Road, Sivan Chetty Gardens, Bangalore North, Karnataka, India - 560042',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9876543210987!2d77.6088!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzYnMzEuNyJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin'
  }
];

export default function Footer({ className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  
  const handleLocationClick = (locationName: string) => {
    setSelectedLocation(selectedLocation === locationName ? null : locationName);
  };

  const selectedLocationData = locations.find(loc => loc.name === selectedLocation);
  
  return (
    <footer className={`bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 ${className}`}>
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20">
        {/* Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 max-w-6xl mx-auto">          {/* Company Info - Takes more space */}
          <div className="text-left -ml-0 md:-ml-15">
            <h3 className="font-sans text-2xl sm:text-3xl font-black mb-2 text-gray-900 tracking-tight">
              {companyInfo.title}
            </h3>
            <p className="font-sans text-base font-normal text-gray-700 mb-1">
              {companyInfo.description}
            </p>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-sans text-sm text-gray-500">{companyInfo.locations}</span>
              
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+917388899595" className="font-sans text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  +91 7388899595
                </a>
              </div>
            </div>
            <p className="font-sans text-sm text-gray-600 leading-relaxed mb-8 max-w-md">
            Engineering talent production through enforced <br />
            evaluation and supervised deployment.
          </p>
             
          </div>

          {/* Footer Sections - Distributed evenly */}
          {footerSections.map((section, index) => (
           <div
              key={index}
              className={
              index === 0
                ? "text-center md:text-center"
                : "text-center md:text-right"
            }
            >
              <h4 className="font-sans text-sm font-bold uppercase tracking-wider mb-5 text-gray-900">
                {section.title}
              </h4>
              <ul className="space-y-2 text-left inline-block ml-6 md:ml-6">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link 
                      href={link.href}
                      className="font-sans text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 inline-flex items-center gap-2 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{link.label}</span>
                      <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bottom - Dark Bar */}
      <div className="w-full bg-gray-900 text-white py-8">
        <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6">
            {/* Copyright */}
            <p className="font-sans text-sm text-gray-400 text-center">
              © {currentYear} Human Intelligence Labs Private Limited. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-5 items-center">
              <Link href="https://www.youtube.com/channel/UCZKOcVHWln1qJnTqQfn00xQ" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </Link>
              <Link href="https://www.facebook.com/people/HI-Labs/61561579883894/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </Link>
              <Link href="https://x.com/thehilabs" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </Link>
              <Link href="https://www.instagram.com/p/DXQmYxbl-qw/?igsh=cmdtcTlsNzBvZXJk" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0-2.881.001 1.44 1.44 0 0 0 2.881-.001z"/></svg>
              </Link>
              <Link href="https://www.linkedin.com/company/human-intelligence-labs-pvt-ltd/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </Link>
              <Link href="https://wa.me/917388899595" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-400 hover:text-white transition-colors duration-200">
                <svg viewBox="0 0 448 512" fill="currentColor" width="22" height="22">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}