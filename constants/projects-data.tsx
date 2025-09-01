import { Project } from "./projects";
import { PROJECT_CATEGORIES } from "./project-categories";

// ============================================
// PROJECTS DATA - Add your projects here
// ============================================

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with advanced inventory management, payment integration, and analytics dashboard.",
    shortDescription: "Modern e-commerce platform with advanced features",
    image: "/images/projects/ecommerce.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: PROJECT_CATEGORIES.WEB_APP,
    client: "RetailFlow Inc.",
    duration: "4 months",
    teamSize: "5 developers",
    link: "#",
    detailedDescription:
      "We developed a comprehensive e-commerce platform that revolutionized RetailFlow's online presence. The platform features advanced inventory management, real-time analytics, multi-payment gateway integration, and a responsive admin dashboard. The solution increased their online sales by 300% within the first quarter.",
    challenges: [
      "Complex inventory synchronization across multiple warehouses",
      "Real-time payment processing with multiple gateways",
      "Scalable architecture to handle peak traffic",
    ],
    solutions: [
      "Implemented microservices architecture for better scalability",
      "Built real-time inventory tracking with WebSocket connections",
      "Integrated multiple payment gateways with fallback systems",
    ],
    results: [
      "300% increase in online sales",
      "50% reduction in inventory management time",
      "99.9% uptime during peak shopping seasons",
    ],
    images: [
      "/images/projects/ecommerce/dashboard.jpg",
      "/images/projects/ecommerce/mobile.jpg",
      "/images/projects/ecommerce/admin.jpg",
    ],
  },
  {
    id: "2",
    title: "Healthcare Management System",
    description:
      "HIPAA-compliant patient management system with appointment scheduling, medical records, and telemedicine features.",
    shortDescription: "HIPAA-compliant patient management platform",
    image: "/images/projects/healthcare.jpg",
    technologies: ["React", "Python", "PostgreSQL", "AWS"],
    category: PROJECT_CATEGORIES.HEALTHCARE,
    client: "MediCare Solutions",
    duration: "6 months",
    teamSize: "4 developers",
    link: "#",
    detailedDescription:
      "A comprehensive healthcare management system that streamlines patient care and administrative tasks. The platform includes secure patient records, appointment scheduling, telemedicine capabilities, and billing integration. All components are HIPAA-compliant with end-to-end encryption.",
    challenges: [
      "HIPAA compliance and data security",
      "Integration with existing medical equipment",
      "Real-time telemedicine functionality",
    ],
    solutions: [
      "Implemented end-to-end encryption and audit trails",
      "Built custom APIs for medical device integration",
      "Developed secure video calling with recording capabilities",
    ],
    results: [
      "40% reduction in administrative workload",
      "95% patient satisfaction rate",
      "60% increase in telemedicine adoption",
    ],
    images: [
      "/images/projects/healthcare/dashboard.jpg",
      "/images/projects/healthcare/appointment.jpg",
      "/images/projects/healthcare/telemedicine.jpg",
    ],
  },
  {
    id: "3",
    title: "Mobile Banking App",
    description:
      "Secure mobile banking application with biometric authentication, real-time transactions, and AI-powered insights.",
    shortDescription: "Secure mobile banking with AI insights",
    image: "/images/projects/banking.jpg",
    technologies: ["React Native", "Java", "Spring", "MySQL"],
    category: PROJECT_CATEGORIES.MOBILE_APP,
    client: "FinTech Bank",
    duration: "8 months",
    teamSize: "6 developers",
    link: "#",
    detailedDescription:
      "A cutting-edge mobile banking application that provides users with secure, fast, and intelligent banking services. Features include biometric authentication, real-time transaction notifications, AI-powered spending insights, and seamless money transfers.",
    challenges: [
      "Bank-level security implementation",
      "Real-time transaction processing",
      "AI-powered financial insights",
    ],
    solutions: [
      "Multi-layer security with biometric and 2FA",
      "Real-time event-driven architecture",
      "Machine learning algorithms for spending analysis",
    ],
    results: [
      "500K+ app downloads in first 6 months",
      "4.8/5 app store rating",
      "30% increase in digital banking adoption",
    ],
    images: [
      "/images/projects/banking/home.jpg",
      "/images/projects/banking/transactions.jpg",
      "/images/projects/banking/insights.jpg",
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
