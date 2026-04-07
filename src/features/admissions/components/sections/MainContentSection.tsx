/**
 * Main Content Section
 * 
 * Clean admission categories matching home page style
 */

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { admissionsData } from '../../data';

export const MainContentSection: React.FC = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setActiveCategory(id);
    if (id === 'flagship') {
      router.push('/admissions/flagship-program');
    } else if (id === 'short-courses') {
      router.push('/admissions/premium-short-courses');
    }
  };

  return (
    <section className="relative w-full bg-white py-12">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Category Cards - Better Visibility */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {admissionsData.categories.map((category, idx) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => handleCardClick(category.id)}
              className={`text-left p-8 rounded-2xl transition-all duration-500 relative overflow-hidden group ${
                activeCategory === category.id
                  ? 'bg-black text-white shadow-2xl ring-4 ring-black ring-offset-4'
                  : 'bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 shadow-md hover:shadow-xl'
              }`}
            >
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs font-bold uppercase tracking-[0.2em] ${
                    activeCategory === category.id ? 'text-white/70' : 'text-gray-500'
                  }`}>
                    Category {category.number}
                  </span>
                  <motion.div 
                    animate={{ 
                      scale: activeCategory === category.id ? 1.2 : 1,
                    }}
                    className={`w-4 h-4 rounded-full ${
                      activeCategory === category.id ? 'bg-white' : 'bg-gray-400'
                    }`}
                  />
                </div>
                
                <h3 className={`text-2xl md:text-3xl font-bold mb-3 tracking-tight transition-colors ${
                  activeCategory === category.id ? 'text-white' : 'text-black group-hover:text-gray-900'
                }`}>
                  {category.title}
                </h3>
                
                <p className={`text-sm md:text-base leading-relaxed font-light mb-4 ${
                  activeCategory === category.id ? 'text-white/90' : 'text-gray-600'
                }`}>
                  {category.description}
                </p>
                
                <div className="flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${
                    activeCategory === category.id ? 'bg-white' : 'bg-gray-600'
                  }`} />
                  <span className={`text-xs font-bold uppercase tracking-wider ${
                    activeCategory === category.id ? 'text-white' : 'text-gray-700'
                  }`}>
                    {category.badge}
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
