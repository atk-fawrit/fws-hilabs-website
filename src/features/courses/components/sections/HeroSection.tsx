/**
 * Hero Section
 * 
 * Hero banner for courses page
 */

import React from 'react';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[400px] overflow-hidden">
      <Image
        src="/images/C-bgimg.jpg"
        alt="Short Programs"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative h-full flex items-center px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Weekend Programs Available
          </div>
          
          <h1 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            Short Programs
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Weekend-based technical training modules designed for working professionals 
            seeking targeted skill development without full-time commitment.
          </p>
        </div>
      </div>
    </section>
  );
};
