export const profile = {
  name: "Rayen Salhi",
  role: "Full-Stack Developer",
  location: "Monastir, Tunisia",
  status: "Available for new work — Q3 2026",
  email: "rayen.rsalhi9@gmail.com",
  github: "https://github.com/rayenrsalhi9",
  linkedin: "https://www.linkedin.com/in/rayen-salhi/",
  whoami:
    "I'm a full-stack developer who builds AI-powered web applications from concept to deployment. Whether it's an enterprise intranet with autonomous agents, a polished food delivery platform, or a real-time collaboration tool — I ship clean, scalable solutions across the entire stack. React, Next.js, Laravel, PostgreSQL, AI integrations — if you need a web app built, optimized, or reimagined, you've found the right person.",
};

export const projects = [
  {
    year: "2026",
    title: "Enterprise Intranet & AI Forum Agent",
    role: "Final year project — ArabSoft",
    summary:
      "Enterprise intranet with a full DMS (Office preview, audit trails), real-time chat via Pusher WebSockets, forums, blogs, articles, surveys, reminders with calendar, RBAC, and i18n. Includes an autonomous n8n AI agent with 9 HTTP tools, buffer-window memory, and per-message JWT re-auth for managing forum content via natural language.",
    stack: ["Laravel 9", "Angular 12", "n8n", "OpenRouter", "Pusher", "JWT"],
    image: "https://res.cloudinary.com/dmztczwqb/image/upload/v1782400404/enterprise-intranet_fjcejz.jpg",
  },
  {
    year: "2025",
    title: "Foodify — Food Delivery Platform",
    role: "Solo build",
    summary:
      "Production-grade food delivery web app with secure auth, category-based menu browsing, smart search, cart management, order placement and tracking, plus a fully responsive UI optimized for every device.",
    stack: ["React 19", "TypeScript", "Express.js", "PostgreSQL", "Radix UI"],
    image: "https://res.cloudinary.com/dmztczwqb/image/upload/v1782460237/WhatsApp_Image_2026-06-26_at_8.49.22_AM_pn1prs.jpg",
  },
  {
    year: "2025",
    title: "ProjectRoom — AI Collaboration Platform",
    role: "Solo build",
    summary:
      "AI-powered collaboration platform for teams, students and startups. Features OpenAI-driven task generation, real-time progress tracking, structured review workflows, role-based access and light/dark themes.",
    stack: ["React", "TypeScript", "Supabase", "OpenAI API", "shadcn/ui"],
    image: "https://res.cloudinary.com/dmztczwqb/image/upload/v1782400404/project-room_qlkc1b.png",
  },
  {
    year: "2025",
    title: "CastGPT — AI Podcast Recommender",
    role: "Side project",
    summary:
      "AI-powered podcast recommendation chatbot combining GPT for natural conversations with Supabase pgvector for semantic search — built around vector embeddings and an AI-driven recommendation pipeline.",
    stack: ["React 19", "LangChain.js", "Supabase pgvector", "OpenAI", "Ollama"],
    image: "https://res.cloudinary.com/dmztczwqb/image/upload/v1782400405/cast-gpt_trjp0v.png",
  },
];

export const experience = [
  {
    company: "ArabSoft",
    logo: "https://res.cloudinary.com/dmztczwqb/image/upload/v1782400431/arabsoft-logo_ajxgfd.jpg",
    role: "Final Year Project Internship (PFE)",
    period: "Feb 2026 — Jun 2026",
    bullets: [
      "Contributed to the development and enhancement of a large-scale enterprise intranet platform built with Laravel and Angular.",
      "Developed and maintained multiple business modules including document management, forums, blogs, surveys, reminders, notifications, and user administration.",
      "Implemented role-based access control using JWT-embedded permission claims and secured API endpoints.",
      "Enhanced real-time collaboration features using WebSockets for messaging and notifications.",
      "Designed and integrated an AI-powered forum assistant using n8n, OpenRouter, and Large Language Models, enabling users to create, manage, and moderate forum content through natural language conversations.",
      "Participated in backend API development, frontend feature implementation, system integration, testing, and debugging.",
    ],
    stack: ["Laravel", "Angular", "PostgreSQL", "JWT", "WebSockets", "n8n", "OpenRouter", "REST APIs"],
  },
  {
    company: "Tunisie Telecom",
    logo: "https://res.cloudinary.com/dmztczwqb/image/upload/v1782400432/LOGO_TT__cintex.jpg",
    role: "Software Development Intern",
    period: "Jan 2025 — Feb 2025",
    bullets: [
      "Designed and developed a workflow automation solution using Python and Selenium.",
      "Automated navigation and data extraction from internal workflow systems.",
      "Generated structured Excel reports that eliminated repetitive manual operations and improved reporting efficiency.",
      "Collaborated with operational teams to identify reporting needs and translate them into automated solutions.",
    ],
    stack: ["Python", "Selenium", "Excel Automation"],
  },
  {
    company: "Tunisie Telecom",
    logo: "https://res.cloudinary.com/dmztczwqb/image/upload/v1782400432/LOGO_TT__cintex.jpg",
    role: "Customer Service Intern",
    period: "Jan 2024 — Feb 2024",
    bullets: [
      "Assisted customers with technical and administrative requests.",
      "Diagnosed and resolved service-related issues while maintaining a high level of customer satisfaction.",
      "Managed customer transactions and supported daily front-office operations.",
      "Developed strong communication, problem-solving, and customer relationship management skills.",
    ],
    stack: [],
  },
];

export const education = [
  {
    school: "Higher Institute of Technological Studies of Kef (ISET Kef)",
    logo: "https://res.cloudinary.com/dmztczwqb/image/upload/v1782400431/isetkef-logo_uqlwad.jpg",
    detail: "Bachelor's Degree, Information Technologies — Software Development",
    period: "Sep 2023 — Jun 2026",
  },
  {
    school: "Hedi Khefacha High School",
    logo: "https://res.cloudinary.com/dmztczwqb/image/upload/v1782400434/lycee-hedi-khfacha-monastir-logo_oxt11q.jpg",
    detail: "Mathematics Baccalaureate",
    period: "2019 — 2023",
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    items: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Recharts"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "PostgreSQL", "MongoDB Atlas", "Supabase (pgvector)", "Firebase", "REST APIs"],
  },
  {
    label: "AI & Automation",
    items: ["OpenAI API", "LangChain.js", "Ollama", "n8n", "Selenium"],
  },
  {
    label: "Tooling",
    items: ["Git & GitHub", "Vitest"],
  },
];

export const certifications = [
  { issuer: "Scrimba", title: "Advanced React", topic: "Advanced patterns, performance optimization, and complex state management" },
  { issuer: "Scrimba", title: "Command Line Basics", topic: "Terminal commands, file system navigation, and shell scripting" },
  { issuer: "Scrimba", title: "Intro to AI Engineering", topic: "Prompt engineering, LLM integration, and AI-powered workflows" },
  { issuer: "Scrimba", title: "Intro to Model Context Protocol (MCP)", topic: "Building structured AI conversations with the Model Context Protocol" },
  { issuer: "Scrimba", title: "Intro to UI Design Fundamentals", topic: "Core design principles, typography, color theory, and layout" },
  { issuer: "Scrimba", title: "Learn AI Agents", topic: "Building autonomous agents with tool use and decision-making" },
  { issuer: "Scrimba", title: "Learn Express.js", topic: "Server-side development with routing, middleware, and REST APIs" },
  { issuer: "Scrimba", title: "Learn HTML and CSS", topic: "Foundations of web structure and styling" },
  { issuer: "Scrimba", title: "Learn JavaScript", topic: "Core concepts: variables, functions, objects, and async programming" },
  { issuer: "Scrimba", title: "Learn Next.js", topic: "Full-stack React with SSR, API routes, and deployment" },
  { issuer: "Scrimba", title: "Learn Node.js", topic: "Backend JavaScript: modules, file system, streams, and servers" },
  { issuer: "Scrimba", title: "Learn RAG", topic: "Retrieval-Augmented Generation with vector databases and embeddings" },
  { issuer: "Scrimba", title: "Learn React", topic: "Interactive UIs with components, state, hooks, and JSX" },
  { issuer: "Scrimba", title: "Learn React Router", topic: "Client-side routing with nested routes, loaders, and navigation" },
  { issuer: "Scrimba", title: "Learn TypeScript", topic: "Type-safe JavaScript with types, interfaces, and generics" },
  { issuer: "freeCodeCamp", title: "Responsive Web Design", topic: "HTML, CSS, flexbox, grid, and responsive design principles" },
];
