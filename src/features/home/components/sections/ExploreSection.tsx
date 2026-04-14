'use client';

type ContentBlock =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ul-bold'; items: { label: string; text: string }[] };

interface Section {
  title: string;
  content: ContentBlock[];
}

const sections: Section[] = [
  {
    title: 'The Market Has Changed',
    content: [
      { type: 'p', text: 'AI can generate code.' },
      { type: 'p', text: 'Entry-level execution roles are shrinking.' },
      { type: 'p', text: 'What companies need now are engineers who can:' },
      { type: 'ul', items: ['understand architecture', 'reason about systems', 'maintain consistency', 'debug independently', 'operate within structured workflows'] },
      { type: 'p', text: 'The bottleneck is no longer code volume. It is disciplined engineering.' },
      { type: 'p', text: 'HI Labs is built for this shift.' },
    ],
  },
  {
    title: 'What You Will Actually Receive',
    content: [
      { type: 'p', text: 'You will receive:' },
      { type: 'ul', items: ['6 months of enforced, in-person engineering training', 'structured daily work discipline (6–8 hours)', 'weekly evaluation with documented feedback', 'elimination-based quality control', 'real-world tool usage (Git, task tracking, review systems)', '6 months of supervised internship deployment'] },
      { type: 'p', text: 'You leave with:' },
      { type: 'ul', items: ['documented performance history', 'production exposure', 'structured workflow competence', 'reduced onboarding risk for employers'] },
      { type: 'p', text: 'Not just a certificate.' },
    ],
  },
  {
    title: 'Structured Like a Company, Not a Classroom',
    content: [
      { type: 'p', text: 'HI Labs operates as an engineering environment:' },
      { type: 'ul', items: ['fixed working hours', 'code reviews', 'deadlines', 'accountability', 'team-based execution'] },
      { type: 'p', text: 'You are trained to function inside real delivery systems.' },
    ],
  },
  {
    title: 'Integrated Deployment Phase',
    content: [
      { type: 'p', text: 'Training and internship are inseparable.' },
      { type: 'p', text: 'After Phase I, you enter supervised deployment through:' },
      { type: 'ul', items: ['internal engineering teams', 'partner companies', 'live client projects'] },
      { type: 'p', text: 'You do not finish with theory. You finish with documented production exposure.' },
    ],
  },
  {
    title: 'Built by Practitioners',
    content: [
      { type: 'p', text: 'Our founders — stemming from IISC, IIT and IE Business School with 30+ years of combined industry experience at companies such as NVIDIA and Google — designed this system after observing a consistent hiring gap.' },
      { type: 'p', text: 'Graduates know syntax. Companies need reliability. HI Labs closes that gap.' },
    ],
  },
  {
    title: 'Human Competence in the AI Era',
    content: [
      { type: 'p', text: 'As automation increases, engineers must bring:' },
      { type: 'ul', items: ['structured thinking', 'communication clarity', 'accountability', 'team discipline'] },
      { type: 'p', text: 'These are trained deliberately.' },
    ],
  },
  {
    title: 'Trained by Engineers, Guided by Builders',
    content: [
      { type: 'p', text: 'Training is delivered by active software engineers working on live projects, not traditional instructors. Students operate within real workflows, tools, and constraints from day one.' },
      { type: 'p', text: 'This is reinforced by direct oversight from industry veterans and founders who define standards, audit performance, and ensure alignment with real hiring expectations.' },
      { type: 'p', text: 'The model is dual-layered:' },
      { type: 'ul-bold', items: [{ label: 'Execution:', text: 'engineers train students through real development work' }, { label: 'Oversight:', text: 'senior practitioners control quality and direction' }] },
      { type: 'p', text: 'This structure ensures relevance, rigor, and direct exposure to production environments, not simulated learning.' },
    ],
  },
];

export function ExploreSection() {
  return (
    <section
      className="py-16 sm:py-20 md:py-24 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Explore-bg.jpg')" }}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-block px-5 py-2 bg-white/90 border border-black/10 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 text-gray-700">
            Why HI Labs
          </div>
          <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight">
            Why HI Labs
          </h2>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((s, si) => (
            <div
              key={si}
              className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 max-w-5xl mx-auto w-full"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug tracking-tight">
                {s.title}
              </h3>

              <div className="space-y-4">
                {s.content.map((block, bi) => {
                  if (block.type === 'p') {
                    return (
                      <p key={bi} className="text-base md:text-lg text-gray-800 leading-relaxed">
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === 'ul') {
                    return (
                      <ul key={bi} className="space-y-2 pl-2">
                        {block.items.map((item, ii) => (
                          <li key={ii} className="flex items-start gap-3 text-base md:text-lg text-gray-800 leading-relaxed">
                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gray-900 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.type === 'ul-bold') {
                    return (
                      <ul key={bi} className="space-y-2 pl-2">
                        {block.items.map((item, ii) => (
                          <li key={ii} className="flex items-start gap-3 text-base md:text-lg text-gray-800 leading-relaxed">
                            <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gray-900 flex-shrink-0"></span>
                            <span><strong className="font-bold text-gray-900">{item.label}</strong> {item.text}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
