import { profileData } from "@/data/profile";
import { experienceData } from "@/data/experience";
import { projectsData } from "@/data/projects";
import { researchData } from "@/data/research";
import { certificationsData } from "@/data/certifications";
import { educationData } from "@/data/education";
import { skillGroups } from "@/data/skills";

export interface ChatMessage {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: string;
  suggestedQuestions?: string[];
}

export function generateAIResponse(userPrompt: string): {
  reply: string;
  suggestedQuestions?: string[];
} {
  const query = userPrompt.toLowerCase().trim();

  // 1. GREETING & GENERAL INTRODUCTION
  if (
    query.match(/^(halo|hai|hi|hello|hey|hei|pagi|siang|sore|malam|assalamualaikum|permisi)/i)
  ) {
    return {
      reply: `Halo, saya **Syasya Chat AI**, asisten virtual cerdas portofolio Syafiqa Zahroo. Saya siap membantu Anda menemukan informasi seputar:\n\n• **Curriculum Vitae (CV)**: Resume resmi terverifikasi dengan opsi cetak / PDF\n• **Latar Belakang & Profil**: Mahasiswi Teknik Informatika UDINUS (IPK 3.79)\n• **Proyek Perangkat Lunak**: Web full-stack, backend APIs (SafeWash, SmartLMS, Blangkis Store, Forest Dessert)\n• **Machine Learning**: Platform Peatland & Computer Vision\n• **Sertifikasi**: Spesialisasi IBM AI Engineering & DevOps\n• **Kontak**: Email, WhatsApp/Telepon, LinkedIn, dan GitHub\n\nAda hal spesifik yang ingin Anda tanyakan?`,
      suggestedQuestions: [
        "Lihat Curriculum Vitae (CV) Syafiqa",
        "Ceritakan tentang profil Syafiqa",
        "Project apa saja yang pernah dibuat?",
        "Apa sertifikasi IBM yang dimiliki?",
      ],
    };
  }

  // 1b. CV / RESUME HANDLER
  if (
    query.includes("cv") ||
    query.includes("resume") ||
    query.includes("curriculum vitae") ||
    query.includes("riwayat hidup") ||
    query.includes("download cv") ||
    query.includes("cetak cv")
  ) {
    return {
      reply: `**Curriculum Vitae (CV) Resmi Syafiqa Zahroo:**\n\n• **Nama:** Syafiqa Zahroo\n• **Domisili:** Semarang, Indonesia\n• **Kontak:** 085246232785 | zahroosyafiqa@gmail.com\n• **Pendidikan:** S1 Teknik Informatika UDINUS (Semester 7, IPK 3.79 / 4.00)\n• **Ringkasan:** Berpengalaman mengembangkan aplikasi web, backend architecture (Laravel, Django, CodeIgniter), dan solusi Machine Learning (PyTorch, Streamlit, EfficientNet, Grad-CAM).\n• **Sertifikasi:** IBM AI Engineering Specialization (2026), IBM DevOps & Software Engineering (2026), serta rangkaian sertifikasi IBM Supervised ML.\n\n📄 **Download / Buka File CV Resmi:**\nAnda dapat membuka atau mengunduh langsung file PDF asli dengan mengklik tombol **"Curriculum Vitae (PDF)"** di bagian Hero, tombol **"CV"** di Navbar, atau langsung klik tautan berikut: [📄 Buka File PDF CV Syafiqa Zahroo](/cv-syafiqa-zahroo.pdf).`,
      suggestedQuestions: [
        "Ceritakan tentang project SafeWash",
        "Apa tech stack backend yang dikuasai?",
        "Bagaimana cara menghubungi Syafiqa?",
      ],
    };
  }

  // 2. BACKGROUND / WHO IS SYAFIQA
  if (
    query.includes("siapa") ||
    query.includes("tentang") ||
    query.includes("background") ||
    query.includes("profile") ||
    query.includes("biodata") ||
    query.includes("about")
  ) {
    const edu = educationData[0];
    return {
      reply: `**Syafiqa Zahroo** adalah mahasiswi **S1 Teknik Informatika** di **Universitas Dian Nuswantoro (UDINUS)** yang saat ini menempuh **Semester 7** dengan **IPK ${edu.gpa}**.\n\n**Fokus dan Keahlian Utama:**\n• **Backend Development**: Perancangan RESTful API, pemodelan database relasional (MySQL, PostgreSQL), dan containerization dengan Docker.\n• **Full Stack Web Engineering**: Pengembangan aplikasi web interaktif menggunakan Laravel, Django, Next.js, dan React.\n• **Machine Learning & Computer Vision**: Riset deep learning dan Explainable AI (Grad-CAM) untuk klasifikasi citra aerial UAV.\n\nSyafiqa memiliki pengalaman kerja industri sebagai Back-End Developer Intern di Firstudio dengan predikat kelulusan memuaskan (94.8/100).`,
      suggestedQuestions: [
        "Lihat daftar project yang pernah dibuat",
        "Apa tech stack yang paling dikuasai?",
        "Bagaimana cara menghubungi Syafiqa?",
      ],
    };
  }

  // 3. RESEARCH & PAPER PUBLICATION
  if (
    query.includes("riset") ||
    query.includes("research") ||
    query.includes("paper") ||
    query.includes("isemantic") ||
    query.includes("publikasi") ||
    query.includes("publication") ||
    query.includes("ieee") ||
    query.includes("jurnal") ||
    query.includes("uav") ||
    query.includes("peatland") ||
    query.includes("grad-cam")
  ) {
    const paper = researchData[0];
    return {
      reply: `**Publikasi Ilmiah & Riset Syafiqa:**\n\n**Judul Paper:**\n*${paper.title}*\n\n• **Konferensi:** ${paper.conference} (${paper.year})\n• **Indeks / Penerbit:** IEEE Xplore Proceedings\n• **Penulis:** ${paper.authors.join(", ")}\n• **Fokus Riset:** ${paper.researchFocus.join(", ")}\n\n**Ringkasan Riset:**\n${paper.summary}\n\nSyafiqa berpartisipasi resmi sebagai Author dan Presenter pada konferensi internasional iSemantic 2026.`,
      suggestedQuestions: [
        "Apa saja sertifikasi yang dimiliki Syafiqa?",
        "Project Machine Learning apa yang pernah dibuat?",
      ],
    };
  }

  // 4. EXPERIENCE & INTERNSHIP
  if (
    query.includes("pengalaman") ||
    query.includes("experience") ||
    query.includes("magang") ||
    query.includes("intern") ||
    query.includes("firstudio") ||
    query.includes("kerja") ||
    query.includes("work")
  ) {
    const exp = experienceData[0];
    return {
      reply: `**Pengalaman Magang & Industri:**\n\n**${exp.role}** di **${exp.company}**\n• **Periode:** ${exp.period}\n• **Nilai Evaluasi Akhir:** **${exp.scoreBadge}**\n\n**Tanggung Jawab & Kontribusi:**\n${exp.highlights?.map((h) => `• ${h}`).join("\n")}\n\n**Tech Stack yang Digunakan:** ${exp.techStack?.join(", ")}.`,
      suggestedQuestions: [
        "Lihat sertifikat magang Firstudio",
        "Project backend apa yang pernah dibuat?",
      ],
    };
  }

  // 5. PROJECTS / KARYA
  if (
    query.includes("project") ||
    query.includes("projek") ||
    query.includes("karya") ||
    query.includes("aplikasi") ||
    query.includes("porto") ||
    query.includes("portfolio") ||
    query.includes("buat")
  ) {
    const projectList = projectsData
      .map(
        (p) =>
          `• **${p.title}** (${p.category})\n  ${p.subtitle}\n  Stack: ${p.techStack.join(", ")}`
      )
      .join("\n\n");

    return {
      reply: `**Daftar Proyek Unggulan Syafiqa Zahroo:**\n\n${projectList}\n\nAnda dapat mengklik kartu proyek pada halaman utama portofolio untuk melihat detail arsitektur, tangkapan layar sistem, dan tautan demo atau repository GitHub.`,
      suggestedQuestions: [
        "Jelaskan tentang SafeWash",
        "Jelaskan tentang project Hemoqueue",
        "Jelaskan tentang riset Peatland UAV",
      ],
    };
  }

  // 5a. SPECIFIC PROJECT DETAILS
  const matchedProject = projectsData.find(
    (p) =>
      query.includes(p.slug.toLowerCase()) ||
      query.includes(p.title.toLowerCase().split(" ")[0]) ||
      query.includes(p.title.toLowerCase().split("/")[0].trim())
  );

  if (matchedProject) {
    return {
      reply: `**Detail Proyek: ${matchedProject.title}**\n\n• **Kategori:** ${matchedProject.category}\n• **Subjudul:** ${matchedProject.subtitle}\n• **Tech Stack:** ${matchedProject.techStack.join(", ")}\n\n**Ringkasan:**\n${matchedProject.overview}\n\n**Fitur & Solusi:**\n${matchedProject.keyFeatures.map((f) => `• ${f}`).join("\n")}${matchedProject.liveDemoUrl ? `\n\n**Live Demo:** ${matchedProject.liveDemoUrl}` : ""
        }${matchedProject.githubUrl ? `\n**GitHub:** ${matchedProject.githubUrl}` : ""}`,
      suggestedQuestions: ["Lihat project lainnya", "Tech stack apa saja yang dikuasai?"],
    };
  }

  // 6. SKILLS & TECH STACK
  if (
    query.includes("skill") ||
    query.includes("keahlian") ||
    query.includes("tech") ||
    query.includes("stack") ||
    query.includes("bahasa") ||
    query.includes("framework") ||
    query.includes("tools") ||
    query.includes("database")
  ) {
    const skillsSummary = skillGroups
      .map((g) => `• **${g.category}**: ${g.items.join(", ")}`)
      .join("\n");

    return {
      reply: `**Keahlian Teknis & Tech Stack Syafiqa:**\n\n${skillsSummary}\n\nSyafiqa berpengalaman dalam pengembangan perangkat lunak end-to-end, mencakup desain skema database, pengembangan REST API, pembuatan antarmuka modern, hingga deployment berbasis Docker.`,
      suggestedQuestions: [
        "Project apa saja yang menggunakan Laravel?",
        "Project apa yang menggunakan Machine Learning?",
      ],
    };
  }

  // 7. CERTIFICATIONS & ACHIEVEMENTS
  if (
    query.includes("sertif") ||
    query.includes("cert") ||
    query.includes("prestasi") ||
    query.includes("achievement") ||
    query.includes("penghargaan")
  ) {
    const certList = certificationsData
      .slice(0, 5)
      .map((c) => `• **${c.title}** (${c.organization}) — ${c.issueDate}`)
      .join("\n");

    return {
      reply: `**Sertifikasi & Kredensial Pilihan:**\n\n${certList}\n\nDokumen sertifikat lengkap dapat dilihat langsung melalui modal pratinjau pada bagian **Certifications & Achievements**.`,
      suggestedQuestions: [
        "Ceritakan tentang sertifikasi magang Firstudio",
        "Ceritakan tentang sertifikat iSemantic 2026",
      ],
    };
  }

  // 8. EDUCATION & GPA
  if (
    query.includes("kuliah") ||
    query.includes("pendidikan") ||
    query.includes("education") ||
    query.includes("kampus") ||
    query.includes("universitas") ||
    query.includes("udinus") ||
    query.includes("ipk") ||
    query.includes("gpa") ||
    query.includes("semester")
  ) {
    const edu = educationData[0];
    return {
      reply: `**Latar Belakang Akademik:**\n\n• **Institusi:** ${edu.institution}\n• **Program Studi:** ${edu.degree}\n• **Status:** ${edu.semester} (${edu.period})\n• **Indeks Prestasi Kumulatif (IPK):** **${edu.gpa}**\n\n**Fokus Studi:**\n${edu.description}`,
      suggestedQuestions: [
        "Apa riset dan paper ilmiahnya?",
        "Lihat pengalaman kerja dan magang",
      ],
    };
  }

  // 9. CONTACT / HIRE / COLLABORATION
  if (
    query.includes("kontak") ||
    query.includes("contact") ||
    query.includes("email") ||
    query.includes("hire") ||
    query.includes("hubungi") ||
    query.includes("linkedin") ||
    query.includes("github") ||
    query.includes("wa") ||
    query.includes("kolaborasi")
  ) {
    return {
      reply: `**Kontak & Tautan Profesional:**\n\n• **Email:** [${profileData.email}](mailto:${profileData.email})\n• **LinkedIn:** [linkedin.com/in/syafiqa-zahroo](https://www.linkedin.com/in/syafiqa-zahroo-29091340a)\n• **GitHub:** [github.com/syafiqa23](https://github.com/syafiqa23)\n\nSyafiqa terbuka untuk diskusi seputar peluang kerja, program magang, kolaborasi riset, maupun pengembangan proyek perangkat lunak.`,
      suggestedQuestions: [
        "Ceritakan ringkasan profil Syafiqa",
        "Project apa saja yang sudah dibuat?",
      ],
    };
  }

  // 10. DEFAULT HELPFUL FALLBACK
  return {
    reply: `Terima kasih atas pertanyaannya.\n\nSyafiqa Zahroo adalah mahasiswi **Teknik Informatika UDINUS (IPK 3.79)** yang berfokus pada **Backend Development, Full Stack Web Engineering**, dan riset **Explainable AI**.\n\nAnda dapat menanyakan informasi spesifik mengenai:\n• Proyek perangkat lunak yang pernah dikerjakan\n• Pengalaman magang di Firstudio (Nilai: 94.8/100)\n• Publikasi paper di IEEE iSemantic 2026\n• Sertifikasi teknis dan penguasaan tech stack\n• Informasi kontak untuk kolaborasi`,
    suggestedQuestions: [
      "Lihat daftar project Syafiqa",
      "Apa tech stack yang dikuasai?",
      "Ceritakan tentang paper risetnya",
      "Bagaimana cara menghubungi Syafiqa?",
    ],
  };
}
