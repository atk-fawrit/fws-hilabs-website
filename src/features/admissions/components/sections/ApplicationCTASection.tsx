/**
 * Application CTA Section
 * 
 * Displays application checklist and CTA button
 */

import React, { useState } from 'react';
import { ApplicationModal } from '@/src/shared/components/content/ApplicationModal';

export const ApplicationCTASection: React.FC = () => {
  const [checklist, setChecklist] = useState({
    eligibility: false,
    availability: false,
    evaluation: false,
    costs: false,
    policies: false
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleCheckbox = (key: keyof typeof checklist) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const allChecked = Object.values(checklist).every(v => v);

  const handleSubmit = () => {
    if (allChecked) {
      setIsModalOpen(true);
    }
  };

  return (
    <section className="w-full bg-white py-20 px-8 md:px-16 lg:px-24">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            Begin Application Process
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed font-light">
            Candidates who understand the program constraints, selection process, and 
            commitment requirements may proceed with the application.
          </p>
        </div>
        
        {/* Checklist Card */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 md:p-10">
          <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-6">
            Application Checklist
          </h3>
          
          <div className="space-y-4 mb-8">
            {[
              { key: 'eligibility' as const, label: 'Verified eligibility against all criteria' },
              { key: 'availability' as const, label: 'Confirmed 12-month availability and relocation capacity' },
              { key: 'evaluation' as const, label: 'Acknowledged elimination-based evaluation system' },
              { key: 'costs' as const, label: 'Accepted financial and career opportunity costs' },
              { key: 'policies' as const, label: 'Understood no placement guarantees or refund policies' }
            ].map(item => (
              <label 
                key={item.key} 
                className="flex items-start gap-4 cursor-pointer hover:bg-white p-3 -mx-3 rounded-lg transition-colors group"
              >
                <input
                  type="checkbox"
                  checked={checklist[item.key]}
                  onChange={() => toggleCheckbox(item.key)}
                  className="mt-1 w-5 h-5 cursor-pointer accent-gray-900 rounded"
                />
                <span className="text-base text-gray-700 leading-relaxed font-light group-hover:text-gray-900">
                  {item.label}
                </span>
              </label>
            ))}
          </div>

          {/* Submit Button */}
          <div className="space-y-4">
            <button
              onClick={handleSubmit}
              disabled={!allChecked}
              className={`w-full py-4 px-8 font-medium text-base rounded-lg transition-all ${
                allChecked
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Submit Application for Review
            </button>
            
            {!allChecked && (
              <p className="text-sm text-gray-500 font-light">
                Please complete the checklist to enable application submission
              </p>
            )}
          </div>
          
          <p className="text-sm text-gray-600 mt-6 leading-relaxed font-light">
            Application submission indicates acceptance of all program constraints and 
            selection protocols outlined above.
          </p>
        </div>
      </div>

      {/* Application Modal */}
      <ApplicationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};
