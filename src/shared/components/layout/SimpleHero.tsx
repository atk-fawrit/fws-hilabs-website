/**
 * SimpleHero Component
 * 
 * Reusable hero section with background image, overlay, and content
 * Used in: Admissions, Courses, and similar pages
 */

import React from 'react';
import Image from 'next/image';

interface SimpleHeroProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  badge?: {
    icon?: React.ReactNode;
    text: string;
  };
  overlayOpacity?: 'light' | 'medium' | 'dark';
  height?: string;
  contentMaxWidth?: string;
}

export const SimpleHero: React.FC<SimpleHeroProps> = ({
  image,
  imageAlt,
  title,
  description,
  badge,
  overlayOpacity = 'dark',
  height = 'h-[400px]',
  contentMaxWidth = 'max-w-4xl',
}) => {
  const overlayClasses = {
    light: 'bg-black/40',
    medium: 'bg-black/60',
    dark: 'bg-black/60',
  };

  return (
    <section className={`relative ${height} overflow-hidden`}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />
      <div className={`absolute inset-0 ${overlayClasses[overlayOpacity]}`}></div>
      
      <div className="relative h-full flex items-end sm:items-center pt-20 pb-8 sm:pt-24 sm:pb-0 px-4 sm:px-6 md:px-8">
        <div className={`${contentMaxWidth} text-white`}>
          {badge && (
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              {badge.icon}
              {badge.text}
            </div>
          )}
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SimpleHero;
