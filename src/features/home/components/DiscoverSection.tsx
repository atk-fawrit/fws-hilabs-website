import Image from 'next/image';

export function DiscoverSection() {
  return (
    <section className="w-full">
      <div className="bg-gray-50 py-16">
        <div className="px-8 md:px-12">
          <h2 className="text-3xl font-bold text-primary mb-12 tracking-tight">Discover</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="/flagship-program" className="group bg-white border border-secondary/20 hover:border-accent/60 transition-all overflow-hidden hover:shadow-sm">
              <div className="relative w-full h-52 bg-secondary/10 overflow-hidden">
                <Image
                  src="/images/flagship-program-students.jpg"
                  alt="Program Structure"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-primary mb-3 text-lg leading-snug group-hover:text-accent transition-colors">
                  12-Month System Overview
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Structured 12-month engineering talent production pipeline with two distinct phases
                </p>
              </div>
            </a>

            <a href="/outcomes" className="group bg-white border border-secondary/20 hover:border-accent/60 transition-all overflow-hidden hover:shadow-sm">
              <div className="relative w-full h-52 bg-secondary/10 overflow-hidden">
                <Image
                  src="/images/short-programs-professionals.png"
                  alt="Documented Evidence"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-primary mb-3 text-lg leading-snug group-hover:text-accent transition-colors">
                  Documented Evidence
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Systematic documentation of program outcomes through evaluation rubrics and performance summaries
                </p>
              </div>
            </a>

            <a href="/employers" className="group bg-white border border-secondary/20 hover:border-accent/60 transition-all overflow-hidden hover:shadow-sm">
              <div className="relative w-full h-52 bg-secondary/10 overflow-hidden">
                <Image
                  src="/images/hero-engineering-career.jpg"
                  alt="Employer Partnerships"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-primary mb-3 text-lg leading-snug group-hover:text-accent transition-colors">
                  Employer Partnerships
                </h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Partner with HI Labs to access deployable junior engineers with verified capabilities
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
