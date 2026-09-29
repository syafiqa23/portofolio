import { experienceData } from "@/data/experience";
import Image from "next/image";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#FFFDF8] border-b border-[#E7E0D8]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-left max-w-2xl">
          <span className="text-xs font-mono text-[#686868] uppercase tracking-widest block">
            WORK EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#252525] font-serif-heading tracking-tight">
            Internship Experience
          </h2>
          <p className="text-sm text-[#686868] leading-relaxed">
            Hands-on development experience in backend engineering and database systems.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-[#E7E0D8] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-12">
          {experienceData.map((item) => (
            <div key={item.id} className="relative space-y-3 text-left">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-[#252525] border-4 border-[#FFFDF8]" />

              <div className="flex flex-col gap-3 border-b border-[#E7E0D8]/60 pb-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-center gap-3">
                  {item.companyLogo && (
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-[#E7E0D8] bg-white p-1.5">
                      <Image
                        src={item.companyLogo}
                        alt={`${item.company} logo`}
                        width={40}
                        height={40}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}
                  <div className="min-w-0">
                    <span className="block text-xs font-mono uppercase tracking-wider text-[#686868]">
                      {item.company}
                    </span>
                    <h3 className="text-xl font-normal text-[#252525] font-serif-heading">
                      {item.role}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 sm:shrink-0">
                  <span className="text-xs font-mono text-[#686868]">
                    {item.period}
                  </span>
                  {item.scoreBadge && (
                    <span className="px-3 py-1 rounded-md bg-[#DCE8D5] text-[#252525] text-xs font-mono font-medium border border-[#E7E0D8]">
                      {item.scoreBadge}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm text-[#303030] leading-relaxed max-w-3xl">
                {item.description}
              </p>

              {item.highlights && (
                <ul className="space-y-1.5 pt-1">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#686868]">
                      <span className="text-[#252525] mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
