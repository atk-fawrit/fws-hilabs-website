import { Metadata } from 'next';
import { H1, H2, H3 } from '@/components/typography';
import { BodyText } from '@/components/typography';
import { SectionDivider, CTAButton } from '@/components/content';

export const metadata: Metadata = {
  title: 'Admissions - HI Labs',
  description: 'Transparent selection system for the HI Labs engineering talent production program with clear eligibility criteria and evaluation stages.',
  alternates: {
    canonical: '/admissions/',
  },
};

export default function AdmissionsPage() {
  return (
    <div className="container-institutional">
      <H1>Admissions</H1>
      
      {/* Admissions Philosophy Section */}
      <section className="space-y-8">
        <H2>Selection System</H2>
        
        <div className="space-y-6">
          <BodyText>
            HI Labs admissions operates as a selection system, not a sales funnel. The process 
            identifies candidates capable of completing the 12-month engineering production 
            system under enforced evaluation and supervised deployment protocols.
          </BodyText>
          
          <div className="bg-gray-50 border-l-4 border-accent p-6 space-y-4">
            <H3 className="text-accent font-mono">SELECTION CRITERIA</H3>
            <BodyText className="font-mono text-sm">
              This is a filtering mechanism designed to identify serious candidates who 
              understand the commitment and constraints of the program. We select for 
              aptitude, commitment, and alignment with institutional expectations.
            </BodyText>
          </div>
          
          <BodyText>
            The admissions process evaluates technical aptitude, commitment capacity, and 
            understanding of program constraints. Candidates must demonstrate readiness 
            for full-time, in-person participation and acceptance of elimination-based evaluation.
          </BodyText>
        </div>
      </section>

      <SectionDivider />

      {/* Eligibility Criteria Section */}
      <section className="space-y-8">
        <H2>Eligibility Requirements</H2>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <H3 className="font-mono">ELIGIBILITY CRITERIA</H3>
            <div className="pl-6 space-y-4">
              <ul className="list-disc pl-6 space-y-3">
                <li><BodyText>Age 18-28 at program commencement</BodyText></li>
                <li><BodyText>Bachelor's degree in any discipline or equivalent demonstrated competency</BodyText></li>
                <li><BodyText>Basic programming exposure (any language, any level)</BodyText></li>
                <li><BodyText>English proficiency sufficient for technical communication</BodyText></li>
                <li><BodyText>Ability to commit full-time for 12 consecutive months</BodyText></li>
                <li><BodyText>Physical presence in Lucknow for program duration</BodyText></li>
                <li><BodyText>Financial capacity to support living expenses during program</BodyText></li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-4">
            <H3 className="font-mono">NON-ELIGIBILITY CONDITIONS</H3>
            <div className="pl-6 space-y-4">
              <div className="bg-warning/10 border-l-4 border-warning p-4 space-y-3">
                <ul className="list-disc pl-6 space-y-2 font-mono text-sm">
                  <li><BodyText className="font-mono">Current employment obligations that cannot be terminated</BodyText></li>
                  <li><BodyText className="font-mono">Family or personal commitments requiring regular absence</BodyText></li>
                  <li><BodyText className="font-mono">Expectation of placement guarantees or outcome promises</BodyText></li>
                  <li><BodyText className="font-mono">Inability to relocate to Lucknow for program duration</BodyText></li>
                  <li><BodyText className="font-mono">Seeking certification or credential-focused training</BodyText></li>
                  <li><BodyText className="font-mono">Preference for online, hybrid, or part-time formats</BodyText></li>
                  <li><BodyText className="font-mono">Unwillingness to accept elimination-based evaluation</BodyText></li>
                </ul>
              </div>
            </div>
          </div>
          
          <BodyText>
            Candidates with non-eligibility conditions will not be considered for admission. 
            The program requires complete commitment and alignment with institutional protocols.
          </BodyText>
        </div>
      </section>

      <SectionDivider />

      {/* Selection Stages Section */}
      <section className="space-y-8">
        <H2>Selection Process</H2>
        
        <div className="space-y-8">
          <BodyText>
            The selection process consists of four transparent stages designed to evaluate 
            technical aptitude, commitment capacity, and program alignment. Each stage 
            eliminates candidates who do not meet the requirements for advancement.
          </BodyText>
          
          <div className="space-y-12">
            {/* Stage 1 */}
            <div className="space-y-4">
              <H3 className="font-mono">01. APPLICATION SUBMISSION</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  <strong>Duration:</strong> Rolling basis | <strong>Response Time:</strong> 5 business days
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Required Components:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Completed application form with eligibility verification</BodyText></li>
                    <li><BodyText>Technical background summary (education, experience, projects)</BodyText></li>
                    <li><BodyText>Commitment statement acknowledging program constraints</BodyText></li>
                    <li><BodyText>Timeline confirmation for 12-month availability</BodyText></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                  <BodyText className="font-mono text-sm">
                    EVALUATION SIGNALS: Completeness of application, clarity of technical background, 
                    understanding of program constraints, realistic timeline assessment.
                  </BodyText>
                </div>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="space-y-4">
              <H3 className="font-mono">02. SCREENING ASSESSMENT</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  <strong>Duration:</strong> 3 hours | <strong>Format:</strong> Online proctored
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Assessment Components:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Logical reasoning and problem-solving evaluation</BodyText></li>
                    <li><BodyText>Basic programming concepts and syntax comprehension</BodyText></li>
                    <li><BodyText>Technical communication through written responses</BodyText></li>
                    <li><BodyText>System thinking and analytical approach demonstration</BodyText></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                  <BodyText className="font-mono text-sm">
                    EVALUATION SIGNALS: Problem-solving approach, technical reasoning clarity, 
                    communication precision, learning aptitude indicators.
                  </BodyText>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="space-y-4">
              <H3 className="font-mono">03. TECHNICAL INTERVIEW</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  <strong>Duration:</strong> 90 minutes | <strong>Format:</strong> In-person or video
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Interview Structure:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Technical background discussion and verification</BodyText></li>
                    <li><BodyText>Live problem-solving with thinking process evaluation</BodyText></li>
                    <li><BodyText>Program expectations and constraint acknowledgment</BodyText></li>
                    <li><BodyText>Commitment verification and timeline confirmation</BodyText></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                  <BodyText className="font-mono text-sm">
                    EVALUATION SIGNALS: Technical reasoning quality, learning approach, 
                    communication effectiveness, commitment authenticity, program alignment.
                  </BodyText>
                </div>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="space-y-4">
              <H3 className="font-mono">04. ADMISSION DECISION</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  <strong>Timeline:</strong> 7 business days post-interview | <strong>Notification:</strong> Written
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Decision Factors:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Cumulative evaluation across all selection stages</BodyText></li>
                    <li><BodyText>Technical aptitude and learning capacity assessment</BodyText></li>
                    <li><BodyText>Commitment verification and constraint acceptance</BodyText></li>
                    <li><BodyText>Cohort composition and program capacity considerations</BodyText></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                  <BodyText className="font-mono text-sm">
                    DECISION OUTCOMES: Admission with program placement, waitlist for future cohorts, 
                    or rejection with specific feedback on deficiencies.
                  </BodyText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Commitment and Risk Disclosure Section */}
      <section className="space-y-8">
        <H2>Commitment and Risk Disclosure</H2>
        
        <div className="space-y-6">
          <BodyText>
            Admission to HI Labs requires understanding and acceptance of significant 
            commitments and risks. Candidates must acknowledge these conditions before 
            program commencement.
          </BodyText>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <H3 className="font-mono">COMMITMENT REQUIREMENTS</H3>
              <div className="pl-6 space-y-4">
                <div className="bg-accent/10 border-l-4 border-accent p-4 space-y-3">
                  <ul className="list-disc pl-6 space-y-2 font-mono text-sm">
                    <li><BodyText className="font-mono">Full-time participation for 12 consecutive months</BodyText></li>
                    <li><BodyText className="font-mono">Daily attendance 0800-1800 hours, Monday through Friday</BodyText></li>
                    <li><BodyText className="font-mono">Relocation to Lucknow for program duration</BodyText></li>
                    <li><BodyText className="font-mono">Termination of conflicting employment or commitments</BodyText></li>
                    <li><BodyText className="font-mono">Acceptance of elimination-based evaluation system</BodyText></li>
                    <li><BodyText className="font-mono">Compliance with institutional protocols and standards</BodyText></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <H3 className="font-mono">RISK ACKNOWLEDGMENT</H3>
              <div className="pl-6 space-y-4">
                <div className="bg-warning/10 border-l-4 border-warning p-4 space-y-3">
                  <ul className="list-disc pl-6 space-y-2 font-mono text-sm">
                    <li><BodyText className="font-mono">No guarantee of program completion or employment outcomes</BodyText></li>
                    <li><BodyText className="font-mono">Elimination possible at any stage based on performance</BodyText></li>
                    <li><BodyText className="font-mono">No refunds after program commencement</BodyText></li>
                    <li><BodyText className="font-mono">Financial responsibility for living expenses during program</BodyText></li>
                    <li><BodyText className="font-mono">Career opportunity cost during 12-month commitment</BodyText></li>
                    <li><BodyText className="font-mono">No appeals process for elimination decisions</BodyText></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <BodyText>
              Candidates who cannot accept these commitments and risks should not proceed 
              with the application process. The program is designed for individuals who 
              understand and embrace these constraints as necessary for effective talent production.
            </BodyText>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Application Protocol Section */}
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

      <SectionDivider />

      {/* Application CTA */}
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
    </div>
  );
}