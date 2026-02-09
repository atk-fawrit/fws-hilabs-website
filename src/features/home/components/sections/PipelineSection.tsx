'use client';

import { useState, useEffect, useRef } from 'react';
import type { PipelineSectionProps } from '../../types';
import '../../styles/PipelineSection.styles.css';

export function PipelineSection({ stages }: PipelineSectionProps) {
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState<{ [key: string]: { x: number; y: number } }>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, stageId: string, index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePos(prev => ({ ...prev, [stageId]: { x, y } }));
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * -8;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px) scale(1.02)`;
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0) scale(1)';
  };

  return (
    <section ref={sectionRef} className="relative bg-black py-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-[1]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/bg-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-light text-4xl md:text-5xl lg:text-6xl mb-4 text-white tracking-tight">
            12-Month Engineering Pipeline
          </h2>
          <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto text-white/90">
            Systematic talent development through structured phases
          </p>
        </div>

        {/* Pipeline */}
        <div className="relative py-8">
          {/* Animated Flow Line */}
          <div className="absolute top-1/2 left-[8%] right-[8%] h-px -translate-y-1/2 z-[1] hidden lg:block overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            {isVisible && (
              <>
                {/* Flowing particles */}
                <div className="absolute inset-0">
                  <div className="absolute h-2 w-32 bg-gradient-to-r from-transparent via-white/90 to-transparent animate-flowParticle1"></div>
                  <div className="absolute h-2 w-28 bg-gradient-to-r from-transparent via-white/70 to-transparent animate-flowParticle2"></div>
                  <div className="absolute h-2 w-24 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-flowParticle3"></div>
                </div>
              </>
            )}
          </div>
          
          {/* Pipeline - Single Row Flex Container */}
          <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-3 relative z-10">
            {stages.map((stage, index) => (
              <div 
                key={stage.id} 
                className={`flex flex-col lg:flex-row items-center flex-1 lg:basis-0 ${index === stages.length - 1 ? 'lg:max-w-[200px]' : ''}`}
                style={{
                  animation: isVisible ? `slideInRight 0.8s ease forwards` : 'none',
                  animationDelay: `${index * 0.15}s`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-50px)'
                }}
              >
                {/* Pipeline Card */}
                <div
                  ref={(el) => { cardRefs.current[index] = el; }}
                  className={`relative w-full h-full min-h-[280px] p-6 bg-black/50 backdrop-blur-md border border-white/30 transition-all duration-300 group ${
                    hoveredStage === stage.id ? 'border-white/60 bg-black/70' : ''
                  }`}
                  onMouseEnter={() => setHoveredStage(stage.id)}
                  onMouseLeave={() => {
                    setHoveredStage(null);
                    handleMouseLeave(index);
                  }}
                  onMouseMove={(e) => handleMouseMove(e, stage.id, index)}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Magnetic Spotlight Effect */}
                  {hoveredStage === stage.id && mousePos[stage.id] && (
                    <div 
                      className="absolute inset-0 pointer-events-none opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle 200px at ${mousePos[stage.id].x}px ${mousePos[stage.id].y}px, rgba(255,255,255,0.2), transparent 70%)`,
                      }}
                    ></div>
                  )}

                  {/* Animated Border Glow */}
                  <div className="absolute -inset-[2px] bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                    style={{
                      animation: hoveredStage === stage.id ? 'borderFlow 2s linear infinite' : 'none'
                    }}
                  ></div>

                  {/* Animated Corner Accents */}
                  <div className="absolute top-0 left-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-white/90 to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-white/90 to-transparent origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100"></div>
                  </div>
                  <div className="absolute bottom-0 right-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-white/90 to-transparent origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    <div className="absolute bottom-0 right-0 h-full w-[2px] bg-gradient-to-t from-white/90 to-transparent origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 delay-100"></div>
                  </div>

                  {/* Floating Particles on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                    <div className="absolute w-1.5 h-1.5 bg-white/80 rounded-full animate-floatParticle1" style={{ top: '20%', left: '15%' }}></div>
                    <div className="absolute w-1 h-1 bg-white/60 rounded-full animate-floatParticle2" style={{ top: '60%', left: '80%' }}></div>
                    <div className="absolute w-1 h-1 bg-white/70 rounded-full animate-floatParticle3" style={{ top: '40%', left: '50%' }}></div>
                    <div className="absolute w-0.5 h-0.5 bg-white/90 rounded-full animate-floatParticle4" style={{ top: '75%', left: '25%' }}></div>
                    <div className="absolute w-1 h-1 bg-white/50 rounded-full animate-floatParticle5" style={{ top: '30%', left: '70%' }}></div>
                  </div>
                  
                  {/* Stage Number with Glow */}
                  <div className="mb-4 relative" style={{ transform: 'translateZ(20px)' }}>
                    <span className="inline-block text-xs font-light tracking-[0.3em] text-white/80 uppercase relative z-10 group-hover:text-white transition-all duration-300">
                      Stage {stage.number}
                    </span>
                    <div className="absolute inset-0 blur-lg bg-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
                  </div>
                  
                  {/* Content with 3D depth */}
                  <div className="space-y-2 mb-4 relative z-10" style={{ transform: 'translateZ(30px)' }}>
                    <h3 className="text-xl font-light text-white tracking-tight transition-all duration-300 group-hover:text-white group-hover:translate-x-1">
                      {stage.title}
                    </h3>
                    <p className="text-xs font-light tracking-wider uppercase text-white/90 group-hover:text-white transition-all duration-300 delay-75">
                      {stage.subtitle}
                    </p>
                  </div>
                  
                  {/* Duration */}
                  <div className="mt-auto pt-3 relative z-10" style={{ transform: 'translateZ(20px)' }}>
                    <p className="text-xs font-light text-white/70 tracking-wide group-hover:text-white/90 transition-colors duration-300">
                      {stage.duration}
                    </p>
                  </div>
                  
                  {/* Progress Indicator with Flow */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20 overflow-hidden">
                    {isVisible && (
                      <>
                        <div 
                          className="h-full bg-white/60 transition-all duration-1000"
                          style={{
                            animation: `expandWidth 1.5s ease forwards`,
                            animationDelay: `${0.3 + index * 0.15}s`,
                            width: 0
                          }}
                        ></div>
                        <div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/90 to-transparent w-1/3"
                          style={{
                            animation: 'shimmerProgress 2.5s ease-in-out infinite',
                            animationDelay: `${index * 0.3}s`
                          }}
                        ></div>
                      </>
                    )}
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-t from-white/15 to-transparent"></div>
                  </div>

                  {/* Pulse indicator on hover */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transform: 'translateZ(50px)' }}>
                    <div className="absolute inset-0 bg-white animate-ping"></div>
                    <div className="absolute inset-0 bg-white rounded-full"></div>
                  </div>

                  {/* Scan line effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                    <div className="absolute w-full h-32 bg-gradient-to-b from-transparent via-white/15 to-transparent -top-32 animate-scanLine"></div>
                  </div>
                </div>

                {/* Animated Connector Arrow */}
                {index < stages.length - 1 && (
                  <div className="flex-shrink-0 relative my-3 lg:my-0 lg:mx-2">
                    {/* Desktop Arrow */}
                    <div className="hidden lg:flex items-center justify-center w-10 h-px">
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-white/30"></div>
                        {isVisible && (
                          <div 
                            className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"
                            style={{
                              animation: 'flowRight 1.5s ease-in-out infinite',
                              animationDelay: `${index * 0.4}s`
                            }}
                          ></div>
                        )}
                      </div>
                      <div className="w-0 h-0 border-l-[8px] border-l-white/80 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-1"></div>
                    </div>
                    {/* Mobile Arrow */}
                    <div className="lg:hidden flex flex-col items-center justify-center h-8 w-px mx-auto">
                      <div className="relative w-full h-full">
                        <div className="absolute inset-0 bg-white/30"></div>
                        {isVisible && (
                          <div 
                            className="absolute inset-0 bg-gradient-to-b from-white/90 to-transparent"
                            style={{
                              animation: 'flowDown 1.5s ease-in-out infinite',
                              animationDelay: `${index * 0.4}s`
                            }}
                          ></div>
                        )}
                      </div>
                      <div className="w-0 h-0 border-t-[10px] border-t-white/80 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent mt-1"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}