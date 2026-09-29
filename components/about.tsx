export function About() {
  return (
    <section id="about" className="py-20 bg-[#FFFDF8] border-b border-[#E7E0D8]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column - Heading & Clean Overview Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="space-y-1.5">
              <span className="text-[11px] font-mono text-[#686868] uppercase tracking-widest block">
                ABOUT ME
              </span>
              <h2 className="text-2xl sm:text-3xl font-normal text-[#252525] font-serif-heading tracking-tight">
                A little about me
              </h2>
            </div>

            {/* Sleek Mini Overview Card - Dasar Warm Cream, Pink Hanya Aksen Tag */}
            <div className="p-4 bg-[#FFF8F3] border border-[#E7E0D8] rounded-xl space-y-3 shadow-2xs">
              <div className="flex items-center justify-between border-b border-[#E7E0D8] pb-2 text-[11px] font-mono text-[#686868]">
                <span>PROFILE OVERVIEW</span>
                <span className="text-[#252525]">✦ 2026</span>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between items-center gap-2">
                  <span className="text-[#686868]">University</span>
                  <span className="text-[#252525] font-medium">UDINUS</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-[#686868]">Major</span>
                  <span className="text-[#252525] font-medium">Informatics Eng.</span>
                </div>
                <div className="flex justify-between items-center gap-2">
                  <span className="text-[#686868]">Standing</span>
                  <span className="text-[#252525] font-medium">Semester 6 · GPA 3.79</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-[#E7E0D8]">
                  <span className="text-[#686868]">Focus</span>
                  <span className="px-2 py-0.5 rounded bg-[#F6DDE5] text-[#252525] text-[10px] font-medium border border-[#E7E0D8]">
                    Full Stack &amp; ML
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Clean Narrative & 3 Focus Pillars - Dasar Warm Cream Editorial */}
          <div className="lg:col-span-8 space-y-5">
            <div className="p-5 bg-[#FFF8F3] border border-[#E7E0D8] rounded-xl space-y-2 shadow-2xs">
              <span className="text-[11px] font-mono text-[#686868] uppercase tracking-wider block">
                BACKGROUND &amp; APPROACH
              </span>
              <p className="text-sm text-[#303030] leading-relaxed font-sans">
                Currently pursuing my degree at Universitas Dian Nuswantoro, I focus on engineering dependable web applications, scalable backend systems, and exploring practical machine learning. My work bridges structured software engineering practices with data-driven technologies to create clean, maintainable digital solutions.
              </p>
            </div>

            {/* 3 Core Pillars - Dasar Cream Netral, Hover Subtle */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 bg-[#FFF8F3] border border-[#E7E0D8] rounded-xl space-y-1.5 hover:border-[#252525]/40 hover:-translate-y-1 hover:shadow-xs transition-all duration-200 cursor-default group">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-[#686868] group-hover:text-[#252525] transition-colors">01.</span>
                  <h3 className="text-xs font-semibold text-[#252525]">Backend Systems</h3>
                </div>
                <p className="text-[11px] text-[#686868] leading-relaxed">
                  Building REST APIs and relational data schemas with Laravel, Django, and PostgreSQL.
                </p>
              </div>

              <div className="p-3.5 bg-[#FFF8F3] border border-[#E7E0D8] rounded-xl space-y-1.5 hover:border-[#252525]/40 hover:-translate-y-1 hover:shadow-xs transition-all duration-200 cursor-default group">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-[#686868] group-hover:text-[#252525] transition-colors">02.</span>
                  <h3 className="text-xs font-semibold text-[#252525]">Full Stack Web</h3>
                </div>
                <p className="text-[11px] text-[#686868] leading-relaxed">
                  Crafting modern, interactive applications using Next.js, React, and clean UI components.
                </p>
              </div>

              <div className="p-3.5 bg-[#FFF8F3] border border-[#E7E0D8] rounded-xl space-y-1.5 hover:border-[#252525]/40 hover:-translate-y-1 hover:shadow-xs transition-all duration-200 cursor-default group">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-[#686868] group-hover:text-[#252525] transition-colors">03.</span>
                  <h3 className="text-xs font-semibold text-[#252525]">Applied AI &amp; Vision</h3>
                </div>
                <p className="text-[11px] text-[#686868] leading-relaxed">
                  Researching computer vision and Grad-CAM explainable AI for UAV aerial imagery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
