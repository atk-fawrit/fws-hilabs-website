/**
 * Explicit Non-Claims Section
 * Clean card design with main and details text
 */

const nonClaims = [
  {
    title: 'Placement Percentages',
    main: 'HI Labs does not track, calculate, or publish placement percentages. The program does not guarantee employment outcomes or maintain placement statistics for marketing purposes.',
    details: 'Deployment arrangements are made through employer partnerships based on specific organizational needs and participant competency alignment. These arrangements are not tracked as placement metrics or success rates.'
  },
  {
    title: 'Salary Outcomes',
    main: 'HI Labs does not collect, analyze, or publish salary information for program participants. No claims are made regarding earning potential or compensation improvements.',
    details: 'Compensation arrangements are determined by employer partners based on organizational policies, market conditions, and individual performance. These arrangements are outside HI Labs\' scope and control.'
  },
  {
    title: 'Success Stories',
    main: 'HI Labs does not publish testimonials, success stories, or promotional narratives about individual participants or their career outcomes following program completion.',
    details: 'Individual participant experiences vary based on numerous factors outside program control. Promotional narratives do not provide reliable indicators of program effectiveness or individual outcomes.'
  },
  {
    title: 'Career Transformation Guarantees',
    main: 'HI Labs does not guarantee career transformation, professional advancement, or specific employment outcomes for any participant regardless of program completion status.',
    details: 'The program provides systematic engineering competency development under controlled conditions. Career outcomes depend on individual performance, market conditions, and factors beyond program scope.'
  }
];

export function ExplicitNonClaimsSection() {
  return (
    <section className="py-24 px-8 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Explicit Non-Claims
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
            HI Labs explicitly does not claim or guarantee specific outcomes that are commonly promoted by educational 
            institutions and training programs. These non-claims are stated clearly to prevent misunderstanding and ensure 
            accurate stakeholder expectations.
          </p>
        </div>

        {/* Non-Claims List */}
        <div className="space-y-8">
          {nonClaims.map((item, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-2xl p-8 md:p-10 border-2 border-gray-300"
            >
              {/* Title */}
              <h3 className="text-2xl font-bold text-black mb-4">
                {item.title}
              </h3>

              {/* Main statement */}
              <p className="text-gray-800 leading-relaxed mb-6 text-lg">
                {item.main}
              </p>

              {/* Details */}
              <div className="pt-6 border-t border-gray-300">
                <p className="text-gray-600 leading-relaxed">
                  {item.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
