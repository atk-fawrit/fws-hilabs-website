/**
 * Location Rationale Section
 * Numbered cards showing location selection criteria
 */

const criteria = [
  {
    number: '01',
    title: 'Engineering Talent Availability',
    description: 'Lucknow provides access to systematic engineering talent pipeline through established educational institutions, technical colleges, and engineering programs that supply candidates for competency development protocols.'
  },
  {
    number: '02',
    title: 'Infrastructure and Connectivity',
    description: 'Location provides systematic infrastructure including reliable power supply, high-speed internet connectivity, transportation access, and facility development capability supporting operational requirements.'
  },
  {
    number: '03',
    title: 'Operational Cost Optimization',
    description: 'Lucknow enables systematic cost optimization through facility rental rates, operational expenses, and resource availability that support sustainable institutional operations without compromising quality standards.'
  },
  {
    number: '04',
    title: 'Regulatory and Compliance Environment',
    description: 'Location provides systematic regulatory compliance environment with established educational regulations, business operation frameworks, and institutional development support that facilitate systematic operations.'
  }
];

export function LocationRationaleSection() {
  return (
    <section className="py-24 px-8 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Location Selection Criteria
          </h2>
        </div>

        <div className="space-y-6">
          {criteria.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 md:p-10 border-2 border-gray-200 hover:border-black transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-black text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {item.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
