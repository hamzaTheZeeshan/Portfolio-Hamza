import type { IconType } from "react-icons";
import {
  SiJavascript, SiTypescript, SiPython, SiCplusplus, SiHtml5, SiCss, SiReact, SiExpo,
  SiTailwindcss, SiNodedotjs, SiExpress, SiDjango, SiNumpy, SiScikitlearn, SiMongoose,
  SiGoogle, SiMysql, SiPostgresql, SiMongodb, SiSupabase, SiGit, SiGithub, SiDocker,
  SiVite, SiPostman, SiIntellijidea,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { FiCpu, FiCode } from "react-icons/fi";
import { VscVscode } from "react-icons/vsc";

/**
 * Personal content for Hamza Zeeshan's portfolio site.
 * Case studies and blog posts live in content/work.json and content/blog.json.
 */

export const profile = {
  name: "Hamza Zeeshan",
  short: "Hamza",
  role: "Junior SWE Student at FAST & Full Stack Developer",
  location: "Karachi, Pakistan",
  university: "FAST-NUCES",
  timezone: "Asia/Karachi",
  email: "hamza.zeeshan7163@gmail.com",
  github: "https://github.com/hamzaTheZeeshan",
  githubUser: "hamzaTheZeeshan", // powers the GitHub activity graph
  linkedin: "https://www.linkedin.com/in/hamza-zeeshan-0a1407332/",
  x: "https://x.com/HamzaZe97656485",
  resume: "/resume", // the generated /resume page; point to your own PDF URL if you prefer
  avatar: "/img/hamza1.jpeg",
  // Optional, used for structured data. Leave empty strings to omit.
  region: "Sindh",
  country: "Pakistan",
  about: [
    "Heyyy, I am a FAST-NUCES Software Engineer turning messy real-world workflows into live products.",
    "Shipped numerous full-stack web and mobile builds end-to-end with TypeScript, React, React Native, Node.js, Express, PostgreSQL, and Python, backed by algorithmic rigor and IT risk assurance.",
    "Now pushing into AI research and ML, tracking cutting-edge AI breakthroughs to build smarter, high-impact systems.",
  ],
  snapshot: [
    "Building full-stack web & mobile apps.",
    "Integrating AI & on-device analytics.",
    "Algorithmic problem-solving.",
    "Always learning something new.",
  ],
};

export type Category = "Web" | "Mobile" | "Desktop" | "Tooling";

export const projectFilters: ("All" | Category)[] = ["All", "Web", "Mobile", "Desktop", "Tooling"];

export const projects: {
  title: string;
  image: string;
  year: string;
  category: Category;
  featured?: boolean;
  status: "LIVE" | "WIP" | "PRIVATE";
  description: string;
  tags: string[];
  live?: string;
  repo?: string;
  /** Path of a case study in content/work.json, e.g. "/work/northwind-dashboard". */
  caseStudy?: string;
}[] = [
    {
      title: "Shadi Seat Maxxing",
      image: "/img/projects/shadimaxxing1.jpg",
      year: "2026",
      category: "Web",
      featured: true,
      status: "LIVE",
      description:
        "A wedding seating planner that solves guest placement as a constraint problem with OR-Tools, plus an interactive hall designer.",
      tags: ["React", "TypeScript", "Django", "OR-Tools CP-SAT", "React-Konva", "Zustand", "Zod"],
      live: "https://shadi-seat-maxxing-coral.vercel.app/",
      repo: "https://github.com/hamzaTheZeeshan/ShadiSeatMaxxing",
      caseStudy: "/work/shadi-seat-maxxing",
    },
    {
      title: "Receiptify",
      image: "/img/projects/receiptify1.jpg",
      year: "2026",
      category: "Mobile",
      featured: true,
      status: "LIVE",
      description:
        "An AI-powered mobile app using Gemini API to automatically extract transaction details, sender/receiver info, and timestamps from photographed receipts.",
      tags: ["React Native", "Expo", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Gemini API"],
      live: "https://lnkd.in/d2jsEgvx",
      repo: "https://lnkd.in/d4Zva2n7",
      caseStudy: "/work/receiptify",
    },
    {
      title: "InstaInsights",
      image: "/img/projects/instainsights2.jpg",
      year: "2025",
      category: "Web",
      featured: true,
      status: "LIVE",
      description:
        "A fully browser-based, zero-backend Instagram chat analytics app processing multi-inbox ZIP exports locally on-device with activity heatmaps and search.",
      tags: ["React", "TypeScript", "Vite", "Recharts", "Tailwind CSS"],
      live: "https://insta-insights-nu.vercel.app/",
      repo: "https://github.com/hamzaTheZeeshan/InstaInsights",
      caseStudy: "/work/insta-insights",
    },
    {
      title: "Word2Vec Visualizer",
      image: "/img/projects/word2vec1.jpg",
      year: "2025",
      category: "Tooling",
      featured: true,
      status: "LIVE",
      description:
        "A from-scratch implementation of Word2Vec (Skip-Gram with Negative Sampling) in Python/NumPy with an interactive t-SNE word embedding visualization.",
      tags: ["Python", "NumPy", "scikit-learn", "React", "TypeScript"],
      live: "https://word2-vec.vercel.app/",
      repo: "https://github.com/Habib332/Word2Vec",
      caseStudy: "/work/word2vec",
    },
    {
      title: "Alamgir Welfare Trust System",
      image: "/img/projects/awtsystem.jpg",
      year: "2025",
      category: "Web",
      featured: false,
      status: "LIVE",
      description:
        "A full-stack web application tracking donors, donation records, active campaigns, and auction events in real time.",
      tags: ["React", "TypeScript", "Node.js", "MySQL"],
      live: "https://awt-system-edq6.vercel.app/",
      repo: "https://github.com/hamzaTheZeeshan/AWT-System",
      caseStudy: "/work/awt-system",
    },
  ];

export const experience = [
  {
    role: "Technical Consultation and Risk Assurance Intern",
    company: "A. F. Ferguson & Co. (PwC Pakistan)",
    period: "Summer 2026",
    body: "Evaluated IT infrastructure, security controls, and change management frameworks for blue-chip clients including National Refinery, Lucky Cement, and Thal Limited. Tested IT General Controls (ITGCs) aligned with ISO 31000 across database and infrastructure environments.",
  },
];

export type Skill = {
  name: string;
  category: string;
  Icon: IconType;
  color?: string; // brand color; omit for icons that should follow the theme
};

export const skills: Skill[] = [
  // Languages
  { name: "JavaScript", category: "Language", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", category: "Language", Icon: SiTypescript, color: "#3178C6" },
  { name: "Python", category: "Language", Icon: SiPython, color: "#3776AB" },
  { name: "Java", category: "Language", Icon: FaJava, color: "#ED8B00" },
  { name: "C/C++", category: "Language", Icon: SiCplusplus, color: "#00599C" },
  { name: "x86 Assembly", category: "Language", Icon: FiCpu },
  { name: "HTML5", category: "Frontend", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", category: "Styling", Icon: SiCss, color: "#1572B6" },
  // Frameworks
  { name: "React", category: "Frontend", Icon: SiReact, color: "#61DAFB" },
  { name: "React Native", category: "Mobile", Icon: SiReact, color: "#61DAFB" },
  { name: "Expo", category: "Mobile", Icon: SiExpo },
  { name: "Tailwind CSS", category: "Styling", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", category: "Backend", Icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", category: "Backend", Icon: SiExpress },
  { name: "Django", category: "Backend", Icon: SiDjango, color: "#44B78B" },
  // Libraries
  { name: "NumPy", category: "Library", Icon: SiNumpy, color: "#4DABCF" },
  { name: "scikit-learn", category: "Library", Icon: SiScikitlearn, color: "#F7931E" },
  { name: "Mongoose", category: "Library", Icon: SiMongoose, color: "#CC3333" },
  { name: "OR-Tools", category: "Optimization", Icon: SiGoogle, color: "#4285F4" },
  // Databases
  { name: "MySQL", category: "Database", Icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", category: "Database", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", category: "Database", Icon: SiMongodb, color: "#47A248" },
  { name: "Supabase", category: "Database", Icon: SiSupabase, color: "#3FCF8E" },
  // Tools
  { name: "Git", category: "Tools", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", category: "Tools", Icon: SiGithub },
  { name: "Docker", category: "DevOps", Icon: SiDocker, color: "#2496ED" },
  { name: "AWS (basics)", category: "Cloud", Icon: FaAws, color: "#FF9900" },
  { name: "Vite", category: "Tooling", Icon: SiVite, color: "#646CFF" },
  { name: "Postman", category: "Tools", Icon: SiPostman, color: "#FF6C37" },
  { name: "VS Code", category: "Editor", Icon: VscVscode, color: "#007ACC" },
  { name: "Visual Studio", category: "Editor", Icon: FiCode, color: "#8661C5" },
  { name: "IntelliJ IDEA", category: "Editor", Icon: SiIntellijidea },
];

// Kept so anything still importing `stackGroups` keeps working: derived from `skills`, grouped by category.
export const stackGroups: Record<string, string[]> = skills.reduce<Record<string, string[]>>((acc, s) => {
  (acc[s.category] ??= []).push(s.name);
  return acc;
}, {});