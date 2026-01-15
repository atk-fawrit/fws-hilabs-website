import Image from 'next/image';

export function TwoColumnSection() {
  return (
    <section className="bg-[#E8E8E6] py-4 md:py-6">
      <div className="bg-white py-16 border-b border-secondary/20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Left Column - Programs */}
          <div>
            <div className="flex justify-between items-baseline mb-8">
              <h2 className="text-3xl font-light text-primary tracking-tight">Programs</h2>
              <a href="/flagship-program" className="text-accent text-sm hover:text-primary transition-colors">
                View All →
              </a>
            </div>
            <div className="space-y-8">
              <a href="/flagship-program" className="group flex gap-5 hover:opacity-90 transition-all">
                <div className="relative w-36 h-24 flex-shrink-0 bg-secondary/20 overflow-hidden">
                  <Image
                    src="/images/pexels-mikhail-nilov-7988079.jpg"
                    alt="12-Month Program"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="144px"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-normal text-primary mb-2.5 text-lg leading-snug group-hover:text-accent transition-colors">
                    12-Month Engineering Production System
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed font-light">
                    Structured pipeline with enforced evaluation gates and supervised deployment
                  </p>
                </div>
              </a>

              <a href="/courses" className="group flex gap-5 hover:opacity-90 transition-all">
                <div className="relative w-36 h-24 flex-shrink-0 bg-secondary/20 overflow-hidden">
                  <Image
                    src="/images/ChatGPT Image Jan 15, 2026, 03_12_03 PM.png"
                    alt="Short Programs"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="144px"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-normal text-primary mb-2.5 text-lg leading-snug group-hover:text-accent transition-colors">
                    Short Programs for Professionals
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed font-light">
                    Weekend skill-focused modules for working professionals
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Information */}
          <div>
            <div className="flex justify-between items-baseline mb-8">
              <h2 className="text-3xl font-light text-primary tracking-tight">Information</h2>
              <a href="/admissions" className="text-accent text-sm hover:text-primary transition-colors">
                Learn More →
              </a>
            </div>
            <div className="space-y-8">
              <a href="/admissions" className="group flex gap-5 hover:opacity-90 transition-all">
                <div className="relative w-36 h-24 flex-shrink-0 bg-secondary/20 overflow-hidden">
                  <Image
                    src="/images/download.jpg"
                    alt="Admissions"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="144px"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-normal text-primary mb-2.5 text-lg leading-snug group-hover:text-accent transition-colors">
                    Admissions Process Overview
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed font-light">
                    Transparent selection system with clearly defined criteria
                  </p>
                </div>
              </a>

              <a href="/lucknow-lab" className="group flex gap-5 hover:opacity-90 transition-all">
                <div className="relative w-36 h-24 flex-shrink-0 bg-secondary/20 overflow-hidden">
                  <Image
                    src="/images/e57e3206fa458c41ffe495f8823c4c58.jpg"
                    alt="Lucknow Lab"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="144px"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-normal text-primary mb-2.5 text-lg leading-snug group-hover:text-accent transition-colors">
                    Lucknow Laboratory Facility
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed font-light">
                    In-person engineering laboratory environment
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
