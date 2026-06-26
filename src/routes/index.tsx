import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "@/lib/portfolio-data";

const LOGO_BASE = "https://raw.githubusercontent.com/ln-dev7/logos-apps/master/logos";

const logoMap: Record<string, string | null> = {
  "React 19": "react",
  React: "react",
  "Next.js": "nextjs",
  TypeScript: "typescript",
  "Tailwind CSS": "tailwindcss",
  "shadcn/ui": "shadcn-ui",
  Recharts: null,
  "Node.js": "nodejs",
  "Express.js": "express",
  PostgreSQL: "postgresql",
  "MongoDB Atlas": "mongodb",
  "Supabase (pgvector)": "supabase",
  Supabase: "supabase",
  "Supabase pgvector": "supabase",
  Firebase: "firebase",
  "OpenAI API": "openai",
  OpenAI: "openai",
  "LangChain.js": "langchain",
  Ollama: "ollama",
  "REST APIs": null,
  Selenium: "selenium",
  "Git & GitHub": "github",
  Vitest: "vitest",
  n8n: "n8n",
  "Laravel 9": "laravel",
  Laravel: "laravel",
  "Angular 12": "angular",
  Angular: "angular",
  OpenRouter: "openrouter",
  Pusher: "pusher",
  JWT: "jwt",
  "Radix UI": "radix-ui",
  Python: "python",
  WebSockets: "websocket",
  "Excel Automation": "microsoft-excel",
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
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rayen Salhi — Full-Stack Developer" },
      {
        name: "description",
        content:
          "Full-stack developer in Monastir, Tunisia building AI-powered web applications with React, Next.js, Laravel and n8n.",
      },
    ],
  }),
  component: Index,
});

const sections = [
  { id: "whoami", num: "01", label: "Who Am I" },
  { id: "work", num: "02", label: "Selected Work" },
  { id: "experience", num: "03", label: "Experience" },
  { id: "stack", num: "04", label: "Stack" },
  { id: "education", num: "05", label: "Education" },
  { id: "certs", num: "06", label: "Certifications" },
  { id: "contact", num: "07", label: "Contact" },
];

function Index() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-20">
          <Rail />
          <main className="min-w-0 pb-32 pt-10 lg:pt-24">
            <WhoAmI />
            <SelectedWork />
            <Experience />
            <Stack />
            <Education />
            <Certifications />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </motion.div>
  );
}

function Rail() {
  const railVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <motion.aside
      variants={railVariants}
      initial="hidden"
      animate="visible"
      className="pt-10 lg:sticky lg:top-0 lg:h-screen lg:py-14"
    >
      <div className="flex h-full flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <img
            src="https://res.cloudinary.com/dmztczwqb/image/upload/v1782403590/rayen-profile-pic_ieoayw.jpg"
            alt={profile.name}
            width={896}
            height={1152}
            className="h-14 w-14 rounded-full object-cover"
          />
          <h1 className="font-display mt-6 text-2xl leading-[1.05]">{profile.name}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{profile.role}</p>
          <p className="mt-0.5 text-sm text-muted-foreground">{profile.location}</p>

          <div className="mt-5 flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-ink)] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent-ink)]" />
            </span>
            <span className="font-mono text-[11px] tracking-wide text-muted-foreground">
              {profile.status}
            </span>
          </div>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <p className="label-caps mb-3">Index</p>
          <ul className="space-y-1.5">
            {sections.map((s, i) => (
              <motion.li
                key={s.id}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.05, ease: [0.22, 1, 0.36, 1] as const }}
              >
                <a
                  href={`#${s.id}`}
                  className="group flex items-baseline gap-3 text-sm transition-colors hover:text-[var(--accent-ink)]"
                >
                  <span className="font-mono text-[10px] text-muted-foreground">{s.num}</span>
                  <span>{s.label}</span>
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-auto pt-10"
        >
          <p className="label-caps mb-3">Elsewhere</p>
          <ul className="space-y-1.5 text-sm">
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-2">
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-2">
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className="link-underline inline-flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" /> Email
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.aside>
  );
}

function SectionHeader({ num, label }: { num: string; label: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-4 border-b border-[var(--hairline)] pb-4">
      <span className="font-mono text-xs text-muted-foreground">{num}</span>
      <h2 className="label-caps !text-[0.78rem] !text-foreground">{label}</h2>
    </div>
  );
}

function WhoAmI() {
  return (
    <motion.section
      id="whoami"
      className="scroll-mt-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <SectionHeader num="01" label="Who Am I" />
      <motion.p
        className="font-display text-3xl leading-[1.15] sm:text-[2.4rem] sm:leading-[1.1]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
      >
        {profile.whoami}
      </motion.p>
    </motion.section>
  );
}

function SelectedWork() {
  return (
    <motion.section
      id="work"
      className="mt-28 scroll-mt-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <SectionHeader num="02" label="Selected Work" />
      <motion.div
        className="space-y-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((p) => (
          <motion.article
            key={p.title}
            variants={itemVariants}
            className="group grid gap-6 sm:grid-cols-[1fr_1.2fr] sm:gap-10"
          >
            <div className="order-2 sm:order-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-muted-foreground">{p.year}</p>
                  <h3 className="font-display mt-1 text-2xl leading-tight">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.role}</p>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent-ink)]" />
              </div>
              <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-foreground/85">
                {p.summary}
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                {p.stack.map((s) => {
                  const src = logoSrc(s);
                  return (
                    <li
                      key={s}
                      className="inline-flex items-center gap-1.5 rounded-full border border-[var(--hairline)] bg-[var(--surface)] px-3 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {src && (
                        <img src={src} alt="" className="h-3.5 w-3.5" />
                      )}
                      {s}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="order-1 sm:order-2">
              <img
                src={p.image}
                alt={p.title}
                className="w-full rounded-lg border border-[var(--hairline)] object-cover shadow-sm transition-shadow duration-300 group-hover:shadow-md"
              />
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

function Experience() {
  return (
    <motion.section
      id="experience"
      className="mt-28 scroll-mt-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <SectionHeader num="03" label="Experience" />
      <motion.div
        className="divide-y divide-[var(--hairline)]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {experience.map((e) => (
          <motion.article
            key={e.company + e.period}
            variants={itemVariants}
            className="grid gap-6 py-8 sm:grid-cols-[200px_minmax(0,1fr)]"
          >
            <div>
              {"logo" in e && e.logo && (
                <img src={e.logo} alt={e.company} className="mb-2 h-7 w-7 rounded object-contain" />
              )}
              <p className="font-display text-lg leading-tight">{e.company}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{e.role}</p>
              <p className="mt-2 font-mono text-[11px] text-muted-foreground">{e.period}</p>
            </div>
            <div>
              <ul className="space-y-2 text-[15px] leading-relaxed text-foreground/85">
                {e.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2.5 h-px w-3 shrink-0 bg-[var(--hairline)]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              {e.stack.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                  {e.stack.map((s) => {
                    const src = logoSrc(s);
                    return (
                      <li
                        key={s}
                        className="inline-flex items-center gap-1.5 rounded-full border border-[var(--hairline)] bg-[var(--surface)] px-3 py-1 font-mono text-[11px] text-muted-foreground"
                      >
                        {src && <img src={src} alt="" className="h-3.5 w-3.5" />}
                        {s}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}

function Stack() {
  return (
    <motion.section
      id="stack"
      className="mt-28 scroll-mt-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <SectionHeader num="04" label="Stack" />
      <motion.div
        className="grid gap-8 sm:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skillGroups.map((g) => (
          <motion.div key={g.label} variants={itemVariants}>
            <p className="label-caps mb-3">{g.label}</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {g.items.map((it) => {
                const src = logoSrc(it);
                return (
                  <li
                    key={it}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--hairline)] bg-[var(--surface)] px-3 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {src && <img src={src} alt="" className="h-3.5 w-3.5" />}
                    {it}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

function Education() {
  return (
    <motion.section
      id="education"
      className="mt-28 scroll-mt-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <SectionHeader num="05" label="Education" />
      <motion.div
        className="divide-y divide-[var(--hairline)]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {education.map((e) => (
          <motion.div
            key={e.school}
            variants={itemVariants}
            className="grid gap-2 py-6 sm:grid-cols-[200px_minmax(0,1fr)_auto]"
          >
            <p className="font-mono text-[11px] text-muted-foreground sm:order-3">{e.period}</p>
            <p className="font-display text-lg leading-tight sm:col-span-2">
              {"logo" in e && e.logo && (
                <img src={e.logo} alt={e.school} className="-mt-0.5 mb-1 mr-2 inline h-6 w-6 rounded object-contain align-middle" />
              )}
              {e.school}
            </p>
            <p className="text-sm text-muted-foreground sm:col-span-2">{e.detail}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

function Certifications() {
  return (
    <motion.section
      id="certs"
      className="mt-28 scroll-mt-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <SectionHeader num="06" label="Certifications" />
      <motion.ul
        className="divide-y divide-[var(--hairline)]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {certifications.slice(0, 6).map((c) => {
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
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Link
          to="/certificates"
          className="link-underline inline-flex items-center gap-1.5 text-sm font-medium"
        >
          View all {certifications.length} certificates
        </Link>
      </motion.div>
    </motion.section>
  );
}

function Contact() {
  return (
    <motion.section
      id="contact"
      className="mt-28 scroll-mt-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <SectionHeader num="07" label="Contact" />
      <motion.p
        className="font-display max-w-2xl text-3xl leading-[1.15] sm:text-[2.2rem]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      >
        Have a project in mind, or want to chat about AI, automation, or shipping web apps? I read
        every message.
      </motion.p>
      <motion.div
        className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[15px]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <a href={`mailto:${profile.email}`} className="link-underline inline-flex items-center gap-2">
          <Mail className="h-4 w-4" /> {profile.email}
        </a>
        <a href={profile.linkedin} className="link-underline inline-flex items-center gap-2">
          <Linkedin className="h-4 w-4" /> LinkedIn
        </a>
        <a href={profile.github} className="link-underline inline-flex items-center gap-2">
          <Github className="h-4 w-4" /> GitHub
        </a>
      </motion.div>
    </motion.section>
  );
}

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="mt-32 flex items-baseline justify-between border-t border-[var(--hairline)] pt-6"
    >
      <p className="font-mono text-[11px] text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p className="font-mono text-[11px] text-muted-foreground">Set in Fraunces & Inter Tight</p>
    </motion.footer>
  );
}
