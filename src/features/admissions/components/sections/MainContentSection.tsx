/**
 * Main Content Section
 * 
 * Core admissions content that's always visible
 */

import React from 'react';
import {
  SelectionSystemSection,
  EligibilityRequirementsSection,
} from './';

export const MainContentSection: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Important Content - Always Visible */}
      <SelectionSystemSection />
      <EligibilityRequirementsSection />
    </div>
  );
};