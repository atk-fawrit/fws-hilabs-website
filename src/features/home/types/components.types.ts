// Hero Section Types
export interface HeroImage {
  src: string;
  textPosition: 'left' | 'far-left' | 'right';
}

export interface HeroSectionProps {
  images: HeroImage[];
}

// Pipeline Section Types
export interface Stage {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  number: string;
}

export interface PipelineSectionProps {
  stages: Stage[];
}

// Programs Section Types
export interface Program {
  title: string;
  description: string;
  image: string;
  href: string;
  badge: string;
  duration: string;
  tagline: string;
}

export interface ProgramsSectionProps {
  programs: Program[];
  backgroundImage: string;
}

// Explore Section Types
export interface ExploreCard {
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface ExploreSectionProps {
  cards: ExploreCard[];
}

// Identity Section Types
export interface IdentityItem {
  text: string;
}

export interface IdentitySectionProps {
  positiveItems: IdentityItem[];
  negativeItems: IdentityItem[];
}

// CTA Section Types
export interface CTASectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

// Footer Section Types
export interface FooterLink {
  href: string;
  label: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterSectionProps {
  sections: FooterSection[];
  companyInfo: {
    title: string;
    description: string;
  };
  copyright: string;
}