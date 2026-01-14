import { Metadata } from 'next';
import { H1, H2, H3 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { SectionDivider, CTAButton } from '@/src/shared/components/content';

export const metadata: Metadata = {
  title: 'Short Programs - HI Labs',
  description: 'Weekend skill-focused modules for working professionals seeking specific technical capabilities, separate from the flagship program.',
  alternates: {
    canonical: '/courses/',
  },
};

export default function CoursesPage() {
  return (
    <div className="container-institutional">
      <H1>Short Programs</H1>
      
      {/* Boundary Statement Section */}
      <section className="space-y-8">
        <H2>Program Boundaries</H2>
        
        <div className="space-y-6">
          <div className="bg-warning/10 border-l-4 border-warning p-6 space-y-4">
            <H3 className="text-warning font-mono">CLEAR SEPARATION</H3>
            <BodyText className="font-mono text-sm">
              Short Programs are completely separate from the HI Labs Flagship Program. 
              These are weekend and time-bound skill-focused modules that do not provide 
              pathway to the 12-month engineering production system.
            </BodyText>
          </div>
          
          <BodyText>
            Short Programs operate as standalone educational modules designed for working 
            professionals and students seeking specific skill development. They do not 
            constitute preparation for, qualification for, or guarantee admission to the 
            Flagship Program.
          </BodyText>
          
          <div className="space-y-4">
            <H3 className="font-mono">PROGRAM PURPOSE</H3>
            <div className="pl-6 space-y-4">
              <BodyText>
                Short Programs serve professionals who require targeted skill development 
                without the commitment of full-time, long-term training. These modules 
                address specific technical competencies through concentrated instruction 
                and practical application.
              </BodyText>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><BodyText>Skill-specific training for working professionals</BodyText></li>
                <li><BodyText>Weekend and evening format to accommodate employment</BodyText></li>
                <li><BodyText>Practical application focus with measurable outcomes</BodyText></li>
                <li><BodyText>Industry-relevant competencies without comprehensive career transition</BodyText></li>
              </ul>
            </div>
          </div>
          
          <BodyText>
            Participants should not expect career transformation, placement assistance, 
            or comprehensive engineering education. Short Programs provide focused skill 
            development within clearly defined boundaries.
          </BodyText>
        </div>
      </section>

      <SectionDivider />

      {/* Operating Format Section */}
      <section className="space-y-8">
        <H2>Operating Format and Rules</H2>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <H3 className="font-mono">OPERATING FORMAT</H3>
            <div className="pl-6 space-y-4">
              <BodyText>
                Short Programs operate on weekend schedules to accommodate working professionals. 
                Sessions are conducted in-person at the Lucknow facility with structured 
                timelines and specific deliverable requirements.
              </BodyText>
              
              <div className="space-y-3">
                <BodyText><strong>Schedule Structure:</strong></BodyText>
                <ul className="list-disc pl-6 space-y-2">
                  <li><BodyText>Saturday and Sunday sessions, 0900-1700 hours</BodyText></li>
                  <li><BodyText>4-8 weekend program duration depending on module complexity</BodyText></li>
                  <li><BodyText>Maximum 20 participants per cohort for effective instruction</BodyText></li>
                  <li><BodyText>Mandatory attendance for all scheduled sessions</BodyText></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <H3 className="font-mono">PROGRAM RULES</H3>
            <div className="pl-6 space-y-4">
              <div className="bg-gray-50 border-l-4 border-secondary p-4 space-y-3">
                <ul className="list-disc pl-6 space-y-2 font-mono text-sm">
                  <li><BodyText className="font-mono">No make-up sessions for missed attendance</BodyText></li>
                  <li><BodyText className="font-mono">Completion requires attendance at 80% of sessions minimum</BodyText></li>
                  <li><BodyText className="font-mono">Individual work required between sessions with deadline compliance</BodyText></li>
                  <li><BodyText className="font-mono">No refunds after program commencement</BodyText></li>
                  <li><BodyText className="font-mono">Professional conduct standards apply to all interactions</BodyText></li>
                  <li><BodyText className="font-mono">Completion certificate issued only upon meeting all requirements</BodyText></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Program Categories Section */}
      <section className="space-y-8">
        <H2>Program Categories</H2>
        
        <div className="space-y-6">
          <BodyText>
            Short Programs are organized into categories based on skill domain and 
            application context. Each category addresses specific professional development 
            needs without attempting comprehensive coverage of engineering disciplines.
          </BodyText>
          
          <div className="space-y-12">
            {/* Web Development Category */}
            <div className="space-y-4">
              <H3 className="font-mono">01. WEB DEVELOPMENT FUNDAMENTALS</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  <strong>Duration:</strong> 6 weekends | <strong>Prerequisites:</strong> Basic computer literacy
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Skill Coverage:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>HTML structure and semantic markup</BodyText></li>
                    <li><BodyText>CSS styling and responsive design principles</BodyText></li>
                    <li><BodyText>JavaScript fundamentals and DOM manipulation</BodyText></li>
                    <li><BodyText>Version control with Git and collaborative workflows</BodyText></li>
                  </ul>
                </div>
                
                <BodyText className="text-sm text-secondary">
                  Suitable for professionals seeking to understand web technologies or 
                  add basic web development capabilities to existing skill sets.
                </BodyText>
              </div>
            </div>

            {/* Data Analysis Category */}
            <div className="space-y-4">
              <H3 className="font-mono">02. DATA ANALYSIS WITH PYTHON</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  <strong>Duration:</strong> 8 weekends | <strong>Prerequisites:</strong> Basic mathematics, spreadsheet experience
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Skill Coverage:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Python programming fundamentals for data manipulation</BodyText></li>
                    <li><BodyText>Data cleaning and preparation techniques</BodyText></li>
                    <li><BodyText>Statistical analysis and visualization with libraries</BodyText></li>
                    <li><BodyText>Report generation and insight communication</BodyText></li>
                  </ul>
                </div>
                
                <BodyText className="text-sm text-secondary">
                  Designed for analysts, researchers, and professionals who work with 
                  data and need programmatic analysis capabilities.
                </BodyText>
              </div>
            </div>

            {/* Database Management Category */}
            <div className="space-y-4">
              <H3 className="font-mono">03. DATABASE DESIGN AND MANAGEMENT</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  <strong>Duration:</strong> 4 weekends | <strong>Prerequisites:</strong> Basic understanding of data organization
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Skill Coverage:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Relational database design principles and normalization</BodyText></li>
                    <li><BodyText>SQL query writing for data retrieval and manipulation</BodyText></li>
                    <li><BodyText>Database administration and performance optimization</BodyText></li>
                    <li><BodyText>Backup, recovery, and security implementation</BodyText></li>
                  </ul>
                </div>
                
                <BodyText className="text-sm text-secondary">
                  Appropriate for professionals managing organizational data or 
                  requiring structured data storage and retrieval capabilities.
                </BodyText>
              </div>
            </div>

            {/* System Administration Category */}
            <div className="space-y-4">
              <H3 className="font-mono">04. LINUX SYSTEM ADMINISTRATION</H3>
              <div className="pl-6 space-y-4">
                <BodyText>
                  <strong>Duration:</strong> 6 weekends | <strong>Prerequisites:</strong> Basic command line familiarity
                </BodyText>
                
                <div className="space-y-3">
                  <BodyText><strong>Skill Coverage:</strong></BodyText>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><BodyText>Linux system installation, configuration, and maintenance</BodyText></li>
                    <li><BodyText>User management, permissions, and security protocols</BodyText></li>
                    <li><BodyText>Network configuration and service management</BodyText></li>
                    <li><BodyText>Automation scripting and system monitoring</BodyText></li>
                  </ul>
                </div>
                
                <BodyText className="text-sm text-secondary">
                  Targeted at IT professionals and technical staff requiring 
                  server administration and system management competencies.
                </BodyText>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Evaluation and Recognition Section */}
      <section className="space-y-8">
        <H2>Evaluation and Recognition Approach</H2>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <H3 className="font-mono">EVALUATION METHODOLOGY</H3>
            <div className="pl-6 space-y-4">
              <BodyText>
                Short Programs employ practical evaluation focused on skill demonstration 
                and application competency. Assessment measures ability to apply learned 
                concepts in realistic scenarios rather than theoretical knowledge retention.
              </BodyText>
              
              <div className="space-y-3">
                <BodyText><strong>Evaluation Components:</strong></BodyText>
                <ul className="list-disc pl-6 space-y-2">
                  <li><BodyText>Weekly practical assignments with specific deliverable requirements</BodyText></li>
                  <li><BodyText>Mid-program project demonstrating skill integration</BodyText></li>
                  <li><BodyText>Final capstone project with real-world application</BodyText></li>
                  <li><BodyText>Peer collaboration assessment during group activities</BodyText></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <H3 className="font-mono">RECOGNITION FRAMEWORK</H3>
            <div className="pl-6 space-y-4">
              <BodyText>
                Completion recognition is based on demonstrated competency rather than 
                attendance or effort. Participants must meet specific performance 
                thresholds to receive program completion certification.
              </BodyText>
              
              <div className="bg-gray-50 border-l-4 border-accent p-4 space-y-3">
                <BodyText className="font-mono text-sm">
                  COMPLETION REQUIREMENTS: 80% attendance minimum, successful completion 
                  of all assignments, passing grade on capstone project, demonstration 
                  of practical skill application.
                </BodyText>
              </div>
              
              <BodyText>
                Certificates indicate specific competencies achieved and include project 
                portfolio references. Recognition does not constitute professional 
                certification or guarantee employment qualification.
              </BodyText>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Candidate Fit Section */}
      <section className="space-y-8">
        <H2>Candidate Suitability</H2>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <H3 className="font-mono">GOOD FIT CANDIDATES</H3>
            <div className="pl-6 space-y-4">
              <BodyText>
                Short Programs are designed for specific candidate profiles who can 
                benefit from focused skill development within the program constraints 
                and time commitments.
              </BodyText>
              
              <div className="space-y-3">
                <BodyText><strong>Ideal Participants:</strong></BodyText>
                <ul className="list-disc pl-6 space-y-2">
                  <li><BodyText>Working professionals seeking to add specific technical skills</BodyText></li>
                  <li><BodyText>Students wanting practical experience beyond academic coursework</BodyText></li>
                  <li><BodyText>Career changers exploring technical fields before major transitions</BodyText></li>
                  <li><BodyText>Entrepreneurs needing technical competencies for business development</BodyText></li>
                  <li><BodyText>Professionals updating skills to match industry evolution</BodyText></li>
                </ul>
              </div>
              
              <div className="bg-accent/10 border-l-4 border-accent p-4 space-y-3">
                <BodyText className="font-mono text-sm">
                  SUCCESS INDICATORS: Clear learning objectives, realistic time commitment 
                  capacity, willingness to engage in practical work, understanding of 
                  program limitations and scope.
                </BodyText>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <H3 className="font-mono">POOR FIT CANDIDATES</H3>
            <div className="pl-6 space-y-4">
              <BodyText>
                Certain candidate expectations and circumstances are incompatible with 
                Short Program structure and outcomes. These candidates should consider 
                alternative educational approaches.
              </BodyText>
              
              <div className="space-y-3">
                <BodyText><strong>Unsuitable Expectations:</strong></BodyText>
                <div className="bg-warning/10 border-l-4 border-warning p-4 space-y-3">
                  <ul className="list-disc pl-6 space-y-2 font-mono text-sm">
                    <li><BodyText className="font-mono">Expecting comprehensive career transformation from short modules</BodyText></li>
                    <li><BodyText className="font-mono">Seeking placement assistance or job guarantee outcomes</BodyText></li>
                    <li><BodyText className="font-mono">Unable to commit to weekend schedule consistently</BodyText></li>
                    <li><BodyText className="font-mono">Preferring theoretical learning over practical application</BodyText></li>
                    <li><BodyText className="font-mono">Expecting online or flexible attendance options</BodyText></li>
                    <li><BodyText className="font-mono">Seeking preparation for HI Labs Flagship Program admission</BodyText></li>
                  </ul>
                </div>
              </div>
              
              <BodyText>
                Candidates with these expectations should explore comprehensive training 
                programs, online courses, or traditional educational institutions that 
                better match their requirements and timeline preferences.
              </BodyText>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Program Schedule CTA */}
      <section className="space-y-8">
        <H2>Program Schedule and Registration</H2>
        
        <div className="space-y-6">
          <BodyText>
            Short Program schedules are published quarterly with specific start dates, 
            duration, and capacity information. Registration operates on a first-come, 
            first-served basis with prerequisite verification.
          </BodyText>
          
          <div className="space-y-4">
            <H3 className="font-mono">REGISTRATION PROCESS</H3>
            <div className="pl-6 space-y-4">
              <ul className="list-disc pl-6 space-y-2">
                <li><BodyText>Review current schedule and program descriptions</BodyText></li>
                <li><BodyText>Verify prerequisite requirements for selected program</BodyText></li>
                <li><BodyText>Submit registration with required documentation</BodyText></li>
                <li><BodyText>Complete payment within 48 hours of registration confirmation</BodyText></li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 border-l-4 border-secondary p-4 space-y-3">
            <BodyText className="font-mono text-sm">
              CAPACITY LIMITS: Programs have maximum enrollment to ensure effective 
              instruction. Registration closes when capacity is reached, regardless 
              of scheduled start date.
            </BodyText>
          </div>
          
          <div className="pt-4">
            <CTAButton variant="primary" href="/schedule" external>
              View Current Schedule
            </CTAButton>
          </div>
          
          <BodyText className="text-sm text-secondary">
            Program schedules and availability are updated monthly. Registration 
            confirmation includes detailed program information, location details, 
            and preparation requirements.
          </BodyText>
        </div>
      </section>
    </div>
  );
}