/**
 * Hero Video Section
 * 
 * Video hero section for flagship program page
 */

import React from 'react';
import { H1 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

export const HeroVideoSection: React.FC = () => {
  return (
    <section className="relative h-[400px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/flagship-program-hero.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/70" />
      
      {/* Content */}
   
    </section>
  );
};