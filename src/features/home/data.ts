export const heroLayoutConfig = {
  CARD_W: 250,
  CARD_H: 310,
  EXP_W: 370,
  EXP_H: 510,
  CARD_GAP: 36,
  PUSH_EXTRA: 60,
  CENTER_IDX: 2,
};

export const heroTextContent = {
  mainText: 'HI Labs',
  subText: 'Engineering talent production and deployment',
  aiEnrichedText: 'AI-Enriched Software Engineering',
  flagshipText: 'HiLabs Flagship Program',
};

export const homeData = {
  pipeline: {
    stages: [
      {
        id: 'application',
        title: 'Application',
        subtitle: 'Entry Point',
        tagline: 'Entry: Only those who mean it, make it in',
        number: '01',
        details: {
          description: 'Structured application and assessment process',
          highlights: [
            'Aptitude check — we assess how you think, not what you know',
            'Commitment check — ready to give your best',
            'Program orientation — know what to expect',
            'Enrollment & onboarding — begin your journey',

          ]
        }
      },
      {
        id: 'training',
        title: 'Foundation',
        subtitle: 'Phase 1',
        tagline: 'Objective: Problem-solving fundamentals first',
        number: '02',
        details: {
          description: 'Build the technical base before anything else',
          highlights: [
            'How computers think — logic, data & problem solving',
            'Storing, querying & managing information',
            'Writing clean code and understanding how software is built',
            'Using AI as a tool, not a shortcut'
          ]
        }
      },
      {
        id: 'Advanced',
        title: 'Advanced',
        subtitle: 'Phase 2',
        tagline: 'Outcome: Build practical full-stack applications end to end',
        number: '03',
        details: {
          description: 'Full-stack development and modern software technologies',
          highlights: [
            'Build complete web apps — front to backDatabases, APIs & how the internet actually works',
            'Foundations of Generative AI & how to integrate it',
            'Ship it — testing, deployment & making things live',
            
          ]
        }
      },
      {
        id: 'Execution',
        title: 'Execution',
        subtitle: 'Phase 3',
        tagline: 'Goal: Work like a software engineer, not a student',
        number: '04',
        details: {
          description: 'Real-world implementation and AI-assisted workflows',
          highlights: [
            'Code with AI assistance — and know when not to',
            'Work on live projects with real codebases & real stakes',
            'Collaborate like a team — standups, sprints & reviews',
            'Think like an engineer, own like a founder'
          ]
        }
      },
      {
        id: 'internship',
        title: 'Internship',
        subtitle: 'EXTERNAL COMPANY',
        tagline: 'Placement: This is where the classroom becomes your career.',
        number: '05',
        details: {
          description: 'Your training ends. Your career begins.',
          highlights: [
            'Student gets placed — paid or stipend-based ',
            '2–6 months of real work at an actual company',
            'Daily mentorship so you are never on your own',
            'Walk out interview-ready, offer-ready',
        
          ]
        }
      }
    ]
  },
  programs: {
    backgroundImage: '/images/Bg-Transform.jpg',
    main: [
      {
        title: 'Flagship Program',
        description: 'Structured pipeline with enforced evaluation gates and supervised deployment',
        image: '/images/Flag-Ship.png',
        href: '/flagship-program',
        badge: 'Flagship',
        duration: '4 Months Training + Internship',
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
          { href: "/about", label: "About" },
          { href: "/", label: "Contact" }
        ]
      }
    ],
    copyright: "© 2024 Human Intelligence Labs Private Limited. All rights reserved."
  }
};
