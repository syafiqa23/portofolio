"use client";

import { useState } from "react";
import { projectsData, Project } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { ProjectModal } from "./project-modal";

const categories = ["All", "Web Development", "Backend", "Machine Learning"] as const;

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === "All") return true;
    return project.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-24 bg-[#FFFDF8] border-b border-[#E7E0D8]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 text-left max-w-2xl">
            <span className="text-xs font-mono text-[#686868] uppercase tracking-widest block">
              PORTFOLIO WORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#252525] font-serif-heading tracking-tight">
              Featured Projects
            </h2>
            <p className="text-sm text-[#686868] leading-relaxed">
              Selected web applications, backend APIs, and computer vision projects built with clean software architecture.
            </p>
          </div>

          {/* Category Filter Pills - Kembali ke Dasar Charcoal & Cream Editorial */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-[#252525] text-white"
                    : "bg-[#FFF8F3] hover:bg-[#F8D8C8]/40 text-[#686868] hover:text-[#252525] border border-[#E7E0D8]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Alternating List */}
        <div className="space-y-4">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={idx}
              onSelect={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {/* Lightbox Modal View */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
}
