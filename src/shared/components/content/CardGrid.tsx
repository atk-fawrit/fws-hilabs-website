/**
 * CardGrid Component
 * 
 * Reusable grid of clickable cards with images
 * Used across multiple pages for consistent card layouts
 */

import React from 'react';
import Image from 'next/image';

export interface CardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
}

interface CardGridProps {
  cards: CardItem[];
  onCardClick?: (cardId: string) => void;
  columns?: 1 | 2 | 3 | 4;
  imageHeight?: string;
  className?: string;
}

export const CardGrid: React.FC<CardGridProps> = ({
  cards,
  onCardClick,
  columns = 3,
  imageHeight = 'h-48',
  className = '',
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 ${className}`}>
      {cards.map((card) => (
        <button
          key={card.id}
          onClick={() => onCardClick?.(card.id)}
          className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-gray-900 hover:shadow-lg transition-all duration-300 text-left"
        >
          {/* Image */}
          <div className={`relative ${imageHeight} bg-gray-100 overflow-hidden`}>
            <Image
              src={card.image}
              alt={card.imageAlt || card.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-lg font-medium text-black mb-3 leading-tight">
              {card.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed font-light">
              {card.description}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default CardGrid;
