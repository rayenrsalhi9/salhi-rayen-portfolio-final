export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  initials: string;
  highlights: string[];
  techStack: string[];
}

export const experiences: Experience[] = [
  {
    company: "ArabSoft",
    role: "Final Year Project Internship (PFE)",
    period: "Feb 2026 — Jun 2026",
    location: "Tunis, Tunisia",
    initials: "AS",
    highlights: [
      "Contributed to the development and enhancement of a large-scale enterprise intranet platform built with Laravel and Angular.",
      "Developed and maintained multiple business modules including document management, forums, blogs, surveys, reminders, notifications, and user administration.",
      "Implemented role-based access control using JWT-embedded permission claims and secured API endpoints.",
      "Enhanced real-time collaboration features using WebSockets for messaging and notifications.",
      "Designed and integrated an AI-powered forum assistant using n8n, OpenRouter, and Large Language Models, enabling users to create, manage, and moderate forum content through natural language conversations.",
      "Participated in backend API development, frontend feature implementation, system integration, testing, and debugging.",
    ],
    techStack: [
      "Laravel",
      "Angular",
      "PostgreSQL",
      "JWT",
      "WebSockets",
      "n8n",
      "OpenRouter",
      "REST APIs",
    ],
  },
  {
    company: "Tunisie Telecom",
    role: "Software Development Intern",
    period: "Jan 2025 — Feb 2025",
    location: "Monastir, Tunisia",
    initials: "TT",
    highlights: [
      "Designed and developed a workflow automation solution using Python and Selenium.",
      "Automated navigation and data extraction from internal workflow systems.",
      "Generated structured Excel reports that eliminated repetitive manual operations and improved reporting efficiency.",
      "Collaborated with operational teams to identify reporting needs and translate them into automated solutions.",
    ],
    techStack: ["Python", "Selenium", "Excel Automation"],
  },
  {
    company: "Tunisie Telecom",
    role: "Customer Service Intern",
    period: "Jan 2024 — Feb 2024",
    location: "Tunis, Tunisia",
    initials: "TT",
    highlights: [
      "Assisted customers with technical and administrative requests.",
      "Diagnosed and resolved service-related issues while maintaining a high level of customer satisfaction.",
      "Managed customer transactions and supported daily front-office operations.",
      "Developed strong communication, problem-solving, and customer relationship management skills.",
    ],
    techStack: [],
  },
];
