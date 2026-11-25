import Link from "next/link";
import { profile } from "@/lib/data";
import { posts } from "@/lib/content";
import EmailLink from "./EmailLink";
import { Phone } from "lucide-react";
export default function Contact() {
  return (
    <section id="contact">
      <h2 className="px-6 pt-6">
        <Phone size={32} strokeWidth={1.75} className="text-fg" aria-hidden="true" />
        <span className="sr-only">Projects</span>
      </h2>
      <div className="px-6 py-6 text-[14px] text-muted">
        <p>Open to interesting work and collaborations. Say hi:</p>
        <EmailLink className="mt-3 inline-block font-mono text-fg underline underline-offset-4">
          {profile.email}
        </EmailLink>
        <div className="mt-4 flex gap-4 font-mono text-xs">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-fg">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-fg">LinkedIn</a>
          <a href={profile.x} target="_blank" rel="noreferrer" className="hover:text-fg">X</a>
        </div>
      </div>
      <p className="border-t border-line px-6 py-5 font-mono text-[11px] text-soft">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </section>
  );
}
