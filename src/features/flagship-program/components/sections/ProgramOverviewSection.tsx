/**
 * Program Overview Section
 * 
 * Main overview content with InfoBox only
 */

import React from 'react';
import { InfoBox } from '@/src/shared/components/content';

export const ProgramOverviewSection: React.FC = () => {
  return (
    <div className="w-full">
      <InfoBox
        variant="accent"
        title="FLAGSHIP PROGRAM OVERVIEW"
        description="Systematic 12-month engineering talent production program with structured competency development, elimination protocols, and supervised deployment phases designed to produce deployable junior engineers through documented assessment and accountability frameworks."
      />
    </div>
  );
};