import { researchData } from "@/data/research";
import { BookOpen, FileText } from "lucide-react";
import Image from "next/image";

export function Research() {
  return (
    <section id="research" className="py-24 bg-[#FFFDF8] border-b border-[#E7E0D8]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-left max-w-2xl">
          <span className="text-xs font-mono text-[#686868] uppercase tracking-widest block">
            ACADEMIC RESEARCH
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#252525] font-serif-heading tracking-tight">
            Research &amp; Scientific Publication
          </h2>
          <p className="text-sm text-[#686868] leading-relaxed">
            Peer-reviewed research focusing on explainable AI, computer vision, and UAV aerial imagery processing.
          </p>
        </div>

        {/* Paper Document Visual Card */}
        <div className="space-y-8">
          {researchData.map((paper) => (
            <div
              key={paper.id}
              className="bg-[#FFF8F3] border border-[#E7E0D8] p-6 sm:p-9 rounded-2xl relative space-y-6 shadow-2xs"
            >
              {/* Conference Header matching Education/Udinus typography */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E7E0D8] pb-5">
                <div className="flex items-center gap-3.5 min-w-0">
                  {paper.conferenceLogo && (
                    <div className="grid h-14 w-24 shrink-0 place-items-center rounded-xl border border-[#E7E0D8] bg-white p-1.5 shadow-2xs">
                      <Image
                        src={paper.conferenceLogo}
                        alt="Logo iSemantic"
                        width={110}
                        height={38}
                        className="h-full w-full object-contain"
                        priority
                      />
                    </div>
                  )}
                  <div className="min-w-0 space-y-0.5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#686868] block">
                      INTERNATIONAL CONFERENCE • IEEE
                    </span>
                    <h3 className="text-lg sm:text-xl font-normal leading-snug text-[#252525] font-serif-heading">
                      {paper.conference} {paper.year}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:shrink-0">
                  <span className="px-3 py-1 rounded-md bg-[#D9E8F5] text-[#252525] text-xs font-mono font-medium border border-[#E7E0D8]">
                    In Press
                  </span>
                </div>
              </div>

              {/* Paper Title & Authors */}
              <div className="space-y-3">
                <h4 className="text-xl sm:text-2xl font-normal text-[#252525] font-serif-heading leading-snug tracking-tight">
                  {paper.title}
                </h4>

                <div className="text-xs font-mono text-[#686868] flex flex-wrap items-center gap-2">
                  <span>Authors:</span>
                  <span className="text-[#252525] font-semibold">
                    {paper.authors.join(", ")}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-[#303030] leading-relaxed max-w-4xl font-sans">
                {paper.summary}
              </p>

              {/* Core Domains */}
              <div className="space-y-2 pt-1">
                <span className="text-xs font-mono text-[#686868] uppercase tracking-wider block">
                  CORE DOMAINS
                </span>
                <div className="flex flex-wrap gap-2">
                  {paper.researchFocus.map((focus) => (
                    <span
                      key={focus}
                      className="px-3 py-1 rounded-md bg-[#FFFDF8] border border-[#E7E0D8] text-xs font-mono text-[#252525] shadow-2xs"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-[#E7E0D8] flex flex-wrap items-center gap-4 text-xs font-medium">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FFFDF8] border border-[#E7E0D8] text-[#686868]">
                  <BookOpen className="w-4 h-4 text-[#252525]" />
                  <span>Paper (In Press / Forthcoming)</span>
                </span>

                <a
                  href="#certifications"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#F8D8C8] hover:bg-[#f5c6b1] border border-[#E7E0D8] text-[#252525] transition-all duration-200 hover:-translate-y-0.5 shadow-2xs"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Author Certificate →</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
