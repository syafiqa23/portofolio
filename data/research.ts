export interface ResearchPaper {
  id: string;
  title: string;
  conference: string;
  conferenceLogo?: string;
  authors: string[];
  year: string;
  badge: string;
  researchFocus: string[];
  summary: string;
  paperUrl?: string;
  certificateUrl?: string;
}

export const researchData: ResearchPaper[] = [
  {
    id: "isemantic-2026-peatland-fire-risk",
    title:
      "Explainable Fire-Risk Interpretation from UAV-Based Peatland Vegetation-Density Classification",
    conference:
      "International Seminar on Application for Technology of Information and Communication (iSemantic)",
    conferenceLogo: "/isemantic-logo.png",
    authors: ["Syafiqa Zahroo", "Ricardus Anggi Pramunendar"],
    year: "2026",
    badge: "IEEE Xplore / Conference",
    researchFocus: [
      "Computer Vision",
      "Explainable AI (Grad-CAM)",
      "Deep Learning",
      "UAV Remote Sensing",
    ],
    summary:
      "This research explores deep learning architectures and Grad-CAM visual explainability to classify vegetation density from aerial UAV imagery, providing interpretable visual heatmaps for environmental fire-risk assessment.",
  },
];
