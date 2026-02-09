/**
 * ImageCard Component
 * 
 * Modern reusable card with image, title, description and link
 * Features contemporary design with enhanced shadows, animations, and effects
 */

import React from 'react';
import { H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { ImageCardProps } from '@/src/shared/types/content.types';

export const ImageCard: React.FC<ImageCardProps> = ({
  title,
  description,
  image,
  href,
  onClick,
  imageHeight = 'h-48',
  className = '',
}) => {
  const baseClasses = `
    bg-gradient-to-br from-white to-gray-50/50
    border-2 border-secondary/10 hover:border-accent/30
    shadow-lg shadow-black/5 hover:shadow-2xl hover:shadow-accent/10
    transition-all duration-300 ease-out
    cursor-pointer group overflow-hidden
    hover:-translate-y-2 hover:scale-[1.02]
    backdrop-blur-sm
    ${className}
  `;

  const content = (
    <>
      <div className={`
        relative w-full ${imageHeight} bg-cover bg-center overflow-hidden
        transition-transform duration-700 ease-out
        group-hover:scale-105
      `} style={{
        backgroundImage: `url("${image}")`
      }}>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-primary/20 group-hover:from-primary/60 group-hover:via-primary/20 group-hover:to-transparent transition-all duration-500"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-2xl">
            <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        {/* Subtle shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
      </div>
      <div className="p-8">
        <H3 className="text-xl font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300 tracking-tight leading-tight">
          {title}
        </H3>
        <BodyText className="text-secondary leading-relaxed text-base">
          {description}
        </BodyText>
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <div onClick={onClick} className={baseClasses}>
      {content}
    </div>
  );
};