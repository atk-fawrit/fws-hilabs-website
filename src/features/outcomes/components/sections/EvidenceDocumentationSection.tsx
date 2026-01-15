import { H2, H3, BodyText } from '@/src/shared/components/typography';

export function EvidenceDocumentationSection() {
  return (
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
  );
}
