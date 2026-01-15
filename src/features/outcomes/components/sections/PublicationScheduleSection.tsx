import { H2, H3, BodyText } from '@/src/shared/components/typography';

export function PublicationScheduleSection() {
  return (
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
  );
}
