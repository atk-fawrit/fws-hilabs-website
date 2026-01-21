/**
 * Institutional Charter Section
 * 
 * Enhanced introduction to the institutional charter and HI Labs identity
 */

import React from 'react';
import { H2, H3, BodyText } from '@/src/shared/components/typography';
import { InfoBox } from '@/src/shared/components/content';

export const InstitutionalCharterSection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2 className="text-3xl font-light text-primary mb-4">Institutional Charter</H2>
      
      <div className="space-y-8">
        <InfoBox
          variant="accent"
          title="INSTITUTIONAL DOCUMENT"
          description="This document establishes the institutional identity, operating principles, and governance framework of Human Intelligence Laboratories Private Limited as a systematic engineering talent production facility."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <H3 className="text-xl font-light text-primary">Institutional Identity</H3>
            <BodyText className="text-primary/80 leading-relaxed">
              HI Labs operates as an institutional engineering talent production 
              system rather than a traditional educational institution or training 
              provider. The organization functions through systematic competency 
              development, enforced evaluation protocols, and supervised deployment 
              mechanisms designed to produce deployable junior engineers.
            </BodyText>
          </div>
          
          <div className="space-y-6">
            <H3 className="text-xl font-light text-primary">Charter Framework</H3>
            <BodyText className="text-primary/80 leading-relaxed">
              This institutional charter replaces conventional mission statements 
              and organizational narratives with systematic documentation of operating 
              principles, accountability structures, and governance mechanisms that 
              define institutional identity and operational boundaries.
            </BodyText>
          </div>

          <div className="space-y-6">
            <H3 className="text-xl font-light text-primary">Systematic Approach</H3>
            <BodyText className="text-primary/80 leading-relaxed">
              All institutional operations follow documented protocols with 
              measurable outcomes, systematic assessment criteria, and transparent 
              accountability mechanisms ensuring consistent performance and 
              continuous improvement across all operational domains.
            </BodyText>
          </div>
        </div>

        <div className="bg-gradient-to-r from-accent/5 to-transparent border-l-4 border-accent p-8">
          <H3 className="text-lg font-medium text-primary mb-4">Charter Specifications</H3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <BodyText className="font-medium text-primary mb-2">Operational Focus:</BodyText>
              <ul className="space-y-1 text-primary/70">
                <li>• Systematic talent production</li>
                <li>• Competency development protocols</li>
                <li>• Performance-based elimination</li>
                <li>• Supervised deployment systems</li>
              </ul>
            </div>
            <div>
              <BodyText className="font-medium text-primary mb-2">Institutional Structure:</BodyText>
              <ul className="space-y-1 text-primary/70">
                <li>• Documented accountability frameworks</li>
                <li>• Systematic governance mechanisms</li>
                <li>• Evidence-based operations</li>
                <li>• Transparent boundary definitions</li>
              </ul>
            </div>
            <div>
              <BodyText className="font-medium text-primary mb-2">Quality Standards:</BodyText>
              <ul className="space-y-1 text-primary/70">
                <li>• Systematic assessment protocols</li>
                <li>• Consistent evaluation criteria</li>
                <li>• Performance tracking systems</li>
                <li>• Continuous improvement processes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
