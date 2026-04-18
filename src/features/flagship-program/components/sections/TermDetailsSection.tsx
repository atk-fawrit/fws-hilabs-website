/**
 * Term Details Section
 * 
 * Clean design matching site style
 */

import React from 'react';
import { programTerms } from '../../data';

export const TermDetailsSection: React.FC = () => {
  return (
    <div className="w-full space-y-6">
      {programTerms.map((term, index) => (
        <div 
          key={term.id} 
          className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-gray-200"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-xl">
              {index + 1}
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
                {term.title}
              </h3>
              <div className="flex items-center gap-3 text-gray-600">
                <span className="font-medium">{term.duration}</span>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                <span>{term.description}</span>
              </div>
            </div>
          </div>

          <div className="pl-0 sm:pl-16">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              What You&apos;ll Learn
            </h4>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {term.topics.map((topic, topicIndex) => (
                <li 
                  key={topicIndex} 
                  className="flex items-start gap-3"
                >
                  <span className="text-gray-900 mt-0.5">•</span>
                  <span className="text-gray-700 leading-relaxed">{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};