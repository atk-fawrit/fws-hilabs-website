/**
 * HeroSection Component
 * 
 * Reusable hero section with image/video background and overlay
 * Used for page headers across different pages
 */

import React from 'react';
import { H1 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { HeroSectionProps } from '@/src/shared/types/layout.types';

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  description,
  backgroundType = 'image',
  backgroundSrc,
  overlayColor = 'bg-primary/60',
  height = 'h-[300px]',
  textColor = 'text-white',
  className = '',
}) => {
  return (
    <section className={`relative ${height} ${className}`}>
      {/* Background */}
      {backgroundType === 'video' ? (
        <div className="absolute inset-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={backgroundSrc} type="video/mp4" />
          </video>
        </div>
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: backgroundSrc ? `url("${backgroundSrc}")` : undefined
          }}
        />
      )}
      
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayColor}`} />
      
      {/* Content */}
      <div className="relative h-full flex items-center px-6 md:px-8">
        <div className={`max-w-4xl ${textColor === 'text-white' ? 'hero-text-white' : ''}`}>
          <H1 className={`text-4xl md:text-5xl font-light ${textColor} mb-4`}>
            {title}
          </H1>
          {description && (
            <BodyText className={`text-lg md:text-xl ${textColor} leading-relaxed`}>
              {description}
            </BodyText>
          )}
        </div>
      </div>
    </section>
  );
};