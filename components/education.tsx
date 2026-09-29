import { educationData } from "@/data/education";
import Image from "next/image";

export function Education() {
  return (
    <section id="education" className="py-24 bg-[#FFFDF8] border-b border-[#E7E0D8]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono text-[#686868] uppercase tracking-widest block">
              ACADEMIC BACKGROUND
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#252525] font-serif-heading tracking-tight">
              Education
            </h2>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 space-y-8">
            {educationData.map((edu) => (
              <div key={edu.id} className="space-y-4 pb-4">
                <div className="flex flex-col gap-3 border-b border-[#E7E0D8] pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-[#E7E0D8] bg-white p-2">
                      <Image
                        src="/udinus.png"
                        alt="Logo Universitas Dian Nuswantoro"
                        width={48}
                        height={48}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-normal leading-tight text-[#252525] font-serif-heading sm:text-2xl">
                      {edu.institution}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#686868] sm:shrink-0">
                    {edu.period}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-base font-semibold text-[#252525]">
                      {edu.degree}
                    </span>
                    <span className="px-3 py-1 rounded-md bg-[#F7E7B2] text-[#252525] text-xs font-mono font-medium border border-[#E7E0D8]">
                      {edu.semester}
                    </span>
                    <span className="px-3 py-1 rounded-md bg-[#D9E8F5] text-[#252525] text-xs font-mono font-medium border border-[#E7E0D8]">
                      {edu.gpa}
                    </span>
                  </div>

                  {edu.description && (
                    <p className="text-sm text-[#686868] leading-relaxed pt-1">
                      {edu.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
