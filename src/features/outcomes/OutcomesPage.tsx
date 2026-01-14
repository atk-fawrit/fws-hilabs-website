import { Metadata } from 'next';
import { H1, H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { SectionDivider, CTAButton } from '@/src/shared/components/content';
import { EvidenceCategory } from './components';

export const metadata: Metadata = {
  title: 'Outcomes & Evidence - HI Labs',
  description: 'Documented evidence of program effectiveness through evaluation rubrics, performance summaries, and deployment feedback.',
  alternates: {
    canonical: '/outcomes/',
  },
};

export default function OutcomesPage() {
  return (
    <div className="container-institutional">
      <H1>Outcomes</H1>
      
      {/* Outcomes Definition Section */}
      <section className="space-y-8">
        <H2>Evidence Documentation</H2>
        
        <div className="space-y-6">
          <div className="bg-accent/10 border-l-4 border-accent p-6 space-y-4">
            <H3 className="text-accent font-mono">OUTCOMES AS EVIDENCE</H3>
            <BodyText className="font-mono text-sm">
              HI Labs outcomes are documented evidence of program effectiveness, not 
              marketing metrics or promotional claims. Evidence is collected systematically 
              and published transparently to enable informed evaluation by stakeholders.
            </BodyText>
          </div>
          
          <BodyText>
            Outcomes documentation serves employers, candidates, and institutional 
            stakeholders who require verifiable evidence of program effectiveness. 
            This evidence-based approach replaces traditional marketing metrics with 
            systematic documentation of participant progress and deployment results.
          </BodyText>
          
          <BodyText>
            Evidence collection operates continuously throughout program delivery and 
            deployment phases. Documentation focuses on measurable competency development, 
            performance indicators, and deployment effectiveness rather than subjective 
            testimonials or promotional content.
          </BodyText>
        </div>
      </section>

      <SectionDivider />

      {/* Evidence Types Section */}
      <section className="space-y-8">
        <H2>Evidence Categories</H2>
        
        <div className="space-y-6">
          <BodyText>
            Evidence documentation encompasses four primary categories that provide 
            comprehensive assessment of program effectiveness and participant development. 
            Each category serves specific stakeholder information requirements.
          </BodyText>
          
          <div className="space-y-12">
            {/* Evaluation Rubrics */}
            <div className="space-y-4">
              <H3 className="font-mono">01. EVALUATION RUBRICS</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  Systematic assessment frameworks used throughout program delivery to 
                  measure participant competency development and performance progression.
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Documentation Components:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Technical competency assessment criteria and scoring methodologies</BodyText></li>
                    <li><BodyText>Performance progression tracking across program phases</BodyText></li>
                    <li><BodyText>Elimination criteria and threshold documentation</BodyText></li>
                    <li><BodyText>Comparative analysis of cohort performance distributions</BodyText></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                  <BodyText className="font-mono text-sm">
                    EVIDENCE VALUE: Provides systematic measurement of competency development 
                    and enables comparison across cohorts and time periods for program 
                    effectiveness assessment.
                  </BodyText>
                </div>
              </div>
            </div>

            {/* Performance Summaries */}
            <div className="space-y-4">
              <H3 className="font-mono">02. PERFORMANCE SUMMARIES</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  Aggregated performance data documenting participant achievement levels, 
                  completion rates, and competency attainment across program components.
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Documentation Components:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Cohort completion rates and elimination stage analysis</BodyText></li>
                    <li><BodyText>Competency achievement distributions by skill domain</BodyText></li>
                    <li><BodyText>Performance trajectory analysis throughout program phases</BodyText></li>
                    <li><BodyText>Comparative effectiveness across different program iterations</BodyText></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                  <BodyText className="font-mono text-sm">
                    EVIDENCE VALUE: Demonstrates program effectiveness in developing 
                    technical competencies and provides data for continuous program 
                    improvement and stakeholder assessment.
                  </BodyText>
                </div>
              </div>
            </div>

            {/* Project Artifacts */}
            <div className="space-y-4">
              <H3 className="font-mono">03. PROJECT ARTIFACTS</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  Tangible outputs produced by participants during program delivery, 
                  demonstrating practical application of developed competencies and 
                  real-world problem-solving capabilities.
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Documentation Components:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Code repositories and technical implementations with complexity analysis</BodyText></li>
                    <li><BodyText>System design documentation and architectural decisions</BodyText></li>
                    <li><BodyText>Problem-solving approaches and solution methodologies</BodyText></li>
                    <li><BodyText>Collaborative work products and team contribution evidence</BodyText></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                  <BodyText className="font-mono text-sm">
                    EVIDENCE VALUE: Provides concrete demonstration of participant 
                    capabilities and enables technical assessment by potential employers 
                    and industry stakeholders.
                  </BodyText>
                </div>
              </div>
            </div>

            {/* Deployment Feedback */}
            <div className="space-y-4">
              <H3 className="font-mono">04. DEPLOYMENT FEEDBACK</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  Systematic feedback from employer partners during supervised deployment 
                  phases, documenting participant performance in real work environments 
                  and deployment effectiveness.
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Documentation Components:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Employer assessment of participant technical competency and work readiness</BodyText></li>
                    <li><BodyText>Deployment integration success rates and adaptation timelines</BodyText></li>
                    <li><BodyText>Supervision requirements and support intervention documentation</BodyText></li>
                    <li><BodyText>Long-term performance tracking and retention analysis</BodyText></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                  <BodyText className="font-mono text-sm">
                    EVIDENCE VALUE: Validates program effectiveness in producing 
                    deployment-ready engineers and provides feedback for program 
                    refinement and employer partnership development.
                  </BodyText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Non-Claims Section */}
      <section className="space-y-8">
        <H2>Explicit Non-Claims</H2>
        
        <div className="space-y-6">
          <BodyText>
            HI Labs explicitly does not claim or guarantee specific outcomes that 
            are commonly promoted by educational institutions and training programs. 
            These non-claims are stated clearly to prevent misunderstanding and 
            ensure accurate stakeholder expectations.
          </BodyText>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <H3 className="font-mono">PLACEMENT PERCENTAGES</H3>
              <div className="pl-6 space-y-4">
                <div className="bg-warning/10 border-l-4 border-warning p-4 space-y-3">
                  <BodyText className="font-mono text-sm">
                    HI Labs does not track, calculate, or publish placement percentages. 
                    The program does not guarantee employment outcomes or maintain 
                    placement statistics for marketing purposes.
                  </BodyText>
                </div>
                
                <BodyText>
                  Deployment arrangements are made through employer partnerships based 
                  on specific organizational needs and participant competency alignment. 
                  These arrangements are not tracked as placement metrics or success rates.
                </BodyText>
              </div>
            </div>
            
            <div className="space-y-4">
              <H3 className="font-mono">SALARY OUTCOMES</H3>
              <div className="pl-6 space-y-4">
                <div className="bg-warning/10 border-l-4 border-warning p-4 space-y-3">
                  <BodyText className="font-mono text-sm">
                    HI Labs does not collect, analyze, or publish salary information 
                    for program participants. No claims are made regarding earning 
                    potential or compensation improvements.
                  </BodyText>
                </div>
                
                <BodyText>
                  Compensation arrangements are determined by employer partners based 
                  on organizational policies, market conditions, and individual 
                  performance. These arrangements are outside HI Labs' scope and control.
                </BodyText>
              </div>
            </div>
            
            <div className="space-y-4">
              <H3 className="font-mono">SUCCESS STORIES</H3>
              <div className="pl-6 space-y-4">
                <div className="bg-warning/10 border-l-4 border-warning p-4 space-y-3">
                  <BodyText className="font-mono text-sm">
                    HI Labs does not publish testimonials, success stories, or 
                    promotional narratives about individual participants or their 
                    career outcomes following program completion.
                  </BodyText>
                </div>
                
                <BodyText>
                  Individual participant experiences vary based on numerous factors 
                  outside program control. Promotional narratives do not provide 
                  reliable indicators of program effectiveness or individual outcomes.
                </BodyText>
              </div>
            </div>
            
            <div className="space-y-4">
              <H3 className="font-mono">CAREER TRANSFORMATION GUARANTEES</H3>
              <div className="pl-6 space-y-4">
                <div className="bg-warning/10 border-l-4 border-warning p-4 space-y-3">
                  <BodyText className="font-mono text-sm">
                    HI Labs does not guarantee career transformation, professional 
                    advancement, or specific employment outcomes for any participant 
                    regardless of program completion status.
                  </BodyText>
                </div>
                
                <BodyText>
                  The program provides systematic engineering competency development 
                  under controlled conditions. Career outcomes depend on individual 
                  performance, market conditions, and factors beyond program scope.
                </BodyText>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Publication Cadence Section */}
      <section className="space-y-8">
        <H2>Evidence Publication Schedule</H2>
        
        <div className="space-y-6">
          <BodyText>
            Evidence documentation is published according to a structured schedule 
            that ensures systematic data collection while maintaining participant 
            privacy and institutional operational requirements.
          </BodyText>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <H3 className="font-mono">QUARTERLY PUBLICATIONS</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  <strong>Schedule:</strong> January, April, July, October | <strong>Content:</strong> Aggregated performance data
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Publication Components:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Cohort performance summaries with competency achievement distributions</BodyText></li>
                    <li><BodyText>Program completion rates and elimination stage analysis</BodyText></li>
                    <li><BodyText>Evaluation rubric effectiveness assessment and refinements</BodyText></li>
                    <li><BodyText>Deployment feedback aggregation and trend analysis</BodyText></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                  <BodyText className="font-mono text-sm">
                    DATA SCOPE: Quarterly publications include data from completed 
                    program phases and deployment periods with sufficient time for 
                    comprehensive analysis and verification.
                  </BodyText>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <H3 className="font-mono">ANNUAL COMPREHENSIVE REPORTS</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  <strong>Schedule:</strong> December | <strong>Content:</strong> Complete program effectiveness analysis
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Report Components:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Year-over-year program effectiveness comparison and trend analysis</BodyText></li>
                    <li><BodyText>Comprehensive project artifact portfolio with technical complexity assessment</BodyText></li>
                    <li><BodyText>Employer feedback synthesis and deployment model effectiveness</BodyText></li>
                    <li><BodyText>Program refinement documentation and methodology improvements</BodyText></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                  <BodyText className="font-mono text-sm">
                    ANALYSIS DEPTH: Annual reports provide comprehensive assessment 
                    of program effectiveness with sufficient data volume for 
                    statistical significance and trend identification.
                  </BodyText>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <H3 className="font-mono">AD HOC METHODOLOGY UPDATES</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  <strong>Schedule:</strong> As required | <strong>Content:</strong> Evaluation methodology changes
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Update Components:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Evaluation rubric modifications with rationale and impact analysis</BodyText></li>
                    <li><BodyText>Evidence collection methodology improvements and validation</BodyText></li>
                    <li><BodyText>Data analysis framework updates and statistical methodology changes</BodyText></li>
                    <li><BodyText>Publication format modifications and stakeholder feedback integration</BodyText></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                  <BodyText className="font-mono text-sm">
                    TRANSPARENCY COMMITMENT: All methodology changes are documented 
                    and published to maintain evidence integrity and enable 
                    stakeholder assessment of data reliability.
                  </BodyText>
                </div>
              </div>
            </div>
          </div>
          
          <BodyText>
            Publication schedules are maintained consistently to enable stakeholder 
            planning and assessment. Evidence is published in formats accessible 
            to employers, candidates, and institutional stakeholders without 
            promotional interpretation or marketing enhancement.
          </BodyText>
        </div>
      </section>

      <SectionDivider />

      {/* Employer Access Section */}
      <section className="space-y-8">
        <H2>Employer Evidence Access</H2>
        
        <div className="space-y-6">
          <BodyText>
            Comprehensive evidence documentation is available to employer partners 
            and organizations evaluating HI Labs as a talent pipeline. Access 
            provides detailed assessment data for informed deployment decisions 
            and partnership evaluation.
          </BodyText>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <H3 className="font-mono">DEPLOYMENT FRAMEWORK ACCESS</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  Employer partners receive access to the complete deployment framework 
                  including participant assessment data, competency documentation, 
                  and supervision protocols for informed deployment planning.
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Framework Components:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Individual participant competency profiles with detailed assessment data</BodyText></li>
                    <li><BodyText>Project portfolio access with technical complexity analysis</BodyText></li>
                    <li><BodyText>Deployment model documentation and supervision requirements</BodyText></li>
                    <li><BodyText>Performance tracking protocols and feedback mechanisms</BodyText></li>
                  </ul>
                </div>
                
                <div className="bg-accent/10 border-l-4 border-accent p-4 space-y-3">
                  <BodyText className="font-mono text-sm">
                    EMPLOYER BENEFIT: Complete transparency in participant capabilities 
                    and deployment requirements enables informed decision-making and 
                    effective integration planning.
                  </BodyText>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <H3 className="font-mono">EVIDENCE VERIFICATION</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  All evidence documentation includes verification protocols and 
                  methodology transparency to enable employer assessment of data 
                  reliability and relevance to organizational requirements.
                </BodyText>
                
                <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                  <BodyText className="font-mono text-sm">
                    VERIFICATION STANDARDS: Evidence collection methodologies, 
                    assessment criteria, and data analysis frameworks are fully 
                    documented and available for employer review and validation.
                  </BodyText>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <CTAButton variant="primary" href="/employers">
              Access Deployment Framework
            </CTAButton>
          </div>
          
          <BodyText className="text-sm text-secondary">
            Deployment framework access is restricted to verified employer partners 
            and organizations with documented talent acquisition requirements. 
            Access includes comprehensive evidence documentation and deployment protocols.
          </BodyText>
        </div>
      </section>
    </div>
  );
}