'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ExploreSectionProps } from '../../types';

export function ExploreSection({ cards }: ExploreSectionProps) {
  return (
    <section 
      className="py-12 bg-cover bg-center opacity-0 translate-y-12 transition-all duration-1000 [&.visible]:opacity-100 [&.visible]:translate-y-0"
      style={{ backgroundImage: "url('/images/Explore-bg.jpg')" }}
    >
      <div className="w-full mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-8 max-w-6xl mx-auto">
          <div className="inline-block px-6 py-2.5 bg-white/90 border border-black/10 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 text-gray-900">
            Explore More
          </div>
          <h2 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-gray-900">
            Discover Excellence
          </h2>
          <p className="text-lg md:text-xl font-light leading-relaxed text-gray-700">
            Explore our comprehensive ecosystem of engineering education
          </p>
        </div>

        {/* Cards Container */}
        <div className="rounded-3xl p-10 shadow-lg max-w-[calc(100%-8rem)] mx-auto" style={{ backgroundColor: '#152238' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-16">
            {cards.map((card, index) => (
              <Link 
                key={index} 
                href={card.href} 
                className="rounded-2xl overflow-hidden bg-white shadow-sm border border-black/5 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-45 w-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-7 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-base leading-relaxed text-gray-600 mb-6 flex-grow">
                    {card.description}
                  </p>
                  <div className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-50 border border-gray-200 rounded-lg text-base font-semibold text-accent transition-all duration-300 self-start hover:bg-accent hover:text-white hover:gap-3">
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