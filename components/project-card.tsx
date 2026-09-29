"use client";

import Image from "next/image";
import { Project } from "@/data/projects";
import { ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons";

interface ProjectCardProps {
  project: Project;
  index: number;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`py-12 border-b border-[#E7E0D8] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
        isEven ? "" : "lg:flex-row-reverse"
      }`}
    >
      {/* Project Image / Visual Frame Container */}
      <div
        className={`lg:col-span-7 ${
          isEven ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <div
          className="p-4 sm:p-6 rounded-2xl border border-[#E7E0D8] relative group cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          style={{ backgroundColor: project.accentColor }}
          onClick={() => onSelect(project)}
        >
          {project.screenshotImage ? (
            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-xl border border-[#E7E0D8] bg-white shadow-sm">
              <Image
                src={project.screenshotImage}
                alt={`${project.title} homepage preview`}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-contain p-1 group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none" />
            </div>
          ) : (
            <div className="bg-[#FFFDF8] border border-[#E7E0D8] rounded-xl p-6 sm:p-8 space-y-4 shadow-2xs group-hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center justify-between text-xs font-mono text-[#686868]">
                <span>PROJECT {project.number}</span>
                <span className="px-2.5 py-0.5 rounded bg-[#FFF8F3] border border-[#E7E0D8]">
                  {project.category}
                </span>
              </div>

              <div className="py-8 text-center space-y-2">
                <h3 className="text-2xl sm:text-3xl font-normal text-[#252525] font-serif-heading">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-[#686868]">{project.subtitle}</p>
              </div>

              {project.classes && (
                <div className="flex flex-wrap items-center justify-center gap-1.5 pt-2">
                  <span className="text-[11px] font-mono text-[#686868]">Classes:</span>
                  {project.classes.map((cls) => (
                    <span
                      key={cls}
                      className="px-2 py-0.5 rounded bg-[#FFF8F3] text-[11px] font-mono text-[#252525] border border-[#E7E0D8]"
                    >
                      {cls}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Project Details Text Container */}
      <div
        className={`lg:col-span-5 space-y-5 text-left ${
          isEven ? "lg:order-2" : "lg:order-1"
        }`}
      >
        <div className="space-y-2">
          <span className="text-xs font-mono text-[#686868] uppercase block">
            {project.number} • {project.category}
          </span>
          <h3 className="text-2xl sm:text-3xl font-normal text-[#252525] font-serif-heading tracking-tight">
            {project.title}
          </h3>
        </div>

        <p className="text-sm text-[#686868] leading-relaxed font-sans">
          {project.shortDescription}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded bg-[#FFF8F3] border border-[#E7E0D8] text-[11px] font-mono text-[#252525] hover:-translate-y-0.5 hover:shadow-2xs transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="pt-3 flex flex-wrap items-center gap-4 text-xs font-medium">
          <button
            onClick={() => onSelect(project)}
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#252525] text-white hover:bg-black transition-all hover:-translate-y-0.5 cursor-pointer shadow-xs"
          >
            <span>View project</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E7E0D8] bg-[#FFF8F3] text-[#686868] hover:text-[#252525] hover:bg-[#F8D8C8]/50 hover:-translate-y-0.5 transition-all shadow-2xs"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E7E0D8] bg-[#FFF8F3] text-[#686868] hover:text-[#252525] hover:bg-[#F8D8C8]/50 hover:-translate-y-0.5 transition-all shadow-2xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
