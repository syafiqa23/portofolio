export interface CVData {
  personalInfo: {
    name: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    linkedin: string;
    linkedinDisplay: string;
    github: string;
    githubDisplay: string;
  };
  summary: string;
  technicalSkills: {
    category: string;
    skills: string[];
  }[];
  experienceAndProjects: {
    role: string;
    projectOrCompany: string;
    type: "experience" | "project";
    description: string;
    techStack?: string[];
  }[];
  certifications: {
    title: string;
    organization: string;
    year: string;
  }[];
  education: {
    degree: string;
    institution: string;
    period: string;
    semester: string;
    gpa: string;
  };
}

export const cvData: CVData = {
  personalInfo: {
    name: "SYAFIQA ZAHROO",
    title: "Software Engineer & Machine Learning Developer",
    location: "Semarang, Indonesia",
    phone: "085246232785",
    email: "zahroosyafiqa@gmail.com",
    linkedin: "https://www.linkedin.com/in/syafiqa-zahroo-29091340a",
    linkedinDisplay: "linkedin.com/in/syafiqa-zahroo-29091340a",
    github: "https://github.com/syafiqa23",
    githubDisplay: "github.com/syafiqa23",
  },
  summary:
    "Berpengalaman mengembangkan software berbasis web, backend system, dan solusi machine learning untuk mendukung kebutuhan bisnis dan transformasi digital. Terbiasa membangun aplikasi menggunakan Laravel, Django, CodeIgniter, PostgreSQL, MySQL, Docker, REST API, serta Linux. Memiliki minat pada Software Engineering dan berkomitmen menghasilkan solusi yang andal, scalable, serta berorientasi pada kebutuhan pengguna.",
  technicalSkills: [
    {
      category: "Programming Languages",
      skills: ["PHP", "Python", "JavaScript", "SQL"],
    },
    {
      category: "Backend",
      skills: ["Laravel", "Django", "Django Ninja", "CodeIgniter 4", "REST API"],
    },
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "Blade", "JavaScript", "Vite"],
    },
    {
      category: "Database",
      skills: ["MySQL", "PostgreSQL", "MariaDB", "SQLite"],
    },
    {
      category: "Machine Learning",
      skills: ["PyTorch", "Streamlit", "EfficientNet", "Grad-CAM", "Computer Vision"],
    },
    {
      category: "Network & Infrastructure",
      skills: ["Linux", "Ubuntu Server", "Docker", "Docker Compose", "Nginx", "Load Balancing", "MySQL Replication"],
    },
    {
      category: "Tools",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "VS Code",
        "Railway",
        "Vercel",
        "XAMPP",
        "Laragon",
        "Docker Desktop",
        "Figma",
      ],
    },
  ],
  experienceAndProjects: [
    {
      role: "Full Stack Web Developer",
      projectOrCompany: "SafeWash SaaS Laundry Management System",
      type: "project",
      description:
        "Mengembangkan platform SaaS untuk digitalisasi UMKM laundry menggunakan Laravel dengan fitur REST API, QR Code Tracking, Loyalty Point System, serta MySQL.",
      techStack: ["Laravel", "REST API", "QR Code Tracking", "Loyalty Point", "MySQL"],
    },
    {
      role: "Backend Developer",
      projectOrCompany: "SmartLMS Learning Management System",
      type: "project",
      description:
        "Mengembangkan backend Learning Management System menggunakan Django, PostgreSQL, REST API, Docker, authentication, serta deployment menggunakan Railway.",
      techStack: ["Django", "PostgreSQL", "REST API", "Docker", "Authentication", "Railway"],
    },
    {
      role: "Full Stack Web Developer",
      projectOrCompany: "Blangkis Store E-Commerce",
      type: "project",
      description:
        "Mengembangkan platform e-commerce UMKM menggunakan CodeIgniter 4 dengan fitur authentication, shopping cart, manajemen produk, dan MySQL.",
      techStack: ["CodeIgniter 4", "Authentication", "Shopping Cart", "Manajemen Produk", "MySQL"],
    },
    {
      role: "Frontend Web Developer",
      projectOrCompany: "Forest Dessert Website",
      type: "project",
      description:
        "Mengembangkan website company profile dan katalog produk yang responsif menggunakan HTML, CSS, JavaScript, serta deployment melalui Vercel.",
      techStack: ["HTML", "CSS", "JavaScript", "Vercel"],
    },
    {
      role: "Machine Learning Developer",
      projectOrCompany: "Peatland Classification Platform",
      type: "project",
      description:
        "Mengembangkan aplikasi Machine Learning berbasis Streamlit untuk klasifikasi degradasi dan interpretasi lahan gambut menggunakan analisis citra.",
      techStack: ["Streamlit", "Python", "Computer Vision", "Grad-CAM", "Image Analysis"],
    },
  ],
  certifications: [
    {
      title: "IBM AI Engineering Specialization",
      organization: "IBM",
      year: "2026",
    },
    {
      title: "IBM DevOps and Software Engineering Specialization",
      organization: "IBM",
      year: "2026",
    },
    {
      title: "Pembelajaran Mesin Terawasi: Klasifikasi",
      organization: "IBM",
      year: "2025",
    },
    {
      title: "Pembelajaran Mesin Terawasi: Regresi",
      organization: "IBM",
      year: "2025",
    },
    {
      title: "Analisis Data Eksplorasi untuk Pembelajaran Mesin",
      organization: "IBM",
      year: "2025",
    },
    {
      title: "Pengantar Kecerdasan Buatan (AI)",
      organization: "IBM",
      year: "2025",
    },
  ],
  education: {
    degree: "S1 Teknik Informatika",
    institution: "Universitas Dian Nuswantoro (UDINUS)",
    period: "2023 – Sekarang",
    semester: "Semester 6",
    gpa: "IPK 3.79 / 4.00",
  },
};
