import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio/portfolio-page";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Salhi Rayen — Full-Stack Developer" },
      {
        name: "description",
        content:
          "Full-Stack Developer specializing in React, Next.js, Node.js, PostgreSQL, and AI-powered applications.",
      },
      { property: "og:title", content: "Salhi Rayen — Full-Stack Developer" },
      {
        property: "og:description",
        content:
          "Full-Stack Developer specializing in React, Next.js, Node.js, PostgreSQL, and AI-powered applications.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <PortfolioPage />;
}
