'use client';

// Primitives
function Divider({ white }: { white?: boolean }) {
  return <div className={`w-7 h-0.5 rounded-full my-3.5 ${white ? 'bg-white/30' : 'bg-blue-600'}`} />;
}

function Chip({ label, v = 'gray' }: { label: string; v?: 'gray' | 'white' | 'blue' }) {
  const cls = {
    gray: 'bg-gray-100 text-gray-600',
    white: 'bg-white/15 text-white',
    blue: 'bg-blue-100 text-blue-700',
  }[v];
  return (
    <span className={`text-[11.5px] font-medium px-3 py-1 rounded-full ${cls}`}>
      {label}
    </span>
  );
}

export function ExploreSection() {
  const receiveItems = [
    '6 months of enforced, in-person engineering training',
    'structured daily work discipline (6–8 hours)',
    'weekly evaluation with documented feedback',
    'elimination-based quality control',
    'real-world tool usage (Git, task tracking, review systems)',
    '6 months of supervised internship deployment',
  ];

  const leaveItems = [
    'documented performance history',
    'production exposure',
    'structured workflow competence',
    'reduced onboarding risk for employers',
  ];

  return (
    <section
      className="py-20 md:py-28 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Explore-bg.jpg')" }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-sans text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-none">
            Why HI Labs
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1 — Market Has Changed */}
          <div className="rounded-[22px] p-8 bg-white border border-gray-100/80 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
            <h3 className="font-sans text-xl md:text-2xl font-black text-gray-900 leading-tight tracking-tight mb-4">
              The Market Has Changed
            </h3>
            <p className="font-sans text-sm md:text-base text-gray-500 leading-[1.7]">
              AI can generate code. Entry-level execution roles are shrinking. What companies need now are engineers who can understand architecture, reason about systems, maintain consistency, debug independently, and operate within structured workflows.
            </p>
            <Divider />
            <p className="font-sans text-sm text-gray-400 italic">
              The bottleneck is no longer code volume. It is disciplined engineering. HI Labs is built for this shift.
            </p>
          </div>

          {/* 2 — What You Receive */}
          <div className="rounded-[22px] p-8 bg-[#0c0c0c] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl">
            <h3 className="font-sans text-xl md:text-2xl font-black text-white leading-tight tracking-tight mb-6">
              What You Will Actually Receive
            </h3>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <p className="font-sans text-[10px] font-bold tracking-[.1em] uppercase text-blue-400 mb-2.5">
                  You will receive
                </p>
                <ul className="space-y-2">
                  {receiveItems.map((i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 font-sans text-[12px] text-white/50 leading-snug border-b border-white/[.05] pb-2"
                    >
                      <span className="mt-[5px] w-1 h-1 bg-blue-400 rounded-full flex-shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-sans text-[10px] font-bold tracking-[.1em] uppercase text-blue-400 mb-2.5">
                  You leave with
                </p>
                <ul className="space-y-2">
                  {leaveItems.map((i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 font-sans text-[12px] text-white/50 leading-snug border-b border-white/[.05] pb-2"
                    >
                      <span className="mt-[5px] w-1 h-1 bg-blue-400 rounded-full flex-shrink-0" />
                      {i}
                    </li>
                  ))}
                </ul>
                <p className="font-sans text-xs md:text-sm text-white/25 italic mt-4">Not just a certificate.</p>
              </div>
            </div>
          </div>

          {/* 3 — Duration stats */}
          <div className="rounded-[22px] p-8 bg-[#eceae4] border border-black/[.06] flex items-center justify-around gap-6 transition-all duration-300 hover:-translate-y-0.5">
            {[
              { n: '6', label: 'Months training' },
              { n: '6', label: 'Months internship' },
              { n: '12', label: 'Months total' },
            ].map(({ n, label }, idx) => (
              <div key={label} className="flex items-center gap-6 flex-1 justify-center">
                {idx > 0 && <div className="w-px self-stretch bg-black/10 flex-shrink-0" />}
                <div className="text-center">
                  <p className="font-sans text-[52px] font-black text-gray-900 leading-none tracking-tight">{n}</p>
                  <p className="font-sans text-[11px] uppercase tracking-[.09em] text-gray-400 mt-1">{label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 4 — Structured Like a Company */}
          <div className="rounded-[22px] p-8 bg-white border border-gray-100/80 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
            <h3 className="font-sans text-xl md:text-2xl font-black text-gray-900 leading-tight tracking-tight mb-4">
              Structured Like a Company, Not a Classroom
            </h3>
            <p className="font-sans text-sm md:text-base text-gray-500 leading-[1.7]">
              HI Labs operates as an engineering environment. You are trained to function inside real delivery systems.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['fixed working hours', 'code reviews', 'deadlines', 'accountability', 'team-based execution'].map((c) => (
                <Chip key={c} label={c} v="gray" />
              ))}
            </div>
          </div>

          {/* 5 — Integrated Deployment */}
          <div className="rounded-[22px] p-8 bg-white border border-gray-100/80 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
            <h3 className="font-sans text-xl md:text-2xl font-black text-gray-900 leading-tight tracking-tight mb-4">
              Integrated Deployment Phase
            </h3>
            <p className="font-sans text-sm md:text-base text-gray-500 leading-[1.7]">
              Training and internship are inseparable. After Phase I, you enter supervised deployment through internal engineering teams, partner companies, and live client projects.
            </p>
            <Divider />
            <p className="font-sans text-sm text-gray-400 italic">
              You do not finish with theory. You finish with documented production exposure.
            </p>
          </div>

          {/* 6 — Human Competence */}
          <div className="rounded-[22px] p-8 bg-white border border-gray-100/80 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
            <h3 className="font-sans text-xl md:text-2xl font-black text-gray-900 leading-tight tracking-tight mb-4">
              Human Competence in the AI Era
            </h3>
            <p className="font-sans text-sm md:text-base text-gray-500 leading-[1.7]">
              As automation increases, engineers must bring structured thinking, communication clarity, accountability, and team discipline.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['structured thinking', 'communication clarity', 'accountability', 'team discipline'].map((c) => (
                <Chip key={c} label={c} v="gray" />
              ))}
            </div>
            <Divider />
            <p className="font-sans text-sm text-gray-400 italic">These are trained deliberately.</p>
          </div>

          {/* 7 — Built by Practitioners — full width */}
          <div className="md:col-span-2 rounded-[22px] p-8 md:p-12 bg-[#0f1923] flex flex-col md:flex-row gap-10 md:gap-16 items-start md:items-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl">
            <div className="flex-1 min-w-0">
              <h3 className="font-sans text-xl md:text-2xl font-black text-white leading-tight tracking-tight mb-4">
                Built by Practitioners
              </h3>
              <p className="font-sans text-sm md:text-base text-white/50 leading-[1.7] max-w-lg mb-4">
                Our founders — stemming from IISC, IIT and IE Business School with 30+ years of combined industry experience at companies such as NVIDIA and Google — designed this system after observing a consistent hiring gap.
              </p>
              <p className="font-sans text-sm md:text-base text-white/50 leading-[1.7] max-w-lg">
                Graduates know syntax. Companies need reliability. HI Labs closes that gap.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {['IISC', 'IIT', 'IE Business School', 'NVIDIA', 'Google', '30+ years'].map((p) => (
                  <span key={p} className="font-sans text-[11.5px] font-medium px-3 py-1 rounded-full bg-white/[.08] text-white/60">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 8 — Trained by Engineers — full width */}
          <div className="md:col-span-2 rounded-[22px] p-8 md:p-10 bg-[#0c0c0c] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="font-sans text-xl md:text-2xl font-black text-white leading-tight tracking-tight mb-4">
                Trained by Engineers, Guided by Builders
              </h3>
              <p className="font-sans text-sm md:text-base text-white/50 leading-[1.7] mb-6">
                Training is delivered by active software engineers working on live projects, not traditional instructors. Students operate within real workflows, tools, and constraints from day one. This is reinforced by direct oversight from industry veterans and founders who define standards, audit performance, and ensure alignment with real hiring expectations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {[
                  {
                    head: 'Execution:',
                    body: 'engineers train students through real development work',
                  },
                  {
                    head: 'Oversight:',
                    body: 'senior practitioners control quality and direction',
                  },
                ].map(({ head, body }) => (
                  <div key={head} className="bg-white/[.05] rounded-2xl p-5">
                    <p className="font-sans text-[10px] font-bold tracking-[.1em] uppercase text-blue-400 mb-2">{head}</p>
                    <p className="font-sans text-sm text-white/50 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
              <p className="font-sans text-xs md:text-sm text-white/25 italic">
                This structure ensures relevance, rigor, and direct exposure to production environments, not simulated learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
