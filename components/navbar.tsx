"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Certifications", href: "#certifications" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FFFDF8]/90 backdrop-blur-md border-b border-[#E7E0D8] py-3.5 shadow-2xs"
          : "bg-[#FFFDF8]/80 backdrop-blur-xs border-b border-[#E7E0D8]/60 py-4.5"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#F8D8C8] via-[#F6DDE5] to-[#D9E8F5] transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Name Left */}
        <Link
          href="#hero"
          className="group text-xs sm:text-sm font-semibold tracking-widest text-[#252525] uppercase transition-all flex items-center gap-2 font-mono"
        >
          <span className="w-2 h-2 rounded-full bg-[#F8D8C8] group-hover:scale-125 transition-transform" />
          <span className="group-hover:tracking-widest transition-all">PORTFOLIO</span>
        </Link>

        {/* Desktop Navigation Links Right */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-[#686868] hover:text-[#252525] tracking-wide transition-all relative py-1 hover:-translate-y-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#252525] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Direct CV PDF Button in Desktop Navbar */}
          <a
            href="/cv-syafiqa-zahroo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Buka File CV PDF Syafiqa Zahroo"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F8D8C8] hover:bg-[#F5C6B1] text-[#252525] text-xs font-mono font-medium border border-[#E7E0D8] hover:border-[#252525]/30 transition-all cursor-pointer shadow-2xs hover:-translate-y-0.5"
          >
            <FileText className="w-3.5 h-3.5 text-[#252525]" />
            <span>CV</span>
          </a>
        </div>

        {/* Mobile Hamburger Button + CV Quick Link */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="/cv-syafiqa-zahroo.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Buka File CV PDF"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#F8D8C8] text-[#252525] text-xs font-mono font-medium border border-[#E7E0D8]"
          >
            <FileText className="w-3 h-3 text-[#252525]" />
            <span>CV</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 text-[#252525] hover:bg-[#FFF8F3] rounded-md transition-all cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFDF8] border-b border-[#E7E0D8] px-6 pt-4 pb-6 animate-in slide-in-from-top-2 duration-200 shadow-sm">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-medium text-[#303030] border-b border-[#E7E0D8]/40 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#686868]">→</span>
              </a>
            ))}
            <a
              href="/cv-syafiqa-zahroo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full py-2.5 px-4 rounded-lg bg-[#F8D8C8] text-[#252525] font-mono font-medium text-xs flex items-center justify-center gap-2 border border-[#E7E0D8]"
            >
              <FileText className="w-4 h-4" />
              <span>Buka File PDF CV Syafiqa Zahroo</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
