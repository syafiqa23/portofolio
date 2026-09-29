export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyLogo?: string;
  period: string;
  scoreBadge?: string;
  description: string;
  highlights?: string[];
  techStack?: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "firstudio-backend-intern",
    role: "Back-End Developer Intern",
    company: "Firstudio",
    companyLogo: "/firstudio-logo.webp",
    period: "July 29, 2026 – September 03, 2026",
    scoreBadge: "Excellent — 94.8/100",
    description:
      "Successfully completed an internship program as a Back-End Developer Intern with a final performance score of 94.8/100 (Excellent).",
    highlights: [
      "Assisted in backend system development, API architecture design, and database operations.",
      "Achieved a high performance evaluation rating of 94.8/100 upon internship completion.",
    ],
    techStack: ["Backend Engineering", "API Design", "Database Management"],
  },
];
