export interface ProfileData {
  name: string;
  title: string;
  headline: string;
  subheadline: string;
  aboutNarrative: string;
  statusBadge: string;
  location: string;
  phone: string;
  linkedin: string;
  github: string;
  email: string;
  avatarUrl: string;
  specializations: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
}

export const profileData: ProfileData = {
  name: "Syafiqa Zahroo",
  title: "Informatics Engineering Student & Software Developer",
  headline: "Hi, I'm Syafiqa Zahroo.",
  subheadline:
    "Informatics Engineering student passionate about crafting reliable web applications, robust backend architectures, and intelligent machine learning solutions.",
  aboutNarrative:
    "Currently pursuing my degree in Engineering at Universitas Dian Nuswantoro (Semester 7, GPA 3.79/4.00), I focus on engineering maintainable, high-performance software systems and exploring practical data-driven intelligence. My experience spans building REST APIs and containerized backends with Laravel and Django, crafting modern interactive interfaces with Next.js and React, and researching computer vision architectures like Explainable AI (Grad-CAM).",
  statusBadge: "currently building things with code ✦",
  location: "Semarang, Indonesia",
  phone: "085246232785",
  linkedin: "https://www.linkedin.com/in/syafiqa-zahroo-29091340a",
  github: "https://github.com/syafiqa23",
  email: "zahroosyafiqa@gmail.com",
  avatarUrl: "/profile.jpg",
  specializations: [
    {
      title: "System & Backend Architecture",
      description:
        "Designing scalable RESTful APIs, relational databases (MySQL, PostgreSQL), and containerized micro-workflows.",
      icon: "Server",
    },
    {
      title: "Full Stack Web Engineering",
      description:
        "Developing performant, interactive web applications using Next.js, React, Laravel, and modern UI systems.",
      icon: "Globe",
    },
    {
      title: "Applied AI & Computer Vision",
      description:
        "Researching deep learning models, UAV aerial imagery classification, and Grad-CAM visual explainability.",
      icon: "Brain",
    },
    {
      title: "DevOps & Infrastructure",
      description:
        "Containerizing services with Docker, Nginx server configurations, database replication, and maintainable code practices.",
      icon: "Code2",
    },
  ],
};
