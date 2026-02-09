/**
 * Hero Section - Outcomes Page
 * Dark background with title and description
 */

export function HeroSection() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 py-20 max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white">
          Outcomes & Evidence
        </h1>
        <p className="text-base md:text-lg text-gray-200 leading-relaxed font-light max-w-3xl mx-auto">
          HI Labs outcomes are documented evidence of program effectiveness, not marketing metrics or promotional claims. 
          Evidence is collected systematically and published transparently to enable informed evaluation by stakeholders.
        </p>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
