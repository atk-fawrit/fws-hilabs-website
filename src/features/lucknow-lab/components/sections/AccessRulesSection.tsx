/**
 * Access Rules Section
 * Grid of access protocols
 */

const accessRules = [
  {
    number: '01',
    title: 'Candidate Access Protocols',
    description: 'Systematic candidate access operates through enrollment verification, identification protocols, and attendance tracking systems that ensure authorized facility access and systematic presence monitoring throughout competency development periods.'
  },
  {
    number: '02',
    title: 'Visitor Management System',
    description: 'Systematic visitor management operates through advance authorization, escort protocols, and limited access areas that maintain operational security while enabling necessary stakeholder interaction and institutional transparency requirements.'
  },
  {
    number: '03',
    title: 'Parent and Guardian Access',
    description: 'Parent and guardian access operates through systematic protocols with scheduled interaction periods, designated meeting areas, and information sharing boundaries that maintain institutional operations while enabling necessary family communication.'
  },
  {
    number: '04',
    title: 'Employer and Partnership Access',
    description: 'Employer and partnership access operates through systematic coordination with advance scheduling, designated interaction areas, and institutional protocol compliance that support deployment preparation and partnership development activities.'
  }
];

export function AccessRulesSection() {
  return (
    <section className="py-24 px-8 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Access Rules and Visit Policies
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
            The Lucknow Lab operates through systematic access control and visit policies with defined entry protocols, visitor 
            management systems, and security boundaries that ensure operational integrity and institutional protocol compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accessRules.map((rule, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 border-2 border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center font-bold text-lg">
                  {rule.number}
                </div>
                <h3 className="text-xl font-bold text-black">
                  {rule.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {rule.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
