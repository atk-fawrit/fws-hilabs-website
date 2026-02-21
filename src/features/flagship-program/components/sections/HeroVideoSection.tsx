/**
 * Hero Video Section
 * 
 * Video background only - content card will overlap from ProgramOverviewSection
 */

import React from 'react';

export const HeroVideoSection: React.FC = () => {
  return (
    <section className="relative h-[400px] sm:h-[450px] md:h-[550px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/images/flagship-program-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Text Overlay on Video */}
      <div className="relative h-full flex items-end sm:items-start justify-start px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 pb-8 sm:pb-0">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-3 sm:mb-4 text-white leading-tight">
            12-Month Engineering Production System
          </h1>
          <p className="text-base sm:text-lg text-white/90 leading-relaxed">
            Structured talent development through enforced evaluation and supervised deployment protocols
          </p>
        </div>
      </div>
    </section>
  );
};
