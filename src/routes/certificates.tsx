import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { certifications } from "@/lib/portfolio-data";

const LOGO_BASE = "https://raw.githubusercontent.com/ln-dev7/logos-apps/master/logos";

const logoMap: Record<string, string | null> = {
  Scrimba: "scrimba",
  freeCodeCamp: "freecodecamp",
};

function logoSrc(name: string): string | null {
  const key = logoMap[name];
  if (!key) return null;
  return `${LOGO_BASE}/${key}.svg`;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certifications — Rayen Salhi" },
      {
        name: "description",
        content: "All certifications earned by Rayen Salhi from Scrimba and freeCodeCamp.",
      },
    ],
  }),
  component: CertificatesPage,
});

function CertificatesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-[720px] px-6 py-16 sm:px-10 sm:py-24">
        <Link
          to="/"
          className="link-underline mb-10 inline-flex items-center gap-1.5 text-sm"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back home
        </Link>
        <h1 className="font-display text-3xl leading-tight sm:text-4xl">
          Certifications
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {certifications.length} certifications from Scrimba and freeCodeCamp.
        </p>
        <motion.ul
          className="mt-10 divide-y divide-[var(--hairline)]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {certifications.map((c) => {
            const issuerSrc = logoSrc(c.issuer);
            return (
              <motion.li
                key={c.title}
                variants={itemVariants}
                className="py-5 transition-colors"
              >
                <div className="flex items-center gap-2">
                  {issuerSrc && (
                    <img src={issuerSrc} alt="" className="h-4 w-4 object-contain" />
                  )}
                  <span className="font-mono text-[11px] text-muted-foreground">{c.issuer}</span>
                </div>
                <p className="mt-1 text-[15px] font-medium text-foreground">{c.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{c.topic}</p>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </div>
  );
}
