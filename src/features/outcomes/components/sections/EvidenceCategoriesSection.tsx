import { H2, H3, BodyText } from '@/src/shared/components/typography';

export function EvidenceCategoriesSection() {
  return (
    <section className="space-y-8">
      <H2>Evidence Categories</H2>
      
      <div className="space-y-6">
        <BodyText>
          Evidence documentation encompasses four primary categories that provide 
          comprehensive assessment of program effectiveness and participant development. 
          Each category serves specific stakeholder information requirements.
        </BodyText>
        
        <div className="space-y-12">
          {/* Evaluation Rubrics */}
          <div className="space-y-4">
            <H3 className="font-mono">01. EVALUATION RUBRICS</H3>
            <div className="pl-6 space-y-4">
              <BodyText>
                Systematic assessment frameworks used throughout program delivery to 
                measure participant competency development and performance progression.
              </BodyText>
              
              <div className="space-y-3">
                <BodyText><strong>Documentation Components:</strong></BodyText>
                <ul className="list-disc pl-6 space-y-2">
                  <li><BodyText>Technical competency assessment criteria and scoring methodologies</BodyText></li>
                  <li><BodyText>Performance progression tracking across program phases</BodyText></li>
                  <li><BodyText>Elimination criteria and threshold documentation</BodyText></li>
                  <li><BodyText>Comparative analysis of cohort performance distributions</BodyText></li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                <BodyText className="font-mono text-sm">
                  EVIDENCE VALUE: Provides systematic measurement of competency development 
                  and enables comparison across cohorts and time periods for program 
                  effectiveness assessment.
                </BodyText>
              </div>
            </div>
          </div>

          {/* Performance Summaries */}
          <div className="space-y-4">
            <H3 className="font-mono">02. PERFORMANCE SUMMARIES</H3>
            <div className="pl-6 space-y-4">
              <BodyText>
                Aggregated performance data documenting participant achievement levels, 
                completion rates, and competency attainment across program components.
              </BodyText>
              
              <div className="space-y-3">
                <BodyText><strong>Documentation Components:</strong></BodyText>
                <ul className="list-disc pl-6 space-y-2">
                  <li><BodyText>Cohort completion rates and elimination stage analysis</BodyText></li>
                  <li><BodyText>Competency achievement distributions by skill domain</BodyText></li>
                  <li><BodyText>Performance trajectory analysis throughout program phases</BodyText></li>
                  <li><BodyText>Comparative effectiveness across different program iterations</BodyText></li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                <BodyText className="font-mono text-sm">
                  EVIDENCE VALUE: Demonstrates program effectiveness in developing 
                  technical competencies and provides data for continuous program 
                  improvement and stakeholder assessment.
                </BodyText>
              </div>
            </div>
          </div>

          {/* Project Artifacts */}
          <div className="space-y-4">
            <H3 className="font-mono">03. PROJECT ARTIFACTS</H3>
            <div className="pl-6 space-y-4">
              <BodyText>
                Tangible outputs produced by participants during program delivery, 
                demonstrating practical application of developed competencies and 
                real-world problem-solving capabilities.
              </BodyText>
              
              <div className="space-y-3">
                <BodyText><strong>Documentation Components:</strong></BodyText>
                <ul className="list-disc pl-6 space-y-2">
                  <li><BodyText>Code repositories and technical implementations with complexity analysis</BodyText></li>
                  <li><BodyText>System design documentation and architectural decisions</BodyText></li>
                  <li><BodyText>Problem-solving approaches and solution methodologies</BodyText></li>
                  <li><BodyText>Collaborative work products and team contribution evidence</BodyText></li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                <BodyText className="font-mono text-sm">
                  EVIDENCE VALUE: Provides concrete demonstration of participant 
                  capabilities and enables technical assessment by potential employers 
                  and industry stakeholders.
                </BodyText>
              </div>
            </div>
          </div>

          {/* Deployment Feedback */}
          <div className="space-y-4">
            <H3 className="font-mono">04. DEPLOYMENT FEEDBACK</H3>
            <div className="pl-6 space-y-4">
              <BodyText>
                Systematic feedback from employer partners during supervised deployment 
                phases, documenting participant performance in real work environments 
                and deployment effectiveness.
              </BodyText>
              
              <div className="space-y-3">
                <BodyText><strong>Documentation Components:</strong></BodyText>
                <ul className="list-disc pl-6 space-y-2">
                  <li><BodyText>Employer assessment of participant technical competency and work readiness</BodyText></li>
                  <li><BodyText>Deployment integration success rates and adaptation timelines</BodyText></li>
                  <li><BodyText>Supervision requirements and support intervention documentation</BodyText></li>
                  <li><BodyText>Long-term performance tracking and retention analysis</BodyText></li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-4 border-l-2 border-secondary">
                <BodyText className="font-mono text-sm">
                  EVIDENCE VALUE: Validates program effectiveness in producing 
                  deployment-ready engineers and provides feedback for program 
                  refinement and employer partnership development.
                </BodyText>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
