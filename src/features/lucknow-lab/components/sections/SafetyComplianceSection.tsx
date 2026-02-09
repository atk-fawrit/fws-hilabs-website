/**
 * Safety and Compliance Section
 * Safety protocols with operational boundaries
 */

const safetyItems = [
  {
    number: '01',
    title: 'Physical Safety Systems',
    items: [
      'Fire safety systems with systematic detection, suppression, and evacuation protocols',
      'Emergency evacuation procedures with designated routes and assembly point coordination',
      'First aid capabilities with trained personnel and systematic medical response protocols',
      'Incident response procedures with systematic documentation and follow-up protocols'
    ]
  },
  {
    number: '02',
    title: 'Security and Access Control',
    items: [
      'Access control systems with systematic authorization and monitoring protocols',
      'Surveillance protocols with appropriate monitoring and privacy boundary maintenance',
      'Asset protection measures with systematic inventory and security protocols',
      'Unauthorized access prevention with systematic detection and response procedures'
    ]
  },
  {
    number: '03',
    title: 'Regulatory Compliance Framework',
    items: [
      'Educational regulations compliance with systematic documentation and audit protocols',
      'Business operation compliance with licensing requirements and regulatory reporting',
      'Safety standard maintenance with systematic inspection and compliance verification',
      'Documentation requirements with systematic record keeping and audit trail maintenance'
    ]
  },
  {
    number: '04',
    title: 'Health and Wellness Protocols',
    items: [
      'Health monitoring systems with systematic assessment and intervention protocols',
      'Wellness support provision with appropriate resources and professional referral systems',
      'Mental health resources with systematic support and professional intervention capability',
      'Intervention procedures with systematic escalation and external resource coordination'
    ]
  }
];

export function SafetyComplianceSection() {
  return (
    <section className="py-24 px-8 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Safety and Compliance Boundaries
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
            The Lucknow Lab maintains systematic safety protocols and compliance boundaries with documented procedures, emergency 
            response systems, and regulatory adherence that ensure operational safety and institutional integrity throughout all 
            facility operations.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          {safetyItems.map((section, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-10 border-2 border-gray-200">
              <div className="flex items-start gap-6 mb-6">
                <div className="w-14 h-14 bg-black text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {section.number}
                </div>
                <h3 className="text-2xl font-bold text-black">
                  {section.title}
                </h3>
              </div>
              <div className="ml-20 space-y-3">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <span className="text-gray-400 font-mono text-sm mt-1">—</span>
                    <p className="text-gray-700 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Operational Boundaries */}
        <div className="bg-black text-white rounded-2xl p-10">
          <h3 className="text-2xl font-bold mb-4 text-white">Operational Boundaries</h3>
          <p className="text-gray-200 leading-relaxed">
            Safety and compliance protocols exclude facility photography, comfort emphasis, and marketing facility representation. 
            All safety measures operate through systematic functionality and regulatory compliance rather than promotional or 
            comfort-focused messaging.
          </p>
        </div>
      </div>
    </section>
  );
}
