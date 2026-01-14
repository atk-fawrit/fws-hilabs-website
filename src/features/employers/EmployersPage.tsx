import { Metadata } from 'next';
import { H1, H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { SectionDivider, CTAButton } from '@/src/shared/components/content';
import { DeploymentModel } from './components';

export const metadata: Metadata = {
  title: 'Employers - HI Labs',
  description: 'Partnership models and deployment options for organizations seeking engineering talent through structured supervision frameworks.',
  alternates: {
    canonical: '/employers/',
  },
};

export default function EmployersPage() {
  return (
    <div className="container-institutional">
      <H1>Employers</H1>
      
      {/* Procurement Document Introduction */}
      <section className="space-y-8">
        <H2>Talent Procurement Specification</H2>
        
        <div className="space-y-6">
          <div className="bg-accent/10 border-l-4 border-accent p-6 space-y-4">
            <H3 className="text-accent font-mono">PROCUREMENT DOCUMENT</H3>
            <BodyText className="font-mono text-sm">
              This document specifies HI Labs' talent supply capabilities, deployment 
              models, and partnership protocols for organizations evaluating engineering 
              talent procurement through systematic production rather than traditional 
              recruitment channels.
            </BodyText>
          </div>
          
          <BodyText>
            HI Labs operates as a talent production facility, not a recruitment agency 
            or placement service. Organizations engage with HI Labs to access systematically 
            developed engineering talent through structured deployment models with defined 
            supervision and risk allocation frameworks.
          </BodyText>
          
          <BodyText>
            This procurement specification replaces traditional hiring pitches with 
            systematic documentation of supply capabilities, deployment constraints, 
            and partnership requirements. Organizations use this specification to 
            evaluate HI Labs as a talent pipeline component within broader workforce 
            development strategies.
          </BodyText>
        </div>
      </section>

      <SectionDivider />

      {/* Supply Definition Section */}
      <section className="space-y-8">
        <H2>Supply Specification</H2>
        
        <div className="space-y-6">
          <BodyText>
            HI Labs supplies systematically developed junior engineers with documented 
            competencies and supervised deployment protocols. Supply specifications 
            define exactly what is provided and what remains outside the supply scope.
          </BodyText>
          
          <div className="space-y-12">
            {/* What HI Labs Supplies */}
            <div className="space-y-4">
              <H3 className="font-mono">SUPPLY COMPONENTS</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  HI Labs supplies junior engineers with systematically developed 
                  competencies, documented performance evidence, and structured 
                  deployment support within defined supervision frameworks.
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Supplied Components:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Junior engineers with 12-month systematic competency development</BodyText></li>
                    <li><BodyText>Documented technical competency profiles with assessment evidence</BodyText></li>
                    <li><BodyText>Project portfolio demonstrating practical application capabilities</BodyText></li>
                    <li><BodyText>Supervised deployment protocols with performance tracking</BodyText></li>
                    <li><BodyText>Ongoing supervision support during initial deployment phases</BodyText></li>
                    <li><BodyText>Performance feedback mechanisms and adjustment protocols</BodyText></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                  <BodyText className="font-mono text-sm">
                    SUPPLY STANDARD: All supplied engineers complete systematic evaluation 
                    and elimination processes ensuring consistent competency baselines 
                    and deployment readiness verification.
                  </BodyText>
                </div>
              </div>
            </div>

            {/* What HI Labs Does Not Supply */}
            <div className="space-y-4">
              <H3 className="font-mono">SUPPLY EXCLUSIONS</H3>
              <div className="pl-6 space-y-4">
                <div className="bg-warning/10 border-l-4 border-warning p-4 space-y-3">
                  <BodyText className="font-mono text-sm">
                    HI Labs explicitly does not supply senior engineers, specialized 
                    domain experts, management personnel, or guaranteed performance 
                    outcomes beyond documented competency baselines.
                  </BodyText>
                </div>
                
                <div className="space-y-3">
                  <BodyText><strong>Excluded Components:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Senior engineering personnel or technical leadership roles</BodyText></li>
                    <li><BodyText>Specialized domain expertise beyond general engineering competencies</BodyText></li>
                    <li><BodyText>Management, product, or business development personnel</BodyText></li>
                    <li><BodyText>Guaranteed performance outcomes or productivity commitments</BodyText></li>
                    <li><BodyText>Long-term retention guarantees or employment stability assurances</BodyText></li>
                    <li><BodyText>Cultural fit assessment or organizational integration services</BodyText></li>
                    <li><BodyText>Salary negotiation, benefits administration, or HR services</BodyText></li>
                  </ul>
                </div>
                
                <BodyText>
                  Organizations requiring senior expertise, specialized domains, or 
                  guaranteed outcomes must source these capabilities through alternative 
                  channels. HI Labs focuses exclusively on systematic junior engineer 
                  production with documented competency development.
                </BodyText>
              </div>
            </div>

            {/* Supply Constraints */}
            <div className="space-y-4">
              <H3 className="font-mono">SUPPLY CONSTRAINTS</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  Supply availability operates within systematic production constraints 
                  including cohort timing, elimination rates, and deployment capacity 
                  limitations that affect organizational planning requirements.
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Operational Constraints:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Cohort-based production with fixed intake and completion schedules</BodyText></li>
                    <li><BodyText>Elimination processes reducing supply volume from initial intake</BodyText></li>
                    <li><BodyText>Geographic concentration in Lucknow with limited remote deployment</BodyText></li>
                    <li><BodyText>Supervision capacity limitations affecting simultaneous deployment volume</BodyText></li>
                    <li><BodyText>Competency development timelines requiring 12-month minimum production cycles</BodyText></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                  <BodyText className="font-mono text-sm">
                    PLANNING REQUIREMENT: Organizations must align talent requirements 
                    with HI Labs production schedules and capacity constraints for 
                    effective pipeline integration.
                  </BodyText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Deployment Models Section */}
      <section className="space-y-8">
        <H2>Deployment Models</H2>
        
        <div className="space-y-6">
          <BodyText>
            HI Labs operates three distinct deployment models that define the 
            relationship structure, supervision protocols, and risk allocation 
            between HI Labs, participating engineers, and partner organizations.
          </BodyText>
          
          <div className="space-y-12">
            {/* Internal Teams Model */}
            <div className="space-y-4">
              <H3 className="font-mono">01. INTERNAL TEAMS MODEL</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  Engineers are deployed directly within partner organization teams 
                  under joint supervision between HI Labs instructors and organizational 
                  technical leadership with shared performance accountability.
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Model Characteristics:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Direct integration into existing organizational development teams</BodyText></li>
                    <li><BodyText>Joint supervision between HI Labs instructors and organizational leads</BodyText></li>
                    <li><BodyText>Shared performance accountability and competency development responsibility</BodyText></li>
                    <li><BodyText>Organizational access to HI Labs supervision protocols and assessment methods</BodyText></li>
                    <li><BodyText>Gradual supervision transition from HI Labs to organizational management</BodyText></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                  <BodyText className="font-mono text-sm">
                    SUPERVISION PROTOCOL: HI Labs maintains primary supervision for 
                    initial 90 days with gradual transition to organizational supervision 
                    based on performance milestones and integration success.
                  </BodyText>
                </div>
                
                <div className="space-y-3">
                  <BodyText><strong>Organizational Requirements:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Designated technical lead with capacity for joint supervision participation</BodyText></li>
                    <li><BodyText>Existing development team structure with integration capacity</BodyText></li>
                    <li><BodyText>Commitment to HI Labs supervision protocols during transition period</BodyText></li>
                    <li><BodyText>Performance feedback participation and assessment collaboration</BodyText></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Partner Companies Model */}
            <div className="space-y-4">
              <H3 className="font-mono">02. PARTNER COMPANIES MODEL</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  Engineers are deployed to established partner companies with 
                  structured supervision agreements and performance tracking protocols 
                  maintained by HI Labs throughout the deployment period.
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Model Characteristics:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Deployment to pre-qualified partner organizations with established protocols</BodyText></li>
                    <li><BodyText>HI Labs maintains primary supervision responsibility throughout deployment</BodyText></li>
                    <li><BodyText>Structured performance tracking and regular assessment intervals</BodyText></li>
                    <li><BodyText>Partner company integration support and conflict resolution protocols</BodyText></li>
                    <li><BodyText>Defined deployment duration with extension or transition options</BodyText></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                  <BodyText className="font-mono text-sm">
                    PARTNERSHIP REQUIREMENT: Partner companies undergo qualification 
                    process including supervision capacity assessment, technical 
                    environment evaluation, and protocol compliance verification.
                  </BodyText>
                </div>
                
                <div className="space-y-3">
                  <BodyText><strong>Partner Qualifications:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Demonstrated technical environment suitable for junior engineer development</BodyText></li>
                    <li><BodyText>Commitment to HI Labs supervision protocols and performance tracking</BodyText></li>
                    <li><BodyText>Established development processes compatible with supervised deployment</BodyText></li>
                    <li><BodyText>Technical leadership capacity for collaboration with HI Labs supervision</BodyText></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Client Projects Model */}
            <div className="space-y-4">
              <H3 className="font-mono">03. CLIENT PROJECTS MODEL</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  Engineers work on specific client projects under direct HI Labs 
                  supervision with client organizations providing project requirements 
                  and acceptance criteria while HI Labs maintains full supervision responsibility.
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Model Characteristics:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Project-based engagement with defined scope and deliverable requirements</BodyText></li>
                    <li><BodyText>HI Labs maintains complete supervision and performance accountability</BodyText></li>
                    <li><BodyText>Client provides project specifications and acceptance criteria</BodyText></li>
                    <li><BodyText>Structured project delivery with milestone-based progress tracking</BodyText></li>
                    <li><BodyText>Limited client interaction with engineers during project execution</BodyText></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                  <BodyText className="font-mono text-sm">
                    PROJECT SCOPE: Client projects are limited to well-defined 
                    technical deliverables suitable for junior engineer capabilities 
                    under structured supervision protocols.
                  </BodyText>
                </div>
                
                <div className="space-y-3">
                  <BodyText><strong>Client Requirements:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Clear project specifications with defined technical requirements</BodyText></li>
                    <li><BodyText>Realistic scope appropriate for junior engineer capabilities</BodyText></li>
                    <li><BodyText>Structured acceptance criteria and milestone definitions</BodyText></li>
                    <li><BodyText>Limited direct supervision expectations with HI Labs protocol acceptance</BodyText></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Engagement Protocol Section */}
      <section className="space-y-8">
        <H2>Engagement Protocol</H2>
        
        <div className="space-y-6">
          <BodyText>
            Structured engagement protocols define the systematic process for 
            organizations to evaluate, initiate, and maintain partnership 
            arrangements with HI Labs for talent deployment.
          </BodyText>
          
          <div className="space-y-12">
            {/* Initial Assessment Phase */}
            <div className="space-y-4">
              <H3 className="font-mono">01. INITIAL ASSESSMENT PHASE</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  <strong>Duration:</strong> 2-3 weeks | <strong>Objective:</strong> Organizational readiness evaluation
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Assessment Components:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Technical environment evaluation for junior engineer deployment suitability</BodyText></li>
                    <li><BodyText>Supervision capacity assessment and protocol compatibility review</BodyText></li>
                    <li><BodyText>Organizational development process analysis and integration requirements</BodyText></li>
                    <li><BodyText>Deployment model selection based on organizational structure and requirements</BodyText></li>
                    <li><BodyText>Risk allocation discussion and supervision boundary establishment</BodyText></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                  <BodyText className="font-mono text-sm">
                    ASSESSMENT OUTCOME: Organizations receive detailed evaluation 
                    report with deployment model recommendations and partnership 
                    feasibility assessment.
                  </BodyText>
                </div>
              </div>
            </div>

            {/* Partnership Agreement Phase */}
            <div className="space-y-4">
              <H3 className="font-mono">02. PARTNERSHIP AGREEMENT PHASE</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  <strong>Duration:</strong> 1-2 weeks | <strong>Objective:</strong> Formal partnership establishment
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Agreement Components:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Deployment model specification with supervision protocols and responsibilities</BodyText></li>
                    <li><BodyText>Performance evaluation framework agreement and feedback mechanism establishment</BodyText></li>
                    <li><BodyText>Risk allocation documentation and accountability boundary definition</BodyText></li>
                    <li><BodyText>Engagement timeline establishment with deployment scheduling and capacity planning</BodyText></li>
                    <li><BodyText>Performance intervention protocols and modification authority clarification</BodyText></li>
                  </ul>
                </div>
                
                <div className="bg-accent/10 border-l-4 border-accent p-4 space-y-3">
                  <BodyText className="font-mono text-sm">
                    AGREEMENT STANDARD: All partnership agreements include detailed 
                    supervision protocols, performance standards, and intervention 
                    authorities to prevent operational conflicts.
                  </BodyText>
                </div>
              </div>
            </div>

            {/* Deployment Initiation Phase */}
            <div className="space-y-4">
              <H3 className="font-mono">03. DEPLOYMENT INITIATION PHASE</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  <strong>Duration:</strong> 2-4 weeks | <strong>Objective:</strong> Engineer deployment and integration
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Initiation Components:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Engineer selection and competency profile matching with organizational requirements</BodyText></li>
                    <li><BodyText>Deployment environment preparation and technical infrastructure setup</BodyText></li>
                    <li><BodyText>Initial supervision protocol implementation and performance baseline establishment</BodyText></li>
                    <li><BodyText>Partner organization integration support and collaboration framework activation</BodyText></li>
                    <li><BodyText>Performance tracking system initialization and feedback mechanism testing</BodyText></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                  <BodyText className="font-mono text-sm">
                    INITIATION SUCCESS: Deployment initiation is considered successful 
                    when supervision protocols are operational and performance tracking 
                    systems are functioning effectively.
                  </BodyText>
                </div>
              </div>
            </div>

            {/* Ongoing Partnership Management */}
            <div className="space-y-4">
              <H3 className="font-mono">04. ONGOING PARTNERSHIP MANAGEMENT</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  <strong>Duration:</strong> Continuous | <strong>Objective:</strong> Partnership optimization and expansion
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Management Components:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Regular partnership review sessions with effectiveness assessment and optimization</BodyText></li>
                    <li><BodyText>Deployment capacity planning and scaling discussion for additional engineer placement</BodyText></li>
                    <li><BodyText>Protocol refinement based on performance data and feedback analysis</BodyText></li>
                    <li><BodyText>Partnership expansion evaluation including additional deployment models or capacity</BodyText></li>
                    <li><BodyText>Long-term strategic planning for talent pipeline integration and organizational development</BodyText></li>
                  </ul>
                </div>
                
                <div className="bg-accent/10 border-l-4 border-accent p-4 space-y-3">
                  <BodyText className="font-mono text-sm">
                    PARTNERSHIP EVOLUTION: Successful partnerships evolve toward 
                    increased deployment capacity and enhanced integration effectiveness 
                    through systematic optimization and expansion.
                  </BodyText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Employer Deployment Discussion Section */}
      <section className="space-y-8">
        <H2>Deployment Discussion Access</H2>
        
        <div className="space-y-6">
          <BodyText>
            Organizations interested in evaluating HI Labs as a talent pipeline 
            component can access detailed deployment discussion including partnership 
            assessment, model selection, and engagement protocol initiation.
          </BodyText>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <H3 className="font-mono">DEPLOYMENT FRAMEWORK ACCESS</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  Deployment discussion provides comprehensive access to partnership 
                  evaluation frameworks, deployment model specifications, and 
                  engagement protocol documentation for informed decision-making.
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Discussion Components:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Organizational readiness assessment and deployment model recommendation</BodyText></li>
                    <li><BodyText>Detailed supervision protocol review and partnership requirement clarification</BodyText></li>
                    <li><BodyText>Risk allocation discussion and accountability boundary establishment</BodyText></li>
                    <li><BodyText>Performance evaluation framework explanation and feedback mechanism design</BodyText></li>
                    <li><BodyText>Engagement timeline planning and capacity allocation discussion</BodyText></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                  <BodyText className="font-mono text-sm">
                    ACCESS REQUIREMENT: Deployment discussion is restricted to 
                    organizations with documented talent acquisition requirements 
                    and technical leadership capacity for partnership evaluation.
                  </BodyText>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <H3 className="font-mono">PARTNERSHIP QUALIFICATION</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  Partnership qualification ensures deployment discussion efficiency 
                  by focusing on organizations with appropriate technical environments, 
                  supervision capacity, and partnership commitment capability.
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Qualification Criteria:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Established technical development environment suitable for junior engineer integration</BodyText></li>
                    <li><BodyText>Technical leadership with capacity for supervision protocol collaboration</BodyText></li>
                    <li><BodyText>Organizational commitment to systematic talent development and performance tracking</BodyText></li>
                    <li><BodyText>Documented talent acquisition requirements with specific competency needs</BodyText></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <CTAButton variant="primary" href="/employers/deployment-discussion">
              Initiate Deployment Discussion
            </CTAButton>
          </div>
          
          <BodyText className="text-sm text-secondary">
            Deployment discussion access is provided to qualified organizations 
            following initial assessment and partnership qualification verification. 
            Discussion includes comprehensive partnership evaluation and engagement protocol design.
          </BodyText>
        </div>
      </section>
    </div>
  );
}