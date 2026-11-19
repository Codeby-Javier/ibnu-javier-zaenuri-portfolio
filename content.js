/* ============================================================
   IBNU JAVIER ZAENURI — all copy and project data.
   Edit this file only; animation logic lives in script.js and
   presentation in styles.css. index.html carries the same
   strings as a no-JS fallback.
   ============================================================ */
const heroContent = {
  nav: [
    { label: "Work", href: "#work", active: true },
    { label: "About", href: "#section-03" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],

  cta: { label: "Let’s Talk", href: "#contact" },

  headline: "Javier",
  role: ["Fullstack", "Web Developer"],
  meta: ["Backend Specialist", "Frontend Professional", "UI/UX Designer", "Web3 Developer", "QA Engineer"],

  notification: {
    name: "Javier",
    time: "now",
    lead: "Fullstack",
    message: "web developer — backend depth, frontend craft, Web3 and QA in one loop.",
  },

  section2: {
    sideLeft: ["Fullstack Developer", "Production."],
    sideRight: ["Depth.", "Craft."],
  },

  /* ---- Selected Works --------------------------------------
     The hidden 3D chapter builds its stages from this array.
     `link` is the destination of the "View Project" button.
     w/h are the real image dimensions (prevents layout shift). */
  works: {
    brand: "Codeby Javier",
    projects: [
      { key: "koperasi", name: "Koperasi Modern", img: "assets/work-koperasi.webp", w: 1314, h: 599,
        cat: "Fullstack · Cooperative", year: "2026", accent: "#7fe0b0",
        title: "A cooperative management system rebuilt on native Node.js for low resource use and full transparency.",
        link: "https://github.com/Codeby-Javier/Sistem-Informasi-Koperasi-Digital" },

      { key: "marketpulse", name: "MarketPulse ID", img: "assets/work-marketpulse.webp", w: 1358, h: 601,
        cat: "Fintech · Dashboard", year: "2026", accent: "#4da3ff",
        title: "Real-time financial dashboard that puts Indonesian market data and portfolios in one place.",
        link: "https://github.com/Codeby-Javier/marketpulse-id" },

      { key: "binasol", name: "PT Binasol", img: "assets/work-binasol.webp", w: 1336, h: 597,
        cat: "Web · Corporate", year: "2026", accent: "#d7ff5a",
        title: "Corporate platform built with a Laravel API and a Next.js + React frontend.",
        link: "https://pt-binasol.com/" },

      { key: "magicbean", name: "Magic Bean", img: "assets/work-magicbean.webp", w: 1339, h: 599,
        cat: "Landing · Next.js", year: "2026", accent: "#ffb45a",
        title: "Highly interactive landing page built with Next.js, Turbopack and React.",
        link: "https://github.com/Codeby-Javier/Landing-Page-For-PT-Binasol" },

      { key: "billingpay", name: "BillingPay WiFi", img: "assets/work-billingpay.webp", w: 1354, h: 632,
        cat: "Go · ISP Billing", year: "2025", accent: "#57e0ff",
        title: "Open-source ISP billing and customer management for RT/RW Net operators.",
        link: "https://github.com/Codeby-Javier/billingpay-wifi-golang" },

      { key: "azzahra", name: "Azzahra Computer", img: "assets/work-azzahra.webp", w: 1338, h: 595,
        cat: "ERP · Retail", year: "2025", accent: "#ff8a50",
        title: "Service-store management covering transactions, HR, finance, MoU and vouchers.",
        link: "https://website.azzahracomputertegal.com/" },

      { key: "clinic", name: "Clinic Management", img: "assets/work-clinic.webp", w: 1355, h: 594,
        cat: "Healthtech · Django", year: "2025", accent: "#8fffc4",
        title: "Digital clinic ecosystem from patient registration to financial reporting.",
        link: "https://github.com/Codeby-Javier/clinic-management-django-react" },

      { key: "cuanin", name: "Cuanin", img: "assets/work-cuanin.webp", w: 1223, h: 622,
        cat: "E-commerce · Laravel", year: "2025", accent: "#ff7ad9",
        title: "Smart e-commerce with curated products and a zero-fee direct payment flow.",
        link: "https://cuanin.kuzaru.my.id/home" },

      { key: "erp", name: "ERP Inventory & Sales", img: "assets/work-erp.webp", w: 1280, h: 575,
        cat: "ERP · Inventory", year: "2025", accent: "#ffc46b",
        title: "Centralised stock, sales workflow and forecasting with real-time visibility.",
        link: "https://erp-inven-sales.kuzaru.my.id/" },

      { key: "meeting", name: "Meeting Assist", img: "assets/work-meeting-assist.webp", w: 1365, h: 599,
        cat: "AI · Productivity", year: "2025", accent: "#a58bff",
        title: "Meeting minutes and document digitisation with speech-to-text and OCR.",
        link: "https://meeting-assist-production.up.railway.app/" },

      { key: "sicuti", name: "Si Cuti", img: "assets/work-sicuti.webp", w: 1365, h: 594,
        cat: "HRMS · Laravel", year: "2025", accent: "#7ad1ff",
        title: "Leave, permission and sick-leave workflows with automated approvals.",
        link: "https://kuzaru.my.id/" },

      { key: "bulwark", name: "Bulwark", img: "assets/work-bulwark-live.webp", w: 1358, h: 526,
        cat: "Web3 · Live Market", year: "2026", accent: "#39e08b", live: true,
        title: "Live Bulwark Score trading desk: real market data, transparent fees and a verifiable on-chain result.",
        link: "https://bulwarkproof.tech/" },

      { key: "outsmart", name: "OutSmart", img: "assets/work-outsmart.webp", w: 1200, h: 675,
        cat: "Web3 · AI", year: "2026", accent: "#b07bff",
        title: "Experts versus AI arena and a private benchmark marketplace with on-chain provenance.",
        link: "https://gitlab.com/razorxpredator/outsmart" },

      { key: "aeacus", name: "Aeacus", img: "assets/work-aeacus.webp", w: 1200, h: 675,
        cat: "Web3 · Provenance", year: "2026", accent: "#55e6a5",
        title: "Wallet-native evaluation arena with Merkle proofs and verifiable receipts.",
        link: "https://aeacus.pages.dev/" },

      { key: "quantum", name: "Quantum Arena Hook", img: "assets/work-quantum-arena.webp", w: 1200, h: 675,
        cat: "Web3 · DeFi", year: "2026", accent: "#ff4d9d",
        title: "Experimental Uniswap v4 hook exploring liquidity and arena mechanics on-chain.",
        link: "https://gitlab.com/razorxpredator/quantum-arena-hook" },
    ],
  },

  /* ---- EXPERIENCE ------------------------------------------
     One card per role. `logo` points at assets/logos/; when it is
     missing, the card renders a typographic monogram instead. */
  experience: {
    eyebrow: "( 04 · Experience )",
    title: ["Seven teams.", "One throughline."],
    note: "Now building Web3 at Wealthy People — every role added a layer to the same stack.",
    companies: [
      {
        key: "wealthy",
        name: "Wealthy People",
        role: "Fullstack Developer — Web3",
        period: "Oct 2026 — Present",
        place: "",
        logo: "assets/logos/wealthy-people.png",
        logoDark: true,
        summary: "Building Web3 trading and analytics products end to end — on-chain market data, fullstack APIs and the interface behind Bulwark Score.",
        tags: ["Rust", "Bun", "React Router", "TypeScript"],
        metric: "Bulwark Score · live",
        link: "",
      },
      {
        key: "solusi",
        name: "PT Solusi Digital Handal",
        role: "Fullstack Web Developer",
        period: "Aug 2026 — Present",
        place: "Remote",
        logo: "assets/logos/solusi-digital.jpg",
        summary: "Own end-to-end delivery of KopiBow — a coffee-business platform spanning POS, inventory, payroll, finance and a mobile PWA.",
        tags: ["Go", "MongoDB", "React 19", "PWA"],
        metric: "127k LOC · 372 routes",
        link: "https://kopibow.com/",
      },
      {
        key: "bri",
        name: "PT Bank Rakyat Indonesia",
        role: "Backend Developer",
        period: "Feb 2026 — Jul 2026",
        place: "Jakarta",
        logo: "assets/logos/bri.png",
        summary: "Built the Go/Gin backend of an enterprise observability platform consolidating 32 monitoring sources across BRIMO, BRISPOT and NDS.",
        tags: ["Go", "ClickHouse", "SQL Server", "Next.js"],
        metric: "111k LOC · 112 endpoints",
        link: "",
      },
      {
        key: "binasol",
        name: "PT Bina Auto Solusi",
        role: "Frontend Developer & UI/UX Designer",
        period: "Feb 2026 — Apr 2026",
        place: "Tangerang",
        logo: "assets/logos/binasol.png",
        summary: "Designed and shipped the corporate web platform end-to-end, from Figma systems to a Laravel API and a Next.js frontend.",
        tags: ["Laravel", "Next.js", "React", "Figma"],
        metric: "−50% load · +40% organic",
        link: "https://pt-binasol.com/",
      },
      {
        key: "asus",
        name: "ASUS Center",
        role: "Fullstack Developer (Backend)",
        period: "Aug 2025 — Jan 2026",
        place: "Tegal & Cibubur",
        logo: "assets/logos/asus.png",
        summary: "Built HR and service operations for 55+ users, automating MoU and reporting workflows on a 3,000+ record MySQL database.",
        tags: ["Laravel", "CodeIgniter", "MySQL", "PHP"],
        metric: "−87.5% process time",
        link: "https://website.azzahracomputertegal.com/",
      },
      {
        key: "eduwork",
        name: "Eduwork",
        role: "Fullstack Developer — Bootcamp & Internship",
        period: "2025",
        place: "Remote",
        logo: "assets/logos/eduwork.jpg",
        summary: "Shipped end-to-end web apps with indexing, Redis caching, Docker and CI/CD — cutting deployment from two days to two hours.",
        tags: ["Docker", "CI/CD", "Redis", "Node.js"],
        metric: "−90% deploy time",
        link: "https://eduwork.id/",
      },
      {
        key: "abprima",
        name: "AB Prima Net",
        role: "Web Developer",
        period: "2025",
        place: "Yogyakarta",
        logo: "",
        summary: "Built BillingPay WiFi for 350+ locations and migrated legacy WordPress sites to PHP 8.2 with Bootstrap.",
        tags: ["Go", "MySQL", "WordPress", "Bootstrap"],
        metric: "3,500+ subscribers · 98% uptime",
        link: "https://github.com/Codeby-Javier/billingpay-wifi-golang",
      },
    ],
  },

  /* ---- BIG ROBOT section ---------------------------------- */
  bigRobot: {
    labels: { left: "Fullstack Web Developer", right: "Backend · Frontend · Web3 · QA" },
    eyebrow: "( 05 · The Mind )",
    titleLines: ["I build the whole stack.", "Then I make it feel effortless."],
    description: "From database schemas and APIs to interfaces people actually enjoy — I own the path from idea to production.",
    hint: "Scroll to move through the disciplines.",

    techIdeas: [
      {
        no: "01",
        title: "Backend & Systems",
        description: "APIs, data models and architecture that stay fast when the data grows.",
        tags: ["Rust", "Go", "Bun", "Node.js", "Laravel", "Django", "PostgreSQL", "MongoDB", "ClickHouse"],
      },
      {
        no: "02",
        title: "Frontend & Interface",
        description: "Design systems and interfaces where motion, type and structure do the talking.",
        tags: ["React", "React Router", "Next.js", "TypeScript", "Tailwind", "Alpine.js", "Figma"],
      },
      {
        no: "03",
        title: "Web3 & Quality",
        description: "Verifiable products, then the tests and QA discipline that keep them honest.",
        tags: ["Solidity", "Foundry", "viem", "Playwright", "Postman", "OWASP ZAP"],
      },
    ],
  },

  /* ---- EDITORIAL / SKILLS --------------------------------- */
  editorial: {
    eyebrow: "( 06 · The Method )",
    statement: ["Code is my medium.", "Curiosity is my engine."],
    note: "Backend depth, frontend craft, Web3 literacy and a QA habit that keeps all three honest.",
    skills: {
      title: "I Work With",
      groups: [
        { name: "Languages", items: ["Rust", "Go", "Python", "PHP", "JavaScript", "TypeScript", "SQL"] },
        { name: "Frontend", items: ["React", "React Router", "Next.js", "Alpine.js", "Tailwind CSS", "Bootstrap", "Figma"] },
        { name: "Backend & Platforms", items: ["Bun", "Laravel", "CodeIgniter", "YII", "Django", "Flask", "Gin", "Express", "WordPress", "Docker"] },
        { name: "Web3 & QA", items: ["Solidity", "Foundry", "viem", "Playwright", "Postman", "OWASP ZAP"] },
      ],
    },
    mindset: {
      title: "Learn → Build → Break → Improve",
      lines: [
        "I learn by building.",
        "I build by experimenting.",
        "I experiment by breaking things.",
        "And I improve by understanding why they broke.",
      ],
    },
    exploring: {
      title: "Currently Exploring",
      items: [
        "System design at scale",
        "Web3 primitives and security",
        "AI-assisted product workflows",
        "Design systems that actually ship",
        "Testing that prevents regressions",
      ],
    },
    ending: { lines: ["Still learning.", "Still building.", "Still curious."], note: "And probably always will be." },
  },

  /* ---- SMALL ROBOT ---------------------------------------- */
  smallRobot: {
    eyebrow: "( 07 · Still Curious )",
    titleLines: ["Always learning", "the next layer."],
    description: "A small machine, quietly paying attention — the way I try to.",
    note: "Move your cursor · it follows",
  },

  /* ---- FOOTER --------------------------------------------- */
  footer: {
    eyebrow: "( 08 · Contact )",
    headline: ["Let’s build", "something that lasts."],
    line: "Open to fullstack roles, freelance builds and interesting problems.",
    email: "javieribnu12@gmail.com",
    emailLabel: "Say hello",
    columns: [
      {
        title: "Sections",
        items: [
          { label: "Hero", href: "#top" },
          { label: "About", href: "#section-03" },
          { label: "Experience", href: "#experience" },
          { label: "Selected Works", href: "#projects" },
          { label: "The Method", href: "#method" },
        ],
      },
      {
        title: "Focus",
        items: [
          { label: "Backend & systems", href: "#method" },
          { label: "Frontend & interface", href: "#method" },
          { label: "Web3 & provenance", href: "#method" },
          { label: "QA & automation", href: "#method" },
        ],
      },
    ],
    social: [
      { label: "GitHub", href: "https://github.com/Codeby-Javier" },
      { label: "GitLab", href: "https://gitlab.com/Codeby-Javier" },
    ],
    legal: "© 2026 Ibnu Javier Zaenuri",
    note: "Built with code and curiosity.",
    backToTop: "Back to top",
  },

  /* ---- ABOUT ME ------------------------------------------- */
  about: {
    boxes: {
      who:   { title: "Who I Am",   sub: "Fullstack web developer based in Yogyakarta." },
      what:  { title: "What I Do",  sub: "Web · Product · Systems" },
      think: { title: "How I Think", sub: "Idea to impact" },
    },
    views: {
      who: {
        eyebrow: "01 — Who I Am",
        head: "Ibnu Javier Zaenuri",
        text: "A fullstack developer with backend depth, frontend craft, UI/UX instincts, Web3 literacy and a QA habit. Cumlaude, 3.89 GPA, always shipping.",
      },
      what: {
        eyebrow: "02 — What I Do",
        head: "From schema to screen.",
        text: "I build products end-to-end: data models and APIs, interfaces and design systems, Web3 primitives, and the tests that keep it all honest.",
      },
      think: {
        eyebrow: "03 — How I Think",
        head: "Idea to impact.",
        text: "Idea · Design · Develop · Deploy · Impact — then measure, learn and improve.",
      },
    },
  },
};
