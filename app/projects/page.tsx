"use client";

import { useState, useMemo } from "react";
import { projects, getAllCategories, Project } from "@/constants/projects";
import Container from "@/components/Container";
import ProjectModal from "@/components/ProjectModal";
import styles from "./projects.module.sass";

const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = getAllCategories();

  // Filter projects based on search query and selected categories
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = project.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(project.category);

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategories]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
  };

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  return (
    <main className={styles.projectsPage}>
      <div className={styles.background}>
        <img
          src="/images/bg-outlines.svg"
          alt="Background"
          className={styles.bgOutlines}
        />
        <img
          src="/images/bg-outlines-fill.png"
          alt="Background Fill"
          className={styles.bgFill}
        />
      </div>

      <Container>
        <div className={styles.header}>
          <h1 className={styles.title}>Our Projects</h1>
          <p className={styles.subtitle}>
            Explore our portfolio of innovative solutions and successful
            collaborations
          </p>
        </div>

        <div className={styles.filtersSection}>
          {/* Search Bar */}
          <div className={styles.searchContainer}>
            <div className={styles.searchBar}>
              <div className={styles.searchIcon}>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </div>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search projects, technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className={styles.clearButton}
                  onClick={() => setSearchQuery("")}
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Category Filters */}
          <div className={styles.categoryFilters}>
            <div className={styles.filterHeader}>
              <span className={styles.filterLabel}>Filter by Category:</span>
              {selectedCategories.length > 0 && (
                <button
                  className={styles.clearAllButton}
                  onClick={clearAllFilters}
                >
                  Clear All
                </button>
              )}
            </div>
            <div className={styles.categoryChips}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${styles.categoryChip} ${
                    selectedCategories.includes(category) ? styles.active : ""
                  }`}
                  onClick={() => toggleCategory(category)}
                >
                  <span className={styles.chipIcon}>
                    {selectedCategories.includes(category) ? "✓" : "+"}
                  </span>
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Info */}
        <div className={styles.resultsInfo}>
          <span className={styles.resultsCount}>
            {filteredProjects.length} project
            {filteredProjects.length !== 1 ? "s" : ""} found
          </span>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.cardImage}>
                  <img src={project.image} alt={project.title} />
                  <div className={styles.cardOverlay}>
                    <button
                      className={styles.viewButton}
                      onClick={() => openModal(project)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.categoryBadge}>{project.category}</div>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDescription}>
                    {project.shortDescription}
                  </p>
                  <div className={styles.cardMeta}>
                    <span className={styles.duration}>{project.duration}</span>
                    <span className={styles.teamSize}>{project.teamSize}</span>
                  </div>
                  <div className={styles.technologies}>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={styles.techTag}>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>
            <div className={styles.noResultsIcon}>🔍</div>
            <h3 className={styles.noResultsTitle}>No projects found</h3>
            <p className={styles.noResultsText}>
              Try adjusting your search or filter criteria
            </p>
            <button className={styles.clearFiltersButton} onClick={clearAllFilters}>
              Clear all filters
            </button>
          </div>
        )}
      </Container>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          open={isModalOpen}
          onClose={closeModal}
        />
      )}
    </main>
  );
};

export default ProjectsPage;
