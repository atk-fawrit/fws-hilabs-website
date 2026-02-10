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
      
      <div className="relative h-full flex items-center px-6 md:px-8">
        <div className={`${contentMaxWidth} text-white`}>
          {badge && (
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
              {badge.icon}
              {badge.text}
            </div>
          )}
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SimpleHero;
