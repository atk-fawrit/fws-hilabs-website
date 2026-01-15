export function QuickAccessSection() {
  return (
    <section className="bg-[#E8E8E6] py-4 md:py-6">
      <div className="bg-white py-20 border-t border-secondary/10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="border-l-[3px] border-accent pl-7 group">
            <h3 className="text-primary font-normal mb-4 text-xl tracking-tight group-hover:text-accent transition-colors">Admissions</h3>
            <p className="text-secondary text-base mb-5 leading-relaxed font-light">
              Transparent selection system with clearly defined criteria and evaluation frameworks.
            </p>
            <a href="/admissions" className="text-accent hover:text-primary text-sm font-medium transition-colors inline-flex items-center gap-2">
              View requirements <span className="text-lg">→</span>
            </a>
          </div>

          <div className="border-l-[3px] border-accent pl-7 group">
            <h3 className="text-primary font-normal mb-4 text-xl tracking-tight group-hover:text-accent transition-colors">Program Structure</h3>
            <p className="text-secondary text-base mb-5 leading-relaxed font-light">
              Three training terms followed by supervised deployment in partner organizations.
            </p>
            <a href="/flagship-program" className="text-accent hover:text-primary text-sm font-medium transition-colors inline-flex items-center gap-2">
              Learn more <span className="text-lg">→</span>
            </a>
          </div>

          <div className="border-l-[3px] border-accent pl-7 group">
            <h3 className="text-primary font-normal mb-4 text-xl tracking-tight group-hover:text-accent transition-colors">Lucknow Lab</h3>
            <p className="text-secondary text-base mb-5 leading-relaxed font-light">
              In-person engineering laboratory facility with structured training environment.
            </p>
            <a href="/lucknow-lab" className="text-accent hover:text-primary text-sm font-medium transition-colors inline-flex items-center gap-2">
              Visit location <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
