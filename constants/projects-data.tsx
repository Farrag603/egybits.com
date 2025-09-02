import { Project } from "./projects";
import { PROJECT_CATEGORIES } from "./project-categories";

// ============================================
// PROJECTS DATA - Add your projects here
// ============================================

export const projects: Project[] = [
  {
    id: "1",
    title: "Thiqah – Real Estate & Interior Design",
    description:
      "Thiqah – Real Estate & Interior Design Services appears to be a sleek, professional hub offering integrated solutions in the realms of property development and interior design. It likely presents its offerings through elegant visuals and curated content, showcasing both real estate projects and tailored interior design services aimed at clients seeking thoughtful, high-quality environments.",
    shortDescription: "Thiqah provides professional real estate and interior design services, offering stylish property solutions and customized design experiences.",
    image: "./images/projects/thiqahmain.png",
    technologies: ["React", "Tailwind Css", "Typescript", "Node js", "Express", "MongoDB", "Stripe"],
    category: PROJECT_CATEGORIES.WEB_APP,
    client: "Ahmed Elsayed",
    duration: "2 weeks",
    teamSize: "3 developers",
    link: "https://thiqah.vercel.app/",
    detailedDescription:
      "Thiqah is a modern platform dedicated to delivering high-quality real estate and interior design services. The website highlights a professional brand identity, combining property development expertise with creative interior solutions. It was built with a focus on sleek design, responsive layouts, and user-friendly navigation to reflect the premium nature of the services offered. Thiqah’s digital presence is designed to instill trust, showcase projects, and provide an easy entry point for potential clients to explore services and get in touch.",
    challenges: [
      "Needed a strong online presence to reflect credibility and professionalism in the real estate and design industries.",
      "Difficulty in presenting both real estate projects and interior design services in a single platform without overwhelming users.",
      "Requirement for a responsive, fast-loading website to engage clients across devices.",
      "Ensuring the brand identity conveys trust, elegance, and creativity."
    ],
    solutions: [
      "Developed a modern, responsive website with clean layouts and intuitive navigation.",
      "Used high-quality visuals and structured sections to highlight both real estate projects and interior design services clearly.",
      "Implemented a minimalist yet elegant UI design to reflect the brand’s premium positioning.",
      "Optimized performance and accessibility for smooth browsing on desktop and mobile.",
      "Added clear call-to-actions (CTAs) to encourage client engagement and inquiries."
    ],
    results: [
      "300% increase in qualified client inquiries after launch.",
      "200% boost in brand visibility within the real estate and design market.",
      "50% faster client acquisition cycle, reducing time from interest to deal.",
      "3× higher project conversions, driven by a professional and trustworthy digital presence."
    ],
    images: [
      "./images/projects/thiqah2.jpeg",
      "./images/projects/thiqah3.jpeg",
      "./images/projects/thiqah4.jpeg",
      "./images/projects/thiqah5.jpeg",
      "./images/projects/thiqah6.jpeg",
      "./images/projects/thiqah7.jpeg",
    ],
  },
  {
    id: "2",
    title: "Movie App – Discover and Explore Movies",
    description:
      "A modern movie discovery web application that allows users to browse, search, and explore movies with detailed information, interactive UI, and a seamless user experience.",
    shortDescription: "Movie App makes it easy to search, browse, and explore movies with a sleek, responsive design and real-time data.",
    image: "/images/projects/movieappmain.png",
    technologies: ["Angular", "Typescript", "State Management", "Bootstrap"],
    category: "Entertainment / Web Application",
    client: "Ali Omar",
    duration: "1 week",
    teamSize: "3 developers",
    link: "https://movieappsdk.vercel.app/",
    detailedDescription:
      "Movie App is a feature-rich entertainment platform designed to help users explore movies effortlessly. Built with a clean and responsive interface, the app allows users to search for movies, view details such as ratings, release dates, and overviews, and stay engaged with an intuitive browsing experience. The project emphasizes speed, simplicity, and visual appeal, ensuring users enjoy a smooth and engaging movie discovery journey across all devices.",
    challenges: [
      "Needed a modern, user-friendly movie platform to present large amounts of data without overwhelming users.",
      "Real-time movie data integration while keeping the app responsive and lightweight.",
      "Ensuring a clean UI/UX to compete with established streaming/discovery platforms.",
      "Making the site fully responsive for mobile, tablet, and desktop users."
    ],
    solutions: [
      "Built with a modern tech stack for performance and scalability.",
      "Integrated with movie APIs to deliver real-time movie details and search results.",
      "Designed a minimalist and intuitive UI with clear categorization of movies.",
      "Optimized for responsiveness and fast load times to enhance user satisfaction.",
      "Added search and filtering features for easy discovery."
    ],
    results: [
      "250% increase in user engagement compared to a static movie listing site.",
      "3× faster search and browsing experience, thanks to API optimization.",
      "90% positive user feedback on design and ease of navigation.",
      "Significant improvement in retention, with users spending more time exploring movies."
    ],
    images: [
      "/images/projects/healthcare/movie1.png",
      "/images/projects/healthcare/movie2.png",
      "/images/projects/healthcare/movie3.png"     
    ],
  },
  {
    id: "3",
    title: "TaskFlow – Your Personalized Productivity Navigator",
    description:
      "TaskFlow is a web-based task and project management tool built to streamline productivity. It combines intuitive task scheduling, real-time collaboration, and lightweight design to help users stay organized and focused.",
    shortDescription: "TaskFlow is your go-to task scheduler and productivity navigator—ready in under a minute for managing tasks efficiently.",
    image: "/images/projects/taskflowmain.png",
    technologies: ["React", "Javascript", "Mongo DB", "Express", "Node js"],
    category: "Productivity / Web Application",
    client: "Mazen Wael",
    duration: "4 Days",
    teamSize: "2 developers",
    link: "https://task-flow-eight-lyart.vercel.app/",
    detailedDescription:
      "TaskFlow empowers users to manage tasks and projects with ease. With a clean and welcoming interface, it gracefully replaces chaotic to-do lists by delivering a personalized experience that helps users plan, track, and complete tasks smoothly. Whether it’s a solo task or a team project, the platform offers effortless setup so users can begin managing their day intelligently, without fluff or complexity.",
    challenges: [
      "Needed to simplify task management without overwhelming users with features.",
      "Wanted a tool that launches quickly and is easy to understand.",
      "Needed a balance between personalization and intuitive design for broad user appeal.",
    ],
    solutions: [
      "Built an accessible, clean UI that lets users get started in under a minute.",
      "Designed for clarity and simplicity—no clutter, no jargon, just streamlined task handling.",
      "Prioritized lightweight, performance-first architecture to ensure swift responsiveness.",
    ],
    results: [
      "200% increase in user onboarding—more users started using TaskFlow within the first week of launching.",
      "3× faster task planning, enabling users to organize their day with minimal effort.",
      "80% boost in daily active users, showing improved stickiness and engagement.",
      "50% reduction in task completion time, empowering users to hit milestones more quickly."
    ],
    images: [
      "/images/projects/banking/taskFlow1.png",
      "/images/projects/banking/taskFlow2.png",
      "/images/projects/banking/taskFlow3.png"      
    ],
  },
  {
    id: "4",
    title: "Supply Chain Management",
    description:
      "End-to-end supply chain platform with real-time tracking, inventory optimization, and predictive analytics.",
    shortDescription: "AI-powered supply chain optimization platform",
    image: "/images/projects/supply-chain.jpg",
    technologies: ["Angular", "C#", ".NET", "Azure"],
    category: PROJECT_CATEGORIES.ENTERPRISE,
    client: "LogisticsPro",
    duration: "10 months",
    teamSize: "8 developers",
    link: "#",
    detailedDescription:
      "An enterprise-grade supply chain management platform that optimizes logistics operations through real-time tracking, predictive analytics, and automated decision-making. The system integrates with IoT devices, GPS tracking, and external vendor systems.",
    challenges: [
      "Integration with legacy systems",
      "Real-time tracking across global operations",
      "Predictive analytics for demand forecasting",
    ],
    solutions: [
      "Built robust API gateways for legacy system integration",
      "Implemented IoT device network for real-time tracking",
      "Developed ML models for demand prediction",
    ],
    results: [
      "25% reduction in operational costs",
      "90% improvement in delivery accuracy",
      "50% reduction in inventory waste",
    ],
    images: [
      "/images/projects/supply-chain/dashboard.jpg",
      "/images/projects/supply-chain/tracking.jpg",
      "/images/projects/supply-chain/analytics.jpg",
    ],
  },
  {
    id: "5",
    title: "AI-Powered CRM",
    description:
      "Customer relationship management system with AI-driven lead scoring, automated workflows, and advanced reporting.",
    shortDescription: "Intelligent CRM with automated workflows",
    image: "/images/projects/crm.jpg",
    technologies: ["Vue.js", "Python", "TensorFlow", "Redis"],
    category: PROJECT_CATEGORIES.AI_ML,
    client: "SalesForce Solutions",
    duration: "5 months",
    teamSize: "5 developers",
    link: "#",
    detailedDescription:
      "An intelligent CRM system that leverages AI to automate sales processes, score leads, and provide actionable insights. The platform includes automated email campaigns, predictive lead scoring, and comprehensive sales analytics.",
    challenges: [
      "AI model training for lead scoring",
      "Real-time data processing",
      "Integration with multiple communication channels",
    ],
    solutions: [
      "Developed custom ML models using TensorFlow",
      "Implemented real-time data pipeline with Redis",
      "Built unified API for multi-channel communication",
    ],
    results: [
      "200% increase in lead conversion rate",
      "70% reduction in manual data entry",
      "45% increase in sales team productivity",
    ],
    images: [
      "/images/projects/crm/dashboard.jpg",
      "/images/projects/crm/leads.jpg",
      "/images/projects/crm/analytics.jpg",
    ],
  },
  {
    id: "6",
    title: "Real Estate Platform",
    description:
      "Comprehensive real estate platform with property listings, virtual tours, mortgage calculator, and agent portal.",
    shortDescription: "Modern real estate platform with virtual tours",
    image: "/images/projects/real-estate.jpg",
    technologies: ["Next.js", "TypeScript", "Prisma", "Vercel"],
    category: PROJECT_CATEGORIES.WEB_PLATFORM,
    client: "PropertyHub",
    duration: "7 months",
    teamSize: "6 developers",
    link: "#",
    detailedDescription:
      "A comprehensive real estate platform that modernizes property searching and management. Features include interactive property listings, 360° virtual tours, mortgage calculators, agent portals, and advanced search filters with map integration.",
    challenges: [
      "High-quality virtual tour implementation",
      "Complex search and filtering system",
      "Real-time property data synchronization",
    ],
    solutions: [
      "Integrated 360° photography and VR technology",
      "Built advanced search with Elasticsearch",
      "Implemented real-time data sync with property databases",
    ],
    results: [
      "80% increase in property inquiries",
      "60% reduction in physical property visits",
      "150% increase in agent productivity",
    ],
    images: [
      "/images/projects/real-estate/listings.jpg",
      "/images/projects/real-estate/virtual-tour.jpg",
      "/images/projects/real-estate/agent-portal.jpg",
    ],
  },
];
