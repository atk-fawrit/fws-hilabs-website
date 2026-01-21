/**
 * Engagement Protocol Section
 * 
 * Displays the four-phase engagement protocol using ProcessCard components
 */

import React from 'react';
import { H2 } from '@/src/shared/components/typography';
import { BodyText } from '@/src/shared/components/typography';
import { ProcessCard } from '@/src/shared/components/content';

const engagementPhases = [
  {
    stepNumber: "01",
    title: "Initial Assessment Phase",
    duration: "2-3 weeks",
    subtitle: "Organizational readiness evaluation",
    sections: [
      {
        title: "Assessment Components",
        items: [
          "Technical environment evaluation for junior engineer deployment suitability",
          "Supervision capacity assessment and protocol compatibility review",
          "Organizational development process analysis and integration requirements",
          "Deployment model selection based on organizational structure and requirements",
          "Risk allocation discussion and supervision boundary establishment"
        ]
      }
    ],
    warningSection: {
      title: "Assessment Outcome",
      content: "Organizations receive detailed evaluation report with deployment model recommendations and partnership feasibility assessment."
    }
  },
  {
    stepNumber: "02",
    title: "Partnership Agreement Phase",
    duration: "1-2 weeks",
    subtitle: "Formal partnership establishment",
    sections: [
      {
        title: "Agreement Components",
        items: [
          "Deployment model specification with supervision protocols and responsibilities",
          "Performance evaluation framework agreement and feedback mechanism establishment",
          "Risk allocation documentation and accountability boundary definition",
          "Engagement timeline establishment with deployment scheduling and capacity planning",
          "Performance intervention protocols and modification authority clarification"
        ]
      }
    ],
    warningSection: {
      title: "Agreement Standard",
      content: "All partnership agreements include detailed supervision protocols, performance standards, and intervention authorities to prevent operational conflicts."
    }
  },
  {
    stepNumber: "03",
    title: "Deployment Initiation Phase",
    duration: "2-4 weeks",
    subtitle: "Engineer deployment and integration",
    sections: [
      {
        title: "Initiation Components",
        items: [
          "Engineer selection and competency profile matching with organizational requirements",
          "Deployment environment preparation and technical infrastructure setup",
          "Initial supervision protocol implementation and performance baseline establishment",
          "Partner organization integration support and collaboration framework activation",
          "Performance tracking system initialization and feedback mechanism testing"
        ]
      }
    ],
    warningSection: {
      title: "Initiation Success",
      content: "Deployment initiation is considered successful when supervision protocols are operational and performance tracking systems are functioning effectively."
    }
  },
  {
    stepNumber: "04",
    title: "Ongoing Partnership Management",
    duration: "Continuous",
    subtitle: "Partnership optimization and expansion",
    sections: [
      {
        title: "Management Components",
        items: [
          "Regular partnership review sessions with effectiveness assessment and optimization",
          "Deployment capacity planning and scaling discussion for additional engineer placement",
          "Protocol refinement based on performance data and feedback analysis",
          "Partnership expansion evaluation including additional deployment models or capacity",
          "Long-term strategic planning for talent pipeline integration and organizational development"
        ]
      }
    ],
    warningSection: {
      title: "Partnership Evolution",
      content: "Successful partnerships evolve toward increased deployment capacity and enhanced integration effectiveness through systematic optimization and expansion."
    }
  }
];

export const EngagementProtocolSection: React.FC = () => {
  return (
    <section className="mb-16">
      <div className="max-w-4xl mb-12">
        <H2 className="text-3xl font-light text-primary mb-4">Engagement Protocol</H2>
        <BodyText className="text-primary/70 leading-relaxed">
          Structured engagement protocols define the systematic process for organizations to evaluate, initiate, 
          and maintain partnership arrangements with HI Labs for talent deployment.
        </BodyText>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {engagementPhases.map((phase) => (
          <ProcessCard
            key={phase.stepNumber}
            stepNumber={phase.stepNumber}
            title={phase.title}
            duration={phase.duration}
            subtitle={phase.subtitle}
            sections={phase.sections}
            warningSection={phase.warningSection}
          />
        ))}
      </div>
    </section>
  );
};
