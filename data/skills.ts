export interface SkillGroup {
  category: string;
  items: string[];
  pastelColor: string; // e.g. 'blue', 'peach', 'yellow', 'pink', 'sage', 'lavender'
}

export const skillGroups: SkillGroup[] = [
  {
    category: "PROGRAMMING",
    items: ["PHP", "Python", "JavaScript", "TypeScript", "SQL"],
    pastelColor: "pastel-peach",
  },
  {
    category: "BACKEND",
    items: [
      "Laravel",
      "Django",
      "Django Ninja",
      "CodeIgniter 4",
      "REST API Architecture",
    ],
    pastelColor: "pastel-blue",
  },
  {
    category: "FRONTEND",
    items: [
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Blade",
      "React",
      "Next.js",
      "Vite",
    ],
    pastelColor: "pastel-pink",
  },
  {
    category: "DATABASE",
    items: ["MySQL", "PostgreSQL", "MariaDB", "SQLite"],
    pastelColor: "pastel-yellow",
  },
  {
    category: "MACHINE LEARNING",
    items: [
      "PyTorch",
      "Streamlit",
      "EfficientNet",
      "Grad-CAM",
      "Computer Vision",
      "TensorFlow",
    ],
    pastelColor: "pastel-sage",
  },
  {
    category: "INFRASTRUCTURE",
    items: [
      "Linux",
      "Ubuntu Server",
      "Docker",
      "Docker Compose",
      "Nginx",
      "Load Balancing",
      "MySQL Replication",
    ],
    pastelColor: "pastel-lavender",
  },
  {
    category: "TOOLS & DEV ENVIRONMENT",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "Antigravity",
      "Railway",
      "Vercel",
      "XAMPP",
      "Laragon",
      "Docker Desktop",
      "Figma",
    ],
    pastelColor: "pastel-peach",
  },
];
