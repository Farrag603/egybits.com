import { PROJECT_CATEGORIES, ProjectCategory } from "./project-categories";
import { projects } from "./projects-data";

// ============================================
// PROJECT INTERFACE & UTILITIES
// ============================================

// Project Interface for type safety
export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  technologies: string[];
  category: string;
  client: string;
  duration: string;
  teamSize: string;
  link: string;
  detailedDescription: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  images: string[];
}

// Helper function to create a project template
export const createProjectTemplate = (): Partial<Project> => ({
  id: "",
  title: "",
  description: "",
  shortDescription: "",
  image: "/images/projects/placeholder.jpg", // Default placeholder
  technologies: [],
  category: PROJECT_CATEGORIES.REAL_ESTATE, // Default category
  client: "",
  duration: "",
  teamSize: "",
  link: "",
  detailedDescription: "",
  challenges: [],
  solutions: [],
  results: [],
  images: [],
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter((project) => project.category === category);
};

// Get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

// Get all unique technologies used across projects
export const getAllTechnologies = (): string[] => {
  const allTechnologies = projects.flatMap((project) => project.technologies);
  return Array.from(new Set(allTechnologies)).sort();
};

// Get all unique categories
export const getAllCategories = (): string[] => {
  const allCategories = projects.map((project) => project.category);
  return Array.from(new Set(allCategories)).sort();
};

// Get projects by technology
export const getProjectsByTechnology = (technology: string): Project[] => {
  return projects.filter((project) =>
    project.technologies.some(
      (tech) => tech.toLowerCase() === technology.toLowerCase()
    )
  );
};

// Get latest projects (first N projects)
export const getLatestProjects = (count: number = 6): Project[] => {
  return projects.slice(0, count);
};

// Get next project ID
export const getNextProjectId = (): string => {
  const maxId = Math.max(...projects.map((p) => parseInt(p.id) || 0));
  return (maxId + 1).toString();
};

// Export projects
export { projects };

// ============================================
// HOW TO ADD A NEW PROJECT
// ============================================
/*
1. Add your project images to /public/images/projects/
2. Go to constants/projects-data.tsx
3. Add a new project object to the projects array with:
   - Unique ID (use getNextProjectId() for next available)
   - Title and descriptions
   - Technologies array
   - Category from PROJECT_CATEGORIES
   - All required fields
4. The project will automatically appear on your site!

Example:
{
  id: "your-project-id",
  title: "Your Project Name",
  description: "Detailed project description...",
  shortDescription: "Brief description for cards",
  image: "/images/projects/your-main-image.jpg",
  technologies: ["React", "Node.js", "MongoDB"],
  category: PROJECT_CATEGORIES.WEB_APP,
  client: "Client Name",
  duration: "2 weeks",
  teamSize: "3 developers",
  link: "https://your-project.com",
  detailedDescription: "Full detailed description...",
  challenges: ["Challenge 1", "Challenge 2"],
  solutions: ["Solution 1", "Solution 2"],
  results: ["Result 1", "Result 2"],
  images: [
    "/images/projects/screenshot1.jpg",
    "/images/projects/screenshot2.jpg"
  ]
}
*/
