import { experience } from "@/lib/data";
import { Briefcase } from "lucide-react";
export default function Experience() {
  return (
    <section id="experience">
      <div className="px-6 pt-6">
        <Briefcase size={32} strokeWidth={1.75} className="text-fg" aria-hidden="true" />
      </div>

      <ol className="px-6 py-10">
        {experience.map((e) => (
          <li key={e.company + e.role} className="relative pb-10 pl-10 last:pb-0">
            {/* dot, with the line running down from it to the end of the entry */}
            <span aria-hidden="true" className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-soft" />
            <span aria-hidden="true" className="absolute bottom-0 left-[6px] top-8 w-px bg-soft/40" />

            <p className="font-mono text-[13px] text-soft">{e.period}</p>
            <h3 className="mt-2 text-xl font-semibold text-fg">{e.role}</h3>
            <p className="mt-1 text-[17px] font-medium text-fg">{e.company}</p>
            <p className="mt-2 max-w-3xl text-[16px] leading-relaxed text-muted">{e.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}