import { H2, H3, BodyText } from '@/src/shared/components/typography';

export function ExplicitNonClaimsSection() {
  return (
    <section className="mb-20">
      <div className="max-w-4xl mb-12">
        <H2 className="text-3xl font-light text-primary mb-4">Explicit Non-Claims</H2>
        <BodyText className="text-primary/80 leading-relaxed">
          HI Labs explicitly does not claim or guarantee specific outcomes that are commonly promoted by educational institutions 
          and training programs. These non-claims are stated clearly to prevent misunderstanding and ensure accurate stakeholder expectations.
        </BodyText>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
        <div className="border-l-2 border-accent pl-6">
          <H3 className="text-xl font-light text-primary mb-3">Placement Percentages</H3>
          <BodyText className="text-primary/70 text-sm leading-relaxed mb-4">
            HI Labs does not track, calculate, or publish placement percentages. The program does not guarantee employment outcomes 
            or maintain placement statistics for marketing purposes.
          </BodyText>
          <BodyText className="text-primary/60 text-xs leading-relaxed">
            Deployment arrangements are made through employer partnerships based on specific organizational needs and participant competency alignment. 
            These arrangements are not tracked as placement metrics or success rates.
          </BodyText>
        </div>
        
        <div className="border-l-2 border-accent pl-6">
          <H3 className="text-xl font-light text-primary mb-3">Salary Outcomes</H3>
          <BodyText className="text-primary/70 text-sm leading-relaxed mb-4">
            HI Labs does not collect, analyze, or publish salary information for program participants. No claims are made regarding 
            earning potential or compensation improvements.
          </BodyText>
          <BodyText className="text-primary/60 text-xs leading-relaxed">
            Compensation arrangements are determined by employer partners based on organizational policies, market conditions, and individual performance. 
            These arrangements are outside HI Labs&apos; scope and control.
          </BodyText>
        </div>
        
        <div className="border-l-2 border-accent pl-6">
          <H3 className="text-xl font-light text-primary mb-3">Success Stories</H3>
          <BodyText className="text-primary/70 text-sm leading-relaxed mb-4">
            HI Labs does not publish testimonials, success stories, or promotional narratives about individual participants 
            or their career outcomes following program completion.
          </BodyText>
          <BodyText className="text-primary/60 text-xs leading-relaxed">
            Individual participant experiences vary based on numerous factors outside program control. Promotional narratives do not provide 
            reliable indicators of program effectiveness or individual outcomes.
          </BodyText>
        </div>
        
        <div className="border-l-2 border-accent pl-6">
          <H3 className="text-xl font-light text-primary mb-3">Career Transformation Guarantees</H3>
          <BodyText className="text-primary/70 text-sm leading-relaxed mb-4">
            HI Labs does not guarantee career transformation, professional advancement, or specific employment outcomes 
            for any participant regardless of program completion status.
          </BodyText>
          <BodyText className="text-primary/60 text-xs leading-relaxed">
            The program provides systematic engineering competency development under controlled conditions. Career outcomes depend on individual 
            performance, market conditions, and factors beyond program scope.
          </BodyText>
        </div>
      </div>
    </section>
  );
}
