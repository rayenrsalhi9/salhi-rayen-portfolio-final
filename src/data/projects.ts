export interface Project {
  title: string;
  period: string;
  description: string;
  tech: string[];
  image: string;
  url?: string;
  source?: string;
}

export const projects: Project[] = [
  {
    title: "Enterprise Intranet & AI Forum Agent",
    period: "2026",
    description:
      "Enterprise intranet with a full DMS (Office preview, audit trails), real-time chat via Pusher WebSockets, forums, blogs, articles, surveys, reminders with calendar, RBAC, and i18n. Includes an autonomous n8n AI agent with 9 HTTP tools, buffer-window memory, and per-message JWT re-auth for managing forum content via natural language.",
    tech: ["Laravel 9", "Angular 12", "n8n", "OpenRouter", "Pusher", "JWT"],
    image:
      "https://res.cloudinary.com/dmztczwqb/image/upload/f_auto,q_auto/v1782400404/enterprise-intranet_fjcejz.jpg",
    url: "https://dgi-intranet.example.com",
    source: "https://github.com/rayenrsalhi9/dgi-intranet",
  },
  {
    title: "Foodify — Food Delivery Platform",
    period: "2025",
    description:
      "Production-grade food delivery web app with secure auth, category-based menu browsing, smart search, cart management, order placement and tracking, plus a fully responsive UI optimized for every device.",
    tech: ["React 19", "TypeScript", "Express.js", "PostgreSQL", "Radix UI"],
    image: "/placeholders/foodify.svg",
    source: "https://github.com/rayenrsalhi9/foodify",
  },
  {
    title: "ProjectRoom",
    period: "2025",
    description:
      "AI-powered collaboration platform for teams, students and startups. Features OpenAI-driven task generation, real-time progress tracking, structured review workflows, role-based access and light/dark themes.",
    tech: ["React", "TypeScript", "Supabase", "OpenAI API", "shadcn/ui"],
    image:
      "https://res.cloudinary.com/dmztczwqb/image/upload/f_auto,q_auto/v1782400404/project-room_qlkc1b.png",
    url: "https://projectroom.example.com",
    source: "https://github.com/rayenrsalhi9/projectroom",
  },
  {
    title: "CastGPT — AI Podcast Recommender",
    period: "2025",
    description:
      "AI-powered podcast recommendation chatbot combining GPT for natural conversations with Supabase pgvector for semantic search — built around vector embeddings and an AI-driven recommendation pipeline.",
    tech: ["React 19", "LangChain.js", "Supabase pgvector", "OpenAI", "Ollama"],
    image:
      "https://res.cloudinary.com/dmztczwqb/image/upload/f_auto,q_auto/v1782400405/cast-gpt_trjp0v.png",
    source: "https://github.com/rayenrsalhi9/castgpt",
  },
];
