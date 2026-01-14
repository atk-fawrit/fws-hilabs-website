import { Metadata } from 'next';
import { H1, H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { SectionDivider, InfoBox } from '@/src/shared/components/content';
import { 
  PrincipleItem,
  DomainSpecification,
  RoleSpecification,
  GovernanceItem,
  IntegritySection,
} from './components';

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
          <InfoBox
            variant="accent"
            title="INSTITUTIONAL DOCUMENT"
            description="This document establishes the institutional identity, operating principles, and governance framework of Human Intelligence Laboratories Private Limited as a systematic engineering talent production facility."
          />
          
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
                <PrincipleItem
                  number="01"
                  title="Systematic Competency Development"
                  description="All engineering competency development operates through systematic protocols with documented assessment criteria and elimination mechanisms rather than subjective evaluation or flexible standards."
                />
                
                <PrincipleItem
                  number="02"
                  title="Enforced Evaluation Standards"
                  description="Evaluation operates through consistent application of documented standards with elimination consequences for performance below established thresholds without exception or accommodation."
                />
                
                <PrincipleItem
                  number="03"
                  title="Supervised Deployment Accountability"
                  description="All engineer deployment operates under systematic supervision with documented performance tracking and intervention protocols maintained throughout deployment arrangements."
                />
                
                <PrincipleItem
                  number="04"
                  title="Institutional Discipline Priority"
                  description="Institutional operations prioritize systematic discipline and protocol compliance over individual accommodation or comfort optimization in all operational decisions."
                />
                
                <PrincipleItem
                  number="05"
                  title="Evidence-Based Documentation"
                  description="All institutional claims and performance assertions operate through documented evidence and systematic assessment rather than testimonial, anecdotal, or promotional representation."
                />
                
                <PrincipleItem
                  number="06"
                  title="Transparent Operational Boundaries"
                  description="Institutional capabilities and limitations are documented explicitly with clear boundary definition to prevent expectation misalignment or capability overstatement."
                />
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
                <DomainSpecification
                  number="01"
                  title="Competency Development Domain"
                  description="Systematic engineering competency development through structured curriculum, assessment protocols, and elimination mechanisms with documented performance tracking and intervention systems."
                  accountability="Competency development effectiveness measured through systematic assessment outcomes and deployment readiness verification."
                />
                
                <DomainSpecification
                  number="02"
                  title="Evaluation and Assessment Domain"
                  description="Systematic evaluation protocols with documented criteria, elimination thresholds, and performance measurement systems ensuring consistent assessment and elimination decisions."
                  accountability="Assessment accuracy and elimination decision validity measured through deployment performance correlation analysis."
                />
                
                <DomainSpecification
                  number="03"
                  title="Supervised Deployment Domain"
                  description="Engineer deployment supervision with performance tracking, intervention protocols, and partnership management systems maintaining accountability throughout deployment arrangements."
                  accountability="Deployment supervision effectiveness measured through engineer performance maintenance and partnership satisfaction."
                />
                
                <DomainSpecification
                  number="04"
                  title="Institutional Operations Domain"
                  description="Systematic institutional management including facility operations, administrative protocols, and operational efficiency systems supporting competency development and deployment activities."
                  accountability="Operational effectiveness measured through systematic efficiency metrics and institutional performance indicators."
                />
                
                <DomainSpecification
                  number="05"
                  title="Partnership and Engagement Domain"
                  description="Systematic partnership development and management with employer organizations, deployment arrangement protocols, and engagement framework maintenance ensuring effective collaboration."
                  accountability="Partnership effectiveness measured through deployment success rates and organizational satisfaction metrics."
                />
                
                <DomainSpecification
                  number="06"
                  title="Quality Assurance and Integrity Domain"
                  description="Systematic quality monitoring, integrity verification, and institutional compliance systems ensuring operational standards and ethical protocol maintenance across all domains."
                  accountability="Quality assurance effectiveness measured through systematic audit outcomes and integrity standard compliance verification."
                />
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
            <RoleSpecification
              title="INSTRUCTOR ROLE SPECIFICATION"
              description="Instructors operate systematic competency development protocols with assessment authority, elimination decision responsibility, and performance tracking accountability within defined domain areas."
              responsibilities={[
                'Systematic competency development protocol implementation and maintenance',
                'Assessment criteria application and elimination decision execution',
                'Performance tracking documentation and intervention protocol activation',
                'Competency development effectiveness measurement and optimization',
                'Institutional standard compliance and quality assurance participation',
              ]}
              qualifications={[
                'Demonstrated systematic competency development experience with documented outcomes',
                'Assessment protocol expertise and elimination decision authority capability',
                'Technical domain expertise appropriate for assigned competency areas',
                'Institutional discipline commitment and protocol compliance capability',
              ]}
              note={{
                type: 'authority',
                content: 'INSTRUCTOR AUTHORITY: Instructors maintain authority for competency assessment, elimination decisions, and performance intervention within assigned domain responsibilities.',
              }}
            />

            {/* Trainer Role Definition */}
            <RoleSpecification
              title="TRAINER ROLE SPECIFICATION"
              description="Trainers operate systematic skill development protocols with performance support responsibility, competency reinforcement accountability, and specialized technical domain expertise."
              responsibilities={[
                'Systematic skill development protocol implementation and technical support',
                'Competency reinforcement activities and performance optimization support',
                'Specialized technical domain expertise provision and application guidance',
                'Performance support documentation and competency development assistance',
                'Instructor collaboration and systematic protocol support participation',
              ]}
              qualifications={[
                'Specialized technical domain expertise with practical application experience',
                'Systematic skill development capability and performance support experience',
                'Competency reinforcement protocol expertise and optimization capability',
                'Collaborative protocol participation and institutional standard compliance',
              ]}
              note={{
                type: 'scope',
                content: 'TRAINER SCOPE: Trainers operate under instructor authority with specialized technical support responsibility rather than independent assessment or elimination decision authority.',
              }}
            />

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
                <GovernanceItem
                  number="01"
                  title="Decision-Making Protocols"
                  description="Institutional decisions operate through systematic protocols with documented criteria, authority boundaries, and accountability mechanisms ensuring consistent and transparent decision-making processes."
                  standard="PROTOCOL STANDARD: All institutional decisions follow documented protocols with clear authority allocation and accountability tracking."
                />
                
                <GovernanceItem
                  number="02"
                  title="Performance Accountability Systems"
                  description="Systematic performance measurement and accountability systems operate across all institutional domains with documented metrics, assessment intervals, and intervention protocols for performance management."
                  standard="ACCOUNTABILITY STANDARD: Performance accountability operates through systematic measurement with documented intervention protocols."
                />
                
                <GovernanceItem
                  number="03"
                  title="Quality Assurance Protocols"
                  description="Systematic quality assurance operates through regular assessment, compliance verification, and continuous improvement protocols ensuring institutional standard maintenance and operational effectiveness."
                  standard="QUALITY STANDARD: Quality assurance operates through systematic assessment with documented compliance verification and improvement protocols."
                />
                
                <GovernanceItem
                  number="04"
                  title="Transparency and Documentation Requirements"
                  description="Institutional operations maintain systematic documentation and transparency requirements with accessible information protocols and stakeholder communication mechanisms ensuring operational visibility."
                  standard="TRANSPARENCY STANDARD: Operational transparency operates through systematic documentation with accessible information protocols."
                />
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
                <IntegritySection
                  number="01"
                  title="Ethical Protocol Compliance"
                  description="All institutional operations comply with documented ethical protocols including stakeholder interaction standards, information accuracy requirements, and commitment fulfillment obligations."
                  items={[
                    'Accurate information provision without misrepresentation or overstatement',
                    'Commitment fulfillment according to documented agreements and protocols',
                    'Stakeholder interaction transparency with clear boundary communication',
                    'Conflict of interest identification and management protocols',
                  ]}
                />
                
                <IntegritySection
                  number="02"
                  title="Assessment and Evaluation Integrity"
                  description="Assessment and evaluation processes maintain systematic integrity through consistent criteria application, elimination decision transparency, and performance measurement accuracy."
                  items={[
                    'Consistent assessment criteria application without bias or accommodation',
                    'Elimination decision transparency with documented justification',
                    'Performance measurement accuracy and evidence-based documentation',
                    'Assessment protocol compliance and quality assurance verification',
                  ]}
                />
                
                <IntegritySection
                  number="03"
                  title="Partnership and Deployment Integrity"
                  description="Partnership arrangements and deployment operations maintain integrity through clear agreement fulfillment, supervision accountability, and performance representation accuracy."
                  items={[
                    'Partnership agreement fulfillment according to documented protocols',
                    'Supervision accountability maintenance throughout deployment arrangements',
                    'Engineer competency representation accuracy without overstatement',
                    'Performance feedback accuracy and intervention protocol compliance',
                  ]}
                />
                
                <IntegritySection
                  number="04"
                  title="Institutional Representation Integrity"
                  description="Institutional representation maintains integrity through accurate capability communication, limitation acknowledgment, and evidence-based claim substantiation without promotional overstatement."
                  items={[
                    'Capability representation accuracy with clear limitation acknowledgment',
                    'Evidence-based claim substantiation without promotional exaggeration',
                    'Outcome representation accuracy based on documented evidence',
                    'Stakeholder communication transparency with expectation alignment',
                  ]}
                />
              </div>
            </div>
          </div>
          
          <InfoBox
            variant="accent"
            title="INTEGRITY COMMITMENT"
            description="HI Labs maintains systematic integrity standards through documented protocols, regular compliance verification, and accountability mechanisms that ensure ethical operation and stakeholder trust maintenance across all institutional activities and external relationships."
          />
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
                <GovernanceItem
                  number=""
                  title="Systematic Coordination Structure"
                  description="Institutional coordination operates through systematic protocols with defined communication channels, decision-making hierarchies, and accountability mechanisms ensuring effective organizational management."
                  standard="COORDINATION STANDARD: Organizational coordination operates through systematic protocols with documented communication and decision-making frameworks."
                />
                
                <GovernanceItem
                  number=""
                  title="Performance Management Integration"
                  description="Performance management operates across all organizational levels with integrated assessment systems, accountability mechanisms, and continuous improvement protocols ensuring institutional effectiveness."
                  standard="PERFORMANCE INTEGRATION: Performance management operates through integrated systems with systematic assessment and improvement protocols."
                />
                
                <GovernanceItem
                  number=""
                  title="Operational Efficiency Systems"
                  description="Operational efficiency operates through systematic optimization protocols with resource allocation frameworks, process improvement mechanisms, and performance measurement systems ensuring institutional productivity."
                  standard="EFFICIENCY STANDARD: Operational efficiency operates through systematic optimization with documented resource allocation and process improvement protocols."
                />
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