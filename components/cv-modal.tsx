"use client";

import { useState, useEffect } from "react";
import { cvData } from "@/data/cv";
import {
  FileText,
  X,
  Printer,
  Copy,
  Check,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  Sparkles,
} from "lucide-react";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"editorial" | "ats">("editorial");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Background click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Modal Card Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-[#FFFDF8] border border-[#E7E0D8] rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        {/* Modal Top Action Bar */}
        <div className="p-4 sm:px-6 bg-[#FFF8F3] border-b border-[#E7E0D8] flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-[#F8D8C8] text-[#252525] border border-[#E7C6B2]">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-bold font-mono tracking-wider text-[#252525]">
                  CURRICULUM VITAE
                </h2>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-[#DCE8D5] text-[#2D5523] text-[10px] font-mono font-medium border border-[#C6DCBD]">
                  Verified Data
                </span>
              </div>
              <p className="text-[11px] font-mono text-[#686868]">
                Syafiqa Zahroo • Software Engineer &amp; ML Developer
              </p>
            </div>
          </div>

          {/* Action buttons (Print, Mode Toggle, Close) */}
          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center p-0.5 rounded-lg bg-[#FFFDF8] border border-[#E7E0D8] text-xs font-mono">
              <button
                onClick={() => setViewMode("editorial")}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  viewMode === "editorial"
                    ? "bg-[#252525] text-white font-medium shadow-xs"
                    : "text-[#686868] hover:text-[#252525]"
                }`}
              >
                Editorial
              </button>
              <button
                onClick={() => setViewMode("ats")}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  viewMode === "ats"
                    ? "bg-[#252525] text-white font-medium shadow-xs"
                    : "text-[#686868] hover:text-[#252525]"
                }`}
              >
                ATS Document
              </button>
            </div>

            {/* Print / Save PDF Button */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F8D8C8] hover:bg-[#F5C6B1] text-[#252525] text-xs font-mono font-medium border border-[#E7C6B2] transition-all cursor-pointer shadow-xs active:scale-95"
              title="Cetak atau Simpan sebagai PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / PDF</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Tutup CV"
              className="p-1.5 rounded-lg text-[#686868] hover:text-[#252525] hover:bg-[#E7E0D8]/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 scrollbar-thin print:p-0 print:overflow-visible">
          {viewMode === "editorial" ? (
            /* ================= EDITORIAL MODERN VIEW ================= */
            <div className="max-w-3xl mx-auto space-y-8 text-[#252525]">
              {/* Header Profile Section */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#FFF8F3] border border-[#E7E0D8] space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FFFDF8] border border-[#E7E0D8] text-[10px] font-mono text-[#686868] uppercase mb-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F8D8C8] animate-pulse" />
                      <span>OFFICIAL RESUME</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl font-serif-heading font-semibold text-[#252525] tracking-tight">
                      {cvData.personalInfo.name}
                    </h1>
                    <p className="text-xs sm:text-sm font-mono text-[#686868] mt-0.5">
                      {cvData.personalInfo.title}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    <button
                      onClick={() => handleCopy(cvData.personalInfo.email, "email")}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFFDF8] border border-[#E7E0D8] hover:border-[#252525]/40 text-[#252525] transition-all cursor-pointer shadow-2xs"
                    >
                      {copiedField === "email" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Mail className="w-3.5 h-3.5 text-[#686868]" />
                      )}
                      <span>{copiedField === "email" ? "Tersalin!" : "Email"}</span>
                    </button>

                    <button
                      onClick={() => handleCopy(cvData.personalInfo.phone, "phone")}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFFDF8] border border-[#E7E0D8] hover:border-[#252525]/40 text-[#252525] transition-all cursor-pointer shadow-2xs"
                    >
                      {copiedField === "phone" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Phone className="w-3.5 h-3.5 text-[#686868]" />
                      )}
                      <span>{copiedField === "phone" ? "Tersalin!" : "Telepon"}</span>
                    </button>
                  </div>
                </div>

                {/* Contact Links Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 pt-3 border-t border-[#E7E0D8] text-xs font-mono text-[#555]">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#888] shrink-0" />
                    <span>{cvData.personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#888] shrink-0" />
                    <span>{cvData.personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 truncate">
                    <Linkedin className="w-3.5 h-3.5 text-[#888] shrink-0" />
                    <a
                      href={cvData.personalInfo.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline truncate"
                    >
                      {cvData.personalInfo.linkedinDisplay}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 truncate">
                    <Github className="w-3.5 h-3.5 text-[#888] shrink-0" />
                    <a
                      href={cvData.personalInfo.github}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline truncate"
                    >
                      {cvData.personalInfo.githubDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 pb-2 border-b border-[#E7E0D8]">
                  <Sparkles className="w-4 h-4 text-[#252525]" />
                  <h3 className="text-xs font-bold font-mono tracking-wider uppercase text-[#252525]">
                    Professional Summary
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[#505050] font-sans bg-[#FFFDF8] p-4 rounded-xl border border-[#E7E0D8]/60">
                  {cvData.summary}
                </p>
              </div>

              {/* Technical Skills */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-[#E7E0D8]">
                  <Code2 className="w-4 h-4 text-[#252525]" />
                  <h3 className="text-xs font-bold font-mono tracking-wider uppercase text-[#252525]">
                    Technical Skills
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cvData.technicalSkills.map((grp, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-[#FFF8F3] border border-[#E7E0D8] rounded-xl space-y-2 hover:border-[#252525]/30 transition-all"
                    >
                      <span className="text-[11px] font-mono text-[#686868] uppercase font-semibold block">
                        {grp.category}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {grp.skills.map((s, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2 py-0.5 rounded-md bg-[#FFFDF8] border border-[#E7E0D8] text-xs font-mono text-[#252525] hover:bg-[#F8D8C8] transition-colors cursor-default"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience & Projects */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 pb-2 border-b border-[#E7E0D8]">
                  <Briefcase className="w-4 h-4 text-[#252525]" />
                  <h3 className="text-xs font-bold font-mono tracking-wider uppercase text-[#252525]">
                    Experience &amp; Projects
                  </h3>
                </div>
                <div className="space-y-3">
                  {cvData.experienceAndProjects.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-5 rounded-xl bg-[#FFFDF8] border border-[#E7E0D8] space-y-2.5 hover:border-[#252525]/30 hover:shadow-xs transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div className="font-semibold text-sm text-[#252525]">
                          <span className="text-[#252525] font-bold">{item.role}</span>
                          <span className="text-[#686868] font-normal"> — </span>
                          <span className="italic font-serif-heading text-[#252525]">
                            {item.projectOrCompany}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-[#555] leading-relaxed font-sans">
                        {item.description}
                      </p>
                      {item.techStack && (
                        <div className="flex flex-wrap gap-1 pt-1">
                          {item.techStack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded-md bg-[#FFF8F3] border border-[#E7E0D8] text-[10px] font-mono text-[#686868]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications & Education Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Certifications */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 pb-2 border-b border-[#E7E0D8]">
                    <Award className="w-4 h-4 text-[#252525]" />
                    <h3 className="text-xs font-bold font-mono tracking-wider uppercase text-[#252525]">
                      Certifications
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {cvData.certifications.map((cert, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-[#FFF8F3] border border-[#E7E0D8] rounded-xl flex items-start justify-between gap-2 text-xs"
                      >
                        <div className="space-y-0.5">
                          <p className="font-medium text-[#252525] leading-snug">{cert.title}</p>
                          <span className="text-[10px] font-mono text-[#686868] block">
                            {cert.organization}
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded-md bg-[#FFFDF8] border border-[#E7E0D8] text-[10px] font-mono text-[#252525] shrink-0 font-medium">
                          {cert.year}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 pb-2 border-b border-[#E7E0D8]">
                    <GraduationCap className="w-4 h-4 text-[#252525]" />
                    <h3 className="text-xs font-bold font-mono tracking-wider uppercase text-[#252525]">
                      Education
                    </h3>
                  </div>
                  <div className="p-4 bg-[#FFF8F3] border border-[#E7E0D8] rounded-xl space-y-3 text-xs">
                    <div>
                      <h4 className="font-bold text-sm text-[#252525]">
                        {cvData.education.degree}
                      </h4>
                      <p className="text-xs font-serif-heading italic text-[#686868]">
                        {cvData.education.institution}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 text-[11px] font-mono">
                      <span className="px-2.5 py-1 rounded-md bg-[#FFFDF8] border border-[#E7E0D8] text-[#252525]">
                        {cvData.education.period}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-[#FFFDF8] border border-[#E7E0D8] text-[#252525]">
                        {cvData.education.semester}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-[#DCE8D5] border border-[#C6DCBD] text-[#2D5523] font-bold">
                        {cvData.education.gpa}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ================= ATS DOCUMENT CLASSIC VIEW ================= */
            <div className="max-w-2xl mx-auto p-8 bg-white border border-gray-300 rounded-sm text-black font-sans text-xs leading-normal space-y-5 shadow-sm print:border-none print:shadow-none print:p-0">
              {/* ATS Header */}
              <div className="text-center space-y-1 pb-3 border-b-2 border-black">
                <h1 className="text-xl font-bold tracking-wider">{cvData.personalInfo.name}</h1>
                <div className="text-[11px] text-gray-700 flex flex-wrap justify-center gap-x-3 gap-y-0.5">
                  <span>{cvData.personalInfo.location}</span>
                  <span>•</span>
                  <span>{cvData.personalInfo.phone}</span>
                  <span>•</span>
                  <span>{cvData.personalInfo.email}</span>
                </div>
                <div className="text-[11px] text-gray-700 flex flex-wrap justify-center gap-x-3 gap-y-0.5">
                  <span>{cvData.personalInfo.linkedinDisplay}</span>
                  <span>•</span>
                  <span>{cvData.personalInfo.githubDisplay}</span>
                </div>
              </div>

              {/* ATS Summary */}
              <div className="space-y-1">
                <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-0.5">
                  PROFESSIONAL SUMMARY
                </h2>
                <p className="text-[11px] text-gray-800 leading-relaxed text-justify">
                  {cvData.summary}
                </p>
              </div>

              {/* ATS Technical Skills */}
              <div className="space-y-1">
                <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-0.5">
                  TECHNICAL SKILLS
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-[11px]">
                  {cvData.technicalSkills.map((item, idx) => (
                    <div key={idx}>
                      <span className="font-semibold">{item.category}:</span>{" "}
                      <span className="text-gray-800">{item.skills.join(", ")}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ATS Experience & Projects */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-0.5">
                  EXPERIENCE &amp; PROJECTS
                </h2>
                <div className="space-y-2 text-[11px]">
                  {cvData.experienceAndProjects.map((item, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="font-bold text-gray-900">
                        {item.role}, {item.projectOrCompany}
                      </div>
                      <p className="text-gray-800 text-justify leading-snug">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ATS Certifications */}
              <div className="space-y-1">
                <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-0.5">
                  CERTIFICATIONS
                </h2>
                <ul className="list-disc list-inside space-y-0.5 text-[11px] text-gray-800">
                  {cvData.certifications.map((c, idx) => (
                    <li key={idx}>
                      {c.title} ({c.year})
                    </li>
                  ))}
                </ul>
              </div>

              {/* ATS Education */}
              <div className="space-y-1">
                <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-400 pb-0.5">
                  EDUCATION
                </h2>
                <div className="text-[11px] text-gray-800">
                  <div className="font-bold">{cvData.education.degree}</div>
                  <div>{cvData.education.institution}</div>
                  <div className="text-gray-600">
                    {cvData.education.period} • {cvData.education.semester} •{" "}
                    <span className="font-semibold text-black">{cvData.education.gpa}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-3.5 px-6 bg-[#FFF8F3] border-t border-[#E7E0D8] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#686868] shrink-0 print:hidden">
          <span className="flex items-center gap-1.5">
            <span className="text-[#252525]">✦</span>
            <span>CV Syafiqa Zahroo • Verified for Industry Opportunities</span>
          </span>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${cvData.personalInfo.email}`}
              className="hover:text-[#252525] underline transition-colors"
            >
              Kirim Email
            </a>
            <a
              href={cvData.personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#252525] underline transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
