import { H2, H3, BodyText } from '@/src/shared/components/typography';
import { CTAButton } from '@/src/shared/components/content';

export function EmployerAccessSection() {
  return (
    <section className="border-t border-primary/20 pt-16">
      <div className="max-w-4xl">
        <H2 className="text-3xl font-light text-primary mb-8">Employer Evidence Access</H2>
        <BodyText className="text-primary/80 leading-relaxed mb-8">
          Comprehensive evidence documentation is available to employer partners and organizations evaluating HI Labs 
          as a talent pipeline. Access provides detailed assessment data for informed deployment decisions and partnership evaluation.
        </BodyText>
        
        <div className="mb-8">
          <H3 className="text-xl font-light text-primary mb-4">Deployment Framework Access</H3>
          <BodyText className="text-primary/70 mb-4 text-sm leading-relaxed">
            Employer partners receive access to the complete deployment framework including participant assessment data, 
            competency documentation, and supervision protocols for informed deployment planning.
          </BodyText>
          
          <div className="text-sm uppercase tracking-wide text-primary/60 mb-3 font-medium">
            Framework Components
          </div>
          <ul className="space-y-2 mb-6 text-sm">
            <li className="text-primary/80 pl-4 border-l-2 border-accent">
              <BodyText className="text-sm">Individual participant competency profiles with detailed assessment data</BodyText>
            </li>
            <li className="text-primary/80 pl-4 border-l-2 border-accent">
              <BodyText className="text-sm">Project portfolio access with technical complexity analysis</BodyText>
            </li>
            <li className="text-primary/80 pl-4 border-l-2 border-accent">
              <BodyText className="text-sm">Deployment model documentation and supervision requirements</BodyText>
            </li>
            <li className="text-primary/80 pl-4 border-l-2 border-accent">
              <BodyText className="text-sm">Performance tracking protocols and feedback mechanisms</BodyText>
            </li>
          </ul>
          
          <div className="bg-accent/5 p-6 border-l-4 border-accent mb-8">
            <BodyText className="text-xs uppercase tracking-wide text-primary/60 mb-2 font-medium">
              Employer Benefit
            </BodyText>
            <BodyText className="text-primary/80 text-sm leading-relaxed">
              Complete transparency in participant capabilities and deployment requirements enables informed decision-making 
              and effective integration planning.
            </BodyText>
          </div>
        </div>
        
        <div className="mb-8">
          <H3 className="text-xl font-light text-primary mb-4">Evidence Verification</H3>
          <BodyText className="text-primary/70 mb-4 text-sm leading-relaxed">
            All evidence documentation includes verification protocols and methodology transparency to enable employer 
            assessment of data reliability and relevance to organizational requirements.
          </BodyText>
          
          <div className="bg-accent/5 p-6 border-l-4 border-accent mb-8">
            <BodyText className="text-xs uppercase tracking-wide text-primary/60 mb-2 font-medium">
              Verification Standards
            </BodyText>
            <BodyText className="text-primary/80 text-sm leading-relaxed">
              Evidence collection methodologies, assessment criteria, and data analysis frameworks are fully documented 
              and available for employer review and validation.
            </BodyText>
          </div>
        </div>
        
        <div className="mb-6">
          <CTAButton 
            variant="primary" 
            href="/employers"
          >
            Access Deployment Framework
          </CTAButton>
        </div>
        
        <BodyText className="text-sm text-primary/70">
          Deployment framework access is restricted to verified employer partners and organizations with documented talent acquisition requirements. 
          Access includes comprehensive evidence documentation and deployment protocols.
        </BodyText>
      </div>
    </section>
  );
}
