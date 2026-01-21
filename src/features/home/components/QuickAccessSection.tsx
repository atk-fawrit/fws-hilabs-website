import { H3, BodyText } from '@/src/shared/components/typography';
import { CTAButton } from '@/src/shared/components/content';

export function QuickAccessSection() {
  return (
    <section className="w-full">
      <div className="bg-white py-16 border-t border-secondary/10">
        <div className="px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="border-l-[3px] border-accent pl-7 group">
              <H3 className="text-primary mb-4 group-hover:text-accent transition-colors">Admissions</H3>
              <BodyText className="text-secondary mb-5 leading-relaxed">
                Transparent selection system with clearly defined criteria and evaluation frameworks.
              </BodyText>
              <CTAButton href="/admissions" variant="text">
                View requirements
              </CTAButton>
            </div>

            <div className="border-l-[3px] border-accent pl-7 group">
              <H3 className="text-primary mb-4 group-hover:text-accent transition-colors">Program Structure</H3>
              <BodyText className="text-secondary mb-5 leading-relaxed">
                Three training terms followed by supervised deployment in partner organizations.
              </BodyText>
              <CTAButton href="/flagship-program" variant="text">
                Learn more
              </CTAButton>
            </div>

            <div className="border-l-[3px] border-accent pl-7 group">
              <H3 className="text-primary mb-4 group-hover:text-accent transition-colors">Lucknow Lab</H3>
              <BodyText className="text-secondary mb-5 leading-relaxed">
                In-person engineering laboratory facility with structured training environment.
              </BodyText>
              <CTAButton href="/lucknow-lab" variant="text">
                Visit location
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
