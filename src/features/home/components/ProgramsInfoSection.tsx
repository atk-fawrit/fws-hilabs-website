import Image from 'next/image';
import { H2, BodyText } from '@/src/shared/components/typography';
import { CTAButton } from '@/src/shared/components/content';

export function ProgramsInfoSection() {
  return (
    <section className="w-full">
      <div className="bg-white py-16 border-b border-secondary/20">
        <div className="px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {/* Left Column - Programs */}
          <div>
            <div className="flex justify-between items-baseline mb-8">
              <H2 className="text-primary">Programs</H2>
              <CTAButton href="/flagship-program" variant="text">
                View All
              </CTAButton>
            </div>
            <div className="space-y-8">
              <a href="/flagship-program" className="group flex gap-5 hover:opacity-90 transition-all">
                <div className="relative w-36 h-24 flex-shrink-0 bg-secondary/20 overflow-hidden">
                  <Image
                    src="/images/flagship-program-students.jpg"
                    alt="12-Month Program"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="144px"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <BodyText className="font-semibold text-primary mb-2.5 text-lg leading-snug group-hover:text-accent transition-colors">
                    12-Month Engineering Production System
                  </BodyText>
                  <BodyText className="text-secondary text-sm leading-relaxed">
                    Structured pipeline with enforced evaluation gates and supervised deployment
                  </BodyText>
                </div>
              </a>

              <a href="/courses" className="group flex gap-5 hover:opacity-90 transition-all">
                <div className="relative w-36 h-24 flex-shrink-0 bg-secondary/20 overflow-hidden">
                  <Image
                    src="/images/short-programs-professionals.jpg"
                    alt="Short Programs"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="144px"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <BodyText className="font-semibold text-primary mb-2.5 text-lg leading-snug group-hover:text-accent transition-colors">
                    Short Programs for Professionals
                  </BodyText>
                  <BodyText className="text-secondary text-sm leading-relaxed">
                    Weekend skill-focused modules for working professionals
                  </BodyText>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Information */}
          <div>
            <div className="flex justify-between items-baseline mb-8">
              <H2 className="text-primary">Information</H2>
              <CTAButton href="/admissions" variant="text">
                Learn More
              </CTAButton>
            </div>
            <div className="space-y-8">
              <a href="/admissions" className="group flex gap-5 hover:opacity-90 transition-all">
                <div className="relative w-36 h-24 flex-shrink-0 bg-secondary/20 overflow-hidden">
                  <Image
                    src="/images/admissions-process.jpg"
                    alt="Admissions"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="144px"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <BodyText className="font-semibold text-primary mb-2.5 text-lg leading-snug group-hover:text-accent transition-colors">
                    Admissions Process Overview
                  </BodyText>
                  <BodyText className="text-secondary text-sm leading-relaxed">
                    Transparent selection system with clearly defined criteria
                  </BodyText>
                </div>
              </a>

              <a href="/lucknow-lab" className="group flex gap-5 hover:opacity-90 transition-all">
                <div className="relative w-36 h-24 flex-shrink-0 bg-secondary/20 overflow-hidden">
                  <Image
                    src="/images/lucknow-lab-facility.jpg"
                    alt="Lucknow Lab"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="144px"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <BodyText className="font-semibold text-primary mb-2.5 text-lg leading-snug group-hover:text-accent transition-colors">
                    Lucknow Laboratory Facility
                  </BodyText>
                  <BodyText className="text-secondary text-sm leading-relaxed">
                    In-person engineering laboratory environment
                  </BodyText>
                </div>
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
