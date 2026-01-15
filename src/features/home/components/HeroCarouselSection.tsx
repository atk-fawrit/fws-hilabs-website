import Image from 'next/image';
import { HeroCarouselProps } from '../types';

export function HeroCarouselSection({
  slides,
  currentSlide,
  onNext,
  onPrev,
  onSelectSlide,
}: HeroCarouselProps) {
  return (
    <section className="w-full bg-[#E8E8E6] py-4 md:py-6">
      <div className="relative h-[420px] bg-primary overflow-hidden max-w-7xl mx-auto px-4 md:px-8">
        {slides.map((slide, index) => (
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

        {/* Navigation Arrows */}
        <button
          onClick={onPrev}
          className="absolute left-6 bottom-20 w-12 h-12 bg-background/10 hover:bg-background/25 flex items-center justify-center transition-all duration-300 z-30 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <span className="text-background text-3xl leading-none font-light">‹</span>
        </button>
        <button
          onClick={onNext}
          className="absolute right-6 bottom-20 w-12 h-12 bg-background/10 hover:bg-background/25 flex items-center justify-center transition-all duration-300 z-30 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <span className="text-background text-3xl leading-none font-light">›</span>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => onSelectSlide(index)}
              className={`h-1.5 transition-all duration-300 ${
                index === currentSlide ? 'bg-background w-8' : 'bg-background/40 w-1.5 hover:bg-background/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
