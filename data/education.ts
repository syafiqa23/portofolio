export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  semester: string;
  gpa: string;
  description?: string;
  badge?: string;
}

export const educationData: EducationItem[] = [
  {
    id: "udinus-teknik-informatika",
    institution: "Universitas Dian Nuswantoro",
    degree: "S1 Teknik Informatika",
    period: "2023 — Present",
    semester: "Semester 7",
    gpa: "GPA 3.79 / 4.00",
    description:
      "Focusing on Software Engineering, Database Systems, Web Development, Algorithms, Machine Learning, and Computer Vision.",
    badge: "Active Student",
  },
];
