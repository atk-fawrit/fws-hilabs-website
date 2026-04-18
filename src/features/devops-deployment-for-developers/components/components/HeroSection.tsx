'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, MonitorPlay } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-black border-b border-gray-800 overflow-hidden font-sans">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/coursehero.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-gray-800 text-gray-400 font-semibold text-sm mb-6 border border-gray-700">
                Professional Development Program
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6 leading-tight font-sans">
                DevOps & Deployment <span className="text-white">for Developers</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                Streamline software delivery with modern DevOps practices, automation, and cloud tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-2 lg:mb-0">
                <a href="/admissions/premium-short-courses" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white font-medium text-black hover:bg-gray-200 transition-all">
                  Apply Now
                </a>
                <a href="#curriculum" className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-transparent font-medium text-white hover:bg-white/10 transition-all border border-white hover:border-gray-300">
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
              className="bg-gray-900 backdrop-blur-md rounded-3xl p-8 border border-gray-700 shadow-2xl shadow-black/50"
            >
              <div className="flex items-center justify-between mb-6 border-b border-gray-700 pb-4">
                <h3 className="text-xl font-semibold text-white">
                  Course Details
                </h3>

                <span className="text-sm text-gray-300">
                  Course starts: <span className="text-white font-medium">11 Jul 2026</span>
                </span>
              </div>             
               <div className="space-y-6 text-gray-300">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0 border border-gray-700">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Duration</h4>
                    <p className="text-sm leading-relaxed text-white">12 Weeks | Full-Time & Part-Time options available</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center shrink-0 border border-gray-700">
                    <MonitorPlay className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-1">Format</h4>
                    <p className="text-sm leading-relaxed text-white">Live instruction, lab-based exercises, infrastructure projects, and cloud deployments</p>
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
