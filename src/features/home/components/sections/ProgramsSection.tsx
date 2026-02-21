'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { ProgramsSectionProps } from '../../types';

export function ProgramsSection({ programs, backgroundImage }: ProgramsSectionProps) {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-[1]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src="/images/bg-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/30"></div>
      </div>

      {/* Background Image Layer */}
      <div className="absolute top-0 left-20 right-20 bottom-[300px] z-[5] overflow-hidden">
        <Image
          src={backgroundImage}
          alt="Transform Your Future Background"
          fill
          priority
          className="w-full h-full object-cover object-center brightness-[0.7] contrast-[1.1]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen py-16">
        <div className="max-w-[1300px] mx-auto px-8">
          {/* Header */}
          <div className="text-center mb-16 relative z-[15] pt-8">
            <span className="inline-block px-6 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-xs font-medium tracking-[0.2em] uppercase mb-4 text-white/90">
              Our Programs
            </span>
            <h2 className="font-mono text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Transform Your Future
            </h2>
            <p className="text-lg md:text-xl font-light leading-relaxed max-w-[600px] mx-auto text-gray-900">
              Choose your pathway to job security
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <Link 
                key={index} 
                href={program.href} 
                className="rounded-lg overflow-hidden bg-white border border-black/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-3 relative -mt-8 group"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 right-6 flex justify-between z-10">
                    <span className="px-6 py-3 bg-white/95 backdrop-blur-sm rounded-full text-sm font-bold text-gray-900 shadow-sm">
                      {program.badge}
                    </span>
                    <span className="px-6 py-3 bg-black/80 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold text-white">
                      {program.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 bg-white">
                  <p className="text-xs font-bold tracking-wider uppercase text-gray-500 mb-4">
                    {program.tagline}
                  </p>
                  <h3 className="text-2xl font-bold mb-5 text-gray-900 leading-tight">
                    {program.title}
                  </h3>
                  <p className="text-base leading-relaxed mb-10 text-gray-600">
                    {program.description}
                  </p>
                  <div className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white rounded-full text-base font-semibold transition-all duration-300 relative overflow-hidden group-hover:bg-gray-800 group-hover:-translate-y-1">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}