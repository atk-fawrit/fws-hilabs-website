'use client';

/**
 * Program Categories Section
 * 
 * Displays all available program categories with details
 */

import React, { useState } from 'react';
import { H2 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

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
    <section className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <H2 className="text-3xl font-bold text-primary mb-4">Program Categories</H2>
        <BodyText className="text-lg text-secondary leading-relaxed">
          Short Programs are organized into categories based on skill domain and application context. 
          Each category addresses specific professional development needs without attempting comprehensive 
          coverage of engineering disciplines.
        </BodyText>
      </div>
      
      {/* Compact Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programCategories.map((program) => (
          <div
            key={program.number}
            onClick={() => handleProgramClick(program.number)}
            className={`
              group cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl 
              transition-all duration-300 ease-out overflow-hidden
              hover:-translate-y-1 border-2 border-transparent
              ${selectedProgram === program.number ? 'border-accent shadow-xl -translate-y-1' : 'hover:border-accent/20'}
            `}
          >
            {/* Image Header */}
            <div className="relative h-48 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={program.image} 
                alt={program.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-oxford-blue/90 via-oxford-blue/60 to-transparent"></div>
              
              {/* Course Number */}
              <div className="absolute top-4 left-4">
                <div className="bg-white rounded-lg w-10 h-10 flex items-center justify-center shadow-lg">
                  <span className="text-oxford-blue font-bold text-lg">{program.number}</span>
                </div>
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-oxford-blue tracking-wide shadow-md">
                  {program.category}
                </span>
              </div>
              
              {/* Title Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-xl leading-tight drop-shadow-lg">
                  {program.title}
                </h3>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-5">
              <BodyText className="text-sm text-secondary leading-relaxed mb-4">
                {program.description}
              </BodyText>
              
              {/* Meta Info */}
              <div className="flex items-center justify-between text-xs text-secondary mb-4 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold text-primary">{program.duration}</span>
                </div>
                <div className="text-xs text-secondary/80 italic">
                  {program.prerequisites}
                </div>
              </div>
              
              {/* Action */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-accent group-hover:text-accent/80 transition-colors">
                  {selectedProgram === program.number ? 'Hide Details' : 'View Details'}
                </span>
                <div className={`
                  w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center text-accent
                  transition-all duration-300 group-hover:bg-accent group-hover:text-white
                  ${selectedProgram === program.number ? 'rotate-180 bg-accent text-white' : ''}
                `}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modern Modal Overlay */}
      {selectedProgramData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white rounded-2xl shadow-2xl animate-scale-in">
            {/* Header Section with Image */}
            <div className="relative h-32 overflow-hidden bg-gradient-to-r from-oxford-blue to-accent">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={selectedProgramData.image} 
                alt={selectedProgramData.title}
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-oxford-blue/90 to-accent/90"></div>
              
              {/* Close button */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProgram(null);
                }}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-all duration-200 p-2 hover:bg-white/20 rounded-xl backdrop-blur-sm hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Number badge */}
              <div className="absolute top-4 left-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-xl animate-bounce-in">
                  <span className="text-oxford-blue font-bold text-xl">{selectedProgramData.number}</span>
                </div>
              </div>
              
              {/* Category badge */}
              <div className="absolute top-4 left-24">
                <span className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-bold text-oxford-blue tracking-wide shadow-lg animate-slide-in-left">
                  {selectedProgramData.category}
                </span>
              </div>
            </div>

            {/* Scrollable Content Section */}
            <div className="overflow-y-auto max-h-[calc(90vh-8rem)] p-6">
              {/* Title and Description */}
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-primary mb-4 animate-slide-in-up">
                  {selectedProgramData.title}
                </h3>
                
                {/* Quick Info Pills */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full animate-slide-in-up" style={{animationDelay: '0.1s'}}>
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-semibold text-primary text-sm">{selectedProgramData.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full animate-slide-in-up" style={{animationDelay: '0.2s'}}>
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-primary text-sm">{selectedProgramData.prerequisites}</span>
                  </div>
                </div>
                
                <div className="text-base text-secondary leading-relaxed animate-slide-in-up" style={{animationDelay: '0.3s'}}>
                  {selectedProgramData.description}
                </div>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Skills Column */}
                <div className="space-y-4 animate-slide-in-left" style={{animationDelay: '0.4s'}}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-primary">Skills Coverage</h4>
                  </div>
                  
                  <div className="space-y-3">
                    {selectedProgramData.skills.map((skill, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-3 p-4 bg-gradient-to-r from-accent/5 to-transparent rounded-xl border border-accent/10 hover:border-accent/30 hover:shadow-md transition-all duration-300 animate-slide-in-up"
                        style={{animationDelay: `${0.5 + index * 0.1}s`}}
                      >
                        <div className="w-6 h-6 bg-accent rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                          <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="text-sm text-primary leading-relaxed flex-1">
                          {skill}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Program Info Column */}
                <div className="space-y-4 animate-slide-in-right" style={{animationDelay: '0.4s'}}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-oxford-blue to-oxford-blue/80 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-primary">Program Details</h4>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Duration", value: selectedProgramData.duration },
                      { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", label: "Prerequisites", value: selectedProgramData.prerequisites },
                      { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", label: "Location", value: "In-person at Lucknow facility" },
                      { icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", label: "Format", value: "Weekend sessions, Saturday & Sunday" }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className="p-4 bg-gradient-to-r from-oxford-blue/5 to-transparent rounded-xl border border-oxford-blue/10 animate-slide-in-up"
                        style={{animationDelay: `${0.5 + index * 0.1}s`}}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                            </svg>
                          </div>
                          <span className="font-bold text-primary">{item.label}</span>
                        </div>
                        <div className="text-secondary text-sm ml-11">{item.value}</div>
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