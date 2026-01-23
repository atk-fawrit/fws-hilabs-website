import { H2, BodyText } from '@/src/shared/components/typography';

export function EvidenceDocumentationSection() {
  return (
    <section className="mb-20 max-w-4xl">
      <H2 className="text-3xl font-light text-primary mb-8">Evidence-Based Approach</H2>
      <div className="space-y-6 text-primary/80 leading-relaxed">
        <BodyText>
          Outcomes documentation serves employers, candidates, and institutional stakeholders who require verifiable evidence of program effectiveness. 
          This evidence-based approach replaces traditional marketing metrics with systematic documentation.
        </BodyText>
        <BodyText>
          Evidence collection operates continuously throughout program delivery and deployment phases. 
          Documentation focuses on measurable competency development, performance indicators, and deployment effectiveness rather than subjective testimonials.
        </BodyText>
      </div>
    </section>
  );
}
