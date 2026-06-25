import { motion, AnimatePresence, useScroll, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";
import {
  Home,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Sun,
  Moon,
  Globe,
  Code2,
} from "lucide-react";
import { CertificateCard } from "@/components/portfolio/certificate-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipArrow } from "@/components/ui/tooltip";
import { useReducedMotion } from "motion/react";
import { useTheme } from "@/lib/theme";
import { BLUR_FADE_DELAY, LOGO_BASE } from "@/data/constants";
import { skills, skillLogos } from "@/data/skills";
import { experiences } from "@/data/experiences";
import { education } from "@/data/education";
import { certifications, INITIAL_VISIBLE } from "@/data/certifications";
import { projects } from "@/data/projects";
const CLOUD_BASE = "https://res.cloudinary.com/dmztczwqb/image/upload/f_auto,q_auto";

const initialLogos: Record<string, string> = {
  TT: `${CLOUD_BASE}/v1782400432/LOGO_TT__cintex.jpg`,
  AS: `${CLOUD_BASE}/v1782400431/arabsoft-logo_ajxgfd.jpg`,
  IK: `${CLOUD_BASE}/v1782400431/isetkef-logo_uqlwad.jpg`,
  HK: `${CLOUD_BASE}/v1782400434/lycee-hedi-khfacha-monastir-logo_oxt11q.jpg`,
};

export function PortfolioPage() {
  const { theme, toggleTheme } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const [showAll, setShowAll] = useState(false);
  const visibleCertifications = showAll ? certifications : certifications.slice(0, INITIAL_VISIBLE);

  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const heroWords = ["Hi,", "I'm", "Rayen"];

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.15, delayChildren: prefersReducedMotion ? 0 : 0.1 },
    },
  };

  const wordVariants = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: prefersReducedMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const floatingAnimation = prefersReducedMotion ? {} : { y: [0, -5, 0] };
  const floatingTransition = prefersReducedMotion ? {} : { duration: 4, repeat: Infinity, ease: "easeInOut" as const };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring"
      >
        Skip to content
      </a>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-primary origin-left z-50"
        style={{ scaleX: progressScale }}
      />
      <main id="main-content" className="mx-auto max-w-3xl px-6 py-12 sm:py-24">
        {/* HERO */}
        <section>
          <BlurFade delay={BLUR_FADE_DELAY * 0}>
            <div className="relative rounded-xl border p-6 sm:p-10">
              <div className="absolute inset-0 h-24 overflow-hidden rounded-t-xl [mask-image:linear-gradient(to_bottom,black,transparent)]">
                <FlickeringGrid squareSize={2} gridGap={2} flickerChance={0.3} maxOpacity={0.3} />
              </div>
              <div className="relative z-10">
                <div className="flex flex-col-reverse items-start justify-between gap-8 md:flex-row">
                  <div>
                    <motion.h1
                      className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                      variants={heroVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {heroWords.map((word, i) => (
                        <motion.span
                          key={i}
                          variants={wordVariants}
                          className="inline-block mr-[0.25em]"
                        >
                          {word}
                        </motion.span>
                      ))}
                    </motion.h1>
                    <p className="mt-4 max-w-xl text-base text-muted-foreground leading-relaxed sm:text-lg">
                      Full-Stack Developer specializing in React, Next.js, Node.js and PostgreSQL. I
                      love building AI-powered applications and modern web solutions that deliver real
                      business value.
                    </p>
                  </div>
                  <motion.div
                    className="size-24 shrink-0 overflow-hidden rounded-full border shadow-lg ring-4 ring-muted md:size-32"
                    animate={floatingAnimation}
                    transition={floatingTransition}
                  >
                    <img src={`${CLOUD_BASE}/v1782400443/rayen-profile-pic_i2no7x.png`} alt="Rayen Salhi" className="size-full object-cover" />
                  </motion.div>
                </div>
              </div>
            </div>
          </BlurFade>
        </section>

        {/* ABOUT */}
        <BlurFade delay={BLUR_FADE_DELAY * 1} className="mt-14">
          <h2 className="text-xl font-bold">About</h2>
          <div className="mt-3 flex flex-col gap-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              I'm a <strong className="underline text-foreground">Full-Stack Developer</strong> based in Monastir, Tunisia, a recent
              <strong className="underline text-foreground"> graduate in Information Technologies from ISET Kef</strong>. I love crafting <strong className="underline text-foreground">AI-powered</strong>
              experiences and shipping <strong className="underline text-foreground">production-grade web apps</strong> — from food-delivery platforms and
              collaboration tools to <strong className="underline text-foreground">enterprise intranets with autonomous LLM agents</strong> built on <strong className="underline text-foreground">n8n
              and OpenRouter</strong>.
            </p>
            <div className="overflow-hidden rounded-xl border shadow-lg">
              <img
                src={`${CLOUD_BASE}/v1782400442/rayen-salhi-portfolio-hero-image_l7njhh.png`}
                alt="Rayen Salhi workspace"
                className="h-48 w-full object-cover sm:h-64"
              />
            </div>
          </div>
        </BlurFade>

        {/* PROFESSIONAL EXPERIENCE */}
        <BlurFade delay={BLUR_FADE_DELAY * 2} className="mt-14">
          <h2 className="text-xl font-bold">Professional Experience</h2>
          <div className="mt-6 space-y-6">
            {experiences.map((e, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <div className="size-8 shrink-0 overflow-hidden rounded-full border shadow ring-2 ring-border md:size-10">
                    {initialLogos[e.initials] ? (
                      <img
                        src={initialLogos[e.initials]}
                        alt={e.company}
                        className="size-full object-cover"
                      />
                    ) : (
                      <div className="flex size-full items-center justify-center bg-background text-xs font-semibold text-muted-foreground">
                        {e.initials}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold leading-none">{e.company}</h3>
                    <p className="text-sm text-muted-foreground">{e.role}</p>
                  </div>
                  <span className="text-xs text-muted-foreground tabular-nums whitespace-nowrap shrink-0">
                    {e.period}
                  </span>
                </div>
                <div className="ml-[3.25rem]">
                  <ul className="space-y-1.5">
                    {e.highlights.map((h, j) => (
                      <li key={j} className="text-xs text-muted-foreground sm:text-sm leading-relaxed flex gap-2">
                        <span className="mt-1.5 block size-1 shrink-0 rounded-full bg-muted-foreground/40" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  {e.techStack.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1">
                      {e.techStack.map((t) => {
                        const slug = skillLogos[t];
                        return (
                          <span
                            key={t}
                            className="inline-flex items-center gap-1 border border-border text-foreground text-[11px] h-5 w-fit px-2 rounded-md font-medium"
                          >
                            {slug && (
                              <img
                                src={`${LOGO_BASE}/${slug}.svg`}
                                alt=""
                                className="size-3.5 shrink-0"
                              />
                            )}
                            {t}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </BlurFade>

        {/* EDUCATION */}
        <BlurFade delay={BLUR_FADE_DELAY * 3} className="mt-14">
          <h2 className="text-xl font-bold">Education</h2>
          <ul className="mt-6 space-y-6">
            {education.map((e, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="size-8 shrink-0 overflow-hidden rounded-full border shadow ring-2 ring-border md:size-10">
                  {initialLogos[e.initials] ? (
                    <img
                      src={initialLogos[e.initials]}
                      alt={e.school}
                      className="size-full object-cover"
                    />
                  ) : (
                    <div className="flex size-full items-center justify-center bg-background text-xs font-semibold text-muted-foreground">
                      {e.initials}
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col gap-1 min-w-0">
                  <div className="sm:flex sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-semibold">{e.school}</h3>
                      <p className="text-sm text-muted-foreground">{e.degree}</p>
                    </div>
                    <span className="text-xs text-muted-foreground tabular-nums whitespace-nowrap">
                      {e.period}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </BlurFade>

        {/* SKILLS */}
        <BlurFade delay={BLUR_FADE_DELAY * 4} className="mt-14">
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <BlurFade key={s} delay={BLUR_FADE_DELAY * 4 + BLUR_FADE_DELAY * i}>
                <span className="flex items-center gap-2 rounded-xl border bg-background border-border ring-2 ring-border/20 h-8 w-fit px-4 text-sm font-medium text-foreground">
                  {skillLogos[s] && (
                    <img
                      src={`${LOGO_BASE}/${skillLogos[s]}.svg`}
                      alt=""
                      className="size-4 shrink-0"
                    />
                  )}
                  {s}
                </span>
              </BlurFade>
            ))}
          </div>
        </BlurFade>

        {/* PROJECTS */}
        <SectionDivider label="My Projects" />
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <h2 className="text-center text-[1.875rem] font-bold tracking-tighter sm:text-[2.25rem]">
            Check out my latest work
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-base text-muted-foreground md:text-lg/relaxed">
            A selection of projects I've worked on — from AI-powered platforms to automation tools
            and full-stack web applications.
          </p>
        </BlurFade>
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[880px] mx-auto auto-rows-fr">
          {projects.map((p, i) => (
            <BlurFade key={p.title} delay={BLUR_FADE_DELAY * 6 + BLUR_FADE_DELAY * i}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative flex h-full flex-col overflow-hidden rounded-xl border border-border transition-all duration-200 hover:ring-2 hover:ring-muted"
              >
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                  <div className="absolute right-2 top-2 z-10 flex items-center gap-1.5">
                    {p.url && (
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex size-7 items-center justify-center rounded-md bg-background/80 text-muted-foreground transition-colors hover:text-foreground hover:bg-background"
                        aria-label={`Visit ${p.title} website`}
                      >
                        <Globe className="size-3.5" />
                      </a>
                    )}
                    {p.source && (
                      <a
                        href={p.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex size-7 items-center justify-center rounded-md bg-background/80 text-muted-foreground transition-colors hover:text-foreground hover:bg-background"
                        aria-label={`View ${p.title} source code`}
                      >
                        <Code2 className="size-3.5" />
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-xs text-muted-foreground">{p.period}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                    {p.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1.5" aria-hidden="true">
                    {p.tech.map((t) => {
                      const slug = skillLogos[t];
                      return (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1 border border-border text-foreground text-[11px] h-6 w-fit px-2 rounded-md font-medium"
                        >
                          {slug && (
                            <img
                              src={`${LOGO_BASE}/${slug}.svg`}
                              alt=""
                              className="size-3.5 shrink-0"
                            />
                          )}
                          {t}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.article>
            </BlurFade>
          ))}
        </div>

        {/* CERTIFICATIONS */}
        <SectionDivider label="Certifications" />
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className="text-center text-[1.875rem] font-bold tracking-tighter sm:text-[2.25rem]">
            I love learning new things
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-base text-muted-foreground md:text-lg/relaxed">
            Continuous learning is a core part of how I work. Here are some certifications I've
            earned along the way.
          </p>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[880px] mx-auto auto-rows-fr">
            <AnimatePresence>
              {visibleCertifications.map((c, i) => (
                <motion.div
                  key={c.name}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <CertificateCard name={c.name} issuer={c.issuer} file={c.file} tech={c.tech} description={c.description} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {!showAll && certifications.length > INITIAL_VISIBLE && (
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted/50"
                aria-expanded={showAll}
              >
                View all {certifications.length} certificates
                <ChevronDown className="size-4" />
              </button>
            </motion.div>
          )}
        </BlurFade>

        {/* CONTACT */}
        <section className="mt-16 sm:mt-24">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="relative rounded-xl border p-6 sm:p-10">
              <div className="absolute inset-x-0 top-0 h-1/2 overflow-hidden rounded-t-xl [mask-image:linear-gradient(to_bottom,black,transparent)]">
                <FlickeringGrid squareSize={2} gridGap={2} flickerChance={0.3} maxOpacity={0.3} />
              </div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="rounded-md bg-primary px-4 py-1 text-sm font-medium text-primary-foreground shadow">
                  Contact
                </span>
              </div>
              <div className="relative z-10">
                <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-center text-muted-foreground">
                  Want to chat? Feel free to{" "}
                  <a
                    href="mailto:rayen.rsalhi9@gmail.com"
                    className="font-medium text-blue-accent hover:underline"
                  >
                    send me an email
                  </a>{" "}
                  or reach out on{" "}
                  <a
                    href="https://www.linkedin.com/in/rayen-salhi/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-blue-accent hover:underline"
                  >
                    LinkedIn
                  </a>
                  . I'll respond whenever I can.
                </p>
              </div>
            </div>
          </BlurFade>
        </section>
      </main>

      {/* DOCK */}
      <Dock theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

const BASE_SIZE = 40;
const MAGNIFICATION = 60;

function Dock({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className="fixed inset-x-0 bottom-4 z-30 flex justify-center pointer-events-none">
      <motion.div
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="pointer-events-auto flex h-14 items-end gap-2 rounded-xl border bg-card/90 p-2 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5"
      >
        <DockItem mouseX={mouseX} tooltip="Home">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex size-full items-center justify-center"
            aria-label="Home"
          >
            <Home className="size-5" />
          </button>
        </DockItem>
        <DockDivider />
        <DockItem mouseX={mouseX} tooltip="GitHub">
          <a
            href="https://github.com/rayenrsalhi9"
            target="_blank"
            rel="noreferrer"
            className="flex size-full items-center justify-center"
            aria-label="GitHub"
          >
            <Github className="size-5" />
          </a>
        </DockItem>
        <DockItem mouseX={mouseX} tooltip="LinkedIn">
          <a
            href="https://www.linkedin.com/in/rayen-salhi/"
            target="_blank"
            rel="noreferrer"
            className="flex size-full items-center justify-center"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5" />
          </a>
        </DockItem>
        <DockItem mouseX={mouseX} tooltip="Email">
          <a
            href="mailto:rayen.rsalhi9@gmail.com"
            className="flex size-full items-center justify-center"
            aria-label="Email"
          >
            <Mail className="size-5" />
          </a>
        </DockItem>
        <DockDivider />
        <DockItem mouseX={mouseX} tooltip={theme === "dark" ? "Light mode" : "Dark mode"}>
          <button
            onClick={toggleTheme}
            className="flex size-full items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>
        </DockItem>
      </motion.div>
    </div>
  );
}

function DockItem({
  mouseX,
  tooltip,
  children,
}: {
  mouseX: ReturnType<typeof useMotionValue<number>>;
  tooltip: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const el = ref.current;
    if (!el || val === Infinity) return 100;
    const rect = el.getBoundingClientRect();
    return Math.abs(val - rect.left - rect.width / 2);
  });

  const width = useSpring(useTransform(distance, [0, 100], [MAGNIFICATION, BASE_SIZE]), {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          ref={ref}
          style={{ width, height: width, minWidth: BASE_SIZE, minHeight: BASE_SIZE }}
          className="rounded-3xl bg-background text-muted-foreground hover:text-foreground hover:bg-muted border border-border transition-colors flex items-center justify-center"
        >
          {children}
        </motion.div>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        sideOffset={8}
        className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
      >
        {tooltip}
        <TooltipArrow className="fill-primary" />
      </TooltipContent>
    </Tooltip>
  );
}

function DockDivider() {
  return <div className="w-px h-2/3 bg-border" />;
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="mt-16 sm:mt-24 flex items-center gap-4 mb-8">
      <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
      <span className="rounded-md bg-primary px-4 py-1 text-sm font-medium text-primary-foreground shadow shrink-0">
        {label}
      </span>
      <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
    </div>
  );
}
