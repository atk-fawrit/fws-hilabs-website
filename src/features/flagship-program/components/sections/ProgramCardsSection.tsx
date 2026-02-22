/**
 * Program Cards Section
 * 
 * Interactive cards with latest 2024-2025 animation trends:
 * - 3D perspective tilt on hover
 * - Magnetic attraction effect
 * - Smooth parallax background movement
 * - Glassmorphism and depth effects
 */

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { programSections } from '../../data';
import '../../styles/ProgramCardsSection.styles.css';

interface ProgramCardsSectionProps {
  onCardClick: (sectionId: string) => void;
}

export const ProgramCardsSection: React.FC<ProgramCardsSectionProps> = ({ onCardClick }) => {
  const filteredSections = programSections.filter(section => section.id !== 'specification');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = document.querySelectorAll('.magnetic-card');
    
    cards.forEach((card) => {
      const cardElement = card as HTMLElement;
      
      // 3D tilt effect on mouse move
      const handleMouseMove = (e: MouseEvent) => {
        const rect = cardElement.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        
        cardElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale(1.05)`;
        
        // Update gradient position for glow effect
        const glowX = (x / rect.width) * 100;
        const glowY = (y / rect.height) * 100;
        cardElement.style.setProperty('--mouse-x', `${glowX}%`);
        cardElement.style.setProperty('--mouse-y', `${glowY}%`);
      };
      
      const handleMouseLeave = () => {
        cardElement.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale(1)';
      };
      
      cardElement.addEventListener('mousemove', handleMouseMove);
      cardElement.addEventListener('mouseleave', handleMouseLeave);
    });

    // Parallax scroll effect
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax-layer');
      
      parallaxElements.forEach((element, index) => {
        const speed = 0.3 + (index * 0.05);
        const yPos = -(scrolled * speed * 0.1);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="w-full mb-12" ref={containerRef}>
      {/* Dark blue background container */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-4 sm:p-6 md:p-8 lg:p-12 rounded-xl sm:rounded-2xl relative overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>

        <div className="relative z-10 mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-2 sm:mb-3 slide-up">
            Program Phases & Support
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-3xl slide-up" style={{ animationDelay: '0.1s' }}>
            Explore detailed documentation for each phase and process of the flagship program
          </p>
        </div>

        {/* Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {filteredSections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => onCardClick(section.id)}
              className="magnetic-card parallax-layer group text-left"
              style={{
                animationDelay: `${index * 0.15}s`,
                '--mouse-x': '50%',
                '--mouse-y': '50%'
              } as React.CSSProperties}
            >
              {/* Rotating gradient border */}
              <div className="gradient-border" />
              
              {/* Inner glow that follows mouse */}
              <div className="inner-glow" />
              
              {/* Card content wrapper */}
              <div className="card-content-wrapper flex flex-col h-full">
                {/* Image with parallax effect */}
                <div className="relative h-48 overflow-hidden flex-shrink-0 w-full">
                  <div className="image-wrapper relative w-full h-full">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  {/* Shine effect */}
                  <div className="shine-effect" />

                  {/* Color overlay */}
                  <div className={`color-overlay overlay-${index + 1}`} />
                </div>

                {/* Content */}
                <div className="p-6 relative bg-white flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight relative z-10">
                    {section.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow">
                    {section.description}
                  </p>

                  {/* Animated CTA */}
                  <div className="flex items-center text-blue-600 font-semibold text-sm cta-arrow mt-auto">
                    <span>View Details</span>
                    <svg className="w-4 h-4 ml-2 arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
