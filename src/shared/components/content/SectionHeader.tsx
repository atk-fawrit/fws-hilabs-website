/**
 * SectionHeader Component
 * 
 * Reusable section header with title and optional description
 * Flexible sizing and alignment options
 */

import React from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  subtitle?: string; // For backward compatibility
  align?: 'left' | 'center';
  centered?: boolean; // For backward compatibility
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  descriptionMaxWidth?: string;
  badge?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
  subtitle, // backward compatibility
  align,
  centered, // backward compatibility
  size = 'lg',
  className = '',
  descriptionMaxWidth = 'max-w-3xl',
  badge,
}) => {
  // Handle backward compatibility
  const finalAlign = align || (centered ? 'center' : 'left');
  const finalDescription = description || subtitle;
  
  const alignClass = finalAlign === 'center' ? 'text-center' : 'text-left';
  
  const titleSizes = {
    sm: 'text-2xl md:text-3xl',
    md: 'text-3xl md:text-4xl',
    lg: 'text-4xl md:text-5xl',
    xl: 'text-4xl md:text-5xl lg:text-6xl',
  };

  const descriptionSizes = {
    sm: 'text-base md:text-lg',
    md: 'text-lg md:text-xl',
    lg: 'text-lg md:text-xl',
    xl: 'text-xl',
  };

  return (
    <div className={`mb-12 ${alignClass} ${className}`}>
      {badge && (
        <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-xs font-medium tracking-[0.2em] uppercase mb-6 text-white/90">
          {badge}
        </span>
      )}
      
      <h2 className={`${titleSizes[size]} font-bold text-black mb-6 tracking-tight`}>
        {title}
      </h2>
      
      {finalDescription && (
        <p className={`${descriptionSizes[size]} text-gray-700 leading-relaxed font-light ${finalAlign === 'center' ? `${descriptionMaxWidth} mx-auto` : descriptionMaxWidth}`}>
          {finalDescription}
        </p>
      )}
    </div>
  );
};
