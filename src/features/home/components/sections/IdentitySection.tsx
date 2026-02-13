'use client';

import type { IdentitySectionProps } from '../../types';

export function IdentitySection({ positiveItems, negativeItems }: IdentitySectionProps) {
  return (
    <section className="bg-black py-8 sm:py-10 opacity-0 translate-y-12 transition-all duration-1000 [&.visible]:opacity-100 [&.visible]:translate-y-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-7 md:mb-8">
          <span className="inline-block px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 bg-white/5 border border-white/10 rounded-full text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4 text-white/70">
            Our Identity
          </span>
          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 text-white px-4">
            What We Are
          </h2>
        </div>

        {/* Identity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8">
          {/* Positive */}
          <div className="p-6 sm:p-7 md:p-8 bg-white/2 border border-emerald-500/15 rounded-xl sm:rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6 text-center text-white">
              What HI Labs Is
            </h3>
            <ul className="flex flex-col gap-3 sm:gap-4">
              {positiveItems.map((item, index) => (
                <li key={index} className="relative pl-6 sm:pl-8 text-sm sm:text-base leading-relaxed text-white/80">
                  <div className="absolute left-0 top-2 sm:top-2.5 w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Negative */}
          <div className="p-6 sm:p-7 md:p-8 bg-white/2 border border-red-500/15 rounded-xl sm:rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6 text-center text-white">
              What HI Labs Is Not
            </h3>
            <ul className="flex flex-col gap-3 sm:gap-4">
              {negativeItems.map((item, index) => (
                <li key={index} className="relative pl-6 sm:pl-8 text-sm sm:text-base leading-relaxed text-white/80">
                  <div className="absolute left-0 top-2 sm:top-2.5 w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}