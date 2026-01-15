export function WhatIsIsNotSection() {
  return (
    <section className="bg-[#E8E8E6] py-4 md:py-6">
      <div className="bg-[#1A1A1A] text-background py-20 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-2xl font-light mb-8 tracking-tight text-background">What HI Labs Is</h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <span className="text-accent mt-1 text-sm flex-shrink-0">●</span>
                <span className="text-background/85 text-base leading-relaxed font-light group-hover:text-background transition-colors">
                  An engineering talent production system with enforced evaluation gates
                </span>
              </li>
              <li className="flex items-start gap-4 group">
                <span className="text-accent mt-1 text-sm flex-shrink-0">●</span>
                <span className="text-background/85 text-base leading-relaxed font-light group-hover:text-background transition-colors">
                  A 12-month in-person program with structured elimination criteria
                </span>
              </li>
              <li className="flex items-start gap-4 group">
                <span className="text-accent mt-1 text-sm flex-shrink-0">●</span>
                <span className="text-background/85 text-base leading-relaxed font-light group-hover:text-background transition-colors">
                  A laboratory environment focused on producing deployable junior engineers
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-light mb-8 tracking-tight text-background">What HI Labs Is Not</h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <span className="text-accent mt-1 text-sm flex-shrink-0">●</span>
                <span className="text-background/85 text-base leading-relaxed font-light group-hover:text-background transition-colors">
                  Not a traditional educational institution with degree programs
                </span>
              </li>
              <li className="flex items-start gap-4 group">
                <span className="text-accent mt-1 text-sm flex-shrink-0">●</span>
                <span className="text-background/85 text-base leading-relaxed font-light group-hover:text-background transition-colors">
                  Not a placement agency with guaranteed job outcomes
                </span>
              </li>
              <li className="flex items-start gap-4 group">
                <span className="text-accent mt-1 text-sm flex-shrink-0">●</span>
                <span className="text-background/85 text-base leading-relaxed font-light group-hover:text-background transition-colors">
                  Not compatible with parallel employment or remote participation
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
