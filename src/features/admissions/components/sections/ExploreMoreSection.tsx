/**
 * Explore More Section
 * 
 * Interactive cards for detailed admissions sections with premium design
 */

import React from 'react';
import Image from 'next/image';

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
    <section className="w-full">
      {/* Dark background container */}
      <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-12 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Explore More
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Click on any section below to learn more about specific aspects of our admissions process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cardSections.map((section) => (
            <button
              key={section.id}
              onClick={() => onCardClick(section.id)}
              className="group text-left bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-black mb-2 leading-tight">
                  {section.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  {section.description}
                </p>

                {/* Animated CTA */}
                <div className="flex items-center text-blue-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                  <span>View Details</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
