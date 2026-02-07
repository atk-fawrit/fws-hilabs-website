import React from 'react';
import { selectionStages } from '../../data';

export const SelectionProcessSection: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-20 px-8 md:px-16 lg:px-24">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            Selection Process
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed font-light">
            The selection process consists of four transparent stages designed to evaluate 
            technical aptitude, commitment capacity, and program alignment. Each stage 
            eliminates candidates who do not meet the requirements for advancement.
          </p>
        </div>
        
        {/* Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {selectionStages.map((stage) => (
            <div key={stage.number} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="bg-gray-900 text-white p-6">
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-light text-white">{stage.number}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-medium mb-2 text-white">{stage.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{stage.duration || stage.timeline}</span>
                      {stage.format && <span>| {stage.format}</span>}
                      {stage.notification && <span>| {stage.notification}</span>}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h4 className="font-medium text-sm mb-3 text-black uppercase tracking-wider">Assessment Components:</h4>
                <ul className="space-y-2 mb-4">
                  {(stage.components || stage.structure || stage.factors || []).map((comp, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="font-light">{comp}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-gray-50 border-l-4 border-gray-900 p-4">
                  <h5 className="font-medium text-xs uppercase mb-2 text-black tracking-wider">Evaluation Signals</h5>
                  <p className="text-sm text-gray-700 font-light">{stage.evaluationSignals}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
