import { Metadata } from 'next';
import { H1, H2, H3 } from '@/components/typography';
import { BodyText } from '@/components/typography';
import { SectionDivider } from '@/components/content';

export const metadata: Metadata = {
  title: 'About - HI Labs',
  description: 'Institutional charter, operating principles, and governance structure of Human Intelligence Laboratories Private Limited.',
  alternates: {
    canonical: '/about/',
  },
};

export default function AboutPage() {
  return (
    <div className="container-institutional">
      <H1>About</H1>
      
      {/* Institutional Charter Introduction */}
      <section className="space-y-8">
        <H2>Institutional Charter</H2>
        
        <div className="space-y-6">
          <div className="bg-accent/10 border-l-4 border-accent p-6 space-y-4">
            <H3 className="text-accent font-mono">INSTITUTIONAL DOCUMENT</H3>
            <BodyText className="font-mono text-sm">
              This document establishes the institutional identity, operating 
              principles, and governance framework of Human Intelligence Laboratories 
              Private Limited as a systematic engineering talent production facility.
            </BodyText>
          </div>
          
          <BodyText>
            HI Labs operates as an institutional engineering talent production 
            system rather than a traditional educational institution or training 
            provider. The organization functions through systematic competency 
            development, enforced evaluation protocols, and supervised deployment 
            mechanisms designed to produce deployable junior engineers.
          </BodyText>
          
          <BodyText>
            This institutional charter replaces conventional mission statements 
            and organizational narratives with systematic documentation of operating 
            principles, accountability structures, and governance mechanisms that 
            define institutional identity and operational boundaries.
          </BodyText>
        </div>
      </section>

      <SectionDivider />

      {/* Operating Principles Section */}
      <section className="space-y-8">
        <H2>Operating Principles</H2>
        
        <div className="space-y-6">
          <BodyText>
            HI Labs operates according to systematic principles that govern 
            institutional decision-making, competency development protocols, 
            and organizational accountability without prose elaboration or 
            interpretive commentary.
          </BodyText>
          
          <div className="space-y-8">
            <div className="space-y-4">
              <H3 className="font-mono">SYSTEMATIC PRINCIPLES</H3>
              <div className="pl-6 space-y-4">
                <div className="space-y-3">
                  <BodyText><strong>01. Systematic Competency Development</strong></BodyText>
                  <BodyText className="pl-4">
                    All engineering competency development operates through systematic 
                    protocols with documented assessment criteria and elimination 
                    mechanisms rather than subjective evaluation or flexible standards.
                  </BodyText>
                </div>
                
                <div className="space-y-3">
                  <BodyText><strong>02. Enforced Evaluation Standards</strong></BodyText>
                  <BodyText className="pl-4">
                    Evaluation operates through consistent application of documented 
                    standards with elimination consequences for performance below 
                    established thresholds without exception or accommodation.
                  </BodyText>
                </div>
                
                <div className="space-y-3">
                  <BodyText><strong>03. Supervised Deployment Accountability</strong></BodyText>
                  <BodyText className="pl-4">
                    All engineer deployment operates under systematic supervision 
                    with documented performance tracking and intervention protocols 
                    maintained throughout deployment arrangements.
                  </BodyText>
                </div>
                
                <div className="space-y-3">
                  <BodyText><strong>04. Institutional Discipline Priority</strong></BodyText>
                  <BodyText className="pl-4">
                    Institutional operations prioritize systematic discipline and 
                    protocol compliance over individual accommodation or comfort 
                    optimization in all operational decisions.
                  </BodyText>
                </div>
                
                <div className="space-y-3">
                  <BodyText><strong>05. Evidence-Based Documentation</strong></BodyText>
                  <BodyText className="pl-4">
                    All institutional claims and performance assertions operate 
                    through documented evidence and systematic assessment rather 
                    than testimonial, anecdotal, or promotional representation.
                  </BodyText>
                </div>
                
                <div className="space-y-3">
                  <BodyText><strong>06. Transparent Operational Boundaries</strong></BodyText>
                  <BodyText className="pl-4">
                    Institutional capabilities and limitations are documented 
                    explicitly with clear boundary definition to prevent expectation 
                    misalignment or capability overstatement.
                  </BodyText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Operating Domains Section */}
      <section className="space-y-8">
        <H2>Operating Domains</H2>
        
        <div className="space-y-6">
          <BodyText>
            HI Labs operates across six systematic domains with defined accountability 
            structures and performance measurement protocols that govern institutional 
            effectiveness and operational integrity.
          </BodyText>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <H3 className="font-mono">DOMAIN SPECIFICATIONS</H3>
              <div className="pl-6 space-y-8">
                <div className="space-y-4">
                  <BodyText><strong>01. Competency Development Domain</strong></BodyText>
                  <div className="pl-4 space-y-3">
                    <BodyText>
                      Systematic engineering competency development through structured 
                      curriculum, assessment protocols, and elimination mechanisms 
                      with documented performance tracking and intervention systems.
                    </BodyText>
                    <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                      <BodyText className="font-mono text-sm">
                        ACCOUNTABILITY: Competency development effectiveness measured 
                        through systematic assessment outcomes and deployment readiness verification.
                      </BodyText>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <BodyText><strong>02. Evaluation and Assessment Domain</strong></BodyText>
                  <div className="pl-4 space-y-3">
                    <BodyText>
                      Systematic evaluation protocols with documented criteria, 
                      elimination thresholds, and performance measurement systems 
                      ensuring consistent assessment and elimination decisions.
                    </BodyText>
                    <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                      <BodyText className="font-mono text-sm">
                        ACCOUNTABILITY: Assessment accuracy and elimination decision 
                        validity measured through deployment performance correlation analysis.
                      </BodyText>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <BodyText><strong>03. Supervised Deployment Domain</strong></BodyText>
                  <div className="pl-4 space-y-3">
                    <BodyText>
                      Engineer deployment supervision with performance tracking, 
                      intervention protocols, and partnership management systems 
                      maintaining accountability throughout deployment arrangements.
                    </BodyText>
                    <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                      <BodyText className="font-mono text-sm">
                        ACCOUNTABILITY: Deployment supervision effectiveness measured 
                        through engineer performance maintenance and partnership satisfaction.
                      </BodyText>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <BodyText><strong>04. Institutional Operations Domain</strong></BodyText>
                  <div className="pl-4 space-y-3">
                    <BodyText>
                      Systematic institutional management including facility operations, 
                      administrative protocols, and operational efficiency systems 
                      supporting competency development and deployment activities.
                    </BodyText>
                    <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                      <BodyText className="font-mono text-sm">
                        ACCOUNTABILITY: Operational effectiveness measured through 
                        systematic efficiency metrics and institutional performance indicators.
                      </BodyText>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <BodyText><strong>05. Partnership and Engagement Domain</strong></BodyText>
                  <div className="pl-4 space-y-3">
                    <BodyText>
                      Systematic partnership development and management with employer 
                      organizations, deployment arrangement protocols, and engagement 
                      framework maintenance ensuring effective collaboration.
                    </BodyText>
                    <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                      <BodyText className="font-mono text-sm">
                        ACCOUNTABILITY: Partnership effectiveness measured through 
                        deployment success rates and organizational satisfaction metrics.
                      </BodyText>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <BodyText><strong>06. Quality Assurance and Integrity Domain</strong></BodyText>
                  <div className="pl-4 space-y-3">
                    <BodyText>
                      Systematic quality monitoring, integrity verification, and 
                      institutional compliance systems ensuring operational standards 
                      and ethical protocol maintenance across all domains.
                    </BodyText>
                    <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                      <BodyText className="font-mono text-sm">
                        ACCOUNTABILITY: Quality assurance effectiveness measured through 
                        systematic audit outcomes and integrity standard compliance verification.
                      </BodyText>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Faculty Model Section */}
      <section className="space-y-8">
        <H2>Faculty Model</H2>
        
        <div className="space-y-6">
          <BodyText>
            HI Labs operates through systematic faculty roles with distinct 
            responsibilities, accountability structures, and performance requirements 
            that distinguish instructional and training functions within the 
            institutional framework.
          </BodyText>
          
          <div className="space-y-12">
            {/* Instructor Role Definition */}
            <div className="space-y-4">
              <H3 className="font-mono">INSTRUCTOR ROLE SPECIFICATION</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  Instructors operate systematic competency development protocols 
                  with assessment authority, elimination decision responsibility, 
                  and performance tracking accountability within defined domain areas.
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Instructor Responsibilities:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Systematic competency development protocol implementation and maintenance</BodyText></li>
                    <li><BodyText>Assessment criteria application and elimination decision execution</BodyText></li>
                    <li><BodyText>Performance tracking documentation and intervention protocol activation</BodyText></li>
                    <li><BodyText>Competency development effectiveness measurement and optimization</BodyText></li>
                    <li><BodyText>Institutional standard compliance and quality assurance participation</BodyText></li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <BodyText><strong>Instructor Qualifications:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Demonstrated systematic competency development experience with documented outcomes</BodyText></li>
                    <li><BodyText>Assessment protocol expertise and elimination decision authority capability</BodyText></li>
                    <li><BodyText>Technical domain expertise appropriate for assigned competency areas</BodyText></li>
                    <li><BodyText>Institutional discipline commitment and protocol compliance capability</BodyText></li>
                  </ul>
                </div>
                
                <div className="bg-accent/10 border-l-4 border-accent p-4 space-y-3">
                  <BodyText className="font-mono text-sm">
                    INSTRUCTOR AUTHORITY: Instructors maintain authority for competency 
                    assessment, elimination decisions, and performance intervention 
                    within assigned domain responsibilities.
                  </BodyText>
                </div>
              </div>
            </div>

            {/* Trainer Role Definition */}
            <div className="space-y-4">
              <H3 className="font-mono">TRAINER ROLE SPECIFICATION</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  Trainers operate systematic skill development protocols with 
                  performance support responsibility, competency reinforcement 
                  accountability, and specialized technical domain expertise.
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Trainer Responsibilities:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Systematic skill development protocol implementation and technical support</BodyText></li>
                    <li><BodyText>Competency reinforcement activities and performance optimization support</BodyText></li>
                    <li><BodyText>Specialized technical domain expertise provision and application guidance</BodyText></li>
                    <li><BodyText>Performance support documentation and competency development assistance</BodyText></li>
                    <li><BodyText>Instructor collaboration and systematic protocol support participation</BodyText></li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <BodyText><strong>Trainer Qualifications:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Specialized technical domain expertise with practical application experience</BodyText></li>
                    <li><BodyText>Systematic skill development capability and performance support experience</BodyText></li>
                    <li><BodyText>Competency reinforcement protocol expertise and optimization capability</BodyText></li>
                    <li><BodyText>Collaborative protocol participation and institutional standard compliance</BodyText></li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                  <BodyText className="font-mono text-sm">
                    TRAINER SCOPE: Trainers operate under instructor authority with 
                    specialized technical support responsibility rather than independent 
                    assessment or elimination decision authority.
                  </BodyText>
                </div>
              </div>
            </div>

            {/* Role Distinction and Collaboration */}
            <div className="space-y-4">
              <H3 className="font-mono">ROLE DISTINCTION AND COLLABORATION</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  Instructor and trainer roles operate through systematic collaboration 
                  with clear authority boundaries, responsibility allocation, and 
                  performance accountability that prevents role confusion or authority conflicts.
                </BodyText>
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <BodyText><strong>Authority Boundaries:</strong></BodyText>
                    <div className="pl-4 space-y-3">
                      <BodyText>
                        <strong>Instructor Authority:</strong> Assessment decisions, elimination 
                        authority, competency development protocol modification, performance 
                        intervention activation.
                      </BodyText>
                      <BodyText>
                        <strong>Trainer Authority:</strong> Technical support provision, skill 
                        development optimization, specialized domain guidance, performance 
                        support documentation.
                      </BodyText>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <BodyText><strong>Collaboration Protocols:</strong></BodyText>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><BodyText>Systematic communication protocols for performance data sharing and assessment coordination</BodyText></li>
                      <li><BodyText>Competency development collaboration with instructor oversight and trainer technical support</BodyText></li>
                      <li><BodyText>Performance intervention coordination with instructor decision authority and trainer implementation support</BodyText></li>
                      <li><BodyText>Quality assurance participation with shared responsibility for institutional standard maintenance</BodyText></li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-warning/10 border-l-4 border-warning p-4 space-y-3">
                  <BodyText className="font-mono text-sm">
                    ROLE CLARITY: Clear role distinction prevents authority conflicts 
                    and ensures systematic collaboration effectiveness within institutional 
                    accountability frameworks.
                  </BodyText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Governance Mechanisms Section */}
      <section className="space-y-8">
        <H2>Governance Mechanisms</H2>
        
        <div className="space-y-6">
          <BodyText>
            HI Labs operates through systematic governance mechanisms with 
            documented decision-making protocols, accountability structures, 
            and integrity standards that ensure institutional effectiveness 
            and operational transparency.
          </BodyText>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <H3 className="font-mono">GOVERNANCE FRAMEWORK</H3>
              <div className="pl-6 space-y-8">
                <div className="space-y-4">
                  <BodyText><strong>01. Decision-Making Protocols</strong></BodyText>
                  <div className="pl-4 space-y-3">
                    <BodyText>
                      Institutional decisions operate through systematic protocols 
                      with documented criteria, authority boundaries, and accountability 
                      mechanisms ensuring consistent and transparent decision-making processes.
                    </BodyText>
                    <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                      <BodyText className="font-mono text-sm">
                        PROTOCOL STANDARD: All institutional decisions follow documented 
                        protocols with clear authority allocation and accountability tracking.
                      </BodyText>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <BodyText><strong>02. Performance Accountability Systems</strong></BodyText>
                  <div className="pl-4 space-y-3">
                    <BodyText>
                      Systematic performance measurement and accountability systems 
                      operate across all institutional domains with documented metrics, 
                      assessment intervals, and intervention protocols for performance management.
                    </BodyText>
                    <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                      <BodyText className="font-mono text-sm">
                        ACCOUNTABILITY STANDARD: Performance accountability operates 
                        through systematic measurement with documented intervention protocols.
                      </BodyText>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <BodyText><strong>03. Quality Assurance Protocols</strong></BodyText>
                  <div className="pl-4 space-y-3">
                    <BodyText>
                      Systematic quality assurance operates through regular assessment, 
                      compliance verification, and continuous improvement protocols 
                      ensuring institutional standard maintenance and operational effectiveness.
                    </BodyText>
                    <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                      <BodyText className="font-mono text-sm">
                        QUALITY STANDARD: Quality assurance operates through systematic 
                        assessment with documented compliance verification and improvement protocols.
                      </BodyText>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <BodyText><strong>04. Transparency and Documentation Requirements</strong></BodyText>
                  <div className="pl-4 space-y-3">
                    <BodyText>
                      Institutional operations maintain systematic documentation and 
                      transparency requirements with accessible information protocols 
                      and stakeholder communication mechanisms ensuring operational visibility.
                    </BodyText>
                    <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                      <BodyText className="font-mono text-sm">
                        TRANSPARENCY STANDARD: Operational transparency operates through 
                        systematic documentation with accessible information protocols.
                      </BodyText>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Integrity Standards Section */}
      <section className="space-y-8">
        <H2>Integrity Standards</H2>
        
        <div className="space-y-6">
          <BodyText>
            HI Labs maintains systematic integrity standards with documented 
            compliance protocols, ethical boundaries, and accountability mechanisms 
            that govern all institutional operations and stakeholder interactions.
          </BodyText>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <H3 className="font-mono">INTEGRITY FRAMEWORK</H3>
              <div className="pl-6 space-y-8">
                <div className="space-y-4">
                  <BodyText><strong>01. Ethical Protocol Compliance</strong></BodyText>
                  <div className="pl-4 space-y-3">
                    <BodyText>
                      All institutional operations comply with documented ethical 
                      protocols including stakeholder interaction standards, 
                      information accuracy requirements, and commitment fulfillment obligations.
                    </BodyText>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><BodyText>Accurate information provision without misrepresentation or overstatement</BodyText></li>
                      <li><BodyText>Commitment fulfillment according to documented agreements and protocols</BodyText></li>
                      <li><BodyText>Stakeholder interaction transparency with clear boundary communication</BodyText></li>
                      <li><BodyText>Conflict of interest identification and management protocols</BodyText></li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <BodyText><strong>02. Assessment and Evaluation Integrity</strong></BodyText>
                  <div className="pl-4 space-y-3">
                    <BodyText>
                      Assessment and evaluation processes maintain systematic integrity 
                      through consistent criteria application, elimination decision 
                      transparency, and performance measurement accuracy.
                    </BodyText>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><BodyText>Consistent assessment criteria application without bias or accommodation</BodyText></li>
                      <li><BodyText>Elimination decision transparency with documented justification</BodyText></li>
                      <li><BodyText>Performance measurement accuracy and evidence-based documentation</BodyText></li>
                      <li><BodyText>Assessment protocol compliance and quality assurance verification</BodyText></li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <BodyText><strong>03. Partnership and Deployment Integrity</strong></BodyText>
                  <div className="pl-4 space-y-3">
                    <BodyText>
                      Partnership arrangements and deployment operations maintain 
                      integrity through clear agreement fulfillment, supervision 
                      accountability, and performance representation accuracy.
                    </BodyText>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><BodyText>Partnership agreement fulfillment according to documented protocols</BodyText></li>
                      <li><BodyText>Supervision accountability maintenance throughout deployment arrangements</BodyText></li>
                      <li><BodyText>Engineer competency representation accuracy without overstatement</BodyText></li>
                      <li><BodyText>Performance feedback accuracy and intervention protocol compliance</BodyText></li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <BodyText><strong>04. Institutional Representation Integrity</strong></BodyText>
                  <div className="pl-4 space-y-3">
                    <BodyText>
                      Institutional representation maintains integrity through accurate 
                      capability communication, limitation acknowledgment, and evidence-based 
                      claim substantiation without promotional overstatement.
                    </BodyText>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><BodyText>Capability representation accuracy with clear limitation acknowledgment</BodyText></li>
                      <li><BodyText>Evidence-based claim substantiation without promotional exaggeration</BodyText></li>
                      <li><BodyText>Outcome representation accuracy based on documented evidence</BodyText></li>
                      <li><BodyText>Stakeholder communication transparency with expectation alignment</BodyText></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-accent/10 border-l-4 border-accent p-6 space-y-4">
            <H3 className="text-accent font-mono">INTEGRITY COMMITMENT</H3>
            <BodyText className="font-mono text-sm">
              HI Labs maintains systematic integrity standards through documented 
              protocols, regular compliance verification, and accountability mechanisms 
              that ensure ethical operation and stakeholder trust maintenance across 
              all institutional activities and external relationships.
            </BodyText>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Institutional Structure Section */}
      <section className="space-y-8">
        <H2>Institutional Structure</H2>
        
        <div className="space-y-6">
          <BodyText>
            HI Labs operates through systematic institutional structure with 
            defined organizational hierarchy, operational coordination mechanisms, 
            and performance accountability systems that ensure effective institutional 
            management and operational efficiency.
          </BodyText>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <H3 className="font-mono">ORGANIZATIONAL FRAMEWORK</H3>
              <div className="pl-6 space-y-8">
                <div className="space-y-4">
                  <BodyText><strong>Systematic Coordination Structure</strong></BodyText>
                  <div className="pl-4 space-y-3">
                    <BodyText>
                      Institutional coordination operates through systematic protocols 
                      with defined communication channels, decision-making hierarchies, 
                      and accountability mechanisms ensuring effective organizational management.
                    </BodyText>
                    <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                      <BodyText className="font-mono text-sm">
                        COORDINATION STANDARD: Organizational coordination operates 
                        through systematic protocols with documented communication 
                        and decision-making frameworks.
                      </BodyText>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <BodyText><strong>Performance Management Integration</strong></BodyText>
                  <div className="pl-4 space-y-3">
                    <BodyText>
                      Performance management operates across all organizational levels 
                      with integrated assessment systems, accountability mechanisms, 
                      and continuous improvement protocols ensuring institutional effectiveness.
                    </BodyText>
                    <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                      <BodyText className="font-mono text-sm">
                        PERFORMANCE INTEGRATION: Performance management operates through 
                        integrated systems with systematic assessment and improvement protocols.
                      </BodyText>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <BodyText><strong>Operational Efficiency Systems</strong></BodyText>
                  <div className="pl-4 space-y-3">
                    <BodyText>
                      Operational efficiency operates through systematic optimization 
                      protocols with resource allocation frameworks, process improvement 
                      mechanisms, and performance measurement systems ensuring institutional productivity.
                    </BodyText>
                    <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                      <BodyText className="font-mono text-sm">
                        EFFICIENCY STANDARD: Operational efficiency operates through 
                        systematic optimization with documented resource allocation 
                        and process improvement protocols.
                      </BodyText>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-warning/10 border-l-4 border-warning p-6 space-y-4">
            <H3 className="text-warning font-mono">INSTITUTIONAL BOUNDARIES</H3>
            <BodyText className="font-mono text-sm">
              This institutional charter excludes portraits, founder imagery, 
              mission/vision statements, and promotional narratives. HI Labs 
              operates through systematic documentation and evidence-based 
              representation rather than personality-driven or inspirational messaging.
            </BodyText>
          </div>
        </div>
      </section>
    </div>
  );
}