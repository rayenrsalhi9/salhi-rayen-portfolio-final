export interface Certification {
  name: string;
  issuer: string;
  file: string;
  tech: string | null;
  description: string;
}

export const certifications: Certification[] = [
  {
    name: "Advanced React",
    issuer: "Scrimba",
    file: "/certificates/advanced-react.pdf",
    tech: "react",
    description: "Advanced patterns, performance optimization, and complex state management",
  },
  {
    name: "Command Line Basics",
    issuer: "Scrimba",
    file: "/certificates/command-line-basics.pdf",
    tech: "bash",
    description: "Terminal commands, file system navigation, and shell scripting",
  },
  {
    name: "Intro to AI Engineering",
    issuer: "Scrimba",
    file: "/certificates/intro-to-ai-engineering.pdf",
    tech: "openai",
    description: "Prompt engineering, LLM integration, and AI-powered workflows",
  },
  {
    name: "Intro to Model Context Protocol (MCP)",
    issuer: "Scrimba",
    file: "/certificates/intro-to-mcp.pdf",
    tech: "mcp",
    description: "Building structured AI conversations with the Model Context Protocol",
  },
  {
    name: "Intro to UI Design Fundamentals",
    issuer: "Scrimba",
    file: "/certificates/intro-to-ui-design-fundamentals.pdf",
    tech: "figma",
    description: "Core design principles, typography, color theory, and layout",
  },
  {
    name: "Learn AI Agents",
    issuer: "Scrimba",
    file: "/certificates/learn-ai-agents.pdf",
    tech: null,
    description: "Building autonomous agents with tool use and decision-making",
  },
  {
    name: "Learn Express.js",
    issuer: "Scrimba",
    file: "/certificates/learn-expressjs.pdf",
    tech: "express",
    description: "Server-side development with routing, middleware, and REST APIs",
  },
  {
    name: "Learn HTML and CSS",
    issuer: "Scrimba",
    file: "/certificates/learn-html-and-css.pdf",
    tech: "html",
    description: "Foundations of web structure and styling",
  },
  {
    name: "Learn JavaScript",
    issuer: "Scrimba",
    file: "/certificates/learn-javascript.pdf",
    tech: "javascript",
    description: "Core concepts: variables, functions, objects, and async programming",
  },
  {
    name: "Learn Next.js",
    issuer: "Scrimba",
    file: "/certificates/learn-nextjs.pdf",
    tech: "nextjs",
    description: "Full-stack React with SSR, API routes, and deployment",
  },
  {
    name: "Learn Node.js",
    issuer: "Scrimba",
    file: "/certificates/learn-nodejs.pdf",
    tech: "nodejs",
    description: "Backend JavaScript: modules, file system, streams, and servers",
  },
  {
    name: "Learn RAG",
    issuer: "Scrimba",
    file: "/certificates/learn-rag.pdf",
    tech: null,
    description: "Retrieval-Augmented Generation with vector databases and embeddings",
  },
  {
    name: "Learn React",
    issuer: "Scrimba",
    file: "/certificates/learn-react.pdf",
    tech: "react",
    description: "Interactive UIs with components, state, hooks, and JSX",
  },
  {
    name: "Learn React Router",
    issuer: "Scrimba",
    file: "/certificates/learn-react-router.pdf",
    tech: "react-router",
    description: "Client-side routing with nested routes, loaders, and navigation",
  },
  {
    name: "Learn TypeScript",
    issuer: "Scrimba",
    file: "/certificates/learn-typescript.pdf",
    tech: "typescript",
    description: "Type-safe JavaScript with types, interfaces, and generics",
  },
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    file: "/certificates/www.freecodecamp.org_certification_rayen_salhi_responsive-web-design.png",
    tech: null,
    description: "HTML, CSS, flexbox, grid, and responsive design principles",
  },
];

export const INITIAL_VISIBLE = 6;
