export function QuickAccessSection() {
  return (
    <section className="w-full">
      <div className="bg-white py-16 border-t border-secondary/10">
        <div className="px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="border-l-[3px] border-accent pl-7 group">
              <h3 className="text-primary font-semibold mb-4 text-xl tracking-tight group-hover:text-accent transition-colors">Admissions</h3>
              <p className="text-secondary text-base mb-5 leading-relaxed">
                Transparent selection system with clearly defined criteria and evaluation frameworks.
              </p>
              <a href="/admissions" className="text-accent hover:text-primary text-sm font-medium transition-colors inline-flex items-center gap-2">
                View requirements <span className="text-lg">→</span>
              </a>
            </div>

            <div className="border-l-[3px] border-accent pl-7 group">
              <h3 className="text-primary font-semibold mb-4 text-xl tracking-tight group-hover:text-accent transition-colors">Program Structure</h3>
              <p className="text-secondary text-base mb-5 leading-relaxed">
                Three training terms followed by supervised deployment in partner organizations.
              </p>
              <a href="/flagship-program" className="text-accent hover:text-primary text-sm font-medium transition-colors inline-flex items-center gap-2">
                Learn more <span className="text-lg">→</span>
              </a>
            </div>

            <div className="border-l-[3px] border-accent pl-7 group">
              <h3 className="text-primary font-semibold mb-4 text-xl tracking-tight group-hover:text-accent transition-colors">Lucknow Lab</h3>
              <p className="text-secondary text-base mb-5 leading-relaxed">
                In-person engineering laboratory facility with structured training environment.
              </p>
              <a href="/lucknow-lab" className="text-accent hover:text-primary text-sm font-medium transition-colors inline-flex items-center gap-2">
                Visit location <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
