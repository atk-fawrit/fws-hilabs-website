'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      image: '/images/kenny-eliason-1-aA2Fadydc-unsplash.jpg',
      title: 'Engineering Talent Production Lab',
      subtitle: 'We produce deployable junior engineers through enforced evaluation and supervised deployment'
    },
    {
      image: '/images/wes-hicks-4-EeTnaC1S4-unsplash.jpg',
      title: '12-Month Engineering Production System',
      subtitle: 'Structured pipeline with enforced evaluation gates and supervised deployment'
    },
    {
      image: '/images/0342e2cc865451941a31fa725d003957.jpg',
      title: 'Transform Your Engineering Career',
      subtitle: 'Join our intensive laboratory environment and become a deployable junior engineer'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="w-full bg-[#E8E8E6]">
      {/* Hero Carousel - Oxford Style with Side Gaps */}
      <section className="w-full bg-[#E8E8E6] py-4 md:py-6">
        <div className="relative h-[420px] bg-primary overflow-hidden max-w-7xl mx-auto px-4 md:px-8">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/85 to-primary/30 z-10" />
              <div className="absolute inset-0 z-0">
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={index === 0}
                    className="object-cover"
                    sizes="100vw"
                  />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center z-20">
                <div className="max-w-7xl mx-auto px-8 w-full">
                  <div className="max-w-2xl">
                    <h1 className="text-background text-3xl md:text-4xl font-light mb-4 leading-tight tracking-tight">
                      {slide.title}
                    </h1>
                    <p className="text-background/95 text-base md:text-lg leading-relaxed font-light">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows - Positioned in lower area */}
          <button
            onClick={prevSlide}
            className="absolute left-6 bottom-20 w-12 h-12 bg-background/10 hover:bg-background/25 flex items-center justify-center transition-all duration-300 z-30 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <span className="text-background text-3xl leading-none font-light">‹</span>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 bottom-20 w-12 h-12 bg-background/10 hover:bg-background/25 flex items-center justify-center transition-all duration-300 z-30 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <span className="text-background text-3xl leading-none font-light">›</span>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 transition-all duration-300 ${
                  index === currentSlide ? 'bg-background w-8' : 'bg-background/40 w-1.5 hover:bg-background/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Two Column Section - Oxford Style Layout */}
      <section className="bg-[#E8E8E6] py-4 md:py-6">
        <div className="bg-white py-16 border-b border-secondary/20 max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Left Column - Programs */}
            <div>
              <div className="flex justify-between items-baseline mb-8">
                <h2 className="text-3xl font-light text-primary tracking-tight">Programs</h2>
                <a href="/flagship-program" className="text-accent text-sm hover:text-primary transition-colors">
                  View All →
                </a>
              </div>
              <div className="space-y-8">
                <a href="/flagship-program" className="group flex gap-5 hover:opacity-90 transition-all">
                  <div className="relative w-36 h-24 flex-shrink-0 bg-secondary/20 overflow-hidden">
                    <Image
                      src="/images/pexels-mikhail-nilov-7988079.jpg"
                      alt="12-Month Program"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="144px"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="font-normal text-primary mb-2.5 text-lg leading-snug group-hover:text-accent transition-colors">
                      12-Month Engineering Production System
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed font-light">
                      Structured pipeline with enforced evaluation gates and supervised deployment
                    </p>
                  </div>
                </a>

                <a href="/courses" className="group flex gap-5 hover:opacity-90 transition-all">
                  <div className="relative w-36 h-24 flex-shrink-0 bg-secondary/20 overflow-hidden">
                    <Image
                      src="/images/ChatGPT Image Jan 15, 2026, 03_12_03 PM.png"
                      alt="Short Programs"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="144px"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="font-normal text-primary mb-2.5 text-lg leading-snug group-hover:text-accent transition-colors">
                      Short Programs for Professionals
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed font-light">
                      Weekend skill-focused modules for working professionals
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column - Information */}
            <div>
              <div className="flex justify-between items-baseline mb-8">
                <h2 className="text-3xl font-light text-primary tracking-tight">Information</h2>
                <a href="/admissions" className="text-accent text-sm hover:text-primary transition-colors">
                  Learn More →
                </a>
              </div>
              <div className="space-y-8">
                <a href="/admissions" className="group flex gap-5 hover:opacity-90 transition-all">
                  <div className="relative w-36 h-24 flex-shrink-0 bg-secondary/20 overflow-hidden">
                    <Image
                      src="/images/download.jpg"
                      alt="Admissions"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="144px"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="font-normal text-primary mb-2.5 text-lg leading-snug group-hover:text-accent transition-colors">
                      Admissions Process Overview
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed font-light">
                      Transparent selection system with clearly defined criteria
                    </p>
                  </div>
                </a>

                <a href="/lucknow-lab" className="group flex gap-5 hover:opacity-90 transition-all">
                  <div className="relative w-36 h-24 flex-shrink-0 bg-secondary/20 overflow-hidden">
                    <Image
                      src="/images/e57e3206fa458c41ffe495f8823c4c58.jpg"
                      alt="Lucknow Lab"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="144px"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="font-normal text-primary mb-2.5 text-lg leading-snug group-hover:text-accent transition-colors">
                      Lucknow Laboratory Facility
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed font-light">
                      In-person engineering laboratory environment
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Section - Oxford Style Three Column Boxes */}
      <section className="bg-[#E8E8E6] py-4 md:py-6">
        <div className="bg-[#FAFAF9] py-20 max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-light text-primary mb-12 tracking-tight">Discover</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <a href="/flagship-program" className="group bg-white border border-secondary/20 hover:border-accent/60 transition-all overflow-hidden hover:shadow-sm">
              <div className="relative w-full h-52 bg-secondary/10 overflow-hidden">
                <Image
                  src="/images/pexels-mikhail-nilov-7988079.jpg"
                  alt="Program Structure"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-7">
                <h3 className="font-normal text-primary mb-3 text-lg leading-snug group-hover:text-accent transition-colors">
                  12-Month System Overview
                </h3>
                <p className="text-secondary text-sm leading-relaxed font-light">
                  Structured 12-month engineering talent production pipeline with two distinct phases
                </p>
              </div>
            </a>

            <a href="/outcomes" className="group bg-white border border-secondary/20 hover:border-accent/60 transition-all overflow-hidden hover:shadow-sm">
              <div className="relative w-full h-52 bg-secondary/10 overflow-hidden">
                <Image
                  src="/images/ChatGPT Image Jan 15, 2026, 03_12_03 PM.png"
                  alt="Documented Evidence"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-7">
                <h3 className="font-normal text-primary mb-3 text-lg leading-snug group-hover:text-accent transition-colors">
                  Documented Evidence
                </h3>
                <p className="text-secondary text-sm leading-relaxed font-light">
                  Systematic documentation of program outcomes through evaluation rubrics and performance summaries
                </p>
              </div>
            </a>

            <a href="/employers" className="group bg-white border border-secondary/20 hover:border-accent/60 transition-all overflow-hidden hover:shadow-sm">
              <div className="relative w-full h-52 bg-secondary/10 overflow-hidden">
                <Image
                  src="/images/0342e2cc865451941a31fa725d003957.jpg"
                  alt="Employer Partnerships"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-7">
                <h3 className="font-normal text-primary mb-3 text-lg leading-snug group-hover:text-accent transition-colors">
                  Employer Partnerships
                </h3>
                <p className="text-secondary text-sm leading-relaxed font-light">
                  Partner with HI Labs to access deployable junior engineers with verified capabilities
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* What HI Labs Is/Is Not Section - Refined Dark Section */}
      <section className="bg-[#E8E8E6] py-4 md:py-6">
        <div className="bg-[#1A1A1A] text-background py-20 max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="text-2xl font-light mb-8 tracking-tight text-background">What HI Labs Is</h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 group">
                  <span className="text-accent mt-1 text-sm flex-shrink-0">●</span>
                  <span className="text-background/85 text-base leading-relaxed font-light group-hover:text-background transition-colors">
                    An engineering talent production system with enforced evaluation gates
                  </span>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="text-accent mt-1 text-sm flex-shrink-0">●</span>
                  <span className="text-background/85 text-base leading-relaxed font-light group-hover:text-background transition-colors">
                    A 12-month in-person program with structured elimination criteria
                  </span>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="text-accent mt-1 text-sm flex-shrink-0">●</span>
                  <span className="text-background/85 text-base leading-relaxed font-light group-hover:text-background transition-colors">
                    A laboratory environment focused on producing deployable junior engineers
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-light mb-8 tracking-tight text-background">What HI Labs Is Not</h2>
              <ul className="space-y-5">
                <li className="flex items-start gap-4 group">
                  <span className="text-accent mt-1 text-sm flex-shrink-0">●</span>
                  <span className="text-background/85 text-base leading-relaxed font-light group-hover:text-background transition-colors">
                    Not a traditional educational institution with degree programs
                  </span>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="text-accent mt-1 text-sm flex-shrink-0">●</span>
                  <span className="text-background/85 text-base leading-relaxed font-light group-hover:text-background transition-colors">
                    Not a placement agency with guaranteed job outcomes
                  </span>
                </li>
                <li className="flex items-start gap-4 group">
                  <span className="text-accent mt-1 text-sm flex-shrink-0">●</span>
                  <span className="text-background/85 text-base leading-relaxed font-light group-hover:text-background transition-colors">
                    Not compatible with parallel employment or remote participation
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Links - Refined Bottom Section */}
      <section className="bg-[#E8E8E6] py-4 md:py-6">
        <div className="bg-white py-20 border-t border-secondary/10 max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="border-l-[3px] border-accent pl-7 group">
              <h3 className="text-primary font-normal mb-4 text-xl tracking-tight group-hover:text-accent transition-colors">Admissions</h3>
              <p className="text-secondary text-base mb-5 leading-relaxed font-light">
                Transparent selection system with clearly defined criteria and evaluation frameworks.
              </p>
              <a href="/admissions" className="text-accent hover:text-primary text-sm font-medium transition-colors inline-flex items-center gap-2">
                View requirements <span className="text-lg">→</span>
              </a>
            </div>

            <div className="border-l-[3px] border-accent pl-7 group">
              <h3 className="text-primary font-normal mb-4 text-xl tracking-tight group-hover:text-accent transition-colors">Program Structure</h3>
              <p className="text-secondary text-base mb-5 leading-relaxed font-light">
                Three training terms followed by supervised deployment in partner organizations.
              </p>
              <a href="/flagship-program" className="text-accent hover:text-primary text-sm font-medium transition-colors inline-flex items-center gap-2">
                Learn more <span className="text-lg">→</span>
              </a>
            </div>

            <div className="border-l-[3px] border-accent pl-7 group">
              <h3 className="text-primary font-normal mb-4 text-xl tracking-tight group-hover:text-accent transition-colors">Lucknow Lab</h3>
              <p className="text-secondary text-base mb-5 leading-relaxed font-light">
                In-person engineering laboratory facility with structured training environment.
              </p>
              <a href="/lucknow-lab" className="text-accent hover:text-primary text-sm font-medium transition-colors inline-flex items-center gap-2">
                Visit location <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}