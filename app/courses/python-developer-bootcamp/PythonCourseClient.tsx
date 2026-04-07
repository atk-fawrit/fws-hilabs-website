'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  MonitorPlay, 
  CheckCircle2, 
  ChevronDown, 
  Terminal, 
  Database,
  Code2,
  Cpu,
  Layers,
  Globe,
  Briefcase
} from 'lucide-react';
import { PageLayout } from '@/src/shared/components/layout';

const curriculum = [
  { title: "Module 1: Python Fundamentals", desc: "Variables, data types, operators, control flow, loops, and functions" },
  { title: "Module 2: Data Structures", desc: "Lists, tuples, sets, dictionaries, and comprehensions" },
  { title: "Module 3: Object-Oriented Programming", desc: "Classes, objects, inheritance, polymorphism, and encapsulation" },
  { title: "Module 4: File Handling & Exceptions", desc: "Reading/writing files, exception handling, and context managers" },
  { title: "Module 5: Modules & Libraries", desc: "Standard library, pip, virtual environments, and popular packages" },
  { title: "Module 6: Working with APIs", desc: "HTTP requests, REST APIs, JSON parsing, and authentication" },
  { title: "Module 7: Database Integration", desc: "SQLite, PostgreSQL basics, and ORM with SQLAlchemy" },
  { title: "Module 8: Capstone Project", desc: "Build and deploy a full Python application from scratch" },
];

const learningOutcomes = [
  { text: "Write clean, efficient Python code using core language constructs", icon: <Terminal className="w-6 h-6 text-blue-500" /> },
  { text: "Apply object-oriented programming (OOP) principles to design scalable solutions", icon: <Layers className="w-6 h-6 text-blue-500" /> },
  { text: "Build and consume RESTful APIs using Python frameworks", icon: <Globe className="w-6 h-6 text-blue-500" /> },
  { text: "Automate tasks and scripts for productivity and workflow optimization", icon: <Cpu className="w-6 h-6 text-blue-500" /> },
  { text: "Work with file systems, databases, and third-party libraries", icon: <Database className="w-6 h-6 text-blue-500" /> },
  { text: "Deploy Python applications in real-world environments", icon: <Code2 className="w-6 h-6 text-blue-500" /> },
];

const whoIsThisFor = [
  "Beginners with no prior programming experience",
  "Professionals seeking to transition into software development",
  "Graduates looking to enhance their employability with coding skills",
  "Entrepreneurs who want to automate business workflows",
];

const careers = [
  "Python Developer",
  "Backend Engineer",
  "Automation Engineer",
  "Software Engineer",
  "Junior Full-Stack Developer",
];

export default function PythonCourseClient() {
  const [openModule, setOpenModule] = useState<number | null>(0);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-slate-900 border-b border-slate-800 overflow-hidden font-sans">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-purple-900/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 font-semibold text-sm mb-6 border border-blue-500/20">
                  Professional Development Program
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight font-sans">
                  Python Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Bootcamp</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                  Build a strong programming foundation with one of the world&apos;s most versatile languages.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-2 lg:mb-0">
                  <a href="#apply" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-blue-600 font-medium text-white hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]">
                    Apply Now
                  </a>
                  <a href="#curriculum" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-slate-800 font-medium text-white hover:bg-slate-700 transition-all border border-slate-700 hover:border-slate-600">
                    View Curriculum
                  </a>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-800/80 backdrop-blur-md rounded-3xl p-8 border border-slate-700 shadow-2xl shadow-blue-900/20"
              >
                <h3 className="text-xl font-semibold text-white mb-6 border-b border-slate-700 pb-4">Course Details</h3>
                <div className="space-y-6 text-slate-300">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                      <Clock className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Duration</h4>
                      <p className="text-sm leading-relaxed">16 Weeks | Full-Time & Part-Time options available</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
                      <MonitorPlay className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-1">Format</h4>
                      <p className="text-sm leading-relaxed">Instructor-led live sessions, hands-on projects, coding challenges, and peer reviews</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

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
              
              {/* Course Overview */}
              <section>
                <div className="mb-4">
                  <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Course Overview</h2>
                  <div className="h-1 w-20 bg-blue-600 rounded mt-4"></div>
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  The Python Developer Bootcamp is a comprehensive, hands-on program designed to take learners from the fundamentals of programming to building real-world applications using Python. This course covers core language concepts, data structures, object-oriented programming, file handling, and web development basics — equipping participants with the skills required to pursue a career in software development, automation, or data engineering.
                </p>
              </section>

              {/* What You Will Learn */}
              <section>
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">What You Will Learn</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {learningOutcomes.map((outcome, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors duration-300 text-blue-600 group-hover:text-white">
                        {outcome.icon}
                      </div>
                      <p className="text-slate-700 font-medium leading-snug">{outcome.text}</p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Curriculum */}
              <section id="curriculum">
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-8">Curriculum</h2>
                <div className="space-y-4">
                  {curriculum.map((module, idx) => (
                    <div 
                      key={idx} 
                      className={`bg-white rounded-2xl border transition-all overflow-hidden ${openModule === idx ? 'border-blue-200 shadow-md ring-1 ring-blue-100' : 'border-slate-200 shadow-sm hover:border-slate-300'}`}
                    >
                      <button 
                        onClick={() => setOpenModule(openModule === idx ? null : idx)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                      >
                        <span className={`font-semibold text-lg ${openModule === idx ? 'text-blue-700' : 'text-slate-900'}`}>
                          {module.title}
                        </span>
                        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openModule === idx ? 'rotate-180 text-blue-500' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {openModule === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                          >
                            <div className="px-6 pb-6 pt-1 text-slate-600 text-lg leading-relaxed border-t border-slate-50 mt-1">
                              {module.desc}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* Right Column (Sidebar) */}
            <div className="space-y-8">
              
              {/* Who This Course Is For */}
              <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 sticky top-28">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  Who This Course Is For
                </h3>
                <ul className="space-y-4">
                  {whoIsThisFor.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-slate-600 items-start">
                      <div className="mt-1 w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <hr className="my-8 border-slate-100" />

                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-purple-600" />
                  Career Opportunities
                </h3>
                <div className="flex flex-wrap gap-2">
                  {careers.map((career, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200 hover:bg-slate-200 transition-colors"
                    >
                      {career}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}
