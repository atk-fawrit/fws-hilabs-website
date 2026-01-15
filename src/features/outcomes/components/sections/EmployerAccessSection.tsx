import { H2, H3, BodyText } from '@/src/shared/components/typography';
import { CTAButton } from '@/src/shared/components/content';

export function EmployerAccessSection() {
  return (
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
  );
}
