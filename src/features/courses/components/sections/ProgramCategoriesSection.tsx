/**
 * Program Categories Section
 * 
 * Displays all available program categories with details
 */

import React from 'react';
import { H2 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { ProgramCategory } from '../ui';

const programCategories = [
  {
    number: '01',
    title: 'WEB DEVELOPMENT FUNDAMENTALS',
    duration: '6 weekends',
    prerequisites: 'Basic computer literacy',
    skills: [
      'HTML structure and semantic markup',
      'CSS styling and responsive design principles',
      'JavaScript fundamentals and DOM manipulation',
      'Version control with Git and collaborative workflows',
    ],
    description: 'Suitable for professionals seeking to understand web technologies or add basic web development capabilities to existing skill sets.',
  },
  {
    number: '02',
    title: 'DATA ANALYSIS WITH PYTHON',
    duration: '8 weekends',
    prerequisites: 'Basic mathematics, spreadsheet experience',
    skills: [
      'Python programming fundamentals for data manipulation',
      'Data cleaning and preparation techniques',
      'Statistical analysis and visualization with libraries',
      'Report generation and insight communication',
    ],
    description: 'Designed for analysts, researchers, and professionals who work with data and need programmatic analysis capabilities.',
  },
  {
    number: '03',
    title: 'DATABASE DESIGN AND MANAGEMENT',
    duration: '4 weekends',
    prerequisites: 'Basic understanding of data organization',
    skills: [
      'Relational database design principles and normalization',
      'SQL query writing for data retrieval and manipulation',
      'Database administration and performance optimization',
      'Backup, recovery, and security implementation',
    ],
    description: 'Appropriate for professionals managing organizational data or requiring structured data storage and retrieval capabilities.',
  },
  {
    number: '04',
    title: 'LINUX SYSTEM ADMINISTRATION',
    duration: '6 weekends',
    prerequisites: 'Basic command line familiarity',
    skills: [
      'Linux system installation, configuration, and maintenance',
      'User management, permissions, and security protocols',
      'Network configuration and service management',
      'Automation scripting and system monitoring',
    ],
    description: 'Targeted at IT professionals and technical staff requiring server administration and system management competencies.',
  },
];

export const ProgramCategoriesSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2>Program Categories</H2>
      
      <div className="space-y-6">
        <BodyText>
          Short Programs are organized into categories based on skill domain and 
          application context. Each category addresses specific professional development 
          needs without attempting comprehensive coverage of engineering disciplines.
        </BodyText>
        
        <div className="space-y-12">
          {programCategories.map((program) => (
            <ProgramCategory key={program.number} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};
