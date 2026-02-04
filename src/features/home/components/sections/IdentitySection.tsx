'use client';

import type { IdentitySectionProps } from '../../types';

export function IdentitySection({ positiveItems, negativeItems }: IdentitySectionProps) {
  return (
    <section className="bg-black py-10 opacity-0 translate-y-12 transition-all duration-1000 [&.visible]:opacity-100 [&.visible]:translate-y-0">
      <div className="max-w-4xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block px-6 py-2.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 text-white/70">
            Our Identity
          </span>
          <h2 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-white">
            What We Are
          </h2>
        </div>

        {/* Identity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Positive */}
          <div className="p-8 bg-white/2 border border-emerald-500/15 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-center text-white">
              What HI Labs Is
            </h3>
            <ul className="flex flex-col gap-4">
              {positiveItems.map((item, index) => (
                <li key={index} className="relative pl-8 text-base leading-relaxed text-white/80">
                  <div className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Negative */}
          <div className="p-8 bg-white/2 border border-red-500/15 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6 text-center text-white">
              What HI Labs Is Not
            </h3>
            <ul className="flex flex-col gap-4">
              {negativeItems.map((item, index) => (
                <li key={index} className="relative pl-8 text-base leading-relaxed text-white/80">
                  <div className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-red-400 rounded-full"></div>
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