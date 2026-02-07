'use client';

/**
 * Program Categories Section - Premium Black & White Design
 * 
 * Displays all available program categories with elegant details
 */

import React, { useState } from 'react';
import { BodyText } from '@/src/shared/components/typography';
import '../../styles/ProgramCategoriesSection.styles.css';

const programCategories = [
  {
    number: '01',
    title: 'Web Development Fundamentals',
    duration: '6 weekends',
    prerequisites: 'Basic computer literacy',
    skills: [
      'HTML structure and semantic markup',
      'CSS styling and responsive design principles',
      'JavaScript fundamentals and DOM manipulation',
      'Version control with Git and collaborative workflows',
    ],
    description: 'Suitable for professionals seeking to understand web technologies or add basic web development capabilities to existing skill sets.',
    image: '/images/linux-system-administration.jpg',
    category: 'WEB DEVELOPMENT',
  },
  {
    number: '02',
    title: 'Data Analysis with Python',
    duration: '8 weekends',
    prerequisites: 'Basic mathematics, spreadsheet experience',
    skills: [
      'Python programming fundamentals for data manipulation',
      'Data cleaning and preparation techniques',
      'Statistical analysis and visualization with libraries',
      'Report generation and insight communication',
    ],
    description: 'Designed for analysts, researchers, and professionals who work with data and need programmatic analysis capabilities.',
    image: '/images/data-analysis-python.jpg',
    category: 'DATA SCIENCE',
  },
  {
    number: '03',
    title: 'Database Design & Management',
    duration: '4 weekends',
    prerequisites: 'Basic understanding of data organization',
    skills: [
      'Relational database design principles and normalization',
      'SQL query writing for data retrieval and manipulation',
      'Database administration and performance optimization',
      'Backup, recovery, and security implementation',
    ],
    description: 'Appropriate for professionals managing organizational data or requiring structured data storage and retrieval capabilities.',
    image: '/images/database-design-management.jpg',
    category: 'DATABASE',
  },
  {
    number: '04',
    title: 'Linux System Administration',
    duration: '6 weekends',
    prerequisites: 'Basic command line familiarity',
    skills: [
      'Linux system installation, configuration, and maintenance',
      'User management, permissions, and security protocols',
      'Network configuration and service management',
      'Automation scripting and system monitoring',
    ],
    description: 'Targeted at IT professionals and technical staff requiring server administration and system management competencies.',
    image: '/images/web-development-fundamentals.jpg',
    category: 'SYSTEM ADMINISTRATION',
  },
];

export const ProgramCategoriesSection: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const handleProgramClick = (programNumber: string) => {
    setSelectedProgram(selectedProgram === programNumber ? null : programNumber);
  };

  const selectedProgramData = programCategories.find(p => p.number === selectedProgram);

  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
          Program Categories
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light text-justify">
          Short Programs are organized into categories based on skill domain and application context. 
          Each category addresses specific professional development needs without attempting comprehensive 
          coverage of engineering disciplines.
        </p>
      </div>
      
      {/* Premium Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
        {programCategories.map((program, index) => (
          <div
            key={program.number}
            onClick={() => handleProgramClick(program.number)}
            className={`
              group cursor-pointer bg-white rounded-3xl overflow-hidden
              transition-all duration-500 ease-out
              border border-gray-200 hover:border-black
              hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)]
              ${selectedProgram === program.number ? 'border-black shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]' : ''}
            `}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Image Header with Overlay */}
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-900 to-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={program.image} 
                alt={program.title}
                className="w-full h-full object-cover opacity-40 transition-all duration-700 group-hover:opacity-50 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              
              {/* Course Number - Top Left */}
              <div className="absolute top-6 left-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-white blur-md opacity-50"></div>
                  <div className="relative bg-white rounded-2xl w-14 h-14 flex items-center justify-center shadow-2xl">
                    <span className="text-black font-bold text-xl">{program.number}</span>
                  </div>
                </div>
              </div>
              
              {/* Category Badge - Top Right */}
              <div className="absolute top-6 right-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-white blur-sm opacity-30"></div>
                  <span className="relative block bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold text-black tracking-widest shadow-lg">
                    {program.category}
                  </span>
                </div>
              </div>
              
              {/* Title - Bottom */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-bold text-2xl leading-tight drop-shadow-2xl">
                  {program.title}
                </h3>
              </div>
            </div>
            
            {/* Content Area */}
            <div className="p-8 space-y-6">
              {/* Description */}
              <BodyText className="text-gray-700 leading-relaxed text-sm">
                {program.description}
              </BodyText>
              
              {/* Meta Information */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-black rounded-md flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-black text-sm">{program.duration}</span>
                </div>
                <div className="text-xs text-gray-500 italic max-w-[180px] text-right">
                  {program.prerequisites}
                </div>
              </div>
              
              {/* View Details Action */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-sm font-semibold text-black group-hover:tracking-wide transition-all duration-300">
                  {selectedProgram === program.number ? 'Hide Details' : 'View Full Details'}
                </span>
                <div className={`
                  w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white
                  transition-all duration-500 group-hover:rounded-2xl
                  ${selectedProgram === program.number ? 'rotate-180 rounded-2xl' : ''}
                `}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Premium Modal */}
      {selectedProgramData && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProgram(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
          
          {/* Modal Container */}
          <div 
            className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden bg-white rounded-3xl shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Section */}
            <div className="relative h-40 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
              {/* Background Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={selectedProgramData.image} 
                alt={selectedProgramData.title}
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60"></div>
              
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProgram(null)}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-all duration-300 p-3 hover:bg-white/10 rounded-2xl backdrop-blur-sm group"
              >
                <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Number Badge */}
              <div className="absolute top-6 left-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-white blur-lg opacity-40"></div>
                  <div className="relative w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                    <span className="text-black font-bold text-2xl">{selectedProgramData.number}</span>
                  </div>
                </div>
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-8 left-28">
                <div className="relative">
                  <div className="absolute inset-0 bg-white blur-md opacity-30"></div>
                  <span className="relative block bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full text-xs font-bold text-black tracking-widest shadow-xl">
                    {selectedProgramData.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-10rem)] p-8">
              {/* Title Section */}
              <div className="mb-8 space-y-6">
                <h3 className="text-4xl font-bold text-black tracking-tight">
                  {selectedProgramData.title}
                </h3>
                
                {/* Quick Info Pills */}
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2.5 bg-gray-100 px-5 py-2.5 rounded-full border border-gray-200">
                    <div className="w-5 h-5 bg-black rounded-md flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-black text-sm">{selectedProgramData.duration}</span>
                  </div>
                  <div className="flex items-center gap-2.5 bg-gray-100 px-5 py-2.5 rounded-full border border-gray-200">
                    <div className="w-5 h-5 bg-black rounded-md flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-black text-sm">{selectedProgramData.prerequisites}</span>
                  </div>
                </div>
                
                {/* Description */}
                <div className="text-base text-gray-700 leading-relaxed max-w-3xl">
                  {selectedProgramData.description}
                </div>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Skills Column */}
                <div className="space-y-5">
                  <div className="flex items-center gap-3 pb-4 border-b-2 border-black">
                    <div className="w-11 h-11 bg-black rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-black">Skills Coverage</h4>
                  </div>
                  
                  <div className="space-y-3">
                    {selectedProgramData.skills.map((skill, index) => (
                      <div 
                        key={index} 
                        className="group/skill flex items-start gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
                      >
                        <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm group-hover/skill:scale-110 transition-transform duration-300">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="text-sm text-gray-800 leading-relaxed flex-1 font-medium">
                          {skill}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Program Info Column */}
                <div className="space-y-5">
                  <div className="flex items-center gap-3 pb-4 border-b-2 border-black">
                    <div className="w-11 h-11 bg-black rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-black">Program Details</h4>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Duration", value: selectedProgramData.duration },
                      { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", label: "Prerequisites", value: selectedProgramData.prerequisites },
                      { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", label: "Location", value: "In-person at Lucknow facility" },
                      { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", label: "Format", value: "Weekend sessions, Saturday & Sunday" }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className="p-5 bg-gray-50 rounded-2xl border border-gray-200 hover:border-gray-300 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-9 h-9 bg-gray-200 rounded-xl flex items-center justify-center">
                            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                            </svg>
                          </div>
                          <span className="font-bold text-black text-sm">{item.label}</span>
                        </div>
                        <div className="text-gray-700 text-sm ml-12 font-medium">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};