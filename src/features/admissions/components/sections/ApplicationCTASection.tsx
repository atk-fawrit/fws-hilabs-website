/**
 * Application CTA Section
 * 
 * Displays application checklist and CTA button
 */

import React, { useState } from 'react';
import { H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { SectionHeader } from '@/src/shared/components/content';

export const ApplicationCTASection: React.FC = () => {
  const [checklist, setChecklist] = useState({
    eligibility: false,
    availability: false,
    evaluation: false,
    costs: false,
    policies: false
  });

  const toggleCheckbox = (key: keyof typeof checklist) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const allChecked = Object.values(checklist).every(v => v);

  return (
    <section className="space-y-4">
      <SectionHeader 
        title="Begin Application Process"
        className="mb-6"
      />
      
      <div className="space-y-4">
        <BodyText className="text-base leading-relaxed text-primary text-center">
          Candidates who understand the program constraints, selection process, and 
          commitment requirements may proceed with the application.
        </BodyText>
        
        <div className="bg-white border-2 border-secondary/30 p-6 max-w-4xl mx-auto">
          <H3 className="text-lg font-semibold text-primary mb-4">APPLICATION CHECKLIST</H3>
          <div className="space-y-3 mb-6">
            {[
              { key: 'eligibility' as const, label: 'Verified eligibility against all criteria' },
              { key: 'availability' as const, label: 'Confirmed 12-month availability and relocation capacity' },
              { key: 'evaluation' as const, label: 'Acknowledged elimination-based evaluation system' },
              { key: 'costs' as const, label: 'Accepted financial and career opportunity costs' },
              { key: 'policies' as const, label: 'Understood no placement guarantees or refund policies' }
            ].map(item => (
              <label key={item.key} className="flex items-start gap-3 cursor-pointer hover:bg-secondary/5 p-2 -m-2 transition-colors">
                <input
                  type="checkbox"
                  checked={checklist[item.key]}
                  onChange={() => toggleCheckbox(item.key)}
                  className="mt-1 w-4 h-4 cursor-pointer accent-accent"
                />
                <BodyText className="text-sm text-primary">{item.label}</BodyText>
              </label>
            ))}
          </div>

          <div className="text-center">
            <button
              disabled={!allChecked}
              className={`w-full py-3 px-6 font-semibold text-base transition-all ${
                allChecked
                  ? 'bg-accent text-white hover:bg-accent/90'
                  : 'bg-secondary/30 text-secondary cursor-not-allowed'
              }`}
            >
              Submit Application
            </button>
            
            {!allChecked && (
              <BodyText className="text-xs text-secondary text-center mt-3">
                Please complete the checklist to enable application submission
              </BodyText>
            )}
          </div>
          
          <BodyText className="text-xs text-secondary mt-4 leading-relaxed text-center">
            Application submission indicates acceptance of all program constraints and 
            selection protocols outlined above.
          </BodyText>
        </div>
      </div>
    </section>
  );
};
