/**
 * Catchment Area Section
 * Primary/Secondary catchment areas and intake logic
 */

export function CatchmentAreaSection() {
  const intakeLogic = [
    {
      number: '01',
      title: 'Geographic Distribution Protocol',
      description: 'Intake operates through systematic geographic distribution with primary/secondary catchment allocation, transportation feasibility assessment, and accommodation logistics verification ensuring operational sustainability.'
    },
    {
      number: '02',
      title: 'Capacity Management System',
      description: 'Systematic capacity management operates through cohort size optimization, facility utilization efficiency, and resource allocation protocols that maintain quality standards while maximizing operational effectiveness.'
    },
    {
      number: '03',
      title: 'Selection Priority Framework',
      description: 'Selection priority operates through systematic criteria including competency assessment results, geographic distribution requirements, commitment verification, and logistics feasibility that ensure optimal cohort composition.'
    },
    {
      number: '04',
      title: 'Logistics and Accommodation Integration',
      description: 'Intake logic integrates systematic logistics assessment including transportation accessibility, accommodation arrangements, and daily commute feasibility that support consistent attendance and program completion.'
    }
  ];

  return (
    <section className="py-24 px-8 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Catchment Area and Intake Logic
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
            The Lucknow Lab operates with systematic catchment area definition and intake logic that governs candidate 
            sourcing, selection protocols, and enrollment management to ensure effective competency development and operational efficiency.
          </p>
        </div>

        {/* Catchment Areas */}
        <div className="space-y-8 mb-16">
          <h3 className="text-2xl font-bold text-black">Catchment Area Specification</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Primary */}
            <div className="bg-black text-white rounded-2xl p-10">
              <div className="mb-6">
                <span className="inline-block bg-white text-black px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider">
                  Primary Catchment
                </span>
              </div>
              <p className="text-gray-200 leading-relaxed mb-6">
                Uttar Pradesh state with emphasis on Lucknow metropolitan area, Kanpur, Allahabad, Varanasi, and surrounding 
                districts that provide systematic access to engineering talent pipeline and transportation connectivity to the facility.
              </p>
              <div className="pt-6 border-t border-white/20">
                <p className="text-sm text-gray-300">
                  <span className="font-bold">PRIMARY FOCUS:</span> 80% of intake capacity allocated to primary catchment area 
                  candidates with established transportation and accommodation logistics.
                </p>
              </div>
            </div>

            {/* Secondary */}
            <div className="bg-white border-2 border-black rounded-2xl p-10">
              <div className="mb-6">
                <span className="inline-block bg-black text-white px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider">
                  Secondary Catchment
                </span>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Adjacent states including Madhya Pradesh, Bihar, Jharkhand, and Delhi NCR region that provide additional 
                engineering talent access with reasonable transportation connectivity and accommodation feasibility for systematic operations.
              </p>
              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-bold">SECONDARY ALLOCATION:</span> 20% of intake capacity allocated to secondary catchment 
                  area candidates with demonstrated commitment and logistics capability.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Intake Logic Framework */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-black">Intake Logic Framework</h3>
          {intakeLogic.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {item.number}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-black mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Intake Constraints */}
        <div className="mt-12 bg-gray-100 rounded-2xl p-10 border-2 border-gray-300">
          <h4 className="text-xl font-bold text-black mb-4">Intake Constraints</h4>
          <p className="text-gray-700 leading-relaxed">
            Intake operates within systematic constraints including facility capacity limits, instructor-to-candidate ratios, 
            resource availability, and operational efficiency requirements that prevent overextension and maintain quality standards.
          </p>
        </div>
      </div>
    </section>
  );
}
