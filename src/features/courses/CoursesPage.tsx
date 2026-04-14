import Link from 'next/link';
import Image from 'next/image';
import { PageLayout, SimpleHero } from '@/src/shared/components/layout';
import {
  ProgramCategoriesSection,
} from './components/sections';

export default function CoursesPage() {
  return (
    <PageLayout>
      <SimpleHero
        image="/images/C-bgimg.jpg"
        imageAlt="Courses"
        title="Our Courses"
        description="Full-time and weekend courses for career advancement."
        overlayOpacity="light"
        badge={{
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          ),
          text: "Full-time & Weekend Programs"
        }}
      />
      
      <main className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-6 sm:py-8 space-y-12 sm:space-y-14 md:space-y-16">
        {/* Flagship Program Section */}
        <section className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
              Flagship Program
            </h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-light text-justify">
              Full-time engineering program with systematic training and guaranteed internship.
            </p>
          </div>

          {/* Flagship Program Card - New Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-full mx-auto px-4">
            <Link
              href="/flagship-program"
              className="group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 ease-out flex flex-col h-full outline-none hover:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-1 relative"
            >
              {/* Full Image with Overlay */}
              <div className="relative h-full min-h-[320px]">
                <Image
                  src="/images/Flag-Ship.png"
                  alt="Flagship Program"
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 25vw"
                  className="object-cover"
                />
                
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Content overlay */}
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  {/* Title at top */}
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight">
                    AI Native Software Engineer Fellowship
                  </h3>
                  
                  {/* Bottom content */}
                  <div className="space-y-3">
                    {/* Duration */}
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-white rounded-md flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-white text-xs">6+6 Months</span>
                    </div>
                    
                    {/* Start date and View Details */}
                    <div className="flex items-center justify-between">
                      <span className="text-white/90 text-xs">Starts: 15th july 2026</span>
                      <span className="text-white font-semibold text-xs">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Short Courses Section */}
        <ProgramCategoriesSection />
      </main>
    </PageLayout>
  );
}
