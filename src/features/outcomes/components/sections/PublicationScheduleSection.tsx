/**
 * Publication Schedule Section
 * Premium design with quarterly, annual, and ad hoc publications
 */

export function PublicationScheduleSection() {
  return (
    <section className="py-24 px-8 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Evidence Publication Schedule
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
            Evidence documentation is published according to a structured schedule that ensures systematic data collection 
            while maintaining participant privacy and institutional operational requirements.
          </p>
        </div>

        {/* Publications */}
        <div className="space-y-8">
          {/* Quarterly Publications */}
          <div className="bg-black text-white rounded-2xl p-10 md:p-12">
            <div className="space-y-8">
              {/* Header */}
              <div>
                <div className="inline-block bg-white text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  Quarterly
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Quarterly Publications</h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  {['January', 'April', 'July', 'October'].map((month) => (
                    <span key={month} className="bg-white/20 px-4 py-2 rounded-lg text-sm font-semibold">
                      {month}
                    </span>
                  ))}
                </div>
              </div>

              {/* Components */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-gray-200">Publication Components</h4>
                <div className="space-y-3">
                  {[
                    'Cohort performance summaries with competency achievement distributions',
                    'Program completion rates and elimination stage analysis',
                    'Evaluation rubric effectiveness assessment and refinements',
                    'Deployment feedback aggregation and trend analysis'
                  ].map((component, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-white/60 font-mono text-sm mt-1">—</span>
                      <p className="text-gray-200 leading-relaxed">{component}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Scope */}
              <div className="pt-6 border-t border-white/20">
                <p className="text-sm text-gray-300">
                  <span className="font-semibold">Data Scope:</span> Quarterly publications include data from completed 
                  program phases and deployment periods with sufficient time for comprehensive analysis and verification.
                </p>
              </div>
            </div>
          </div>

          {/* Annual Reports */}
          <div className="bg-white rounded-2xl p-10 md:p-12 border-2 border-black">
            <div className="space-y-8">
              {/* Header */}
              <div>
                <div className="inline-block bg-black text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  Annual
                </div>
                <h3 className="text-3xl font-bold mb-4">Annual Comprehensive Reports</h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    December
                  </span>
                </div>
              </div>

              {/* Components */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-gray-700">Report Components</h4>
                <div className="space-y-3">
                  {[
                    'Year-over-year program effectiveness comparison and trend analysis',
                    'Comprehensive project artifact portfolio with technical complexity assessment',
                    'Employer feedback synthesis and deployment model effectiveness',
                    'Program refinement documentation and methodology improvements'
                  ].map((component, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-gray-400 font-mono text-sm mt-1">—</span>
                      <p className="text-gray-700 leading-relaxed">{component}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Analysis Depth */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Analysis Depth:</span> Annual reports provide comprehensive assessment 
                  of program effectiveness with sufficient data volume for statistical significance and trend identification.
                </p>
              </div>
            </div>
          </div>

          {/* Ad Hoc Updates */}
          <div className="bg-white rounded-2xl p-10 md:p-12 border-2 border-gray-300">
            <div className="space-y-8">
              {/* Header */}
              <div>
                <div className="inline-block bg-gray-700 text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  As Required
                </div>
                <h3 className="text-3xl font-bold mb-4">Ad Hoc Methodology Updates</h3>
              </div>

              {/* Components */}
              <div>
                <h4 className="text-lg font-bold mb-4 text-gray-700">Update Components</h4>
                <div className="space-y-3">
                  {[
                    'Evaluation rubric modifications with rationale and impact analysis',
                    'Evidence collection methodology improvements and validation',
                    'Data analysis framework updates and statistical methodology changes',
                    'Publication format modifications and stakeholder feedback integration'
                  ].map((component, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-gray-400 font-mono text-sm mt-1">—</span>
                      <p className="text-gray-700 leading-relaxed">{component}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transparency Commitment */}
              <div className="pt-6 border-t border-gray-300">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Transparency Commitment:</span> All methodology changes are documented 
                  and published to maintain evidence integrity and enable stakeholder assessment of data reliability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 max-w-4xl">
          <p className="text-gray-700 leading-relaxed">
            Publication schedules are maintained consistently to enable stakeholder planning and assessment. Evidence is 
            published in formats accessible to employers, candidates, and institutional stakeholders without promotional 
            interpretation or marketing enhancement.
          </p>
        </div>
      </div>
    </section>
  );
}
