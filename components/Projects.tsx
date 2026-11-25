"use client";
import Image from "next/image";
import { Briefcase, Code, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

// Optional extra fields. Add them to lib/data.ts per project.
type Extra = {
  banner?: string;     // wide screenshot (16:9 works best)
  label?: string;      // small pill above the category, e.g. "Team project"
  category?: string;   // e.g. "Constraint optimization"
  stack?: string[];    // e.g. ["React", "TypeScript", "Django"]
  badge?: string;      // e.g. "100% of guests seated"
};
type Project = (typeof projects)[number] & Extra;

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const banner = p.banner ?? p.image;
  const stack = p.stack ?? p.tags ?? [];
  const viewHref = p.live ?? p.repo;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay: (index % 2) * 0.08 }}
      className="group flex h-full flex-col"
    >
      {/* Banner */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-line bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
        {banner && (
          <Image
            src={banner}
            alt={`${p.title} preview`}
            fill
            priority={index < 2}
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
        {viewHref && (
          <a
            href={viewHref}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${p.title}`}
            title="View project"
            className="absolute bottom-3 right-3 grid size-9 place-items-center rounded-full bg-white text-slate-900 shadow-lg transition-transform duration-200 hover:scale-110"
          >
            <Eye size={16} strokeWidth={1.75} aria-hidden="true" />
          </a>
        )}
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col pt-4">
        {p.label && (
          <span className="mb-3 w-fit rounded-full border border-line bg-card/60 px-2.5 py-1 font-mono text-[11px] text-muted">
            {p.label}
          </span>
        )}

        {p.category && (
          <p className="font-mono text-[11px] text-soft">{p.category}</p>
        )}

        <h3 className="mt-1 text-xl font-semibold tracking-tight text-fg sm:text-[22px]">
          {p.title}
        </h3>

        <p className="mt-3 text-[13px] leading-relaxed text-muted">
          {p.description}
        </p>

        {stack.length > 0 && (
          <p className="mt-3 font-mono text-[11px] text-soft">
            {stack.join(" · ")}
          </p>
        )}

        {/* Footer: badge left, Code link right */}
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          {p.badge ? (
            <span className="rounded-md border border-line bg-card/60 px-2.5 py-1 font-mono text-[11px] text-muted">
              {p.badge}
            </span>
          ) : (
            <span />
          )}
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] text-soft transition-colors hover:text-fg"
            >
              <Code size={12} aria-hidden="true" />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <div>
      <h2 className="px-6 pt-6">
        <Briefcase size={32} strokeWidth={1.75} className="text-fg" aria-hidden="true" />
        <span className="sr-only">Projects</span>
      </h2>
      <section id="projects" className="relative px-6 py-10">

        <div className="mt-8 grid gap-x-4 gap-y-10 sm:grid-cols-2">
          {(projects as Project[]).map((p, i) => (
            <ProjectCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}