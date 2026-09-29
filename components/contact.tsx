import { profileData } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";
import { LinkedinIcon } from "@/components/icons";
import { siGithub, siGmail } from "simple-icons";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#FFFDF8] border-b border-[#E7E0D8]/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl space-y-4 text-left mb-16">
          <span className="text-xs font-mono text-[#686868] uppercase tracking-widest block">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl sm:text-5xl font-normal text-[#252525] font-serif-heading tracking-tight">
            Let&apos;s make something useful.
          </h2>
          <p className="text-base sm:text-lg text-[#686868] font-sans leading-relaxed">
            Have an idea, project collaboration, or opportunity? I&apos;d love to hear from you.
          </p>
        </div>

        {/* Contact Grid - Kembali ke Warna Identitas Per Channel (Pastel Lembut Tidak Nyentrik) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Email Card */}
          <a
            href={`mailto:${profileData.email}`}
            className="p-6 rounded-2xl bg-[#FFF8F3] border border-[#E7E0D8] hover:border-[#252525]/40 hover:-translate-y-1.5 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-2xs"
          >
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-[#F6DDE5] border border-[#E7E0D8] flex items-center justify-center text-[#252525] group-hover:scale-110 transition-transform duration-300 shadow-2xs">
                <svg
                  viewBox="0 0 24 24"
                  aria-label="Gmail logo"
                  role="img"
                  className="h-5 w-5"
                  fill={`#${siGmail.hex}`}
                >
                  <path d={siGmail.path} />
                </svg>
              </div>
              <div>
                <span className="text-xs font-mono text-[#686868] block">EMAIL</span>
                <span className="text-sm font-semibold text-[#252525] group-hover:underline underline-offset-4 break-all">
                  {profileData.email}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-[#686868] pt-2 border-t border-[#E7E0D8]">
              <span>Send Email</span>
              <ArrowUpRight className="w-4 h-4 text-[#252525] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#FFF8F3] border border-[#E7E0D8] hover:border-[#252525]/40 hover:-translate-y-1.5 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-2xs"
          >
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-[#D9E8F5] border border-[#E7E0D8] flex items-center justify-center text-[#252525] group-hover:scale-110 transition-transform duration-300 shadow-2xs">
                <LinkedinIcon className="w-5 h-5 text-[#0A66C2]" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#686868] block">LINKEDIN</span>
                <span className="text-sm font-semibold text-[#252525] group-hover:underline underline-offset-4">
                  syafiqa-zahroo
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-[#686868] pt-2 border-t border-[#E7E0D8]">
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-4 h-4 text-[#252525] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#FFF8F3] border border-[#E7E0D8] hover:border-[#252525]/40 hover:-translate-y-1.5 hover:shadow-md transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-2xs"
          >
            <div className="space-y-4">
              <div className="w-11 h-11 rounded-xl bg-[#F7E7B2] border border-[#E7E0D8] flex items-center justify-center text-[#252525] group-hover:scale-110 transition-transform duration-300 shadow-2xs">
                <svg
                  viewBox="0 0 24 24"
                  aria-label="GitHub logo"
                  role="img"
                  className="h-5 w-5"
                  fill={`#${siGithub.hex}`}
                >
                  <path d={siGithub.path} />
                </svg>
              </div>
              <div>
                <span className="text-xs font-mono text-[#686868] block">GITHUB</span>
                <span className="text-sm font-semibold text-[#252525] group-hover:underline underline-offset-4">
                  syafiqa23
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-[#686868] pt-2 border-t border-[#E7E0D8]">
              <span>GitHub Profile</span>
              <ArrowUpRight className="w-4 h-4 text-[#252525] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
