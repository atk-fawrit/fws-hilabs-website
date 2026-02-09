/**
 * Engagement Protocol Section
 * Timeline-based design with phases
 */

import React from 'react';

export const EngagementProtocolSection: React.FC = () => {
  const phases = [
    {
      number: '01',
      title: 'Initial Assessment Phase',
      duration: '2-3 weeks',
      subtitle: 'Organizational readiness evaluation',
      items: [
        'Technical environment evaluation for junior engineer deployment suitability',
        'Supervision capacity assessment and protocol compatibility review',
        'Organizational development process analysis and integration requirements',
        'Deployment model selection based on organizational structure and requirements',
        'Risk allocation discussion and supervision boundary establishment'
      ],
      outcome: {
        title: 'Assessment Outcome',
        description: 'Organizations receive detailed evaluation report with deployment model recommendations and partnership feasibility assessment.'
      }
    },
    {
      number: '02',
      title: 'Partnership Agreement Phase',
      duration: '1-2 weeks',
      subtitle: 'Formal partnership establishment',
      items: [
        'Deployment model specification with supervision protocols and responsibilities',
        'Performance evaluation framework agreement and feedback mechanism establishment',
        'Risk allocation documentation and accountability boundary definition',
        'Engagement timeline establishment with deployment scheduling and capacity planning',
        'Performance intervention protocols and modification authority clarification'
      ],
      outcome: {
        title: 'Agreement Standard',
        description: 'All partnership agreements include detailed supervision protocols, performance standards, and intervention authorities to prevent operational conflicts.'
      }
    },
    {
      number: '03',
      title: 'Deployment Initiation Phase',
      duration: '2-4 weeks',
      subtitle: 'Engineer deployment and integration',
      items: [
        'Engineer selection and competency profile matching with organizational requirements',
        'Deployment environment preparation and technical infrastructure setup',
        'Initial supervision protocol implementation and performance baseline establishment',
        'Partner organization integration support and collaboration framework activation',
        'Performance tracking system initialization and feedback mechanism testing'
      ],
      outcome: {
        title: 'Initiation Success',
        description: 'Deployment initiation is considered successful when supervision protocols are operational and performance tracking systems are functioning effectively.'
      }
    },
    {
      number: '04',
      title: 'Ongoing Partnership Management',
      duration: 'Continuous',
      subtitle: 'Partnership optimization and expansion',
      items: [
        'Regular partnership review sessions with effectiveness assessment and optimization',
        'Deployment capacity planning and scaling discussion for additional engineer placement',
        'Protocol refinement based on performance data and feedback analysis',
        'Partnership expansion evaluation including additional deployment models or capacity',
        'Long-term strategic planning for talent pipeline integration and organizational development'
      ],
      outcome: {
        title: 'Partnership Evolution',
        description: 'Successful partnerships evolve toward increased deployment capacity and enhanced integration effectiveness through systematic optimization and expansion.'
      }
    }
  ];

  return (
    <section className="py-24 px-8 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-4xl mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 tracking-tight">
            Engagement Protocol
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Structured engagement protocols define the systematic process for organizations to evaluate, initiate, 
            and maintain partnership arrangements with HI Labs for talent deployment.
          </p>
        </div>

        {/* Phases Timeline */}
        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div key={index} className="relative">
              {/* Connector Line (except for last item) */}
              {index < phases.length - 1 && (
                <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gray-300 hidden md:block"></div>
              )}

              {/* Phase Card */}
              <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 hover:border-black transition-all duration-500">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Left: Number & Meta */}
                  <div className="md:col-span-3">
                    <div className="sticky top-8">
                      <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-6 relative z-10">
                        <span className="text-2xl font-bold">{phase.number}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-black mb-2">{phase.title}</h3>
                      <p className="text-sm text-gray-600 mb-1">{phase.subtitle}</p>
                      <div className="inline-block bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-black">
                        {phase.duration}
                      </div>
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="md:col-span-9 space-y-6">
                    {/* Items List */}
                    <div className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-start gap-3 group/item">
                          <div className="w-6 h-6 bg-gray-200 group-hover/item:bg-black rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors">
                            <svg className="w-3 h-3 text-gray-600 group-hover/item:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>

                    {/* Outcome Box */}
                    <div className="bg-gray-50 rounded-2xl p-6 border-l-4 border-black">
                      <h4 className="font-bold text-black mb-2">{phase.outcome.title}</h4>
                      <p className="text-gray-700 text-sm leading-relaxed">{phase.outcome.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
