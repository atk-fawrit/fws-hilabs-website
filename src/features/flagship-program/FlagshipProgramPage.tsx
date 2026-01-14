import { Metadata } from 'next';
import { H1, H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { SectionDivider, CTAButton } from '@/src/shared/components/content';
import { TermSection } from './components';

export const metadata: Metadata = {
  title: 'Flagship Program - HI Labs',
  description: '12-month engineering talent production system with enforced evaluation gates and supervised deployment phases.',
  alternates: {
    canonical: '/flagship-program/',
  },
};

export default function FlagshipProgramPage() {
  return (
    <div className="container-institutional">
      <H1>Flagship Program</H1>
      
      {/* Program Definition Section */}
      <section className="space-y-8">
        <H2>Program Specification</H2>
        
        <div className="space-y-6">
          <BodyText>
            The HI Labs Flagship Program is a 12-month engineering talent production system 
            operating under enforced evaluation and supervised deployment protocols. This 
            specification defines program structure, constraints, and elimination criteria.
          </BodyText>
          
          <div className="bg-gray-50 border-l-4 border-warning p-6 space-y-4">
            <H3 className="text-warning font-mono">EXPLICIT EXCLUSIONS</H3>
            <div className="space-y-3 font-mono text-sm">
              <BodyText className="font-mono">• NOT available online or in hybrid format</BodyText>
              <BodyText className="font-mono">• NOT compatible with parallel employment</BodyText>
              <BodyText className="font-mono">• NOT certificate-driven or credential-focused</BodyText>
              <BodyText className="font-mono">• NO placement guarantees or outcome promises</BodyText>
              <BodyText className="font-mono">• NO refunds after program commencement</BodyText>
            </div>
          </div>
          
          <BodyText>
            Candidates must commit to full-time, in-person participation for the complete 
            12-month duration. The program operates as a selection and elimination system, 
            not a traditional educational service.
          </BodyText>
        </div>
      </section>

      <SectionDivider />

      {/* Phase I Term Breakdown */}
      <section className="space-y-8">
        <H2>Phase I: Foundation Terms (Months 1-9)</H2>
        
        <div className="space-y-12">
          {/* Term 1 */}
          <div className="space-y-4">
            <H3 className="font-mono">01. TERM ONE: Systems Fundamentals</H3>
            <div className="pl-6 space-y-4">
              <BodyText>
                <strong>Duration:</strong> 3 months | <strong>Elimination Gate:</strong> Month 3
              </BodyText>
              
              <div className="space-y-3">
                <BodyText><strong>Core Constraints:</strong></BodyText>
                <ul className="list-disc pl-6 space-y-2">
                  <li><BodyText>Daily attendance mandatory 0800-1800 hours</BodyText></li>
                  <li><BodyText>Weekly evaluation protocols with documented performance</BodyText></li>
                  <li><BodyText>No external commitments permitted during program hours</BodyText></li>
                  <li><BodyText>Minimum 80% evaluation threshold for continuation</BodyText></li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                <BodyText className="font-mono text-sm">
                  ELIMINATION CRITERIA: Failure to meet evaluation threshold, attendance violations, 
                  or inability to demonstrate foundational competency results in immediate program termination.
                </BodyText>
              </div>
            </div>
          </div>

          {/* Term 2 */}
          <div className="space-y-4">
            <H3 className="font-mono">02. TERM TWO: Applied Engineering</H3>
            <div className="pl-6 space-y-4">
              <BodyText>
                <strong>Duration:</strong> 3 months | <strong>Elimination Gate:</strong> Month 6
              </BodyText>
              
              <div className="space-y-3">
                <BodyText><strong>Core Constraints:</strong></BodyText>
                <ul className="list-disc pl-6 space-y-2">
                  <li><BodyText>Project-based evaluation with measurable deliverables</BodyText></li>
                  <li><BodyText>Peer collaboration requirements with individual accountability</BodyText></li>
                  <li><BodyText>Technical documentation and presentation obligations</BodyText></li>
                  <li><BodyText>Minimum 85% evaluation threshold for continuation</BodyText></li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                <BodyText className="font-mono text-sm">
                  ELIMINATION CRITERIA: Inability to complete projects to specification, failure to 
                  collaborate effectively, or falling below evaluation threshold results in termination.
                </BodyText>
              </div>
            </div>
          </div>

          {/* Term 3 */}
          <div className="space-y-4">
            <H3 className="font-mono">03. TERM THREE: Production Systems</H3>
            <div className="pl-6 space-y-4">
              <BodyText>
                <strong>Duration:</strong> 3 months | <strong>Elimination Gate:</strong> Month 9
              </BodyText>
              
              <div className="space-y-3">
                <BodyText><strong>Core Constraints:</strong></BodyText>
                <ul className="list-disc pl-6 space-y-2">
                  <li><BodyText>Real-world system development under supervision</BodyText></li>
                  <li><BodyText>Client interaction and requirement management</BodyText></li>
                  <li><BodyText>Code review and quality assurance protocols</BodyText></li>
                  <li><BodyText>Minimum 90% evaluation threshold for Phase II eligibility</BodyText></li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                <BodyText className="font-mono text-sm">
                  ELIMINATION CRITERIA: Failure to meet production standards, inability to work with 
                  clients, or falling below evaluation threshold prevents Phase II advancement.
                </BodyText>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Phase II Supervised Deployment */}
      <section className="space-y-8">
        <H2>Phase II: Supervised Deployment (Months 10-12)</H2>
        
        <div className="space-y-6">
          <BodyText>
            Phase II operates as supervised deployment within partner organizations or client projects. 
            Participants work as junior engineers under direct supervision while maintaining 
            accountability to HI Labs evaluation protocols.
          </BodyText>
          
          <div className="space-y-6">
            <H3 className="font-mono">SUPERVISION MODEL</H3>
            <div className="pl-6 space-y-4">
              <ul className="list-disc pl-6 space-y-3">
                <li><BodyText>Daily supervision by designated technical lead at deployment site</BodyText></li>
                <li><BodyText>Weekly evaluation reports submitted to HI Labs oversight</BodyText></li>
                <li><BodyText>Bi-weekly review sessions with HI Labs instructional staff</BodyText></li>
                <li><BodyText>Monthly performance assessment with elimination review</BodyText></li>
              </ul>
            </div>
            
            <H3 className="font-mono">DEPLOYMENT CONSTRAINTS</H3>
            <div className="pl-6 space-y-4">
              <ul className="list-disc pl-6 space-y-3">
                <li><BodyText>Minimum 40 hours per week at deployment site</BodyText></li>
                <li><BodyText>Adherence to partner organization protocols and standards</BodyText></li>
                <li><BodyText>Completion of assigned projects within specified timelines</BodyText></li>
                <li><BodyText>Professional conduct and communication standards</BodyText></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Evaluation and Elimination System */}
      <section className="space-y-8">
        <H2>Evaluation and Elimination System</H2>
        
        <div className="space-y-6">
          <BodyText>
            The program operates continuous evaluation with documented elimination criteria. 
            All participants are subject to performance-based elimination at any stage.
          </BodyText>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <H3 className="font-mono">EVALUATION PROTOCOLS</H3>
              <div className="pl-6 space-y-4">
                <ul className="list-disc pl-6 space-y-3">
                  <li><BodyText>Weekly technical assessments with documented scoring</BodyText></li>
                  <li><BodyText>Monthly comprehensive reviews with elimination consideration</BodyText></li>
                  <li><BodyText>Peer evaluation components with individual accountability</BodyText></li>
                  <li><BodyText>Project deliverable assessment against industry standards</BodyText></li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <H3 className="font-mono">ELIMINATION TRIGGERS</H3>
              <div className="pl-6 space-y-4">
                <div className="bg-warning/10 border-l-4 border-warning p-4 space-y-3">
                  <ul className="list-disc pl-6 space-y-2 font-mono text-sm">
                    <li><BodyText className="font-mono">Performance below minimum threshold for two consecutive evaluations</BodyText></li>
                    <li><BodyText className="font-mono">Attendance violations or failure to meet time commitments</BodyText></li>
                    <li><BodyText className="font-mono">Inability to collaborate effectively in team environments</BodyText></li>
                    <li><BodyText className="font-mono">Failure to complete required projects within specified timelines</BodyText></li>
                    <li><BodyText className="font-mono">Violation of professional conduct standards</BodyText></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <H3 className="font-mono">ELIMINATION PROCESS</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  Elimination decisions are made by instructional committee review. Participants 
                  receive written notification with specific performance deficiencies. No appeals 
                  process is available. Eliminated participants forfeit all program benefits and 
                  are not eligible for re-admission.
                </BodyText>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Application CTA */}
      <section className="space-y-8">
        <H2>Application Process</H2>
        
        <div className="space-y-6">
          <BodyText>
            Candidates who understand and accept these constraints may proceed to the 
            admissions selection process. The application requires demonstration of 
            technical aptitude and commitment to the full 12-month program.
          </BodyText>
          
          <div className="pt-4">
            <CTAButton variant="primary" href="/admissions">
              Begin Admissions Process
            </CTAButton>
          </div>
        </div>
      </section>
    </div>
  );
}