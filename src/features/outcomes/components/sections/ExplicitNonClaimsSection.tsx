import { H2, H3, BodyText } from '@/src/shared/components/typography';

export function ExplicitNonClaimsSection() {
  return (
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
  );
}
