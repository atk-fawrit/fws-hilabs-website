'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { HeroSectionProps } from '../../types';

export function HeroSection({ images }: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(imageInterval);
    };
  }, [images.length]);

  const getContentAlignment = (position: string) => {
    switch (position) {
      case 'left':
        return 'mr-auto ml-[8%] text-left';
      case 'far-left':
        return 'mr-auto ml-[4%] text-left';
      default:
        return 'text-center';
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {images.map((imageData, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={imageData.src}
              alt={`Hero ${index + 1}`}
              fill
              className="w-full h-full object-cover object-center"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-radial from-black/30 via-black/50 to-black/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-12 mr-auto ml-[8%] text-left">
        {/* Badge */}
        <div className="inline-flex items-center gap-3.5 px-8 py-4 bg-white/10 border border-white/20 rounded-full text-sm font-medium tracking-wide uppercase mb-8 text-white backdrop-blur-sm">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          Engineering Talent Production Lab
        </div>

        {/* Title */}
        <h1 className="font-mono text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.9] mb-6 text-white drop-shadow-lg">
          HI LABS
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-xl md:text-2xl lg:text-3xl font-light leading-relaxed mb-8 text-white/95 drop-shadow-md">
          Engineering talent production and deployment
        </p>

        {/* Description */}
        <p className="font-sans text-base md:text-lg lg:text-xl font-normal leading-relaxed mb-12 text-white/90 max-w-3xl drop-shadow-sm">
          Do you consistently demonstrate technical aptitude?<br />
          Are you seeking rigorous engineering training?
        </p>

        {/* CTA Button */}
        <Link 
          href="/admissions" 
          className="inline-flex items-center gap-4 px-8 py-4 bg-white text-black text-base font-semibold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg font-sans"
        >
          <span>Submit Application for Review</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-50 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white" />
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full border-2 transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-white/90 border-white/90'
                : 'bg-transparent border-white/40 hover:border-white/70'
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Show image ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}