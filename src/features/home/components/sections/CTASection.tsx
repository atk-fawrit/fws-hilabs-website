'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { CTASectionProps } from '../../types';

export function CTASection({ title, description, buttonText, buttonHref }: CTASectionProps) {
  return (
    <section className="bg-black py-8 sm:py-10 opacity-0 translate-y-12 transition-all duration-1000 [&.visible]:opacity-100 [&.visible]:translate-y-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-3 text-white px-4">
          {title}
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mb-5 sm:mb-6 text-white/75 px-4">
          {description}
        </p>
        <Link 
          href={buttonHref} 
          className="inline-flex items-center gap-2.5 sm:gap-3 md:gap-3.5 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-white text-black text-base sm:text-lg font-semibold rounded-full transition-transform duration-300 hover:-translate-y-1"
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
      </div>
    </section>
  );
}