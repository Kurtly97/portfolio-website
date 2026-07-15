export type CaseStudySection = {
  heading?: string;
  body?: string;
  images: string[];
};

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  overview: string;
  scope?: string;
  tools?: string;
  year?: string;
  websiteUrl?: string;
  challengeUrl?: string;
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "the-accountingbytes",
    title: "The Accounting Bytes",
    category: "Brand Identity & Digital Assets",
    overview:
      'A monogram-based identity for The Accounting Bytes, an online academy making accounting and business education more accessible. The logo merges "T," "A," and "B" into a single confident mark, paired with a warm, approachable palette built for both print and digital use.',
    scope:
      "Logo design · Brand guidelines · Color system · Social media kit · Website mockup",
    year: "2021",
    websiteUrl: "https://theaccountingbytes.com",
    sections: [
      {
        images: [
          "/projects/the-accountingbytes/01.png",
          "/projects/the-accountingbytes/02.png",
          "/projects/the-accountingbytes/03.png",
          "/projects/the-accountingbytes/04.png",
          "/projects/the-accountingbytes/05.png",
          "/projects/the-accountingbytes/06.png",
        ],
      },
    ],
  },
  {
    slug: "arcs",
    title: "Advanced Robust Cooperative System (ARCS)",
    category: "Brand Identity & Platform Design",
    overview:
      "ARCS (Advanced Robust Cooperative System) is a SaaS platform that helps cooperatives across the Philippines manage savings, loans, and membership all in one place. The brand needed to feel trustworthy and official, while staying approachable for everyday co-op members. The visual identity centers on a clean wordmark and a confident blue-and-violet palette, carried across the platform UI, pitch materials, and marketing collateral.",
    scope:
      "Brand identity · UI/UX design · Pitch deck design · Brochure design · Marketing collateral",
    year: "2022",
    sections: [
      {
        heading: "Brand Identity",
        body: "A clean, geometric mark paired with a deep indigo and coral palette — built to read as credible and modern, without losing warmth.",
        images: ["/projects/arcs/01.png"],
      },
      {
        heading: "The Platform",
        body: "A full member dashboard built for cooperatives — savings, loans, co-op updates, and organizational charts, all in one login. Designed to make complex financial processes feel simple for everyday members.",
        images: ["/projects/arcs/02.png"],
      },
      {
        heading: "Pitch Deck",
        body: "A bold, high-energy deck designed to pitch ARCS to investors and partners — translating dense data (market size, financial projections, team) into something easy to scan and remember.",
        images: ["/projects/arcs/03.png"],
      },
      {
        heading: "Promotional Materials",
        body: "T-shirts, pen and mug designs, print designs using bold typography and a playful visual hook to cut through the noise.",
        images: [
          "/projects/arcs/04.png",
          "/projects/arcs/05.png",
          "/projects/arcs/06.png",
          "/projects/arcs/07.png",
        ],
      },
    ],
  },
  {
    slug: "36-days-of-type",
    title: "36 Days of Type",
    category: "Typography Exploration",
    overview:
      "A personal challenge: design one letter or number a day, for 36 days, exploring how far type can stretch as a visual idea. Each character became its own small experiment in color, texture, and form.",
    tools: "Illustrator · Photoshop",
    challengeUrl: "https://www.36daysoftype.com",
    sections: [
      {
        heading: "2022 Collection",
        body: "No rules, no palette, just 36 days of following whatever idea felt right for each letter. Glass, metal, gradients, grain: every piece a different direction.",
        images: [
          "/projects/36-days-of-type/01.png",
          "/projects/36-days-of-type/02.png",
          "/projects/36-days-of-type/03.png",
          "/projects/36-days-of-type/04.png",
          "/projects/36-days-of-type/05.png",
        ],
      },
      {
        heading: "2023 Collection",
        body: "A tighter approach. Working within a consistent color palette across all 36 pieces, the goal was cohesion and building a set that feels like one collection rather than 36 separate experiments.",
        images: [
          "/projects/36-days-of-type/06.png",
          "/projects/36-days-of-type/07.png",
          "/projects/36-days-of-type/08.png",
          "/projects/36-days-of-type/09.png",
          "/projects/36-days-of-type/10.png",
        ],
      },
      {
        heading: "Experiments",
        images: [
          "/projects/36-days-of-type/11.png",
          "/projects/36-days-of-type/12.png",
          "/projects/36-days-of-type/13.png",
          "/projects/36-days-of-type/14.png",
        ],
      },
    ],
  },
  {
    slug: "zigmafy",
    title: "Zigmafy",
    category: "Brand identity & UI/UX for an AI-powered POS platform",
    overview:
      "Zigmafy is a point-of-sale system built for Filipino retail businesses designed to be simple enough for a sari-sari store owner, yet powerful enough to run multiple branches.\n\nI led the brand identity and product UI, from logo and visual language to the full dashboard experience: onboarding, inventory, cashier flow, and reporting.",
    scope:
      "Logo & Brand Identity · UI/UX Design · Dashboard Design · Marketing Collateral",
    year: "2025",
    websiteUrl: "https://zigmafy.com",
    sections: [
      {
        images: ["/projects/zigmafy/01.png"],
      },
      {
        heading: "Challenge",
        body: "Most Filipino MSME retailers still track sales by hand. Existing POS tools were either too complex, too expensive, or didn't account for local needs like BIR compliance and unreliable internet access. The brand and product needed to feel approachable to a first-time digital user, while still handling serious business operations underneath.",
        images: [
          "/projects/zigmafy/02.png",
          "/projects/zigmafy/03.png",
        ],
      },
      {
        heading: "Approach",
        body: 'I designed a clean, friendly visual identity centered around the "Z" mark — simple enough to read at icon size, distinct enough to stand alone. For the product, I focused on reducing friction at every step: a guided onboarding flow, a cashier dashboard built for keyboard speed, and clear visual hierarchy across inventory, sales reports, and compliance tools — so owners and cashiers alike could navigate without training.',
        images: [
          "/projects/zigmafy/04.png",
          "/projects/zigmafy/05.png",
        ],
      },
      {
        heading: "Result",
        body: "A cohesive product experience spanning onboarding, POS, inventory, and reporting, now piloted with real retailers across the Cordillera region under a DOST-TAPI grant, with the platform actively running across multiple branches.",
        images: [],
      },
    ],
  },
  {
    slug: "cornell-ingredients",
    title: "Cornell Ingredients",
    category: "Website design & development for a B2B food ingredients supplier",
    overview:
      "Cornell Ingredients Corporation (CIC) supplies food ingredients to manufacturers and distributors across the Philippines — the kind of business that runs on technical trust and relationships, but had no website to reflect either.\n\nI led UI/UX design and the design system for the project, collaborating closely with our front-end developer to bring it to build.",
    scope: "UI/UX Design · Design System · Front-End Collaboration",
    year: "2024",
    websiteUrl: "https://cornellingredients.com",
    sections: [
      {
        images: ["/projects/cornell-ingredients/01.png"],
      },
      {
        heading: "Phase 1 — Planning & Design",
        body: "Started with a competitive audit of two industry sites CIC pointed us to: one cluttered and outdated, the other clean but too thin on product detail. That gap set the brief: clear product info, a defined audience, and a cookie banner for EU compliance. From there, sitemap and low-fidelity Figma prototypes came first to lock in navigation and content before touching visual design. CIC had a logo and nothing else to build from, so I built a design system from scratch, greens and a leaf motif pulled from their mark, paired with a distinct serif to move past the logo's generic typeface.",
        images: [
          "/projects/cornell-ingredients/02.png",
          "/projects/cornell-ingredients/03.png",
        ],
      },
      {
        heading: "Phase 2 — Development",
        body: "Handed off a high-fidelity design system to our front-end developer, staying involved through build to review component structure against the design spec — contact page routing through three inquiry types (product consult, general, careers), responsive behavior across breakpoints, and visual QA before launch.",
        images: ["/projects/cornell-ingredients/04.png"],
      },
      {
        heading: "Phase 3 — Launch & Results",
        body: "Tested across browsers and devices, then shipped with Google Analytics tracking and a client training session so the team could read their own data. Three months post-launch: 71% increase in monthly traffic, 94% average performance score across speed, accessibility, and SEO, with Homepage, About, and Products as the top-performing pages.",
        images: ["/projects/cornell-ingredients/05.png"],
      },
    ],
  },
  {
    slug: "vivita-ph",
    title: "Vivita Philippines Website",
    category:
      "A website built three times, each version shaped by where the organization and I were at the time.",
    overview:
      "I've designed and built the Vivita Philippines website since 2021, working with the same client across three full reworks. Each version reflects a shift in the organization itself, in the technology available to me, and in how much of the process I could own.\n\nThe client has consistently supplied the website's copy drafts, images, and videos — my role has been to design and build the experience around their content.",
    scope:
      "2021–2022: Design, partial development (WordPress + Elementor, alongside a web developer)\n2023–2024: Design only (React, built by a frontend developer)\n2025–Present: Design and development, end to end (Framer)",
    websiteUrl: "https://www.vivita.ph/",
    sections: [
      {
        images: ["/projects/vivita-ph/01.png"],
      },
      {
        heading: "2021–2022 — WordPress, with help",
        body: "The first version. I designed the site in Figma and rebuilt it in WordPress using Elementor, with plugins like a social media feed sync to pull in Facebook posts automatically. An experienced web developer handled the technical setup; I worked alongside them, translating my own designs into the page builder myself where I could.\n\nThe site centered on Vivita's mission and the Vivistop makerspace concept, with an FAQ section addressing the questions parents most often asked before signing up.",
        images: ["/projects/vivita-ph/02.png"],
      },
      {
        heading: "2023–2024 — Moving off WordPress",
        body: 'By this point, the client had developed brand guidelines of their own, and the site needed to catch up to them. We also made the call to leave WordPress behind entirely, rebuilding on React for a faster, more secure site.\n\nThis version split the work cleanly: I designed it, and a frontend developer built it. The result was a cleaner, bolder layout — sharper typography, a full-bleed hero, and a simplified "by kids / with kids / for kids" framework that made Vivita\'s pillars easier to grasp at a glance.',
        images: ["/projects/vivita-ph/03.png"],
      },
      {
        heading: "2025–Present — Designer and developer, finally in one",
        body: "Vivita Philippines became its own independent entity, separate from its parent organization — and the site's messaging had to shift with it, from inviting kids to sign up, to engaging the donors and partners now needed to fund and sustain the program.\n\nThis time, I built the site myself, end to end, using Framer. No-code tooling meant I could finally act as both designer and developer without handing off to anyone else — closing a gap that had existed since the first version. The current site leads with video, surfaces real impact numbers, and gives partners clearer paths to support the work.",
        images: ["/projects/vivita-ph/04.png"],
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}
