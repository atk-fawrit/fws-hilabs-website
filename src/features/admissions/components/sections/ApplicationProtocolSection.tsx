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
    <section className="space-y-8">
      <H2>Application Protocol</H2>
      
      <div className="space-y-6">
        <BodyText>
          The application process operates on a structured timeline with specific 
          response protocols. Candidates must follow the prescribed sequence and 
          meet all deadlines for consideration.
        </BodyText>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <H3 className="font-mono">APPLICATION TIMELINE</H3>
            <div className="pl-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <BodyText><strong>Application Submission:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><BodyText className="text-sm">Submit complete application</BodyText></li>
                    <li><BodyText className="text-sm">Response within 5 business days</BodyText></li>
                    <li><BodyText className="text-sm">Screening invitation or rejection</BodyText></li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <BodyText><strong>Screening Assessment:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><BodyText className="text-sm">Schedule within 10 business days</BodyText></li>
                    <li><BodyText className="text-sm">Complete 3-hour assessment</BodyText></li>
                    <li><BodyText className="text-sm">Results within 3 business days</BodyText></li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <BodyText><strong>Technical Interview:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><BodyText className="text-sm">Schedule within 7 business days</BodyText></li>
                    <li><BodyText className="text-sm">90-minute interview session</BodyText></li>
                    <li><BodyText className="text-sm">Feedback within 2 business days</BodyText></li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <BodyText><strong>Admission Decision:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><BodyText className="text-sm">Final decision within 7 business days</BodyText></li>
                    <li><BodyText className="text-sm">Written notification with details</BodyText></li>
                    <li><BodyText className="text-sm">Program placement or waitlist status</BodyText></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <H3 className="font-mono">RESPONSE PROTOCOLS</H3>
            <div className="pl-6 space-y-4">
              <ul className="list-disc pl-6 space-y-3">
                <li><BodyText>All communications conducted via email with documented timestamps</BodyText></li>
                <li><BodyText>Candidates must respond to scheduling requests within 48 hours</BodyText></li>
                <li><BodyText>Missed deadlines or non-responses result in automatic rejection</BodyText></li>
                <li><BodyText>No extensions or special accommodations for timeline requirements</BodyText></li>
                <li><BodyText>Questions directed to admissions@hilabs.in with 24-hour response commitment</BodyText></li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <H3 className="font-mono">ADMISSION CONFIRMATION</H3>
            <div className="pl-6 space-y-4">
              <BodyText>
                Admitted candidates receive written confirmation with program details, 
                start date, and pre-program requirements. Confirmation must be returned 
                within 72 hours to secure program placement.
              </BodyText>
              
              <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                <BodyText className="font-mono text-sm">
                  CONFIRMATION REQUIREMENTS: Signed commitment agreement, financial verification, 
                  relocation timeline, emergency contact information, medical clearance documentation.
                </BodyText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
