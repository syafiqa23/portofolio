import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Research } from "@/components/research";
import { Certifications } from "@/components/certifications";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { AIChat } from "@/components/ai-chat";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#FFFDF8] text-[#252525] selection:bg-[#F6DDE5] selection:text-[#252525]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
}
