/**
 * Daily Operating Model Section
 * Operating components with standards
 */

const operatingComponents = [
  {
    number: '01',
    title: 'Structured Daily Schedule',
    description: 'Daily operations operate through systematic schedule with defined competency development blocks, assessment periods, and performance tracking intervals that maintain consistent institutional protocols and learning progression.',
    standard: 'SCHEDULE STANDARD: 8-hour daily sessions with systematic competency development, assessment, and performance tracking protocols maintained consistently.'
  },
  {
    number: '02',
    title: 'Cohort Structure and Management',
    description: 'Cohort operations maintain systematic structure with optimal size management, instructor allocation, resource distribution, and performance tracking that ensure effective competency development and individual accountability.',
    standard: 'COHORT SPECIFICATION: Maximum 24 candidates per cohort with dedicated instructor assignment and systematic performance tracking protocols.'
  },
  {
    number: '03',
    title: 'Competency Development Protocols',
    description: 'Systematic competency development operates through structured learning modules, practical application sessions, assessment checkpoints, and elimination protocols that ensure consistent skill acquisition and performance standards.',
    standard: 'DEVELOPMENT STANDARD: Systematic competency progression with documented assessment criteria and elimination thresholds applied consistently.'
  },
  {
    number: '04',
    title: 'Performance Monitoring and Intervention',
    description: 'Daily performance monitoring operates through systematic tracking, intervention protocols, and elimination decision frameworks that maintain institutional standards and individual accountability throughout the competency development process.',
    standard: 'MONITORING STANDARD: Daily performance tracking with systematic intervention protocols and elimination decision authority maintained consistently.'
  }
];

export function DailyOperatingModelSection() {
  return (
    <section className="py-24 px-8 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Daily Operating Model
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl">
            The Lucknow Lab operates through systematic daily protocols with structured cohort management, competency development 
            schedules, and performance tracking systems that ensure consistent institutional standards and operational efficiency.
          </p>
        </div>

        <div className="space-y-6">
          {operatingComponents.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-10 border-2 border-gray-200">
              <div className="flex items-start gap-6 mb-6">
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
              <div className="ml-20 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 font-medium">
                  {item.standard}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
