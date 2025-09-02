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

import { PROJECT_CATEGORIES } from "./project-categories";
export { PROJECT_CATEGORIES };

// Helper function to create a new project template
export const createProjectTemplate = (): Partial<Project> => ({
  id: "", // Auto-generate or set manually
  title: "",
  description: "",
  shortDescription: "",
  image: "/images/projects/placeholder.jpg", // Default placeholder
  technologies: [],
  category: PROJECT_CATEGORIES.ENTERPRISE, // Default category
  client: "",
  duration: "",
  teamSize: "",
  link: "#",
  detailedDescription: "",
  challenges: [],
  solutions: [],
  results: [],
  images: [],
});

// Import projects data from separate file
export { projects } from "./projects-data";

// ============================================
// UTILITY FUNCTIONS FOR EASY PROJECT MANAGEMENT
// ============================================

import { projects } from "./projects-data";

// Get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter((project) => project.category === category);
};

// Get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project: Project) => project.id === id);
};

// Get all unique technologies used across projects
export const getAllTechnologies = (): string[] => {
  const allTech = projects.flatMap((project: Project) => project.technologies);
  return Array.from(new Set(allTech)).sort();
};

// Get all unique categories
export const getAllCategories = (): string[] => {
  return Array.from(
    new Set(projects.map((project: Project) => project.category))
  ).sort();
};

// Search projects by technology
export const getProjectsByTechnology = (technology: string): Project[] => {
  return projects.filter((project: Project) =>
    project.technologies.some((tech: string) =>
      tech.toLowerCase().includes(technology.toLowerCase())
    )
  );
};

// Get latest projects (by ID, assuming higher ID = newer)
export const getLatestProjects = (count: number = 3): Project[] => {
  return projects
    .sort((a: Project, b: Project) => parseInt(b.id) - parseInt(a.id))
    .slice(0, count);
};

// Generate the next available project ID
export const getNextProjectId = (): string => {
  const maxId = Math.max(...projects.map((p: Project) => parseInt(p.id) || 0));
  return (maxId + 1).toString();
};

// ============================================
// HOW TO ADD A NEW PROJECT:
// ============================================
/*
IMPORTANT: Projects are now stored in a separate file!

1. Open the file: constants/projects-data.tsx
2. Copy the template structure from existing projects
3. Add your new project to the projects array
4. Make sure to use PROJECT_CATEGORIES for consistency

The main projects.tsx file contains:
- Project interface (types)
- PROJECT_CATEGORIES constants
- Utility functions (getProjectsByCategory, etc.)

The projects-data.tsx file contains:
- The actual projects array with all project data

Project Structure:
- ✅ Only screenshots/images are supported (no videos)
- ✅ Use the images array for project screenshots
- ✅ Provide challenges, solutions, and results for detailed view

This separation makes it easier to manage:
- ✅ Add new projects without touching utility functions
- ✅ Cleaner code organization
- ✅ Easier to maintain large numbers of projects
*/
