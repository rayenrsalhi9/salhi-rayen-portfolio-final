import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const LOGO_BASE = "https://raw.githubusercontent.com/ln-dev7/logos-apps/master/logos";

const issuerLogos: Record<string, string> = {
  Scrimba: "scrimba",
  freeCodeCamp: "freecodecamp",
};

interface CertificateCardProps {
  name: string;
  issuer: string;
  file: string;
  tech: string | null;
  description: string;
}

export function CertificateCard({ name, issuer, file, tech, description }: CertificateCardProps) {
  return (
    <motion.a
      href={file}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border transition-all duration-200 hover:ring-2 hover:ring-muted"
    >
      <div className="absolute right-2 top-2 z-10">
        <span aria-label="Open certificate" role="img">
          <ExternalLink className="size-4 text-muted-foreground transition-colors group-hover:text-foreground" />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2">
          <img
            src={`${LOGO_BASE}/${issuerLogos[issuer] ?? "scrimba"}.svg`}
            alt=""
            className="size-5 shrink-0"
          />
          <span className="text-xs font-medium text-muted-foreground">{issuer}</span>
        </div>
        <h3 className="font-semibold leading-tight">{name}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{description}</p>
        {tech && (
          <div className="mt-auto flex items-center gap-2">
            <img
              src={`${LOGO_BASE}/${tech}.svg`}
              alt=""
              className="size-4 shrink-0"
            />
          </div>
        )}
      </div>
    </motion.a>
  );
}
