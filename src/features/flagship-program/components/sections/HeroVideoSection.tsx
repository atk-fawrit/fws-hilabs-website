/**
 * Hero Video Section
 * 
 * Video hero section for flagship program page
 */

import React from 'react';
import { HeroSection } from '@/src/shared/components/layout';

export const HeroVideoSection: React.FC = () => {
  return (
    <HeroSection
      title="12-Month Engineering Production System"
      description="Structured talent development through enforced evaluation and supervised deployment protocols"
      backgroundType="video"
      backgroundSrc="/images/flagship-program-hero.mp4"
      overlayColor="bg-primary/70"
      height="h-[400px]"
    />
  );
};