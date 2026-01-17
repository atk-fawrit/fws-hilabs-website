/**
 * Application Protocol Section
 * 
 * Displays application timeline, response protocols, and confirmation requirements
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';

export const ApplicationProtocolSection: React.FC = () => {
  return (
    <section className="space-y-6">
      <H2 className="text-4xl font-bold text-primary">Application Protocol</H2>
      
      <div className="space-y-4">
        <BodyText className="text-lg leading-relaxed text-primary">
          The application process operates on a structured timeline with specific 
          response protocols. Candidates must follow the prescribed sequence and 
          meet all deadlines for consideration.
        </BodyText>
        
        <div className="space-y-6">
          {/* Application Timeline */}
          <div className="bg-white border-2 border-accent p-6">
            <H3 className="text-accent font-bold text-2xl mb-4">APPLICATION TIMELINE</H3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <BodyText className="font-semibold text-primary">Application Submission:</BodyText>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1 text-sm">•</span>
                    <BodyText className="text-sm">Submit complete application</BodyText>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1 text-sm">•</span>
                    <BodyText className="text-sm">Response within 5 business days</BodyText>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1 text-sm">•</span>
                    <BodyText className="text-sm">Screening invitation or rejection</BodyText>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <BodyText className="font-semibold text-primary">Screening Assessment:</BodyText>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1 text-sm">•</span>
                    <BodyText className="text-sm">Schedule within 10 business days</BodyText>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1 text-sm">•</span>
                    <BodyText className="text-sm">Complete 3-hour assessment</BodyText>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1 text-sm">•</span>
                    <BodyText className="text-sm">Results within 3 business days</BodyText>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <BodyText className="font-semibold text-primary">Technical Interview:</BodyText>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1 text-sm">•</span>
                    <BodyText className="text-sm">Schedule within 7 business days</BodyText>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1 text-sm">•</span>
                    <BodyText className="text-sm">90-minute interview session</BodyText>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1 text-sm">•</span>
                    <BodyText className="text-sm">Feedback within 2 business days</BodyText>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-2">
                <BodyText className="font-semibold text-primary">Admission Decision:</BodyText>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1 text-sm">•</span>
                    <BodyText className="text-sm">Final decision within 7 business days</BodyText>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1 text-sm">•</span>
                    <BodyText className="text-sm">Written notification with details</BodyText>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-2 mt-1 text-sm">•</span>
                    <BodyText className="text-sm">Program placement or waitlist status</BodyText>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Response Protocols */}
          <div className="bg-secondary/5 border-2 border-secondary p-6">
            <H3 className="text-secondary font-bold text-2xl mb-4">RESPONSE PROTOCOLS</H3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-secondary mr-3 mt-1">•</span>
                <BodyText className="text-base">All communications conducted via email with documented timestamps</BodyText>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-3 mt-1">•</span>
                <BodyText className="text-base">Candidates must respond to scheduling requests within 48 hours</BodyText>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-3 mt-1">•</span>
                <BodyText className="text-base">Missed deadlines or non-responses result in automatic rejection</BodyText>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-3 mt-1">•</span>
                <BodyText className="text-base">No extensions or special accommodations for timeline requirements</BodyText>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-3 mt-1">•</span>
                <BodyText className="text-base">Questions directed to admissions@hilabs.in with 24-hour response commitment</BodyText>
              </li>
            </ul>
          </div>
          
          {/* Admission Confirmation */}
          <div className="bg-accent/5 border-2 border-accent p-6">
            <H3 className="text-accent font-bold text-2xl mb-4">ADMISSION CONFIRMATION</H3>
            <BodyText className="text-base leading-relaxed text-primary mb-4">
              Admitted candidates receive written confirmation with program details, 
              start date, and pre-program requirements. Confirmation must be returned 
              within 72 hours to secure program placement.
            </BodyText>
            <div className="bg-accent/10 border-l-4 border-accent p-4">
              <BodyText className="text-sm text-primary">
                <strong>CONFIRMATION REQUIREMENTS:</strong> Signed commitment agreement, financial verification, 
                relocation timeline, emergency contact information, medical clearance documentation.
              </BodyText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
