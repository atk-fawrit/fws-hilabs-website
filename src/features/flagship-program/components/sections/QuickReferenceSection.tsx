/**
 * Quick Reference Section
 * 
 * Program specifications summary
 */

import React from 'react';
import { H2, BodyText } from '@/src/shared/components/typography';
import { programOverview } from '../../data';

export const QuickReferenceSection: React.FC = () => {
  return (
    <section className="w-full bg-accent/5 border-l-4 border-accent p-6">
      <H2 className="text-lg font-light text-primary mb-3">Program Specifications</H2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
        <div>
          <BodyText className="font-medium text-primary mb-1">Duration:</BodyText>
          <BodyText className="text-primary/70">{programOverview.duration}</BodyText>
        </div>
        <div>
          <BodyText className="font-medium text-primary mb-1">Format:</BodyText>
          <BodyText className="text-primary/70">{programOverview.format}</BodyText>
        </div>
        <div>
          <BodyText className="font-medium text-primary mb-1">Structure:</BodyText>
          <BodyText className="text-primary/70">{programOverview.phases}</BodyText>
        </div>
        <div>
          <BodyText className="font-medium text-primary mb-1">Assessment:</BodyText>
          <BodyText className="text-primary/70">{programOverview.evaluation}</BodyText>
        </div>
      </div>
    </section>
  );
};