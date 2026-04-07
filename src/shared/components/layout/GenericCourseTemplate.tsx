'use client';

import React from 'react';
import { PageLayout, SimpleHero } from '@/src/shared/components/layout';

interface GenericCourseTemplateProps {
  title: string;
  description: string;
}

export const GenericCourseTemplate: React.FC<GenericCourseTemplateProps> = ({ title, description }) => {
  return (
    <PageLayout>
      <SimpleHero
        title={title}
        description={description}
        image="/images/hero-1.jpg" // Using an existing placeholder image from public/images
        imageAlt={`${title} Hero Image`}
        eyebrow="HI Labs Course"
        overlayOpacity="dark"
        height="h-[60vh]"
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-40">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 md:p-16 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{title}</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
          <p className="text-gray-500 italic mb-8">
            Comprehensive curriculum and hands-on projects designed to build elite developers. Full syllabus coming soon.
          </p>
          <a href="/admissions" className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold hover:scale-105 hover:shadow-xl transition-all duration-300">
            Apply for Admission
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </main>
    </PageLayout>
  );
};
