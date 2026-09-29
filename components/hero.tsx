"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { ArrowRight, Sparkles, FileText } from "lucide-react";

const roles = [
  "Software & ML Developer",
  "Full Stack Web Engineer",
  "Backend Systems Builder",
  "Computer Vision Researcher",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 bg-[#FFFDF8] border-b border-[#E7E0D8]/60 overflow-hidden"
    >
      {/* Ambient Floating Pastel Orbs - Komposisi Seimbang Tidak Dominan Satu Warna */}
      <div className="absolute top-12 left-1/4 w-72 h-72 rounded-full bg-[#F8D8C8]/25 blur-3xl pointer-events-none animate-float" />
      <div className="absolute bottom-8 right-1/4 w-80 h-80 rounded-full bg-[#D9E8F5]/28 blur-3xl pointer-events-none animate-float-reverse" />
      <div className="absolute top-1/2 right-12 w-64 h-64 rounded-full bg-[#F6DDE5]/18 blur-3xl pointer-events-none animate-pulse-soft" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Editorial Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small Eyebrow with Animated Spark - Dasar Warm Cream Orisinal */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#FFF8F3] border border-[#E7E0D8] text-[11px] font-mono text-[#686868] uppercase tracking-wider shadow-2xs hover:border-[#252525]/30 transition-all">
              <span className="w-2 h-2 rounded-full bg-[#F8D8C8] animate-pulse" />
              <span>INFORMATICS ENGINEERING • SOFTWARE DEVELOPMENT</span>
            </div>

            {/* Serif Heading - Underline Pink Subtle sebagai Aksen */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#252525] leading-[1.15] tracking-tight font-serif-heading">
                Hi, I&apos;m{" "}
                <span className="italic font-normal underline decoration-[#F6DDE5] decoration-4 underline-offset-4 hover:decoration-[#F8D8C8] transition-colors">
                  Syafiqa Zahroo.
                </span>
              </h1>

              {/* Dynamic Animated Role Badge - Dasar Cream Netral */}
              <div className="flex items-center gap-2 pt-1">
                <span className="text-xs font-mono text-[#686868]">Focusing on:</span>
                <span
                  key={roleIndex}
                  className="inline-block px-2.5 py-0.5 rounded-md bg-[#FFF8F3] border border-[#E7E0D8] text-xs font-mono font-medium text-[#252525] animate-in fade-in slide-in-from-bottom-2 duration-300 shadow-2xs"
                >
                  ✦ {roles[roleIndex]}
                </span>
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-base sm:text-lg text-[#686868] leading-relaxed max-w-2xl font-sans">
              {profileData.subheadline}
            </p>

            {/* Interactive Action Buttons - View Projects, Direct CV PDF, Let's Connect */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#F8D8C8] hover:bg-[#f5c6b1] text-[#252525] font-medium text-sm border border-[#E7E0D8] transition-all duration-200 hover:-translate-y-1 hover:shadow-md active:translate-y-0 shadow-xs cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-[#252525] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/cv-syafiqa-zahroo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#FFFDF8] hover:bg-[#FFF8F3] text-[#252525] font-medium text-sm border border-[#E7E0D8] hover:border-[#252525]/30 transition-all duration-200 hover:-translate-y-1 hover:shadow-xs active:translate-y-0 cursor-pointer shadow-2xs"
                title="Buka File CV PDF Syafiqa Zahroo"
              >
                <FileText className="w-4 h-4 text-[#252525]" />
                <span>Curriculum Vitae (PDF)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-transparent hover:bg-[#FFF8F3] text-[#686868] hover:text-[#252525] font-medium text-sm border border-transparent hover:border-[#E7E0D8] transition-all duration-200 hover:-translate-y-1 active:translate-y-0 cursor-pointer"
              >
                <span>Let&apos;s Connect</span>
              </a>
            </div>

            {/* Editorial Accent */}
            <div className="pt-2 text-xs font-mono text-[#686868] flex items-center gap-2">
              <span className="text-[#252525] animate-twinkle">✦</span>
              <span>{profileData.statusBadge}</span>
            </div>
          </div>

          {/* Right Column - Aesthetic Interactive Tech Board - Dasar Warm Cream Pastel Seimbang */}
          <div className="lg:col-span-5">
            <div className="relative p-5 sm:p-6 bg-[#FFF8F3] border border-[#E7E0D8] rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 space-y-4">
              {/* Card Title Bar */}
              <div className="flex items-center justify-between pb-2 border-b border-[#E7E0D8] text-xs font-mono text-[#686868]">
                <span className="flex items-center gap-1.5 font-medium text-[#252525]">
                  <Sparkles className="w-3.5 h-3.5 text-[#252525]" />
                  <span>TECH BOARD &amp; STACK</span>
                </span>
              </div>

              {/* Medium Balanced Portrait Photo Card */}
              <div className="relative h-64 sm:h-64 w-full rounded-xl overflow-hidden border border-[#E7E0D8] shadow-xs group">
                <Image
                  src={profileData.avatarUrl}
                  alt="Profile Portrait"
                  fill
                  className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{ objectPosition: "8% 8%" }}
                  priority
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-50" />

                {/* Floating Glassmorphic Badge with Pulse */}
                <div className="absolute bottom-3 left-3 bg-[#FFFDF8]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E7E0D8] text-[11px] font-mono text-[#252525] shadow-xs flex items-center gap-2 hover:scale-105 transition-transform">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>Software &amp; ML Developer</span>
                </div>
              </div>

              {/* Stack Composition with Interactive Pills - Variasi Pastel Lembut Tidak Nyentrik */}
              <div className="space-y-3">
                <div className="p-3.5 bg-[#FFFDF8] border border-[#E7E0D8] rounded-xl space-y-2 shadow-2xs hover:border-[#252525]/30 transition-all">
                  <span className="text-[11px] font-mono text-[#686868] uppercase block">
                    Core Engineering Languages
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#F6DDE5] text-[#252525] text-xs font-mono border border-[#E7E0D8] hover:-translate-y-0.5 hover:shadow-xs transition-all cursor-default">
                      PHP
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#D9E8F5] text-[#252525] text-xs font-mono border border-[#E7E0D8] hover:-translate-y-0.5 hover:shadow-xs transition-all cursor-default">
                      Python
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#F8D8C8] text-[#252525] text-xs font-mono border border-[#E7E0D8] hover:-translate-y-0.5 hover:shadow-xs transition-all cursor-default">
                      JavaScript
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#E7DDF4] text-[#252525] text-xs font-mono border border-[#E7E0D8] hover:-translate-y-0.5 hover:shadow-xs transition-all cursor-default">
                      TypeScript
                    </span>
                  </div>
                </div>

                <div className="p-3.5 bg-[#FFFDF8] border border-[#E7E0D8] rounded-xl space-y-2 shadow-2xs hover:border-[#252525]/30 transition-all">
                  <span className="text-[11px] font-mono text-[#686868] uppercase block">
                    Frameworks &amp; Deep Learning
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    <span className="px-2.5 py-0.5 rounded-md bg-[#F8D8C8] text-[#252525] text-xs font-mono border border-[#E7E0D8] hover:-translate-y-0.5 hover:shadow-xs transition-all cursor-default">
                      Laravel
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#DCE8D5] text-[#252525] text-xs font-mono border border-[#E7E0D8] hover:-translate-y-0.5 hover:shadow-xs transition-all cursor-default">
                      Django
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#D9E8F5] text-[#252525] text-xs font-mono border border-[#E7E0D8] hover:-translate-y-0.5 hover:shadow-xs transition-all cursor-default">
                      Next.js
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#F6DDE5] text-[#252525] text-xs font-mono border border-[#E7E0D8] hover:-translate-y-0.5 hover:shadow-xs transition-all cursor-default">
                      PyTorch
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer Quote */}
              <div className="pt-2 border-t border-[#E7E0D8] flex items-center justify-between text-xs text-[#686868] font-serif-heading italic">
                <span>&ldquo;Curiosity drives clean software architecture.&rdquo;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
