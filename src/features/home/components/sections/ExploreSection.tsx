'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ExploreSectionProps } from '../../types';

export function ExploreSection({ cards }: ExploreSectionProps) {
  return (
    <section 
      className="py-8 sm:py-10 md:py-12 bg-cover bg-center opacity-0 translate-y-12 transition-all duration-1000 [&.visible]:opacity-100 [&.visible]:translate-y-0"
      style={{ backgroundImage: "url('/images/Explore-bg.jpg')" }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-7 md:mb-8 max-w-6xl mx-auto">
          <div className="inline-block px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 bg-white/90 border border-black/10 rounded-full text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3 sm:mb-4 text-gray-900">
            Explore More
          </div>
          <h2 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 text-gray-900 px-4">
            Discover Excellence
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed text-gray-700 px-4">
            Explore our comprehensive ecosystem of engineering education
          </p>
        </div>

        {/* Cards Container */}
        <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg max-w-full sm:max-w-[calc(100%-4rem)] md:max-w-[calc(100%-6rem)] lg:max-w-[calc(100%-8rem)] mx-auto" style={{ backgroundColor: '#152238' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 xl:gap-16">
            {cards.map((card, index) => (
              <Link 
                key={index} 
                href={card.href} 
                className="rounded-xl sm:rounded-2xl overflow-hidden bg-white shadow-sm border border-black/5 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-40 sm:h-45 w-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 md:p-7 flex-grow flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-gray-600 mb-4 sm:mb-5 md:mb-6 flex-grow">
                    {card.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 md:py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-sm sm:text-base font-semibold text-accent transition-all duration-300 self-start hover:bg-accent hover:text-white hover:gap-3">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}