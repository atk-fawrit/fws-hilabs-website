'use client';

import { useState } from 'react';
import { H2, BodyText } from '@/src/shared/components/typography';
import { ExpandableSection } from '@/src/shared/components/content';

const evidenceCategories = [
  {
    id: 1,
    number: "01",
    title: "Evaluation Rubrics",
    description: "Systematic assessment frameworks used throughout program delivery to measure participant competency development and performance progression.",
    components: [
      "Technical competency assessment criteria and scoring methodologies",
      "Performance progression tracking across program phases",
      "Elimination criteria and threshold documentation",
      "Comparative analysis of cohort performance distributions"
    ],
    value: "Provides systematic measurement of competency development and enables comparison across cohorts and time periods for program effectiveness assessment."
  },
  {
    id: 2,
    number: "02",
    title: "Performance Summaries",
    description: "Aggregated performance data documenting participant achievement levels, completion rates, and competency attainment across program components.",
    components: [
      "Cohort completion rates and elimination stage analysis",
      "Competency achievement distributions by skill domain",
      "Performance trajectory analysis throughout program phases",
      "Comparative effectiveness across different program iterations"
    ],
    value: "Demonstrates program effectiveness in developing technical competencies and provides data for continuous program improvement and stakeholder assessment."
  },
  {
    id: 3,
    number: "03",
    title: "Project Artifacts",
    description: "Tangible outputs produced by participants during program delivery, demonstrating practical application of developed competencies and real-world problem-solving capabilities.",
    components: [
      "Code repositories and technical implementations with complexity analysis",
      "System design documentation and architectural decisions",
      "Problem-solving approaches and solution methodologies",
      "Collaborative work products and team contribution evidence"
    ],
    value: "Provides concrete demonstration of participant capabilities and enables technical assessment by potential employers and industry stakeholders."
  },
  {
    id: 4,
    number: "04",
    title: "Deployment Feedback",
    description: "Systematic feedback from employer partners during supervised deployment phases, documenting participant performance in real work environments and deployment effectiveness.",
    components: [
      "Employer assessment of participant technical competency and work readiness",
      "Deployment integration success rates and adaptation timelines",
      "Supervision requirements and support intervention documentation",
      "Long-term performance tracking and retention analysis"
    ],
    value: "Validates program effectiveness in producing deployment-ready engineers and provides feedback for program refinement and employer partnership development."
  }
];

export function EvidenceCategoriesSection() {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  const handleToggle = (id: string | number) => {
    const numericId = typeof id === 'string' ? parseInt(id, 10) : id;
    setExpandedCategory(expandedCategory === numericId ? null : numericId);
  };

  return (
    <section className="mb-20">
      <div className="max-w-4xl mb-12">
        <H2 className="text-3xl font-light text-primary mb-4">Evidence Categories</H2>
        <BodyText className="text-primary/80 leading-relaxed">
          Evidence documentation encompasses four primary categories that provide comprehensive assessment 
          of program effectiveness and participant development.
        </BodyText>
      </div>

      <div className="space-y-1 max-w-5xl">
        {evidenceCategories.map((category) => (
          <ExpandableSection
            key={category.id}
            id={category.id}
            number={category.number}
            title={category.title}
            description={category.description}
            expandedId={expandedCategory}
            onToggle={handleToggle}
          >
            <div className="text-sm uppercase tracking-wide text-primary/60 mb-4 font-medium">
              Documentation Components
            </div>
            <ul className="space-y-3 mb-8">
              {category.components.map((component, idx) => (
                <li key={idx} className="text-primary/80 leading-relaxed pl-4 border-l-2 border-accent">
                  <BodyText className="text-sm">{component}</BodyText>
                </li>
              ))}
            </ul>
            <div className="bg-background border-l-4 border-primary p-6">
              <BodyText className="text-xs uppercase tracking-wide text-primary/60 mb-2 font-medium">
                Evidence Value
              </BodyText>
              <BodyText className="text-primary/80 leading-relaxed text-sm">
                {category.value}
              </BodyText>
            </div>
          </ExpandableSection>
        ))}
      </div>
    </section>
  );
}
