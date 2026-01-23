/**
 * Explore More Section
 * 
 * Interactive cards for detailed admissions sections
 */

import React from 'react';
import { H2, BodyText } from '@/src/shared/components/typography';
import { ImageCard } from '@/src/shared/components/content';

interface ExploreMoreSectionProps {
  onCardClick: (sectionId: string) => void;
}

export const ExploreMoreSection: React.FC<ExploreMoreSectionProps> = ({ onCardClick }) => {
  const cardSections = [
    {
      id: 'process',
      title: 'Selection Process',
      description: 'Four-stage transparent evaluation from application to admission',
      image: '/images/selection-process-meeting.jpg',
    },
    {
      id: 'commitment',
      title: 'Commitment & Risk',
      description: 'Understanding the full commitment and risks involved',
      image: '/images/commitment-risk-discussion.jpg',
    },
    {
      id: 'protocol',
      title: 'Application Protocol',
      description: 'Timeline, response protocols, and confirmation requirements',
      image: '/images/application-protocol-documents.jpg',
    }
  ];

  return (
    <section className="space-y-6">
      <div className="text-center">
        <H2 className="text-3xl font-light text-primary mb-4">Explore More</H2>
        <BodyText className="text-lg text-secondary max-w-3xl mx-auto">
          Click on any section below to learn more about specific aspects of our admissions process
        </BodyText>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardSections.map((section) => (
          <ImageCard
            key={section.id}
            title={section.title}
            description={section.description}
            image={section.image}
            onClick={() => onCardClick(section.id)}
          />
        ))}
      </div>
    </section>
  );
};