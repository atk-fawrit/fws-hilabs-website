import Image from 'next/image';

export function DiscoverSection() {
  return (
    <section className="bg-[#E8E8E6] py-4 md:py-6">
      <div className="bg-[#FAFAF9] py-20 max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-light text-primary mb-12 tracking-tight">Discover</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <a href="/flagship-program" className="group bg-white border border-secondary/20 hover:border-accent/60 transition-all overflow-hidden hover:shadow-sm">
            <div className="relative w-full h-52 bg-secondary/10 overflow-hidden">
              <Image
                src="/images/pexels-mikhail-nilov-7988079.jpg"
                alt="Program Structure"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-7">
              <h3 className="font-normal text-primary mb-3 text-lg leading-snug group-hover:text-accent transition-colors">
                12-Month System Overview
              </h3>
              <p className="text-secondary text-sm leading-relaxed font-light">
                Structured 12-month engineering talent production pipeline with two distinct phases
              </p>
            </div>
          </a>

          <a href="/outcomes" className="group bg-white border border-secondary/20 hover:border-accent/60 transition-all overflow-hidden hover:shadow-sm">
            <div className="relative w-full h-52 bg-secondary/10 overflow-hidden">
              <Image
                src="/images/ChatGPT Image Jan 15, 2026, 03_12_03 PM.png"
                alt="Documented Evidence"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-7">
              <h3 className="font-normal text-primary mb-3 text-lg leading-snug group-hover:text-accent transition-colors">
                Documented Evidence
              </h3>
              <p className="text-secondary text-sm leading-relaxed font-light">
                Systematic documentation of program outcomes through evaluation rubrics and performance summaries
              </p>
            </div>
          </a>

          <a href="/employers" className="group bg-white border border-secondary/20 hover:border-accent/60 transition-all overflow-hidden hover:shadow-sm">
            <div className="relative w-full h-52 bg-secondary/10 overflow-hidden">
              <Image
                src="/images/0342e2cc865451941a31fa725d003957.jpg"
                alt="Employer Partnerships"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-7">
              <h3 className="font-normal text-primary mb-3 text-lg leading-snug group-hover:text-accent transition-colors">
                Employer Partnerships
              </h3>
              <p className="text-secondary text-sm leading-relaxed font-light">
                Partner with HI Labs to access deployable junior engineers with verified capabilities
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
