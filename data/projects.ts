export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: "Web Development" | "Backend" | "Machine Learning";
  techStack: string[];
  shortDescription: string;
  overview: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  classes?: string[];
  role: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  screenshotImage?: string;
  accentColor: string; // e.g. '#D9E8F5', '#E7DDF4', '#F7E7B2', '#F6DDE5', '#DCE8D5', '#F8D8C8'
  pastelBadgeBg: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "01",
    slug: "safewash",
    number: "01",
    title: "SafeWash",
    subtitle: "Laundry Management System / SaaS",
    category: "Web Development",
    techStack: ["Laravel", "React", "TypeScript", "Tailwind CSS"],
    shortDescription:
      "A laundry management system designed to help manage laundry operations through a modern web-based interface.",
    overview:
      "SafeWash is a modern web application designed to streamline daily laundry business operations, from service order management to status updates and transaction tracking.",
    problem:
      "Traditional laundry management relies on manual record-keeping, leading to order tracking errors, misplaced items, and inefficient communication with customers.",
    solution:
      "SafeWash offers a structured web workflow with intuitive interfaces for managing service items, tracking operational statuses in real time, and maintaining clear record logs.",
    keyFeatures: [
      "Order tracking workflow",
      "Customer service item management",
      "Real-time operational status indicators",
      "Clean financial & order log dashboard",
    ],
    role: "Software Developer",
    liveDemoUrl: "http://103.226.138.192/",
    screenshotImage: "/SafeWash.png",
    accentColor: "#D9E8F5", // Pastel Blue
    pastelBadgeBg: "bg-[#D9E8F5]",
    featured: true,
  },
  {
    id: "02",
    slug: "smart-hemodialysis",
    number: "02",
    title: "Hemodialysis Check-In / Hemoqueue",
    subtitle: "Hospital Check-In & Hemodialysis Queue Backend",
    category: "Backend",
    techStack: [
      "Laravel",
      "PostgreSQL",
      "REST API",
      "Database Design",
    ],
    shortDescription:
      "A hospital check-in and hemodialysis queue system where I contributed primarily to backend development during my internship at Firstudio.",
    overview:
      "Hemoqueue is a hospital-facing check-in and queue management solution built to improve patient arrival, appointment, and treatment workflows for hemodialysis departments. This project was developed during my Back-End Developer internship at Firstudio.",
    problem:
      "Dialysis centers face scheduling bottlenecks, patient waiting delays, and complex rescheduling requests when managing recurring patient treatments manually.",
    solution:
      "Contributed to backend services, API workflows, and PostgreSQL data operations that support patient check-in, appointment handling, queue status updates, and treatment records.",
    keyFeatures: [
      "Patient check-in and verification workflow",
      "Appointment and treatment queue management",
      "Backend API for queue status updates",
      "Structured patient treatment records",
    ],
    role: "Back-End Developer Intern at Firstudio",
    githubUrl: "https://github.com/mutiarapeggia/antrean-hemodialisis",
    liveDemoUrl: "https://kiosk.f1rst.my.id/",
    screenshotImage: "/Hemodialysis Check-In  Hemoqueue.png",
    accentColor: "#D9E8F5", // Pastel Blue
    pastelBadgeBg: "bg-[#D9E8F5]",
    featured: true,
  },
  {
    id: "03",
    slug: "smartlms",
    number: "03",
    title: "SmartLMS",
    subtitle: "Learning Management System / REST API",
    category: "Backend",
    techStack: ["Django", "Django Ninja", "PostgreSQL", "Docker"],
    shortDescription:
      "A learning management system backend designed around REST API architecture and containerized development.",
    overview:
      "SmartLMS is a lightweight and performant backend service built with Django Ninja and PostgreSQL for serving modern learning management platforms.",
    problem:
      "Standard monolithic LMS backends can become slow and hard to maintain when handling complex course catalog queries and student progress endpoints.",
    solution:
      "Engineered an asynchronous-friendly REST API using Django Ninja with containerization via Docker for predictable local development and production deployment.",
    keyFeatures: [
      "RESTful API endpoints for course content",
      "Optimized relational database schema in PostgreSQL",
      "Containerized dev & prod configuration via Docker",
      "Fast serialization with Django Ninja",
    ],
    role: "Backend Engineer",
    liveDemoUrl: "http://103.226.138.192/smartlms/",
    screenshotImage: "/SmartLMS.png",
    accentColor: "#E7DDF4", // Pastel Lavender
    pastelBadgeBg: "bg-[#E7DDF4]",
    featured: true,
  },
  {
    id: "04",
    slug: "blangkis-store",
    number: "04",
    title: "Blangkis Store",
    subtitle: "E-Commerce / Web Application",
    category: "Web Development",
    techStack: ["CodeIgniter 4", "PHP", "MySQL"],
    shortDescription:
      "A web-based store application developed using CodeIgniter 4.",
    overview:
      "Blangkis Store is a web-based e-commerce solution providing essential online store functionalities including product catalog presentation and order processing.",
    problem:
      "Local store merchants require a lightweight, easy-to-deploy web storefront that works smoothly on standard PHP web hosting.",
    solution:
      "Built an MVC web application using CodeIgniter 4 and MySQL with clear administrative and customer browsing interface components.",
    keyFeatures: [
      "Product catalog presentation",
      "Shopping cart & checkout workflow",
      "Store order management system",
      "MySQL relational data persistence",
    ],
    role: "Web Developer",
    liveDemoUrl: "http://103.226.138.192/blangkis/",
    screenshotImage: "/Blangkis Store.png",
    accentColor: "#F7E7B2", // Pastel Yellow
    pastelBadgeBg: "bg-[#F7E7B2]",
    featured: true,
  },
  {
    id: "05",
    slug: "forest-dessert",
    number: "05",
    title: "Forest Dessert Website",
    subtitle: "Website Showcase",
    category: "Web Development",
    techStack: ["HTML", "CSS", "JavaScript"],
    shortDescription:
      "A responsive website project focused on presenting a dessert business through a clean web interface.",
    overview:
      "Forest Dessert is a clean, visually appealing web showcase designed to present dessert menu offerings and brand information to online customers.",
    problem:
      "Small dessert shops need an attractive digital presence that highlights their visual menu items responsively across desktop and mobile devices.",
    solution:
      "Created a custom, lightweight web interface built with modern vanilla HTML, CSS, and interactive JavaScript.",
    keyFeatures: [
      "Responsive hero section layout",
      "Interactive product gallery",
      "Dessert menu highlight showcase",
      "Minimalist visual aesthetic",
    ],
    role: "Frontend Developer",
    liveDemoUrl: "https://webforestdessert.vercel.app",
    screenshotImage: "/Forest Dessert Website.png",
    accentColor: "#F6DDE5", // Pastel Pink
    pastelBadgeBg: "bg-[#F6DDE5]",
    featured: true,
  },
  {
    id: "06",
    slug: "peatland-classification",
    number: "06",
    title: "Peatland Vegetation Classification",
    subtitle: "Machine Learning / Computer Vision",
    category: "Machine Learning",
    techStack: [
      "Python",
      "PyTorch",
      "EfficientNet",
      "Grad-CAM",
      "Google Colab",
    ],
    shortDescription:
      "A computer vision project for classifying peatland vegetation density and interpreting model predictions using Grad-CAM.",
    overview:
      "A deep learning research implementation focusing on land cover classification from peatland UAV imagery to assist in environmental analysis and fire-risk interpretation.",
    problem:
      "Assessing vegetation density in vulnerable peatland ecosystems manually is time-consuming and difficult over large geographical areas.",
    solution:
      "Trained a convolutional neural network architecture (EfficientNet) using PyTorch, coupled with Grad-CAM visualization for explainable AI predictions.",
    classes: ["Bare", "Softly Grazed", "Heavily Grazed"],
    keyFeatures: [
      "Three-class vegetation density classification (Bare, Softly Grazed, Heavily Grazed)",
      "Grad-CAM visual explainability heatmaps",
      "Deep learning pipeline built with PyTorch",
      "UAV imagery processing workflow",
    ],
    role: "Machine Learning Researcher",
    liveDemoUrl:
      "https://projectcitrasyafiappww-jetlqnwphq43akwwyue7fu.streamlit.app/",
    screenshotImage: "/Peatland Vegetation Classification.png",
    accentColor: "#DCE8D5", // Pastel Sage
    pastelBadgeBg: "bg-[#DCE8D5]",
    featured: true,
  },
  {
    id: "07",
    slug: "knn-classification",
    number: "07",
    title: "KNN Classification System",
    subtitle: "Machine Learning / Interactive Streamlit App",
    category: "Machine Learning",
    techStack: [
      "Python",
      "Machine Learning",
      "Scikit-Learn",
      "Streamlit",
      "Pandas",
    ],
    shortDescription:
      "An interactive machine learning web application implementing the K-Nearest Neighbors classification algorithm for data analysis and real-time inference.",
    overview:
      "An interactive web-based data science project that demonstrates K-Nearest Neighbors (KNN) model training, evaluation, and classification prediction on feature datasets.",
    problem:
      "Understanding model decision boundaries and tuning K hyperparameters interactively requires accessible web tools rather than static notebook execution.",
    solution:
      "Built a web-based interactive interface using Streamlit to allow users to adjust parameters, input custom test samples, and visualize classification outcomes instantly.",
    keyFeatures: [
      "Interactive hyperparameter tuning (K parameter selection)",
      "Real-time sample prediction interface",
      "Streamlit cloud web app deployment",
      "Feature distribution analysis",
    ],
    role: "Machine Learning Developer",
    liveDemoUrl: "https://project-kn-uctdrjbtr4ttwhbfvbsuu5.streamlit.app/",
    screenshotImage: "/KNN Classification System.png",
    accentColor: "#F8D8C8", // Pastel Peach
    pastelBadgeBg: "bg-[#F8D8C8]",
    featured: true,
  },
  {
    id: "08",
    slug: "peatland-fire-risk-research",
    number: "08",
    title: "Peatland Fire-Risk Research Project",
    subtitle: "Research Paper / Explainable Computer Vision",
    category: "Machine Learning",
    techStack: [
      "Python",
      "PyTorch",
      "EfficientNet",
      "Grad-CAM",
      "Streamlit",
      "UAV Imagery",
    ],
    shortDescription:
      "A research project accompanying a paper on explainable peatland vegetation-density classification and fire-risk interpretation from UAV imagery.",
    overview:
      "This research project explores how computer vision and Grad-CAM visual explanations can classify peatland vegetation density from UAV aerial imagery and provide interpretable cues for environmental fire-risk assessment.",
    problem:
      "Environmental researchers need a scalable way to assess vegetation conditions across peatland areas while still being able to understand the visual evidence behind model predictions.",
    solution:
      "Developed and deployed an interactive Streamlit demonstration for the research workflow, combining EfficientNet-based classification with Grad-CAM visual explainability.",
    keyFeatures: [
      "UAV imagery-based peatland vegetation classification",
      "Explainable predictions with Grad-CAM heatmaps",
      "Interactive Streamlit research demonstration",
      "Fire-risk interpretation from vegetation-density results",
    ],
    role: "Machine Learning Researcher",
    liveDemoUrl:
      "https://project-paper-mrp7fhaljrf9u5bhn4gkch.streamlit.app/",
    screenshotImage: "/Peatland Fire-Risk Research Project.png",
    accentColor: "#DCE8D5",
    pastelBadgeBg: "bg-[#DCE8D5]",
    featured: true,
  },
];
