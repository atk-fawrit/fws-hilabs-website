/**
 * Hero Section
 * 
 * Hero banner for admissions page
 */

import React from 'react';
import Image from 'next/image';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[400px] overflow-hidden">
      <Image
        src="/images/commitment-risk-discussion.jpg"
        alt="Admissions Process"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative h-full flex items-center px-6 md:px-8">
        <div className="max-w-4xl text-white">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Admissions
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            A rigorous selection system designed to identify candidates capable of completing our 12-month engineering talent production program
          </p>
        </div>
      </div>
    </section>
  );
};
