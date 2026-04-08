'use client';

/**
 * Program Categories Section - Premium Black & White Design
 * 
 * Displays all available program categories with elegant details
 */

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BodyText } from '@/src/shared/components/typography';
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
  },
];

export const ProgramCategoriesSection: React.FC = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-full mx-auto px-4">
        {programCategories.map((program, index) => (
          <Link
            key={program.number}
            href={program.link}
            className={`
              group cursor-pointer bg-white rounded-2xl overflow-hidden
              transition-all duration-500 ease-out
              border-2 border-black
              flex flex-col h-full outline-none
              hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-1
            `}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Clean Image Section */}
            <div className="overflow-hidden h-40">
              <Image
                src={program.image}
                alt={program.title}
                width={640}
                height={256}
                priority={index < 2}
                sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content Area */}
            <div className="px-4 py-3 flex flex-col gap-3 flex-1">
              {/* Title Heading */}
              <h3 className="text-sm sm:text-base font-bold text-black leading-tight">
                {program.title}
              </h3>
              
              {/* Description */}
              <BodyText className="text-gray-600 leading-snug text-[11px] line-clamp-2">
                {program.description}
              </BodyText>

              {/* Meta Information */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-2">
                <div className="flex items-center gap-1">
                  <div className="w-3.5 h-3.5 bg-black rounded-md flex items-center justify-center">
                    <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="font-semibold text-black text-[10px]">{program.duration}</span>
                </div>
                <div className="text-[10px] text-gray-500 italic max-w-[120px] text-right">
                  {program.prerequisites}
                </div>
              </div>

              <button
                type="button"
                className="mt-auto self-center inline-flex justify-center text-xs font-semibold text-black border-b-2 border-black transition-opacity duration-300 hover:opacity-70"
              >
                View Full Details
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
