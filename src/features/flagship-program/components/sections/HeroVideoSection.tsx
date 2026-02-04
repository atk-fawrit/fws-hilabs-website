/**
 * Hero Video Section
 * 
 * Optimized video hero section with poster image and lazy loading
 */

import React, { useState } from 'react';
import Image from 'next/image';
import { H1, BodyText } from '@/src/shared/components/typography';

export const HeroVideoSection: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative h-[400px] overflow-hidden">
      {/* Poster Image (loads first) */}
      {!showVideo && (
        <div className="absolute inset-0">
          <Image
            src="/images/students-learning.jpg" // Using existing image as poster
            alt="HI Labs Engineering Program"
            fill
            className="object-cover"
            priority={true} // Load immediately since it's above the fold
            quality={85}
            sizes="100vw"
          />
        </div>
      )}

      {/* Video (loads only when requested) */}
      {showVideo && (
        <div className="absolute inset-0">
          {!videoLoaded && (
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-sm text-gray-600">Loading video...</p>
              </div>
            </div>
          )}
          <video
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source src="/images/flagship-program-hero.mp4" type="video/mp4" />
          </video>
        </div>
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/70" />
      
      {/* Content */}
      <div className="relative h-full flex items-center px-6 md:px-8">
        <div className="max-w-4xl text-white">
          <H1 className="text-4xl md:text-5xl font-light text-white mb-4">
            12-Month Engineering Production System
          </H1>
          <BodyText className="text-lg md:text-xl text-white leading-relaxed mb-6">
            Structured talent development through enforced evaluation and supervised deployment protocols
          </BodyText>
          
          {/* Play Video Button */}
          {!showVideo && (
            <button
              onClick={() => setShowVideo(true)}
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-white px-6 py-3 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-7a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Watch Program Overview</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};