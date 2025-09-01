"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "./ProjectModal.module.sass";

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    // Disable body scroll when modal is open
    document.body.style.overflow = "hidden";

    // Re-enable body scroll when modal is closed
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalBackdrop} onClick={handleBackdropClick}>
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{project.title}</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className={styles.modalContent}>
          {/* Project Images/Videos Section */}
          <div className={styles.mediaSection}>
            <h3 className={styles.sectionTitle}>Project Showcase</h3>
            <div className={styles.mediaGrid}>
              {/* Project Images */}
              {project.images?.map((image: string, index: number) => (
                <div key={index} className={styles.mediaItem}>
                  <div className={styles.imagePlaceholder}>
                    <div className={styles.iconContainer}>
                      <svg
                        className={styles.icon}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p>Screenshot {index + 1}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Details Section */}
          <div className={styles.detailsSection}>
            <div className={styles.projectOverview}>
              <h3 className={styles.sectionTitle}>Project Overview</h3>
              <p className={styles.detailedDescription}>
                {project.detailedDescription}
              </p>

              <div className={styles.projectMeta}>
                <div className={styles.metaGrid}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Client</span>
                    <span className={styles.metaValue}>{project.client}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Duration</span>
                    <span className={styles.metaValue}>{project.duration}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Team Size</span>
                    <span className={styles.metaValue}>{project.teamSize}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Category</span>
                    <span className={styles.metaValue}>{project.category}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className={styles.technologiesSection}>
              <h3 className={styles.sectionTitle}>Technologies Used</h3>
              <div className={styles.techGrid}>
                {project.technologies.map((tech: string, index: number) => (
                  <div key={index} className={styles.techCard}>
                    <span className={styles.techName}>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className={styles.challengesSection}>
              <div className={styles.challengesGrid}>
                <div className={styles.challengesColumn}>
                  <h3 className={styles.sectionTitle}>Challenges</h3>
                  <ul className={styles.itemsList}>
                    {project.challenges?.map(
                      (challenge: string, index: number) => (
                        <li key={index} className={styles.listItem}>
                          <span className={styles.bulletPoint}>⚡</span>
                          {challenge}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className={styles.solutionsColumn}>
                  <h3 className={styles.sectionTitle}>Solutions</h3>
                  <ul className={styles.itemsList}>
                    {project.solutions?.map(
                      (solution: string, index: number) => (
                        <li key={index} className={styles.listItem}>
                          <span className={styles.bulletPoint}>✅</span>
                          {solution}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className={styles.resultsSection}>
              <h3 className={styles.sectionTitle}>Results & Impact</h3>
              <div className={styles.resultsGrid}>
                {project.results?.map((result: string, index: number) => (
                  <div key={index} className={styles.resultCard}>
                    <div className={styles.resultIcon}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 11l3 3L22 4" />
                        <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.27 0 2.48.26 3.58.74" />
                      </svg>
                    </div>
                    <span className={styles.resultText}>{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
