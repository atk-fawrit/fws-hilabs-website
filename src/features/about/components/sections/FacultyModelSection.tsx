/**
 * Faculty Model Section
 * Displays faculty role specifications and collaboration protocols
 */

import React from 'react';

const instructorRole = {
  title: 'Instructor Role Specification',
  description: 'Instructors operate systematic competency development protocols with assessment authority, elimination decision responsibility, and performance tracking accountability within defined domain areas.',
  responsibilities: [
    'Systematic competency development protocol implementation and maintenance',
    'Assessment criteria application and elimination decision execution',
    'Performance tracking documentation and intervention protocol activation',
    'Competency development effectiveness measurement and optimization',
    'Institutional standard compliance and quality assurance participation',
  ],
  qualifications: [
    'Demonstrated systematic competency development experience with documented outcomes',
    'Assessment protocol expertise and elimination decision authority capability',
    'Technical domain expertise appropriate for assigned competency areas',
    'Institutional discipline commitment and protocol compliance capability',
  ],
  authority: 'Instructors maintain authority for competency assessment, elimination decisions, and performance intervention within assigned domain responsibilities.',
};

const trainerRole = {
  title: 'Trainer Role Specification',
  description: 'Trainers operate systematic skill development protocols with performance support responsibility, competency reinforcement accountability, and specialized technical domain expertise.',
  responsibilities: [
    'Systematic skill development protocol implementation and technical support',
    'Competency reinforcement activities and performance optimization support',
    'Specialized technical domain expertise provision and application guidance',
    'Performance support documentation and competency development assistance',
    'Instructor collaboration and systematic protocol support participation',
  ],
  qualifications: [
    'Specialized technical domain expertise with practical application experience',
    'Systematic skill development capability and performance support experience',
    'Competency reinforcement protocol expertise and optimization capability',
    'Collaborative protocol participation and institutional standard compliance',
  ],
  scope: 'Trainers operate under instructor authority with specialized technical support responsibility rather than independent assessment or elimination decision authority.',
};

export const FacultyModelSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-8 md:px-16 lg:px-24">
      <div className="space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            Faculty Model
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed font-light">
            HI Labs operates through systematic faculty roles with distinct responsibilities, 
            accountability structures, and performance requirements that distinguish instructional 
            and training functions within the institutional framework.
          </p>
        </div>
        
        {/* Roles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Instructor Role Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-900 text-white p-6">
              <h3 className="text-xl font-medium text-white uppercase tracking-wider">
                {instructorRole.title}
              </h3>
            </div>
            <div className="p-6 space-y-6">
              <p className="text-gray-700 leading-relaxed font-light">
                {instructorRole.description}
              </p>
              
              <div>
                <h4 className="font-medium text-sm mb-3 text-black uppercase tracking-wider">
                  Responsibilities
                </h4>
                <ul className="space-y-2">
                  {instructorRole.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-3 text-black uppercase tracking-wider">
                  Qualifications
                </h4>
                <ul className="space-y-2">
                  {instructorRole.qualifications.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white border-l-4 border-gray-900 p-4">
                <h5 className="font-medium text-xs uppercase mb-2 text-black tracking-wider">
                  Instructor Authority
                </h5>
                <p className="text-sm text-gray-700 font-light">{instructorRole.authority}</p>
              </div>
            </div>
          </div>
          
          {/* Trainer Role Card */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-900 text-white p-6">
              <h3 className="text-xl font-medium text-white uppercase tracking-wider">
                {trainerRole.title}
              </h3>
            </div>
            <div className="p-6 space-y-6">
              <p className="text-gray-700 leading-relaxed font-light">
                {trainerRole.description}
              </p>
              
              <div>
                <h4 className="font-medium text-sm mb-3 text-black uppercase tracking-wider">
                  Responsibilities
                </h4>
                <ul className="space-y-2">
                  {trainerRole.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-3 text-black uppercase tracking-wider">
                  Qualifications
                </h4>
                <ul className="space-y-2">
                  {trainerRole.qualifications.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <span className="font-light">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white border-l-4 border-gray-900 p-4">
                <h5 className="font-medium text-xs uppercase mb-2 text-black tracking-wider">
                  Trainer Scope
                </h5>
                <p className="text-sm text-gray-700 font-light">{trainerRole.scope}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration Section */}
        <div className="bg-gray-100 border-l-4 border-gray-900 p-8 rounded-r-lg">
          <h3 className="text-lg font-medium text-black mb-6 uppercase tracking-wider">
            Role Distinction and Collaboration
          </h3>
          <p className="text-gray-700 leading-relaxed font-light mb-6">
            Instructor and trainer roles operate through systematic collaboration with clear 
            authority boundaries, responsibility allocation, and performance accountability that 
            prevents role confusion or authority conflicts.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-black mb-3">Authority Boundaries</h4>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <span className="font-medium">Instructor Authority:</span>
                  <span className="font-light"> Assessment decisions, elimination authority, competency development protocol modification, performance intervention activation.</span>
                </div>
                <div>
                  <span className="font-medium">Trainer Authority:</span>
                  <span className="font-light"> Technical support provision, skill development optimization, specialized domain guidance, performance support documentation.</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-black mb-3">Collaboration Protocols</h4>
              <ul className="space-y-2">
                {[
                  'Systematic communication protocols for performance data sharing',
                  'Competency development collaboration with instructor oversight',
                  'Performance intervention coordination with clear decision authority',
                  'Quality assurance participation with shared responsibility'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
