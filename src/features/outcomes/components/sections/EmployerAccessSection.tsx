/**
 * Employer Evidence Access Section
 * Premium black background CTA section
 */

const frameworkComponents = [
  'Individual participant competency profiles with detailed assessment data',
  'Project portfolio access with technical complexity analysis',
  'Deployment model documentation and supervision requirements',
  'Performance tracking protocols and feedback mechanisms'
];

export function EmployerAccessSection() {
  return (
    <section className="py-24 px-8 md:px-16 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            Employer Evidence Access
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
            Comprehensive evidence documentation is available to employer partners and organizations evaluating HI Labs 
            as a talent pipeline. Access provides detailed assessment data for informed deployment decisions and partnership evaluation.
          </p>
        </div>

        {/* Deployment Framework Access */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 md:p-12 border border-white/20 mb-10">
          <h3 className="text-2xl font-bold mb-4 text-white">Deployment Framework Access</h3>
          <p className="text-gray-200 leading-relaxed mb-8">
            Employer partners receive access to the complete deployment framework including participant assessment data, 
            competency documentation, and supervision protocols for informed deployment planning.
          </p>

          {/* Framework Components */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold text-gray-200">Framework Components</h4>
            <div className="space-y-3">
              {frameworkComponents.map((component, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-white/60 font-mono text-sm mt-1">—</span>
                  <p className="text-gray-200 leading-relaxed">{component}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Employer Benefit */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-sm text-gray-300">
              <span className="font-semibold">Employer Benefit:</span> Complete transparency in participant capabilities 
              and deployment requirements enables informed decision-making and effective integration planning.
            </p>
          </div>
        </div>

        {/* Evidence Verification */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 md:p-12 border border-white/20 mb-12">
          <h3 className="text-2xl font-bold mb-4 text-white">Evidence Verification</h3>
          <p className="text-gray-200 leading-relaxed mb-6">
            All evidence documentation includes verification protocols and methodology transparency to enable employer 
            assessment of data reliability and relevance to organizational requirements.
          </p>
          <div className="pt-6 border-t border-white/20">
            <p className="text-sm text-gray-300">
              <span className="font-semibold">Verification Standards:</span> Evidence collection methodologies, assessment 
              criteria, and data analysis frameworks are fully documented and available for employer review and validation.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-white/20">
            Access Deployment Framework
          </button>
          <p className="text-sm text-gray-400 mt-6 max-w-3xl mx-auto">
            Deployment framework access is restricted to verified employer partners and organizations with documented talent 
            acquisition requirements. Access includes comprehensive evidence documentation and deployment protocols.
          </p>
        </div>
      </div>
    </section>
  );
}
