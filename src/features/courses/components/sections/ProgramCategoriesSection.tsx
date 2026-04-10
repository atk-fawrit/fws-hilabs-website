'use client';

/**
 * Program Categories Section - Premium Black & White Design
 * 
 * Displays all available program categories with elegant details
 */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../../styles/ProgramCategoriesSection.styles.css';

const programCategories = [
  {
    number: '01',
    title: 'Python Developer Bootcamp',
    duration: '16 weeks',
    prerequisites: 'Basic programming exposure',
    description: 'Build a strong programming foundation with one of the world\'s most versatile languages.',
    image: '/images/pythoncard.jpg',
    category: 'PROGRAMMING',
    link: '/courses/python-developer-bootcamp',
    startDate: '9 May 2026',
  },
  {
    number: '02',
    title: 'SQL & Data Foundations',
    duration: '8 weeks',
    prerequisites: 'Basic computer literacy',
    description: 'Master database fundamentals and SQL for effective data management and retrieval.',
    image: '/images/sqlcard.jpg',
    category: 'DATABASE',
    link: '/courses/sql-data-foundations',
    startDate: '16 May 2026',
  },
  {
    number: '03',
    title: 'Frontend Developer (React)',
    duration: '12 weeks',
    prerequisites: 'JavaScript fundamentals',
    description: 'Build modern, interactive web applications with React and contemporary web technologies.',
    image: '/images/admsncard3.png',
    category: 'WEB DEVELOPMENT',
    link: '/courses/frontend-developer-react',
    startDate: '30 May 2026',
  },
  {
    number: '04',
    title: 'Mobile App Developer (React Native)',
    duration: '14 weeks',
    prerequisites: 'JavaScript and React experience',
    description: 'Develop cross-platform mobile applications using React Native framework.',
    image: '/images/mobilecard.jpg',
    category: 'MOBILE DEVELOPMENT',
    link: '/courses/mobile-app-developer-react-native',
    startDate: '20 Jun 2026',
  },
  {
    number: '05',
    title: 'Backend Developer (Node.js)',
    duration: '14 weeks',
    prerequisites: 'JavaScript fundamentals',
    description: 'Create scalable server-side applications using Node.js and modern backend technologies.',
    image: '/images/backend.jpg',
    category: 'PROGRAMMING',
    link: '/courses/backend-developer-node-js',
    startDate: '6 Jun 2026',
  },
  {
    number: '06',
    title: 'Full-Stack Developer (MERN)',
    duration: '18 weeks',
    prerequisites: 'JavaScript fundamentals',
    description: 'Master complete web development with MongoDB, Express, React, and Node.js stack.',
    image: '/images/fullstack.jpg',
    category: 'PROGRAMMING',
    link: '/courses/full-stack-developer-mern',
    startDate: '13 Jun 2026',
  },
  {
    number: '07',
    title: 'Machine Learning with Python',
    duration: '14 weeks',
    prerequisites: 'Python fundamentals, basic statistics',
    description: 'Build intelligent systems using machine learning algorithms and Python libraries.',
    image: '/images/machinelearning.jpg',
    category: 'AI & MACHINE LEARNING',
    link: '/courses/machine-learning-with-python',
    startDate: '27 Jun 2026',
  },
  {
    number: '08',
    title: 'AI Foundations',
    duration: '10 weeks',
    prerequisites: 'Basic programming knowledge',
    description: 'Explore fundamental concepts of artificial intelligence and its practical applications.',
    image: '/images/AIfoundationcard.jpg',
    category: 'AI & MACHINE LEARNING',
    link: '/courses/ai-foundations',
    startDate: '23 May 2026',
  },
  {
    number: '09',
    title: 'AI Product Developer with Python',
    duration: '16 weeks',
    prerequisites: 'Python fundamentals, AI basics',
    description: 'Develop AI-powered products and solutions using Python and modern AI frameworks.',
    image: '/images/admsncard9.png',
    category: 'AI & MACHINE LEARNING',
    link: '/courses/ai-product-developer-with-python',
    startDate: '4 Jul 2026',
  },
  {
    number: '10',
    title: 'Data Analytics & Business Intelligence',
    duration: '12 weeks',
    prerequisites: 'Basic mathematics, spreadsheet experience',
    description: 'Transform data into actionable business insights using analytics and BI tools.',
    image: '/images/dataanalystcard.jpg',
    category: 'DATA SCIENCE',
    link: '/courses/data-analytics-business-intelligence',
    startDate: '25 Jul 2026',
  },
  {
    number: '11',
    title: 'DevOps & Deployment for Developers',
    duration: '10 weeks',
    prerequisites: 'Basic Linux command line knowledge',
    description: 'Master CI/CD pipelines, containerization, and deployment automation for modern applications.',
    image: '/images/devopscard.jpg',
    category: 'DEVOPS',
    link: '/courses/devops-deployment-for-developers',
    startDate: '11 Jul 2026',
  },
  {
    number: '12',
    title: 'QA & Test Automation',
    duration: '10 weeks',
    prerequisites: 'Basic programming knowledge',
    description: 'Build robust quality assurance practices and automation testing frameworks.',
    image: '/images/QAcard.jpg',
    category: 'TESTING',
    link: '/courses/qa-test-automation',
    startDate: '18 Jul 2026',
  },
];

export const ProgramCategoriesSection: React.FC = () => {
  return (
    <section className="space-y-8">
      {/* Header */}
      <div className="space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
          Short Courses
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light text-justify">
          Weekend-based technical training modules designed for working professionals seeking targeted 
          skill development without full-time commitment. Each course addresses specific professional 
          development needs in focused skill domains.
        </p>
      </div>
      
      {/* Premium Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-full mx-auto px-4">
        {programCategories.map((program, index) => (
          <Link
            key={program.number}
            href={program.link}
            className="group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 ease-out flex flex-col h-full outline-none hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-1 relative"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Full Image with Overlay */}
            <div className="relative h-full min-h-[320px]">
              <Image
                src={program.image}
                alt={program.title}
                fill
                priority={index < 2}
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
                className="object-cover"
              />
              
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Content overlay */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                {/* Title at top */}
                <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                  {program.title}
                </h3>
                
                {/* Bottom content */}
                <div className="space-y-3">
                  {/* Duration */}
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-white rounded-md flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-white text-xs">{program.duration}</span>
                  </div>
                  
                  {/* Start date and View Details */}
                  <div className="flex items-center justify-between">
                    <span className="text-white/90 text-xs">Starts: {program.startDate}</span>
                    <span className="text-white font-semibold text-xs">
                      View Details
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
