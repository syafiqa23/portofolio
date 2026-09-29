"use client";

import { useState } from "react";
import { skillGroups } from "@/data/skills";
import Image from "next/image";
import {
  Brain,
  Code2,
  Database,
  Eye,
  Network,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import {
  siBootstrap,
  siCodeigniter,
  siCss,
  siDjango,
  siDocker,
  siFigma,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siLaravel,
  siLaragon,
  siLinux,
  siMariadb,
  siMysql,
  siNextdotjs,
  siNginx,
  siPhp,
  siPostgresql,
  siPostman,
  siPytorch,
  siPython,
  siRailway,
  siReact,
  siSqlite,
  siStreamlit,
  siTailwindcss,
  siTensorflow,
  siTypescript,
  siUbuntu,
  siVercel,
  siVite,
  siXampp,
} from "simple-icons";

type BrandIcon = typeof siPhp;

const imageLogos: Record<string, string> = {
  "VS Code": "/vscode-logo.svg",
  Antigravity: "/antigravity-logo.png",
};

const brandLogos: Record<string, BrandIcon> = {
  PHP: siPhp,
  Python: siPython,
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  Laravel: siLaravel,
  Django: siDjango,
  "Django Ninja": siDjango,
  "CodeIgniter 4": siCodeigniter,
  HTML5: siHtml5,
  CSS3: siCss,
  "Tailwind CSS": siTailwindcss,
  Bootstrap: siBootstrap,
  Blade: siLaravel,
  React: siReact,
  "Next.js": siNextdotjs,
  Vite: siVite,
  MySQL: siMysql,
  PostgreSQL: siPostgresql,
  MariaDB: siMariadb,
  SQLite: siSqlite,
  PyTorch: siPytorch,
  Streamlit: siStreamlit,
  TensorFlow: siTensorflow,
  Linux: siLinux,
  "Ubuntu Server": siUbuntu,
  Docker: siDocker,
  "Docker Compose": siDocker,
  Nginx: siNginx,
  "MySQL Replication": siMysql,
  Git: siGit,
  GitHub: siGithub,
  Postman: siPostman,
  Railway: siRailway,
  Vercel: siVercel,
  XAMPP: siXampp,
  Laragon: siLaragon,
  "Docker Desktop": siDocker,
  Figma: siFigma,
};

const conceptIcons: Record<string, LucideIcon> = {
  SQL: Database,
  "REST API Architecture": Network,
  EfficientNet: Brain,
  "Grad-CAM": Eye,
  "Computer Vision": Eye,
  "Load Balancing": Network,
  "VS Code": Code2,
};

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = ["ALL", ...skillGroups.map((g) => g.category)];

  const displayedGroups =
    activeCategory === "ALL"
      ? skillGroups
      : skillGroups.filter((g) => g.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-[#FFFDF8] border-b border-[#E7E0D8]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="space-y-3 mb-10 text-left max-w-2xl">
          <span className="text-xs font-mono text-[#686868] uppercase tracking-widest block">
            TECHNICAL CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#252525] font-serif-heading tracking-tight">
            Curated Skill Board
          </h2>
          <p className="text-sm text-[#686868] leading-relaxed">
            Technologies, frameworks, databases, and engineering tools applied across my projects.
          </p>
        </div>

        {/* Interactive Filter Pills - Dasar Charcoal & Cream, Tidak Mendominasi Pink */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#E7E0D8]">
          <span className="text-xs font-mono text-[#686868] flex items-center gap-1.5 mr-2">
            <Sparkles className="w-3.5 h-3.5 text-[#252525]" />
            Filter:
          </span>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-md text-xs font-mono transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#252525] text-[#FFFDF8] shadow-xs"
                    : "bg-[#FFF8F3] text-[#686868] hover:text-[#252525] hover:bg-[#F8D8C8]/60 border border-[#E7E0D8]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skill Board */}
        <div className="space-y-8">
          {displayedGroups.map((group, idx) => (
            <div
              key={group.category}
              className="pb-8 border-b border-[#E7E0D8] grid grid-cols-1 md:grid-cols-12 gap-4 items-start"
            >
              {/* Category Name Left */}
              <div className="space-y-1 md:col-span-4">
                <span className="text-[11px] font-mono text-[#686868]">0{idx + 1}</span>
                <h3 className="text-sm font-semibold text-[#252525] font-mono">
                  {group.category}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-2.5 md:col-span-8 sm:grid-cols-3 xl:grid-cols-4">
                {group.items.map((item) => {
                  const imageLogo = imageLogos[item];
                  const brand = brandLogos[item];
                  const ConceptIcon = conceptIcons[item] ?? Code2;

                  return (
                    <div
                      key={item}
                      className={`flex min-h-14 min-w-0 items-center gap-2.5 rounded-md border border-[#E7E0D8] px-2.5 py-2 text-[#252525] shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:shadow-xs cursor-default sm:px-3 ${group.pastelColor}`}
                    >
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded bg-white/80 shadow-2xs group-hover:scale-110 transition-transform">
                        {imageLogo ? (
                          <Image
                            src={imageLogo}
                            alt={`${item} logo`}
                            width={28}
                            height={28}
                            className="h-6 w-6 object-contain"
                          />
                        ) : brand ? (
                          <svg
                            role="img"
                            aria-label={`${item} logo`}
                            viewBox="0 0 24 24"
                            className="h-5 w-5 transition-transform hover:scale-110"
                            fill={`#${brand.hex}`}
                          >
                            <path d={brand.path} />
                          </svg>
                        ) : (
                          <ConceptIcon aria-hidden="true" className="h-5 w-5 text-[#4B5563]" />
                        )}
                      </span>
                      <span className="min-w-0 text-[11px] font-medium leading-tight sm:text-xs">
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
