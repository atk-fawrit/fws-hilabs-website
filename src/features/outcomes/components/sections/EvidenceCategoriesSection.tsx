/**
 * Evidence Categories Section
 * Clean numbered card design
 */

'use client';

const evidenceCategories = [
  {
    number: "01",
    title: "Evaluation Rubrics",
    description: "Systematic assessment frameworks used throughout program delivery to measure participant competency development and performance progression."
  },
  {
    number: "02",
    title: "Performance Summaries",
    description: "Aggregated performance data documenting participant achievement levels, completion rates, and competency attainment across program components."
  },
  {
    number: "03",
    title: "Project Artifacts",
    description: "Tangible outputs produced by participants during program delivery, demonstrating practical application of developed competencies and real-world problem-solving capabilities."
  },
  {
    number: "04",
    title: "Deployment Feedback",
    description: "Systematic feedback from employer partners during supervised deployment phases, documenting participant performance in real work environments and deployment effectiveness."
  }
];

export function EvidenceCategoriesSection() {
  return (
    <section className="py-24 px-8 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
            Evidence Categories
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl">
            Evidence documentation encompasses four primary categories that provide comprehensive assessment 
            of program effectiveness and participant development.
          </p>
        </div>

        {/* Categories List */}
        <div className="space-y-6">
          {evidenceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 md:p-10 border-2 border-gray-200 hover:border-black transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                {/* Number */}
                <div className="w-14 h-14 bg-black text-white rounded-xl flex items-center justify-center font-bold text-xl flex-shrink-0">
                  {category.number}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-black mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {category.description}
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
