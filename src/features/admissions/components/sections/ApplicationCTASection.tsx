/**
 * Application CTA Section
 * 
 * Displays application checklist and CTA button
 */

import React from 'react';
import { H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { CTAButton } from '@/src/shared/components/content';

export const ApplicationCTASection: React.FC = () => {
  return (
    <section className="space-y-8">
      <H2>Begin Application Process</H2>
      
      <div className="space-y-6">
        <BodyText>
          Candidates who understand the program constraints, selection process, and 
          commitment requirements may proceed with the application. Ensure you meet 
          all eligibility criteria and can commit to the full timeline before beginning.
        </BodyText>
        
        <div className="bg-accent/10 border-l-4 border-accent p-6 space-y-4">
          <H3 className="text-accent font-mono">APPLICATION CHECKLIST</H3>
          <div className="space-y-2 font-mono text-sm">
            <BodyText className="font-mono">□ Verified eligibility against all criteria</BodyText>
            <BodyText className="font-mono">□ Confirmed 12-month availability and relocation capacity</BodyText>
            <BodyText className="font-mono">□ Acknowledged elimination-based evaluation system</BodyText>
            <BodyText className="font-mono">□ Accepted financial and career opportunity costs</BodyText>
            <BodyText className="font-mono">□ Understood no placement guarantees or refund policies</BodyText>
          </div>
        </div>
        
        <div className="pt-4">
          <CTAButton variant="primary" href="/apply" external>
            Submit Application
          </CTAButton>
        </div>
        
        <BodyText className="text-sm text-secondary">
          Application submission indicates acceptance of all program constraints and 
          selection protocols outlined above. Incomplete applications will not be processed.
        </BodyText>
      </div>
    </section>
  );
};
