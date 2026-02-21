/**
 * Main Content Section
 * 
 * Two admission categories: Flagship Program (selection criteria) and Premium Short Courses (direct admission)
 */

import React, { useState } from 'react';
import Image from 'next/image';
import '../../styles/MainContentSection.styles.css';

type AdmissionCategory = 'flagship' | 'short-courses';

export const MainContentSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<AdmissionCategory>('flagship');
  const [activeTab, setActiveTab] = useState<'eligible' | 'not-eligible'>('eligible');

  const eligibilityCriteria = [
    'Age 18-28 at program commencement',
    "Bachelor's degree in any discipline or equivalent",
    'Basic programming exposure (any language)',
    'English proficiency for technical communication',
    'Ability to commit full-time for 12 months',
    'Physical presence in Lucknow',
    'Financial capacity for living expenses'
  ];

  const nonEligibility = [
    'Current employment that cannot be terminated',
    'Family commitments requiring regular absence',
    'Expectation of placement guarantees',
    'Inability to relocate to Lucknow',
    'Seeking certification-focused training',
    'Preference for online/hybrid formats',
    'Unwilling to accept elimination evaluation'
  ];

  return (
    <section className="relative w-full py-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/A-bgimage.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/90"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-8 md:px-16 lg:px-24 space-y-16">
        
        {/* Admission Header */}
        <div className="space-y-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-2">
              <div className="h-px w-12 bg-white/30 mb-4"></div>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight leading-tight">
              Admission Pathways
            </h2>
            <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed">
              Two distinct admission routes based on program type and commitment level.
            </p>
          </div>
        </div>

        {/* Category Selector - Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <button
            onClick={() => setActiveCategory('flagship')}
            className={`group text-left p-8 border transition-all duration-400 ${
              activeCategory === 'flagship'
                ? 'bg-white/10 border-white/40 backdrop-blur-sm'
                : 'bg-white/02 border-white/10 hover:bg-white/05 hover:border-white/20'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs font-medium text-white/50 uppercase tracking-widest">Category 01</span>
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeCategory === 'flagship' ? 'bg-white' : 'bg-white/20'
              }`}></div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
              Flagship Program
            </h3>
            <p className="text-base text-white/60 leading-relaxed font-light mb-4">
              12-month full-time engineering talent production program with rigorous selection criteria.
            </p>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-medium text-white/70 uppercase tracking-wider">Selection-Based Entry</span>
            </div>
          </button>

          <button
            onClick={() => setActiveCategory('short-courses')}
            className={`group text-left p-8 border transition-all duration-400 ${
              activeCategory === 'short-courses'
                ? 'bg-white/10 border-white/40 backdrop-blur-sm'
                : 'bg-white/02 border-white/10 hover:bg-white/05 hover:border-white/20'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-xs font-medium text-white/50 uppercase tracking-widest">Category 02</span>
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeCategory === 'short-courses' ? 'bg-white' : 'bg-white/20'
              }`}></div>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
              Premium Short Courses
            </h3>
            <p className="text-base text-white/60 leading-relaxed font-light mb-4">
              Weekend-based professional development courses with direct admission on enrollment.
            </p>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm font-medium text-white/70 uppercase tracking-wider">Direct Admission</span>
            </div>
          </button>
        </div>

        {/* Category Content */}
        <div className="max-w-5xl mx-auto">
          
          {/* ======================== */}
          {/* FLAGSHIP PROGRAM CONTENT */}
          {/* ======================== */}
          <div className={`transition-all duration-500 ${
            activeCategory === 'flagship'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8 hidden'
          }`}>
            <div className="space-y-16">
              {/* Selection System */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Selection System
                  </h3>
                  <p className="text-lg text-white/70 font-light leading-relaxed">
                    HI Labs admissions operates as a selection system, not a sales funnel.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="premium-card">
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                      The process identifies candidates capable of completing the 12-month engineering production system under enforced evaluation and supervised deployment protocols.
                    </p>
                  </div>
                  
                  <div className="premium-card-highlight">
                    <div className="space-y-3">
                      <h3 className="text-sm font-medium text-white/60 uppercase tracking-widest">
                        Selection Criteria
                      </h3>
                      <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                        This is a filtering mechanism designed to identify serious candidates who understand the commitment and constraints of the program. We select for aptitude, commitment, and alignment with institutional expectations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="premium-card-subtle">
                    <p className="text-base md:text-lg text-white/70 leading-relaxed font-light">
                      The admissions process evaluates technical aptitude, commitment capacity, and understanding of program constraints. Candidates must demonstrate readiness for full-time, in-person participation and acceptance of elimination-based evaluation.
                    </p>
                  </div>
                </div>
              </div>

              {/* Eligibility Requirements */}
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Eligibility Requirements
                </h3>

                {/* Minimal Toggle */}
                <div className="flex justify-center">
                  <div className="inline-flex bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1">
                    <button
                      onClick={() => setActiveTab('eligible')}
                      className={`px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                        activeTab === 'eligible'
                          ? 'bg-white text-black'
                          : 'text-white/60 hover:text-white/90'
                      }`}
                    >
                      Eligible
                    </button>
                    <button
                      onClick={() => setActiveTab('not-eligible')}
                      className={`px-8 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                        activeTab === 'not-eligible'
                          ? 'bg-white text-black'
                          : 'text-white/60 hover:text-white/90'
                      }`}
                    >
                      Non-Eligible
                    </button>
                  </div>
                </div>

                {/* Tab Content */}
                <div className="relative min-h-[500px]">
                  
                  {/* Eligible Criteria */}
                  <div
                    className={`transition-all duration-500 ${
                      activeTab === 'eligible'
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8 absolute inset-0 pointer-events-none'
                    }`}
                  >
                    <div className="space-y-3">
                      {eligibilityCriteria.map((item, idx) => (
                        <div
                          key={idx}
                          className="criteria-item"
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          <div className="flex items-start gap-6 p-5">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            </div>
                            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light flex-1">
                              {item}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Non-Eligible */}
                  <div
                    className={`transition-all duration-500 ${
                      activeTab === 'not-eligible'
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8 absolute inset-0 pointer-events-none'
                    }`}
                  >
                    <div className="space-y-3">
                      {nonEligibility.map((item, idx) => (
                        <div
                          key={idx}
                          className="criteria-item-negative"
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          <div className="flex items-start gap-6 p-5">
                            <div className="flex-shrink-0 mt-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                            </div>
                            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light flex-1">
                              {item}
                            </p>
                          </div>
                        </div>
                      ))}

                      <div className="mt-6 p-6 border-l border-white/20">
                        <p className="text-base text-white/60 font-light italic">
                          Candidates with these conditions will not be considered for admission.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ============================== */}
          {/* PREMIUM SHORT COURSES CONTENT  */}
          {/* ============================== */}
          <div className={`transition-all duration-500 ${
            activeCategory === 'short-courses'
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8 hidden'
          }`}>
            <div className="space-y-12">
              {/* Direct Admission Overview */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Direct Admission
                  </h3>
                  <p className="text-lg text-white/70 font-light leading-relaxed">
                    Premium Short Courses operate on a direct enrollment model with no selection process required.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="premium-card">
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                      Unlike the Flagship Program, Premium Short Courses are open to all professionals who meet the basic prerequisites for their chosen course. There is no competitive selection, screening assessment, or interview process.
                    </p>
                  </div>

                  <div className="premium-card-highlight">
                    <div className="space-y-3">
                      <h3 className="text-sm font-medium text-white/60 uppercase tracking-widest">
                        How It Works
                      </h3>
                      <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                        Choose your course, verify you meet the prerequisites, complete the enrollment form, and confirm your seat. Admission is granted on a first-come, first-served basis subject to available capacity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enrollment Steps */}
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Enrollment Process
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      step: '01',
                      title: 'Browse Courses',
                      description: 'Review available Premium Short Courses and select the one that matches your professional development goals.',
                    },
                    {
                      step: '02',
                      title: 'Verify Prerequisites',
                      description: 'Confirm you meet the basic prerequisites listed for your chosen course. These are minimal and skills-based.',
                    },
                    {
                      step: '03',
                      title: 'Complete Enrollment',
                      description: 'Fill out the enrollment form with your details and course preference. No essays, assessments, or interviews required.',
                    },
                    {
                      step: '04',
                      title: 'Confirm Seat',
                      description: 'Receive your confirmation and course details. Seats are allocated on a first-come, first-served basis.',
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="criteria-item"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className="flex items-start gap-6 p-6">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 border border-white/30 flex items-center justify-center">
                            <span className="text-sm font-bold text-white">{item.step}</span>
                          </div>
                        </div>
                        <div className="flex-1 space-y-1">
                          <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                          <p className="text-base text-white/70 leading-relaxed font-light">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Differences */}
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Key Differences
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: 'Selection Process', flagship: 'Multi-stage evaluation', shortCourse: 'None required' },
                    { label: 'Duration', flagship: '12 months full-time', shortCourse: '4-8 weekends' },
                    { label: 'Commitment', flagship: 'Full-time, in-person', shortCourse: 'Weekend sessions' },
                    { label: 'Admission Type', flagship: 'Competitive selection', shortCourse: 'Direct enrollment' },
                  ].map((row, idx) => (
                    <div key={idx} className="premium-card">
                      <div className="space-y-3">
                        <h4 className="text-xs font-medium text-white/50 uppercase tracking-widest">{row.label}</h4>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Flagship</p>
                            <p className="text-sm text-white/80 font-light">{row.flagship}</p>
                          </div>
                          <div className="w-px h-10 bg-white/10"></div>
                          <div className="flex-1">
                            <p className="text-xs text-white/40 uppercase tracking-wider mb-1">Short Course</p>
                            <p className="text-sm text-white/80 font-light">{row.shortCourse}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
