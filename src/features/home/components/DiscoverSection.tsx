import { ImageCard } from '@/src/shared/components/content';
import { H2 } from '@/src/shared/components/typography';

export function DiscoverSection() {
  const discoverCards = [
    {
      title: "12-Month System Overview",
      description: "Structured 12-month engineering talent production pipeline with two distinct phases",
      image: "/images/flagship-program-students.jpg",
      href: "/flagship-program"
    },
    {
      title: "Documented Evidence", 
      description: "Systematic documentation of program outcomes through evaluation rubrics and performance summaries",
      image: "/images/short-programs-professionals.jpg",
      href: "/outcomes"
    },
    {
      title: "Employer Partnerships",
      description: "Partner with HI Labs to access deployable junior engineers with verified capabilities", 
      image: "/images/hero-engineering-career.jpg",
      href: "/employers"
    }
  ];

  return (
    <section className="w-full">
      <div className="bg-gray-50 py-16">
        <div className="px-8 md:px-12">
          <H2 className="text-primary mb-12">Discover</H2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {discoverCards.map((card, index) => (
              <ImageCard
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
                href={card.href}
                imageHeight="h-52"
                className="hover:border-accent/60 hover:shadow-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
