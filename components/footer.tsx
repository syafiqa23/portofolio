import { profileData } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFFDF8] py-16 text-xs text-[#686868]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="space-y-2">
          <span className="text-sm font-semibold tracking-widest text-[#252525] uppercase font-mono block">
            {profileData.name}
          </span>
          <p className="text-xs text-[#686868]">
            Software Engineering &bull; Backend Systems &bull; Machine Learning
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#252525] transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#252525] transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${profileData.email}`}
            className="hover:text-[#252525] transition-colors"
          >
            {profileData.email}
          </a>
        </div>

        <div className="text-xs font-mono text-[#686868]">
          © {currentYear} Syafiqa Zahroo
        </div>
      </div>
    </footer>
  );
}
