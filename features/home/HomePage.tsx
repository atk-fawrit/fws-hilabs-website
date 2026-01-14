import { Metadata } from 'next';
import { Heading } from '@/components/typography/Heading';
import { BodyText } from '@/components/typography/BodyText';
import { CTAButton } from '@/components/content/CTAButton';
import { ProcessDiagram } from '@/components/content/ProcessDiagram';
import { SectionDivider } from '@/components/content/SectionDivider';
import { TwoColumnSection } from '@/components/content/TwoColumnSection';

export const metadata: Metadata = {
  title: 'HI Labs - Engineering Talent Production Lab',
  description: 'HI Labs is an in-person Engineering lab. We produce deployable junior engineers through enforced evaluation and supervised deployment.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <div className="container-institutional">
      <main className="spacing-section">
        {/* Hero Section */}
        <section className="text-center spacing-section">
          <Heading level={1} className="spacing-element">
            HI Labs is an in-person Engineering lab. We produce deployable junior engineers through enforced evaluation and supervised deployment
          </Heading>
          
          {/* Three CTAs in specified order */}
          <div className="flex flex-wrap justify-center gap-4 spacing-subsection">
            <CTAButton variant="primary" href="/flagship-program">
              Flagship Program
            </CTAButton>
            <CTAButton variant="text" href="/admissions">
              Admissions
            </CTAButton>
            <CTAButton variant="text" href="/courses">
              Short Programs
            </CTAButton>
          </div>
          
          {/* Schematic pipeline diagram */}
          <div className="spacing-subsection">
            <ProcessDiagram 
              stages={['Term 1', 'Term 2', 'Term 3', 'Deployment']}
              connector="→"
            />
          </div>
        </section>

        <SectionDivider />

        {/* What HI Labs Is/Is Not Section */}
        <section className="spacing-section">
          <TwoColumnSection
            leftContent={
              <div>
                <Heading level={2} className="spacing-element">
                  What HI Labs Is
                </Heading>
                <BodyText className="spacing-element">
                  An engineering talent production system with enforced evaluation gates and supervised deployment phases.
                </BodyText>
                <BodyText className="spacing-element">
                  A 12-month in-person program with structured elimination criteria and transparent selection processes.
                </BodyText>
                <BodyText className="spacing-element">
                  A laboratory environment focused on producing deployable junior engineers through systematic training and evaluation.
                </BodyText>
                <BodyText className="spacing-element">
                  An institutional framework with clear accountability structures and documented evidence of outcomes.
                </BodyText>
              </div>
            }
            rightContent={
              <div>
                <Heading level={2} className="spacing-element">
                  What HI Labs Is Not
                </Heading>
                <BodyText className="spacing-element">
                  Not a traditional educational institution with degree programs or academic credentials.
                </BodyText>
                <BodyText className="spacing-element">
                  Not a placement agency with guaranteed job outcomes or salary promises.
                </BodyText>
                <BodyText className="spacing-element">
                  Not compatible with parallel employment or remote participation models.
                </BodyText>
                <BodyText className="spacing-element">
                  Not a certificate-driven program focused on credentials over capability development.
                </BodyText>
              </div>
            }
          />
        </section>

        <SectionDivider />

        {/* 12-Month System Overview Section */}
        <section className="spacing-section">
          <Heading level={2} className="text-center spacing-element">
            12-Month System Overview
          </Heading>
          <div className="max-w-4xl mx-auto">
            <BodyText className="spacing-element">
              The HI Labs system operates as a structured 12-month engineering talent production pipeline with two distinct phases: 
              9 months of intensive in-person training followed by 3 months of supervised deployment.
            </BodyText>
            <BodyText className="spacing-element">
              Phase I consists of three sequential terms, each with specific learning objectives, evaluation criteria, and elimination gates. 
              Candidates progress through systematic skill development with continuous assessment and transparent feedback mechanisms.
            </BodyText>
            <BodyText className="spacing-element">
              Phase II transitions candidates into supervised deployment environments where they apply acquired skills under structured 
              supervision while contributing to real engineering projects with measurable outcomes.
            </BodyText>
          </div>
        </section>

        <SectionDivider />

        {/* Term Architecture Section */}
        <section className="spacing-section">
          <Heading level={2} className="text-center spacing-element">
            Term Architecture
          </Heading>
          <TwoColumnSection
            leftContent={
              <div>
                <Heading level={3} className="spacing-element">
                  Phase I: Training Terms
                </Heading>
                <BodyText className="spacing-element">
                  <strong>Term 1:</strong> Foundational engineering principles, systematic problem-solving methodologies, 
                  and core technical skill development with weekly evaluation checkpoints.
                </BodyText>
                <BodyText className="spacing-element">
                  <strong>Term 2:</strong> Advanced technical implementation, collaborative project work, 
                  and specialized domain knowledge with mid-term elimination gates.
                </BodyText>
                <BodyText className="spacing-element">
                  <strong>Term 3:</strong> Integration projects, deployment preparation, and comprehensive evaluation 
                  leading to deployment readiness assessment.
                </BodyText>
              </div>
            }
            rightContent={
              <div>
                <Heading level={3} className="spacing-element">
                  Phase II: Supervised Deployment
                </Heading>
                <BodyText className="spacing-element">
                  Candidates are deployed to partner organizations under structured supervision protocols 
                  with defined accountability frameworks and performance measurement systems.
                </BodyText>
                <BodyText className="spacing-element">
                  Deployment includes regular evaluation cycles, feedback integration mechanisms, 
                  and documented evidence collection for outcome verification.
                </BodyText>
                <BodyText className="spacing-element">
                  Supervision maintains institutional standards while enabling real-world application 
                  of acquired engineering capabilities in production environments.
                </BodyText>
              </div>
            }
          />
        </section>

        <SectionDivider />

        {/* Admissions Preview Section */}
        <section className="spacing-section">
          <Heading level={2} className="text-center spacing-element">
            Admissions Process
          </Heading>
          <div className="max-w-4xl mx-auto">
            <BodyText className="spacing-element">
              HI Labs operates a transparent selection system designed to identify candidates with the discipline, 
              capability, and commitment required for the 12-month engineering production system.
            </BodyText>
            <BodyText className="spacing-element">
              The selection process includes application review, technical screening, structured interviews, 
              and admission decisions based on clearly defined criteria and evaluation frameworks.
            </BodyText>
            <div className="text-center spacing-element">
              <a href="/admissions" className="text-accent hover:text-primary underline">
                View complete admissions requirements and process
              </a>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Courses Preview Section */}
        <section className="spacing-section">
          <Heading level={2} className="text-center spacing-element">
            Short Programs
          </Heading>
          <div className="max-w-4xl mx-auto">
            <BodyText className="spacing-element">
              In addition to the flagship 12-month program, HI Labs offers time-bound skill-focused modules 
              designed for working professionals seeking specific technical capabilities.
            </BodyText>
            <BodyText className="spacing-element">
              These weekend programs operate independently from the flagship system with separate evaluation 
              criteria, recognition frameworks, and participant requirements.
            </BodyText>
            <div className="text-center spacing-element">
              <a href="/courses" className="text-accent hover:text-primary underline">
                Explore short program categories and schedules
              </a>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Outcomes Preview Section */}
        <section className="spacing-section">
          <Heading level={2} className="text-center spacing-element">
            Documented Evidence
          </Heading>
          <div className="max-w-4xl mx-auto">
            <BodyText className="spacing-element">
              HI Labs maintains systematic documentation of program outcomes through evaluation rubrics, 
              performance summaries, project artifacts, and deployment feedback from partner organizations.
            </BodyText>
            <BodyText className="spacing-element">
              Evidence is published according to established cadences with transparent methodologies 
              and clear boundaries regarding claims and non-claims about program effectiveness.
            </BodyText>
            <div className="text-center spacing-element">
              <a href="/outcomes" className="text-accent hover:text-primary underline">
                Review documented evidence and publication schedules
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}