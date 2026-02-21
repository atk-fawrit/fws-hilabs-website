export const homeData = {
  hero: {
    images: [
      { src: '/images/Image-R.png', textPosition: 'far-left' as const },
      { src: '/images/Image-Right.png', textPosition: 'left' as const }
    ]
  },
  pipeline: {
    stages: [
      {
        id: 'application',
        title: 'Application',
        subtitle: 'Entry Point',
        duration: 'Week 1-2',
        number: '01'
      },
      {
        id: 'phase-one',
        title: 'Training',
        subtitle: 'full time workshop',
        duration: 'Month 1-6',
        number: '02'
      },
      {
        id: 'evaluation',
        title: 'Evaluation',
        subtitle: 'Assessment',
        duration: 'Month 6-7',
        number: '03'
      },
      {
        id: 'phase-two',
        title: 'Internship',
        subtitle: 'external company',
        duration: 'Month 7-12',
        number: '04'
      },
      {
        id: 'exit',
        title: 'Graduation',
        subtitle: 'Deployment Ready',
        duration: 'Month 12',
        number: '05'
      }
    ]
  },
  programs: {
    backgroundImage: '/images/Bg-Transform.jpg',
    main: [
      {
        title: 'Flagship Program',
        description: 'Structured pipeline with enforced evaluation gates and supervised deployment',
        image: '/images/FlagShip.png',
        href: '/flagship-program',
        badge: 'Flagship',
        duration: '12 Months',
        tagline: 'Transform into a deployment-ready engineer'
      },
      {
        title: 'Short Programs for Professionals',
        description: 'Weekend skill-focused modules for working professionals',
        image: '/images/ShortProgram.jpg',
        href: '/courses',
        badge: 'Professional',
        duration: 'Weekends',
        tagline: 'Upskill while you work'
      }
    ]
  },
  explore: {
    cards: [
      {
        title: "Admissions Process",
        description: "Transparent selection system with clearly defined criteria",
        image: '/images/admissions-process.jpg',
        href: "/admissions",
      },
      {
        title: "Lucknow Laboratory",
        description: "In-person engineering laboratory facility",
        image: '/images/lucknow-lab-facility.jpg',
        href: "/lucknow-lab",
      },
      {
        title: "Documented Outcomes",
        description: "Systematic documentation of program outcomes through evaluation rubrics",
        image: '/images/evaluation-system.jpg',
        href: "/outcomes",
      },
      {
        title: "Employer Partnerships",
        description: "Partner with HI Labs to access deployable junior engineers",
        image: '/images/hero-production-system.jpg',
        href: "/employers",
      }
    ]
  },
  identity: {
    positive: [
      { text: "Engineering talent production system tailered for the AI Era" },
      { text: "AI-enriched and evolved software engineering programs" },
      { text: "Real work environment focused on producing deployable junior engineers" }
    ],
    negative: [
      { text: "Traditional educational institution missing hands-on experiences" },
      { text: "Placement agency with guaranteed job outcomes" },
      { text: "Training/coaching institute that values certifcates over skills" }
    ]
  },
  cta: {
    title: "Ready to Begin?",
    description: "Join the next cohort of engineering talent",
    buttonText: "Submit Application for Review",
    buttonHref: "/admissions"
  },
  footer: {
    companyInfo: {
      title: "HI Labs",
      description: "Human Intelligence Labs Private Limited.\nEngineering talent production through structured evaluation\nand supervised deployment."
    },
    sections: [
      {
        title: "Programs",
        links: [
          { href: "/flagship-program", label: "Flagship Program" },
          { href: "/admissions", label: "Admissions" },
          { href: "/courses", label: "Courses" },
          { href: "/outcomes", label: "Outcomes" }
        ]
      },
      {
        title: "Information",
        links: [
          { href: "/employers", label: "Employers" },
          { href: "/about", label: "About" }
          { href: "/", label: "Contact" }
        ]
      }
    ],
    copyright: "© 2024 Human Intelligence Labs Private Limited. All rights reserved."
  }
};
