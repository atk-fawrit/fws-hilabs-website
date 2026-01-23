/**
 * Program Cards Section
 * 
 * Interactive cards for Phase 1, Phase 2, Evaluation, and Application
 */

import React from 'react';
import { H2, BodyText } from '@/src/shared/components/typography';
import { ImageCard } from '@/src/shared/components/content';
import { programSections } from '../../data';

interface ProgramCardsSectionProps {
  onCardClick: (sectionId: string) => void;
}

export const ProgramCardsSection: React.FC<ProgramCardsSectionProps> = ({ onCardClick }) => {
  return (
    <section className="w-full mb-12">
      {/* Blue background container like Entri reference */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 p-8 rounded-lg">
        <div className="text-center mb-8">
          <H2 className="text-3xl font-light text-white mb-4">Program Components</H2>
          <BodyText className="text-lg text-white/90 max-w-4xl mx-auto">
            Explore detailed documentation for each phase and process of the flagship program
          </BodyText>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {programSections.filter(section => section.id !== 'specification').map((section) => (
            <ImageCard
              key={section.id}
              title={section.title}
              description={section.description}
              image={section.image}
              onClick={() => onCardClick(section.id)}
              imageHeight="h-32"
              className="rounded-lg hover:border-slate-300/70 hover:shadow-xl hover:shadow-slate-900/10 hover:-translate-y-1"
            />
          ))}
        </div>
      </div>
    </section>
  );
};