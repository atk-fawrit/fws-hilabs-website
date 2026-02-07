/**
 * Infrastructure Section
 * Grid layout with infrastructure categories
 */

const infrastructure = [
  {
    number: '01',
    title: 'Workspace and Learning Areas',
    items: [
      'Dedicated learning spaces with systematic seating and workspace allocation',
      'Practical application areas with technical equipment and resource access',
      'Assessment spaces with individual workstation and monitoring capability',
      'Collaboration zones with systematic group work and project development support'
    ]
  },
  {
    number: '02',
    title: 'Technical Infrastructure',
    items: [
      'Computing workstations with systematic software and development environment provision',
      'High-speed internet connectivity with reliable bandwidth and network security',
      'Development tools and software licenses for systematic competency development',
      'Technical equipment including servers, networking hardware, and testing devices'
    ]
  },
  {
    number: '03',
    title: 'Operational Support Systems',
    items: [
      'Reliable power supply with backup systems and uninterrupted operation capability',
      'Climate control systems maintaining optimal learning environment conditions',
      'Security systems with access control and facility monitoring protocols',
      'Maintenance protocols ensuring systematic facility upkeep and equipment functionality'
    ]
  },
  {
    number: '04',
    title: 'Administrative and Management Areas',
    items: [
      'Instructor workspaces with systematic resource access and performance tracking tools',
      'Administrative offices with document management and operational coordination capability',
      'Meeting areas for systematic assessment, intervention, and coordination activities',
      'Document management systems with systematic record keeping and compliance protocols'
    ]
  }
];

export function InfrastructureSection() {
  return (
    <section className="py-24 px-8 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Infrastructure Specification
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
            The Lucknow Lab infrastructure operates through systematic facility design with functional workspace allocation, 
            technical resource provision, and operational support systems that enable effective competency development without 
            marketing facility emphasis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {infrastructure.map((section, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center font-bold text-lg">
                  {section.number}
                </div>
                <h3 className="text-xl font-bold text-black">
                  {section.title}
                </h3>
              </div>
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <span className="text-gray-400 font-mono text-sm mt-1">—</span>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Infrastructure Standard */}
        <div className="bg-black text-white rounded-2xl p-10">
          <h3 className="text-2xl font-bold mb-4 text-white">Infrastructure Standard</h3>
          <p className="text-gray-200 leading-relaxed">
            Infrastructure operates through systematic functionality and operational efficiency rather than marketing facility 
            emphasis or comfort optimization. All facility elements support competency development and institutional protocol requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
