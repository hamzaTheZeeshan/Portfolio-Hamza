"use client";
import { skills } from "@/lib/data";
import { Computer } from "lucide-react";
export default function TechStack() {
  return (
    <section id="stack">
      <h2 className="px-6 pt-6">
        <Computer size={32} strokeWidth={1.75} className="text-fg" aria-hidden="true" />
        <span className="sr-only">Projects</span>
      </h2>
      <div className="grid grid-cols-2 gap-3 px-6 py-8 sm:grid-cols-3 lg:grid-cols-5">
        {skills.map(({ name, category, Icon, color }) => (
          <div
            key={name}
            className="flex flex-col gap-3 rounded-xl border border-line bg-card p-4 transition-colors hover:border-fg/30"
          >
            <Icon size={24} color={color} className={color ? undefined : "text-fg"} aria-hidden="true" />
            <div>
              <p className="text-[14px] font-semibold leading-tight text-fg">{name}</p>
              <p className="mt-1 text-[12px] leading-tight text-soft">{category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}