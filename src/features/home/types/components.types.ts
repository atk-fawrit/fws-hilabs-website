export interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
}

export interface HeroCarouselProps {
  slides: HeroSlide[];
  currentSlide: number;
  onNext: () => void;
  onPrev: () => void;
  onSelectSlide: (index: number) => void;
}

export interface ProgramCardProps {
  href: string;
  image: string;
  title: string;
  description: string;
}
