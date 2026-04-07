'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';
import { PageLayout } from '@/src/shared/components/layout';
import { HeroSection, CourseOverview, WhatYouWillLearn, Curriculum, WhoThisCourseIsFor, CareerOpportunities } from './components';

export default function BackendNodeCourse() {
  return (
    <PageLayout>
      <HeroSection />

      <div className="bg-slate-50 relative pb-28 font-sans">
        {/* Sticky Apply Button */}
        <div className="fixed bottom-6 right-6 z-50 md:hidden">
          <a href="#apply" className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-600/30">
            <ChevronDown className="w-6 h-6 transform rotate-[-90deg]" />
          </a>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column (Main Content) */}
            <div className="lg:col-span-2 space-y-20">
              <CourseOverview />
              <WhatYouWillLearn />
              <Curriculum />
            </div>

            {/* Right Column (Sidebar) */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 sticky top-28">
                <WhoThisCourseIsFor />
                <hr className="my-8 border-slate-100" />
                <CareerOpportunities />
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}
