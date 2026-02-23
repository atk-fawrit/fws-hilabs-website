"use client";

import { useState, useEffect, useRef } from "react";
import type { PipelineSectionProps } from "../../types";
import "../../styles/HeroSection.styles.css";

export function HeroSection({ stages }: PipelineSectionProps) {
  const [hoveredStage, setHoveredStage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState<{
    [key: string]: { x: number; y: number };
  }>({});
  const [typedText, setTypedText] = useState("");
  const [typedSubtext, setTypedSubtext] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [highlightedCard, setHighlightedCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const mainText = "HI LABS";
  const subText = "Engineering talent production and deployment";

  // Typing effect for main text
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= mainText.length) {
        setTypedText(mainText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Start subtext after main text is done
        setTimeout(() => {
          let subIndex = 0;
          const subTypingInterval = setInterval(() => {
            if (subIndex <= subText.length) {
              setTypedSubtext(subText.slice(0, subIndex));
              subIndex++;
            } else {
              clearInterval(subTypingInterval);
              // Stop cursor blinking after everything is typed
              setTimeout(() => setShowCursor(false), 500);
            }
          }, 50);
        }, 200);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // Cursor blinking effect
  useEffect(() => {
    if (!showCursor) return;
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, [showCursor]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Start sequential highlight after cards finish animating - with smoother timing
          const startHighlightLoop = () => {
            setTimeout(() => {
              let currentCard = 0;
              const highlightInterval = setInterval(() => {
                setHighlightedCard(currentCard);
                currentCard++;
                if (currentCard >= stages.length) {
                  clearInterval(highlightInterval);
                  // Smooth fade out of highlight
                  setTimeout(() => {
                    setHighlightedCard(null);
                    // Restart the loop after a longer pause for breathing room
                    setTimeout(startHighlightLoop, 2500);
                  }, 800);
                }
              }, 700); // Slower, more deliberate highlight transitions
            }, 2500); // Wait for cards to fully settle with animations
          };

          // Start the initial loop
          startHighlightLoop();
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [stages.length]);

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    stageId: string,
    index: number,
  ) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos((prev) => ({ ...prev, [stageId]: { x, y } }));

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Reduced rotation for smoother effect
    const rotateX = ((y - centerY) / centerY) * 3;
    const rotateY = ((x - centerX) / centerX) * -3;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px) scale(1.02)`;
  };

  const handleMouseLeave = (index: number) => {
    const card = cardRefs.current[index];
    if (!card) return;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0) scale(1)";
  };

  // Animation delay for staggered entrance
  const getCardDelay = (index: number) => {
    const centerIndex = 2;
    const distance = Math.abs(index - centerIndex);
    return distance * 0.15;
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* Video Background with refined opacity */}
      <div className="absolute inset-0 z-[1]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-35"
        >
          <source src="/images/Mbgvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/15 to-white/30"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Hero Text with Typing Effect */}
        <div className="flex-shrink-0 flex items-center justify-center pt-20 sm:pt-24 pb-6 sm:pb-8 md:pb-12 lg:pb-16 px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[1.15] text-black drop-shadow-sm">
              {typedText}
              {typedText.length < mainText.length && (
                <span className="inline-block w-[2px] sm:w-[3px] h-[0.9em] bg-black ml-1 align-middle animate-blink"></span>
              )}
            </h1>
            {typedText.length === mainText.length && (
              <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light mt-4 md:mt-6 opacity-0 animate-fadeIn text-black drop-shadow-sm px-4">
                {typedSubtext}
                {showCursor && typedSubtext.length === subText.length && (
                  <span className="inline-block w-[1.5px] sm:w-[2px] h-[0.8em] bg-black/90 ml-1 align-middle"></span>
                )}
                {typedSubtext.length < subText.length && (
                  <span className="inline-block w-[1.5px] sm:w-[2px] h-[0.8em] bg-black/90 ml-1 align-middle animate-blink"></span>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="text-center">
          <h2 className="font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-3 sm:mb-5 text-black tracking-tight px-4">
            AI-Enriched Software Engineering{" "}
          </h2>
          <p className="text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto text-black/70">
            HiLabs Flagship Program
          </p>
        </div>

        {/* Pipeline Section */}
        <div className="flex-1 px-2 sm:px-4 md:px-6 lg:px-12 pb-8 md:pb-12 lg:pb-16">
          <div className="relative max-w-[1600px] mx-auto">
            <div className="relative z-10 py-6 md:py-8 lg:py-10 px-2 sm:px-4 md:px-6 lg:px-12">
              
              {/* Pipeline Cards */}
              <div className="relative py-4 md:py-6 lg:py-8 mb-8 md:mb-12 lg:mb-16">
                {/* Enhanced Flow Line with gradient - Hidden on mobile */}
                <div className="absolute top-1/2 left-[5%] right-[5%] h-[2px] -translate-y-1/2 z-[1] hidden lg:block overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/25 to-transparent"></div>
                  {isVisible && (
                    <div className="absolute inset-0">
                      <div className="absolute h-[3px] w-40 bg-gradient-to-r from-transparent via-black/60 to-transparent animate-flowParticle1 blur-[0.5px]"></div>
                      <div className="absolute h-[3px] w-32 bg-gradient-to-r from-transparent via-black/50 to-transparent animate-flowParticle2 blur-[0.5px]"></div>
                      <div className="absolute h-[2px] w-24 bg-gradient-to-r from-transparent via-black/40 to-transparent animate-flowParticle3"></div>
                    </div>
                  )}
                </div>

                {/* Mobile/Tablet: Vertical Stack */}
                <div className="lg:hidden w-full max-w-sm sm:max-w-md mx-auto space-y-4 sm:space-y-6 px-2 sm:px-4">
                  {stages.map((stage, index) => (
                    <div 
                      key={stage.id}
                      className="w-full"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                        transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`,
                      }}
                    >
                      <div
                        ref={(el) => { cardRefs.current[index] = el; }}
                        className={`relative w-full p-5 sm:p-6 backdrop-blur-xl border-2 rounded-xl sm:rounded-2xl group overflow-hidden ${
                          hoveredStage === stage.id 
                            ? 'bg-gradient-to-br from-black/95 via-black/92 to-black/88 border-white/60 shadow-2xl shadow-black/50' 
                            : 'bg-gradient-to-br from-black/92 via-black/88 to-black/85 border-white/35 hover:border-white/45 shadow-xl shadow-black/30'
                        } ${
                          highlightedCard === index
                            ? 'ring-4 ring-white/30 ring-offset-0 shadow-2xl shadow-black/60 border-white/65'
                            : ''
                        }`}
                        onMouseEnter={() => setHoveredStage(stage.id)}
                        onMouseLeave={() => {
                          setHoveredStage(null);
                          handleMouseLeave(index);
                        }}
                        onMouseMove={(e) => handleMouseMove(e, stage.id, index)}
                        style={{
                          transformStyle: 'preserve-3d',
                          transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                          transform: highlightedCard === index ? 'scale(1.03) translateZ(5px)' : undefined,
                        }}
                      >
                        <div className="absolute inset-[1px] bg-gradient-to-br from-white/8 to-transparent rounded-xl sm:rounded-2xl pointer-events-none opacity-70"></div>
                        {hoveredStage === stage.id && mousePos[stage.id] && (
                          <div className="absolute inset-0 pointer-events-none transition-opacity duration-500 rounded-xl sm:rounded-2xl overflow-hidden"
                            style={{ opacity: 0.9, background: `radial-gradient(circle 150px at ${mousePos[stage.id].x}px ${mousePos[stage.id].y}px, rgba(255,255,255,0.15), transparent 70%)` }}
                          ></div>
                        )}
                        {highlightedCard === index && (
                          <>
                            <div className="absolute -inset-2 rounded-xl sm:rounded-2xl bg-white/20 animate-pulse-ring-1 pointer-events-none"></div>
                            <div className="absolute -inset-1 rounded-xl sm:rounded-2xl bg-white/30 animate-pulse-ring-2 pointer-events-none"></div>
                          </>
                        )}
                        <div className="absolute -inset-[1px] rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden pointer-events-none">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-slow"></div>
                        </div>
                        <div className="mb-2 sm:mb-3 relative z-10">
                          <span className="inline-block text-[8px] sm:text-[9px] font-bold tracking-[0.3em] text-white/75 uppercase">STAGE {stage.number}</span>
                        </div>
                        <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 relative z-10">
                          <h3 className="text-base sm:text-lg font-semibold text-white tracking-tight leading-tight drop-shadow-lg">{stage.title}</h3>
                          <p className="text-[8px] sm:text-[9px] font-semibold tracking-[0.15em] uppercase text-white/90">{stage.subtitle}</p>
                        </div>
                        <div className="mt-auto pt-2.5 sm:pt-3 border-t border-white/25 relative z-10">
                          <p className="text-[11px] sm:text-xs font-normal text-white/85">{stage.duration}</p>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/15 overflow-hidden rounded-b-xl sm:rounded-b-2xl">
                          {isVisible && (
                            <div className="h-full bg-gradient-to-r from-white/50 via-white/90 to-white/50 shadow-lg shadow-white/50"
                              style={{ animation: `expandWidth 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`, animationDelay: `${index * 0.15 + 0.8}s`, width: 0 }}
                            ></div>
                          )}
                        </div>
                      </div>
                      {index < stages.length - 1 && (
                        <div className="flex items-center justify-center py-1.5 sm:py-2"
                          style={{ opacity: isVisible ? 1 : 0, transition: `opacity 1s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15 + 0.5}s` }}
                        >
                          <div className="flex flex-col items-center gap-0.5 sm:gap-1 opacity-50">
                            <div className="h-3 sm:h-4 w-[2px] bg-gradient-to-b from-black/60 to-black/40"></div>
                            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="text-black/60">
                              <path d="M1 1L6 6.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Desktop: Horizontal Flexbox Layout */}
                <div className="hidden lg:flex items-center justify-center gap-2 lg:gap-3 xl:gap-4 2xl:gap-6 px-4">
                  {stages.map((stage, index) => {
                    const delay = getCardDelay(index);

                    return (
                      <div key={stage.id} className="flex items-center">
                        <div
                          style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
                            transition: `all 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
                          }}
                        >
                          <div
                            ref={(el) => { cardRefs.current[index] = el; }}
                            className={`relative w-[180px] lg:w-[170px] xl:w-[190px] 2xl:w-[220px] h-[260px] lg:h-[250px] xl:h-[270px] p-5 lg:p-4 xl:p-6 backdrop-blur-xl border-2 rounded-2xl group overflow-hidden flex flex-col ${
                              hoveredStage === stage.id
                                ? "bg-gradient-to-br from-black/95 via-black/92 to-black/88 border-white/60 shadow-2xl shadow-black/50"
                                : "bg-gradient-to-br from-black/92 via-black/88 to-black/85 border-white/35 hover:border-white/45 shadow-xl shadow-black/30"
                            } ${
                              highlightedCard === index
                                ? "ring-4 ring-white/30 ring-offset-0 shadow-2xl shadow-black/60 border-white/65"
                                : ""
                            }`}
                            onMouseEnter={() => setHoveredStage(stage.id)}
                            onMouseLeave={() => {
                              setHoveredStage(null);
                              handleMouseLeave(index);
                            }}
                            onMouseMove={(e) => handleMouseMove(e, stage.id, index)}
                            style={{
                              transformStyle: "preserve-3d",
                              transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                              transform: highlightedCard === index ? "scale(1.05) translateZ(5px)" : undefined,
                            }}
                          >
                            {/* Inner Glow */}
                            <div className="absolute inset-[1px] bg-gradient-to-br from-white/8 to-transparent rounded-2xl xl:rounded-3xl pointer-events-none opacity-70"></div>

                            {/* Magnetic Spotlight */}
                            {hoveredStage === stage.id && mousePos[stage.id] && (
                              <div
                                className="absolute inset-0 pointer-events-none transition-opacity duration-500 rounded-2xl xl:rounded-3xl overflow-hidden"
                                style={{ opacity: 0.9, background: `radial-gradient(circle 180px at ${mousePos[stage.id].x}px ${mousePos[stage.id].y}px, rgba(255,255,255,0.15), transparent 70%)` }}
                              ></div>
                            )}

                            {/* Pulse Ring */}
                            {highlightedCard === index && (
                              <>
                                <div className="absolute -inset-3 rounded-2xl xl:rounded-3xl bg-white/20 animate-pulse-ring-1 pointer-events-none"></div>
                                <div className="absolute -inset-2 rounded-2xl xl:rounded-3xl bg-white/30 animate-pulse-ring-2 pointer-events-none"></div>
                              </>
                            )}

                            {/* Border Shimmer */}
                            <div className="absolute -inset-[1px] rounded-2xl xl:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden pointer-events-none">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-slow"></div>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-10 xl:w-12 h-10 xl:h-12 opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden rounded-tl-2xl xl:rounded-tl-3xl">
                              <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-white/80 to-transparent"></div>
                              <div className="absolute top-0 left-0 h-full w-[1.5px] bg-gradient-to-b from-white/80 to-transparent"></div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-10 xl:w-12 h-10 xl:h-12 opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden rounded-br-2xl xl:rounded-br-3xl">
                              <div className="absolute bottom-0 right-0 w-full h-[1.5px] bg-gradient-to-l from-white/80 to-transparent"></div>
                              <div className="absolute bottom-0 right-0 h-full w-[1.5px] bg-gradient-to-t from-white/80 to-transparent"></div>
                            </div>

                            {/* Stage Number */}
                            <div className="mb-2 lg:mb-2.5 xl:mb-3 relative z-10">
                              <span className="inline-block text-[8px] lg:text-[8.5px] xl:text-[9px] font-bold tracking-[0.2em] xl:tracking-[0.3em] text-white/75 uppercase">
                                STAGE {stage.number}
                              </span>
                            </div>

                            {/* Content */}
                            <div className="space-y-1.5 lg:space-y-1.5 xl:space-y-2 mb-3 lg:mb-3 xl:mb-4 relative z-10">
                              <h3 className="text-base lg:text-sm xl:text-lg font-semibold text-white tracking-tight leading-tight drop-shadow-lg">
                                {stage.title}
                              </h3>
                              <p className="text-[8px] lg:text-[7.5px] xl:text-[9px] font-semibold tracking-[0.1em] xl:tracking-[0.15em] uppercase text-white/90">
                                {stage.subtitle}
                              </p>
                            </div>

                            {/* Duration */}
                            <div className="mt-auto pt-2 lg:pt-2.5 xl:pt-3 border-t border-white/25 relative z-10">
                              <p className="text-[10px] lg:text-[9px] xl:text-[10px] font-normal text-white/85">
                                {stage.duration}
                              </p>
                            </div>

                            {/* Bottom Progress */}
                            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/15 overflow-hidden rounded-b-2xl xl:rounded-b-3xl">
                              {isVisible && (
                                <div
                                  className="h-full bg-gradient-to-r from-white/50 via-white/90 to-white/50 shadow-lg shadow-white/50"
                                  style={{ animation: `expandWidth 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`, animationDelay: `${delay + 1.2}s`, width: 0 }}
                                ></div>
                              )}
                            </div>

                            {/* Ambient Glow */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl xl:rounded-3xl">
                              <div className="absolute inset-0 bg-gradient-to-t from-white/8 to-transparent"></div>
                            </div>

                            {/* Particles */}
                            {hoveredStage === stage.id && (
                              <>
                                <div className="absolute top-8 left-8 w-1.5 h-1.5 bg-white/90 rounded-full animate-floatParticle1 shadow-sm shadow-white/50"></div>
                                <div className="absolute top-12 right-10 w-1 h-1 bg-white/80 rounded-full animate-floatParticle2 shadow-sm shadow-white/40"></div>
                                <div className="absolute bottom-14 left-12 w-1.5 h-1.5 bg-white/75 rounded-full animate-floatParticle3 shadow-sm shadow-white/30"></div>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Connector Arrow */}
                        {index < stages.length - 1 && (
                          <div
                            className="flex items-center justify-center px-1 xl:px-2"
                            style={{
                              opacity: isVisible ? 1 : 0,
                              transition: `opacity 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay + 1}s`,
                            }}
                          >
                            <div className="flex items-center gap-1 opacity-50 hover:opacity-90 transition-all duration-300">
                              <div className="w-4 xl:w-6 h-[2px] bg-gradient-to-r from-black/60 to-black/40"></div>
                              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" className="text-black/60">
                                <path d="M1 1L6.5 6L1 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Header */}
              <div className="text-center px-4">
                <h2 className="font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl mb-3 md:mb-5 text-black tracking-tight">
                  6 month Training + 6 month Internship
                </h2>
                <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto text-black/70">
                  Systematic talent development through structured phases
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Smooth Gradient Transition to Next Section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-gray-100/50 to-black z-[5] pointer-events-none"></div>
      </div>
    </section>
  );
}
