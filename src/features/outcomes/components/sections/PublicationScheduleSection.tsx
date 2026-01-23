import { H2, H3, BodyText } from '@/src/shared/components/typography';

export function PublicationScheduleSection() {
  return (
    <section className="mb-20">
      <div className="max-w-4xl mb-12">
        <H2 className="text-3xl font-light text-primary mb-4">Evidence Publication Schedule</H2>
        <BodyText className="text-primary/80 leading-relaxed">
          Evidence documentation is published according to a structured schedule that ensures systematic data collection 
          while maintaining participant privacy and institutional operational requirements.
        </BodyText>
      </div>
      
      <div className="space-y-12 max-w-5xl">
        <div className="border-l-2 border-primary pl-8">
          <H3 className="text-2xl font-light text-primary mb-2">Quarterly Publications</H3>
          <BodyText className="text-sm text-primary/60 mb-6">January, April, July, October</BodyText>
          
          <div className="text-sm uppercase tracking-wide text-primary/60 mb-3 font-medium">
            Publication Components
          </div>
          <ul className="space-y-2 mb-6">
            <li><BodyText className="text-primary/80">Cohort performance summaries with competency achievement distributions</BodyText></li>
            <li><BodyText className="text-primary/80">Program completion rates and elimination stage analysis</BodyText></li>
            <li><BodyText className="text-primary/80">Evaluation rubric effectiveness assessment and refinements</BodyText></li>
            <li><BodyText className="text-primary/80">Deployment feedback aggregation and trend analysis</BodyText></li>
          </ul>
          
          <div className="bg-accent/5 p-6 border-l-4 border-accent">
            <BodyText className="text-xs uppercase tracking-wide text-primary/60 mb-2 font-medium">
              Data Scope
            </BodyText>
            <BodyText className="text-primary/80 text-sm leading-relaxed">
              Quarterly publications include data from completed program phases and deployment periods with sufficient time 
              for comprehensive analysis and verification.
            </BodyText>
          </div>
        </div>
        
        <div className="border-l-2 border-primary pl-8">
          <H3 className="text-2xl font-light text-primary mb-2">Annual Comprehensive Reports</H3>
          <BodyText className="text-sm text-primary/60 mb-6">December</BodyText>
          
          <div className="text-sm uppercase tracking-wide text-primary/60 mb-3 font-medium">
            Report Components
          </div>
          <ul className="space-y-2 mb-6">
            <li><BodyText className="text-primary/80">Year-over-year program effectiveness comparison and trend analysis</BodyText></li>
            <li><BodyText className="text-primary/80">Comprehensive project artifact portfolio with technical complexity assessment</BodyText></li>
            <li><BodyText className="text-primary/80">Employer feedback synthesis and deployment model effectiveness</BodyText></li>
            <li><BodyText className="text-primary/80">Program refinement documentation and methodology improvements</BodyText></li>
          </ul>
          
          <div className="bg-accent/5 p-6 border-l-4 border-accent">
            <BodyText className="text-xs uppercase tracking-wide text-primary/60 mb-2 font-medium">
              Analysis Depth
            </BodyText>
            <BodyText className="text-primary/80 text-sm leading-relaxed">
              Annual reports provide comprehensive assessment of program effectiveness with sufficient data volume 
              for statistical significance and trend identification.
            </BodyText>
          </div>
        </div>
        
        <div className="border-l-2 border-primary pl-8">
          <H3 className="text-2xl font-light text-primary mb-2">Ad Hoc Methodology Updates</H3>
          <BodyText className="text-sm text-primary/60 mb-6">As required</BodyText>
          
          <div className="text-sm uppercase tracking-wide text-primary/60 mb-3 font-medium">
            Update Components
          </div>
          <ul className="space-y-2 mb-6">
            <li><BodyText className="text-primary/80">Evaluation rubric modifications with rationale and impact analysis</BodyText></li>
            <li><BodyText className="text-primary/80">Evidence collection methodology improvements and validation</BodyText></li>
            <li><BodyText className="text-primary/80">Data analysis framework updates and statistical methodology changes</BodyText></li>
            <li><BodyText className="text-primary/80">Publication format modifications and stakeholder feedback integration</BodyText></li>
          </ul>
          
          <div className="bg-accent/5 p-6 border-l-4 border-accent">
            <BodyText className="text-xs uppercase tracking-wide text-primary/60 mb-2 font-medium">
              Transparency Commitment
            </BodyText>
            <BodyText className="text-primary/80 text-sm leading-relaxed">
              All methodology changes are documented and published to maintain evidence integrity and enable 
              stakeholder assessment of data reliability.
            </BodyText>
          </div>
        </div>
      </div>
      
      <div className="text-center max-w-4xl mx-auto mt-8">
        <BodyText className="text-primary/80">
          Publication schedules are maintained consistently to enable stakeholder planning and assessment. 
          Evidence is published in formats accessible to employers, candidates, and institutional stakeholders 
          without promotional interpretation or marketing enhancement.
        </BodyText>
      </div>
    </section>
  );
}
