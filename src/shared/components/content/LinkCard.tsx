/**
 * LinkCard Component
 * 
 * Reusable card component with image, title, and description
 * Used for navigation links with consistent hover effects
 */

import Image from 'next/image';
import { BodyText } from '@/src/shared/components/typography';

interface LinkCardProps {
  href: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  className?: string;
}

export const LinkCard: React.FC<LinkCardProps> = ({
  href,
  image,
  alt,
  title,
  description,
  className = ''
}) => {
  return (
    <a 
      href={href} 
      className={`group flex gap-5 hover:opacity-90 transition-all ${className}`}
    >
      <div className="relative w-36 h-24 flex-shrink-0 bg-secondary/20 overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="144px"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <BodyText className="font-semibold text-primary mb-2.5 text-lg leading-snug group-hover:text-accent transition-colors">
          {title}
        </BodyText>
        <BodyText className="text-secondary text-sm leading-relaxed">
          {description}
        </BodyText>
      </div>
    </a>
  );
};