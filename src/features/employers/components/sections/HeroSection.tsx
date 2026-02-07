/**
 * Hero Section - Employers Page
 * Premium two-column layout with elegant image presentation
 */

export function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
        {/* Left Column - Content */}
        <div className="flex items-center px-8 md:px-16 lg:px-24 py-20 lg:py-24 order-2 lg:order-1">
          <div className="max-w-xl space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
              </svg>
              Procurement Document
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black leading-[1.1]">
                Talent Procurement
                <span className="block mt-2">Specification</span>
              </h1>
              <div className="w-20 h-1 bg-black"></div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                This document specifies HI Labs&apos; talent supply capabilities, deployment models, and partnership 
                protocols for organizations evaluating engineering talent procurement through systematic production 
                rather than traditional recruitment channels.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                HI Labs operates as a talent production facility, not a recruitment agency or placement service. 
                Organizations engage with HI Labs to access systematically developed engineering talent through 
                structured deployment models with defined supervision and risk allocation frameworks.
              </p>
            </div>

            {/* Optional CTA */}
            <div className="pt-4">
              <button className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:gap-4 hover:shadow-xl">
                <span>Explore Partnership Models</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Image with Premium Design */}
        <div className="relative h-[50vh] lg:h-auto order-1 lg:order-2">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>

          {/* Image Container with Frame Effect */}
          <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12">
            <div className="relative w-full h-full max-w-2xl">
              {/* Decorative Corner Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-black rounded-tl-3xl"></div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-black rounded-br-3xl"></div>

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                {/* Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/images/hero-production-system.jpg" 
                  alt="Talent Production System"
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle Gradient Overlay for Better Text Contrast if Needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>

                {/* Optional: Floating Info Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-black text-sm mb-1">Systematic Talent Development</h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        Structured engineering talent production with documented competencies and supervised deployment protocols
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Accent Shape */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-black/5 rounded-bl-[100px] -z-10"></div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
    </section>
  );
}