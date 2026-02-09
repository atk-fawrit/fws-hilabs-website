/**
 * Hero Section - Lucknow Lab Page
 * Split design with black left and white right
 */

export function HeroSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
          {/* Left Column */}
          <div className="flex items-center px-8 md:px-16 lg:px-20 py-20 lg:py-24">
            <div className="max-w-xl space-y-10">
              <div className="space-y-8">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] text-white">
                  Lucknow Lab
                  <span className="block mt-3">Facility</span>
                </h1>
                <div className="w-20 h-0.5 bg-white"></div>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  Operational specifications, infrastructure details, and facility protocols for the HI Labs Lucknow 
                  location as a systematic engineering talent production facility with defined access controls and safety 
                  compliance frameworks.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative bg-white text-black px-8 md:px-16 lg:px-20 py-32 lg:py-24 flex items-center">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200"></div>
            
            <div className="max-w-xl space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 tracking-tight">
                  Facility Specification
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  This document establishes the operational rationale, catchment area definition, and operating constraints 
                  for the HI Labs Lucknow facility as a systematic engineering talent production location.
                </p>
                <p>
                  The Lucknow location operates as the primary HI Labs facility based on systematic analysis of engineering 
                  talent availability, infrastructure requirements, operational cost optimization, and regulatory compliance 
                  factors that support systematic competency development protocols.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
    </section>
  );
}
