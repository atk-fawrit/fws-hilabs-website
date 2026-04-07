'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MonitorPlay } from 'lucide-react';

export default function HeroSection() {
  return (
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
                Frontend Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">(React)</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
                Build modern, interactive web applications with the industry&apos;s leading UI framework.
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
                    <p className="text-sm leading-relaxed">14 Weeks | Full-Time & Part-Time options available</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
                    <MonitorPlay className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Format</h4>
                    <p className="text-sm leading-relaxed">Live lectures, project-based learning, code reviews, and portfolio development</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
