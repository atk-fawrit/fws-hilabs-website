'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Course {
  label: string;
  href: string;
}

interface CourseCategory {
  id: string;
  name: string;
  courses: Course[];
}

const courseCategories: CourseCategory[] = [
  {
    id: 'programming',
    name: 'Programming & Development',
    courses: [
      { label: 'Python Developer Bootcamp', href: '/courses/python-developer-bootcamp' },
      { label: 'Frontend Developer (React)', href: '/courses/frontend-developer-react' },
      { label: 'Backend Developer (Node.js)', href: '/courses/backend-developer-node-js' },
      { label: 'Full-Stack Developer (MERN)', href: '/courses/full-stack-developer-mern' },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile Development',
    courses: [
      { label: 'Mobile App Developer (React Native)', href: '/courses/mobile-app-developer-react-native' },
    ],
  },
  {
    id: 'data',
    name: 'Data & Analytics',
    courses: [
      { label: 'SQL & Data Foundations', href: '/courses/sql-data-foundations' },
      { label: 'Data Analytics & Business Intelligence', href: '/courses/data-analytics-business-intelligence' },
    ],
  },
  {
    id: 'ai',
    name: 'AI & Machine Learning',
    courses: [
      { label: 'AI Foundations', href: '/courses/ai-foundations' },
      { label: 'Machine Learning with Python', href: '/courses/machine-learning-with-python' },
      { label: 'AI Product Developer with Python', href: '/courses/ai-product-developer-with-python' },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps & Testing',
    courses: [
      { label: 'DevOps & Deployment for Developers', href: '/courses/devops-deployment-for-developers' },
      { label: 'QA & Test Automation', href: '/courses/qa-test-automation' },
    ],
  },
];

interface CourseDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CourseDropdown({ isOpen, onClose }: CourseDropdownProps) {
  if (!isOpen) return null;

  return (
    <div
      className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-visible z-50"
      onMouseLeave={onClose}
    >
      {/* Categories Container */}
      <div className="py-2">
        {courseCategories.map((category) => (
          <div
            key={category.id}
            className="relative group flex items-stretch"
          >
            {/* Hover Extension Area - Extends left to cover submenu */}
            <div className="absolute right-full top-0 bottom-0 w-56 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto" />

            {/* Category Button */}
            <button
              className="
                flex-1 text-left px-4 py-2.5 flex items-center justify-between transition-all duration-200
                font-medium text-gray-800
                group-hover:font-semibold group-hover:text-gray-900 group-hover:bg-gray-100 group-hover:shadow-md
              "
            >
              <span>{category.name}</span>
              <ChevronRight 
                className="w-4 h-4 text-gray-400 transition-colors duration-200 group-hover:text-gray-700"
              />
            </button>

            {/* Submenu - LEFT SIDE (Always rendered, hidden with visibility) */}
            <div
              className="
                absolute right-full top-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50
                opacity-0 invisible group-hover:opacity-100 group-hover:visible
                transition-all duration-200
                pointer-events-none group-hover:pointer-events-auto
              "
            >
              {category.courses.map((course) => (
                <Link
                  key={course.href}
                  href={course.href}
                  onClick={onClose}
                  className="block px-4 py-2.5 text-xs font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150 cursor-pointer"
                >
                  {course.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
