/**
 * Candidate Suitability Section
 * 
 * Displays good fit and poor fit candidate profiles
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

export const CandidateSuitabilitySection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2>Candidate Suitability</H2>
      
      <div className="space-y-8">
        <div className="space-y-4">
          <H3 className="font-mono">GOOD FIT CANDIDATES</H3>
          <div className="pl-6 space-y-4">
            <BodyText>
              Short Programs are designed for specific candidate profiles who can 
              benefit from focused skill development within the program constraints 
              and time commitments.
            </BodyText>
            
            <div className="space-y-3">
              <BodyText><strong>Ideal Participants:</strong></BodyText>
              <ul className="list-disc pl-6 space-y-2">
                <li><BodyText>Working professionals seeking to add specific technical skills</BodyText></li>
                <li><BodyText>Students wanting practical experience beyond academic coursework</BodyText></li>
                <li><BodyText>Career changers exploring technical fields before major transitions</BodyText></li>
                <li><BodyText>Entrepreneurs needing technical competencies for business development</BodyText></li>
                <li><BodyText>Professionals updating skills to match industry evolution</BodyText></li>
              </ul>
            </div>
            
            <div className="bg-accent/10 border-l-4 border-accent p-4 space-y-3">
              <BodyText className="font-mono text-sm">
                SUCCESS INDICATORS: Clear learning objectives, realistic time commitment 
                capacity, willingness to engage in practical work, understanding of 
                program limitations and scope.
              </BodyText>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <H3 className="font-mono">POOR FIT CANDIDATES</H3>
          <div className="pl-6 space-y-4">
            <BodyText>
              Certain candidate expectations and circumstances are incompatible with 
              Short Program structure and outcomes. These candidates should consider 
              alternative educational approaches.
            </BodyText>
            
            <div className="space-y-3">
              <BodyText><strong>Unsuitable Expectations:</strong></BodyText>
              <div className="bg-warning/10 border-l-4 border-warning p-4 space-y-3">
                <ul className="list-disc pl-6 space-y-2 font-mono text-sm">
                  <li><BodyText className="font-mono">Expecting comprehensive career transformation from short modules</BodyText></li>
                  <li><BodyText className="font-mono">Seeking placement assistance or job guarantee outcomes</BodyText></li>
                  <li><BodyText className="font-mono">Unable to commit to weekend schedule consistently</BodyText></li>
                  <li><BodyText className="font-mono">Preferring theoretical learning over practical application</BodyText></li>
                  <li><BodyText className="font-mono">Expecting online or flexible attendance options</BodyText></li>
                  <li><BodyText className="font-mono">Seeking preparation for HI Labs Flagship Program admission</BodyText></li>
                </ul>
              </div>
            </div>
            
            <BodyText>
              Candidates with these expectations should explore comprehensive training 
              programs, online courses, or traditional educational institutions that 
              better match their requirements and timeline preferences.
            </BodyText>
          </div>
        </div>
      </div>
    </section>
  );
};
