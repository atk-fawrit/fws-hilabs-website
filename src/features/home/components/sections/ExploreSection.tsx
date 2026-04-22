'use client';

import { useEffect, useRef, useState } from 'react';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } },
      { threshold: 0.06 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, on };
}

function Reveal({ children, delay = 0, className = '' }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const { ref, on } = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: on ? 1 : 0,
        transform: on ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function AccordionCard({
  num, title, body, tags, note, delay = 0,
}: {
  num: string; title: string; body: string;
  tags?: string[]; note?: string; delay?: number;
}) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (bodyRef.current) setHeight(bodyRef.current.scrollHeight);
  }, []);

  return (
    <Reveal delay={delay}>
      <div
        className={`flex flex-col cursor-pointer group transition-colors duration-200 ${open ? 'bg-white' : 'bg-[#f9f9f8] hover:bg-white'}`}
        onClick={() => setOpen(o => !o)}
      >
        <div className="flex items-start justify-between gap-4 p-8 md:p-10">
          <div className="flex-1">
            <p className="text-[11px] font-bold tracking-[.2em] text-gray-300 mb-3">{num}</p>
            <h3 className={`text-[18px] font-bold leading-tight transition-colors duration-200 ${open ? 'text-blue-600' : 'text-gray-900 group-hover:text-gray-700'}`}>
              {title}
            </h3>
          </div>
          <div className={`mt-0.5 w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${open ? 'border-blue-500 bg-blue-500 text-white rotate-45' : 'border-gray-300 text-gray-400 group-hover:border-gray-400'}`}>
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
              <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
        <div
          style={{
            maxHeight: open ? height : 0,
            opacity: open ? 1 : 0,
            overflow: 'hidden',
            transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease',
          }}
        >
          <div ref={bodyRef} className="px-8 md:px-10 pb-8 md:pb-10 border-t border-gray-100">
            <p className="text-[15px] text-gray-500 leading-[1.85] mt-5">{body}</p>
            {tags && (
              <div className="flex flex-wrap gap-2 mt-6">
                {tags.map((t) => (
                  <span key={t} className="text-[12px] font-medium px-3 py-1.5 rounded-full bg-gray-100 text-gray-500 border border-gray-200">
                    {t}
                  </span>
                ))}
              </div>
            )}
            {note && (
              <p className="text-[13px] text-gray-400 italic mt-6 pt-4 border-t border-gray-100">{note}</p>
            )}
          </div>
        </div>
        <div className={`h-[2px] mt-auto transition-all duration-300 ${open ? 'bg-blue-500' : 'bg-transparent'}`} />
      </div>
    </Reveal>
  );
}

const receiveItems = [
  '6 months of enforced, in-person engineering training',
  'Structured daily work discipline (6–8 hours)',
  'Weekly evaluation with documented feedback',
  'Elimination-based quality control',
  'Real-world tool usage — Git, task tracking, review systems',
  '6 months of supervised internship deployment',
];

const leaveItems = [
  'Documented performance history',
  'Production exposure',
  'Structured workflow competence',
  'Reduced onboarding risk for employers',
];

export function ExploreSection() {
  return (
    <section className="bg-white py-24 md:py-36 overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12">
        <Reveal className="mb-16 md:mb-20">
          <p className="text-[11px] font-semibold tracking-[.24em] uppercase text-blue-600 mb-3">
            Why choose us
          </p>
          <h2 className="text-[36px] md:text-[48px] font-bold text-gray-900 leading-tight">
            Why HI Labs
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-gray-200 rounded-2xl overflow-hidden mb-px">
          <Reveal delay={0} className="lg:col-span-7">
            <div className="h-full bg-[#f9f9f8] p-10 md:p-14 flex flex-col justify-between min-h-[320px]">
              <div>
                <h3 className="text-[22px] md:text-[26px] font-bold text-gray-900 leading-tight mb-5">
                  The Market Has Changed
                </h3>
                <p className="text-[15px] text-gray-500 leading-[1.9] max-w-[520px]">
                  AI can generate code. Entry-level execution roles are shrinking. What companies need now are engineers who can understand architecture, reason about systems, maintain consistency, debug independently, and operate within structured workflows.
                </p>
              </div>
              <p className="text-[13px] text-gray-400 italic mt-10 pt-6 border-t border-gray-200">
                The bottleneck is no longer code volume — it is disciplined engineering.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-5">
            <div className="h-full bg-gray-950 p-10 md:p-14 flex flex-col justify-center min-h-[320px]">
              {[
                { sub: 'Phase I',  label: 'Training',     val: '6',  dim: true  },
                { sub: 'Phase II', label: 'Internship',   val: '6',  dim: true  },
                { sub: 'Total',    label: 'Full Program', val: '12', dim: false },
              ].map(({ sub, label, val, dim }, i) => (
                <div key={label} className={`flex items-center justify-between ${i < 2 ? 'pb-6 mb-6 border-b border-white/[.07]' : ''}`}>
                  <div>
                    <p className="text-[11px] font-bold tracking-[.2em] uppercase text-gray-600 mb-1">{sub}</p>
                    <p className={`text-[17px] font-bold ${dim ? 'text-gray-400' : 'text-white'}`}>{label}</p>
                  </div>
                  <div className="text-right">
                    <span className={`font-black tabular-nums leading-none block ${dim ? 'text-[40px] text-white/25' : 'text-[52px] text-white'}`}>
                      {val}
                    </span>
                    <p className="text-[11px] text-gray-600 tracking-wider mt-0.5">months</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-px mb-px">
          <div className="w-full bg-gray-950 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-white/[.06]">
              <div className="lg:col-span-3 bg-gray-950 p-10 md:p-14">
                <h3 className="text-[20px] md:text-[22px] font-bold text-white leading-tight">
                  What You Will<br />Actually Receive
                </h3>
                <p className="text-[13px] text-gray-600 italic mt-3">Not just a certificate.</p>
              </div>

              <div className="lg:col-span-5 bg-gray-950 p-10 md:p-14">
                <p className="text-[11px] font-bold tracking-[.22em] uppercase text-blue-500 mb-6">You will receive</p>
                {receiveItems.map((item, i) => (
                  <div key={item} className={`flex items-start gap-4 py-3.5 ${i < receiveItems.length - 1 ? 'border-b border-white/[.05]' : ''}`}>
                    <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-blue-500 shrink-0" />
                    <span className="text-[14px] text-gray-400 leading-snug">{item}</span>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-4 bg-white/[.03] p-10 md:p-14 border-l border-white/[.06]">
                <p className="text-[11px] font-bold tracking-[.22em] uppercase text-blue-400 mb-6">You leave with</p>
                {leaveItems.map((item, i) => (
                  <div key={item} className={`flex items-start gap-4 py-3.5 ${i < leaveItems.length - 1 ? 'border-b border-white/[.05]' : ''}`}>
                    <span className="mt-[9px] w-[5px] h-[5px] rounded-full bg-blue-400 shrink-0" />
                    <span className="text-[14px] text-gray-300 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 mt-px mb-px overflow-hidden">
          {[
            {
              num: '01',
              title: 'Structured Like a Company',
              body: 'HI Labs operates as an engineering environment — trained to function inside real delivery systems with fixed hours, code reviews, deadlines, and team accountability.',
              tags: ['Fixed hours', 'Code reviews', 'Deadlines', 'Accountability', 'Team execution'],
            },
            {
              num: '02',
              title: 'Integrated Deployment Phase',
              body: 'Training and internship are inseparable. After Phase I, you enter supervised deployment through internal teams, partner companies, and live client projects.',
              note: 'You finish with documented production exposure.',
            },
            {
              num: '03',
              title: 'Human Competence in the AI Era',
              body: 'As automation increases, engineers must bring structured thinking, communication clarity, accountability, and team discipline.',
              tags: ['Structured thinking', 'Communication', 'Accountability', 'Team discipline'],
            },
          ].map((card, i) => (
            <AccordionCard key={card.title} {...card} delay={i * 70} />
          ))}
        </div>

        <Reveal className="mt-px mb-px">
          <div className="w-full bg-[#f9f9f8] p-10 md:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <p className="text-[11px] font-bold tracking-[.22em] uppercase text-blue-600 mb-4">Founders</p>
                <h3 className="text-[22px] md:text-[26px] font-bold text-gray-900 leading-tight mb-5">
                  Built by Practitioners
                </h3>
                <p className="text-[15px] text-gray-500 leading-[1.9]">
                  Our founders — from IISC, IIT, and IE Business School — bring 30+ years of combined experience at NVIDIA and Google. They designed this system after observing a consistent gap: graduates know syntax, companies need reliability.
                </p>
              </div>
              <div className="lg:col-span-7 flex flex-wrap gap-2.5 lg:pt-10">
                {['IISC', 'IIT', 'IE Business School', 'NVIDIA', 'Google', '30+ Years'].map((p) => (
                  <span key={p} className="text-[13px] font-semibold px-5 py-2.5 rounded-full bg-white text-gray-700 border border-gray-200 shadow-sm hover:border-blue-200 hover:text-blue-700 hover:shadow transition-all duration-200 cursor-default">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-px rounded-b-2xl overflow-hidden">
          <div className="w-full bg-gray-950 p-10 md:p-14 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <h3 className="text-[22px] md:text-[26px] font-bold text-white leading-tight mb-5">
                  Trained by Engineers,<br />Guided by Builders
                </h3>
                <p className="text-[15px] text-gray-400 leading-[1.9]">
                  Training is delivered by active software engineers on live projects — not instructors. Students operate in real workflows from day one, with direct oversight from industry veterans who define standards and audit performance.
                </p>
                <p className="text-[13px] text-gray-600 italic mt-8 pt-6 border-t border-white/[.07]">
                  Direct exposure to production environments — not simulated learning.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:pt-1">
                {[
                  { head: 'Execution', body: 'Engineers train students through real development work' },
                  { head: 'Oversight', body: 'Senior practitioners control quality and direction' },
                ].map(({ head, body }) => (
                  <div key={head} className="bg-white/[.04] border border-white/[.07] rounded-xl p-7 hover:bg-white/[.07] hover:border-white/[.14] transition-all duration-200 cursor-default">
                    <p className="text-[11px] font-bold tracking-[.22em] uppercase text-blue-400 mb-3">{head}</p>
                    <p className="text-[15px] text-gray-300 leading-relaxed">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
