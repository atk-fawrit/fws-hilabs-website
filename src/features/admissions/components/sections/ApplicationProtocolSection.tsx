/**
 * Application Protocol Section
 * 
 * Modern timeline-based design for application process
 */

import React from 'react';

export const ApplicationProtocolSection: React.FC = () => {
  const timelineStages = [
    {
      stage: 'Application Submission',
      items: [
        'Submit complete application',
        'Response within 5 business days',
        'Screening invitation or rejection'
      ]
    },
    {
      stage: 'Screening Assessment',
      items: [
        'Schedule within 10 business days',
        'Complete 3-hour assessment',
        'Results within 3 business days'
      ]
    },
    {
      stage: 'Technical Interview',
      items: [
        'Schedule within 7 business days',
        '90-minute interview session',
        'Feedback within 2 business days'
      ]
    },
    {
      stage: 'Admission Decision',
      items: [
        'Final decision within 7 business days',
        'Written notification with details',
        'Program placement or waitlist status'
      ]
    }
  ];

  const protocols = [
    'All communications conducted via email with documented timestamps',
    'Candidates must respond to scheduling requests within 48 hours',
    'Missed deadlines or non-responses result in automatic rejection',
    'No extensions or special accommodations for timeline requirements',
    'Questions directed to admissions@hilabs.in with 24-hour response commitment'
  ];

  return (
    <section className="w-full bg-gray-50 py-20 px-8 md:px-16 lg:px-24">
      <div className="space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            Application Protocol
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed font-light">
            The application process operates on a structured timeline with specific 
            response protocols. Candidates must follow the prescribed sequence and 
            meet all deadlines for consideration.
          </p>
        </div>
        
        {/* Timeline Section */}
        <div>
          <h3 className="text-2xl font-bold text-black mb-8">Application Timeline</h3>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            <div className="space-y-8">
              {timelineStages.map((stage, index) => (
                <div key={index} className="relative pl-16">
                  {/* Circle marker */}
                  <div className="absolute left-0 top-0 w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-medium">
                    {index + 1}
                  </div>
                  
                  {/* Content card */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-lg font-medium text-black mb-4">
                      {stage.stage}
                    </h4>
                    <ul className="space-y-2">
                      {stage.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="text-gray-700 font-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Response Protocols */}
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-black mb-6">Response Protocols</h3>
          <div className="space-y-4">
            {protocols.map((protocol, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700 font-light leading-relaxed flex-1">{protocol}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Admission Confirmation */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">Admission Confirmation</h3>
          <p className="text-lg text-white/90 leading-relaxed font-light mb-6">
            Admitted candidates receive written confirmation with program details, 
            start date, and pre-program requirements. Confirmation must be returned 
            within 72 hours to secure program placement.
          </p>
          <div className="bg-white/10 backdrop-blur-sm border-l-4 border-white p-6 rounded-r-lg">
            <p className="text-sm text-white/90 font-light leading-relaxed">
              <span className="font-medium text-white">CONFIRMATION REQUIREMENTS:</span> Signed commitment agreement, financial verification, 
              relocation timeline, emergency contact information, medical clearance documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
