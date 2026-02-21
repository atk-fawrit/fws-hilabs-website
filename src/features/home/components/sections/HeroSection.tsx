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

  // Enhanced animation calculation with ultra-smooth spring physics
  const getCardAnimation = (index: number) => {
    const centerIndex = 2; // Stage 3 is at index 2
    const cardWidth = 240;
    const gap = 40;
    const totalCardSpace = cardWidth + gap;

    if (index === centerIndex) {
      // Center card - gentle fade-in and scale
      return {
        delay: 0,
        finalTransform: `translateX(calc(-50%))`,
        initialScale: 0.92,
        finalScale: 1,
      };
    } else if (index < centerIndex) {
      // Cards to the left - staggered with graceful timing
      const distance = centerIndex - index;
      return {
        delay: 0.2 * distance, // Slower stagger for more grace
        finalTransform: `translateX(calc(-50% - ${distance * totalCardSpace}px))`,
        initialScale: 0.88,
        finalScale: 1,
      };
    } else {
      // Cards to the right - staggered with graceful timing
      const distance = index - centerIndex;
      return {
        delay: 0.2 * distance, // Slower stagger for more grace
        finalTransform: `translateX(calc(-50% + ${distance * totalCardSpace}px))`,
        initialScale: 0.88,
        finalScale: 1,
      };
    }
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
        <div className="flex-shrink-0 flex items-center justify-center py-20 px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[1.15] text-black drop-shadow-sm">
              {typedText}
              {typedText.length < mainText.length && (
                <span className="inline-block w-[3px] h-[0.9em] bg-black ml-1 align-middle animate-blink"></span>
              )}
            </h1>
            {typedText.length === mainText.length && (
              <div className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light mt-6 opacity-0 animate-fadeIn text-black drop-shadow-sm">
                {typedSubtext}
                {showCursor && typedSubtext.length === subText.length && (
                  <span className="inline-block w-[2px] h-[0.8em] bg-black/90 ml-1 align-middle"></span>
                )}
                {typedSubtext.length < subText.length && (
                  <span className="inline-block w-[2px] h-[0.8em] bg-black/90 ml-1 align-middle animate-blink"></span>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="text-center">
          <h2 className="font-light text-4xl md:text-5xl lg:text-4xl mb-5 text-black tracking-tight">
            AI-Enriched Software Engineering{" "}
          </h2>
          <p className="text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto text-black/70">
            HiLabs Flagship Program
          </p>
        </div>

        {/* Pipeline Section */}
        <div className="flex-1 px-4 md:px-8 lg:px-12 pb-16 -mt-20">
          <div className="relative max-w-[1600px] mx-auto">
            <div className="relative z-10 py-10 px-6 md:px-10 lg:px-12">
              {/* Pipeline Cards */}
              <div className="relative py-8 mb-16">
                {/* Enhanced Flow Line with gradient */}
                <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 z-[1] hidden lg:block overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/25 to-transparent"></div>
                  {isVisible && (
                    <div className="absolute inset-0">
                      <div className="absolute h-[3px] w-40 bg-gradient-to-r from-transparent via-black/60 to-transparent animate-flowParticle1 blur-[0.5px]"></div>
                      <div className="absolute h-[3px] w-32 bg-gradient-to-r from-transparent via-black/50 to-transparent animate-flowParticle2 blur-[0.5px]"></div>
                      <div className="absolute h-[2px] w-24 bg-gradient-to-r from-transparent via-black/40 to-transparent animate-flowParticle3"></div>
                    </div>
                  )}
                </div>

                {/* Pipeline Cards Container */}
                <div className="relative flex items-center justify-center min-h-[340px]">
                  <div className="relative w-full">
                    {stages.map((stage, index) => {
                      const cardAnim = getCardAnimation(index);
                      const centerIndex = 2;
                      const isCenter = centerIndex === index;

                      return (
                        <div
                          key={stage.id}
                          className="absolute left-1/2 top-1/2 -translate-y-1/2"
                          style={{
                            zIndex: isCenter
                              ? 50
                              : 40 - Math.abs(index - centerIndex),
                            transform: isVisible
                              ? cardAnim.finalTransform
                              : "translateX(-50%)",
                            opacity: isVisible ? 1 : isCenter ? 0.4 : 0,
                            transition: isVisible
                              ? `transform 1.4s cubic-bezier(0.16, 1, 0.3, 1) ${cardAnim.delay}s, opacity 1s cubic-bezier(0.16, 1, 0.3, 1) ${cardAnim.delay}s`
                              : "none",
                          }}
                        >
                          {/* Enhanced Pipeline Card */}
                          <div
                            ref={(el) => {
                              cardRefs.current[index] = el;
                            }}
                            className={`relative w-[240px] h-[280px] p-7 backdrop-blur-xl border-2 rounded-3xl group overflow-hidden ${
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
                            onMouseMove={(e) =>
                              handleMouseMove(e, stage.id, index)
                            }
                            style={{
                              transformStyle: "preserve-3d",
                              transition:
                                highlightedCard === index
                                  ? "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                                  : "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                              transform:
                                highlightedCard === index
                                  ? "scale(1.05) translateZ(5px)"
                                  : undefined,
                            }}
                          >
                            {/* Refined Inner Glow */}
                            <div className="absolute inset-[1px] bg-gradient-to-br from-white/8 to-transparent rounded-3xl pointer-events-none opacity-70"></div>

                            {/* Magnetic Spotlight with smoother gradient */}
                            {hoveredStage === stage.id &&
                              mousePos[stage.id] && (
                                <div
                                  className="absolute inset-0 pointer-events-none transition-opacity duration-500 rounded-3xl overflow-hidden"
                                  style={{
                                    opacity: 0.9,
                                    background: `radial-gradient(circle 180px at ${mousePos[stage.id].x}px ${mousePos[stage.id].y}px, rgba(255,255,255,0.15), transparent 70%)`,
                                  }}
                                ></div>
                              )}

                            {/* Smooth Pulse Ring for Highlights */}
                            {highlightedCard === index && (
                              <>
                                <div className="absolute -inset-3 rounded-3xl bg-white/20 animate-pulse-ring-1 pointer-events-none"></div>
                                <div className="absolute -inset-2 rounded-3xl bg-white/30 animate-pulse-ring-2 pointer-events-none"></div>
                              </>
                            )}

                            {/* Subtle Border Shimmer */}
                            <div className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden pointer-events-none">
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-slow"></div>
                            </div>

                            {/* Refined Corner Accents */}
                            <div className="absolute top-0 left-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden rounded-tl-3xl">
                              <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-white/80 to-transparent"></div>
                              <div className="absolute top-0 left-0 h-full w-[1.5px] bg-gradient-to-b from-white/80 to-transparent"></div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden rounded-br-3xl">
                              <div className="absolute bottom-0 right-0 w-full h-[1.5px] bg-gradient-to-l from-white/80 to-transparent"></div>
                              <div className="absolute bottom-0 right-0 h-full w-[1.5px] bg-gradient-to-t from-white/80 to-transparent"></div>
                            </div>

                            {/* Stage Number */}
                            <div className="mb-4 relative z-10">
                              <span className="inline-block text-[10px] font-bold tracking-[0.3em] text-white/75 uppercase">
                                STAGE {stage.number}
                              </span>
                            </div>

                            {/* Content */}
                            <div className="space-y-3 mb-5 relative z-10">
                              <h3 className="text-xl font-semibold text-white tracking-tight leading-tight drop-shadow-lg">
                                {stage.title}
                              </h3>
                              <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/90">
                                {stage.subtitle}
                              </p>
                            </div>

                            {/* Duration */}
                            <div className="mt-auto pt-4 border-t border-white/25 relative z-10">
                              <p className="text-xs font-normal text-white/85">
                                {stage.duration}
                              </p>
                            </div>

                            {/* Bottom Progress Indicator */}
                            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/15 overflow-hidden rounded-b-3xl">
                              {isVisible && (
                                <div
                                  className="h-full bg-gradient-to-r from-white/50 via-white/90 to-white/50 shadow-lg shadow-white/50"
                                  style={{
                                    animation: `expandWidth 1.6s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                                    animationDelay: `${cardAnim.delay + 1.2}s`,
                                    width: 0,
                                  }}
                                ></div>
                              )}
                            </div>

                            {/* Ambient Glow on Hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl">
                              <div className="absolute inset-0 bg-gradient-to-t from-white/8 to-transparent"></div>
                            </div>

                            {/* Refined Particle Effects */}
                            {hoveredStage === stage.id && (
                              <>
                                <div className="absolute top-8 left-8 w-1.5 h-1.5 bg-white/90 rounded-full animate-floatParticle1 shadow-sm shadow-white/50"></div>
                                <div className="absolute top-12 right-10 w-1 h-1 bg-white/80 rounded-full animate-floatParticle2 shadow-sm shadow-white/40"></div>
                                <div className="absolute bottom-14 left-12 w-1.5 h-1.5 bg-white/75 rounded-full animate-floatParticle3 shadow-sm shadow-white/30"></div>
                                <div className="absolute top-1/2 right-10 w-1 h-1 bg-white/85 rounded-full animate-floatParticle4"></div>
                                <div className="absolute bottom-20 right-8 w-1 h-1 bg-white/70 rounded-full animate-floatParticle5"></div>
                              </>
                            )}
                          </div>

                          {/* Enhanced Connector Arrow */}
                          {index < stages.length - 1 && (
                            <div
                              className="absolute top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center"
                              style={{
                                left: "calc(100% + 14px)",
                                opacity: isVisible ? 1 : 0,
                                transition: `opacity 1s cubic-bezier(0.16, 1, 0.3, 1) ${cardAnim.delay + 1}s`,
                              }}
                            >
                              <div className="flex items-center gap-1.5 opacity-50 hover:opacity-90 transition-all duration-300">
                                <div className="w-6 h-[2px] bg-gradient-to-r from-black/60 to-black/40"></div>
                                <svg
                                  width="8"
                                  height="12"
                                  viewBox="0 0 8 12"
                                  fill="none"
                                  className="text-black/60"
                                >
                                  <path
                                    d="M1 1L6.5 6L1 11"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Header */}
              <div className="text-center">
                <h2 className="font-light text-4xl md:text-5xl lg:text-4xl mb-5 text-black tracking-tight">
                  6 month Training + 6 month Internship
                </h2>
                <p className="text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto text-black/70">
                  Systematic talent development through structured stages
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
