'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { CTASectionProps } from '../../types';

export function CTASection({ title, description, buttonText, buttonHref }: CTASectionProps) {
  return (
    <section className="bg-black py-10 opacity-0 translate-y-12 transition-all duration-1000 [&.visible]:opacity-100 [&.visible]:translate-y-0">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <h2 className="font-mono text-5xl md:text-6xl lg:text-7xl font-bold mb-3 text-white">
          {title}
        </h2>
        <p className="text-xl md:text-2xl lg:text-3xl font-light mb-6 text-white/75">
          {description}
        </p>
        <Link 
          href={buttonHref} 
          className="inline-flex items-center gap-3.5 px-12 py-6 bg-white text-black text-lg font-semibold rounded-full transition-transform duration-300 hover:-translate-y-1"
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}