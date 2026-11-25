"use client";

import { useEffect, useMemo, useState } from "react";
import { profile } from "@/lib/data";
import { Activity } from "lucide-react"; 
type Day = {
  date: string;
  count: number;
  level: number;
};

type ApiResponse = {
  contributions?: Day[];
  total?: {
    lastYear?: number;
  };
};

const SHADE_COLORS = [
  "var(--chip)",
  "#0e4429",
  "#006d32",
  "#26a641",
  "#39d353",
] as const;

export default function GitHubActivity() {
  const [days, setDays] = useState<Day[]>([]);
  const [total, setTotal] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ctrl = new AbortController();

    async function fetchGithubActivity() {
      setLoading(true);
      setFailed(false);

      try {
        const res = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${profile.githubUser}?y=last`,
          { signal: ctrl.signal }
        );

        if (!res.ok) {
          throw new Error(`HTTP Error ${res.status}`);
        }

        const data: ApiResponse = await res.json();

        if (!ctrl.signal.aborted) {
          setDays(data.contributions ?? []);
          setTotal(data.total?.lastYear ?? null);
        }
      } catch (err: unknown) {
        // Ignore intentional cancellations from React Strict Mode or unmounting
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }
        setFailed(true);
      } finally {
        if (!ctrl.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchGithubActivity();

    return () => {
      ctrl.abort();
    };
  }, []);

  // Memoize week column calculation so it only runs when `days` updates
  const weeks = useMemo(() => {
    const result: Day[][] = [];
    days.forEach((d, i) => {
      if (i % 7 === 0) result.push([]);
      result[result.length - 1].push(d);
    });
    return result;
  }, [days]);

  return (
    <section id="github">
      <h2 className="px-6 pt-6">
        <Activity size={32} strokeWidth={1.75} className="text-fg" aria-hidden="true" />
        <span className="sr-only">Projects</span>
      </h2>
      <div className="px-6 py-6">
        <p className="mb-3 font-mono text-xs text-soft">@{profile.githubUser}</p>

        <div
          role="img"
          aria-label={
            total === null
              ? "GitHub contribution graph"
              : `GitHub contribution graph: ${total} contributions in the last year`
          }
          className="overflow-x-auto pb-2"
        >
          <div className="flex gap-[3px]">
            {weeks.map((w, i) => (
              <div key={i} className="flex flex-col gap-[3px]">
                {w.map((d) => (
                  <span
                    key={d.date}
                    title={`${d.count} contributions on ${d.date}`}
                    className="size-[10px] rounded-[2px]"
                    style={{
                      background: SHADE_COLORS[d.level] ?? SHADE_COLORS[0],
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        <p className="mt-3 font-mono text-xs text-soft">
          {failed ? (
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              View activity on GitHub
            </a>
          ) : loading ? (
            "Loading…"
          ) : (
            `${total ?? 0} contributions in the last year`
          )}
        </p>
      </div>
    </section>
  );
}