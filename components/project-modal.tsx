"use client";

import { useEffect } from "react";
import { Project } from "@/data/projects";
import { X, ExternalLink, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#FFFDF8] border border-[#E7E0D8] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl p-6 sm:p-10 space-y-6 relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 rounded-lg bg-[#FFF8F3] hover:bg-[#F8D8C8]/50 border border-[#E7E0D8] text-[#252525] transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#686868]">PROJECT {project.number}</span>
            <span className="px-2 py-0.5 rounded bg-[#FFF8F3] border border-[#E7E0D8] text-[11px] font-mono text-[#252525]">
              {project.category}
            </span>
          </div>
          <h2 className="text-3xl font-normal text-[#252525] font-serif-heading tracking-tight">
            {project.title}
          </h2>
          <p className="text-xs font-mono text-[#686868]">{project.subtitle}</p>
        </div>

        {/* Role & Tech Stack */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-y border-[#E7E0D8]">
          <div>
            <span className="text-[11px] font-mono text-[#686868] uppercase block">Developer Role</span>
            <span className="text-sm font-semibold text-[#252525]">{project.role}</span>
          </div>
          <div>
            <span className="text-[11px] font-mono text-[#686868] uppercase block">Tech Stack</span>
            <div className="flex flex-wrap gap-1.5 mt-1">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded bg-[#FFF8F3] border border-[#E7E0D8] text-[11px] font-mono text-[#252525]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Machine Learning Classes if available */}
        {project.classes && (
          <div className="p-4 rounded-xl bg-[#FFF8F3] border border-[#E7E0D8] space-y-2">
            <span className="text-xs font-mono text-[#252525] font-semibold uppercase block">
              Target Classification Classes
            </span>
            <div className="flex flex-wrap gap-2">
              {project.classes.map((cls) => (
                <span
                  key={cls}
                  className="px-3 py-1 rounded bg-[#DCE8D5] text-[#252525] text-xs font-mono border border-[#E7E0D8]"
                >
                  {cls}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Overview */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono text-[#686868] uppercase tracking-wider block">Overview</h3>
          <p className="text-sm text-[#303030] leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-xl bg-[#FFF8F3] border border-[#E7E0D8] space-y-2">
            <h4 className="text-xs font-mono text-[#252525] font-semibold uppercase">The Challenge</h4>
            <p className="text-xs text-[#686868] leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#FFF8F3] border border-[#E7E0D8] space-y-2">
            <h4 className="text-xs font-mono text-[#252525] font-semibold uppercase">The Solution</h4>
            <p className="text-xs text-[#686868] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-3">
          <h3 className="text-xs font-mono text-[#686868] uppercase tracking-wider block">Key Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.keyFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-[#303030]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#252525] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div className="pt-4 border-t border-[#E7E0D8] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FFF8F3] hover:bg-[#F8D8C8]/40 border border-[#E7E0D8] text-xs font-medium text-[#252525] transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F8D8C8] hover:bg-[#f5c6b1] border border-[#E7E0D8] text-xs font-medium text-[#252525] transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
