"use client";
import { Fragment, useEffect, useRef, useState, type CSSProperties } from "react";
import Link from "next/link";
import { Mail, FileText, MessageSquare, User } from "lucide-react";
import { profile } from "@/lib/data";
import EmailLink from "./EmailLink";

// Welding / grinding style sparks: orange, yellow and white-hot flecks flying outward
const SPARKS = [
  { dx: -12, dy: -14, dur: 520, delay: 0, c: "#fde047" },
  { dx: 9, dy: -16, dur: 600, delay: 30, c: "#fb923c" },
  { dx: 16, dy: -5, dur: 480, delay: 60, c: "#fff7ed" },
  { dx: -16, dy: -4, dur: 560, delay: 20, c: "#fb923c" },
  { dx: 3, dy: -19, dur: 650, delay: 50, c: "#fde047" },
  { dx: 12, dy: -11, dur: 420, delay: 90, c: "#fff7ed" },
];

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

export default function About() {
  const listRef = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      setProgress(1);
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = listRef.current;
      if (!el) return;
      const { top, height } = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the list enters the lower part of the screen, 1 when its end reaches ~60% height
      const p = (vh * 0.9 - top) / (vh * 0.3 + height);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const totalWords = profile.about.reduce((n, p) => n + p.split(/\s+/).length, 0);
  let wordIndex = 0;

  const btn =
    "group flex w-[68px] flex-col items-center gap-1.5 rounded-md border border-line py-2.5 text-muted transition-colors hover:bg-[var(--hover)] hover:text-fg";
  const label =
    "font-mono text-[10px] tracking-wide text-soft transition-colors group-hover:text-fg";

  return (
    <section id="about">
      <style>{`
        .about-sparks {
          position: absolute;
          top: 55%;
          right: -2px;
          width: 0;
          height: 0;
          pointer-events: none;
        }
        .about-spark {
          position: absolute;
          left: 0;
          top: 0;
          width: 2px;
          height: 2px;
          border-radius: 9999px;
          background: var(--c);
          box-shadow: 0 0 4px 1px var(--c);
          opacity: 0;
          animation: about-spark var(--dur) cubic-bezier(0.2, 0.7, 0.4, 1) var(--delay) forwards;
        }
        @keyframes about-spark {
          0%   { opacity: 0; transform: translate(0, 0) scale(1); }
          10%  { opacity: 1; }
          65%  { opacity: 1; transform: translate(var(--dx), var(--dy)) scale(1); }
          100% { opacity: 0; transform: translate(calc(var(--dx) * 1.3), calc(var(--dy) + 9px)) scale(0.3); }
        }
      `}</style>
      <h2 className="px-6 pt-6">
        <User size={32} strokeWidth={1.75} className="text-fg" aria-hidden="true" />
        <span className="sr-only">About</span>
      </h2>
      <ul ref={listRef} className="space-y-4 px-6 pb-6 pt-4 font-mono text-[13px] text-muted leading-relaxed">
        {profile.about.map((p) => (
          <li key={p} className="flex gap-3">
            <span className="mt-2.5 size-1 shrink-0 rounded-full bg-soft" />
            <span>
              {p.split(/\s+/).map((word) => {
                const t = Math.min(1, Math.max(0, progress * totalWords - wordIndex));
                const i = wordIndex++;
                return (
                  <Fragment key={i}>
                    <span className="relative inline-block text-fg" style={{ opacity: 0.2 + 0.8 * t }}>
                      {word}
                      {t >= 1 && !reduced && (
                        <span aria-hidden="true" className="about-sparks">
                          {SPARKS.map((sp, k) => (
                            <span
                              key={k}
                              className="about-spark"
                              style={
                                {
                                  "--dx": `${sp.dx}px`,
                                  "--dy": `${sp.dy}px`,
                                  "--dur": `${sp.dur}ms`,
                                  "--delay": `${sp.delay}ms`,
                                  "--c": sp.c,
                                } as CSSProperties
                              }
                            />
                          ))}
                        </span>
                      )}
                    </span>{" "}
                  </Fragment>
                );
              })}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap justify-center gap-2 px-6 pb-7">
        <a href="#contact" className={btn}>
          <MessageSquare className="size-4" aria-hidden="true" />
          <span className={label}>Contact</span>
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className={btn}>
          <GithubIcon />
          <span className={label}>GitHub</span>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className={btn}>
          <LinkedinIcon />
          <span className={label}>LinkedIn</span>
        </a>
        <EmailLink className={btn}>
          <Mail className="size-4" aria-hidden="true" />
          <span className={label}>Mail</span>
        </EmailLink>
        <Link href="/resume" className={btn}>
          <FileText className="size-4" aria-hidden="true" />
          <span className={label}>Resume</span>
        </Link>
      </div>
    </section>
  );
}