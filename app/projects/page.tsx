"use client";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import styles from "./projects.module.sass";
import Container from "@/components/Container";
import { getAllCategories, Project } from "@/constants/projects";
import { projects } from "@/constants/projects-data";
import ProjectModal from "@/components/ProjectModal";
import ProjectsContent from "@/components/Projects/ProjectsContent";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const searchParams = useSearchParams();

  // Get all available categories
  const categories = getAllCategories();

  // Auto-open modal if project parameter is in URL
  useEffect(() => {
    const projectId = searchParams.get("project");
    if (projectId) {
      const project = projects.find((p) => p.id === projectId);
      if (project) {
        setSelectedProject(project);
      }
    }
  }, [searchParams]);

  const openModal = (project: any) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
    // Clear the project parameter from URL
    const url = new URL(window.location.href);
    url.searchParams.delete("project");
    window.history.pushState({}, "", url.toString());
  };

  // Filter projects based on search query and selected categories
  const filteredProjects = useMemo(() => {
    let filtered = projects;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (project: Project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.shortDescription.toLowerCase().includes(query) ||
          project.client.toLowerCase().includes(query) ||
          project.technologies.some((tech: string) =>
            tech.toLowerCase().includes(query)
          )
      );
    }

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((project: Project) =>
        selectedCategories.includes(project.category)
      );
    }

    return filtered;
  }, [searchQuery, selectedCategories]);

  // Handle category filter toggle
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
  };

  return (
    <div className={styles.projectsPage}>
      <Container>
        <div className={styles.header}>
          <h1 className={styles.title}>Our Projects</h1>
          <p className={styles.subtitle}>
            Explore our portfolio of innovative software solutions that have
            transformed businesses across various industries.
          </p>
          <div className={styles.background}>
            <Image
              src="/images/bg-outlines.svg"
              width={960}
              height={380}
              alt="Outlines"
            />
            <Image
              src="/images/bg-outlines-fill.png"
              width={960}
              height={380}
              alt="Fill"
            />
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className={styles.filtersSection}>
          {/* Search Bar */}
          <div className={styles.searchContainer}>
            <div className={styles.searchBar}>
              <svg
                className={styles.searchIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search projects by name, client, technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className={styles.clearButton}
                >
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className={styles.categoryFilters}>
            <div className={styles.filterHeader}>
              <span className={styles.filterLabel}>Filter by Category:</span>
              {(selectedCategories.length > 0 || searchQuery) && (
                <button
                  onClick={clearAllFilters}
                  className={styles.clearAllButton}
                >
                  Clear All
                </button>
              )}
            </div>
            <div className={styles.categoryChips}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`${styles.categoryChip} ${
                    selectedCategories.includes(category) ? styles.active : ""
                  }`}
                >
                  {category}
                  {selectedCategories.includes(category) && (
                    <svg
                      className={styles.chipIcon}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className={styles.resultsInfo}>
            {searchQuery || selectedCategories.length > 0 ? (
              <p className={styles.resultsCount}>
                Showing {filteredProjects.length} of {projects.length} projects
              </p>
            ) : (
              <p className={styles.resultsCount}>
                {projects.length} projects available
              </p>
            )}
          </div>
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className={styles.projectCard}
                onClick={() => openModal(project)}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className={styles.projectImage}
                    priority={false}
                  />
                  <div className={styles.imageOverlay}>
                    <p className={styles.categoryText}>{project.category}</p>
                  </div>
                </div>

                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>
                    {project.shortDescription}
                  </p>

                  <div className={styles.projectMeta}>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Client:</span>
                      <span className={styles.metaValue}>{project.client}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <span className={styles.metaLabel}>Duration:</span>
                      <span className={styles.metaValue}>
                        {project.duration}
                      </span>
                    </div>
                  </div>

                  <div className={styles.technologies}>
                    {project.technologies
                      .slice(0, 3)
                      .map((tech: string, index: number) => (
                        <span key={index} className={styles.techTag}>
                          {tech}
                        </span>
                      ))}
                    {project.technologies.length > 3 && (
                      <span className={styles.techTag}>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className={styles.cardFooter}>
                    <button className={styles.viewButton}>
                      View Details
                      <svg
                        className={styles.arrowIcon}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className={styles.cardOverlay}></div>
              </div>
            ))
          ) : (
            <div className={styles.noResults}>
              <div className={styles.noResultsIcon}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className={styles.noResultsTitle}>No projects found</h3>
              <p className={styles.noResultsText}>
                {searchQuery
                  ? `No projects match "${searchQuery}". Try adjusting your search or filters.`
                  : "No projects match the selected categories. Try different filters."}
              </p>
              <button
                onClick={clearAllFilters}
                className={styles.clearFiltersButton}
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </Container>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
  );
}
